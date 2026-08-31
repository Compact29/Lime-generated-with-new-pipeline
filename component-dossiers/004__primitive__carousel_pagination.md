# Component: carousel_pagination

- Kind: `primitive`
- Build order: 4
- Description: Dot indicator showing position within a horizontal carousel.
- Target JSX: `src/refactored/components/carousel_pagination/CarouselPagination.jsx`
- Target CSS: `src/refactored/components/carousel_pagination/CarouselPagination.css`
- Export: `default CarouselPagination`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: extended

Description: Pagination indicator for a long carousel sequence.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `carousel_pagination__extended__home__desktop__01` | `home` | `desktop` | `[0.4201, 0.4667, 0.1597, 0.0015]` |
| `carousel_pagination__extended__home__mobile__01` | `home` | `mobile` | `[0.2909, 0.5118, 0.4182, 0.0013]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `carousel_pagination__extended__home__desktop__01`
- Normalized bbox: `[0.4201, 0.4667, 0.1597, 0.0015]`
- Pixel bbox: `[604.94, 3045.22, 229.97, 9.79]`
- Resolution: **multi_root**, confidence **medium**, best score `0.174`
- Selected source / target area ratio: `1.022`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038` | [605, 3044.23, 10, 10] | [605, 3044.23, 10, 10] | 0.04 | 0.174 | 128 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039` | [627, 3044.23, 10, 10] | [627, 3044.23, 10, 10] | 0.04 | 0.174 | 129 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040` | [649, 3044.23, 10, 10] | [649, 3044.23, 10, 10] | 0.04 | 0.174 | 130 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041` | [671, 3044.23, 10, 10] | [671, 3044.23, 10, 10] | 0.04 | 0.174 | 131 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042` | [693, 3044.23, 10, 10] | [693, 3044.23, 10, 10] | 0.04 | 0.174 | 132 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043` | [715, 3044.23, 10, 10] | [715, 3044.23, 10, 10] | 0.04 | 0.174 | 133 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044` | [737, 3044.23, 10, 10] | [737, 3044.23, 10, 10] | 0.04 | 0.174 | 134 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045` | [759, 3044.23, 10, 10] | [759, 3044.23, 10, 10] | 0.04 | 0.174 | 135 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046` | [781, 3044.23, 10, 10] | [781, 3044.23, 10, 10] | 0.04 | 0.174 | 136 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047` | [803, 3044.23, 10, 10] | [803, 3044.23, 10, 10] | 0.04 | 0.174 | 137 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048` | [825, 3044.23, 10, 10] | [825, 3044.23, 10, 10] | 0.04 | 0.174 | 138 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038" data-figma-node-id={"2001:3038"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3038"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3264"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 2: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039" data-figma-node-id={"2001:3039"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3039"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3265"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 3: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040" data-figma-node-id={"2001:3040"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3040"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3266"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 4: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041" data-figma-node-id={"2001:3041"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3041"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3267"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 5: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042" data-figma-node-id={"2001:3042"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3042"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3268"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 6: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043" data-figma-node-id={"2001:3043"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3043"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3269"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 7: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044" data-figma-node-id={"2001:3044"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3044"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3270"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 8: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045" data-figma-node-id={"2001:3045"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3045"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3271"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 9: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046" data-figma-node-id={"2001:3046"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3046"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3272"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 10: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047" data-figma-node-id={"2001:3047"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3047"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3273"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 11: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048" data-figma-node-id={"2001:3048"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3048"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3274"} data-figma-name-mobile={"Region → List → Item → Button"} />
```

#### Closed source CSS

Selected rules: 11; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1345 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038 {
  box-sizing: border-box;
  position: absolute;
  left: calc(605 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(0, 178, 0);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1367 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039 {
  box-sizing: border-box;
  position: absolute;
  left: calc(627 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1389 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040 {
  box-sizing: border-box;
  position: absolute;
  left: calc(649 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 6;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1411 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041 {
  box-sizing: border-box;
  position: absolute;
  left: calc(671 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 7;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1433 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042 {
  box-sizing: border-box;
  position: absolute;
  left: calc(693 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 8;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1455 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043 {
  box-sizing: border-box;
  position: absolute;
  left: calc(715 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 9;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1477 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044 {
  box-sizing: border-box;
  position: absolute;
  left: calc(737 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 10;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1499 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045 {
  box-sizing: border-box;
  position: absolute;
  left: calc(759 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 11;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1521 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046 {
  box-sizing: border-box;
  position: absolute;
  left: calc(781 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 12;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1543 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047 {
  box-sizing: border-box;
  position: absolute;
  left: calc(803 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 13;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1565 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048 {
  box-sizing: border-box;
  position: absolute;
  left: calc(825 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 14;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `carousel_pagination__extended__home__mobile__01`
- Normalized bbox: `[0.2909, 0.5118, 0.4182, 0.0013]`
- Pixel bbox: `[160, 3897.36, 230.01, 9.9]`
- Resolution: **multi_root**, confidence **medium**, best score `0.176`
- Selected source / target area ratio: `1.01`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038` | [160, 3896.59, 10, 10] | [160, 3896.59, 10, 10] | 0.04 | 0.176 | 128 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039` | [182, 3896.59, 10, 10] | [182, 3896.59, 10, 10] | 0.04 | 0.176 | 129 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040` | [204, 3896.59, 10, 10] | [204, 3896.59, 10, 10] | 0.04 | 0.176 | 130 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041` | [226, 3896.59, 10, 10] | [226, 3896.59, 10, 10] | 0.04 | 0.176 | 131 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042` | [248, 3896.59, 10, 10] | [248, 3896.59, 10, 10] | 0.04 | 0.176 | 132 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043` | [270, 3896.59, 10, 10] | [270, 3896.59, 10, 10] | 0.04 | 0.176 | 133 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044` | [292, 3896.59, 10, 10] | [292, 3896.59, 10, 10] | 0.04 | 0.176 | 134 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045` | [314, 3896.59, 10, 10] | [314, 3896.59, 10, 10] | 0.04 | 0.176 | 135 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046` | [336, 3896.59, 10, 10] | [336, 3896.59, 10, 10] | 0.04 | 0.176 | 136 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047` | [358, 3896.59, 10, 10] | [358, 3896.59, 10, 10] | 0.04 | 0.176 | 137 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048` | [380, 3896.59, 10, 10] | [380, 3896.59, 10, 10] | 0.04 | 0.176 | 138 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038" data-figma-node-id={"2001:3038"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3038"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3264"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 2: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039" data-figma-node-id={"2001:3039"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3039"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3265"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 3: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040" data-figma-node-id={"2001:3040"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3040"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3266"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 4: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041" data-figma-node-id={"2001:3041"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3041"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3267"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 5: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042" data-figma-node-id={"2001:3042"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3042"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3268"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 6: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043" data-figma-node-id={"2001:3043"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3043"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3269"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 7: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044" data-figma-node-id={"2001:3044"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3044"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3270"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 8: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045" data-figma-node-id={"2001:3045"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3045"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3271"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 9: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046" data-figma-node-id={"2001:3046"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3046"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3272"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 10: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047" data-figma-node-id={"2001:3047"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3047"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3273"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 11: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048" data-figma-node-id={"2001:3048"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3048"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3274"} data-figma-name-mobile={"Region → List → Item → Button"} />
```

#### Closed source CSS

Selected rules: 11; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1356 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038 {
  box-sizing: border-box;
  position: absolute;
  left: calc(160 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(0, 178, 0);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1378 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039 {
  box-sizing: border-box;
  position: absolute;
  left: calc(182 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1400 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040 {
  box-sizing: border-box;
  position: absolute;
  left: calc(204 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 6;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1422 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041 {
  box-sizing: border-box;
  position: absolute;
  left: calc(226 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 7;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1444 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042 {
  box-sizing: border-box;
  position: absolute;
  left: calc(248 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 8;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1466 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043 {
  box-sizing: border-box;
  position: absolute;
  left: calc(270 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 9;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1488 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044 {
  box-sizing: border-box;
  position: absolute;
  left: calc(292 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 10;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1510 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045 {
  box-sizing: border-box;
  position: absolute;
  left: calc(314 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 11;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1532 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046 {
  box-sizing: border-box;
  position: absolute;
  left: calc(336 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 12;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1554 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047 {
  box-sizing: border-box;
  position: absolute;
  left: calc(358 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 13;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1576 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048 {
  box-sizing: border-box;
  position: absolute;
  left: calc(380 * var(--figma-scale));
  top: calc(603.26 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 14;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

## Variant: compact

Description: Pagination indicator for a short carousel sequence.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `carousel_pagination__compact__home__desktop__01` | `home` | `desktop` | `[0.4736, 0.5893, 0.0528, 0.0015]` |
| `carousel_pagination__compact__home__mobile__01` | `home` | `mobile` | `[0.4309, 0.5986, 0.1382, 0.0013]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `carousel_pagination__compact__home__desktop__01`
- Normalized bbox: `[0.4736, 0.5893, 0.0528, 0.0015]`
- Pixel bbox: `[681.98, 3845.18, 76.03, 9.79]`
- Resolution: **multi_root**, confidence **medium**, best score `0.255`
- Selected source / target area ratio: `1.021`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062` | [682, 3844.23, 10, 10] | [682, 3844.23, 10, 10] | 0.12 | 0.255 | 157 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063` | [704, 3844.23, 10, 10] | [704, 3844.23, 10, 10] | 0.12 | 0.255 | 158 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064` | [726, 3844.23, 10, 10] | [726, 3844.23, 10, 10] | 0.12 | 0.255 | 159 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065` | [748, 3844.23, 10, 10] | [748, 3844.23, 10, 10] | 0.12 | 0.255 | 160 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062" data-figma-node-id={"2001:3062"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3062"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3285"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 2: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063" data-figma-node-id={"2001:3063"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3063"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3286"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 3: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064" data-figma-node-id={"2001:3064"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3064"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3287"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 4: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065" data-figma-node-id={"2001:3065"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3065"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3288"} data-figma-name-mobile={"Region → List → Item → Button"} />
```

#### Closed source CSS

Selected rules: 4; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1955 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062 {
  box-sizing: border-box;
  position: absolute;
  left: calc(682 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(0, 178, 0);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1977 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063 {
  box-sizing: border-box;
  position: absolute;
  left: calc(704 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1999 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064 {
  box-sizing: border-box;
  position: absolute;
  left: calc(726 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 6;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2021 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065 {
  box-sizing: border-box;
  position: absolute;
  left: calc(748 * var(--figma-scale));
  top: calc(710 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 7;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `carousel_pagination__compact__home__mobile__01`
- Normalized bbox: `[0.4309, 0.5986, 0.1382, 0.0013]`
- Pixel bbox: `[237, 4558.34, 76.01, 9.9]`
- Resolution: **multi_root**, confidence **medium**, best score `0.263`
- Selected source / target area ratio: `1.01`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062` | [237, 4557.86, 10, 10] | [237, 4557.86, 10, 10] | 0.126 | 0.263 | 157 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063` | [259, 4557.86, 10, 10] | [259, 4557.86, 10, 10] | 0.126 | 0.263 | 158 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064` | [281, 4557.86, 10, 10] | [281, 4557.86, 10, 10] | 0.126 | 0.263 | 159 |
| `<div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065` | [303, 4557.86, 10, 10] | [303, 4557.86, 10, 10] | 0.126 | 0.263 | 160 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 > <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062" data-figma-node-id={"2001:3062"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3062"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3285"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 2: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063" data-figma-node-id={"2001:3063"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3063"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3286"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 3: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064" data-figma-node-id={"2001:3064"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3064"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3287"} data-figma-name-mobile={"Region → List → Item → Button"} />

{/* extracted root 4: <div>.node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065 */}
<div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065" data-figma-node-id={"2001:3065"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3065"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3288"} data-figma-name-mobile={"Region → List → Item → Button"} />
```

#### Closed source CSS

Selected rules: 4; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1966 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062 {
  box-sizing: border-box;
  position: absolute;
  left: calc(237 * var(--figma-scale));
  top: calc(603.27 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(0, 178, 0);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1988 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063 {
  box-sizing: border-box;
  position: absolute;
  left: calc(259 * var(--figma-scale));
  top: calc(603.27 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2010 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064 {
  box-sizing: border-box;
  position: absolute;
  left: calc(281 * var(--figma-scale));
  top: calc(603.27 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 6;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2032 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065 {
  box-sizing: border-box;
  position: absolute;
  left: calc(303 * var(--figma-scale));
  top: calc(603.27 * var(--figma-scale));
  width: calc(10 * var(--figma-scale));
  height: calc(10 * var(--figma-scale));
  z-index: 7;
  background-color: rgb(217, 217, 217);
  border-radius: calc(9999 * var(--figma-scale));
}
```

#### Referenced assets

No referenced assets detected.

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
