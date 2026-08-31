# Component: site_header

- Kind: `shared_component`
- Build order: 16
- Description: Global header with brand, locale, navigation and primary actions.
- Target JSX: `src/refactored/components/site_header/SiteHeader.jsx`
- Target CSS: `src/refactored/components/site_header/SiteHeader.css`
- Export: `default SiteHeader`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Transparent responsive header over the page hero.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `site_header__default__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.0049, 0.8889, 0.0074]` |
| `site_header__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.003, 0.9, 0.0051]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `site_header__default__home__desktop__01`
- Normalized bbox: `[0.0556, 0.0049, 0.8889, 0.0074]`
- Pixel bbox: `[80.06, 31.97, 1280.02, 48.29]`
- Resolution: **anchor**, confidence **medium**, best score `0.47`
- Selected source / target area ratio: `2.609`

> **Manual review required:** Selected source covers 2.61× the manifest bbox area. The source may aggregate this component with adjacent visual content.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196` | [0, 0, 1440, 112] | [0, 0, 1440, 112] | 0.383 | 0.47 | 283 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196`

#### Direct component dependencies

#### Slot `logo`: `brand_logo.inverse`

- Kind: `primitive`
- Required variant: `inverse`
- Default export: `BrandLogo`
- JSX implementation: `src/refactored/components/brand_logo/BrandLogo.jsx`
- CSS implementation: `src/refactored/components/brand_logo/BrandLogo.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__desktop__01` | `brand_logo__inverse__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.0055, 0.0778, 0.0058]` |

#### Slot `locale_selector`: `language_selector.default`

- Kind: `primitive`
- Required variant: `default`
- Default export: `LanguageSelector`
- JSX implementation: `src/refactored/components/language_selector/LanguageSelector.jsx`
- CSS implementation: `src/refactored/components/language_selector/LanguageSelector.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__desktop__01` | `language_selector__default__home__desktop__01` | `home` | `desktop` | `[0.1611, 0.0049, 0.0444, 0.0074]` |

#### Slot `navigation`: `site_navigation.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `SiteNavigation`
- JSX implementation: `src/refactored/components/site_navigation/SiteNavigation.jsx`
- CSS implementation: `src/refactored/components/site_navigation/SiteNavigation.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__desktop__01` | `site_navigation__default__home__desktop__01` | `home` | `desktop` | `[0.3979, 0.0069, 0.4153, 0.0032]` |

#### Slot `primary_action`: `button.primary`

- Kind: `primitive`
- Required variant: `primary`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__desktop__01` | `button__primary__home__desktop__01` | `home` | `desktop` | `[0.8389, 0.0049, 0.1056, 0.0074]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196" data-figma-node-id={"2001:3196"} data-figma-name={"Header"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3196"} data-figma-name-desktop={"Header"} data-figma-node-id-mobile={"2001:3404"} data-figma-name-mobile={"Header"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197" data-figma-node-id={"2001:3197"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3197"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3426"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3197.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3426.svg" alt={"Link - home → SVG"} />
          </div>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205" data-figma-node-id={"2001:3205"} data-figma-name={"Button"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3205"} data-figma-name-desktop={"Button"} data-figma-node-id-mobile={"2001:3434"} data-figma-name-mobile={"Button"}>
            <div className="figma-node node-header-button-svg-2001-3206" data-figma-node-id={"2001:3206"} data-figma-name={"SVG"} data-figma-type={"FRAME"} data-figma-class={"node-header-button-svg-2001-3206"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3206"} data-figma-name-desktop={"SVG"} data-figma-node-id-mobile={"2001:3435"} data-figma-name-mobile={"SVG"}>
              <img className="figma-vec-desktop node-header-button-svg-2001-3206-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3206.svg" alt={"SVG"} />
              <img className="figma-vec-mobile node-header-button-svg-2001-3206-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3435.svg" alt={"SVG"} />
            </div>
            <p className="figma-node node-header-button-en-2001-3214" data-figma-node-id={"2001:3214"} data-figma-name={"EN"} data-figma-type={"TEXT"} data-figma-class={"node-header-button-en-2001-3214"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3214"} data-figma-name-desktop={"EN"} data-figma-node-id-mobile={"2001:3443"} data-figma-name-mobile={"EN"}><span className="ff-text-content">{"EN"}</span></p>
          </div>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444" data-figma-node-id={"2001:3444"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3444"} data-figma-name-mobile={"Button - menu_toggle"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445" data-figma-node-id={"2001:3445"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3445"} data-figma-name-mobile={"Button - menu_toggle"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446" data-figma-node-id={"2001:3446"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3446"} data-figma-name-mobile={"Button - menu_toggle"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215" data-figma-node-id={"2001:3215"} data-figma-name={"List → Item → Link → About Us"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3215"} data-figma-name-desktop={"List → Item → Link → About Us"}><span className="ff-text-content">{"About Us"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216" data-figma-node-id={"2001:3216"} data-figma-name={"List → Item → Link → Why Lime"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3216"} data-figma-name-desktop={"List → Item → Link → Why Lime"}><span className="ff-text-content">{"Why Lime"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217" data-figma-node-id={"2001:3217"} data-figma-name={"List → Item → Link → Vehicles"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3217"} data-figma-name-desktop={"List → Item → Link → Vehicles"}><span className="ff-text-content">{"Vehicles"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218" data-figma-node-id={"2001:3218"} data-figma-name={"List → Item → Link → Locations"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3218"} data-figma-name-desktop={"List → Item → Link → Locations"}><span className="ff-text-content">{"Locations"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219" data-figma-node-id={"2001:3219"} data-figma-name={"List → Item → Link → Advertise"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3219"} data-figma-name-desktop={"List → Item → Link → Advertise"}><span className="ff-text-content">{"Advertise"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220" data-figma-node-id={"2001:3220"} data-figma-name={"List → Item → Link → Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3220"} data-figma-name-desktop={"List → Item → Link → Blog"}><span className="ff-text-content">{"Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221" data-figma-node-id={"2001:3221"} data-figma-name={"List → Item → Link → Help"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3221"} data-figma-name-desktop={"List → Item → Link → Help"}><span className="ff-text-content">{"Help"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222" data-figma-node-id={"2001:3222"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3222"} data-figma-name-desktop={"Link"}>
            <p className="figma-node node-header-link-download_app-2001-3223" data-figma-node-id={"2001:3223"} data-figma-name={"Download App"} data-figma-type={"TEXT"} data-figma-class={"node-header-link-download_app-2001-3223"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3223"} data-figma-name-desktop={"Download App"}><span className="ff-text-content">{"Download App"}</span></p>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4514 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: calc(1440 * var(--figma-scale));
  height: calc(112 * var(--figma-scale));
  z-index: 5;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4534 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(36.0898 * var(--figma-scale));
  width: calc(112 * var(--figma-scale));
  height: calc(39.81 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4556 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4566 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4582 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205 {
  box-sizing: border-box;
  position: absolute;
  left: calc(232 * var(--figma-scale));
  top: calc(36.5 * var(--figma-scale));
  width: calc(64.03 * var(--figma-scale));
  height: calc(39 * var(--figma-scale));
  z-index: 2;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(10 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4606 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 {
  box-sizing: border-box;
  position: absolute;
  left: calc(9 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(21 * var(--figma-scale));
  height: calc(21 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4628 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4638 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4654 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-button-en-2001-3214 {
  box-sizing: border-box;
  position: absolute;
  left: calc(38 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(17.3302 * var(--figma-scale));
  min-height: calc(21 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4694 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(33.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  background-color: rgb(255, 255, 255);
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4715 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(40.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  background-color: rgb(255, 255, 255);
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4736 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(47.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  background-color: rgb(255, 255, 255);
  display: none;
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4918 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1207.27 * var(--figma-scale));
  top: calc(31.8 * var(--figma-scale));
  width: calc(152.73 * var(--figma-scale));
  height: calc(48.39 * var(--figma-scale));
  z-index: 10;
  background-color: rgb(0, 221, 0);
  border: calc(1 * var(--figma-scale)) solid rgb(0, 221, 0);
  border-radius: calc(40 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4933 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-header-link-download_app-2001-3223 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(14 * var(--figma-scale));
  width: calc(103.089 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(22.4 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3197.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3206.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3426.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3435.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 1440, 792]` | 1 | 0.054 | 162 |

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `site_header__default__home__mobile__01`
- Normalized bbox: `[0.0436, 0.003, 0.9, 0.0051]`
- Pixel bbox: `[23.98, 22.84, 495, 38.84]`
- Resolution: **anchor**, confidence **medium**, best score `0.502`
- Selected source / target area ratio: `2.403`

> **Manual review required:** Selected source covers 2.4× the manifest bbox area. The source may aggregate this component with adjacent visual content.

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196` | [0, 0, 550, 84] | [0, 0, 550, 84] | 0.416 | 0.502 | 283 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196`

#### Direct component dependencies

#### Slot `logo`: `brand_logo.inverse`

- Kind: `primitive`
- Required variant: `inverse`
- Default export: `BrandLogo`
- JSX implementation: `src/refactored/components/brand_logo/BrandLogo.jsx`
- CSS implementation: `src/refactored/components/brand_logo/BrandLogo.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__mobile__01` | `brand_logo__inverse__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.0035, 0.16, 0.0039]` |

#### Slot `locale_selector`: `language_selector.default`

- Kind: `primitive`
- Required variant: `default`
- Default export: `LanguageSelector`
- JSX implementation: `src/refactored/components/language_selector/LanguageSelector.jsx`
- CSS implementation: `src/refactored/components/language_selector/LanguageSelector.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__mobile__01` | `language_selector__default__home__mobile__01` | `home` | `mobile` | `[0.2327, 0.003, 0.1164, 0.005]` |

#### Slot `menu_control`: `menu_toggle.default`

- Kind: `primitive`
- Required variant: `default`
- Default export: `MenuToggle`
- JSX implementation: `src/refactored/components/menu_toggle/MenuToggle.jsx`
- CSS implementation: `src/refactored/components/menu_toggle/MenuToggle.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_header__default__home__mobile__01` | `menu_toggle__default__home__mobile__01` | `home` | `mobile` | `[0.9, 0.0042, 0.0436, 0.0026]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196" data-figma-node-id={"2001:3196"} data-figma-name={"Header"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3196"} data-figma-name-desktop={"Header"} data-figma-node-id-mobile={"2001:3404"} data-figma-name-mobile={"Header"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197" data-figma-node-id={"2001:3197"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3197"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3426"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3197.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3426.svg" alt={"Link - home → SVG"} />
          </div>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205" data-figma-node-id={"2001:3205"} data-figma-name={"Button"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3205"} data-figma-name-desktop={"Button"} data-figma-node-id-mobile={"2001:3434"} data-figma-name-mobile={"Button"}>
            <div className="figma-node node-header-button-svg-2001-3206" data-figma-node-id={"2001:3206"} data-figma-name={"SVG"} data-figma-type={"FRAME"} data-figma-class={"node-header-button-svg-2001-3206"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3206"} data-figma-name-desktop={"SVG"} data-figma-node-id-mobile={"2001:3435"} data-figma-name-mobile={"SVG"}>
              <img className="figma-vec-desktop node-header-button-svg-2001-3206-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3206.svg" alt={"SVG"} />
              <img className="figma-vec-mobile node-header-button-svg-2001-3206-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3435.svg" alt={"SVG"} />
            </div>
            <p className="figma-node node-header-button-en-2001-3214" data-figma-node-id={"2001:3214"} data-figma-name={"EN"} data-figma-type={"TEXT"} data-figma-class={"node-header-button-en-2001-3214"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3214"} data-figma-name-desktop={"EN"} data-figma-node-id-mobile={"2001:3443"} data-figma-name-mobile={"EN"}><span className="ff-text-content">{"EN"}</span></p>
          </div>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444" data-figma-node-id={"2001:3444"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3444"} data-figma-name-mobile={"Button - menu_toggle"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445" data-figma-node-id={"2001:3445"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3445"} data-figma-name-mobile={"Button - menu_toggle"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446" data-figma-node-id={"2001:3446"} data-figma-name={"Button - menu_toggle"} data-figma-type={"RECTANGLE"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446"} data-figma-variant={"mobile-only"} data-render-rules={"RECTANGLE_SOLID_FILL_RULE"} data-figma-node-id-mobile={"2001:3446"} data-figma-name-mobile={"Button - menu_toggle"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215" data-figma-node-id={"2001:3215"} data-figma-name={"List → Item → Link → About Us"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3215"} data-figma-name-desktop={"List → Item → Link → About Us"}><span className="ff-text-content">{"About Us"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216" data-figma-node-id={"2001:3216"} data-figma-name={"List → Item → Link → Why Lime"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3216"} data-figma-name-desktop={"List → Item → Link → Why Lime"}><span className="ff-text-content">{"Why Lime"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217" data-figma-node-id={"2001:3217"} data-figma-name={"List → Item → Link → Vehicles"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3217"} data-figma-name-desktop={"List → Item → Link → Vehicles"}><span className="ff-text-content">{"Vehicles"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218" data-figma-node-id={"2001:3218"} data-figma-name={"List → Item → Link → Locations"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3218"} data-figma-name-desktop={"List → Item → Link → Locations"}><span className="ff-text-content">{"Locations"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219" data-figma-node-id={"2001:3219"} data-figma-name={"List → Item → Link → Advertise"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3219"} data-figma-name-desktop={"List → Item → Link → Advertise"}><span className="ff-text-content">{"Advertise"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220" data-figma-node-id={"2001:3220"} data-figma-name={"List → Item → Link → Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3220"} data-figma-name-desktop={"List → Item → Link → Blog"}><span className="ff-text-content">{"Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221" data-figma-node-id={"2001:3221"} data-figma-name={"List → Item → Link → Help"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3221"} data-figma-name-desktop={"List → Item → Link → Help"}><span className="ff-text-content">{"Help"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222" data-figma-node-id={"2001:3222"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3222"} data-figma-name-desktop={"Link"}>
            <p className="figma-node node-header-link-download_app-2001-3223" data-figma-node-id={"2001:3223"} data-figma-name={"Download App"} data-figma-type={"TEXT"} data-figma-class={"node-header-link-download_app-2001-3223"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3223"} data-figma-name-desktop={"Download App"}><span className="ff-text-content">{"Download App"}</span></p>
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4524 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196 {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: calc(550 * var(--figma-scale));
  height: calc(84 * var(--figma-scale));
  z-index: 5;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4545 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(26.3604 * var(--figma-scale));
  width: calc(88 * var(--figma-scale));
  height: calc(31.27 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4569 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4572 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link_-_home_-_svg-2001-3197-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4594 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button-2001-3205 {
  box-sizing: border-box;
  position: absolute;
  left: calc(128 * var(--figma-scale));
  top: calc(22.5 * var(--figma-scale));
  width: calc(64.03 * var(--figma-scale));
  height: calc(39 * var(--figma-scale));
  z-index: 2;
  border: calc(1 * var(--figma-scale)) solid rgba(255, 255, 255, 0.3);
  border-radius: calc(10 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4617 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 {
  box-sizing: border-box;
  position: absolute;
  left: calc(9 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(21 * var(--figma-scale));
  height: calc(21 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4641 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4644 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-svg-2001-3206 > .node-header-button-svg-2001-3206-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4674 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-button-en-2001-3214 {
  box-sizing: border-box;
  position: absolute;
  left: calc(38 * var(--figma-scale));
  top: calc(9 * var(--figma-scale));
  width: calc(17.3302 * var(--figma-scale));
  min-height: calc(21 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(14 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(21 * var(--figma-scale));
  text-align: center;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4704 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3444 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(33.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 3;
  background-color: rgb(255, 255, 255);
  display: block;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4725 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3445 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(40.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 4;
  background-color: rgb(255, 255, 255);
  display: block;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4746 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-button_-_menu_toggle-2001-3446 {
  box-sizing: border-box;
  position: absolute;
  left: calc(496 * var(--figma-scale));
  top: calc(47.5 * var(--figma-scale));
  width: calc(22 * var(--figma-scale));
  height: calc(3 * var(--figma-scale));
  z-index: 5;
  background-color: rgb(255, 255, 255);
  display: block;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4777 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_about_us-2001-3215 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4800 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_why_lime-2001-3216 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4823 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_vehicles-2001-3217 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4846 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_locations-2001-3218 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4869 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_advertise-2001-3219 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4892 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_blog-2001-3220 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4915 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-list_-_item_-_link_-_help-2001-3221 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4930 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-link-2001-3222 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4952 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-header-link-download_app-2001-3223 {
  display: none;
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3197.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3206.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3426.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3435.svg`

#### Excluded bbox intersections

> These nodes intersect the manifest bbox but are outside the selected JSX subtree. They are not part of the primary code unless manual review confirms ownership.

| Node | Visible box | Target coverage | Node coverage | JSX line |
|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-content-wrapper-main-2001-3066` | `[0, 0, 550, 978]` | 1 | 0.036 | 162 |
