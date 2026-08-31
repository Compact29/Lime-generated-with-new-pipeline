#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import tempfile
import time
from pathlib import Path
from typing import Any

from PIL import Image


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def figma_nodes(path: Path) -> list[dict[str, Any]]:
    payload = read_json(path)
    if isinstance(payload, list):
        nodes = []
        for item in payload:
            if not isinstance(item, dict):
                continue
            node = item.get("node", item)
            if not isinstance(node, dict):
                continue
            node = dict(node)
            node["__ff_depth"] = item.get("depth", node.get("depth", 0))
            nodes.append(node)
        return nodes
    nodes = payload.get("nodes") if isinstance(payload, dict) else None
    if isinstance(nodes, dict):
        return [
            value["document"]
            for value in nodes.values()
            if isinstance(value, dict) and isinstance(value.get("document"), dict)
        ]
    return []


def crop_figma_reference(reference: Path, figma_json: Path, node_id: str, output: Path) -> bool:
    nodes = figma_nodes(figma_json)
    selected = next((node for node in nodes if str(node.get("id") or "") == node_id), None)
    roots = [node for node in nodes if isinstance(node.get("absoluteBoundingBox"), dict)]
    if not selected or not roots:
        return False
    selected_box = selected.get("absoluteRenderBounds") or selected.get("absoluteBoundingBox")
    if not isinstance(selected_box, dict):
        return False
    root = min(roots, key=lambda node: int(node.get("__ff_depth", node.get("depth", 0)) or 0))
    root_box = root.get("absoluteBoundingBox")
    if not isinstance(root_box, dict):
        return False

    with Image.open(reference) as image:
        scale_x = image.width / max(1.0, float(root_box.get("width") or image.width))
        scale_y = image.height / max(1.0, float(root_box.get("height") or image.height))
        x = (float(selected_box.get("x") or 0) - float(root_box.get("x") or 0)) * scale_x
        y = (float(selected_box.get("y") or 0) - float(root_box.get("y") or 0)) * scale_y
        width = float(selected_box.get("width") or 0) * scale_x
        height = float(selected_box.get("height") or 0) * scale_y
        padding = max(48.0, min(180.0, max(width, height) * 0.35))
        left = max(0, int(x - padding))
        top = max(0, int(y - padding))
        right = min(image.width, int(x + width + padding))
        bottom = min(image.height, int(y + height + padding))
        if right <= left or bottom <= top:
            return False
        output.parent.mkdir(parents=True, exist_ok=True)
        image.crop((left, top, right, bottom)).convert("RGB").save(output, quality=92)
    return True


def find_chromium_executable() -> str:
    configured = os.environ.get("FIGMA_FIGHTER_CHROMIUM_PATH", "").strip()
    if configured and os.path.isfile(configured) and os.access(configured, os.X_OK):
        return configured

    home = Path.home()
    candidates = sorted(home.glob(".cache/ms-playwright/chromium-*/chrome-linux64/chrome"), reverse=True)
    candidates += sorted(home.glob(".cache/ms-playwright/chromium-*/chrome-linux/chrome"), reverse=True)
    for candidate in candidates:
        if candidate.is_file() and os.access(candidate, os.X_OK):
            return candidate.as_posix()

    for binary in ("google-chrome", "google-chrome-stable", "chromium", "chromium-browser"):
        executable = shutil.which(binary)
        if executable:
            return executable
    raise FileNotFoundError("Chromium executable was not found")


def launch_browser(playwright):
    executable = find_chromium_executable()
    launch_args = ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"]
    profile_dir = Path(tempfile.mkdtemp(prefix="figma-fighter-chromium-"))
    process = subprocess.Popen(
        [
            executable,
            "--headless",
            *launch_args,
            "--no-first-run",
            "--no-default-browser-check",
            "--remote-allow-origins=*",
            "--remote-debugging-port=0",
            f"--user-data-dir={profile_dir}",
            "about:blank",
        ],
        stdin=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    port_file = profile_dir / "DevToolsActivePort"
    deadline = time.monotonic() + 10
    while time.monotonic() < deadline and process.poll() is None and not port_file.is_file():
        time.sleep(0.1)
    if not port_file.is_file():
        process.terminate()
        shutil.rmtree(profile_dir, ignore_errors=True)
        raise RuntimeError("Chromium did not expose a DevTools port")
    port = port_file.read_text(encoding="utf-8").splitlines()[0].strip()
    try:
        browser = playwright.chromium.connect_over_cdp(
            f"http://127.0.0.1:{port}",
            timeout=10_000,
        )
    except Exception:
        process.terminate()
        shutil.rmtree(profile_dir, ignore_errors=True)
        raise
    return browser, process, profile_dir


def capture_current(
    url: str,
    selector: str,
    output: Path,
    viewport_width: int,
    viewport_height: int,
    index: int = 0,
    padding: int = 120,
    x: float = 0,
    y: float = 0,
    capture_width: float = 0,
    capture_height: float = 0,
) -> None:
    from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
    from playwright.sync_api import sync_playwright

    output.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as playwright:
        browser, browser_process, profile_dir = launch_browser(playwright)
        try:
            context = browser.new_context(
                viewport={"width": viewport_width, "height": viewport_height},
                device_scale_factor=1,
                reduced_motion="reduce",
            )
            page = context.new_page()
            page.goto(url, wait_until="domcontentloaded", timeout=30_000)
            try:
                page.wait_for_load_state("networkidle", timeout=5_000)
            except PlaywrightTimeoutError:
                pass
            box = None
            scroll = {"x": 0.0, "y": 0.0}
            if selector:
                locator = page.locator(selector).nth(max(0, index))
                locator.wait_for(state="visible", timeout=10_000)
                locator.scroll_into_view_if_needed(timeout=10_000)
                page.wait_for_timeout(300)
                locator.evaluate(
                    "element => { element.style.setProperty('outline', '3px solid #ff2d55', 'important'); "
                    "element.style.setProperty('outline-offset', '4px', 'important'); }"
                )
                box = locator.bounding_box()
                if not box:
                    raise RuntimeError(f"Visible element has no bounding box: {selector} (index {index})")
                scroll = page.evaluate("() => ({ x: window.scrollX || 0, y: window.scrollY || 0 })")

            page_size = page.evaluate(
                "() => ({ width: Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth || 0), "
                "height: Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight || 0) })"
            )
            full_path = output.with_name(f".{output.stem}-full.png")
            page.screenshot(path=full_path.as_posix(), full_page=True, animations="disabled", caret="hide")
            try:
                with Image.open(full_path) as screenshot:
                    scale_x = screenshot.width / max(1.0, float(page_size["width"]))
                    scale_y = screenshot.height / max(1.0, float(page_size["height"]))
                    if box:
                        center_x = float(box["x"]) + float(scroll["x"]) + float(box["width"]) / 2
                        center_y = float(box["y"]) + float(scroll["y"]) + float(box["height"]) / 2
                        width = capture_width or float(box["width"]) + max(0, padding) * 2
                        height = capture_height or float(box["height"]) + max(0, padding) * 2
                        left = center_x - width / 2
                        top = center_y - height / 2
                    else:
                        left = max(0.0, x)
                        top = max(0.0, y)
                        width = capture_width or viewport_width
                        height = capture_height or viewport_height

                    left = max(0.0, min(float(page_size["width"]) - 1, left))
                    top = max(0.0, min(float(page_size["height"]) - 1, top))
                    right = min(float(page_size["width"]), left + max(1.0, width))
                    bottom = min(float(page_size["height"]), top + max(1.0, height))
                    crop = (
                        int(round(left * scale_x)),
                        int(round(top * scale_y)),
                        int(round(right * scale_x)),
                        int(round(bottom * scale_y)),
                    )
                    if crop[2] <= crop[0] or crop[3] <= crop[1]:
                        raise RuntimeError(f"Invalid screenshot crop: {crop}")
                    screenshot.crop(crop).convert("RGB").save(output, format="PNG")
            finally:
                full_path.unlink(missing_ok=True)
            context.close()
        finally:
            browser.close()
            if browser_process is not None:
                browser_process.terminate()
                try:
                    browser_process.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    browser_process.kill()
            if profile_dir is not None:
                shutil.rmtree(profile_dir, ignore_errors=True)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url")
    parser.add_argument("--selector")
    parser.add_argument("--output")
    parser.add_argument("--width", type=int, default=1440)
    parser.add_argument("--height", type=int, default=900)
    parser.add_argument("--viewport-width", type=int)
    parser.add_argument("--viewport-height", type=int)
    parser.add_argument("--index", type=int, default=0)
    parser.add_argument("--padding", type=int, default=120)
    parser.add_argument("--x", type=float, default=0)
    parser.add_argument("--y", type=float, default=0)
    parser.add_argument("--capture-width", type=float, default=0)
    parser.add_argument("--capture-height", type=float, default=0)
    parser.add_argument("--skip-current", action="store_true")
    parser.add_argument("--reference")
    parser.add_argument("--figma-json")
    parser.add_argument("--node-id")
    parser.add_argument("--reference-output")
    args = parser.parse_args()

    output = Path(args.output).resolve() if args.output else None
    reference_written = False
    if args.reference and args.figma_json and args.node_id and args.reference_output:
        reference_written = crop_figma_reference(
            Path(args.reference).resolve(),
            Path(args.figma_json).resolve(),
            args.node_id,
            Path(args.reference_output).resolve(),
        )
    current_error = ""
    if not args.skip_current:
        if not args.url or output is None:
            current_error = "--url and --output are required unless --skip-current is used"
        else:
            try:
                capture_current(
                    args.url,
                    args.selector or "",
                    output,
                    args.viewport_width or args.width,
                    args.viewport_height or args.height,
                    args.index,
                    args.padding,
                    args.x,
                    args.y,
                    args.capture_width,
                    args.capture_height,
                )
            except Exception as error:
                current_error = str(error)
    print(json.dumps({
        "current": output.as_posix() if output and output.is_file() else "",
        "currentError": current_error,
        "referenceWritten": reference_written,
    }))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
