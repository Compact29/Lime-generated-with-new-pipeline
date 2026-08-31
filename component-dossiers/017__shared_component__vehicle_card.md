# Component: vehicle_card

- Kind: `shared_component`
- Build order: 17
- Description: Vehicle option card with a product image and vehicle name.
- Target JSX: `src/refactored/components/vehicle_card/VehicleCard.jsx`
- Target CSS: `src/refactored/components/vehicle_card/VehicleCard.css`
- Export: `default VehicleCard`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard vehicle selection card.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `vehicle_card__default__home__desktop__01` | `home` | `desktop` | `[0.2056, 0.1559, 0.2882, 0.0648]` |
| `vehicle_card__default__home__desktop__02` | `home` | `desktop` | `[0.5062, 0.1559, 0.2882, 0.0648]` |
| `vehicle_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.1526, 0.9127, 0.0328]` |
| `vehicle_card__default__home__mobile__02` | `home` | `mobile` | `[0.0436, 0.1866, 0.9127, 0.0328]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `vehicle_card__default__home__desktop__01`
- Normalized bbox: `[0.2056, 0.1559, 0.2882, 0.0648]`
- Pixel bbox: `[296.06, 1017.25, 415.01, 422.82]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.973`
- Selected source / target area ratio: `0.992`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-2998` | [296.66, 1018, 413.34, 421.34] | [296.66, 1018, 413.34, 421.34] | 0.992 | 0.973 | 75 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995 > <div>.node-div-content-wrapper-main-link-2001-2998`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-2998" data-figma-node-id={"2001:2998"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-2998"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2998"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3229"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_gen4-scooter-hl-png-2001-2999" data-figma-node-id={"2001:2999"} data-figma-name={"Figure → Gen4-scooter-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_gen4-scooter-hl-png-2001-2999"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:2999"} data-figma-name-desktop={"Figure → Gen4-scooter-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3230" data-figma-node-id={"2001:3230"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3230"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3230"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3230.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-scooter-2001-3000" data-figma-node-id={"2001:3000"} data-figma-name={"Heading 3 → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-scooter-2001-3000"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3000"} data-figma-name-desktop={"Heading 3 → E-Scooter"} data-figma-node-id-mobile={"2001:3232"} data-figma-name-mobile={"Heading 3 → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
            </div>
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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/1661d33bb85f.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3230.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `vehicle_card__default__home__mobile__01`
- Normalized bbox: `[0.0436, 0.1526, 0.9127, 0.0328]`
- Pixel bbox: `[23.98, 1162.05, 501.98, 249.77]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.975`
- Selected source / target area ratio: `1.005`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-link-2001-2998` | [24, 1161.59, 502, 251] | [24, 1161.59, 502, 251] | 0.995 | 0.975 | 75 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-2995 > <div>.node-div-content-wrapper-main-link-2001-2998`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-link-2001-2998" data-figma-node-id={"2001:2998"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-2998"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:2998"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3229"} data-figma-name-mobile={"Link"}>
              <div className="figma-node node-main-link-figure_-_gen4-scooter-hl-png-2001-2999" data-figma-node-id={"2001:2999"} data-figma-name={"Figure → Gen4-scooter-HL.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-figure_-_gen4-scooter-hl-png-2001-2999"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:2999"} data-figma-name-desktop={"Figure → Gen4-scooter-HL.png"} />
              <img className="figma-node node-main-link-div-p-5-2001-3230" data-figma-node-id={"2001:3230"} data-figma-name={"div.p-5"} data-figma-type={"FRAME"} data-figma-class={"node-main-link-div-p-5-2001-3230"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-mobile={"2001:3230"} data-figma-name-mobile={"div.p-5"} src="/generated-pages/page-1/generated-assets/vectors/2001_3230.svg" alt={"div.p-5"} />
              <p className="figma-node node-main-link-heading_3_-_e-scooter-2001-3000" data-figma-node-id={"2001:3000"} data-figma-name={"Heading 3 → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-heading_3_-_e-scooter-2001-3000"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3000"} data-figma-name-desktop={"Heading 3 → E-Scooter"} data-figma-node-id-mobile={"2001:3232"} data-figma-name-mobile={"Heading 3 → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
            </div>
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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3230.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
