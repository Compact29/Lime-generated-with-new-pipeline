import "./CityCard.css";

const VARIANTS = ["default"];

const DEFAULT_IMAGE = "/generated-pages/page-1/generated-assets/named/n/c83391b775a3.jpg";
const DEFAULT_NARROW_IMAGE = "/generated-pages/page-1/generated-assets/named/n/234ebe19073c.jpg";
const DEFAULT_ARROW = "/generated-pages/page-1/generated-assets/vectors/2001_3026.svg";
const DEFAULT_NARROW_ARROW = "/generated-pages/page-1/generated-assets/vectors/2001_3259.svg";

function CityCard({
  variant = "default",
  className = "",
  name = "New York",
  href,
  target,
  rel,
  imageSrc = DEFAULT_IMAGE,
  narrowImageSrc = DEFAULT_NARROW_IMAGE,
  imageAlt,
  arrowSrc = DEFAULT_ARROW,
  narrowArrowSrc = DEFAULT_NARROW_ARROW,
}) {
  const activeVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = ["city-card", `city-card--${activeVariant}`, className]
    .filter(Boolean)
    .join(" ");

  const wideImage = imageSrc || narrowImageSrc;
  const narrowImage = narrowImageSrc || imageSrc;
  const wideArrow = arrowSrc || narrowArrowSrc;
  const narrowArrow = narrowArrowSrc || arrowSrc;

  const label = (
    <>
      <span className="city-card__name">{name}</span>
      {wideArrow ? (
        <picture className="city-card__arrow">
          <source media="(max-width: 1120px)" srcSet={narrowArrow} />
          <img src={wideArrow} alt="" />
        </picture>
      ) : null}
    </>
  );

  return (
    <figure className={rootClassName}>
      {wideImage ? (
        <picture className="city-card__media">
          <source media="(max-width: 1120px)" srcSet={narrowImage} />
          <img className="city-card__image" src={wideImage} alt={imageAlt ?? name} />
        </picture>
      ) : null}
      <figcaption className="city-card__caption">
        {href ? (
          <a className="city-card__link" href={href} target={target} rel={rel}>
            {label}
          </a>
        ) : (
          <span className="city-card__link">{label}</span>
        )}
      </figcaption>
    </figure>
  );
}

export default CityCard;
