# Component: language_selector

- Kind: `primitive`
- Build order: 5
- Description: Compact locale selector showing the active language.
- Target JSX: `src/refactored/components/language_selector/LanguageSelector.jsx`
- Target CSS: `src/refactored/components/language_selector/LanguageSelector.css`
- Export: `default LanguageSelector`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Flag and language code selector.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `language_selector__default__home__desktop__01` | `home` | `desktop` | `[0.1611, 0.0049, 0.0444, 0.0074]` |
| `language_selector__default__home__mobile__01` | `home` | `mobile` | `[0.2327, 0.003, 0.1164, 0.005]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `language_selector__default__home__desktop__01`
- Normalized bbox: `[0.1611, 0.0049, 0.0444, 0.0074]`
- Pixel bbox: `[231.98, 31.97, 63.94, 48.29]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.832`
- Selected source / target area ratio: `0.809`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205` | [232, 36.5, 64.03, 39] | [232, 36.5, 64.03, 39] | 0.806 | 0.832 | 288 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205" data-figma-node-id={"2001:3205"} data-figma-name={"Button"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3205"} data-figma-name-desktop={"Button"} data-figma-node-id-mobile={"2001:3434"} data-figma-name-mobile={"Button"}>
            <div className="figma-node node-header-button-svg-2001-3206" data-figma-node-id={"2001:3206"} data-figma-name={"SVG"} data-figma-type={"FRAME"} data-figma-class={"node-header-button-svg-2001-3206"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3206"} data-figma-name-desktop={"SVG"} data-figma-node-id-mobile={"2001:3435"} data-figma-name-mobile={"SVG"}>
              <img className="figma-vec-desktop node-header-button-svg-2001-3206-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3206.svg" alt={"SVG"} />
              <img className="figma-vec-mobile node-header-button-svg-2001-3206-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3435.svg" alt={"SVG"} />
            </div>
            <p className="figma-node node-header-button-en-2001-3214" data-figma-node-id={"2001:3214"} data-figma-name={"EN"} data-figma-type={"TEXT"} data-figma-class={"node-header-button-en-2001-3214"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3214"} data-figma-name-desktop={"EN"} data-figma-node-id-mobile={"2001:3443"} data-figma-name-mobile={"EN"}><span className="ff-text-content">{"EN"}</span></p>
          </div>
```

#### Closed source CSS

Selected rules: 5; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4582 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205 {
  box-sizing: border-box;
  position: absolute;
  left: calc(232 * var(--figma-scale));
  top: calc(36.5 * var(--figma-scale));
  width: calc(64.03 * var(--figma-scale));
  height: calc(39 * var(--figma-scale));
  z-index: 2;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(10 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4606 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 {
  box-sizing: border-box;
  position: absolute;
  left: calc(9 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(21 * var(--figma-scale));
  height: calc(21 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4628 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4638 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4654 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-en-2001-3214 {
  box-sizing: border-box;
  position: absolute;
  left: calc(38 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(17.3302 * var(--figma-scale));
  min-height: calc(21 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3206.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3435.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 1440, 792]` | 1 | 0.003 | 162 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `language_selector__default__home__mobile__01`
- Normalized bbox: `[0.2327, 0.003, 0.1164, 0.005]`
- Pixel bbox: `[127.98, 22.84, 64.02, 38.08]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.962`
- Selected source / target area ratio: `1.024`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205` | [128, 22.5, 64.03, 39] | [128, 22.5, 64.03, 39] | 0.976 | 0.962 | 288 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205" data-figma-node-id={"2001:3205"} data-figma-name={"Button"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3205"} data-figma-name-desktop={"Button"} data-figma-node-id-mobile={"2001:3434"} data-figma-name-mobile={"Button"}>
            <div className="figma-node node-header-button-svg-2001-3206" data-figma-node-id={"2001:3206"} data-figma-name={"SVG"} data-figma-type={"FRAME"} data-figma-class={"node-header-button-svg-2001-3206"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3206"} data-figma-name-desktop={"SVG"} data-figma-node-id-mobile={"2001:3435"} data-figma-name-mobile={"SVG"}>
              <img className="figma-vec-desktop node-header-button-svg-2001-3206-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3206.svg" alt={"SVG"} />
              <img className="figma-vec-mobile node-header-button-svg-2001-3206-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3435.svg" alt={"SVG"} />
            </div>
            <p className="figma-node node-header-button-en-2001-3214" data-figma-node-id={"2001:3214"} data-figma-name={"EN"} data-figma-type={"TEXT"} data-figma-class={"node-header-button-en-2001-3214"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3214"} data-figma-name-desktop={"EN"} data-figma-node-id-mobile={"2001:3443"} data-figma-name-mobile={"EN"}><span className="ff-text-content">{"EN"}</span></p>
          </div>
```

#### Closed source CSS

Selected rules: 5; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4594 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205 {
  box-sizing: border-box;
  position: absolute;
  left: calc(128 * var(--figma-scale));
  top: calc(22.5 * var(--figma-scale));
  width: calc(64.03 * var(--figma-scale));
  height: calc(39 * var(--figma-scale));
  z-index: 2;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(10 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4617 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 {
  box-sizing: border-box;
  position: absolute;
  left: calc(9 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(21 * var(--figma-scale));
  height: calc(21 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4641 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4644 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4674 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-en-2001-3214 {
  box-sizing: border-box;
  position: absolute;
  left: calc(38 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(17.3302 * var(--figma-scale));
  min-height: calc(21 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3206.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3435.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 550, 978]` | 1 | 0.005 | 162 |
