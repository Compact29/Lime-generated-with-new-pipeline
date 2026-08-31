# Component: cities_section

- Kind: `page_component`
- Page: `home`
- Build order: 19
- Description: City discovery carousel highlighting available U.S. locations.
- Target JSX: `src/refactored/pages/home/components/cities_section/CitiesSection.jsx`
- Target CSS: `src/refactored/pages/home/components/cities_section/CitiesSection.css`
- Export: `default CitiesSection`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive city carousel section.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `cities_section__default__home__desktop__01` | `home` | `desktop` | `[0, 0.3577, 1, 0.1189]` |
| `cities_section__default__home__mobile__01` | `home` | `mobile` | `[0, 0.4326, 1, 0.0861]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `cities_section__default__home__desktop__01`
- Normalized bbox: `[0, 0.3577, 1, 0.1189]`
- Pixel bbox: `[0, 2333.99, 1440, 775.82]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.976`
- Selected source / target area ratio: `1.031`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019` | [0, 2334.23, 1440, 800] | [0, 2334.23, 1440, 800] | 0.969 | 0.976 | 105 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019`

#### Direct component dependencies

#### Slot `cities`: `city_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `CityCard`
- JSX implementation: `src/refactored/components/city_card/CityCard.jsx`
- CSS implementation: `src/refactored/components/city_card/CityCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `cities_section__default__home__desktop__01` | `city_card__default__home__desktop__01` | `home` | `desktop` | `[0.0639, 0.3923, 0.3389, 0.0682]` |
| `cities_section__default__home__desktop__01` | `city_card__default__home__desktop__02` | `home` | `desktop` | `[0.4194, 0.3923, 0.3389, 0.0682]` |
| `cities_section__default__home__desktop__01` | `city_card__default__home__desktop__03` | `home` | `desktop` | `[0.775, 0.3923, 0.225, 0.0682]` |

#### Slot `pagination`: `carousel_pagination.extended`

- Kind: `primitive`
- Required variant: `extended`
- Default export: `CarouselPagination`
- JSX implementation: `src/refactored/components/carousel_pagination/CarouselPagination.jsx`
- CSS implementation: `src/refactored/components/carousel_pagination/CarouselPagination.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `cities_section__default__home__desktop__01` | `carousel_pagination__extended__home__desktop__01` | `home` | `desktop` | `[0.4201, 0.4667, 0.1597, 0.0015]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019" data-figma-node-id={"2001:3019"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3019"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3252"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-locations-2001-3020" data-figma-node-id={"2001:3020"} data-figma-name={"Locations"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-locations-2001-3020"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3020"} data-figma-name-desktop={"Locations"} data-figma-node-id-mobile={"2001:3253"} data-figma-name-mobile={"Locations"}><span className="ff-text-content">{"Locations"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021" data-figma-node-id={"2001:3021"} data-figma-name={"Heading 2 → Our U.S. Cities"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3021"} data-figma-name-desktop={"Heading 2 → Our U.S. Cities"} data-figma-node-id-mobile={"2001:3254"} data-figma-name-mobile={"Heading 2 → Our U.S. Cities"}><span className="ff-text-content">{"Our U.S. Cities"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-region_-_listbox-2001-3022" data-figma-node-id={"2001:3022"} data-figma-name={"Region → Listbox"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-region_-_listbox-2001-3022"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3022"} data-figma-name-desktop={"Region → Listbox"} data-figma-node-id-mobile={"2001:3255"} data-figma-name-mobile={"Region → Listbox"}>
              <div className="figma-node node-main-region_-_listbox-option-2001-3023" data-figma-node-id={"2001:3023"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3023"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3023"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3256"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024" data-figma-node-id={"2001:3024"} data-figma-name={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3024"} data-figma-name-desktop={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-node-id-mobile={"2001:3257"} data-figma-name-mobile={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025" data-figma-node-id={"2001:3025"} data-figma-name={"Figure → Figcaption → Link → New York"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3025"} data-figma-name-desktop={"Figure → Figcaption → Link → New York"} data-figma-node-id-mobile={"2001:3258"} data-figma-name-mobile={"Figure → Figcaption → Link → New York"}><span className="ff-text-content">{"New York"}</span></p>
                <div className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026" data-figma-node-id={"2001:3026"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3026"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} data-figma-node-id-mobile={"2001:3259"} data-figma-name-mobile={"Figure → Figcaption → Link → SVG"}>
                  <img className="figma-vec-desktop node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3026.svg" alt={"Figure → Figcaption → Link → SVG"} />
                  <img className="figma-vec-mobile node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3259.svg" alt={"Figure → Figcaption → Link → SVG"} />
                </div>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3028" data-figma-node-id={"2001:3028"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3028"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3028"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3261"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029" data-figma-node-id={"2001:3029"} data-figma-name={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3029"} data-figma-name-desktop={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} data-figma-node-id-mobile={"2001:3262"} data-figma-name-mobile={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030" data-figma-node-id={"2001:3030"} data-figma-name={"Figure → Figcaption → Link → San Francisco"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3030"} data-figma-name-desktop={"Figure → Figcaption → Link → San Francisco"} data-figma-node-id-mobile={"2001:3263"} data-figma-name-mobile={"Figure → Figcaption → Link → San Francisco"}><span className="ff-text-content">{"San Francisco"}</span></p>
                <img className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031" data-figma-node-id={"2001:3031"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3031"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3031.svg" alt={"Figure → Figcaption → Link → SVG"} />
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3033" data-figma-node-id={"2001:3033"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3033"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3033"} data-figma-name-desktop={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034" data-figma-node-id={"2001:3034"} data-figma-name={"Figure → Figure → Link → Washington-DC-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3034"} data-figma-name-desktop={"Figure → Figure → Link → Washington-DC-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035" data-figma-node-id={"2001:3035"} data-figma-name={"Figure → Figcaption → Link → Washington, DC"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3035"} data-figma-name-desktop={"Figure → Figcaption → Link → Washington, DC"}><span className="ff-text-content">{"Washington, DC"}</span></p>
                <img className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036" data-figma-node-id={"2001:3036"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3036"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3036.svg" alt={"Figure → Figcaption → Link → SVG"} />
              </div>
            </div>
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038" data-figma-node-id={"2001:3038"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3038"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3264"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039" data-figma-node-id={"2001:3039"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3039"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3265"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040" data-figma-node-id={"2001:3040"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3040"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3266"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041" data-figma-node-id={"2001:3041"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3041"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3267"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042" data-figma-node-id={"2001:3042"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3042"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3268"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043" data-figma-node-id={"2001:3043"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3043"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3269"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044" data-figma-node-id={"2001:3044"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3044"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3270"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045" data-figma-node-id={"2001:3045"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3045"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3271"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046" data-figma-node-id={"2001:3046"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3046"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3272"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047" data-figma-node-id={"2001:3047"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3047"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3273"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048" data-figma-node-id={"2001:3048"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3048"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3274"} data-figma-name-mobile={"Region → List → Item → Button"} />
          </div>
```

#### Closed source CSS

Selected rules: 29; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:902 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2222.23 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(800 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:924 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-locations-2001-3020 {
  box-sizing: border-box;
  position: absolute;
  left: calc(672.33 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(95.6874 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:964 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021 {
  box-sizing: border-box;
  position: absolute;
  left: calc(585.8 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(268.7144 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1006 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-content-wrapper-main-region_-_listbox-2001-3022 {
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1170 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3028 {
  box-sizing: border-box;
  position: absolute;
  left: calc(592 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1190 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/0214610f052b.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1222 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(408 * var(--figma-scale));
  width: calc(140.0083 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1264 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031 {
  box-sizing: border-box;
  position: absolute;
  left: calc(161.7002 * var(--figma-scale));
  top: calc(416 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(14 * var(--figma-scale));
  z-index: 3;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1278 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-main-region_-_listbox-option-2001-3033 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1104 * var(--figma-scale));
  top: 0;
  width: calc(512 * var(--figma-scale));
  height: calc(438 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1291 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: 0;
  width: calc(488 * var(--figma-scale));
  height: calc(380 * var(--figma-scale));
  overflow: hidden;
  border-radius: calc(20 * var(--figma-scale));
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/56a6364e44ba.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(488 * var(--figma-scale)) calc(380 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1309 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035 {
  box-sizing: border-box;
  position: absolute;
  left: calc(12 * var(--figma-scale));
  top: calc(408 * var(--figma-scale));
  width: calc(159.6037 * var(--figma-scale));
  min-height: calc(30 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1332 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036 {
  box-sizing: border-box;
  position: absolute;
  left: calc(181.2803 * var(--figma-scale));
  top: calc(416 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(14 * var(--figma-scale));
  display: block;
  object-fit: fill;
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

- `/generated-pages/page-1/generated-assets/named/n/0214610f052b.jpg`
- `/generated-pages/page-1/generated-assets/named/n/56a6364e44ba.jpg`
- `/generated-pages/page-1/generated-assets/named/n/c83391b775a3.jpg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3026.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3031.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3036.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3259.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `cities_section__default__home__mobile__01`
- Normalized bbox: `[0, 0.4326, 1, 0.0861]`
- Pixel bbox: `[0, 3294.25, 550, 655.65]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.993`
- Selected source / target area ratio: `1.009`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019` | [0, 3293.33, 550, 661.27] | [0, 3293.33, 550, 661.27] | 0.992 | 0.993 | 105 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-2001-2994 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019`

#### Direct component dependencies

#### Slot `cities`: `city_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `CityCard`
- JSX implementation: `src/refactored/components/city_card/CityCard.jsx`
- CSS implementation: `src/refactored/components/city_card/CityCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `cities_section__default__home__mobile__01` | `city_card__default__home__mobile__01` | `home` | `mobile` | `[0.0509, 0.4523, 0.8982, 0.0571]` |
| `cities_section__default__home__mobile__01` | `city_card__default__home__mobile__02` | `home` | `mobile` | `[0.9636, 0.4524, 0.0364, 0.057]` |

#### Slot `pagination`: `carousel_pagination.extended`

- Kind: `primitive`
- Required variant: `extended`
- Default export: `CarouselPagination`
- JSX implementation: `src/refactored/components/carousel_pagination/CarouselPagination.jsx`
- CSS implementation: `src/refactored/components/carousel_pagination/CarouselPagination.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `cities_section__default__home__mobile__01` | `carousel_pagination__extended__home__mobile__01` | `home` | `mobile` | `[0.2909, 0.5118, 0.4182, 0.0013]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019" data-figma-node-id={"2001:3019"} data-figma-name={"Main"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3019"} data-figma-name-desktop={"Main"} data-figma-node-id-mobile={"2001:3252"} data-figma-name-mobile={"Main"}>
            <p className="figma-node node-div-content-wrapper-main-locations-2001-3020" data-figma-node-id={"2001:3020"} data-figma-name={"Locations"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-locations-2001-3020"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3020"} data-figma-name-desktop={"Locations"} data-figma-node-id-mobile={"2001:3253"} data-figma-name-mobile={"Locations"}><span className="ff-text-content">{"Locations"}</span></p>
            <p className="figma-node node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021" data-figma-node-id={"2001:3021"} data-figma-name={"Heading 2 → Our U.S. Cities"} data-figma-type={"TEXT"} data-figma-class={"node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3021"} data-figma-name-desktop={"Heading 2 → Our U.S. Cities"} data-figma-node-id-mobile={"2001:3254"} data-figma-name-mobile={"Heading 2 → Our U.S. Cities"}><span className="ff-text-content">{"Our U.S. Cities"}</span></p>
            <div className="figma-node node-div-content-wrapper-main-region_-_listbox-2001-3022" data-figma-node-id={"2001:3022"} data-figma-name={"Region → Listbox"} data-figma-type={"FRAME"} data-figma-class={"node-div-content-wrapper-main-region_-_listbox-2001-3022"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3022"} data-figma-name-desktop={"Region → Listbox"} data-figma-node-id-mobile={"2001:3255"} data-figma-name-mobile={"Region → Listbox"}>
              <div className="figma-node node-main-region_-_listbox-option-2001-3023" data-figma-node-id={"2001:3023"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3023"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3023"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3256"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024" data-figma-node-id={"2001:3024"} data-figma-name={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_new-york-rider-recap-jpg-2001-3024"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3024"} data-figma-name-desktop={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} data-figma-node-id-mobile={"2001:3257"} data-figma-name-mobile={"Figure → Figure → Link → New-York-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025" data-figma-node-id={"2001:3025"} data-figma-name={"Figure → Figcaption → Link → New York"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_new_york-2001-3025"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3025"} data-figma-name-desktop={"Figure → Figcaption → Link → New York"} data-figma-node-id-mobile={"2001:3258"} data-figma-name-mobile={"Figure → Figcaption → Link → New York"}><span className="ff-text-content">{"New York"}</span></p>
                <div className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026" data-figma-node-id={"2001:3026"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3026"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} data-figma-node-id-mobile={"2001:3259"} data-figma-name-mobile={"Figure → Figcaption → Link → SVG"}>
                  <img className="figma-vec-desktop node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3026.svg" alt={"Figure → Figcaption → Link → SVG"} />
                  <img className="figma-vec-mobile node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3026-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3259.svg" alt={"Figure → Figcaption → Link → SVG"} />
                </div>
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3028" data-figma-node-id={"2001:3028"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3028"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3028"} data-figma-name-desktop={"Option"} data-figma-node-id-mobile={"2001:3261"} data-figma-name-mobile={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029" data-figma-node-id={"2001:3029"} data-figma-name={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3029"} data-figma-name-desktop={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} data-figma-node-id-mobile={"2001:3262"} data-figma-name-mobile={"Figure → Figure → Link → San-Francisco-Rider-Replay.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030" data-figma-node-id={"2001:3030"} data-figma-name={"Figure → Figcaption → Link → San Francisco"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3030"} data-figma-name-desktop={"Figure → Figcaption → Link → San Francisco"} data-figma-node-id-mobile={"2001:3263"} data-figma-name-mobile={"Figure → Figcaption → Link → San Francisco"}><span className="ff-text-content">{"San Francisco"}</span></p>
                <img className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031" data-figma-node-id={"2001:3031"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3031"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3031.svg" alt={"Figure → Figcaption → Link → SVG"} />
              </div>
              <div className="figma-node node-main-region_-_listbox-option-2001-3033" data-figma-node-id={"2001:3033"} data-figma-name={"Option"} data-figma-type={"FRAME"} data-figma-class={"node-main-region_-_listbox-option-2001-3033"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3033"} data-figma-name-desktop={"Option"}>
                <div className="figma-node node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034" data-figma-node-id={"2001:3034"} data-figma-name={"Figure → Figure → Link → Washington-DC-Rider-Recap.jpg"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3034"} data-figma-name-desktop={"Figure → Figure → Link → Washington-DC-Rider-Recap.jpg"} />
                <p className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035" data-figma-node-id={"2001:3035"} data-figma-name={"Figure → Figcaption → Link → Washington, DC"} data-figma-type={"TEXT"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3035"} data-figma-name-desktop={"Figure → Figcaption → Link → Washington, DC"}><span className="ff-text-content">{"Washington, DC"}</span></p>
                <img className="figma-node node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036" data-figma-node-id={"2001:3036"} data-figma-name={"Figure → Figcaption → Link → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3036"} data-figma-name-desktop={"Figure → Figcaption → Link → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3036.svg" alt={"Figure → Figcaption → Link → SVG"} />
              </div>
            </div>
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038" data-figma-node-id={"2001:3038"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3038"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3038"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3264"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039" data-figma-node-id={"2001:3039"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3039"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3039"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3265"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040" data-figma-node-id={"2001:3040"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3040"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3040"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3266"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041" data-figma-node-id={"2001:3041"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3041"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3041"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3267"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042" data-figma-node-id={"2001:3042"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3042"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3042"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3268"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043" data-figma-node-id={"2001:3043"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3043"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3043"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3269"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044" data-figma-node-id={"2001:3044"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3044"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3044"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3270"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045" data-figma-node-id={"2001:3045"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3045"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3045"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3271"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046" data-figma-node-id={"2001:3046"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3046"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3046"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3272"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047" data-figma-node-id={"2001:3047"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3047"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3047"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3273"} data-figma-name-mobile={"Region → List → Item → Button"} />
            <div className="figma-node node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048" data-figma-node-id={"2001:3048"} data-figma-name={"Region → List → Item → Button"} data-figma-type={"RECTANGLE"} data-figma-class={"node-div-content-wrapper-main-region_-_list_-_item_-_button-2001-3048"} data-figma-variant={"shared"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE RECTANGLE_ROUNDED_RULE"} data-figma-node-id-desktop={"2001:3048"} data-figma-name-desktop={"Region → List → Item → Button"} data-figma-node-id-mobile={"2001:3274"} data-figma-name-mobile={"Region → List → Item → Button"} />
          </div>
```

#### Closed source CSS

Selected rules: 29; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:913 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3019 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(3209.3301 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(661.27 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:944 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-locations-2001-3020 {
  box-sizing: border-box;
  position: absolute;
  left: calc(236.86 * var(--figma-scale));
  top: calc(45 * var(--figma-scale));
  width: calc(76.5976 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:985 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-heading_2_-_our_u-s-_cities-2001-3021 {
  box-sizing: border-box;
  position: absolute;
  left: calc(174.34 * var(--figma-scale));
  top: calc(69.59 * var(--figma-scale));
  width: calc(201.6665 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1017 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-content-wrapper-main-region_-_listbox-2001-3022 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(151.59 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 3;
  overflow: hidden;
  background-color: transparent;
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1180 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3028 {
  box-sizing: border-box;
  position: absolute;
  left: calc(526 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(417.67 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1206 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_san-francisco-rider-replay-jpg-2001-3029 {
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
  background-image: url("/generated-pages/page-1/generated-assets/named/n/cc7f017746e8.jpg");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(494 * var(--figma-scale)) calc(384.67 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1243 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_san_francisco-2001-3030 {
  box-sizing: border-box;
  position: absolute;
  left: calc(4 * var(--figma-scale));
  top: calc(396.67 * var(--figma-scale));
  width: calc(98.1513 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1275 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3031 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1288 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-main-region_-_listbox-option-2001-3033 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1306 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figure_-_link_-_washington-dc-rider-recap-jpg-2001-3034 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1329 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_washington-_dc-2001-3035 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:1342 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-region_-_listbox-option-figure_-_figcaption_-_link_-_svg-2001-3036 {
  display: none;
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

- `/generated-pages/page-1/generated-assets/named/n/234ebe19073c.jpg`
- `/generated-pages/page-1/generated-assets/named/n/cc7f017746e8.jpg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3026.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3031.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3036.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3259.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
