#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function value(name, fallback = "") {
  const index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : fallback;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function usage() {
  console.error(`Usage:
  node .figma-fighter-tools/search_generated.mjs <pattern> [options]

Options:
  --root <path>       Search root, default src/generated
  --type jsx|css|all  File type, default all
  --limit <number>    Maximum matches, default 16
  --fixed             Treat pattern as literal text

The output intentionally summarizes generated nodes and CSS rules. Use rg or
sed afterwards when you need complete source around one identified match.`);
}

function walk(root) {
  const files = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    let stat;
    try {
      stat = fs.statSync(current);
    } catch {
      continue;
    }
    if (stat.isFile()) {
      files.push(current);
      continue;
    }
    if (!stat.isDirectory()) continue;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (["node_modules", "dist", ".git"].includes(entry.name)) continue;
      stack.push(path.join(current, entry.name));
    }
  }
  return files.sort();
}

function attr(source, name) {
  const match = source.match(new RegExp(`${escapeRegExp(name)}=(?:\\{)?["']([^"']*)["'](?:\\})?`));
  return match?.[1] || "";
}

function compactText(source) {
  const expression = source.match(/>\s*\{["'`]([^"'`]*)["'`]\}\s*</);
  const plain = source.match(/>([^<>{}][^<]{0,180})</);
  return (expression?.[1] || plain?.[1] || "")
    .replace(/\\n/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);
}

function summarizeJsx(file, text, matcher, limit) {
  const results = [];
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length && results.length < limit; index += 1) {
    const line = lines[index];
    if (!matcher.test(line)) continue;
    const opening = line.match(/<([A-Za-z][\w.]*)\s+([^>]*?)(?:\/>|>)/);
    const attrs = opening?.[2] || line;
    const className = attr(attrs, "className");
    const figmaName = attr(attrs, "data-figma-name");
    const nodeId = attr(attrs, "data-figma-node-id");
    const variant = attr(attrs, "data-figma-variant");
    const textValue = compactText(line);
    const details = [
      className && `class=${className}`,
      figmaName && `name=${figmaName}`,
      nodeId && `node=${nodeId}`,
      variant && `variant=${variant}`,
      textValue && `text=${textValue}`,
    ].filter(Boolean);
    results.push(`${file}:${index + 1}\n  <${opening?.[1] || "node"}> ${details.join("; ")}`);
  }
  return results;
}

function lineNumberAt(text, offset) {
  let count = 1;
  for (let index = 0; index < offset; index += 1) {
    if (text.charCodeAt(index) === 10) count += 1;
  }
  return count;
}

function summarizeCss(file, text, matcher, limit) {
  const results = [];
  for (const match of text.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const rule = `${match[1]} {${match[2]}}`;
    if (!matcher.test(rule)) continue;
    const selector = match[1].replace(/\s+/g, " ").trim().slice(0, 300);
    const declarations = match[2]
      .split(";")
      .map((item) => item.replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .slice(0, 10)
      .join("; ");
    results.push(`${file}:${lineNumberAt(text, match.index)}\n  ${selector} { ${declarations}${declarations ? ";" : ""} }`);
    if (results.length >= limit) break;
  }
  return results;
}

function main() {
  if (args.includes("--help") || args.includes("-h") || !args[0] || args[0].startsWith("--")) {
    usage();
    process.exitCode = args.includes("--help") || args.includes("-h") ? 0 : 2;
    return;
  }

  const pattern = args[0];
  const root = path.resolve(value("--root", "src/generated"));
  const type = value("--type", "all").toLowerCase();
  const parsedLimit = Number.parseInt(value("--limit", "16"), 10);
  const limit = Number.isFinite(parsedLimit) ? Math.max(1, Math.min(parsedLimit, 100)) : 16;
  let matcher;
  try {
    matcher = new RegExp(args.includes("--fixed") ? escapeRegExp(pattern) : pattern, "i");
  } catch (error) {
    throw new Error(`Invalid search pattern: ${error.message}`);
  }

  const allowed = new Set(
    type === "jsx" ? [".jsx", ".tsx"] : type === "css" ? [".css", ".scss"] : [".jsx", ".tsx", ".css", ".scss"],
  );
  const results = [];
  for (const filePath of walk(root)) {
    if (!allowed.has(path.extname(filePath).toLowerCase())) continue;
    const text = fs.readFileSync(filePath, "utf8");
    const relative = path.relative(process.cwd(), filePath).replace(/\\/g, "/");
    const remaining = limit - results.length;
    const matches = [".css", ".scss"].includes(path.extname(filePath).toLowerCase())
      ? summarizeCss(relative, text, matcher, remaining)
      : summarizeJsx(relative, text, matcher, remaining);
    results.push(...matches);
    if (results.length >= limit) break;
  }

  if (!results.length) {
    console.log("No generated source matches.");
    process.exitCode = 1;
    return;
  }
  console.log(results.join("\n"));
}

try {
  main();
} catch (error) {
  console.error(error.message || String(error));
  process.exitCode = 1;
}
