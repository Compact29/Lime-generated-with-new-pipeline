# Component: principles_section

- Kind: `page_component`
- Page: `home`
- Build order: 22
- Description: Carousel presenting Lime safety, sustainability and community principles.
- Target JSX: `src/refactored/pages/home/components/principles_section/PrinciplesSection.jsx`
- Target CSS: `src/refactored/pages/home/components/principles_section/PrinciplesSection.css`
- Export: `default PrinciplesSection`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive core principles carousel section.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `principles_section__default__home__desktop__01` | `home` | `desktop` | `[0, 0.4766, 1, 0.1263]` |
| `principles_section__default__home__mobile__01` | `home` | `mobile` | `[0, 0.5187, 1, 0.0875]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `principles_section__default__home__desktop__01`
- Normalized bbox: `[0, 0.4766, 1, 0.1263]`
- Pixel bbox: `[0, 3109.82, 1440, 824.11]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.973`
- Selected source / target area ratio: `0.971`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049` | [0, 3134.23, 1440, 800] | [0, 3134.23, 1440, 800] | 0.97 | 0.973 | 140 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049`

#### Direct component dependencies

#### Slot `principles`: `principle_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `PrincipleCard`
- JSX implementation: `src/refactored/components/principle_card/PrincipleCard.jsx`
- CSS implementation: `src/refactored/components/principle_card/PrincipleCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `principles_section__default__home__desktop__01` | `principle_card__default__home__desktop__01` | `home` | `desktop` | `[0.0639, 0.5149, 0.3389, 0.0674]` |
| `principles_section__default__home__desktop__01` | `principle_card__default__home__desktop__02` | `home` | `desktop` | `[0.4194, 0.5149, 0.3389, 0.0674]` |
| `principles_section__default__home__desktop__01` | `principle_card__default__home__desktop__03` | `home` | `desktop` | `[0.775, 0.5149, 0.225, 0.0674]` |

#### Slot `pagination`: `carousel_pagination.compact`

- Kind: `primitive`
- Required variant: `compact`
- Default export: `CarouselPagination`
- JSX implementation: `src/refactored/components/carousel_pagination/CarouselPagination.jsx`
- CSS implementation: `src/refactored/components/carousel_pagination/CarouselPagination.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `principles_section__default__home__desktop__01` | `carousel_pagination__compact__home__desktop__01` | `home` | `desktop` | `[0.4736, 0.5893, 0.0528, 0.0015]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049" data-figma-node-id={"2001:3049"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3049"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3275"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-why_lime-2001-3050" data-figma-node-id={"2001:3050"} data-figma-name={"Why Lime"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-why_lime-2001-3050"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3050"} data-figma-name-desktop={"Why Lime"} data-figma-node-id-mobile={"2001:3276"} data-figma-name-mobile={"Why Lime"}><span className="ff-text-content">{"Why Lime"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051" data-figma-node-id={"2001:3051"} data-figma-name={"Heading 2 → Our Core Principles"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3051"} data-figma-name-desktop={"Heading 2 → Our Core Principles"} data-figma-node-id-mobile={"2001:3277"} data-figma-name-mobile={"Heading 2 → Our Core Principles"}><span className="ff-text-content">{"Our Core Principles"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-region_-_listbox-2001-3052" data-figma-node-id={"2001:3052"} data-figma-name={"Region → Listbox"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-region_-_listbox-2001-3052"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3052"} data-figma-name-desktop={"Region → Listbox"} data-figma-node-id-mobile={"2001:3278"} data-figma-name-mobile={"Region → Listbox"}>
              <div className="figma-node node-main-region_-_listbox-option-2001-3053" data-figma-node-id={"2001:3053"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3053"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3053"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3279"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054" data-figma-node-id={"2001:3054"} data-figma-name={"Figure → Figure → Link → SAFETY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3054"} data-figma-name-desktop={"Figure → Figure → Link → SAFETY.png"} data-figma-node-id-mobile={"2001:3280"} data-figma-name-mobile={"Figure → Figure → Link → SAFETY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055" data-figma-node-id={"2001:3055"} data-figma-name={"Figure → Figcaption → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3055"} data-figma-name-desktop={"Figure → Figcaption → Link → Safety"} data-figma-node-id-mobile={"2001:3281"} data-figma-name-mobile={"Figure → Figcaption → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3056" data-figma-node-id={"2001:3056"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3056"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3056"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3282"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057" data-figma-node-id={"2001:3057"} data-figma-name={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3057"} data-figma-name-desktop={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} data-figma-node-id-mobile={"2001:3283"} data-figma-name-mobile={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058" data-figma-node-id={"2001:3058"} data-figma-name={"Figure → Figcaption → Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3058"} data-figma-name-desktop={"Figure → Figcaption → Link → Sustainability"} data-figma-node-id-mobile={"2001:3284"} data-figma-name-mobile={"Figure → Figcaption → Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3059" data-figma-node-id={"2001:3059"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3059"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3059"} data-figma-name-desktop={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060" data-figma-node-id={"2001:3060"} data-figma-name={"Figure → Figure → Link → COMMUNITY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3060"} data-figma-name-desktop={"Figure → Figure → Link → COMMUNITY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061" data-figma-node-id={"2001:3061"} data-figma-name={"Figure → Figcaption → Link → Community"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3061"} data-figma-name-desktop={"Figure → Figcaption → Link → Community"}><span className="ff-text-content">{"Community"}</span></p>
              </div>
            </div>
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062" data-figma-node-id={"2001:3062"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3062"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3285"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063" data-figma-node-id={"2001:3063"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3063"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3286"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064" data-figma-node-id={"2001:3064"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3064"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3287"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065" data-figma-node-id={"2001:3065"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3065"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3288"} data-figma-name-mobile={"Region → List → Item → Button"} />
          </div>
```

#### Closed source CSS

Selected rules: 17; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1587 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(3022.23 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(800 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1609 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-why_lime-2001-3050 {
  box-sizing: border-box;
  position: absolute;
  left: calc(672.25 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(95.8276 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1649 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051 {
  box-sizing: border-box;
  position: absolute;
  left: calc(532.03 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(376.2664 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1691 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_listbox-2001-3052 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(226 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1713 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3053 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1733 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1765 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(409 * var(--figma-scale));
  width: calc(63.1731 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1807 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3056 {
  box-sizing: border-box;
  position: absolute;
  left: calc(592 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1827 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/35369c9da425.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1859 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(409 * var(--figma-scale));
  width: calc(134.1438 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1901 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3059 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1104 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1914 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: 0;
  width: calc(488 * var(--figma-scale));
  height: calc(380 * var(--figma-scale));
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/1bb15f2e697e.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1932 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(409 * var(--figma-scale));
  width: calc(118.8836 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
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

- `/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg`
- `/generated-pages/page-1/generated-assets/named/n/1bb15f2e697e.png`
- `/generated-pages/page-1/generated-assets/named/n/35369c9da425.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `principles_section__default__home__mobile__01`
- Normalized bbox: `[0, 0.5187, 1, 0.0875]`
- Pixel bbox: `[0, 3949.9, 550, 666.31]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.99`
- Selected source / target area ratio: `0.992`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049` | [0, 3954.59, 550, 661.27] | [0, 3954.59, 550, 661.27] | 0.992 | 0.99 | 140 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049`

#### Direct component dependencies

#### Slot `principles`: `principle_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `PrincipleCard`
- JSX implementation: `src/refactored/components/principle_card/PrincipleCard.jsx`
- CSS implementation: `src/refactored/components/principle_card/PrincipleCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `principles_section__default__home__mobile__01` | `principle_card__default__home__mobile__01` | `home` | `mobile` | `[0.0509, 0.5392, 0.8982, 0.0573]` |
| `principles_section__default__home__mobile__01` | `principle_card__default__home__mobile__02` | `home` | `mobile` | `[0.9636, 0.5392, 0.0364, 0.0573]` |

#### Slot `pagination`: `carousel_pagination.compact`

- Kind: `primitive`
- Required variant: `compact`
- Default export: `CarouselPagination`
- JSX implementation: `src/refactored/components/carousel_pagination/CarouselPagination.jsx`
- CSS implementation: `src/refactored/components/carousel_pagination/CarouselPagination.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `principles_section__default__home__mobile__01` | `carousel_pagination__compact__home__mobile__01` | `home` | `mobile` | `[0.4309, 0.5986, 0.1382, 0.0013]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049" data-figma-node-id={"2001:3049"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3049"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3275"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-why_lime-2001-3050" data-figma-node-id={"2001:3050"} data-figma-name={"Why Lime"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-why_lime-2001-3050"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3050"} data-figma-name-desktop={"Why Lime"} data-figma-node-id-mobile={"2001:3276"} data-figma-name-mobile={"Why Lime"}><span className="ff-text-content">{"Why Lime"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051" data-figma-node-id={"2001:3051"} data-figma-name={"Heading 2 → Our Core Principles"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3051"} data-figma-name-desktop={"Heading 2 → Our Core Principles"} data-figma-node-id-mobile={"2001:3277"} data-figma-name-mobile={"Heading 2 → Our Core Principles"}><span className="ff-text-content">{"Our Core Principles"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-region_-_listbox-2001-3052" data-figma-node-id={"2001:3052"} data-figma-name={"Region → Listbox"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-region_-_listbox-2001-3052"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3052"} data-figma-name-desktop={"Region → Listbox"} data-figma-node-id-mobile={"2001:3278"} data-figma-name-mobile={"Region → Listbox"}>
              <div className="figma-node node-main-region_-_listbox-option-2001-3053" data-figma-node-id={"2001:3053"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3053"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3053"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3279"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054" data-figma-node-id={"2001:3054"} data-figma-name={"Figure → Figure → Link → SAFETY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3054"} data-figma-name-desktop={"Figure → Figure → Link → SAFETY.png"} data-figma-node-id-mobile={"2001:3280"} data-figma-name-mobile={"Figure → Figure → Link → SAFETY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055" data-figma-node-id={"2001:3055"} data-figma-name={"Figure → Figcaption → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3055"} data-figma-name-desktop={"Figure → Figcaption → Link → Safety"} data-figma-node-id-mobile={"2001:3281"} data-figma-name-mobile={"Figure → Figcaption → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3056" data-figma-node-id={"2001:3056"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3056"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3056"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3282"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057" data-figma-node-id={"2001:3057"} data-figma-name={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3057"} data-figma-name-desktop={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} data-figma-node-id-mobile={"2001:3283"} data-figma-name-mobile={"Figure → Figure → Link → SUSTAINABILITY_2022-04-21-201141_havc.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058" data-figma-node-id={"2001:3058"} data-figma-name={"Figure → Figcaption → Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3058"} data-figma-name-desktop={"Figure → Figcaption → Link → Sustainability"} data-figma-node-id-mobile={"2001:3284"} data-figma-name-mobile={"Figure → Figcaption → Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3059" data-figma-node-id={"2001:3059"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3059"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3059"} data-figma-name-desktop={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060" data-figma-node-id={"2001:3060"} data-figma-name={"Figure → Figure → Link → COMMUNITY.png"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3060"} data-figma-name-desktop={"Figure → Figure → Link → COMMUNITY.png"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061" data-figma-node-id={"2001:3061"} data-figma-name={"Figure → Figcaption → Link → Community"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3061"} data-figma-name-desktop={"Figure → Figcaption → Link → Community"}><span className="ff-text-content">{"Community"}</span></p>
              </div>
            </div>
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062" data-figma-node-id={"2001:3062"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3062"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3062"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3285"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063" data-figma-node-id={"2001:3063"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3063"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3063"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3286"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064" data-figma-node-id={"2001:3064"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3064"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3064"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3287"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065" data-figma-node-id={"2001:3065"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3065"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3065"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3288"} data-figma-name-mobile={"Region → List → Item → Button"} />
          </div>
```

#### Closed source CSS

Selected rules: 17; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1598 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3049 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(3870.5901 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(661.27 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1629 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-why_lime-2001-3050 {
  box-sizing: border-box;
  position: absolute;
  left: calc(236.8 * var(--figma-scale));
  top: calc(45 * var(--figma-scale));
  width: calc(76.7078 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1670 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-heading_2_-_our_core_principles-2001-3051 {
  box-sizing: border-box;
  position: absolute;
  left: calc(134.02 * var(--figma-scale));
  top: calc(69.6 * var(--figma-scale));
  width: calc(282.2597 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1702 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_listbox-2001-3052 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(151.6 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1723 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3053 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1749 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_safety-png-2001-3054 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/c07e2fa32325.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(494 * var(--figma-scale)) calc(384.67 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1786 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_safety-2001-3055 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: calc(396.67 * var(--figma-scale));
  width: calc(44.2842 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1817 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3056 {
  box-sizing: border-box;
  position: absolute;
  left: calc(526 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1843 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_sustainability_2022-04-21-201141_havc-png-2001-3057 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/2d9baf3a84a0.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(494 * var(--figma-scale)) calc(384.67 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1880 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_sustainability-2001-3058 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: calc(396.67 * var(--figma-scale));
  width: calc(94.0448 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1911 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3059 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1929 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_community-png-2001-3060 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1952 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_community-2001-3061 {
  display: none;
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

- `/generated-pages/page-1/generated-assets/named/n/2d9baf3a84a0.png`
- `/generated-pages/page-1/generated-assets/named/n/c07e2fa32325.jpg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
