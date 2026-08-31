import './NewsCard.css';

const VARIANT_DEFAULTS = {
  default: {
    category: 'Sustainability',
    title: 'With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues',
    author: 'Andrew Savage',
    date: 'January 16, 2024',
    image: '/generated-pages/page-1/generated-assets/named/n/96837405673f.png',
    narrowImage: '/generated-pages/page-1/generated-assets/named/n/ece96e023e94.jpg',
  },
};

const FALLBACK_VARIANT = 'default';

function buildMeta(author, date) {
  const parts = [];
  if (author) {
    parts.push(`by ${author}`);
  }
  if (date) {
    parts.push(date);
  }
  return parts.join(' | ');
}

function NewsCard({
  variant = FALLBACK_VARIANT,
  className = '',
  category,
  categoryHref,
  title,
  author,
  date,
  meta,
  image,
  narrowImage,
  imageAlt = '',
  href,
  target,
  rel,
}) {
  const resolvedVariant = Object.prototype.hasOwnProperty.call(VARIANT_DEFAULTS, variant)
    ? variant
    : FALLBACK_VARIANT;
  const defaults = VARIANT_DEFAULTS[resolvedVariant];

  const resolvedCategory = category === undefined ? defaults.category : category;
  const resolvedTitle = title === undefined ? defaults.title : title;
  const resolvedAuthor = author === undefined ? defaults.author : author;
  const resolvedDate = date === undefined ? defaults.date : date;
  const resolvedMeta = meta === undefined ? buildMeta(resolvedAuthor, resolvedDate) : meta;

  const resolvedImage = image === undefined ? defaults.image : image;
  const resolvedNarrowImage = narrowImage === undefined ? defaults.narrowImage : narrowImage;
  const wideSource = resolvedImage || resolvedNarrowImage;
  const narrowSource = resolvedNarrowImage || resolvedImage;

  const rootClassName = ['news-card', `news-card--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(' ');

  const isLink = typeof href === 'string' && href.length > 0;

  const media = wideSource ? (
    <picture className="news-card__media">
      {narrowSource && narrowSource !== wideSource ? (
        <source media="(max-width: 1120px)" srcSet={narrowSource} />
      ) : null}
      <img
        className="news-card__image"
        src={wideSource}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  ) : null;

  return (
    <article className={rootClassName}>
      {media && isLink ? (
        <a
          className="news-card__media-link"
          href={href}
          target={target}
          rel={rel}
          tabIndex={-1}
          aria-hidden="true"
        >
          {media}
        </a>
      ) : (
        media
      )}

      <div className="news-card__body">
        {resolvedCategory ? (
          <p className="news-card__category">
            {categoryHref ? (
              <a className="news-card__category-link" href={categoryHref}>
                {resolvedCategory}
              </a>
            ) : (
              resolvedCategory
            )}
          </p>
        ) : null}

        {resolvedTitle ? (
          <h3 className="news-card__title">
            {isLink ? (
              <a className="news-card__title-link" href={href} target={target} rel={rel}>
                {resolvedTitle}
              </a>
            ) : (
              resolvedTitle
            )}
          </h3>
        ) : null}

        {resolvedMeta ? <p className="news-card__meta">{resolvedMeta}</p> : null}
      </div>
    </article>
  );
}

export default NewsCard;
