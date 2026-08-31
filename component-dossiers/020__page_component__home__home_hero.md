# Component: home_hero

- Kind: `page_component`
- Page: `home`
- Build order: 20
- Description: Homepage hero introducing Lime mobility with city and app download actions.
- Target JSX: `src/refactored/pages/home/components/home_hero/HomeHero.jsx`
- Target CSS: `src/refactored/pages/home/components/home_hero/HomeHero.css`
- Export: `default HomeHero`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Full-bleed promotional homepage hero.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `home_hero__default__home__desktop__01` | `home` | `desktop` | `[0, 0, 1, 0.1214]` |
| `home_hero__default__home__mobile__01` | `home` | `mobile` | `[0, 0, 1, 0.1284]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `home_hero__default__home__desktop__01`
- Normalized bbox: `[0, 0, 1, 0.1214]`
- Pixel bbox: `[0, 0, 1440, 792.13]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.988`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | [0, 0, 1440, 792] | [0, 0, 1440, 792] | 1 | 0.988 | 162 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066`

#### Direct component dependencies

#### Slot `location_action`: `button.outline`

- Kind: `primitive`
- Required variant: `outline`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `home_hero__default__home__desktop__01` | `button__outline__home__desktop__01` | `home` | `desktop` | `[0.3951, 0.0785, 0.0771, 0.0074]` |

#### Slot `download_action`: `button.primary`

- Kind: `primitive`
- Required variant: `primary`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `home_hero__default__home__desktop__01` | `button__primary__home__desktop__02` | `home` | `desktop` | `[0.4806, 0.0785, 0.1243, 0.0074]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066" data-figma-node-id={"2001:3066"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3066"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3289"} data-figma-name-mobile={"Main"}>
            <div className="figma-node node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067" data-figma-node-id={"2001:3067"} data-figma-name={"HERO_2022-04-19-234518_eqga.png"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3067"} data-figma-name-desktop={"HERO_2022-04-19-234518_eqga.png"} data-figma-node-id-mobile={"2001:3290"} data-figma-name-mobile={"HERO_2022-04-19-234518_eqga.png"} />
            <div className="figma-node node-div-content-wrapper-main-div-absolute-2001-3068" data-figma-node-id={"2001:3068"} data-figma-name={"div.absolute"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-div-absolute-2001-3068"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_GRADIENT_FILL_RULE"} data-figma-node-id-desktop={"2001:3068"} data-figma-name-desktop={"div.absolute"} data-figma-node-id-mobile={"2001:3291"} data-figma-name-mobile={"div.absolute"} />
            <p className="figma-node node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069" data-figma-node-id={"2001:3069"} data-figma-name={"Heading 1 → Ride Green"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3069"} data-figma-name-desktop={"Heading 1 → Ride Green"} data-figma-node-id-mobile={"2001:3292"} data-figma-name-mobile={"Heading 1 → Ride Green"}><span className="ff-text-content">{"Ride Green"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3070" data-figma-node-id={"2001:3070"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3070"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3070"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3293"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-our_cities-2001-3071" data-figma-node-id={"2001:3071"} data-figma-name={"Our cities"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-our_cities-2001-3071"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3071"} data-figma-name-desktop={"Our cities"} data-figma-node-id-mobile={"2001:3294"} data-figma-name-mobile={"Our cities"}><span className="ff-text-content">{"Our cities"}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3072" data-figma-node-id={"2001:3072"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3072"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3072"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3295"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-download_the_app-2001-3073" data-figma-node-id={"2001:3073"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-download_the_app-2001-3073"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3073"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3296"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2043 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 {
  box-sizing: border-box;
  position: absolute;
  left: calc(0.002 * var(--figma-scale));
  top: calc(-112 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(792 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2063 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(1440 * var(--figma-scale));
  height: calc(792 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/b50d74e06bed.jpg");
  background-position: calc(-0.002 * var(--figma-scale)) calc(-333 * var(--figma-scale));
  background-repeat: no-repeat;
  background-size: calc(1440 * var(--figma-scale)) calc(1440 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2093 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-div-absolute-2001-3068 {
  box-sizing: border-box;
  position: absolute;
  left: calc(-0.002 * var(--figma-scale));
  top: 0;
  width: calc(1440 * var(--figma-scale));
  height: calc(640 * var(--figma-scale));
  opacity: 0.75;
  z-index: 2;
  background-image: linear-gradient(180deg, rgb(26, 26, 26) -0.0%, rgba(26, 26, 26, 0.0) 100.0%);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2115 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069 {
  box-sizing: border-box;
  position: absolute;
  left: calc(523.8584 * var(--figma-scale));
  top: calc(389.4199 * var(--figma-scale));
  width: calc(392.6228 * var(--figma-scale));
  min-height: calc(101 * var(--figma-scale));
  z-index: 3;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(72 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(79.2 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
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

- `/generated-pages/page-1/generated-assets/named/n/b50d74e06bed.jpg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196` | `[0, 0, 1440, 112]` | 0.141 | 1 | 283 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `home_hero__default__home__mobile__01`
- Normalized bbox: `[0, 0, 1, 0.1284]`
- Pixel bbox: `[0, 0, 550, 977.77]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.987`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | [0, 0, 550, 978] | [0, 0, 550, 978] | 1 | 0.987 | 162 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066`

#### Direct component dependencies

#### Slot `location_action`: `button.outline`

- Kind: `primitive`
- Required variant: `outline`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `home_hero__default__home__mobile__01` | `button__outline__home__mobile__01` | `home` | `mobile` | `[0.2564, 0.0345, 0.1855, 0.0054]` |

#### Slot `download_action`: `button.primary`

- Kind: `primitive`
- Required variant: `primary`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `home_hero__default__home__mobile__01` | `button__primary__home__mobile__01` | `home` | `mobile` | `[0.4582, 0.0345, 0.2909, 0.0054]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066" data-figma-node-id={"2001:3066"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3066"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3289"} data-figma-name-mobile={"Main"}>
            <div className="figma-node node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067" data-figma-node-id={"2001:3067"} data-figma-name={"HERO_2022-04-19-234518_eqga.png"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3067"} data-figma-name-desktop={"HERO_2022-04-19-234518_eqga.png"} data-figma-node-id-mobile={"2001:3290"} data-figma-name-mobile={"HERO_2022-04-19-234518_eqga.png"} />
            <div className="figma-node node-div-content-wrapper-main-div-absolute-2001-3068" data-figma-node-id={"2001:3068"} data-figma-name={"div.absolute"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-div-absolute-2001-3068"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_GRADIENT_FILL_RULE"} data-figma-node-id-desktop={"2001:3068"} data-figma-name-desktop={"div.absolute"} data-figma-node-id-mobile={"2001:3291"} data-figma-name-mobile={"div.absolute"} />
            <p className="figma-node node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069" data-figma-node-id={"2001:3069"} data-figma-name={"Heading 1 → Ride Green"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3069"} data-figma-name-desktop={"Heading 1 → Ride Green"} data-figma-node-id-mobile={"2001:3292"} data-figma-name-mobile={"Heading 1 → Ride Green"}><span className="ff-text-content">{"Ride Green"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3070" data-figma-node-id={"2001:3070"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3070"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3070"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3293"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-our_cities-2001-3071" data-figma-node-id={"2001:3071"} data-figma-name={"Our cities"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-our_cities-2001-3071"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3071"} data-figma-name-desktop={"Our cities"} data-figma-node-id-mobile={"2001:3294"} data-figma-name-mobile={"Our cities"}><span className="ff-text-content">{"Our cities"}</span></p>
            </div>
            <div className="figma-node node-div-content-wrapper-main-link-2001-3072" data-figma-node-id={"2001:3072"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-link-2001-3072"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3072"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3295"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-main-link-download_the_app-2001-3073" data-figma-node-id={"2001:3073"} data-figma-name={"Download the App"} data-figma-type={"TEXT"} data-figma-class={"node-main-link-download_the_app-2001-3073"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3073"} data-figma-name-desktop={"Download the App"} data-figma-node-id-mobile={"2001:3296"} data-figma-name-mobile={"Download the App"}><span className="ff-text-content">{"Download the App"}</span></p>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2053 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(-84 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(978 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2078 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-hero_2022-04-19-234518_eqga-png-2001-3067 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(550 * var(--figma-scale));
  height: calc(978 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/59bc8a0270ac.jpg");
  background-position: calc(-214 * var(--figma-scale)) 0;
  background-repeat: no-repeat;
  background-size: calc(978 * var(--figma-scale)) calc(978 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2104 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-div-absolute-2001-3068 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(550 * var(--figma-scale));
  height: calc(384 * var(--figma-scale));
  opacity: 0.75;
  z-index: 2;
  background-image: linear-gradient(180deg, rgb(26, 26, 26) -0.0%, rgba(26, 26, 26, 0.0) 100.0%);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2135 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-heading_1_-_ride_green-2001-3069 {
  box-sizing: border-box;
  position: absolute;
  left: calc(193.27 * var(--figma-scale));
  top: calc(197.81 * var(--figma-scale));
  width: calc(163.7769 * var(--figma-scale));
  min-height: calc(33 * var(--figma-scale));
  z-index: 3;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(33 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
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

- `/generated-pages/page-1/generated-assets/named/n/59bc8a0270ac.jpg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196` | `[0, 0, 550, 84]` | 0.086 | 1 | 283 |
