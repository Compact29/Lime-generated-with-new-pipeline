# Component: latest_news_section

- Kind: `page_component`
- Page: `home`
- Build order: 21
- Description: Latest editorial stories presented as a dark themed article carousel.
- Target JSX: `src/refactored/pages/home/components/latest_news_section/LatestNewsSection.jsx`
- Target CSS: `src/refactored/pages/home/components/latest_news_section/LatestNewsSection.css`
- Export: `default LatestNewsSection`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Responsive latest news section with a follow-up action.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `latest_news_section__default__home__desktop__01` | `home` | `desktop` | `[0, 0.6029, 1, 0.1431]` |
| `latest_news_section__default__home__mobile__01` | `home` | `mobile` | `[0, 0.6062, 1, 0.1282]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `latest_news_section__default__home__desktop__01`
- Normalized bbox: `[0, 0.6029, 1, 0.1431]`
- Pixel bbox: `[0, 3933.92, 1440, 933.73]`
- Resolution: **exact_anchor**, confidence **high**, best score `1`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074` | [0, 3934.23, 1440, 933.78] | [0, 3934.23, 1440, 933.78] | 0.999 | 1 | 174 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074`

#### Direct component dependencies

#### Slot `articles`: `news_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `NewsCard`
- JSX implementation: `src/refactored/components/news_card/NewsCard.jsx`
- CSS implementation: `src/refactored/components/news_card/NewsCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `latest_news_section__default__home__desktop__01` | `news_card__default__home__desktop__01` | `home` | `desktop` | `[0.0875, 0.6375, 0.2639, 0.0783]` |
| `latest_news_section__default__home__desktop__01` | `news_card__default__home__desktop__02` | `home` | `desktop` | `[0.3681, 0.6375, 0.2639, 0.0783]` |
| `latest_news_section__default__home__desktop__01` | `news_card__default__home__desktop__03` | `home` | `desktop` | `[0.6486, 0.6375, 0.2639, 0.0783]` |

#### Slot `more_action`: `button.primary`

- Kind: `primitive`
- Required variant: `primary`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `latest_news_section__default__home__desktop__01` | `button__primary__home__desktop__03` | `home` | `desktop` | `[0.4576, 0.7301, 0.0847, 0.0074]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074" data-figma-node-id={"2001:3074"} data-figma-name={"div#footerBlogPosts"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3074"} data-figma-name-desktop={"div#footerBlogPosts"} data-figma-node-id-mobile={"2001:3297"} data-figma-name-mobile={"div#footerBlogPosts"}>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075" data-figma-node-id={"2001:3075"} data-figma-name={"Lime Times Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3075"} data-figma-name-desktop={"Lime Times Blog"} data-figma-node-id-mobile={"2001:3298"} data-figma-name-mobile={"Lime Times Blog"}><span className="ff-text-content">{"Lime Times Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076" data-figma-node-id={"2001:3076"} data-figma-name={"Heading 2 → Our Latest News"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3076"} data-figma-name-desktop={"Heading 2 → Our Latest News"} data-figma-node-id-mobile={"2001:3299"} data-figma-name-mobile={"Heading 2 → Our Latest News"}><span className="ff-text-content">{"Our Latest News"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077" data-figma-node-id={"2001:3077"} data-figma-name={"div.box-content"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3077"} data-figma-name-desktop={"div.box-content"} data-figma-node-id-mobile={"2001:3300"} data-figma-name-mobile={"div.box-content"}>
            <div className="figma-node node-div-footerblogposts-div-box-content-div-flex-2001-3078" data-figma-node-id={"2001:3078"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footerblogposts-div-box-content-div-flex-2001-3078"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3078"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3301"} data-figma-name-mobile={"div.flex"}>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3079" data-figma-node-id={"2001:3079"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3079"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3079"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3302"} data-figma-name-mobile={"div.flex"}>
                <div className="figma-node node-div-flex-div-flex-link-2001-3080" data-figma-node-id={"2001:3080"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3080"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3080"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3303"} data-figma-name-mobile={"Link"}>
                  <img className="figma-vec-desktop node-div-flex-div-flex-link-2001-3080-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3080.svg" alt={"Link"} />
                  <img className="figma-vec-mobile node-div-flex-div-flex-link-2001-3080-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3303.svg" alt={"Link"} />
                </div>
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3082" data-figma-node-id={"2001:3082"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3082"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3082"} data-figma-name-desktop={"div.pt-6"} data-figma-node-id-mobile={"2001:3305"} data-figma-name-mobile={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-div-blog-categories-2001-3083" data-figma-node-id={"2001:3083"} data-figma-name={"div.blog-categories"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-blog-categories-2001-3083"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3083"} data-figma-name-desktop={"div.blog-categories"} data-figma-node-id-mobile={"2001:3306"} data-figma-name-mobile={"div.blog-categories"}>
                    <p className="figma-node node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084" data-figma-node-id={"2001:3084"} data-figma-name={"Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3084"} data-figma-name-desktop={"Link → Sustainability"} data-figma-node-id-mobile={"2001:3307"} data-figma-name-mobile={"Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3085" data-figma-node-id={"2001:3085"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3085"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3085"} data-figma-name-desktop={"Heading 3 → Link"} data-figma-node-id-mobile={"2001:3308"} data-figma-name-mobile={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086" data-figma-node-id={"2001:3086"} data-figma-name={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3086"} data-figma-name-desktop={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"} data-figma-node-id-mobile={"2001:3309"} data-figma-name-mobile={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"}><span className="ff-text-content node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-d">{"With Our Industry-Leading\nNet-Zero Target Validated\nOur Hard Work Continues"}</span><span className="ff-text-content node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-m">{"With Our Industry-Leading Net-Zero\nTarget Validated Our Hard Work\nContinues"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3087" data-figma-node-id={"2001:3087"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3087"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3087"} data-figma-name-desktop={"div.text-base"} data-figma-node-id-mobile={"2001:3310"} data-figma-name-mobile={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088" data-figma-node-id={"2001:3088"} data-figma-name={"by Andrew Savage | January 16, 2024"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3088"} data-figma-name-desktop={"by Andrew Savage | January 16, 2024"} data-figma-node-id-mobile={"2001:3311"} data-figma-name-mobile={"by Andrew Savage | January 16, 2024"}><span className="ff-text-content">{"by Andrew Savage | January 16, 2024"}</span></p>
                  </div>
                </div>
              </div>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3089" data-figma-node-id={"2001:3089"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3089"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3089"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3312"} data-figma-name-mobile={"div.flex"}>
                <div className="figma-node node-div-flex-div-flex-link-2001-3090" data-figma-node-id={"2001:3090"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3090"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3090"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3313"} data-figma-name-mobile={"Link"}>
                  <img className="figma-vec-desktop node-div-flex-div-flex-link-2001-3090-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3090.svg" alt={"Link"} />
                  <img className="figma-vec-mobile node-div-flex-div-flex-link-2001-3090-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3313.svg" alt={"Link"} />
                </div>
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3092" data-figma-node-id={"2001:3092"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3092"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3092"} data-figma-name-desktop={"div.pt-6"} data-figma-node-id-mobile={"2001:3315"} data-figma-name-mobile={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3093" data-figma-node-id={"2001:3093"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3093"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3093"} data-figma-name-desktop={"Heading 3 → Link"} data-figma-node-id-mobile={"2001:3316"} data-figma-name-mobile={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094" data-figma-node-id={"2001:3094"} data-figma-name={"Hero of the Month: Respire"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3094"} data-figma-name-desktop={"Hero of the Month: Respire"} data-figma-node-id-mobile={"2001:3317"} data-figma-name-mobile={"Hero of the Month: Respire"}><span className="ff-text-content">{"Hero of the Month: Respire"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3095" data-figma-node-id={"2001:3095"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3095"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3095"} data-figma-name-desktop={"div.text-base"} data-figma-node-id-mobile={"2001:3318"} data-figma-name-mobile={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096" data-figma-node-id={"2001:3096"} data-figma-name={"Time → January 10, 2024"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3096"} data-figma-name-desktop={"Time → January 10, 2024"} data-figma-node-id-mobile={"2001:3319"} data-figma-name-mobile={"Time → January 10, 2024"}><span className="ff-text-content">{"January 10, 2024"}</span></p>
                  </div>
                </div>
              </div>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3097" data-figma-node-id={"2001:3097"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3097"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3097"} data-figma-name-desktop={"div.flex"}>
                <img className="figma-node node-div-flex-div-flex-link-2001-3098" data-figma-node-id={"2001:3098"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3098"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3098"} data-figma-name-desktop={"Link"} src="/generated-pages/page-1/generated-assets/vectors/2001_3098.svg" alt={"Link"} />
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3100" data-figma-node-id={"2001:3100"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3100"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3100"} data-figma-name-desktop={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3101" data-figma-node-id={"2001:3101"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3101"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3101"} data-figma-name-desktop={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102" data-figma-node-id={"2001:3102"} data-figma-name={"Lime Recaps 2023 With Its Annual ​‘Ride Replay’"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3102"} data-figma-name-desktop={"Lime Recaps 2023 With Its Annual ​‘Ride Replay’"}><span className="ff-text-content">{"Lime Recaps 2023 With Its\nAnnual ​‘Ride Replay’"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3103" data-figma-node-id={"2001:3103"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3103"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3103"} data-figma-name-desktop={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104" data-figma-node-id={"2001:3104"} data-figma-name={"Time → December 13, 2023"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3104"} data-figma-name-desktop={"Time → December 13, 2023"}><span className="ff-text-content">{"December 13, 2023"}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-node node-div-footerblogposts-div-box-content-link-2001-3105" data-figma-node-id={"2001:3105"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-footerblogposts-div-box-content-link-2001-3105"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3105"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3320"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-div-box-content-link-view_more-2001-3106" data-figma-node-id={"2001:3106"} data-figma-name={"View More"} data-figma-type={"TEXT"} data-figma-class={"node-div-box-content-link-view_more-2001-3106"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3106"} data-figma-name-desktop={"View More"} data-figma-node-id-mobile={"2001:3321"} data-figma-name-mobile={"View More"}><span className="ff-text-content">{"View More"}</span></p>
            </div>
          </div>
        </div>
```

#### Closed source CSS

Selected rules: 36; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2298 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(3934.23 * var(--figma-scale));
  width: calc(1440 * var(--figma-scale));
  height: calc(933.78 * var(--figma-scale));
  z-index: 2;
  overflow: hidden;
  background-color: rgb(30, 30, 30);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2320 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075 {
  box-sizing: border-box;
  position: absolute;
  left: calc(640.03 * var(--figma-scale));
  top: calc(80 * var(--figma-scale));
  width: calc(160.2442 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2360 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076 {
  box-sizing: border-box;
  position: absolute;
  left: calc(561.97 * var(--figma-scale));
  top: calc(106 * var(--figma-scale));
  width: calc(316.3731 * var(--figma-scale));
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
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2402 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077 {
  box-sizing: border-box;
  position: absolute;
  left: calc(56 * var(--figma-scale));
  top: calc(226 * var(--figma-scale));
  width: calc(1328 * var(--figma-scale));
  height: calc(651.78 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2422 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footerblogposts-div-box-content-div-flex-2001-3078 {
  box-sizing: border-box;
  position: absolute;
  left: calc(-56 * var(--figma-scale));
  top: 0;
  width: calc(1440 * var(--figma-scale));
  height: calc(547.39 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2444 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-box-content-div-flex-div-flex-2001-3079 {
  box-sizing: border-box;
  position: absolute;
  left: calc(126 * var(--figma-scale));
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(547.39 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2464 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3080 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(285 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2486 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3080 > .node-div-flex-div-flex-link-2001-3080-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2496 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3080 > .node-div-flex-div-flex-link-2001-3080-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2512 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-div-pt-6-2001-3082 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(285 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(262.39 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2532 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-div-blog-categories-2001-3083 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(24 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2552 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(128.6258 * var(--figma-scale));
  min-height: calc(24 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Bold, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 700;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  text-transform: uppercase;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 221, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2594 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3085 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(56 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(134.39 * var(--figma-scale));
  z-index: 2;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2616 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2 * var(--figma-scale));
  width: calc(367.01 * var(--figma-scale));
  min-height: calc(128.6 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(28 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(44.8 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2656 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 > .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-d {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2659 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 > .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2668 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-div-text-base-2001-3087 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(206.4 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(24 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2688 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(294.5445 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2728 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-box-content-div-flex-div-flex-2001-3089 {
  box-sizing: border-box;
  position: absolute;
  left: calc(530 * var(--figma-scale));
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(547.39 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2748 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3090 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(285 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2770 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3090 > .node-div-flex-div-flex-link-2001-3090-vec-d {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2780 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3090 > .node-div-flex-div-flex-link-2001-3090-vec-m {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2796 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-div-pt-6-2001-3092 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(285 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(262.39 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2816 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3093 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(24 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(44.8 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2838 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2 * var(--figma-scale));
  width: calc(364.6119 * var(--figma-scale));
  min-height: calc(39 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(28 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(44.8 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2878 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-div-text-base-2001-3095 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(206.4 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(24 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2898 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(131.2715 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2938 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-box-content-div-flex-div-flex-2001-3097 {
  box-sizing: border-box;
  position: absolute;
  left: calc(934 * var(--figma-scale));
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(547.39 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2951 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-link-2001-3098 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(380 * var(--figma-scale));
  height: calc(285 * var(--figma-scale));
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2964 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-flex-div-pt-6-2001-3100 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(285 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(262.39 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2976 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3101 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(24 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(89.59 * var(--figma-scale));
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2989 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2 * var(--figma-scale));
  width: calc(359.45 * var(--figma-scale));
  min-height: calc(83.8 * var(--figma-scale));
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(28 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(44.8 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3011 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-flex-div-pt-6-div-text-base-2001-3103 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(206.4 * var(--figma-scale));
  width: calc(380 * var(--figma-scale));
  height: calc(24 * var(--figma-scale));
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3023 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(148.505 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3045 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-footerblogposts-div-box-content-link-2001-3105 {
  box-sizing: border-box;
  position: absolute;
  left: calc(603.13 * var(--figma-scale));
  top: calc(603.4 * var(--figma-scale));
  width: calc(121.73 * var(--figma-scale));
  height: calc(48.39 * var(--figma-scale));
  z-index: 2;
  background-color: rgb(0, 221, 0);
  border: calc(1 * var(--figma-scale)) solid rgb(0, 221, 0);
  border-radius: calc(40 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3069 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="desktop"] .node-div-box-content-link-view_more-2001-3106 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(14 * var(--figma-scale));
  width: calc(72.0405 * var(--figma-scale));
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

- `/generated-pages/page-1/generated-assets/vectors/2001_3080.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3090.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3098.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3303.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3313.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `latest_news_section__default__home__mobile__01`
- Normalized bbox: `[0, 0.6062, 1, 0.1282]`
- Pixel bbox: `[0, 4616.21, 550, 976.24]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.999`
- Selected source / target area ratio: `0.999`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074` | [0, 4615.86, 550, 975.67] | [0, 4615.86, 550, 975.67] | 0.999 | 0.999 | 174 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074`

#### Direct component dependencies

#### Slot `articles`: `news_card.default`

- Kind: `shared_component`
- Required variant: `default`
- Default export: `NewsCard`
- JSX implementation: `src/refactored/components/news_card/NewsCard.jsx`
- CSS implementation: `src/refactored/components/news_card/NewsCard.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `latest_news_section__default__home__mobile__01` | `news_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.6302, 0.9127, 0.0831]` |
| `latest_news_section__default__home__mobile__01` | `news_card__default__home__mobile__02` | `home` | `mobile` | `[0.9709, 0.6303, 0.0291, 0.083]` |

#### Slot `more_action`: `button.primary`

- Kind: `primitive`
- Required variant: `primary`
- Default export: `Button`
- JSX implementation: `src/refactored/components/button/Button.jsx`
- CSS implementation: `src/refactored/components/button/Button.css`
- Assembly rule: import the already implemented dependency and replace the raw child fragment at the occurrences below. Read its actual props from the target JSX file at refactoring time.

| Parent occurrence | Child occurrence | Page | Viewport | Child bbox |
|---|---|---|---|---|
| `latest_news_section__default__home__mobile__01` | `button__primary__home__mobile__02` | `home` | `mobile` | `[0.4, 0.7216, 0.2, 0.0053]` |

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074" data-figma-node-id={"2001:3074"} data-figma-name={"div#footerBlogPosts"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3074"} data-figma-name-desktop={"div#footerBlogPosts"} data-figma-node-id-mobile={"2001:3297"} data-figma-name-mobile={"div#footerBlogPosts"}>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075" data-figma-node-id={"2001:3075"} data-figma-name={"Lime Times Blog"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3075"} data-figma-name-desktop={"Lime Times Blog"} data-figma-node-id-mobile={"2001:3298"} data-figma-name-mobile={"Lime Times Blog"}><span className="ff-text-content">{"Lime Times Blog"}</span></p>
          <p className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076" data-figma-node-id={"2001:3076"} data-figma-name={"Heading 2 → Our Latest News"} data-figma-type={"TEXT"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3076"} data-figma-name-desktop={"Heading 2 → Our Latest News"} data-figma-node-id-mobile={"2001:3299"} data-figma-name-mobile={"Heading 2 → Our Latest News"}><span className="ff-text-content">{"Our Latest News"}</span></p>
          <div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077" data-figma-node-id={"2001:3077"} data-figma-name={"div.box-content"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3077"} data-figma-name-desktop={"div.box-content"} data-figma-node-id-mobile={"2001:3300"} data-figma-name-mobile={"div.box-content"}>
            <div className="figma-node node-div-footerblogposts-div-box-content-div-flex-2001-3078" data-figma-node-id={"2001:3078"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-footerblogposts-div-box-content-div-flex-2001-3078"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3078"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3301"} data-figma-name-mobile={"div.flex"}>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3079" data-figma-node-id={"2001:3079"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3079"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3079"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3302"} data-figma-name-mobile={"div.flex"}>
                <div className="figma-node node-div-flex-div-flex-link-2001-3080" data-figma-node-id={"2001:3080"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3080"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3080"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3303"} data-figma-name-mobile={"Link"}>
                  <img className="figma-vec-desktop node-div-flex-div-flex-link-2001-3080-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3080.svg" alt={"Link"} />
                  <img className="figma-vec-mobile node-div-flex-div-flex-link-2001-3080-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3303.svg" alt={"Link"} />
                </div>
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3082" data-figma-node-id={"2001:3082"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3082"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3082"} data-figma-name-desktop={"div.pt-6"} data-figma-node-id-mobile={"2001:3305"} data-figma-name-mobile={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-div-blog-categories-2001-3083" data-figma-node-id={"2001:3083"} data-figma-name={"div.blog-categories"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-blog-categories-2001-3083"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3083"} data-figma-name-desktop={"div.blog-categories"} data-figma-node-id-mobile={"2001:3306"} data-figma-name-mobile={"div.blog-categories"}>
                    <p className="figma-node node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084" data-figma-node-id={"2001:3084"} data-figma-name={"Link → Sustainability"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3084"} data-figma-name-desktop={"Link → Sustainability"} data-figma-node-id-mobile={"2001:3307"} data-figma-name-mobile={"Link → Sustainability"}><span className="ff-text-content">{"Sustainability"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3085" data-figma-node-id={"2001:3085"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3085"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3085"} data-figma-name-desktop={"Heading 3 → Link"} data-figma-node-id-mobile={"2001:3308"} data-figma-name-mobile={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086" data-figma-node-id={"2001:3086"} data-figma-name={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3086"} data-figma-name-desktop={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"} data-figma-node-id-mobile={"2001:3309"} data-figma-name-mobile={"With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues"}><span className="ff-text-content node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-d">{"With Our Industry-Leading\nNet-Zero Target Validated\nOur Hard Work Continues"}</span><span className="ff-text-content node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-m">{"With Our Industry-Leading Net-Zero\nTarget Validated Our Hard Work\nContinues"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3087" data-figma-node-id={"2001:3087"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3087"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3087"} data-figma-name-desktop={"div.text-base"} data-figma-node-id-mobile={"2001:3310"} data-figma-name-mobile={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088" data-figma-node-id={"2001:3088"} data-figma-name={"by Andrew Savage | January 16, 2024"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3088"} data-figma-name-desktop={"by Andrew Savage | January 16, 2024"} data-figma-node-id-mobile={"2001:3311"} data-figma-name-mobile={"by Andrew Savage | January 16, 2024"}><span className="ff-text-content">{"by Andrew Savage | January 16, 2024"}</span></p>
                  </div>
                </div>
              </div>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3089" data-figma-node-id={"2001:3089"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3089"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3089"} data-figma-name-desktop={"div.flex"} data-figma-node-id-mobile={"2001:3312"} data-figma-name-mobile={"div.flex"}>
                <div className="figma-node node-div-flex-div-flex-link-2001-3090" data-figma-node-id={"2001:3090"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3090"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3090"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3313"} data-figma-name-mobile={"Link"}>
                  <img className="figma-vec-desktop node-div-flex-div-flex-link-2001-3090-vec-d" src="/generated-pages/page-1/generated-assets/vectors/2001_3090.svg" alt={"Link"} />
                  <img className="figma-vec-mobile node-div-flex-div-flex-link-2001-3090-vec-m" src="/generated-pages/page-1/generated-assets/vectors/2001_3313.svg" alt={"Link"} />
                </div>
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3092" data-figma-node-id={"2001:3092"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3092"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3092"} data-figma-name-desktop={"div.pt-6"} data-figma-node-id-mobile={"2001:3315"} data-figma-name-mobile={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3093" data-figma-node-id={"2001:3093"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3093"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3093"} data-figma-name-desktop={"Heading 3 → Link"} data-figma-node-id-mobile={"2001:3316"} data-figma-name-mobile={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094" data-figma-node-id={"2001:3094"} data-figma-name={"Hero of the Month: Respire"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3094"} data-figma-name-desktop={"Hero of the Month: Respire"} data-figma-node-id-mobile={"2001:3317"} data-figma-name-mobile={"Hero of the Month: Respire"}><span className="ff-text-content">{"Hero of the Month: Respire"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3095" data-figma-node-id={"2001:3095"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3095"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3095"} data-figma-name-desktop={"div.text-base"} data-figma-node-id-mobile={"2001:3318"} data-figma-name-mobile={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096" data-figma-node-id={"2001:3096"} data-figma-name={"Time → January 10, 2024"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3096"} data-figma-name-desktop={"Time → January 10, 2024"} data-figma-node-id-mobile={"2001:3319"} data-figma-name-mobile={"Time → January 10, 2024"}><span className="ff-text-content">{"January 10, 2024"}</span></p>
                  </div>
                </div>
              </div>
              <div className="figma-node node-div-box-content-div-flex-div-flex-2001-3097" data-figma-node-id={"2001:3097"} data-figma-name={"div.flex"} data-figma-type={"FRAME"} data-figma-class={"node-div-box-content-div-flex-div-flex-2001-3097"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3097"} data-figma-name-desktop={"div.flex"}>
                <img className="figma-node node-div-flex-div-flex-link-2001-3098" data-figma-node-id={"2001:3098"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-link-2001-3098"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3098"} data-figma-name-desktop={"Link"} src="/generated-pages/page-1/generated-assets/vectors/2001_3098.svg" alt={"Link"} />
                <div className="figma-node node-div-flex-div-flex-div-pt-6-2001-3100" data-figma-node-id={"2001:3100"} data-figma-name={"div.pt-6"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-flex-div-pt-6-2001-3100"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3100"} data-figma-name-desktop={"div.pt-6"}>
                  <div className="figma-node node-div-flex-div-pt-6-heading_3_-_link-2001-3101" data-figma-node-id={"2001:3101"} data-figma-name={"Heading 3 → Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-heading_3_-_link-2001-3101"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3101"} data-figma-name-desktop={"Heading 3 → Link"}>
                    <p className="figma-node node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102" data-figma-node-id={"2001:3102"} data-figma-name={"Lime Recaps 2023 With Its Annual ​‘Ride Replay’"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3102"} data-figma-name-desktop={"Lime Recaps 2023 With Its Annual ​‘Ride Replay’"}><span className="ff-text-content">{"Lime Recaps 2023 With Its\nAnnual ​‘Ride Replay’"}</span></p>
                  </div>
                  <div className="figma-node node-div-flex-div-pt-6-div-text-base-2001-3103" data-figma-node-id={"2001:3103"} data-figma-name={"div.text-base"} data-figma-type={"FRAME"} data-figma-class={"node-div-flex-div-pt-6-div-text-base-2001-3103"} data-figma-variant={"desktop-only"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3103"} data-figma-name-desktop={"div.text-base"}>
                    <p className="figma-node node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104" data-figma-node-id={"2001:3104"} data-figma-name={"Time → December 13, 2023"} data-figma-type={"TEXT"} data-figma-class={"node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104"} data-figma-variant={"desktop-only"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3104"} data-figma-name-desktop={"Time → December 13, 2023"}><span className="ff-text-content">{"December 13, 2023"}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-node node-div-footerblogposts-div-box-content-link-2001-3105" data-figma-node-id={"2001:3105"} data-figma-name={"Link"} data-figma-type={"FRAME"} data-figma-class={"node-div-footerblogposts-div-box-content-link-2001-3105"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE"} data-figma-node-id-desktop={"2001:3105"} data-figma-name-desktop={"Link"} data-figma-node-id-mobile={"2001:3320"} data-figma-name-mobile={"Link"}>
              <p className="figma-node node-div-box-content-link-view_more-2001-3106" data-figma-node-id={"2001:3106"} data-figma-name={"View More"} data-figma-type={"TEXT"} data-figma-class={"node-div-box-content-link-view_more-2001-3106"} data-figma-variant={"shared"} data-render-rules={"TEXT_SIMPLE_RULE"} data-figma-node-id-desktop={"2001:3106"} data-figma-name-desktop={"View More"} data-figma-node-id-mobile={"2001:3321"} data-figma-name-mobile={"View More"}><span className="ff-text-content">{"View More"}</span></p>
            </div>
          </div>
        </div>
```

#### Closed source CSS

Selected rules: 36; context rules for variables: 2.

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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2309 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(4615.8599 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(975.67 * var(--figma-scale));
  z-index: 2;
  overflow: hidden;
  background-color: rgb(30, 30, 30);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2340 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-lime_times_blog-2001-3075 {
  box-sizing: border-box;
  position: absolute;
  left: calc(211.03 * var(--figma-scale));
  top: calc(77 * var(--figma-scale));
  width: calc(128.3383 * var(--figma-scale));
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

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2381 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-heading_2_-_our_latest_news-2001-3076 {
  box-sizing: border-box;
  position: absolute;
  left: calc(156.48 * var(--figma-scale));
  top: calc(101.59 * var(--figma-scale));
  width: calc(237.4144 * var(--figma-scale));
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
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2412 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(183.59 * var(--figma-scale));
  width: calc(550 * var(--figma-scale));
  height: calc(736.08 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2433 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footerblogposts-div-box-content-div-flex-2001-3078 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(550 * var(--figma-scale));
  height: calc(638.89 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2454 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-box-content-div-flex-div-flex-2001-3079 {
  box-sizing: border-box;
  position: absolute;
  left: calc(24 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(638.89 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2475 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3080 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(376.5 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2499 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3080 > .node-div-flex-div-flex-link-2001-3080-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2502 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3080 > .node-div-flex-div-flex-link-2001-3080-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2522 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-div-pt-6-2001-3082 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(376.5 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(262.39 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2542 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-div-blog-categories-2001-3083 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(24 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(32 * var(--figma-scale));
  z-index: 1;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2573 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-div-blog-categories-link_-_sustainability-2001-3084 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(128.6258 * var(--figma-scale));
  min-height: calc(24 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Bold, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 700;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  text-transform: uppercase;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 221, 0);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2605 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3085 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(56 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(134.39 * var(--figma-scale));
  z-index: 2;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2636 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2 * var(--figma-scale));
  width: calc(498.03 * var(--figma-scale));
  min-height: calc(128.6 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(28 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(44.8 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2662 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 > .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2665 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086 > .node-div-pt-6-heading_3_-_link-with_our_industry-leading_net-zero_target_validated_our_hard_work_continues-2001-3086-text-m {
  display: inline;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2678 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-div-text-base-2001-3087 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(206.39 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(24 * var(--figma-scale));
  z-index: 3;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2708 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-div-text-base-by_andrew_savage_january_16-_2024-2001-3088 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(294.5445 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2738 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-box-content-div-flex-div-flex-2001-3089 {
  box-sizing: border-box;
  position: absolute;
  left: calc(534 * var(--figma-scale));
  top: 0;
  width: calc(502 * var(--figma-scale));
  height: calc(638.89 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2759 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3090 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(16 * var(--figma-scale));
  height: calc(376.5 * var(--figma-scale));
  z-index: 1;
  display: block;
  object-fit: fill;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2783 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3090 > .node-div-flex-div-flex-link-2001-3090-vec-d {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2786 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3090 > .node-div-flex-div-flex-link-2001-3090-vec-m {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: fill;
  max-width: none;
  pointer-events: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2806 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-div-pt-6-2001-3092 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(376.5 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(262.39 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2827 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3093 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(24 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(44.8 * var(--figma-scale));
  z-index: 1;
  overflow: hidden;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2858 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-heading_3_-_link-hero_of_the_month_respire-2001-3094 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(2 * var(--figma-scale));
  width: calc(364.6119 * var(--figma-scale));
  min-height: calc(39 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(28 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(44.8 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2888 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-div-text-base-2001-3095 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: calc(206.39 * var(--figma-scale));
  width: calc(502 * var(--figma-scale));
  height: calc(24 * var(--figma-scale));
  z-index: 2;
  background-color: transparent;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2918 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-div-text-base-time_-_january_10-_2024-2001-3096 {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(131.2715 * var(--figma-scale));
  min-height: calc(23 * var(--figma-scale));
  z-index: 1;
  font-family: Poppins, Poppins-Regular, Arial, sans-serif;
  font-size: calc(16 * var(--figma-scale));
  font-weight: 400;
  line-height: calc(24 * var(--figma-scale));
  text-align: left;
  white-space: pre-wrap;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(255, 255, 255);
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2948 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-box-content-div-flex-div-flex-2001-3097 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2961 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-link-2001-3098 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2973 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-flex-div-pt-6-2001-3100 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:2986 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-heading_3_-_link-2001-3101 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3008 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-heading_3_-_link-lime_recaps_2023_with_its_annual_-ride_replay-2001-3102 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3020 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-flex-div-pt-6-div-text-base-2001-3103 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3042 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-pt-6-div-text-base-time_-_december_13-_2023-2001-3104 {
  display: none;
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3057 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-footerblogposts-div-box-content-link-2001-3105 {
  box-sizing: border-box;
  position: absolute;
  left: calc(219.25 * var(--figma-scale));
  top: calc(694.89 * var(--figma-scale));
  width: calc(111.48 * var(--figma-scale));
  height: calc(41.19 * var(--figma-scale));
  z-index: 2;
  background-color: rgb(0, 221, 0);
  border: calc(1 * var(--figma-scale)) solid rgb(0, 221, 0);
  border-radius: calc(40 * var(--figma-scale));
}

/* /home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css:3089 */
.ff-page-shell[data-page-key="page-1"] .figma-root[data-figma-mode="mobile"] .node-div-box-content-link-view_more-2001-3106 {
  box-sizing: border-box;
  position: absolute;
  left: calc(25 * var(--figma-scale));
  top: calc(12 * var(--figma-scale));
  width: calc(61.869 * var(--figma-scale));
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

- `/generated-pages/page-1/generated-assets/vectors/2001_3080.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3090.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3098.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3303.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3313.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
