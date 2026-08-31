# Component: brand_logo

- Kind: `primitive`
- Build order: 2
- Description: Lime brand mark used for site identification.
- Target JSX: `src/refactored/components/brand_logo/BrandLogo.jsx`
- Target CSS: `src/refactored/components/brand_logo/BrandLogo.css`
- Export: `default BrandLogo`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: inverse

Description: Light brand mark for photographic or dark backgrounds.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `brand_logo__inverse__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.0055, 0.0778, 0.0058]` |
| `brand_logo__inverse__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.0035, 0.16, 0.0039]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `brand_logo__inverse__home__desktop__01`
- Normalized bbox: `[0.0556, 0.0055, 0.0778, 0.0058]`
- Pixel bbox: `[80.06, 35.89, 112.03, 37.84]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.927`
- Selected source / target area ratio: `1.052`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197` | [80, 36.09, 112, 39.81] | [80, 36.09, 112, 39.81] | 0.939 | 0.927 | 284 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197" data-figma-node-id={"2001:3197"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3197"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3426"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3197.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3426.svg" alt={"Link - home → SVG"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4534 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(36.0898 * var(--figma-scale));
  width: calc(112 * var(--figma-scale));
  height: calc(39.81 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4556 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4566 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3197.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3426.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 1440, 792]` | 1 | 0.004 | 162 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `brand_logo__inverse__home__mobile__01`
- Normalized bbox: `[0.0436, 0.0035, 0.16, 0.0039]`
- Pixel bbox: `[23.98, 26.65, 88, 29.7]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.933`
- Selected source / target area ratio: `1.053`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197` | [24, 26.36, 88, 31.27] | [24, 26.36, 88, 31.27] | 0.949 | 0.933 | 284 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197" data-figma-node-id={"2001:3197"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3197"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3426"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3197.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3426.svg" alt={"Link - home → SVG"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4545 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(26.3604 * var(--figma-scale));
  width: calc(88 * var(--figma-scale));
  height: calc(31.27 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4569 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4572 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3197.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3426.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 550, 978]` | 1 | 0.005 | 162 |

## Variant: brand

Description: Green brand mark for dark neutral backgrounds.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `brand_logo__brand__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.9065, 0.1111, 0.0086]` |
| `brand_logo__brand__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.8953, 0.1455, 0.0043]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `brand_logo__brand__home__desktop__01`
- Normalized bbox: `[0.0556, 0.9065, 0.1111, 0.0086]`
- Pixel bbox: `[80.06, 5914.91, 159.98, 56.12]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.962`
- Selected source / target area ratio: `1.014`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153` | [80, 5914.78, 160, 56.88] | [80, 5914.78, 160, 56.88] | 0.986 | 0.962 | 240 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153" data-figma-node-id={"2001:3153"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3153"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3368"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3153.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3368.svg" alt={"Link - home → SVG"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3311 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(160 * var(--figma-scale));
  height: calc(56.8809 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3333 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3343 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3153.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3368.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `brand_logo__brand__home__mobile__01`
- Normalized bbox: `[0.0436, 0.8953, 0.1455, 0.0043]`
- Pixel bbox: `[23.98, 6817.71, 80.02, 32.74]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.814`
- Selected source / target area ratio: `1.25`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153` | [24, 6817.19, 96, 34.13] | [24, 6817.19, 96, 34.13] | 0.799 | 0.814 | 240 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153" data-figma-node-id={"2001:3153"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3153"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3368"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3153.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3368.svg" alt={"Link - home → SVG"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3322 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(64 * var(--figma-scale));
  width: calc(96 * var(--figma-scale));
  height: calc(34.1309 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3346 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3349 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3153.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3368.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
