# Component: news_card

- Kind: `shared_component`
- Build order: 12
- Description: Editorial card with article artwork, headline and publication metadata.
- Target JSX: `src/refactored/components/news_card/NewsCard.jsx`
- Target CSS: `src/refactored/components/news_card/NewsCard.css`
- Export: `default NewsCard`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard news carousel card.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `news_card__default__home__desktop__01` | `home` | `desktop` | `[0.0875, 0.6375, 0.2639, 0.0783]` |
| `news_card__default__home__desktop__02` | `home` | `desktop` | `[0.3681, 0.6375, 0.2639, 0.0783]` |
| `news_card__default__home__desktop__03` | `home` | `desktop` | `[0.6486, 0.6375, 0.2639, 0.0783]` |
| `news_card__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.6302, 0.9127, 0.0831]` |
| `news_card__default__home__mobile__02` | `home` | `mobile` | `[0.9709, 0.6303, 0.0291, 0.083]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `news_card__default__home__desktop__01`
- Normalized bbox: `[0.0875, 0.6375, 0.2639, 0.0783]`
- Pixel bbox: `[126, 4159.69, 380.02, 510.91]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.938`
- Selected source / target area ratio: `1.071`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-box-content-div-flex-div-flex-2001-3079` | [126, 4160.23, 380, 547.39] | [126, 4160.23, 380, 547.39] | 0.931 | 0.938 | 179 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077 > <div>.node-div-footerblogposts-div-box-content-div-flex-2001-3078 > <div>.node-div-box-content-div-flex-div-flex-2001-3079`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
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
```

#### Closed source CSS

Selected rules: 13; context rules for variables: 2.

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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3080.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3303.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `news_card__default__home__mobile__01`
- Normalized bbox: `[0.0436, 0.6302, 0.9127, 0.0831]`
- Pixel bbox: `[23.98, 4798.97, 501.98, 632.81]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.983`
- Selected source / target area ratio: `1.01`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-div-box-content-div-flex-div-flex-2001-3079` | [24, 4799.45, 502, 638.89] | [24, 4799.45, 502, 638.89] | 0.989 | 0.983 | 179 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-2001-3074 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-div-footerblogposts-div-box-content-2001-3077 > <div>.node-div-footerblogposts-div-box-content-div-flex-2001-3078 > <div>.node-div-box-content-div-flex-div-flex-2001-3079`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
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
```

#### Closed source CSS

Selected rules: 13; context rules for variables: 2.

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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/vectors/2001_3080.svg`
- `/generated-pages/page-1/generated-assets/vectors/2001_3303.svg`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
