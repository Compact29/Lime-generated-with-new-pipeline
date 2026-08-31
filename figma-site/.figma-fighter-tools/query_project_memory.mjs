#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const value = (name, fallback = "") => {
  const index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : fallback;
};
const memoryDir = path.resolve(process.cwd(), ".figma-fighter-memory");
const readJson = (name, fallback) => {
  try { return JSON.parse(readFileSync(path.join(memoryDir, name), "utf8")); } catch { return fallback; }
};
const normalizeRoute = (route) => (`/${String(route || "").trim().replace(/^\/+|\/+$/g, "")}`).replace(/^\/$/, "/");
const words = (text) => new Set(String(text || "").toLowerCase().match(/[a-zа-яё0-9_-]{3,}/gi) || []);
const overlap = (a, b) => [...a].filter((item) => b.has(item)).length;

if (args.includes("--help") || args.includes("-h")) {
  console.log("Usage: node .figma-fighter-tools/query_project_memory.mjs [--tag TAG] [--route /page] [--file PATH] [--text QUERY] [--limit 8]");
  process.exit(0);
}
if (!existsSync(memoryDir)) throw new Error("Project memory is not initialized yet.");

const tag = value("--tag");
const route = value("--route") ? normalizeRoute(value("--route")) : "";
const file = value("--file");
const query = words(value("--text"));
const limit = Math.max(1, Math.min(30, Number(value("--limit", "8")) || 8));
const map = readJson("project-map.json", { pages: [] });
const state = readJson("project-state.json", { targets: {}, files: {} });
const changes = (() => {
  try {
    return readFileSync(path.join(memoryDir, "changes.jsonl"), "utf8").split(/\r?\n/).filter(Boolean).slice(-240).flatMap((line) => {
      try { return [JSON.parse(line)]; } catch { return []; }
    });
  } catch { return []; }
})();
const score = (entry) => {
  let result = 0;
  if (tag && (entry.tag === tag || entry.targets?.some((target) => target.tag === tag))) result += 20;
  if (route && (entry.routePath === route || entry.targets?.some((target) => target.routePath === route))) result += 10;
  if (file && (entry.file === file || entry.changedFiles?.includes(file))) result += 8;
  result += overlap(words(JSON.stringify(entry)), query);
  return result;
};
const ranked = (items) => items.map((entry) => ({ entry, score: score(entry) })).filter((item) => item.score > 0).sort((a, b) => b.score - a.score).slice(0, limit).map((item) => item.entry);

console.log(JSON.stringify({
  pages: ranked(map.pages || []),
  targets: ranked(Object.values(state.targets || {})),
  files: ranked(Object.entries(state.files || {}).map(([name, fact]) => ({ file: name, ...fact }))),
  changes: ranked(changes.reverse()),
}, null, 2));

