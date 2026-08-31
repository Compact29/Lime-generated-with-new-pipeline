# Component: vehicles_section

- Kind: `page_component`
- Page: `home`
- Build order: 23
- Description: Vehicle showcase introducing the current scooter and bike options.
- Target JSX: `src/refactored/pages/home/components/vehicles_section/VehiclesSection.jsx`
- Target CSS: `src/refactored/pages/home/components/vehicles_section/VehiclesSection.css`
- Export: `default VehiclesSection`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive vehicle discovery section.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `vehicles_section__default__home__desktop__01` | `home` | `desktop` | `[0, 0.1214, 1, 0.1139]` |
| `vehicles_section__default__home__mobile__01` | `home` | `mobile` | `[0, 0.1284, 1, 0.0985]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `vehicles_section__default__home__desktop__01`
- Normalized bbox: `[0, 0.1214, 1, 0.1139]`
- Pixel bbox: `[0, 792.13, 1440, 743.2]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.991`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995` | [0, 792, 1440, 743.34] | [0, 792, 1440, 743.34] | 1 | 0.991 | 72 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995`

#### Direct component dependencies

#### Slot `vehicles`: `vehicle_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `VehicleCard`
- JSX implementation: `src/refactored/components/vehicle_card/VehicleCard.jsx`
- CSS implementation: `src/refactored/components/vehicle_card/VehicleCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `vehicles_section__default__home__desktop__01` | `vehicle_card__default__home__desktop__01` | `home` | `desktop` | `[0.2056, 0.1559, 0.2882, 0.0648]` |
| `vehicles_section__default__home__desktop__01` | `vehicle_card__default__home__desktop__02` | `home` | `desktop` | `[0.5062, 0.1559, 0.2882, 0.0648]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995" data-figma-node-id={"2001:2995"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2995"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3226"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-our_vehicles-2001-2996" data-figma-node-id={"2001:2996"} data-figma-name={"Our Vehicles"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-our_vehicles-2001-2996"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:2996"} data-figma-name-desktop={"Our Vehicles"} data-figma-node-id-mobile={"2001:3227"} data-figma-name-mobile={"Our Vehicles"}><span className="ff-text-content">{"Our Vehicles"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997" data-figma-node-id={"2001:2997"} data-figma-name={"Heading 2 → Discover the Gen4"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:2997"} data-figma-name-desktop={"Heading 2 → Discover the Gen4"} data-figma-node-id-mobile={"2001:3228"} data-figma-name-mobile={"Heading 2 → Discover the Gen4"}><span className="ff-text-content">{"Discover the Gen4"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-link-2001-2998" data-figma-node-id={"2001:2998"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-2998"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2998"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3229"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_gen4-scooter-hl-png-2001-2999" data-figma-node-id={"2001:2999"} data-figma-name={"Figure → Gen4-scooter-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_gen4-scooter-hl-png-2001-2999"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:2999"} data-figma-name-desktop={"Figure → Gen4-scooter-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3230" data-figma-node-id={"2001:3230"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3230"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3230"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3230.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-scooter-2001-3000" data-figma-node-id={"2001:3000"} data-figma-name={"Heading 3 → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-scooter-2001-3000"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3000"} data-figma-name-desktop={"Heading 3 → E-Scooter"} data-figma-node-id-mobile={"2001:3232"} data-figma-name-mobile={"Heading 3 → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3001" data-figma-node-id={"2001:3001"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3001"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3001"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3233"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_g4-bike-with-hl-png-2001-3002" data-figma-node-id={"2001:3002"} data-figma-name={"Figure → G4-bike-with-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_g4-bike-with-hl-png-2001-3002"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3002"} data-figma-name-desktop={"Figure → G4-bike-with-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3234" data-figma-node-id={"2001:3234"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3234"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3234"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3234.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-bike-2001-3003" data-figma-node-id={"2001:3003"} data-figma-name={"Heading 3 → E-Bike"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-bike-2001-3003"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3003"} data-figma-name-desktop={"Heading 3 → E-Bike"} data-figma-node-id-mobile={"2001:3236"} data-figma-name-mobile={"Heading 3 → E-Bike"}><span className="ff-text-content">{"E-Bike"}</span></p>
            </div>
          </div>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:58 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(680 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(743.34 * var(--figma-scale));
  z-index: 1;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:78 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-our_vehicles-2001-2996 {
  box-sizing: border-box;
  position: absolute;
  left: calc(657.56 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(125.2736 * var(--figma-scale));
  min-height: calc(22 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(22 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 178, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:118 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997 {
  box-sizing: border-box;
  position: absolute;
  left: calc(539.67 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(360.9805 * var(--figma-scale));
  min-height: calc(56 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(40 * var(--figma-scale));
  font-weight: 400;
  letter-spacing: calc(-0.2 * var(--figma-scale));
  line-height: calc(56 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:160 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-2998 {
  box-sizing: border-box;
  position: absolute;
  left: calc(296.66 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(413.34 * var(--figma-scale));
  height: calc(421.34 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(238, 238, 238);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:182 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-figure_-_gen4-scooter-hl-png-2001-2999 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(60 * var(--figma-scale));
  width: calc(253.34 * var(--figma-scale));
  height: calc(253.34 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/1661d33bb85f.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(253.34 * var(--figma-scale)) calc(253.34 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:200 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-div-p-5-2001-3230 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1267.3398 * var(--figma-scale));
  top: calc(143.5898 * var(--figma-scale));
  width: calc(251 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  display: none;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:221 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-heading_3_-_e-scooter-2001-3000 {
  box-sizing: border-box;
  position: absolute;
  left: calc(157.72 * var(--figma-scale));
  top: calc(349.34 * var(--figma-scale));
  width: calc(98.2614 * var(--figma-scale));
  min-height: calc(32 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(32 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:261 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-link-2001-3001 {
  box-sizing: border-box;
  position: absolute;
  left: calc(730 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(413.33 * var(--figma-scale));
  height: calc(421.34 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(238, 238, 238);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:283 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-figure_-_g4-bike-with-hl-png-2001-3002 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(60 * var(--figma-scale));
  width: calc(253.33 * var(--figma-scale));
  height: calc(253.33 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/5e006e83359c.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(253.33 * var(--figma-scale)) calc(253.33 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:301 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-div-p-5-2001-3234 {
  box-sizing: border-box;
  position: absolute;
  left: calc(834 * var(--figma-scale));
  top: calc(402.5898 * var(--figma-scale));
  width: calc(251 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  display: none;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:322 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-link-heading_3_-_e-bike-2001-3003 {
  box-sizing: border-box;
  position: absolute;
  left: calc(176.08 * var(--figma-scale));
  top: calc(349.33 * var(--figma-scale));
  width: calc(61.558 * var(--figma-scale));
  min-height: calc(32 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(32 * var(--figma-scale));
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

- `/generated-pages/page-1/generated-assets/named/n/1661d33bb85f.png`
- `/generated-pages/page-1/generated-assets/named/n/5e006e83359c.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3230.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3234.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `vehicles_section__default__home__mobile__01`
- Normalized bbox: `[0, 0.1284, 1, 0.0985]`
- Pixel bbox: `[0, 977.77, 550, 750.08]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.991`
- Selected source / target area ratio: `0.999`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995` | [0, 978, 550, 749.59] | [0, 978, 550, 749.59] | 0.999 | 0.991 | 72 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995`

#### Direct component dependencies

#### Slot `vehicles`: `vehicle_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `VehicleCard`
- JSX implementation: `src/refactored/components/vehicle_card/VehicleCard.jsx`
- CSS implementation: `src/refactored/components/vehicle_card/VehicleCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `vehicles_section__default__home__mobile__01` | `vehicle_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.1526, 0.9127, 0.0328]` |
| `vehicles_section__default__home__mobile__01` | `vehicle_card__default__home__mobile__02` | `home` | `mobile` | `[0.0436, 0.1866, 0.9127, 0.0328]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995" data-figma-node-id={"2001:2995"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2995"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3226"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-our_vehicles-2001-2996" data-figma-node-id={"2001:2996"} data-figma-name={"Our Vehicles"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-our_vehicles-2001-2996"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:2996"} data-figma-name-desktop={"Our Vehicles"} data-figma-node-id-mobile={"2001:3227"} data-figma-name-mobile={"Our Vehicles"}><span className="ff-text-content">{"Our Vehicles"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997" data-figma-node-id={"2001:2997"} data-figma-name={"Heading 2 → Discover the Gen4"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:2997"} data-figma-name-desktop={"Heading 2 → Discover the Gen4"} data-figma-node-id-mobile={"2001:3228"} data-figma-name-mobile={"Heading 2 → Discover the Gen4"}><span className="ff-text-content">{"Discover the Gen4"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-link-2001-2998" data-figma-node-id={"2001:2998"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-2998"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2998"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3229"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_gen4-scooter-hl-png-2001-2999" data-figma-node-id={"2001:2999"} data-figma-name={"Figure → Gen4-scooter-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_gen4-scooter-hl-png-2001-2999"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:2999"} data-figma-name-desktop={"Figure → Gen4-scooter-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3230" data-figma-node-id={"2001:3230"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3230"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3230"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3230.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-scooter-2001-3000" data-figma-node-id={"2001:3000"} data-figma-name={"Heading 3 → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-scooter-2001-3000"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3000"} data-figma-name-desktop={"Heading 3 → E-Scooter"} data-figma-node-id-mobile={"2001:3232"} data-figma-name-mobile={"Heading 3 → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3001" data-figma-node-id={"2001:3001"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3001"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3001"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3233"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_g4-bike-with-hl-png-2001-3002" data-figma-node-id={"2001:3002"} data-figma-name={"Figure → G4-bike-with-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_g4-bike-with-hl-png-2001-3002"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3002"} data-figma-name-desktop={"Figure → G4-bike-with-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3234" data-figma-node-id={"2001:3234"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3234"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3234"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3234.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-bike-2001-3003" data-figma-node-id={"2001:3003"} data-figma-name={"Heading 3 → E-Bike"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-bike-2001-3003"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3003"} data-figma-name-desktop={"Heading 3 → E-Bike"} data-figma-node-id-mobile={"2001:3236"} data-figma-name-mobile={"Heading 3 → E-Bike"}><span className="ff-text-content">{"E-Bike"}</span></p>
            </div>
          </div>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:68 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(894 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(749.59 * var(--figma-scale));
  z-index: 1;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:98 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-our_vehicles-2001-2996 {
  box-sizing: border-box;
  position: absolute;
  left: calc(225.05 * var(--figma-scale));
  top: calc(77 * var(--figma-scale));
  width: calc(100.2445 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(17.6 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 178, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:139 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-heading_2_-_discover_the_gen4-2001-2997 {
  box-sizing: border-box;
  position: absolute;
  left: calc(139.75 * var(--figma-scale));
  top: calc(101.59 * var(--figma-scale));
  width: calc(270.7852 * var(--figma-scale));
  min-height: calc(42 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  letter-spacing: calc(-0.15 * var(--figma-scale));
  line-height: calc(42 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:171 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-link-2001-2998 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(183.59 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(238, 238, 238);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:197 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-figure_-_gen4-scooter-hl-png-2001-2999 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:210 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-div-p-5-2001-3230 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(251 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:241 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-heading_3_-_e-scooter-2001-3000 {
  box-sizing: border-box;
  position: absolute;
  left: calc(251 * var(--figma-scale));
  top: calc(119.5 * var(--figma-scale));
  width: calc(98.2614 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(28 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:272 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-link-2001-3001 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(442.59 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(238, 238, 238);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:298 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-figure_-_g4-bike-with-hl-png-2001-3002 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:311 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-div-p-5-2001-3234 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(251 * var(--figma-scale));
  height: calc(251 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:342 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-link-heading_3_-_e-bike-2001-3003 {
  box-sizing: border-box;
  position: absolute;
  left: calc(251 * var(--figma-scale));
  top: calc(119.5 * var(--figma-scale));
  width: calc(61.558 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(28 * var(--figma-scale));
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

- `/generated-pages/page-1/generated-assets/vectors/2001_3230.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3234.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
