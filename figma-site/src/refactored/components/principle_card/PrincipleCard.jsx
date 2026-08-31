import './PrincipleCard.css';

const VARIANT_DEFAULTS = {
  default: {
    title: 'Safety',
    image: '/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg',
  },
};

const FALLBACK_VARIANT = 'default';

function PrincipleCard({
  variant = FALLBACK_VARIANT,
  className = '',
  title,
  image,
  imageAlt = '',
  href,
  onClick,
  ...restProps
}) {
  const resolvedVariant = Object.prototype.hasOwnProperty.call(
    VARIANT_DEFAULTS,
    variant,
  )
    ? variant
    : FALLBACK_VARIANT;
  const defaults = VARIANT_DEFAULTS[resolvedVariant];
  const resolvedTitle = title ?? defaults.title;
  const resolvedImage = image ?? defaults.image;
  const rootClassName = [
    'principle-card',
    `principle-card--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isLink = typeof href === 'string' && href.length > 0;
  const Wrapper = isLink ? 'a' : 'div';
  const wrapperProps = isLink ? { href, onClick } : {};

  return (
    <article {...restProps} className={rootClassName}>
      <Wrapper {...wrapperProps} className="principle-card__link">
        <span className="principle-card__media">
          <img
            className="principle-card__image"
            src={resolvedImage}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="principle-card__caption">{resolvedTitle}</span>
      </Wrapper>
    </article>
  );
}

export default PrincipleCard;
