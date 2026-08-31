#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_PROMPT = [
  "Analyze this image for a web-code editing agent.",
  "Describe the relevant visual details, UI state, layout, colors, and any visible content that could matter for editing the site.",
  "If text is visible and relevant, include it, but keep the answer concise.",
].join(" ");

const MIME_BY_EXT = new Map([
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
]);

function usage() {
  console.error(`Usage:
  node .figma-fighter-tools/vision_analyze.mjs <image-path> [question]

Environment:
  LLM_API_KEY or OPENAI_API_KEY       required
  LLM_BASE_URL or OPENAI_BASE_URL     optional, defaults to https://api.openai.com/v1
  FIGMA_FIGHTER_VISION_MODEL          optional override
`);
}

function normalizeApiModel(model, baseUrl) {
  const value = String(model || "").trim() || "gpt-4.1-mini";
  const normalizedBase = String(baseUrl || "").toLowerCase();
  if (normalizedBase.includes("api.openai.com") && value.startsWith("openai/")) {
    return value.slice("openai/".length);
  }
  if (normalizedBase.includes("api.moonshot.ai") && value.startsWith("moonshot/")) {
    return value.slice("moonshot/".length);
  }
  return value;
}

function imageMime(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_BY_EXT.get(ext) || "image/png";
}

async function main() {
  const imageArg = process.argv[2];
  const question = process.argv.slice(3).join(" ").trim() || DEFAULT_PROMPT;
  if (!imageArg || imageArg === "--help" || imageArg === "-h") {
    usage();
    process.exit(imageArg ? 0 : 2);
  }

  const apiKey = process.env.LLM_API_KEY || process.env.OPENAI_API_KEY || "";
  if (!apiKey) {
    throw new Error("Missing LLM_API_KEY or OPENAI_API_KEY in environment.");
  }

  const baseUrl = (process.env.LLM_BASE_URL || process.env.OPENAI_BASE_URL || "https://api.openai.com/v1").replace(/\/+$/, "");
  const defaultVisionModel = baseUrl.toLowerCase().includes("api.openai.com")
    ? "gpt-4o-mini"
    : process.env.LLM_MODEL || "gpt-4.1-mini";
  const model = normalizeApiModel(
    process.env.FIGMA_FIGHTER_VISION_MODEL || defaultVisionModel,
    baseUrl,
  );
  const imagePath = path.resolve(process.cwd(), imageArg);
  const data = await fs.readFile(imagePath);
  const dataUrl = `data:${imageMime(imagePath)};base64,${data.toString("base64")}`;

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: [
            { type: "image_url", image_url: { url: dataUrl } },
            { type: "text", text: question },
          ],
        },
      ],
    }),
  });

  const bodyText = await response.text();
  if (!response.ok) {
    throw new Error(`Vision request failed (${response.status}): ${bodyText.slice(0, 1200)}`);
  }
  const body = JSON.parse(bodyText);
  const content = body?.choices?.[0]?.message?.content;
  const outputText = Array.isArray(content)
    ? content.map((item) => item?.text || item?.value || "").join("\n").trim()
    : String(content || "").trim();
  if (!outputText) {
    throw new Error(`Vision response did not contain message content: ${bodyText.slice(0, 1200)}`);
  }
  console.log(outputText);
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
