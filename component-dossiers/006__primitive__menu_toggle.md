# Component: menu_toggle

- Kind: `primitive`
- Build order: 6
- Description: Icon control that opens the compact site menu.
- Target JSX: `src/refactored/components/menu_toggle/MenuToggle.jsx`
- Target CSS: `src/refactored/components/menu_toggle/MenuToggle.css`
- Export: `default MenuToggle`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Collapsed menu trigger.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `menu_toggle__default__home__mobile__01` | `home` | `mobile` | `[0.9, 0.0042, 0.0436, 0.0026]` |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `menu_toggle__default__home__mobile__01`
- Normalized bbox: `[0.9, 0.0042, 0.0436, 0.0026]`
- Pixel bbox: `[495, 31.98, 23.98, 19.8]`
- Resolution: **multi_root**, confidence **medium**, best score `0.273`
- Selected source / target area ratio: `0.788`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444` | [496, 33.5, 22, 3] | [496, 33.5, 22, 3] | 0.139 | 0.273 | 295 |
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445` | [496, 40.5, 22, 3] | [496, 40.5, 22, 3] | 0.139 | 0.273 | 296 |
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446` | [496, 47.5, 22, 3] | [496, 47.5, 22, 3] | 0.139 | 0.273 | 297 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444 */}
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444" data-figma-node-id={"2001:3444"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3444"} data-figma-name-mobile={"Button - menu_toggle"} />

{/* extracted root 2: <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445 */}
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445" data-figma-node-id={"2001:3445"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3445"} data-figma-name-mobile={"Button - menu_toggle"} />

{/* extracted root 3: <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446 */}
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446" data-figma-node-id={"2001:3446"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3446"} data-figma-name-mobile={"Button - menu_toggle"} />
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4704 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(33.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(255, 255, 255);
  display: block;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4725 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(40.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(255, 255, 255);
  display: block;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4746 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(47.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(255, 255, 255);
  display: block;
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 550, 978]` | 1 | 0.001 | 162 |
