# Site Refactoring Contract

## Scope

Контракт относится к одной визуально идентифицированной странице `home` и основан только на двух уникальных полноразмерных reference screenshots: `screenshot1.png` (1440 px) и `screenshot_2.png` (550 px). Исходный проект, Manifest, DOM/CSS/JSX, Figma JSON и структура generated-кода на этом этапе не анализировались.

Рекурсивная инвентаризация обнаружила 88 bitmap-файлов. Из них два верхнеуровневых файла являются уникальными reference screenshots, два файла в `figma-site/design-reference/` — их побайтные дубликаты, два файла в `figma-site/.figma-fighter-context/` — служебные context crops, а 82 файла внутри каталогов `generated-assets` — контентные media assets, а не снимки страниц. Дубликаты, crops и media assets не считаются отдельными reference states.

Цель — минимальный структурный рефакторинг сгенерированной React-вёрстки: нормальный document flow, адаптивные компоненты и сохранение существующего визуального результата, контента, assets и поведения без редизайна или проектирования полноценной дизайн-системы.

## Fixed Implementation Contract

### Technology

- UI реализуется на React.
- Язык компонентов — JavaScript/JSX.
- Каждый компонент имеет один `default export`.
- Стили — обычный colocated CSS: `ComponentName.jsx` и `ComponentName.css`.
- CSS Modules, CSS-in-JS и inline layout styles не используются.
- Responsive layout реализуется CSS media queries, а не чтением ширины окна в React.
- JavaScript допускается только для поведения, которое невозможно выразить CSS: состояние меню, carousel state, dialog state и т. п.

### Desktop-first Responsive Strategy

- Стили вне media query описывают самый широкий desktop-режим.
- Адаптация выполняется вниз через `@media (max-width: ...px)`.
- Breakpoint принадлежит более узкому режиму. Например, при breakpoint `820px` ширина `820px` относится к mobile, а `821px` — к desktop.
- Все агенты используют только breakpoint-ы из site-specific части контракта.
- Локальные «почти такие же» breakpoint-ы внутри отдельных компонентов запрещены.
- Новый breakpoint можно добавить только через изменение общего Site Refactoring Contract.

### Layout Rules

- Обычные элементы участвуют в normal document flow.
- Для раскладки используются Flexbox, CSS Grid, `gap`, `padding`, `margin`, `minmax()`, `max-width` и относительные размеры.
- Страница не имеет фиксированной общей ширины или высоты.
- Запрещено масштабировать всю страницу через `transform: scale()`, вычисляемую scale-переменную или аналогичный механизм.
- Запрещено переносить screenshot/Figma `x`, `y`, `width`, `height` непосредственно в новый CSS.
- `height: auto` является правилом по умолчанию. Фиксированная высота разрешена только для элемента с действительно фиксированной визуальной областью.
- `position: absolute` разрешён только для настоящего наложения: декора, текста поверх media, badge поверх card, иконки внутри control и подобных случаев.
- Абсолютное позиционирование нельзя использовать для построения обычной сетки страницы или компенсации неправильного flow.
- Изображения не должны растягивать layout: используй подходящие `max-width`, `object-fit` и `aspect-ratio`.
- Использование `px` не запрещено. Запрещена координатная пиксельная реконструкция всей страницы.

### Component Boundaries

- Mobile и desktop являются представлениями одного semantic component.
- Нельзя создавать отдельные `ComponentDesktop` и `ComponentMobile`, если различия можно выразить CSS layout.
- Semantic variants реализуются одним компонентом через prop `variant`.
- Responsive presentation не передаётся prop-ом `mobile`, `desktop` или `isMobile`.
- Различия только в тексте, изображении или данных передаются через props и не создают новый component variant.
- Разный порядок элементов по возможности реализуется Grid/Flex placement, а не дублированием JSX.
- Дублирование markup допускается только когда две presentation действительно имеют несовместимую семантику или интерактивное поведение; такое исключение должно быть явно обосновано.
- Компонент владеет своей внутренней структурой, внутренними отступами и визуальными состояниями.
- Родитель владеет размещением компонента в своей Grid/Flex-композиции, доступной шириной и внешними отступами.
- Родитель не обращается к внутренним CSS-классам дочернего компонента.
- Для внешнего позиционирования разрешено передать `className` на корневой DOM-элемент компонента.
- Компонент не знает координаты страницы, screenshot bbox или место своего конкретного occurrence.
- Full-width фон принадлежит section; ограничение ширины и горизонтальные gutters принадлежат внутреннему container.

### Dependency Rules

- Компоненты рефакторятся от простых к составным.
- Родитель импортирует уже готовый дочерний компонент вместо копирования его JSX/CSS.
- Родитель использует только прямые зависимости и не повторяет их транзитивные зависимости.
- Внутренние стили дочернего компонента не копируются и не переопределяются в CSS родителя.
- Один semantic component имеет один стабильный JSX-файл и один colocated CSS-файл для всех variants и responsive presentations.

### CSS Rules

- У каждого компонента есть уникальный корневой class name, основанный на semantic component ID.
- Все локальные селекторы ограничены корневым классом компонента.
- Запрещены селекторы, основанные на Figma node ID, случайном generated class name или положении элемента на странице.
- Запрещены широкие глобальные селекторы из component CSS.
- `!important` не используется для исправления архитектуры cascade.
- Общие layout constants из site-specific контракта должны иметь единый источник истины.
- Поскольку нативные CSS custom properties нельзя использовать непосредственно в media query, числовые breakpoint-ы записываются в контракте и повторяются в media queries буквально и без отклонений.

### Content and Assets

- Существующие тексты, ссылки и assets сохраняются.
- Повторяющийся контент передаётся через props или массив данных, а не копируется в нескольких версиях компонента.
- Контент не должен определять позицию через уникальные CSS-селекторы.
- Смысловые изображения реализуются через `<img>` с сохранением alt-семантики; декоративные изображения могут оставаться CSS background.
- Рефакторинг layout не должен самовольно переименовывать, перекодировать или заменять assets.

### Sequential Migration

- За один шаг рефакторится один component из Component Manifest.
- Каждый шаг записывает только стабильные `target.module_path` и `target.style_path` текущего компонента.
- Generated entrypoint, page registry и generated JSX/CSS на component-шаге не редактируются: они остаются неизменяемым источником до финальной сборки.
- Новый компонент реализуется и проверяется изолированно; уже готовые прямые зависимости подключаются из их target paths.
- После готовности всех target-файлов отдельный assembler строит страницы по `pages.<page_id>.composition`, создаёт новый entrypoint и исключает generated tree из итогового runtime.
- Агент не рефакторит соседние компоненты без необходимости для текущей зависимости.
- Bbox используется extractor-ом только для нахождения старого фрагмента и никогда не становится частью новой реализации.

### Assembly Interface

- Компонент записывается ровно в один `target.module_path` и один colocated `target.style_path` из Manifest.
- JSX имеет ровно один `default export` с точным `target.export_name` и импортирует свой target CSS относительным import-ом.
- Все Manifest variants реализуются одним prop `variant`; если prop отсутствует, используется `default`, а при его отсутствии — первый вариант Manifest.
- Каждый компонент принимает optional `className` и объединяет его со своим уникальным корневым class.
- Компонент безопасно и содержательно рендерится без обязательных props: content и behavior props имеют defaults из representative occurrence.
- Прямые зависимости импортируются из их точных target paths и получают variant из `uses`; копирование dependency markup запрещено.
- Relative imports могут вести только к target dependencies, собственному CSS, существующим project-wide utilities или существующим assets. Импорты из generated tree запрещены.
- Page-level composition вызывает верхнеуровневый компонент как `<Component variant="<manifest_variant>" />`; поэтому такой вызов не должен требовать ручной адаптации.
- Component CSS не определяет общесайтовые custom properties: они читаются из единого `SITE_CSS` блока итогового контракта.

### Definition of Done

Компонент готов, когда:

- реализованы все его semantic variants;
- один JSX-компонент обслуживает все responsive modes;
- используются уже готовые прямые зависимости;
- обычная раскладка не основана на абсолютных координатах;
- отсутствует непредусмотренный horizontal overflow;
- внешний вид проверен на всех reference viewports, относящихся к компоненту;
- внешний вид проверен на ширинах непосредственно до и после каждого применимого breakpoint;
- проверена хотя бы одна промежуточная ширина каждого responsive range;
- target JSX проходит синтаксическую проверку, imports разрешаются, target CSS существует;
- component удовлетворяет Assembly ABI и не импортирует generated code.

## Site-specific Layout Contract

### Screenshot Inventory

| Page | Viewport ID | Width | Height | Screenshot |
|---|---:|---:|---:|---|
| `home` | `desktop-1440` | 1440 | 6525 | `screenshot1.png` |
| `home` | `mobile-550` | 550 | 7615 | `screenshot_2.png` |

Классификация исключённых изображений:

- `figma-site/design-reference/desktop.png` — побайтный дубликат `screenshot1.png` (одинаковые 1440 × 6525 и SHA-256), поэтому не является третьим reference state.
- `figma-site/design-reference/mobile.png` — побайтный дубликат `screenshot_2.png` (одинаковые 550 × 7615 и SHA-256), поэтому не является четвёртым reference state.
- `figma-site/.figma-fighter-context/01-node-div-content-wrapper-main-link-2001-3072-desktop-figma.png` (305 × 174) и `figma-site/.figma-fighter-context/01-node-www-li-me_-_30_01_2024-_16_06_01_gmt-1-header-2001-3196-desktop-figma.png` (1440 × 292) — служебные component/context crops, а не полноразмерные страницы.
- Все 82 bitmap-файла внутри `figma-site/public/generated-pages/page-1/generated-assets/` и `figma-site/dist-msqdyexp-ca9559a7/generated-pages/page-1/generated-assets/` — карточные, иллюстративные или брендовые media assets; две asset-ветки повторяют один и тот же набор и не являются page screenshots.

### Responsive Modes

Выбраны два режима; дополнительный tablet-режим визуально не подтверждён и для объяснения двух reference states не нужен.

| Mode | Supported viewport range | Reference evidence | Required behavior |
|---|---|---|---|
| `wide` | 1121 px и шире | `screenshot1.png` при 1440 px | Полная навигация и header CTA; двух- и трёхколоночные композиции; три видимые carousel cards; download-app row; многоколоночный footer. |
| `narrow` | 320–1120 px | `screenshot_2.png` при 550 px | Hamburger navigation; одно-колоночные flow-композиции; horizontal carousels с одной основной карточкой и preview; download-app stack; footer accordion/stack. |

Оба режима являются CSS-представлениями одних semantic components. Responsive props и отдельные mobile/desktop component trees не вводятся.

### Breakpoints

| Breakpoint ID | Narrow range | Wide range | CSS query | Evidence | Rationale |
|---|---|---|---|---|---|
| `site-narrow` | 320–1120 px | 1121 px и шире | `@media (max-width: 1120px)` | В `screenshot1.png` (1440) помещаются logo/locale, семь navigation links и CTA; tutorial cards стоят в три колонки. В `screenshot_2.png` (550) navigation заменена hamburger-кнопкой, grids собраны в один столбец, download block и footer перестроены. | Точная координата перехода статическими screenshots не показана и выведена инженерно между reference states. Оценка полного header: logo/locale group + семь ссылок с устойчивыми gaps + CTA + двусторонние gutters требует примерно 1120 px; ниже этого wide header становится неустойчивым. Та же граница оставляет wide three-card layout с карточками около 338 px при минимальных wide gutters. Это минимальный единый breakpoint, объясняющий все наблюдаемые перестройки, а не заимствованный framework default. |

Диапазоны непрерывны и не пересекаются: ширина 1120 px относится к `narrow`, ширина 1121 px — к `wide`.

### Supported Width Range

- Минимальная поддерживаемая ширина viewport: **320 px**.
- Максимальная ширина основного content container: **1280 px**.
- При wide gutters 32 px container продолжает расширяться до viewport **1344 px**; начиная с 1344 px его ширина остаётся 1280 px.
- На экранах шире 1344 px container центрируется, а full-bleed backgrounds и hero media продолжаются до краёв viewport.
- Обязательные reference widths для visual verification: **550 px** и **1440 px**.
- Обязательные boundary widths: **1120 px** и **1121 px**.
- Репрезентативные промежуточные widths: **768 px** для `narrow` и **1232 px** для `wide`.
- Дополнительно проверяются **320 px** (нижняя граница), **1280 px** (числовая ширина content maximum как отдельная wide-проверка) и **1344 px** (момент достижения container cap).

### Page Shell and Containers

- Основная модель: `width: calc(100% - 2 * gutter)`, `max-width: 1280px`, `margin-inline: auto`.
- В `wide` минимальный horizontal gutter равен 32 px. На reference 1440 px фактические поля становятся 80 px из-за 1280 px container cap; это видно по общей линии tutorial cards, news content и footer columns в `screenshot1.png`.
- В `narrow` horizontal gutter равен 24 px. В `screenshot_2.png` tutorial cards, product cards и download-app copy выровнены по x = 24 px и имеют usable width 502 px.
- Hero media, светло-серый tutorial background, тёмные news/download backgrounds и чёрный footer являются full-bleed sections; их содержимое ограничивает внутренний container, а не фон.
- Product grid на wide визуально уже основного container и центрирован, но это component-local max-width, не второй общесайтовый container.
- Carousel tracks для cities, principles и news стартуют от соответствующей container/gutter line и намеренно продолжаются вправо с обрезанным preview. Это разрешённый section-local horizontal overflow; вся страница не должна получать horizontal scrollbar.
- Других устойчиво повторяющихся container widths или выходов обычного контента за container не наблюдается.

### Global CSS Seed

<!-- SITE_CSS_START -->
```css
:root {
  --site-content-max: 1280px;
  --site-gutter-wide: 32px;
  --site-gutter-narrow: 24px;
}
```
<!-- SITE_CSS_END -->

Число breakpoint `1120px` повторяется в component media queries буквально; CSS custom property для media query не вводится.

### Shared Responsive Transformations

| Rule | Wide (`≥1121px`) | Narrow (`≤1120px`) | Visual evidence |
|---|---|---|---|
| Header navigation | Полная горизонтальная navigation, locale control и CTA поверх hero. | Logo и locale сохраняются; links и header CTA сворачиваются в hamburger-triggered navigation. | Верхняя часть `screenshot1.png` и `screenshot_2.png`. |
| Grid flow | Повторяющиеся two-/three-card groups находятся в строках. | Карточки vehicle/tutorial идут одним столбцом с естественной высотой. | Product и “How to Lime” sections на обоих screenshots. |
| Carousel viewport | Около трёх карточек одновременно, track всё равно имеет продолжение и pagination dots. | Одна почти полная карточка и видимый край следующей; track остаётся горизонтальным. | “Our U.S. Cities”, “Our Core Principles” и “Our Latest News” на обоих screenshots. |
| Composite row | Download-app illustration и copy/store badges стоят рядом. | Illustration идёт первой, copy и badges — ниже в одном столбце. | Нижняя тёмная секция на обоих screenshots. |
| Footer | Несколько link columns в строку; legal links образуют нижнюю строку. | Link groups собираются в вертикальный accordion/stack, затем social и legal rows переносятся. | Footer на обоих screenshots. |
| Alignment and gutters | Section headings центрированы; content использует 32 px minimum gutter и 1280 px cap. | Section headings остаются центрированными; основной контент использует 24 px gutter. | Повторяющиеся alignment lines по всей высоте обоих screenshots. |

Порядок элементов меняется через Grid/Flex placement. Дублирование JSX ради этих responsive presentations не разрешено.

### Media Policy

- Full-bleed hero использует `object-fit: cover`; локальный hero media wrapper задаёт устойчивую визуальную область. На 1440 px виден широкий горизонтальный crop, а на 550 px — высокий crop с сохранением rider/vehicle; `object-position` может меняться на общем breakpoint `1120px`, но остаётся component-local.
- Фотографии tutorial/news cards сохраняют повторяющуюся область примерно **4:3** и используют `object-fit: cover`; это видно в обоих reference screenshots.
- Фотографии cities/principles cards сохраняют свой повторяющийся более широкий landscape ratio (визуально около **1.28:1**) и используют `object-fit: cover`. Не округлять этот тип до 4:3, если intrinsic asset ratio даёт более точное значение.
- Изображения vehicles располагаются целиком на нейтральном фоне и используют `object-fit: contain`; обрезать scooter/bike нельзя.
- Cities, principles и news допускают horizontal track overflow внутри собственного carousel viewport. Section/container должен обрезать track без page-level horizontal overflow; preview следующей карточки является намеренным.
- Download-app illustration сохраняет композиционные пропорции и не растягивает родительский layout; её внутренние перекрытия локальны. На narrow illustration и copy переставляются вертикально без замены asset.
- Для media, не относящихся к перечисленным повторяющимся типам, aspect ratio и object positioning определяются компонентом; нового общесайтового правила не выдумывать.

### Allowed Overlay Patterns

- Header поверх hero media: позиционирование допускается только относительно локального hero/header wrapper; оно не должно привязываться к координатам всей страницы.
- Hero heading и action controls поверх hero image: локальный overlay/grid layer внутри hero media wrapper.
- Перекрывающиеся device/map/panel layers в download-app illustration: `position: absolute` допускается только внутри локального illustration wrapper с собственным containing block.
- Локальные icons или controls поверх media/card допускаются относительно корня соответствующего media/card. Carousel track, card grid, footer columns и section spacing через absolute positioning строить нельзя.

### Visual Verification Widths

Проверять viewport widths в возрастающем порядке:

**320, 550, 768, 1120, 1121, 1232, 1280, 1344, 1440 px.**

- `320` — минимальная поддерживаемая ширина.
- `550` и `1440` — точные reference screenshots.
- `768` и `1232` — промежуточные точки `narrow` и `wide` ranges.
- `1120` и `1121` — обе стороны единственного breakpoint.
- `1280` — отдельная wide-проверка на ширине, численно равной content maximum; container на этом viewport всё ещё учитывает gutters.
- `1344` — onset 1280 px container cap при 32 px wide gutters.

## Decision Summary

- `page`: `home`.
- `reference_viewports`: `mobile-550` = 550 × 7615; `desktop-1440` = 1440 × 6525.
- `responsive_modes`: `narrow`, `wide`.
- `breakpoint`: `site-narrow` = **1120 px**; narrow query только `@media (max-width: 1120px)`; 1120 narrow, 1121 wide.
- `supported_min_viewport`: **320 px**.
- `site_content_max`: **1280 px**; container cap достигается при viewport **1344 px**.
- `wide_gutter`: **32 px**; `narrow_gutter`: **24 px**.
- `container_alignment`: centered; full-bleed backgrounds/media остаются viewport-wide.
- `wide_layout`: full header nav, multi-column grids, carousel с примерно тремя видимыми cards, side-by-side download block, columnar footer.
- `narrow_layout`: hamburger nav, single-column grids, carousel с одной card + preview, stacked download block, accordion/stack footer.
- `carousel_overflow`: разрешён только внутри локального carousel viewport; page-level horizontal overflow запрещён.
- `media`: hero = `cover`; photographic card media = `cover` с установленным component ratio; vehicle media = `contain`; download illustration overlays локальны.
- `allowed_overlays`: hero/header layers, hero copy/controls, download-app illustration layers, локальные media controls; обычная page/grid layout через absolute positioning запрещена.
- `verification_widths`: **320, 550, 768, 1120, 1121, 1232, 1280, 1344, 1440 px**.
