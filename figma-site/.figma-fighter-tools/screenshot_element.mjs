#!/usr/bin/env node
const args = process.argv.slice(2);

function value(name, fallback = "") {
  const index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : fallback;
}

function numberValue(name, fallback) {
  const parsed = Number(value(name, ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function usage() {
  console.error(`Usage:
  node .figma-fighter-tools/screenshot_element.mjs --mode desktop|mobile [target options]

Target options:
  --route </page-path>                Exact generated page route
  --selector <css-or-generated-class>  CSS selector or generated class
  --node-id <figma-node-id>            Figma node id
  --index <zero-based-index>           Matching element index, default 0
  --padding <pixels>                   Context around element, default 120
  --x <px> --y <px>                    Capture coordinates when no element target
  --width <px> --height <px>           Capture size or maximum element crop size
  --output <name.png>                  Output file name

The builder server and project preview must be available. Studio is used only as a fallback.`);
}

async function main() {
  if (args.includes("--help") || args.includes("-h")) {
    usage();
    return;
  }
  const builderUrl = String(process.env.FIGMA_FIGHTER_BUILDER_URL || "").replace(/\/+$/, "");
  const jobId = String(process.env.FIGMA_FIGHTER_JOB_ID || "");
  if (!builderUrl || !jobId) {
    throw new Error("Screenshot environment is unavailable outside a Figma Fighter agent session.");
  }

  const payload = {
    mode: value("--mode", "desktop"),
    selector: value("--selector"),
    nodeId: value("--node-id"),
    index: numberValue("--index", 0),
    padding: numberValue("--padding", 120),
    x: numberValue("--x", 0),
    y: numberValue("--y", 0),
    width: numberValue("--width", 0),
    height: numberValue("--height", 0),
    routePath: value("--route", process.env.FIGMA_FIGHTER_PREVIEW_ROUTE || "/"),
    outputName: value("--output"),
  };
  const createResponse = await fetch(`${builderUrl}/api/jobs/${encodeURIComponent(jobId)}/agent/screenshots`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const created = await createResponse.json().catch(() => ({}));
  if (!createResponse.ok) throw new Error(created.error || `Screenshot request failed (${createResponse.status})`);

  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    const response = await fetch(`${builderUrl}/api/jobs/${encodeURIComponent(jobId)}/agent/screenshots/${encodeURIComponent(created.id)}`);
    const state = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(state.error || `Screenshot status failed (${response.status})`);
    if (state.status === "done") {
      console.log(`route: ${state.routePath || payload.routePath}`);
      console.log(state.workspacePath);
      return;
    }
    if (state.status === "error") throw new Error(state.error || "Studio could not capture the screenshot");
  }
  throw new Error("Screenshot request timed out. Keep the builder server and project preview running.");
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
