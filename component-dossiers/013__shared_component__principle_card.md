# Component: principle_card

- Kind: `shared_component`
- Build order: 13
- Description: Brand principle card with lifestyle photography and a linked topic.
- Target JSX: `src/refactored/components/principle_card/PrincipleCard.jsx`
- Target CSS: `src/refactored/components/principle_card/PrincipleCard.css`
- Export: `default PrincipleCard`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard core principle carousel card.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `principle_card__default__home__desktop__01` | `home` | `desktop` | `[0.0639, 0.5149, 0.3389, 0.0674]` |
| `principle_card__default__home__desktop__02` | `home` | `desktop` | `[0.4194, 0.5149, 0.3389, 0.0674]` |
| `principle_card__default__home__desktop__03` | `home` | `desktop` | `[0.775, 0.5149, 0.225, 0.0674]` |
| `principle_card__default__home__mobile__01` | `home` | `mobile` | `[0.0509, 0.5392, 0.8982, 0.0573]` |
| `principle_card__default__home__mobile__02` | `home` | `mobile` | `[0.9636, 0.5392, 0.0364, 0.0573]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `principle_card__default__home__desktop__01`
- Normalized bbox: `[0.0639, 0.5149, 0.3389, 0.0674]`
- Pixel bbox: `[92.02, 3359.72, 488.02, 439.79]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.938`
- Selected source / target area ratio: `1.045`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-main-region_-_listbox-option-2001-3053` | [80, 3360.23, 512, 438] | [80, 3360.23, 512, 438] | 0.949 | 0.938 | 144 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_listbox-2001-3052 > <div>.node-main-region_-_listbox-option-2001-3053`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-main-region_-_listbox-option-2001-3053" data-figma-node-id={"2001:3053"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3053"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3053"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3279"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054" data-figma-node-id={"2001:3054"} data-figma-name={"Figure → Figure → Link → SAFETY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3054"} data-figma-name-desktop={"Figure → Figure → Link → SAFETY.png"} data-figma-node-id-mobile={"2001:3280"} data-figma-name-mobile={"Figure → Figure → Link → SAFETY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055" data-figma-node-id={"2001:3055"} data-figma-name={"Figure → Figcaption → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3055"} data-figma-name-desktop={"Figure → Figcaption → Link → Safety"} data-figma-node-id-mobile={"2001:3281"} data-figma-name-mobile={"Figure → Figcaption → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
              </div>
```

#### Closed source CSS

Selected rules: 3; context rules for variables: 2.

```css
/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2 */
.ff-page-shell[data-page-key="page-1"] .figma-root {
  position: relative;
  --figma-desktop-base-width: 1440;
  --figma-desktop-base-height: 6524.7798;
  --figma-mobile-base-width: 550;
  --figma-mobile-base-height: 7614.3101;
  --figma-base-width: var(--figma-desktop-base-width);
  --figma-base-height: var(--figma-desktop-base-height);
  --figma-scale: 1px;
  width: calc(var(--figma-base-width) * var(--figma-scale));
  min-width: calc(var(--figma-base-width) * var(--figma-scale));
  height: calc(var(--figma-base-height) * var(--figma-scale));
  min-height: calc(var(--figma-base-height) * var(--figma-scale));
  margin: 0 auto;
  flex: 0 0 auto;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:18 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] {
  --figma-base-width: var(--figma-desktop-base-width);
  --figma-base-height: var(--figma-desktop-base-height);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1713 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3053 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1733 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: 0;
  width: calc(488 * var(--figma-scale));
  height: calc(380 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1765 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(409 * var(--figma-scale));
  width: calc(63.1731 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(30 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `principle_card__default__home__mobile__01`
- Normalized bbox: `[0.0509, 0.5392, 0.8982, 0.0573]`
- Pixel bbox: `[28, 4106.01, 494.01, 436.34]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.936`
- Selected source / target area ratio: `0.973`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-main-region_-_listbox-option-2001-3053` | [24, 4106.19, 502, 417.67] | [24, 4106.19, 502, 417.67] | 0.943 | 0.936 | 144 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_listbox-2001-3052 > <div>.node-main-region_-_listbox-option-2001-3053`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-main-region_-_listbox-option-2001-3053" data-figma-node-id={"2001:3053"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3053"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3053"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3279"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054" data-figma-node-id={"2001:3054"} data-figma-name={"Figure → Figure → Link → SAFETY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3054"} data-figma-name-desktop={"Figure → Figure → Link → SAFETY.png"} data-figma-node-id-mobile={"2001:3280"} data-figma-name-mobile={"Figure → Figure → Link → SAFETY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055" data-figma-node-id={"2001:3055"} data-figma-name={"Figure → Figcaption → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3055"} data-figma-name-desktop={"Figure → Figcaption → Link → Safety"} data-figma-node-id-mobile={"2001:3281"} data-figma-name-mobile={"Figure → Figcaption → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
              </div>
```

#### Closed source CSS

Selected rules: 3; context rules for variables: 2.

```css
/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2 */
.ff-page-shell[data-page-key="page-1"] .figma-root {
  position: relative;
  --figma-desktop-base-width: 1440;
  --figma-desktop-base-height: 6524.7798;
  --figma-mobile-base-width: 550;
  --figma-mobile-base-height: 7614.3101;
  --figma-base-width: var(--figma-desktop-base-width);
  --figma-base-height: var(--figma-desktop-base-height);
  --figma-scale: 1px;
  width: calc(var(--figma-base-width) * var(--figma-scale));
  min-width: calc(var(--figma-base-width) * var(--figma-scale));
  height: calc(var(--figma-base-height) * var(--figma-scale));
  min-height: calc(var(--figma-base-height) * var(--figma-scale));
  margin: 0 auto;
  flex: 0 0 auto;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:22 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] {
  --figma-base-width: var(--figma-mobile-base-width);
  --figma-base-height: var(--figma-mobile-base-height);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1723 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3053 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1749 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: 0;
  width: calc(494 * var(--figma-scale));
  height: calc(384.67 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/c07e2fa32325.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(494 * var(--figma-scale)) calc(384.67 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1786 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: calc(396.67 * var(--figma-scale));
  width: calc(44.2842 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/c07e2fa32325.jpg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
