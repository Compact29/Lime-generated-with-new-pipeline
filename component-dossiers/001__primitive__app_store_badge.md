# Component: app_store_badge

- Kind: `primitive`
- Build order: 1
- Description: Branded marketplace badge linking to a mobile app download.
- Target JSX: `src/refactored/components/app_store_badge/AppStoreBadge.jsx`
- Target CSS: `src/refactored/components/app_store_badge/AppStoreBadge.css`
- Export: `default AppStoreBadge`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: apple

Description: Apple App Store download badge.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `app_store_badge__apple__home__desktop__01` | `home` | `desktop` | `[0.5819, 0.823, 0.1042, 0.0078]` |
| `app_store_badge__apple__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.8676, 0.2727, 0.0066]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_store_badge__apple__home__desktop__01`
- Normalized bbox: `[0.5819, 0.823, 0.1042, 0.0078]`
- Pixel bbox: `[837.94, 5370.07, 150.05, 50.89]`
- Resolution: **low_confidence_anchor**, confidence **low**, best score `0.251`
- Selected source / target area ratio: `5.123`

> **Manual review required:** Selected source covers 5.12× the manifest bbox area. The source may aggregate this component with adjacent visual content.
> **Manual review required:** The same generated JSX root `<div>.node-div-footercta-div-flex-div-flex-2001-3112` was selected for multiple semantic components/variants: `primitive::app_store_badge:apple`, `primitive::app_store_badge:google`. Bbox alone cannot split this source node.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-footercta-div-flex-div-flex-2001-3112` | [838.33, 5357.89, 521.67, 75] | [838.33, 5357.89, 521.67, 75] | 0.195 | 0.251 | 233 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 > <div>.node-div-footercta-div-flex-div-flex-2001-3112`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3241 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(393.8691 * var(--figma-scale));
  width: calc(521.67 * var(--figma-scale));
  height: calc(75 * var(--figma-scale));
  z-index: 2;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3263 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3273 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_store_badge__apple__home__mobile__01`
- Normalized bbox: `[0.0436, 0.8676, 0.2727, 0.0066]`
- Pixel bbox: `[23.98, 6606.77, 149.98, 50.26]`
- Resolution: **low_confidence_anchor**, confidence **low**, best score `0.258`
- Selected source / target area ratio: `4.995`

> **Manual review required:** Selected source covers 4.99× the manifest bbox area. The source may aggregate this component with adjacent visual content.
> **Manual review required:** The same generated JSX root `<div>.node-div-footercta-div-flex-div-flex-2001-3112` was selected for multiple semantic components/variants: `primitive::app_store_badge:apple`, `primitive::app_store_badge:google`. Bbox alone cannot split this source node.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-footercta-div-flex-div-flex-2001-3112` | [24, 6594.69, 502, 75] | [24, 6594.69, 502, 75] | 0.2 | 0.258 | 233 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 > <div>.node-div-footercta-div-flex-div-flex-2001-3112`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3252 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(61.5 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(75 * var(--figma-scale));
  z-index: 2;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3276 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3279 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-m {
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

- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

## Variant: google

Description: Google Play download badge.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `app_store_badge__google__home__desktop__01` | `home` | `desktop` | `[0.6972, 0.823, 0.1181, 0.0078]` |
| `app_store_badge__google__home__mobile__01` | `home` | `mobile` | `[0.3436, 0.8676, 0.3091, 0.0066]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_store_badge__google__home__desktop__01`
- Normalized bbox: `[0.6972, 0.823, 0.1181, 0.0078]`
- Pixel bbox: `[1003.97, 5370.07, 170.06, 50.89]`
- Resolution: **low_confidence_anchor**, confidence **low**, best score `0.282`
- Selected source / target area ratio: `4.52`

> **Manual review required:** Selected source covers 4.52× the manifest bbox area. The source may aggregate this component with adjacent visual content.
> **Manual review required:** The same generated JSX root `<div>.node-div-footercta-div-flex-div-flex-2001-3112` was selected for multiple semantic components/variants: `primitive::app_store_badge:apple`, `primitive::app_store_badge:google`. Bbox alone cannot split this source node.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-footercta-div-flex-div-flex-2001-3112` | [838.33, 5357.89, 521.67, 75] | [838.33, 5357.89, 521.67, 75] | 0.221 | 0.282 | 233 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 > <div>.node-div-footercta-div-flex-div-flex-2001-3112`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3241 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(393.8691 * var(--figma-scale));
  width: calc(521.67 * var(--figma-scale));
  height: calc(75 * var(--figma-scale));
  z-index: 2;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3263 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3273 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_store_badge__google__home__mobile__01`
- Normalized bbox: `[0.3436, 0.8676, 0.3091, 0.0066]`
- Pixel bbox: `[188.98, 6606.77, 170, 50.26]`
- Resolution: **low_confidence_anchor**, confidence **low**, best score `0.289`
- Selected source / target area ratio: `4.406`

> **Manual review required:** Selected source covers 4.41× the manifest bbox area. The source may aggregate this component with adjacent visual content.
> **Manual review required:** The same generated JSX root `<div>.node-div-footercta-div-flex-div-flex-2001-3112` was selected for multiple semantic components/variants: `primitive::app_store_badge:apple`, `primitive::app_store_badge:google`. Bbox alone cannot split this source node.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-footercta-div-flex-div-flex-2001-3112` | [24, 6594.69, 502, 75] | [24, 6594.69, 502, 75] | 0.227 | 0.289 | 233 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 > <div>.node-div-footercta-div-flex-div-flex-2001-3112`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3252 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(61.5 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(75 * var(--figma-scale));
  z-index: 2;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3276 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3279 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-div-flex-2001-3112 > .node-div-footercta-div-flex-div-flex-2001-3112-vec-m {
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

- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
