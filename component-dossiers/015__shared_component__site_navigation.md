# Component: site_navigation

- Kind: `shared_component`
- Build order: 15
- Description: Primary navigation links for major site destinations.
- Target JSX: `src/refactored/components/site_navigation/SiteNavigation.jsx`
- Target CSS: `src/refactored/components/site_navigation/SiteNavigation.css`
- Export: `default SiteNavigation`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Horizontal primary navigation.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `site_navigation__default__home__desktop__01` | `home` | `desktop` | `[0.3979, 0.0069, 0.4153, 0.0032]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `site_navigation__default__home__desktop__01`
- Normalized bbox: `[0.3979, 0.0069, 0.4153, 0.0032]`
- Pixel bbox: `[572.98, 45.02, 598.03, 20.88]`
- Resolution: **multi_root**, confidence **medium**, best score `0.255`
- Selected source / target area ratio: `0.957`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216` | [672.27, 45.41, 67.14, 20] | [672.27, 45.41, 67.14, 20] | 0.108 | 0.255 | 299 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218` | [869.59, 45.41, 67.05, 20] | [869.59, 45.41, 67.05, 20] | 0.107 | 0.255 | 301 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219` | [972.34, 45.41, 65.49, 20] | [972.34, 45.41, 65.49, 20] | 0.105 | 0.253 | 302 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215` | [573.84, 45.41, 62.81, 20] | [573.84, 45.41, 62.81, 20] | 0.101 | 0.249 | 298 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217` | [775.11, 45.41, 58.86, 20] | [775.11, 45.41, 58.86, 20] | 0.094 | 0.243 | 300 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221` | [1139.98, 45.41, 31.67, 20] | [1139.98, 45.41, 31.67, 20] | 0.05 | 0.199 | 304 |
| `<p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220` | [1073.53, 45.41, 30.83, 20] | [1073.53, 45.41, 30.83, 20] | 0.049 | 0.199 | 303 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221`
- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 > <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
{/* extracted root 1: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216" data-figma-node-id={"2001:3216"} data-figma-name={"List → Item → Link → Why Lime"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3216"} data-figma-name-desktop={"List → Item → Link → Why Lime"}><span className="ff-text-content">{"Why Lime"}</span></p>

{/* extracted root 2: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218" data-figma-node-id={"2001:3218"} data-figma-name={"List → Item → Link → Locations"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3218"} data-figma-name-desktop={"List → Item → Link → Locations"}><span className="ff-text-content">{"Locations"}</span></p>

{/* extracted root 3: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219" data-figma-node-id={"2001:3219"} data-figma-name={"List → Item → Link → Advertise"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3219"} data-figma-name-desktop={"List → Item → Link → Advertise"}><span className="ff-text-content">{"Advertise"}</span></p>

{/* extracted root 4: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215" data-figma-node-id={"2001:3215"} data-figma-name={"List → Item → Link → About Us"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3215"} data-figma-name-desktop={"List → Item → Link → About Us"}><span className="ff-text-content">{"About Us"}</span></p>

{/* extracted root 5: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217" data-figma-node-id={"2001:3217"} data-figma-name={"List → Item → Link → Vehicles"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3217"} data-figma-name-desktop={"List → Item → Link → Vehicles"}><span className="ff-text-content">{"Vehicles"}</span></p>

{/* extracted root 6: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221" data-figma-node-id={"2001:3221"} data-figma-name={"List → Item → Link → Help"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3221"} data-figma-name-desktop={"List → Item → Link → Help"}><span className="ff-text-content">{"Help"}</span></p>

{/* extracted root 7: <p>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220 */}
<p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220" data-figma-node-id={"2001:3220"} data-figma-name={"List → Item → Link → Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3220"} data-figma-name-desktop={"List → Item → Link → Blog"}><span className="ff-text-content">{"Blog"}</span></p>
```

#### Closed source CSS

Selected rules: 7; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4757 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215 {
  box-sizing: border-box;
  position: absolute;
  left: calc(573.84 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(62.8119 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 3;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4780 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216 {
  box-sizing: border-box;
  position: absolute;
  left: calc(672.27 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(67.1429 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 4;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4803 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217 {
  box-sizing: border-box;
  position: absolute;
  left: calc(775.11 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(58.8596 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 5;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4826 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218 {
  box-sizing: border-box;
  position: absolute;
  left: calc(869.59 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(67.0527 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 6;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4849 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219 {
  box-sizing: border-box;
  position: absolute;
  left: calc(972.34 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(65.4903 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 7;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4872 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1073.53 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(30.8341 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 8;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4895 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1139.98 * var(--figma-scale));
  top: calc(45.41 * var(--figma-scale));
  width: calc(31.6693 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 9;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.2 * var(--figma-scale));
  text-align: left;
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
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 1440, 792]` | 1 | 0.011 | 162 |
