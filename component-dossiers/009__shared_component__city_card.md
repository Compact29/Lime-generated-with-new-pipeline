# Component: city_card

- Kind: `shared_component`
- Build order: 9
- Description: Destination card with city photography and a linked city name.
- Target JSX: `src/refactored/components/city_card/CityCard.jsx`
- Target CSS: `src/refactored/components/city_card/CityCard.css`
- Export: `default CityCard`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard city carousel card.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `city_card__default__home__desktop__01` | `home` | `desktop` | `[0.0639, 0.3923, 0.3389, 0.0682]` |
| `city_card__default__home__desktop__02` | `home` | `desktop` | `[0.4194, 0.3923, 0.3389, 0.0682]` |
| `city_card__default__home__desktop__03` | `home` | `desktop` | `[0.775, 0.3923, 0.225, 0.0682]` |
| `city_card__default__home__mobile__01` | `home` | `mobile` | `[0.0509, 0.4523, 0.8982, 0.0571]` |
| `city_card__default__home__mobile__02` | `home` | `mobile` | `[0.9636, 0.4524, 0.0364, 0.057]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `city_card__default__home__desktop__01`
- Normalized bbox: `[0.0639, 0.3923, 0.3389, 0.0682]`
- Pixel bbox: `[92.02, 2559.76, 488.02, 445]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.939`
- Selected source / target area ratio: `1.033`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-main-region_-_listbox-option-2001-3023` | [80, 2560.23, 512, 438] | [80, 2560.23, 512, 438] | 0.939 | 0.939 | 109 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_listbox-2001-3022 > <div>.node-main-region_-_listbox-option-2001-3023`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-main-region_-_listbox-option-2001-3023" data-figma-node-id={"2001:3023"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3023"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3023"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3256"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024" data-figma-node-id={"2001:3024"} data-figma-name={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3024"} data-figma-name-desktop={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-node-id-mobile={"2001:3257"} data-figma-name-mobile={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025" data-figma-node-id={"2001:3025"} data-figma-name={"Figure → Figcaption → Link → New York"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3025"} data-figma-name-desktop={"Figure → Figcaption → Link → New York"} data-figma-node-id-mobile={"2001:3258"} data-figma-name-mobile={"Figure → Figcaption → Link → New York"}><span className="ff-text-content">{"New York"}</span></p>
                <div className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026" data-figma-node-id={"2001:3026"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3026"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} data-figma-node-id-mobile={"2001:3259"} data-figma-name-mobile={"Figure → Figcaption → Link → SVG"}>
                  <img className="figma-vec-desktop node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3026.svg" alt={"Figure → Figcaption → Link → SVG"} />
                  <img className="figma-vec-mobile node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3259.svg" alt={"Figure → Figcaption → Link → SVG"} />
                </div>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1028 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3023 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1048 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: 0;
  width: calc(488 * var(--figma-scale));
  height: calc(380 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/c83391b775a3.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1080 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(408 * var(--figma-scale));
  width: calc(90.7898 * var(--figma-scale));
  min-height: calc(30 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(20 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(30 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1122 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 {
  box-sizing: border-box;
  position: absolute;
  left: calc(112.4502 * var(--figma-scale));
  top: calc(416 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(14 * var(--figma-scale));
  z-index: 3;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1144 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 > .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1154 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 > .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/c83391b775a3.jpg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3026.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3259.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `city_card__default__home__mobile__01`
- Normalized bbox: `[0.0509, 0.4523, 0.8982, 0.0571]`
- Pixel bbox: `[28, 3444.26, 494.01, 434.82]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.945`
- Selected source / target area ratio: `0.976`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-main-region_-_listbox-option-2001-3023` | [24, 3444.92, 502, 417.67] | [24, 3444.92, 502, 417.67] | 0.946 | 0.945 | 109 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 > <div>.node-div-content-wrapper-main-region_-_listbox-2001-3022 > <div>.node-main-region_-_listbox-option-2001-3023`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-main-region_-_listbox-option-2001-3023" data-figma-node-id={"2001:3023"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3023"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3023"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3256"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024" data-figma-node-id={"2001:3024"} data-figma-name={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3024"} data-figma-name-desktop={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-node-id-mobile={"2001:3257"} data-figma-name-mobile={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025" data-figma-node-id={"2001:3025"} data-figma-name={"Figure → Figcaption → Link → New York"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3025"} data-figma-name-desktop={"Figure → Figcaption → Link → New York"} data-figma-node-id-mobile={"2001:3258"} data-figma-name-mobile={"Figure → Figcaption → Link → New York"}><span className="ff-text-content">{"New York"}</span></p>
                <div className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026" data-figma-node-id={"2001:3026"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3026"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} data-figma-node-id-mobile={"2001:3259"} data-figma-name-mobile={"Figure → Figcaption → Link → SVG"}>
                  <img className="figma-vec-desktop node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3026.svg" alt={"Figure → Figcaption → Link → SVG"} />
                  <img className="figma-vec-mobile node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3259.svg" alt={"Figure → Figcaption → Link → SVG"} />
                </div>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1038 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3023 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1064 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: 0;
  width: calc(494 * var(--figma-scale));
  height: calc(384.67 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/234ebe19073c.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(494 * var(--figma-scale)) calc(384.67 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1101 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: calc(396.67 * var(--figma-scale));
  width: calc(63.7047 * var(--figma-scale));
  min-height: calc(21 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1133 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 {
  box-sizing: border-box;
  position: absolute;
  left: calc(77.3096 * var(--figma-scale));
  top: calc(400.1699 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(14 * var(--figma-scale));
  z-index: 3;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1157 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 > .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1160 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026 > .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m {
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

- `/generated-pages/page-1/generated-assets/named/n/234ebe19073c.jpg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3026.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3259.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
