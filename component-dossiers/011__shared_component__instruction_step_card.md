# Component: instruction_step_card

- Kind: `shared_component`
- Build order: 11
- Description: Instruction card combining an app usage image, step label and guidance.
- Target JSX: `src/refactored/components/instruction_step_card/InstructionStepCard.jsx`
- Target CSS: `src/refactored/components/instruction_step_card/InstructionStepCard.css`
- Export: `default InstructionStepCard`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard app usage step card.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `instruction_step_card__default__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.27, 0.2875, 0.068]` |
| `instruction_step_card__default__home__desktop__02` | `home` | `desktop` | `[0.3563, 0.27, 0.2875, 0.068]` |
| `instruction_step_card__default__home__desktop__03` | `home` | `desktop` | `[0.6569, 0.27, 0.2875, 0.068]` |
| `instruction_step_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.2511, 0.9127, 0.0557]` |
| `instruction_step_card__default__home__mobile__02` | `home` | `mobile` | `[0.0436, 0.3097, 0.9127, 0.0562]` |
| `instruction_step_card__default__home__mobile__03` | `home` | `mobile` | `[0.0436, 0.3689, 0.9127, 0.0562]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `instruction_step_card__default__home__desktop__01`
- Normalized bbox: `[0.0556, 0.27, 0.2875, 0.068]`
- Pixel bbox: `[80.06, 1761.75, 414, 443.7]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.979`
- Selected source / target area ratio: `1.001`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-div-overflow-hidden-2001-3007` | [80, 1761.34, 413.33, 444.89] | [80, 1761.34, 413.33, 444.89] | 0.995 | 0.979 | 89 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004 > <div>.node-div-content-wrapper-main-div-overflow-hidden-2001-3007`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3007" data-figma-node-id={"2001:3007"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3007"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3007"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3240"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_locate-png-2001-3008" data-figma-node-id={"2001:3008"} data-figma-name={"Figure → LOCATE.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_locate-png-2001-3008"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3008"} data-figma-name-desktop={"Figure → LOCATE.png"} data-figma-node-id-mobile={"2001:3241"} data-figma-name-mobile={"Figure → LOCATE.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_locate-2001-3009" data-figma-node-id={"2001:3009"} data-figma-name={"Heading 3 → Locate"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_locate-2001-3009"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3009"} data-figma-name-desktop={"Heading 3 → Locate"} data-figma-node-id-mobile={"2001:3242"} data-figma-name-mobile={"Heading 3 → Locate"}><span className="ff-text-content">{"Locate"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010" data-figma-node-id={"2001:3010"} data-figma-name={"Download the Lime app to find a vehicle."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3010"} data-figma-name-desktop={"Download the Lime app to find a vehicle."} data-figma-node-id-mobile={"2001:3243"} data-figma-name-mobile={"Download the Lime app to find a vehicle."}><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d">{"Download the Lime app to find a\nvehicle."}</span><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m">{"Download the Lime app to find a vehicle."}</span></p>
            </div>
```

#### Closed source CSS

Selected rules: 6; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:464 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3007 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(413.33 * var(--figma-scale));
  height: calc(444.89 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:488 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-figure_-_locate-png-2001-3008 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(413.33 * var(--figma-scale));
  height: calc(289.33 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/f9d31b1704bb.png");
  background-position: 0 calc(-0.0005 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(413.33 * var(--figma-scale)) calc(289.331 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:518 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-heading_3_-_locate-2001-3009 {
  box-sizing: border-box;
  position: absolute;
  left: calc(28 * var(--figma-scale));
  top: calc(329.33 * var(--figma-scale));
  width: calc(67.0828 * var(--figma-scale));
  min-height: calc(32 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(32 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 178, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:558 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 {
  box-sizing: border-box;
  position: absolute;
  left: calc(136 * var(--figma-scale));
  top: calc(331.33 * var(--figma-scale));
  width: calc(226.98 * var(--figma-scale));
  min-height: calc(45.19 * var(--figma-scale));
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
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:598 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 > .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:601 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 > .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/f9d31b1704bb.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `instruction_step_card__default__home__mobile__01`
- Normalized bbox: `[0.0436, 0.2511, 0.9127, 0.0557]`
- Pixel bbox: `[23.98, 1912.13, 501.98, 424.16]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.981`
- Selected source / target area ratio: `1.002`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-content-wrapper-main-div-overflow-hidden-2001-3007` | [24, 1911.19, 502, 424.98] | [24, 1911.19, 502, 424.98] | 0.997 | 0.981 | 89 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004 > <div>.node-div-content-wrapper-main-div-overflow-hidden-2001-3007`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3007" data-figma-node-id={"2001:3007"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3007"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3007"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3240"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_locate-png-2001-3008" data-figma-node-id={"2001:3008"} data-figma-name={"Figure → LOCATE.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_locate-png-2001-3008"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3008"} data-figma-name-desktop={"Figure → LOCATE.png"} data-figma-node-id-mobile={"2001:3241"} data-figma-name-mobile={"Figure → LOCATE.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_locate-2001-3009" data-figma-node-id={"2001:3009"} data-figma-name={"Heading 3 → Locate"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_locate-2001-3009"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3009"} data-figma-name-desktop={"Heading 3 → Locate"} data-figma-node-id-mobile={"2001:3242"} data-figma-name-mobile={"Heading 3 → Locate"}><span className="ff-text-content">{"Locate"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010" data-figma-node-id={"2001:3010"} data-figma-name={"Download the Lime app to find a vehicle."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3010"} data-figma-name-desktop={"Download the Lime app to find a vehicle."} data-figma-node-id-mobile={"2001:3243"} data-figma-name-mobile={"Download the Lime app to find a vehicle."}><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d">{"Download the Lime app to find a\nvehicle."}</span><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m">{"Download the Lime app to find a vehicle."}</span></p>
            </div>
```

#### Closed source CSS

Selected rules: 6; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:476 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3007 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(183.6 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(424.98 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:503 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-figure_-_locate-png-2001-3008 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(351.39 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/4da44716b06d.png");
  background-position: 0 calc(-0.005 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(502 * var(--figma-scale)) calc(351.4 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:538 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-heading_3_-_locate-2001-3009 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(376.39 * var(--figma-scale));
  width: calc(53.8039 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(25.6 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 178, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:578 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 {
  box-sizing: border-box;
  position: absolute;
  left: calc(112 * var(--figma-scale));
  top: calc(377.39 * var(--figma-scale));
  width: calc(242.9787 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 3;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21.6 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:604 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 > .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:607 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010 > .node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m {
  display: inline;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/4da44716b06d.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
