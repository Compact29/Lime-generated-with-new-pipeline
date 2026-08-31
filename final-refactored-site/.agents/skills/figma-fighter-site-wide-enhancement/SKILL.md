---
name: figma-fighter-site-wide-enhancement
description: "Use for broad Figma Fighter site-wide requests that combine several concerns, such as: review the whole site, make all buttons and links work, add suitable animations, wire forms, improve interactions, or 'do everything at once'. Do not use for one clearly scoped element edit."
---

# Figma Fighter Site-Wide Enhancement

Use this skill when one request spans most of a generated site or combines
navigation, buttons, links, animations, forms, and CMS behavior.

## Operating Principle

Work from a bounded inventory into narrow source edits. The goal is a coherent
useful pass over the site, not exhaustive knowledge of every generated node.

The workflow is adaptive. Skip a step when the prompt already supplies that
information, and continue from source if visual capture is unavailable.

## 1. Make A Small Plan

Create at most five outcome-based batches, normally:

1. Inventory visible interactions and destinations.
2. Wire navigation, links, and CTA buttons.
3. Make forms functional and connect submissions to CMS.
4. Add a restrained animation system.
5. Perform one build and representative visual checks.

Do not make a separate task for every generated node.

For each batch, know both:

- **start evidence**: the labels/classes/routes needed to edit safely;
- **done condition**: the behavior or check that closes the batch.

Do not leave "inventory" in progress while repeatedly exploring later batches.

## 2. Start With Visual Reconnaissance

For vague site-wide visual requests, inspect the rendered site before broad
source exploration.

- Capture up to three representative desktop views to see the major sections.
  Prefer top, middle, and bottom or known section coordinates.
- Capture mobile views for navigation, forms, or layouts whose interactions
  differ from desktop. Do not duplicate every desktop screenshot automatically.
- Analyze screenshots with `.figma-fighter-tools/vision_analyze.mjs`. Make one
  diagnostic attempt first. If the vision model is unavailable, do not capture
  more screenshots or retry vision during this task.
- Record a compact inventory: visible label, section, apparent control type,
  likely action, and whether mobile has a corresponding control.

Examples:

```bash
node .figma-fighter-tools/screenshot_element.mjs --mode desktop --x 0 --y 0 --width 1440 --height 1000 --output audit-top.png
node .figma-fighter-tools/screenshot_element.mjs --mode desktop --x 0 --y 1000 --width 1440 --height 1200 --output audit-middle.png
node .figma-fighter-tools/screenshot_element.mjs --mode mobile --x 0 --y 0 --width 375 --height 900 --output audit-mobile-top.png
node .figma-fighter-tools/vision_analyze.mjs audit-top.png "List visible controls, section names, and suitable restrained interactions."
```

Visual reconnaissance is especially valuable for phrases such as "the whole
site", "all buttons", "add some animations", or "make it feel alive". It is
not a substitute for checking routes, handlers, and CMS code. When vision is
unavailable, make one compact source inventory instead.

Finish reconnaissance with an **action ledger**, not prose notes. Each row is:

`label/section -> intended behavior -> source anchor -> confidence`

Start implementation once the ledger contains the main navigation/CTA group
and any requested form. Unknown low-value controls may remain unresolved and be
reported at the end.

## 3. Map Only The Identified Elements To Source

Search for labels and Figma names from the inventory in small groups. Prefer
the compact helper because generated JSX often places one complete node on a
very long line.

```bash
node .figma-fighter-tools/search_generated.mjs "Hire me|View project|Contact" --type jsx --limit 16
node .figma-fighter-tools/search_generated.mjs "Send Here|Your email|About project" --type jsx --limit 16
```

Never call the helper with an empty pattern to dump the page. Do not use a high
limit as a substitute for deciding what you need to find.

Normally spend no more than six focused inspection actions before the first
edit. This is a soft budget: exceed it only when a named blocker prevents a
safe change, and make each extra read answer that blocker. Reading generated
code "to understand the whole structure" is not a blocker.

After a match identifies a class and line, use one focused `sed` or `rg` read
only when the complete markup or nearby parent is needed. If a search is
ambiguous, narrow it by visible label, mode, Figma name, or class before reading
larger ranges.

Read routing files only for navigation behavior. Read CMS files only for the
form batch. Avoid broad CSS reads for animation discovery; append focused,
scoped interaction rules when existing selectors are already known.

Do not search separately for every repeated button/card. Find the shared class
or parent pattern once and apply one scoped behavior when appropriate.

## 4. Choose Honest Destinations

Make controls functional without inventing unsupported destinations.

- Existing generated route: use `window.figmaFighterNavigate?.("/route")`.
- Section navigation: scroll to a stable generated section class or add a small
  semantic anchor.
- Contact or hire CTA: scroll to or focus the existing contact form.
- Project card: use an existing URL from source when present. Do not fabricate
  portfolio, social, email, telephone, or external URLs.
- Decorative shapes that do not look or read like controls should remain
  decorative.
- If an apparent control has no inferable destination, preserve it and mention
  the unresolved destination instead of silently linking it somewhere random.

Prefer semantic `<a>` and `<button>` elements when changing markup is safe.
Otherwise add focused click, keyboard, role, and cursor behavior while
preserving generated classes and appearance.

## 5. Add A Coherent Animation System

Use a small reusable vocabulary instead of unrelated effects on every node:

- links: underline or highlight transition;
- buttons and cards: subtle hover lift, press state, and focus-visible state;
- major content sections: restrained reveal only when it improves the page;
- mobile controls: avoid hover-only behavior;
- preserve the original Figma colors, dimensions, images, and typography.

Support `prefers-reduced-motion: reduce`. Avoid constant motion, large layout
shifts, animation on purely decorative clutter, and effects that obscure text
or controls.

## 6. Forms And CMS

When the request includes a form or CMS, invoke the `figma-fighter-cms` skill
and follow its fixed schema and submission workflow. Do not rediscover the CMS
implementation or build a second admin interface.

The visual inventory should identify the visible fields and submit button. The
CMS schema and payload must use exactly those fields unless the user asks for
additional data.

If the user explicitly requests a form but two focused searches show that the
design only contains a contact CTA, stop looking for hidden fields. Add the
form at that CTA/contact section, preserving its visual language, and wire it
through the CMS skill.

## 7. Execute Before Over-Exploring

Once the inventory and first source matches are sufficient, begin editing.
Do not postpone every edit until every section and CSS rule has been read.

If one batch is unclear, continue with the independent clear batches rather
than blocking the entire request. Update the task list as batches complete.

Prefer small patches with stable nearby anchors. If a generated-line patch
fails once, reread only that exact line/parent and retry with a smaller anchor.
Do not respond by rereading large ranges or generating a custom rewrite script
for ordinary JSX changes.

## 8. Verification

- Run one `npm run build` near the end because site-wide work normally changes
  JSX imports, handlers, and form markup.
- If visual analysis worked earlier, capture at most three representative
  after-screenshots: header/navigation, one CTA/card area, and form. If vision
  was unavailable, do not capture screenshots that cannot be interpreted.
- Test destinations from source or runtime when practical. A successful build
  alone does not prove that links lead to the intended sections.
- Report completed interaction groups and any destinations that could not be
  inferred safely.
- After a successful build and focused checks, finish. Do not write PNG
  decoders, sample arbitrary pixels, install QA dependencies, or audit unrelated
  sections unless the user specifically requested pixel-level verification.

## Failure Recovery

- If screenshot capture or vision fails, mark it unavailable and continue with
  compact source search. Do not retry or debug capture infrastructure.
- If a compact search is empty, refine the pattern once, then use a focused
  source read. Do not fall back to dumping the whole generated page.
- If time is running short, finish and verify the highest-value coherent batch
  instead of leaving many exploratory reads and no edits.
- On a follow-up naming a small set of pages where the previous site-wide edit
  failed, leave site-wide discovery mode. Compare each failing page with one
  working page, isolate one structural difference, and patch only that
  difference. Trust the reported failure even when static code looks correct.
- Do not debug screenshot routing, preview servers, ports, or browser fallback
  from inside a website-editing task. One failed capture makes that route
  unavailable for the task; continue from focused source evidence.
- Do not place temporary force-open or force-visible CSS in project files.
