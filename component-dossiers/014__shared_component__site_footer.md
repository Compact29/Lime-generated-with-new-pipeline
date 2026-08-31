# Component: site_footer

- Kind: `shared_component`
- Build order: 14
- Description: Global footer with brand identity, navigation, social links and legal links.
- Target JSX: `src/refactored/components/site_footer/SiteFooter.jsx`
- Target CSS: `src/refactored/components/site_footer/SiteFooter.css`
- Export: `default SiteFooter`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive global site footer.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `site_footer__default__home__desktop__01` | `home` | `desktop` | `[0, 0.8941, 1, 0.1059]` |
| `site_footer__default__home__mobile__01` | `home` | `mobile` | `[0, 0.8869, 1, 0.1131]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `site_footer__default__home__desktop__01`
- Normalized bbox: `[0, 0.8941, 1, 0.1059]`
- Pixel bbox: `[0, 5834, 1440, 691]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.999`
- Selected source / target area ratio: `0.999`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152` | [0, 5834.78, 1440, 690] | [0, 5834.78, 1440, 690] | 0.999 | 0.999 | 239 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152`

#### Direct component dependencies

#### Slot `logo`: `brand_logo.brand`

- Kind: `primitive`
- Required variant: `brand`
- Default export: `BrandLogo`
- JSX implementation: `src/refactored/components/brand_logo/BrandLogo.jsx`
- CSS implementation: `src/refactored/components/brand_logo/BrandLogo.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_footer__default__home__desktop__01` | `brand_logo__brand__home__desktop__01` | `home` | `desktop` | `[0.0556, 0.9065, 0.1111, 0.0086]` |

#### Slot `navigation`: `footer_navigation.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `FooterNavigation`
- JSX implementation: `src/refactored/components/footer_navigation/FooterNavigation.jsx`
- CSS implementation: `src/refactored/components/footer_navigation/FooterNavigation.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_footer__default__home__desktop__01` | `footer_navigation__default__home__desktop__01` | `home` | `desktop` | `[0.2813, 0.9192, 0.6632, 0.0343]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152" data-figma-node-id={"2001:3152"} data-figma-name={"Footer"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3152"} data-figma-name-desktop={"Footer"} data-figma-node-id-mobile={"2001:3367"} data-figma-name-mobile={"Footer"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153" data-figma-node-id={"2001:3153"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3153"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3368"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3153.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3368.svg" alt={"Link - home → SVG"} />
          </div>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161" data-figma-node-id={"2001:3161"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3161"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"} data-figma-node-id-mobile={"2001:3376"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"}><span className="ff-text-content">{"Join Us"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377" data-figma-node-id={"2001:3377"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3377"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3377.svg" alt={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162" data-figma-node-id={"2001:3162"} data-figma-name={"List → Item → Link → Careers"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3162"} data-figma-name-desktop={"List → Item → Link → Careers"}><span className="ff-text-content">{"Careers"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163" data-figma-node-id={"2001:3163"} data-figma-name={"List → Item → Link → Lime Times Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3163"} data-figma-name-desktop={"List → Item → Link → Lime Times Blog"}><span className="ff-text-content">{"Lime Times Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164" data-figma-node-id={"2001:3164"} data-figma-name={"List → Item → Link → Press"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3164"} data-figma-name-desktop={"List → Item → Link → Press"}><span className="ff-text-content">{"Press"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165" data-figma-node-id={"2001:3165"} data-figma-name={"List → Item → Link → Partners"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3165"} data-figma-name-desktop={"List → Item → Link → Partners"}><span className="ff-text-content">{"Partners"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166" data-figma-node-id={"2001:3166"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_about → About"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3166"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_about → About"} data-figma-node-id-mobile={"2001:3380"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_about → About"}><span className="ff-text-content">{"About"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381" data-figma-node-id={"2001:3381"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_about → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3381"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_about → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3381.svg" alt={"Heading 4 → Button - footer_nav_toggle_about → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167" data-figma-node-id={"2001:3167"} data-figma-name={"List → Item → Link → Community"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3167"} data-figma-name-desktop={"List → Item → Link → Community"}><span className="ff-text-content">{"Community"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168" data-figma-node-id={"2001:3168"} data-figma-name={"List → Item → Link → E-Bike"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3168"} data-figma-name-desktop={"List → Item → Link → E-Bike"}><span className="ff-text-content">{"E-Bike"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169" data-figma-node-id={"2001:3169"} data-figma-name={"List → Item → Link → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3169"} data-figma-name-desktop={"List → Item → Link → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170" data-figma-node-id={"2001:3170"} data-figma-name={"List → Item → Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3170"} data-figma-name-desktop={"List → Item → Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171" data-figma-node-id={"2001:3171"} data-figma-name={"List → Item → Link → Innovation"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3171"} data-figma-name-desktop={"List → Item → Link → Innovation"}><span className="ff-text-content">{"Innovation"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172" data-figma-node-id={"2001:3172"} data-figma-name={"List → Item → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3172"} data-figma-name-desktop={"List → Item → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173" data-figma-node-id={"2001:3173"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_programs → Programs"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3173"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_programs → Programs"} data-figma-node-id-mobile={"2001:3384"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_programs → Programs"}><span className="ff-text-content">{"Programs"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385" data-figma-node-id={"2001:3385"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3385"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3385.svg" alt={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174" data-figma-node-id={"2001:3174"} data-figma-name={"List → Item → Link → Advertise"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3174"} data-figma-name-desktop={"List → Item → Link → Advertise"}><span className="ff-text-content">{"Advertise"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175" data-figma-node-id={"2001:3175"} data-figma-name={"List → Item → Link → Lime Access"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3175"} data-figma-name-desktop={"List → Item → Link → Lime Access"}><span className="ff-text-content">{"Lime Access"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176" data-figma-node-id={"2001:3176"} data-figma-name={"List → Item → Link → Lime Hero"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3176"} data-figma-name-desktop={"List → Item → Link → Lime Hero"}><span className="ff-text-content">{"Lime Hero"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177" data-figma-node-id={"2001:3177"} data-figma-name={"List → Item → Link → Lime Assist"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3177"} data-figma-name-desktop={"List → Item → Link → Lime Assist"}><span className="ff-text-content">{"Lime Assist"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178" data-figma-node-id={"2001:3178"} data-figma-name={"List → Item → Link → Insurance"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3178"} data-figma-name-desktop={"List → Item → Link → Insurance"}><span className="ff-text-content">{"Insurance"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179" data-figma-node-id={"2001:3179"} data-figma-name={"List → Item → Link → Our Cities"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3179"} data-figma-name-desktop={"List → Item → Link → Our Cities"}><span className="ff-text-content">{"Our Cities"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180" data-figma-node-id={"2001:3180"} data-figma-name={"List → Item → Link → Find Location"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3180"} data-figma-name-desktop={"List → Item → Link → Find Location"} data-figma-node-id-mobile={"2001:3388"} data-figma-name-mobile={"List → Item → Link → Find Location"}><span className="ff-text-content">{"Find Location"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181" data-figma-node-id={"2001:3181"} data-figma-name={"List → Item → Link → Get help"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3181"} data-figma-name-desktop={"List → Item → Link → Get help"} data-figma-node-id-mobile={"2001:3389"} data-figma-name-mobile={"List → Item → Link → Get help"}><span className="ff-text-content">{"Get help"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182" data-figma-node-id={"2001:3182"} data-figma-name={"List → Item → Link → Sitemap"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3182"} data-figma-name-desktop={"List → Item → Link → Sitemap"} data-figma-node-id-mobile={"2001:3390"} data-figma-name-mobile={"List → Item → Link → Sitemap"}><span className="ff-text-content">{"Sitemap"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183" data-figma-node-id={"2001:3183"} data-figma-name={"List → Item → Link - Twitter → twitter.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3183"} data-figma-name-desktop={"List → Item → Link - Twitter → twitter.png"} data-figma-node-id-mobile={"2001:3391"} data-figma-name-mobile={"List → Item → Link - Twitter → twitter.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184" data-figma-node-id={"2001:3184"} data-figma-name={"List → Item → Link - Facebook → facebook.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3184"} data-figma-name-desktop={"List → Item → Link - Facebook → facebook.png"} data-figma-node-id-mobile={"2001:3392"} data-figma-name-mobile={"List → Item → Link - Facebook → facebook.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185" data-figma-node-id={"2001:3185"} data-figma-name={"List → Item → Link - LinkedIn → linkedin.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3185"} data-figma-name-desktop={"List → Item → Link - LinkedIn → linkedin.png"} data-figma-node-id-mobile={"2001:3393"} data-figma-name-mobile={"List → Item → Link - LinkedIn → linkedin.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186" data-figma-node-id={"2001:3186"} data-figma-name={"List → Item → Link - YouTube → youtube.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3186"} data-figma-name-desktop={"List → Item → Link - YouTube → youtube.png"} data-figma-node-id-mobile={"2001:3394"} data-figma-name-mobile={"List → Item → Link - YouTube → youtube.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187" data-figma-node-id={"2001:3187"} data-figma-name={"List → Item → Link - Instagram → instagram.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3187"} data-figma-name-desktop={"List → Item → Link - Instagram → instagram.png"} data-figma-node-id-mobile={"2001:3395"} data-figma-name-mobile={"List → Item → Link - Instagram → instagram.png"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188" data-figma-node-id={"2001:3188"} data-figma-name={"2024 Lime"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3188"} data-figma-name-desktop={"2024 Lime"} data-figma-node-id-mobile={"2001:3396"} data-figma-name-mobile={"2024 Lime"}><span className="ff-text-content">{"2024 Lime"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189" data-figma-node-id={"2001:3189"} data-figma-name={"List → Item → Link → User Agreement"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3189"} data-figma-name-desktop={"List → Item → Link → User Agreement"} data-figma-node-id-mobile={"2001:3397"} data-figma-name-mobile={"List → Item → Link → User Agreement"}><span className="ff-text-content">{"User Agreement"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190" data-figma-node-id={"2001:3190"} data-figma-name={"List → Item → Link → Privacy Notice"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3190"} data-figma-name-desktop={"List → Item → Link → Privacy Notice"} data-figma-node-id-mobile={"2001:3398"} data-figma-name-mobile={"List → Item → Link → Privacy Notice"}><span className="ff-text-content">{"Privacy Notice"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191" data-figma-node-id={"2001:3191"} data-figma-name={"List → Item → Link → Data Request"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3191"} data-figma-name-desktop={"List → Item → Link → Data Request"} data-figma-node-id-mobile={"2001:3399"} data-figma-name-mobile={"List → Item → Link → Data Request"}><span className="ff-text-content">{"Data Request"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192" data-figma-node-id={"2001:3192"} data-figma-name={"List → Item → Link → Research"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3192"} data-figma-name-desktop={"List → Item → Link → Research"} data-figma-node-id-mobile={"2001:3400"} data-figma-name-mobile={"List → Item → Link → Research"}><span className="ff-text-content">{"Research"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193" data-figma-node-id={"2001:3193"} data-figma-name={"List → Item → Link → Legal Bases"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3193"} data-figma-name-desktop={"List → Item → Link → Legal Bases"} data-figma-node-id-mobile={"2001:3401"} data-figma-name-mobile={"List → Item → Link → Legal Bases"}><span className="ff-text-content">{"Legal Bases"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194" data-figma-node-id={"2001:3194"} data-figma-name={"List → Item → Link → My Information"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3194"} data-figma-name-desktop={"List → Item → Link → My Information"} data-figma-node-id-mobile={"2001:3402"} data-figma-name-mobile={"List → Item → Link → My Information"}><span className="ff-text-content">{"My Information"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195" data-figma-node-id={"2001:3195"} data-figma-name={"List → Item → Link → Imprint"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3195"} data-figma-name-desktop={"List → Item → Link → Imprint"} data-figma-node-id-mobile={"2001:3403"} data-figma-name-mobile={"List → Item → Link → Imprint"}><span className="ff-text-content">{"Imprint"}</span></p>
        </div>
```

#### Closed source CSS

Selected rules: 42; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3289 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(5834.7798 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(690 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3311 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(160 * var(--figma-scale));
  height: calc(56.8809 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3333 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3343 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3359 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(104 * var(--figma-scale));
  width: calc(70.7185 * var(--figma-scale));
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
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3399 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377 {
  box-sizing: border-box;
  position: absolute;
  left: calc(2052 * var(--figma-scale));
  top: calc(1089.0293 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  display: none;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3420 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(170 * var(--figma-scale));
  width: calc(55.76 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 3;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3443 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(210 * var(--figma-scale));
  width: calc(112.3234 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 4;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3466 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(250 * var(--figma-scale));
  width: calc(36.9413 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 5;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3489 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(290 * var(--figma-scale));
  width: calc(58.4383 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 6;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3512 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(104 * var(--figma-scale));
  width: calc(60.274 * var(--figma-scale));
  min-height: calc(32 * var(--figma-scale));
  z-index: 7;
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
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3552 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381 {
  box-sizing: border-box;
  position: absolute;
  left: calc(2052 * var(--figma-scale));
  top: calc(1158.0293 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  display: none;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3573 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(170 * var(--figma-scale));
  width: calc(83.278 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 8;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3596 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(210 * var(--figma-scale));
  width: calc(43.1407 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 9;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3619 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(250 * var(--figma-scale));
  width: calc(68.8355 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 10;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3642 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(290 * var(--figma-scale));
  width: calc(94.0448 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 11;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3665 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(330 * var(--figma-scale));
  width: calc(74.4242 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 12;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3688 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172 {
  box-sizing: border-box;
  position: absolute;
  left: calc(621.66 * var(--figma-scale));
  top: calc(370 * var(--figma-scale));
  width: calc(44.2842 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 13;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3711 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(104 * var(--figma-scale));
  width: calc(97.7406 * var(--figma-scale));
  min-height: calc(32 * var(--figma-scale));
  z-index: 14;
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
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3751 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385 {
  box-sizing: border-box;
  position: absolute;
  left: calc(2052 * var(--figma-scale));
  top: calc(1227.0293 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  display: none;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3772 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(170 * var(--figma-scale));
  width: calc(65.4903 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 15;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3795 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(210 * var(--figma-scale));
  width: calc(86.3929 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 16;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3818 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(250 * var(--figma-scale));
  width: calc(69.1961 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 17;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3841 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(290 * var(--figma-scale));
  width: calc(76.5475 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 18;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3864 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(330 * var(--figma-scale));
  width: calc(69.807 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 19;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3887 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179 {
  box-sizing: border-box;
  position: absolute;
  left: calc(838.33 * var(--figma-scale));
  top: calc(370 * var(--figma-scale));
  width: calc(68.0242 * var(--figma-scale));
  min-height: calc(20 * var(--figma-scale));
  z-index: 20;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3910 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1152 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(131.862 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 21;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3950 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1152 * var(--figma-scale));
  top: calc(170 * var(--figma-scale));
  width: calc(84.5601 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 22;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3990 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1152 * var(--figma-scale));
  top: calc(234 * var(--figma-scale));
  width: calc(84.3097 * var(--figma-scale));
  min-height: calc(28 * var(--figma-scale));
  z-index: 23;
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
  color: rgb(147, 146, 146);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4030 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1152 * var(--figma-scale));
  top: calc(304 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 24;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/7f527cbb8f4e.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4060 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1196 * var(--figma-scale));
  top: calc(304 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 25;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/a8fa2d0a9629.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4090 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1240 * var(--figma-scale));
  top: calc(304 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 26;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/d03d08da61ed.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4120 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1284 * var(--figma-scale));
  top: calc(304 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 27;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/630f601abe8c.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4150 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1328 * var(--figma-scale));
  top: calc(304 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 28;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/2c5277915bc6.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4180 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188 {
  box-sizing: border-box;
  position: absolute;
  left: calc(80 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(60.4145 * var(--figma-scale));
  min-height: calc(18 * var(--figma-scale));
  z-index: 29;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4220 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189 {
  box-sizing: border-box;
  position: absolute;
  left: calc(405 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(97.2398 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 30;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4262 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190 {
  box-sizing: border-box;
  position: absolute;
  left: calc(541.89 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(84.9607 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 31;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4304 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191 {
  box-sizing: border-box;
  position: absolute;
  left: calc(666.52 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(81.2148 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 32;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4346 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192 {
  box-sizing: border-box;
  position: absolute;
  left: calc(787.41 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(56.3719 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 33;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4388 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193 {
  box-sizing: border-box;
  position: absolute;
  left: calc(883.41 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(70.7585 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 34;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4430 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194 {
  box-sizing: border-box;
  position: absolute;
  left: calc(993.86 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(90.5294 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 35;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4472 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195 {
  box-sizing: border-box;
  position: absolute;
  left: calc(1124.05 * var(--figma-scale));
  top: calc(616 * var(--figma-scale));
  width: calc(43.241 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 36;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/2c5277915bc6.png`
- `/generated-pages/page-1/generated-assets/named/n/630f601abe8c.png`
- `/generated-pages/page-1/generated-assets/named/n/7f527cbb8f4e.png`
- `/generated-pages/page-1/generated-assets/named/n/a8fa2d0a9629.png`
- `/generated-pages/page-1/generated-assets/named/n/d03d08da61ed.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3153.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3368.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3377.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3381.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3385.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `site_footer__default__home__mobile__01`
- Normalized bbox: `[0, 0.8869, 1, 0.1131]`
- Pixel bbox: `[0, 6753.74, 550, 861.26]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.999`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152` | [0, 6753.19, 550, 861.13] | [0, 6753.19, 550, 861.13] | 0.999 | 0.999 | 239 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152`

#### Direct component dependencies

#### Slot `logo`: `brand_logo.brand`

- Kind: `primitive`
- Required variant: `brand`
- Default export: `BrandLogo`
- JSX implementation: `src/refactored/components/brand_logo/BrandLogo.jsx`
- CSS implementation: `src/refactored/components/brand_logo/BrandLogo.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_footer__default__home__mobile__01` | `brand_logo__brand__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.8953, 0.1455, 0.0043]` |

#### Slot `navigation`: `footer_navigation.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `FooterNavigation`
- JSX implementation: `src/refactored/components/footer_navigation/FooterNavigation.jsx`
- CSS implementation: `src/refactored/components/footer_navigation/FooterNavigation.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `site_footer__default__home__mobile__01` | `footer_navigation__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.9082, 0.9127, 0.0584]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152" data-figma-node-id={"2001:3152"} data-figma-name={"Footer"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3152"} data-figma-name-desktop={"Footer"} data-figma-node-id-mobile={"2001:3367"} data-figma-name-mobile={"Footer"}>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153" data-figma-node-id={"2001:3153"} data-figma-name={"Link - home → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3153"} data-figma-name-desktop={"Link - home → SVG"} data-figma-node-id-mobile={"2001:3368"} data-figma-name-mobile={"Link - home → SVG"}>
            <img className="figma-vec-desktop node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3153.svg" alt={"Link - home → SVG"} />
            <img className="figma-vec-mobile node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3368.svg" alt={"Link - home → SVG"} />
          </div>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161" data-figma-node-id={"2001:3161"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3161"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"} data-figma-node-id-mobile={"2001:3376"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_join_us → Join Us"}><span className="ff-text-content">{"Join Us"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377" data-figma-node-id={"2001:3377"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3377"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3377.svg" alt={"Heading 4 → Button - footer_nav_toggle_join_us → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162" data-figma-node-id={"2001:3162"} data-figma-name={"List → Item → Link → Careers"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3162"} data-figma-name-desktop={"List → Item → Link → Careers"}><span className="ff-text-content">{"Careers"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163" data-figma-node-id={"2001:3163"} data-figma-name={"List → Item → Link → Lime Times Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3163"} data-figma-name-desktop={"List → Item → Link → Lime Times Blog"}><span className="ff-text-content">{"Lime Times Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164" data-figma-node-id={"2001:3164"} data-figma-name={"List → Item → Link → Press"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3164"} data-figma-name-desktop={"List → Item → Link → Press"}><span className="ff-text-content">{"Press"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165" data-figma-node-id={"2001:3165"} data-figma-name={"List → Item → Link → Partners"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3165"} data-figma-name-desktop={"List → Item → Link → Partners"}><span className="ff-text-content">{"Partners"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166" data-figma-node-id={"2001:3166"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_about → About"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3166"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_about → About"} data-figma-node-id-mobile={"2001:3380"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_about → About"}><span className="ff-text-content">{"About"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381" data-figma-node-id={"2001:3381"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_about → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3381"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_about → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3381.svg" alt={"Heading 4 → Button - footer_nav_toggle_about → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167" data-figma-node-id={"2001:3167"} data-figma-name={"List → Item → Link → Community"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3167"} data-figma-name-desktop={"List → Item → Link → Community"}><span className="ff-text-content">{"Community"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168" data-figma-node-id={"2001:3168"} data-figma-name={"List → Item → Link → E-Bike"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3168"} data-figma-name-desktop={"List → Item → Link → E-Bike"}><span className="ff-text-content">{"E-Bike"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169" data-figma-node-id={"2001:3169"} data-figma-name={"List → Item → Link → E-Scooter"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3169"} data-figma-name-desktop={"List → Item → Link → E-Scooter"}><span className="ff-text-content">{"E-Scooter"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170" data-figma-node-id={"2001:3170"} data-figma-name={"List → Item → Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3170"} data-figma-name-desktop={"List → Item → Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171" data-figma-node-id={"2001:3171"} data-figma-name={"List → Item → Link → Innovation"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3171"} data-figma-name-desktop={"List → Item → Link → Innovation"}><span className="ff-text-content">{"Innovation"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172" data-figma-node-id={"2001:3172"} data-figma-name={"List → Item → Link → Safety"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3172"} data-figma-name-desktop={"List → Item → Link → Safety"}><span className="ff-text-content">{"Safety"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173" data-figma-node-id={"2001:3173"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_programs → Programs"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3173"} data-figma-name-desktop={"Heading 4 → Button - footer_nav_toggle_programs → Programs"} data-figma-node-id-mobile={"2001:3384"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_programs → Programs"}><span className="ff-text-content">{"Programs"}</span></p>
          <img className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385" data-figma-node-id={"2001:3385"} data-figma-name={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385"} data-figma-variant={"mobile-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-mobile={"2001:3385"} data-figma-name-mobile={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} src="/generated-pages/page-1/generated-assets/vectors/2001_3385.svg" alt={"Heading 4 → Button - footer_nav_toggle_programs → SVG"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174" data-figma-node-id={"2001:3174"} data-figma-name={"List → Item → Link → Advertise"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3174"} data-figma-name-desktop={"List → Item → Link → Advertise"}><span className="ff-text-content">{"Advertise"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175" data-figma-node-id={"2001:3175"} data-figma-name={"List → Item → Link → Lime Access"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3175"} data-figma-name-desktop={"List → Item → Link → Lime Access"}><span className="ff-text-content">{"Lime Access"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176" data-figma-node-id={"2001:3176"} data-figma-name={"List → Item → Link → Lime Hero"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3176"} data-figma-name-desktop={"List → Item → Link → Lime Hero"}><span className="ff-text-content">{"Lime Hero"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177" data-figma-node-id={"2001:3177"} data-figma-name={"List → Item → Link → Lime Assist"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3177"} data-figma-name-desktop={"List → Item → Link → Lime Assist"}><span className="ff-text-content">{"Lime Assist"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178" data-figma-node-id={"2001:3178"} data-figma-name={"List → Item → Link → Insurance"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3178"} data-figma-name-desktop={"List → Item → Link → Insurance"}><span className="ff-text-content">{"Insurance"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179" data-figma-node-id={"2001:3179"} data-figma-name={"List → Item → Link → Our Cities"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3179"} data-figma-name-desktop={"List → Item → Link → Our Cities"}><span className="ff-text-content">{"Our Cities"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180" data-figma-node-id={"2001:3180"} data-figma-name={"List → Item → Link → Find Location"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3180"} data-figma-name-desktop={"List → Item → Link → Find Location"} data-figma-node-id-mobile={"2001:3388"} data-figma-name-mobile={"List → Item → Link → Find Location"}><span className="ff-text-content">{"Find Location"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181" data-figma-node-id={"2001:3181"} data-figma-name={"List → Item → Link → Get help"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3181"} data-figma-name-desktop={"List → Item → Link → Get help"} data-figma-node-id-mobile={"2001:3389"} data-figma-name-mobile={"List → Item → Link → Get help"}><span className="ff-text-content">{"Get help"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182" data-figma-node-id={"2001:3182"} data-figma-name={"List → Item → Link → Sitemap"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3182"} data-figma-name-desktop={"List → Item → Link → Sitemap"} data-figma-node-id-mobile={"2001:3390"} data-figma-name-mobile={"List → Item → Link → Sitemap"}><span className="ff-text-content">{"Sitemap"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183" data-figma-node-id={"2001:3183"} data-figma-name={"List → Item → Link - Twitter → twitter.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3183"} data-figma-name-desktop={"List → Item → Link - Twitter → twitter.png"} data-figma-node-id-mobile={"2001:3391"} data-figma-name-mobile={"List → Item → Link - Twitter → twitter.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184" data-figma-node-id={"2001:3184"} data-figma-name={"List → Item → Link - Facebook → facebook.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3184"} data-figma-name-desktop={"List → Item → Link - Facebook → facebook.png"} data-figma-node-id-mobile={"2001:3392"} data-figma-name-mobile={"List → Item → Link - Facebook → facebook.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185" data-figma-node-id={"2001:3185"} data-figma-name={"List → Item → Link - LinkedIn → linkedin.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3185"} data-figma-name-desktop={"List → Item → Link - LinkedIn → linkedin.png"} data-figma-node-id-mobile={"2001:3393"} data-figma-name-mobile={"List → Item → Link - LinkedIn → linkedin.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186" data-figma-node-id={"2001:3186"} data-figma-name={"List → Item → Link - YouTube → youtube.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3186"} data-figma-name-desktop={"List → Item → Link - YouTube → youtube.png"} data-figma-node-id-mobile={"2001:3394"} data-figma-name-mobile={"List → Item → Link - YouTube → youtube.png"} />
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187" data-figma-node-id={"2001:3187"} data-figma-name={"List → Item → Link - Instagram → instagram.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3187"} data-figma-name-desktop={"List → Item → Link - Instagram → instagram.png"} data-figma-node-id-mobile={"2001:3395"} data-figma-name-mobile={"List → Item → Link - Instagram → instagram.png"} />
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188" data-figma-node-id={"2001:3188"} data-figma-name={"2024 Lime"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3188"} data-figma-name-desktop={"2024 Lime"} data-figma-node-id-mobile={"2001:3396"} data-figma-name-mobile={"2024 Lime"}><span className="ff-text-content">{"2024 Lime"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189" data-figma-node-id={"2001:3189"} data-figma-name={"List → Item → Link → User Agreement"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3189"} data-figma-name-desktop={"List → Item → Link → User Agreement"} data-figma-node-id-mobile={"2001:3397"} data-figma-name-mobile={"List → Item → Link → User Agreement"}><span className="ff-text-content">{"User Agreement"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190" data-figma-node-id={"2001:3190"} data-figma-name={"List → Item → Link → Privacy Notice"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3190"} data-figma-name-desktop={"List → Item → Link → Privacy Notice"} data-figma-node-id-mobile={"2001:3398"} data-figma-name-mobile={"List → Item → Link → Privacy Notice"}><span className="ff-text-content">{"Privacy Notice"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191" data-figma-node-id={"2001:3191"} data-figma-name={"List → Item → Link → Data Request"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3191"} data-figma-name-desktop={"List → Item → Link → Data Request"} data-figma-node-id-mobile={"2001:3399"} data-figma-name-mobile={"List → Item → Link → Data Request"}><span className="ff-text-content">{"Data Request"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192" data-figma-node-id={"2001:3192"} data-figma-name={"List → Item → Link → Research"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3192"} data-figma-name-desktop={"List → Item → Link → Research"} data-figma-node-id-mobile={"2001:3400"} data-figma-name-mobile={"List → Item → Link → Research"}><span className="ff-text-content">{"Research"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193" data-figma-node-id={"2001:3193"} data-figma-name={"List → Item → Link → Legal Bases"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3193"} data-figma-name-desktop={"List → Item → Link → Legal Bases"} data-figma-node-id-mobile={"2001:3401"} data-figma-name-mobile={"List → Item → Link → Legal Bases"}><span className="ff-text-content">{"Legal Bases"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194" data-figma-node-id={"2001:3194"} data-figma-name={"List → Item → Link → My Information"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3194"} data-figma-name-desktop={"List → Item → Link → My Information"} data-figma-node-id-mobile={"2001:3402"} data-figma-name-mobile={"List → Item → Link → My Information"}><span className="ff-text-content">{"My Information"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195" data-figma-node-id={"2001:3195"} data-figma-name={"List → Item → Link → Imprint"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3195"} data-figma-name-desktop={"List → Item → Link → Imprint"} data-figma-node-id-mobile={"2001:3403"} data-figma-name-mobile={"List → Item → Link → Imprint"}><span className="ff-text-content">{"Imprint"}</span></p>
        </div>
```

#### Closed source CSS

Selected rules: 42; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3300 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(6753.1899 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(861.13 * var(--figma-scale));
  z-index: 4;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3322 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(64 * var(--figma-scale));
  width: calc(96 * var(--figma-scale));
  height: calc(34.1309 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3346 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3349 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153 > .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-link_-_home_-_svg-2001-3153-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3379 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_join_us-2001-3161 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(154.12 * var(--figma-scale));
  width: calc(105.9734 * var(--figma-scale));
  min-height: calc(45 * var(--figma-scale));
  z-index: 2;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3409 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_join_us_-_svg-2001-3377 {
  box-sizing: border-box;
  position: absolute;
  left: calc(512 * var(--figma-scale));
  top: calc(170.6191 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  z-index: 3;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3440 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_careers-2001-3162 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3463 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_times_blog-2001-3163 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3486 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_press-2001-3164 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3509 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_partners-2001-3165 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3532 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_about-2001-3166 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(223.12 * var(--figma-scale));
  width: calc(90.1688 * var(--figma-scale));
  min-height: calc(45 * var(--figma-scale));
  z-index: 4;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3562 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_about_-_svg-2001-3381 {
  box-sizing: border-box;
  position: absolute;
  left: calc(512 * var(--figma-scale));
  top: calc(239.6191 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  z-index: 5;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3593 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_community-2001-3167 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3616 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-bike-2001-3168 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3639 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_e-scooter-2001-3169 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3662 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sustainability-2001-3170 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3685 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_innovation-2001-3171 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3708 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_safety-2001-3172 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3731 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_programs-2001-3173 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(292.12 * var(--figma-scale));
  width: calc(146.3933 * var(--figma-scale));
  min-height: calc(45 * var(--figma-scale));
  z-index: 6;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3761 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-heading_4_-_button_-_footer_nav_toggle_programs_-_svg-2001-3385 {
  box-sizing: border-box;
  position: absolute;
  left: calc(512 * var(--figma-scale));
  top: calc(308.6191 * var(--figma-scale));
  width: calc(14 * var(--figma-scale));
  height: calc(12 * var(--figma-scale));
  z-index: 7;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3792 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_advertise-2001-3174 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3815 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_access-2001-3175 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3838 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_hero-2001-3176 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3861 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_lime_assist-2001-3177 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3884 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_insurance-2001-3178 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3907 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_our_cities-2001-3179 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3930 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_find_location-2001-3180 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(362.12 * var(--figma-scale));
  width: calc(197.6934 * var(--figma-scale));
  min-height: calc(42 * var(--figma-scale));
  z-index: 8;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3970 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_get_help-2001-3181 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(431.12 * var(--figma-scale));
  width: calc(126.7358 * var(--figma-scale));
  min-height: calc(42 * var(--figma-scale));
  z-index: 9;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4010 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_sitemap-2001-3182 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(500.12 * var(--figma-scale));
  width: calc(126.3753 * var(--figma-scale));
  min-height: calc(42 * var(--figma-scale));
  z-index: 10;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(30 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(45 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4045 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(576.12 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 11;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/34b8d9a8ffc5.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4075 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_facebook_-_facebook-png-2001-3184 {
  box-sizing: border-box;
  position: absolute;
  left: calc(68 * var(--figma-scale));
  top: calc(576.12 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 12;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/e9f44917eded.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4105 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_linkedin_-_linkedin-png-2001-3185 {
  box-sizing: border-box;
  position: absolute;
  left: calc(112 * var(--figma-scale));
  top: calc(576.12 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 13;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/b4e05b83eafb.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4135 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_youtube_-_youtube-png-2001-3186 {
  box-sizing: border-box;
  position: absolute;
  left: calc(156 * var(--figma-scale));
  top: calc(576.12 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 14;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/a2a33dd88f67.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4165 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_instagram_-_instagram-png-2001-3187 {
  box-sizing: border-box;
  position: absolute;
  left: calc(200 * var(--figma-scale));
  top: calc(576.12 * var(--figma-scale));
  width: calc(32 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 15;
  overflow: hidden;
  background-color: transparent;
  background-image: url("/generated-pages/page-1/generated-assets/named/n/366de3c922ce.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: calc(32 * var(--figma-scale)) calc(32 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4200 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2024_lime-2001-3188 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(727.12 * var(--figma-scale));
  width: calc(60.4145 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 16;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4241 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_user_agreement-2001-3189 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(769.12 * var(--figma-scale));
  width: calc(97.2398 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 17;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4283 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_privacy_notice-2001-3190 {
  box-sizing: border-box;
  position: absolute;
  left: calc(144.89 * var(--figma-scale));
  top: calc(769.12 * var(--figma-scale));
  width: calc(84.9607 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 18;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4325 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_data_request-2001-3191 {
  box-sizing: border-box;
  position: absolute;
  left: calc(253.52 * var(--figma-scale));
  top: calc(769.12 * var(--figma-scale));
  width: calc(81.2148 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 19;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4367 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_research-2001-3192 {
  box-sizing: border-box;
  position: absolute;
  left: calc(358.41 * var(--figma-scale));
  top: calc(769.12 * var(--figma-scale));
  width: calc(56.3719 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 20;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4409 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_legal_bases-2001-3193 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: calc(803.12 * var(--figma-scale));
  width: calc(70.7585 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 21;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4451 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_my_information-2001-3194 {
  box-sizing: border-box;
  position: absolute;
  left: calc(118.45 * var(--figma-scale));
  top: calc(803.12 * var(--figma-scale));
  width: calc(90.5294 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 22;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:4493 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_imprint-2001-3195 {
  box-sizing: border-box;
  position: absolute;
  left: calc(232.64 * var(--figma-scale));
  top: calc(803.12 * var(--figma-scale));
  width: calc(43.241 * var(--figma-scale));
  min-height: calc(17 * var(--figma-scale));
  z-index: 23;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(12 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(18 * var(--figma-scale));
  text-align: left;
  text-decoration: underline;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/34b8d9a8ffc5.png`
- `/generated-pages/page-1/generated-assets/named/n/366de3c922ce.png`
- `/generated-pages/page-1/generated-assets/named/n/a2a33dd88f67.png`
- `/generated-pages/page-1/generated-assets/named/n/b4e05b83eafb.png`
- `/generated-pages/page-1/generated-assets/named/n/e9f44917eded.png`
- `/generated-pages/page-1/generated-assets/vectors/2001_3153.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3368.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3377.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3381.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3385.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
