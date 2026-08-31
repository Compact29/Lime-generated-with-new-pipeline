# Component: button

- Kind: `primitive`
- Build order: 3
- Description: Prominent action control used for site navigation and calls to action.
- Target JSX: `src/refactored/components/button/Button.jsx`
- Target CSS: `src/refactored/components/button/Button.css`
- Export: `default Button`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: primary

Description: Filled high-emphasis action button.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `button__primary__home__desktop__01` | `home` | `desktop` | `[0.8389, 0.0049, 0.1056, 0.0074]` |
| `button__primary__home__desktop__02` | `home` | `desktop` | `[0.4806, 0.0785, 0.1243, 0.0074]` |
| `button__primary__home__desktop__03` | `home` | `desktop` | `[0.4576, 0.7301, 0.0847, 0.0074]` |
| `button__primary__home__mobile__01` | `home` | `mobile` | `[0.4582, 0.0345, 0.2909, 0.0054]` |
| `button__primary__home__mobile__02` | `home` | `mobile` | `[0.4, 0.7216, 0.2, 0.0053]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `button__primary__home__desktop__02`
- Normalized bbox: `[0.4806, 0.0785, 0.1243, 0.0074]`
- Pixel bbox: `[692.06, 512.21, 178.99, 48.29]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.957`
- Selected source / target area ratio: `1.003`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-3072` | [692.09, 511.61, 179.22, 48.39] | [692.09, 511.61, 179.22, 48.39] | 0.976 | 0.957 | 169 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 > <div>.node-div-content-wrapper-main-link-2001-3072`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-3072" data-figma-node-id={"2001:3072"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3072"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3072"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3295"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-download_the_app-2001-3073" data-figma-node-id={"2001:3073"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-download_the_app-2001-3073"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3073"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3296"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2219 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3072 {
  box-sizing: border-box;
  position: absolute;
  left: calc(692.0879 * var(--figma-scale));
  top: calc(511.6104 * var(--figma-scale));
  width: calc(179.22 * var(--figma-scale));
  height: calc(48.39 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(0, 221, 0);
  border: calc(1 * var(--figma-scale)) solid rgb(0, 221, 0);
  border-radius: calc(40 * var(--figma-scale));
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2245 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3072:hover {
  transform: translateY(calc(-3 * var(--figma-scale))) scale(1.03);
  box-shadow: 0 calc(10 * var(--figma-scale)) calc(24 * var(--figma-scale)) rgba(0, 0, 0, 0.24);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2250 */
@media (prefers-reduced-motion: reduce) {
  .ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3072 {
      transition: none;
    }
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2254 */
@media (prefers-reduced-motion: reduce) {
  .ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3072:hover {
      transform: none;
    }
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2258 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-download_the_app-2001-3073 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(14 * var(--figma-scale));
  width: calc(129.5202 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(22.4 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067` | `[0, 0, 1440, 792]` | 1 | 0.008 | 163 |
| `<div>.node-div-content-wrapper-main-div-absolute-2001-3068` | `[0, 0, 1440, 640]` | 1 | 0.009 | 164 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `button__primary__home__mobile__01`
- Normalized bbox: `[0.4582, 0.0345, 0.2909, 0.0054]`
- Pixel bbox: `[252.01, 262.72, 160, 41.12]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.965`
- Selected source / target area ratio: `1.006`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-3072` | [251.66, 262.81, 160.75, 41.19] | [251.66, 262.81, 160.75, 41.19] | 0.989 | 0.965 | 169 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 > <div>.node-div-content-wrapper-main-link-2001-3072`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-3072" data-figma-node-id={"2001:3072"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3072"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3072"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3295"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-download_the_app-2001-3073" data-figma-node-id={"2001:3073"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-download_the_app-2001-3073"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3073"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3296"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
            </div>
```

#### Closed source CSS

Selected rules: 2; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2233 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-link-2001-3072 {
  box-sizing: border-box;
  position: absolute;
  left: calc(251.66 * var(--figma-scale));
  top: calc(262.81 * var(--figma-scale));
  width: calc(160.75 * var(--figma-scale));
  height: calc(41.19 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(0, 221, 0);
  border: calc(1 * var(--figma-scale)) solid rgb(0, 221, 0);
  border-radius: calc(40 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2278 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-download_the_app-2001-3073 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(12 * var(--figma-scale));
  width: calc(111.1215 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(19.2 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067` | `[0, 0, 550, 978]` | 1 | 0.012 | 163 |
| `<div>.node-div-content-wrapper-main-div-absolute-2001-3068` | `[0, 0, 550, 384]` | 1 | 0.031 | 164 |

## Variant: outline

Description: Transparent secondary action button with an outline.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `button__outline__home__desktop__01` | `home` | `desktop` | `[0.3951, 0.0785, 0.0771, 0.0074]` |
| `button__outline__home__mobile__01` | `home` | `mobile` | `[0.2564, 0.0345, 0.1855, 0.0054]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `button__outline__home__desktop__01`
- Normalized bbox: `[0.3951, 0.0785, 0.0771, 0.0074]`
- Pixel bbox: `[568.94, 512.21, 111.02, 48.29]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.929`
- Selected source / target area ratio: `1.042`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-3070` | [568.69, 511.61, 115.41, 48.39] | [568.69, 511.61, 115.41, 48.39] | 0.941 | 0.929 | 166 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 > <div>.node-div-content-wrapper-main-link-2001-3070`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-3070" data-figma-node-id={"2001:3070"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3070"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3070"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3293"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-our_cities-2001-3071" data-figma-node-id={"2001:3071"} data-figma-name={"Our cities"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-our_cities-2001-3071"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3071"} data-figma-name-desktop={"Our cities"} data-figma-node-id-mobile={"2001:3294"} data-figma-name-mobile={"Our cities"}><span className="ff-text-content">{"Our cities"}</span></p>
            </div>
```

#### Closed source CSS

Selected rules: 2; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2155 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3070 {
  box-sizing: border-box;
  position: absolute;
  left: calc(568.6885 * var(--figma-scale));
  top: calc(511.6104 * var(--figma-scale));
  width: calc(115.41 * var(--figma-scale));
  height: calc(48.39 * var(--figma-scale));
  z-index: 4;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(40 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2179 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-our_cities-2001-3071 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(14 * var(--figma-scale));
  width: calc(65.7106 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(22.4 * var(--figma-scale));
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

No referenced assets detected.

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067` | `[0, 0, 1440, 792]` | 1 | 0.005 | 163 |
| `<div>.node-div-content-wrapper-main-div-absolute-2001-3068` | `[0, 0, 1440, 640]` | 1 | 0.006 | 164 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `button__outline__home__mobile__01`
- Normalized bbox: `[0.2564, 0.0345, 0.1855, 0.0054]`
- Pixel bbox: `[141.02, 262.72, 102.03, 41.12]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.939`
- Selected source / target area ratio: `1.041`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-3070` | [137.59, 262.81, 106.06, 41.19] | [137.59, 262.81, 106.06, 41.19] | 0.956 | 0.939 | 166 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 > <div>.node-div-content-wrapper-main-link-2001-3070`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-3070" data-figma-node-id={"2001:3070"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3070"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3070"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3293"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-our_cities-2001-3071" data-figma-node-id={"2001:3071"} data-figma-name={"Our cities"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-our_cities-2001-3071"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3071"} data-figma-name-desktop={"Our cities"} data-figma-node-id-mobile={"2001:3294"} data-figma-name-mobile={"Our cities"}><span className="ff-text-content">{"Our cities"}</span></p>
            </div>
```

#### Closed source CSS

Selected rules: 2; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2167 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-link-2001-3070 {
  box-sizing: border-box;
  position: absolute;
  left: calc(137.59 * var(--figma-scale));
  top: calc(262.81 * var(--figma-scale));
  width: calc(106.06 * var(--figma-scale));
  height: calc(41.19 * var(--figma-scale));
  z-index: 4;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(40 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2199 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-our_cities-2001-3071 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(12 * var(--figma-scale));
  width: calc(56.4321 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(19.2 * var(--figma-scale));
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

No referenced assets detected.

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067` | `[0, 0, 550, 978]` | 1 | 0.008 | 163 |
| `<div>.node-div-content-wrapper-main-div-absolute-2001-3068` | `[0, 0, 550, 384]` | 1 | 0.02 | 164 |
