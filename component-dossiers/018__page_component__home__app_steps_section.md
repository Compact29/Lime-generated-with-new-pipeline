# Component: app_steps_section

- Kind: `page_component`
- Page: `home`
- Build order: 18
- Description: Three-step overview explaining how to locate, scan and ride a vehicle.
- Target JSX: `src/refactored/pages/home/components/app_steps_section/AppStepsSection.jsx`
- Target CSS: `src/refactored/pages/home/components/app_steps_section/AppStepsSection.css`
- Export: `default AppStepsSection`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive app usage steps section.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `app_steps_section__default__home__desktop__01` | `home` | `desktop` | `[0, 0.2352, 1, 0.1225]` |
| `app_steps_section__default__home__mobile__01` | `home` | `mobile` | `[0, 0.2269, 1, 0.2056]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_steps_section__default__home__desktop__01`
- Normalized bbox: `[0, 0.2352, 1, 0.1225]`
- Pixel bbox: `[0, 1534.68, 1440, 799.31]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.997`
- Selected source / target area ratio: `0.999`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004` | [0, 1535.34, 1440, 798.89] | [0, 1535.34, 1440, 798.89] | 0.999 | 0.997 | 86 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004`

#### Direct component dependencies

#### Slot `steps`: `instruction_step_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `InstructionStepCard`
- JSX implementation: `src/refactored/components/instruction_step_card/InstructionStepCard.jsx`
- CSS implementation: `src/refactored/components/instruction_step_card/InstructionStepCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_steps_section__default__home__desktop__01` | `instruction_step_card__default__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.27, 0.2875, 0.068]` |
| `app_steps_section__default__home__desktop__01` | `instruction_step_card__default__home__desktop__02` | `home` | `desktop` | `[0.3563, 0.27, 0.2875, 0.068]` |
| `app_steps_section__default__home__desktop__01` | `instruction_step_card__default__home__desktop__03` | `home` | `desktop` | `[0.6569, 0.27, 0.2875, 0.068]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004" data-figma-node-id={"2001:3004"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3004"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3237"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-the_app-2001-3005" data-figma-node-id={"2001:3005"} data-figma-name={"The App"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-the_app-2001-3005"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3005"} data-figma-name-desktop={"The App"} data-figma-node-id-mobile={"2001:3238"} data-figma-name-mobile={"The App"}><span className="ff-text-content">{"The App"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006" data-figma-node-id={"2001:3006"} data-figma-name={"Heading 2 → How to Lime"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3006"} data-figma-name-desktop={"Heading 2 → How to Lime"} data-figma-node-id-mobile={"2001:3239"} data-figma-name-mobile={"Heading 2 → How to Lime"}><span className="ff-text-content">{"How to Lime"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3007" data-figma-node-id={"2001:3007"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3007"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3007"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3240"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_locate-png-2001-3008" data-figma-node-id={"2001:3008"} data-figma-name={"Figure → LOCATE.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_locate-png-2001-3008"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3008"} data-figma-name-desktop={"Figure → LOCATE.png"} data-figma-node-id-mobile={"2001:3241"} data-figma-name-mobile={"Figure → LOCATE.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_locate-2001-3009" data-figma-node-id={"2001:3009"} data-figma-name={"Heading 3 → Locate"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_locate-2001-3009"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3009"} data-figma-name-desktop={"Heading 3 → Locate"} data-figma-node-id-mobile={"2001:3242"} data-figma-name-mobile={"Heading 3 → Locate"}><span className="ff-text-content">{"Locate"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010" data-figma-node-id={"2001:3010"} data-figma-name={"Download the Lime app to find a vehicle."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3010"} data-figma-name-desktop={"Download the Lime app to find a vehicle."} data-figma-node-id-mobile={"2001:3243"} data-figma-name-mobile={"Download the Lime app to find a vehicle."}><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d">{"Download the Lime app to find a\nvehicle."}</span><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m">{"Download the Lime app to find a vehicle."}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3011" data-figma-node-id={"2001:3011"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3011"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3011"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3244"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_scan-png-2001-3012" data-figma-node-id={"2001:3012"} data-figma-name={"Figure → SCAN.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_scan-png-2001-3012"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3012"} data-figma-name-desktop={"Figure → SCAN.png"} data-figma-node-id-mobile={"2001:3245"} data-figma-name-mobile={"Figure → SCAN.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_scan-2001-3013" data-figma-node-id={"2001:3013"} data-figma-name={"Heading 3 → Scan"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_scan-2001-3013"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3013"} data-figma-name-desktop={"Heading 3 → Scan"} data-figma-node-id-mobile={"2001:3246"} data-figma-name-mobile={"Heading 3 → Scan"}><span className="ff-text-content">{"Scan"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014" data-figma-node-id={"2001:3014"} data-figma-name={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3014"} data-figma-name-desktop={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."} data-figma-node-id-mobile={"2001:3247"} data-figma-name-mobile={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."}><span className="ff-text-content node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-d">{"Scan the QR code on the vehicle to\nunlock. Learn how to ride safely in\nthe app."}</span><span className="ff-text-content node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-m">{"Scan the QR code on the vehicle to unlock. Learn how to ride\nsafely in the app."}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3015" data-figma-node-id={"2001:3015"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3015"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3015"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3248"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016" data-figma-node-id={"2001:3016"} data-figma-name={"Figure → RIDE_2022-04-19-201703_ctuw.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3016"} data-figma-name-desktop={"Figure → RIDE_2022-04-19-201703_ctuw.png"} data-figma-node-id-mobile={"2001:3249"} data-figma-name-mobile={"Figure → RIDE_2022-04-19-201703_ctuw.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_ride-2001-3017" data-figma-node-id={"2001:3017"} data-figma-name={"Heading 3 → Ride"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_ride-2001-3017"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3017"} data-figma-name-desktop={"Heading 3 → Ride"} data-figma-node-id-mobile={"2001:3250"} data-figma-name-mobile={"Heading 3 → Ride"}><span className="ff-text-content">{"Ride"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018" data-figma-node-id={"2001:3018"} data-figma-name={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3018"} data-figma-name-desktop={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."} data-figma-node-id-mobile={"2001:3251"} data-figma-name-mobile={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."}><span className="ff-text-content node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-d">{"Follow all traffic rules, stick to the\nstreets and bike lanes where\nlegally permitted."}</span><span className="ff-text-content node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-m">{"Follow all traffic rules, stick to the streets and bike lanes\nwhere legally permitted."}</span></p>
            </div>
          </div>
```

#### Closed source CSS

Selected rules: 21; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:362 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(1423.34 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(798.89 * var(--figma-scale));
  z-index: 2;
  background-color: rgb(238, 238, 238);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:382 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-the_app-2001-3005 {
  box-sizing: border-box;
  position: absolute;
  left: calc(679.05 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(82.2164 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:422 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006 {
  box-sizing: border-box;
  position: absolute;
  left: calc(600.73 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(238.9156 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:610 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3011 {
  box-sizing: border-box;
  position: absolute;
  left: calc(513.33 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(413.33 * var(--figma-scale));
  height: calc(444.89 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:634 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-figure_-_scan-png-2001-3012 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(413.33 * var(--figma-scale));
  height: calc(289.33 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/a7dae4a9cc82.png");
  background-position: 0 calc(-0.0005 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(413.33 * var(--figma-scale)) calc(289.331 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:664 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-heading_3_-_scan-2001-3013 {
  box-sizing: border-box;
  position: absolute;
  left: calc(28 * var(--figma-scale));
  top: calc(329.33 * var(--figma-scale));
  width: calc(50.5538 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:704 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 {
  box-sizing: border-box;
  position: absolute;
  left: calc(136 * var(--figma-scale));
  top: calc(331.33 * var(--figma-scale));
  width: calc(243.67 * var(--figma-scale));
  min-height: calc(70.38 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:744 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 > .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-d {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:747 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 > .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:756 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3015 {
  box-sizing: border-box;
  position: absolute;
  left: calc(946.66 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(413.34 * var(--figma-scale));
  height: calc(444.89 * var(--figma-scale));
  z-index: 5;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:780 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(413.34 * var(--figma-scale));
  height: calc(289.33 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/3fd1a3e2fee7.png");
  background-position: 0 calc(-0.004 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(413.34 * var(--figma-scale)) calc(289.338 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:810 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-heading_3_-_ride-2001-3017 {
  box-sizing: border-box;
  position: absolute;
  left: calc(28 * var(--figma-scale));
  top: calc(329.33 * var(--figma-scale));
  width: calc(43.3312 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:850 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 {
  box-sizing: border-box;
  position: absolute;
  left: calc(136 * var(--figma-scale));
  top: calc(331.33 * var(--figma-scale));
  width: calc(227.99 * var(--figma-scale));
  min-height: calc(70.38 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:890 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 > .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-d {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:893 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 > .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/3fd1a3e2fee7.png`
- `/generated-pages/page-1/generated-assets/named/n/a7dae4a9cc82.png`
- `/generated-pages/page-1/generated-assets/named/n/f9d31b1704bb.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `app_steps_section__default__home__mobile__01`
- Normalized bbox: `[0, 0.2269, 1, 0.2056]`
- Pixel bbox: `[0, 1727.84, 550, 1565.64]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.997`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004` | [0, 1727.59, 550, 1565.73] | [0, 1727.59, 550, 1565.73] | 1 | 0.997 | 86 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004`

#### Direct component dependencies

#### Slot `steps`: `instruction_step_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `InstructionStepCard`
- JSX implementation: `src/refactored/components/instruction_step_card/InstructionStepCard.jsx`
- CSS implementation: `src/refactored/components/instruction_step_card/InstructionStepCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `app_steps_section__default__home__mobile__01` | `instruction_step_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.2511, 0.9127, 0.0557]` |
| `app_steps_section__default__home__mobile__01` | `instruction_step_card__default__home__mobile__02` | `home` | `mobile` | `[0.0436, 0.3097, 0.9127, 0.0562]` |
| `app_steps_section__default__home__mobile__01` | `instruction_step_card__default__home__mobile__03` | `home` | `mobile` | `[0.0436, 0.3689, 0.9127, 0.0562]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004" data-figma-node-id={"2001:3004"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3004"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3237"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-the_app-2001-3005" data-figma-node-id={"2001:3005"} data-figma-name={"The App"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-the_app-2001-3005"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3005"} data-figma-name-desktop={"The App"} data-figma-node-id-mobile={"2001:3238"} data-figma-name-mobile={"The App"}><span className="ff-text-content">{"The App"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006" data-figma-node-id={"2001:3006"} data-figma-name={"Heading 2 → How to Lime"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3006"} data-figma-name-desktop={"Heading 2 → How to Lime"} data-figma-node-id-mobile={"2001:3239"} data-figma-name-mobile={"Heading 2 → How to Lime"}><span className="ff-text-content">{"How to Lime"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3007" data-figma-node-id={"2001:3007"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3007"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3007"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3240"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_locate-png-2001-3008" data-figma-node-id={"2001:3008"} data-figma-name={"Figure → LOCATE.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_locate-png-2001-3008"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3008"} data-figma-name-desktop={"Figure → LOCATE.png"} data-figma-node-id-mobile={"2001:3241"} data-figma-name-mobile={"Figure → LOCATE.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_locate-2001-3009" data-figma-node-id={"2001:3009"} data-figma-name={"Heading 3 → Locate"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_locate-2001-3009"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3009"} data-figma-name-desktop={"Heading 3 → Locate"} data-figma-node-id-mobile={"2001:3242"} data-figma-name-mobile={"Heading 3 → Locate"}><span className="ff-text-content">{"Locate"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010" data-figma-node-id={"2001:3010"} data-figma-name={"Download the Lime app to find a vehicle."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3010"} data-figma-name-desktop={"Download the Lime app to find a vehicle."} data-figma-node-id-mobile={"2001:3243"} data-figma-name-mobile={"Download the Lime app to find a vehicle."}><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-d">{"Download the Lime app to find a\nvehicle."}</span><span className="ff-text-content node-main-div-overflow-hidden-download_the_lime_app_to_find_a_vehicle-2001-3010-text-m">{"Download the Lime app to find a vehicle."}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3011" data-figma-node-id={"2001:3011"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3011"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3011"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3244"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_scan-png-2001-3012" data-figma-node-id={"2001:3012"} data-figma-name={"Figure → SCAN.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_scan-png-2001-3012"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3012"} data-figma-name-desktop={"Figure → SCAN.png"} data-figma-node-id-mobile={"2001:3245"} data-figma-name-mobile={"Figure → SCAN.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_scan-2001-3013" data-figma-node-id={"2001:3013"} data-figma-name={"Heading 3 → Scan"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_scan-2001-3013"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3013"} data-figma-name-desktop={"Heading 3 → Scan"} data-figma-node-id-mobile={"2001:3246"} data-figma-name-mobile={"Heading 3 → Scan"}><span className="ff-text-content">{"Scan"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014" data-figma-node-id={"2001:3014"} data-figma-name={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3014"} data-figma-name-desktop={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."} data-figma-node-id-mobile={"2001:3247"} data-figma-name-mobile={"Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app."}><span className="ff-text-content node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-d">{"Scan the QR code on the vehicle to\nunlock. Learn how to ride safely in\nthe app."}</span><span className="ff-text-content node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-m">{"Scan the QR code on the vehicle to unlock. Learn how to ride\nsafely in the app."}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-div-overflow-hidden-2001-3015" data-figma-node-id={"2001:3015"} data-figma-name={"div.overflow-hidden"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-div-overflow-hidden-2001-3015"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3015"} data-figma-name-desktop={"div.overflow-hidden"} data-figma-node-id-mobile={"2001:3248"} data-figma-name-mobile={"div.overflow-hidden"}>
              <div className="figma-node node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016" data-figma-node-id={"2001:3016"} data-figma-name={"Figure → RIDE_2022-04-19-201703_ctuw.png"} data-figma-type={"FRAME"} data-figma-class={"node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3016"} data-figma-name-desktop={"Figure → RIDE_2022-04-19-201703_ctuw.png"} data-figma-node-id-mobile={"2001:3249"} data-figma-name-mobile={"Figure → RIDE_2022-04-19-201703_ctuw.png"} />
              <p className="figma-node node-main-div-overflow-hidden-heading_3_-_ride-2001-3017" data-figma-node-id={"2001:3017"} data-figma-name={"Heading 3 → Ride"} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-heading_3_-_ride-2001-3017"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3017"} data-figma-name-desktop={"Heading 3 → Ride"} data-figma-node-id-mobile={"2001:3250"} data-figma-name-mobile={"Heading 3 → Ride"}><span className="ff-text-content">{"Ride"}</span></p>
              <p className="figma-node node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018" data-figma-node-id={"2001:3018"} data-figma-name={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."} data-figma-type={"TEXT"} data-figma-class={"node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3018"} data-figma-name-desktop={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."} data-figma-node-id-mobile={"2001:3251"} data-figma-name-mobile={"Follow all traffic rules, stick to the streets and bike lanes where legally permitted."}><span className="ff-text-content node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-d">{"Follow all traffic rules, stick to the\nstreets and bike lanes where\nlegally permitted."}</span><span className="ff-text-content node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-m">{"Follow all traffic rules, stick to the streets and bike lanes\nwhere legally permitted."}</span></p>
            </div>
          </div>
```

#### Closed source CSS

Selected rules: 21; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:372 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3004 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(1643.59 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(1565.73 * var(--figma-scale));
  z-index: 2;
  background-color: rgb(238, 238, 238);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:402 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-the_app-2001-3005 {
  box-sizing: border-box;
  position: absolute;
  left: calc(242.23 * var(--figma-scale));
  top: calc(77 * var(--figma-scale));
  width: calc(65.8208 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:443 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-heading_2_-_how_to_lime-2001-3006 {
  box-sizing: border-box;
  position: absolute;
  left: calc(185.55 * var(--figma-scale));
  top: calc(101.6 * var(--figma-scale));
  width: calc(179.229 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:622 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3011 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(616.58 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(442.58 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:649 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-figure_-_scan-png-2001-3012 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(351.39 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/cfa3ee35015d.png");
  background-position: 0 calc(-0.005 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(502 * var(--figma-scale)) calc(351.4 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:684 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-heading_3_-_scan-2001-3013 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(376.39 * var(--figma-scale));
  width: calc(40.4924 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:724 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 {
  box-sizing: border-box;
  position: absolute;
  left: calc(112 * var(--figma-scale));
  top: calc(377.39 * var(--figma-scale));
  width: calc(360.01 * var(--figma-scale));
  min-height: calc(38.6 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:750 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 > .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:753 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014 > .node-main-div-overflow-hidden-scan_the_qr_code_on_the_vehicle_to_unlock-_learn_how_to_ride_safely_in_the_app-2001-3014-text-m {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:768 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-div-overflow-hidden-2001-3015 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(1067.16 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(442.58 * var(--figma-scale));
  z-index: 5;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: calc(20 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:795 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-figure_-_ride_2022-04-19-201703_ctuw-png-2001-3016 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(351.39 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/fe266f370283.png");
  background-position: 0 calc(-0.005 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(502 * var(--figma-scale)) calc(351.4 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:830 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-heading_3_-_ride-2001-3017 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(376.39 * var(--figma-scale));
  width: calc(34.7144 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:870 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 {
  box-sizing: border-box;
  position: absolute;
  left: calc(112 * var(--figma-scale));
  top: calc(377.39 * var(--figma-scale));
  width: calc(329.93 * var(--figma-scale));
  min-height: calc(38.59 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:896 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 > .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:899 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018 > .node-main-div-overflow-hidden-follow_all_traffic_rules-_stick_to_the_streets_and_bike_lanes_where_legally_permitted-2001-3018-text-m {
  display: inline;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/4da44716b06d.png`
- `/generated-pages/page-1/generated-assets/named/n/cfa3ee35015d.png`
- `/generated-pages/page-1/generated-assets/named/n/fe266f370283.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
