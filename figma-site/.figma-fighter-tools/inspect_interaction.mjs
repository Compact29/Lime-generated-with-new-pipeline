#!/usr/bin/env node
const args = process.argv.slice(2);

function value(name, fallback = "") {
  const index = args.indexOf(name);
  return index >= 0 && index + 1 < args.length ? args[index + 1] : fallback;
}

function usage() {
  console.error(`Usage:
  node .figma-fighter-tools/inspect_interaction.mjs --mode desktop|mobile --route /page [target]

Target:
  --selector <css-or-generated-class>
  --node-id <figma-node-id>
  --index <zero-based-index>

Action:
  --action inspect|click|hover       Default: inspect
  --verbose                          Keep the full DOM descriptors

The result includes the target box, computed styles, ancestor stacking contexts,
elements at the target center, Playwright actionability, route/state changes and
post-action visual style changes for the target and its named descendants.`);
}

function compactDescriptor(item) {
  if (!item || typeof item !== "object") return item;
  return {
    element: [item.tag, item.id ? `#${item.id}` : "", ...(item.classes || []).slice(0, 3).map((name) => `.${name}`)].join(""),
    figmaName: item.figmaName || "",
    figmaNodeId: item.figmaNodeId || "",
    containsTarget: Boolean(item.containsTarget),
    insideTarget: Boolean(item.insideTarget),
    pointerEvents: item.styles?.pointerEvents || "",
    position: item.styles?.position || "",
    zIndex: item.styles?.zIndex || "",
    overflow: item.styles?.overflow || "",
    transform: item.styles?.transform || "",
    box: item.box,
    ...(item.createsStackingContext ? { createsStackingContext: true } : {}),
  };
}

function compactStateDescriptor(item) {
  if (!item || typeof item !== "object") return item;
  const styles = item.styles || {};
  return {
    element: [item.tag, item.id ? `#${item.id}` : "", ...(item.classes || []).slice(0, 3).map((name) => `.${name}`)].join(""),
    figmaName: item.figmaName || "",
    figmaNodeId: item.figmaNodeId || "",
    styles: {
      color: styles.color || "",
      backgroundColor: styles.backgroundColor || "",
      backgroundImage: styles.backgroundImage || "",
      borderColor: styles.borderColor || "",
      borderWidth: styles.borderWidth || "",
      borderRadius: styles.borderRadius || "",
      boxShadow: styles.boxShadow || "",
      outline: styles.outline || "",
      opacity: styles.opacity || "",
      transform: styles.transform || "",
    },
  };
}

function compactPerformed(performed) {
  if (!performed || typeof performed !== "object") return performed;
  const after = performed.after || {};
  return {
    ok: Boolean(performed.ok),
    error: performed.error || "",
    styleChanges: performed.styleChanges || [],
    before: performed.before,
    after: {
      url: after.url || "",
      target: compactStateDescriptor(after.target),
      stateNodes: (after.stateNodes || []).slice(0, 10).map(compactStateDescriptor),
      activeElement: after.activeElement,
      visibleDialogs: after.visibleDialogs,
      visibleSurfaces: after.visibleSurfaces,
    },
  };
}

function compactResult(result) {
  const points = (result.points || []).map((point) => {
    const stack = (point.stack || []).slice(0, 3);
    const top = stack[0];
    return {
      name: point.name,
      targetReceivesPointer: Boolean(top?.insideTarget),
      stack: stack.map(compactDescriptor),
    };
  });
  const ancestors = (result.ancestors || [])
    .filter((item, index) => index === 0 || item.createsStackingContext || item.styles?.pointerEvents === "none")
    .slice(0, 6)
    .map(compactDescriptor);
  return {
    routePath: result.routePath,
    mode: result.mode,
    previewUrl: result.previewUrl,
    target: compactDescriptor(result.target),
    hitTests: points,
    relevantAncestors: ancestors,
    document: result.document,
    selector: result.selector,
    index: result.index,
    action: result.action,
    actionability: result.actionability,
    performed: compactPerformed(result.performed),
  };
}

async function main() {
  if (args.includes("--help") || args.includes("-h")) {
    usage();
    return;
  }
  const builderUrl = String(process.env.FIGMA_FIGHTER_BUILDER_URL || "").replace(/\/+$/, "");
  const jobId = String(process.env.FIGMA_FIGHTER_JOB_ID || "");
  if (!builderUrl || !jobId) throw new Error("Interaction inspection is unavailable outside a Figma Fighter agent session.");
  const action = value("--action", "inspect");
  if (!new Set(["inspect", "click", "hover"]).has(action)) throw new Error(`Unsupported action: ${action}`);
  const payload = {
    mode: value("--mode", "desktop"),
    routePath: value("--route", process.env.FIGMA_FIGHTER_PREVIEW_ROUTE || "/"),
    selector: value("--selector"),
    nodeId: value("--node-id"),
    index: Math.max(0, Number(value("--index", "0")) || 0),
    action,
  };
  if (!payload.selector && !payload.nodeId) throw new Error("Pass --selector or --node-id.");
  const response = await fetch(`${builderUrl}/api/jobs/${encodeURIComponent(jobId)}/agent/inspect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || `Interaction inspection failed (${response.status})`);
  console.log(JSON.stringify(args.includes("--verbose") ? result : compactResult(result), null, 2));
}

main().catch((error) => {
  console.error(error.message || String(error));
  process.exit(1);
});
