# Component: social_link

- Kind: `primitive`
- Build order: 7
- Description: Circular icon link to a social media channel.
- Target JSX: `src/refactored/components/social_link/SocialLink.jsx`
- Target CSS: `src/refactored/components/social_link/SocialLink.css`
- Export: `default SocialLink`

> Refactoring goal: replace the extracted absolute/coordinate layout with the project refactoring contract while preserving all semantic variants, responsive presentations, content, assets, and direct component dependencies.

## Variant: default

Description: Standard footer social icon link.

### Occurrence inventory

| Occurrence | Page | Viewport | Normalized bbox |
|---|---|---|---|
| `social_link__default__home__desktop__01` | `home` | `desktop` | `[0.8, 0.9407, 0.0222, 0.0049]` |
| `social_link__default__home__desktop__02` | `home` | `desktop` | `[0.8306, 0.9407, 0.0222, 0.0049]` |
| `social_link__default__home__desktop__03` | `home` | `desktop` | `[0.8611, 0.9407, 0.0222, 0.0049]` |
| `social_link__default__home__desktop__04` | `home` | `desktop` | `[0.8917, 0.9407, 0.0222, 0.0049]` |
| `social_link__default__home__desktop__05` | `home` | `desktop` | `[0.9222, 0.9407, 0.0222, 0.0049]` |
| `social_link__default__home__mobile__01` | `home` | `mobile` | `[0.0436, 0.9624, 0.0582, 0.0042]` |
| `social_link__default__home__mobile__02` | `home` | `mobile` | `[0.1236, 0.9624, 0.0582, 0.0042]` |
| `social_link__default__home__mobile__03` | `home` | `mobile` | `[0.2036, 0.9624, 0.0582, 0.0042]` |
| `social_link__default__home__mobile__04` | `home` | `mobile` | `[0.2836, 0.9624, 0.0582, 0.0042]` |
| `social_link__default__home__mobile__05` | `home` | `mobile` | `[0.3636, 0.9624, 0.0582, 0.0042]` |

### Desktop — desktop

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot1.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `social_link__default__home__desktop__01`
- Normalized bbox: `[0.8, 0.9407, 0.0222, 0.0049]`
- Pixel bbox: `[1152, 6138.07, 31.97, 31.97]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.931`
- Selected source / target area ratio: `1.002`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183` | [1152, 6138.78, 32, 32] | [1152, 6138.78, 32, 32] | 0.955 | 0.931 | 269 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183" data-figma-node-id={"2001:3183"} data-figma-name={"List → Item → Link - Twitter → twitter.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3183"} data-figma-name-desktop={"List → Item → Link - Twitter → twitter.png"} data-figma-node-id-mobile={"2001:3391"} data-figma-name-mobile={"List → Item → Link - Twitter → twitter.png"} />
```

#### Closed source CSS

Selected rules: 1; context rules for variables: 2.

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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/7f527cbb8f4e.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.

### Mobile — mobile

- Screenshot: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/screenshot_2.png`
- Source JSX: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/GeneratedScene_1.jsx`
- Source CSS: `/home/edem2/proga/andrew_robust_variant/zzz_screenshots/figma-site/src/generated/Home/generated_1.css`
- Occurrence: `social_link__default__home__mobile__01`
- Normalized bbox: `[0.0436, 0.9624, 0.0582, 0.0042]`
- Pixel bbox: `[23.98, 7328.68, 32.01, 31.98]`
- Resolution: **exact_anchor**, confidence **high**, best score `0.934`
- Selected source / target area ratio: `1`

| Selected JSX root | Raw source box | Visible box | IoU | Score | JSX line |
|---|---|---|---:|---:|---:|
| `<div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183` | [24, 7329.31, 32, 32] | [24, 7329.31, 32, 32] | 0.96 | 0.934 | 269 |

#### Ancestor context

- `<main>.figma-page > <div>.scene-root-2001-2993 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-2001-3152 > <div>.node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183`

#### Direct component dependencies

This presentation has no direct component dependencies in the Manifest.

#### Source JSX / HTML structure

```jsx
<div className="figma-node node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183" data-figma-node-id={"2001:3183"} data-figma-name={"List → Item → Link - Twitter → twitter.png"} data-figma-type={"FRAME"} data-figma-class={"node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-footer-list_-_item_-_link_-_twitter_-_twitter-png-2001-3183"} data-figma-variant={"shared"} data-render-rules={"FRAME_ABSOLUTE_CONTAINER_RULE FRAME_CLIPPING_RULE"} data-figma-node-id-desktop={"2001:3183"} data-figma-name-desktop={"List → Item → Link - Twitter → twitter.png"} data-figma-node-id-mobile={"2001:3391"} data-figma-name-mobile={"List → Item → Link - Twitter → twitter.png"} />
```

#### Closed source CSS

Selected rules: 1; context rules for variables: 2.

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
```

#### Referenced assets

- `/generated-pages/page-1/generated-assets/named/n/34b8d9a8ffc5.png`

#### Excluded bbox intersections

No excluded intersecting JSX nodes exceeded the diagnostic threshold.
