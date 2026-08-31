# Component: app_download_banner

- Kind: `shared_component`
- Build order: 8
- Description: Reusable app download promotion with product imagery and store links.
- Target JSX: `src/refactored/components/app_download_banner/AppDownloadBanner.jsx`
- Target CSS: `src/refactored/components/app_download_banner/AppDownloadBanner.css`
- Export: `default AppDownloadBanner`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Product mockup paired with app marketplace badges.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `app_download_banner__default__home__desktop__01` | `home` | `desktop` | `[0, 0.7461, 1, 0.148]` |
| `app_download_banner__default__home__mobile__01` | `home` | `mobile` | `[0, 0.7343, 1, 0.1526]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_download_banner__default__home__desktop__01`
- Normalized bbox: `[0, 0.7461, 1, 0.148]`
- Pixel bbox: `[0, 4868.3, 1440, 965.7]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.985`
- Selected source / target area ratio: `1.001`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107` | [0, 4868.02, 1440, 966.77] | [0, 4868.02, 1440, 966.77] | 0.999 | 0.985 | 227 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107`

#### Direct component dependencies

#### Slot `store_badges`: `app_store_badge.apple`

- Kind: `primitive`
- Required variant: `apple`
- Default export: `AppStoreBadge`
- JSX implementation: `src/refactored/components/app_store_badge/AppStoreBadge.jsx`
- CSS implementation: `src/refactored/components/app_store_badge/AppStoreBadge.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_download_banner__default__home__desktop__01` | `app_store_badge__apple__home__desktop__01` | `home` | `desktop` | `[0.5819, 0.823, 0.1042, 0.0078]` |

#### Slot `store_badges`: `app_store_badge.google`

- Kind: `primitive`
- Required variant: `google`
- Default export: `AppStoreBadge`
- JSX implementation: `src/refactored/components/app_store_badge/AppStoreBadge.jsx`
- CSS implementation: `src/refactored/components/app_store_badge/AppStoreBadge.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_download_banner__default__home__desktop__01` | `app_store_badge__google__home__desktop__01` | `home` | `desktop` | `[0.6972, 0.823, 0.1181, 0.0078]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107" data-figma-node-id={"2001:3107"} data-figma-name={"div#footerCTA"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3107"} data-figma-name-desktop={"div#footerCTA"} data-figma-node-id-mobile={"2001:3322"} data-figma-name-mobile={"div#footerCTA"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108" data-figma-node-id={"2001:3108"} data-figma-name={"Figure → app-store-section-image.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3108"} data-figma-name-desktop={"Figure → app-store-section-image.png"} data-figma-node-id-mobile={"2001:3323"} data-figma-name-mobile={"Figure → app-store-section-image.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109" data-figma-node-id={"2001:3109"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3109"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3324"} data-figma-name-mobile={"div.flex"}>
            <div className="figma-node node-div-footercta-div-flex-heading_2-2001-3110" data-figma-node-id={"2001:3110"} data-figma-name={"Heading 2"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-heading_2-2001-3110"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3110"} data-figma-name-desktop={"Heading 2"} data-figma-node-id-mobile={"2001:3325"} data-figma-name-mobile={"Heading 2"}>
              <p className="figma-node node-div-flex-heading_2-download_the_app-2001-3111" data-figma-node-id={"2001:3111"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-div-flex-heading_2-download_the_app-2001-3111"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3111"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3326"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
            </div>
            <div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
            </div>
          </div>
        </div>
```

#### Closed source CSS

Selected rules: 8; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3109 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(4868.02 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(966.77 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(26, 26, 26);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3129 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108 {
  box-sizing: border-box;
  position: absolute;
  left: calc(160 * var(--figma-scale));
  top: calc(96 * var(--figma-scale));
  width: calc(450 * var(--figma-scale));
  height: calc(774.77 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/b4a3b4a25617.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(450 * var(--figma-scale)) calc(774.77 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3159 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(96 * var(--figma-scale));
  width: calc(521.67 * var(--figma-scale));
  height: calc(774.77 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3179 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footercta-div-flex-heading_2-2001-3110 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(318.37 * var(--figma-scale));
  width: calc(521.67 * var(--figma-scale));
  height: calc(56 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3199 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-heading_2-download_the_app-2001-3111 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(366.3126 * var(--figma-scale));
  min-height: calc(56 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(40 * var(--figma-scale));
  font-weight: 400;
  letter-spacing: calc(-0.2 * var(--figma-scale));
  line-height: calc(56 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
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

- `/generated-pages/page-1/generated-assets/named/n/b4a3b4a25617.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_download_banner__default__home__mobile__01`
- Normalized bbox: `[0, 0.7343, 1, 0.1526]`
- Pixel bbox: `[0, 5591.69, 550, 1162.05]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.985`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107` | [0, 5591.53, 550, 1161.66] | [0, 5591.53, 550, 1161.66] | 0.999 | 0.985 | 227 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107`

#### Direct component dependencies

#### Slot `store_badges`: `app_store_badge.apple`

- Kind: `primitive`
- Required variant: `apple`
- Default export: `AppStoreBadge`
- JSX implementation: `src/refactored/components/app_store_badge/AppStoreBadge.jsx`
- CSS implementation: `src/refactored/components/app_store_badge/AppStoreBadge.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_download_banner__default__home__mobile__01` | `app_store_badge__apple__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.8676, 0.2727, 0.0066]` |

#### Slot `store_badges`: `app_store_badge.google`

- Kind: `primitive`
- Required variant: `google`
- Default export: `AppStoreBadge`
- JSX implementation: `src/refactored/components/app_store_badge/AppStoreBadge.jsx`
- CSS implementation: `src/refactored/components/app_store_badge/AppStoreBadge.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_download_banner__default__home__mobile__01` | `app_store_badge__google__home__mobile__01` | `home` | `mobile` | `[0.3436, 0.8676, 0.3091, 0.0066]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107" data-figma-node-id={"2001:3107"} data-figma-name={"div#footerCTA"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3107"} data-figma-name-desktop={"div#footerCTA"} data-figma-node-id-mobile={"2001:3322"} data-figma-name-mobile={"div#footerCTA"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108" data-figma-node-id={"2001:3108"} data-figma-name={"Figure → app-store-section-image.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3108"} data-figma-name-desktop={"Figure → app-store-section-image.png"} data-figma-node-id-mobile={"2001:3323"} data-figma-name-mobile={"Figure → app-store-section-image.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109" data-figma-node-id={"2001:3109"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3109"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3324"} data-figma-name-mobile={"div.flex"}>
            <div className="figma-node node-div-footercta-div-flex-heading_2-2001-3110" data-figma-node-id={"2001:3110"} data-figma-name={"Heading 2"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-heading_2-2001-3110"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3110"} data-figma-name-desktop={"Heading 2"} data-figma-node-id-mobile={"2001:3325"} data-figma-name-mobile={"Heading 2"}>
              <p className="figma-node node-div-flex-heading_2-download_the_app-2001-3111" data-figma-node-id={"2001:3111"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-div-flex-heading_2-download_the_app-2001-3111"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3111"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3326"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
            </div>
            <div className="figma-node node-div-footercta-div-flex-div-flex-2001-3112" data-figma-node-id={"2001:3112"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footercta-div-flex-div-flex-2001-3112"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3112"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3327"} data-figma-name-mobile={"div.flex"}>
              <img className="figma-vec-desktop node-div-footercta-div-flex-div-flex-2001-3112-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg" alt={"div.flex"} />
              <img className="figma-vec-mobile node-div-footercta-div-flex-div-flex-2001-3112-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg" alt={"div.flex"} />
            </div>
          </div>
        </div>
```

#### Closed source CSS

Selected rules: 8; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3119 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-2001-3107 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(5591.5298 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(1161.66 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(26, 26, 26);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3144 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-figure_-_app-store-section-image-png-2001-3108 {
  box-sizing: border-box;
  position: absolute;
  left: calc(48 * var(--figma-scale));
  top: calc(112 * var(--figma-scale));
  width: calc(454 * var(--figma-scale));
  height: calc(781.66 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/be316cfdae1f.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(454 * var(--figma-scale)) calc(781.66 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3169 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footercta-div-flex-2001-3109 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(941.66 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(124 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3189 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footercta-div-flex-heading_2-2001-3110 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(42 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3220 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-heading_2-download_the_app-2001-3111 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(274.7868 * var(--figma-scale));
  min-height: calc(42 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  letter-spacing: calc(-0.15 * var(--figma-scale));
  line-height: calc(42 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
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

- `/generated-pages/page-1/generated-assets/named/n/be316cfdae1f.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3112.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3327.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
