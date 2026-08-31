import './VehicleCard.css';

const VARIANT_DEFAULTS = {
  default: {
    name: 'E-Scooter',
    image: '/generated-pages/page-1/generated-assets/named/n/1661d33bb85f.png',
    imageNarrow: '/generated-pages/page-1/generated-assets/vectors/2001_3230.svg',
  },
};

const FALLBACK_VARIANT = 'default';

export default function VehicleCard({
  variant = FALLBACK_VARIANT,
  className = '',
  name,
  image,
  imageNarrow,
  imageAlt,
  href,
  onClick,
  ...restProps
}) {
  const resolvedVariant = Object.hasOwn(VARIANT_DEFAULTS, variant)
    ? variant
    : FALLBACK_VARIANT;
  const defaults = VARIANT_DEFAULTS[resolvedVariant];

  const vehicleName = name ?? defaults.name;
  const wideSource = image ?? defaults.image;
  const narrowSource = imageNarrow ?? image ?? defaults.imageNarrow;
  const alternativeText = imageAlt ?? vehicleName;

  let RootElement = 'article';
  let rootProps = {};

  if (typeof href === 'string' && href.length > 0) {
    RootElement = 'a';
    rootProps = { href, onClick };
  } else if (typeof onClick === 'function') {
    RootElement = 'button';
    rootProps = { type: 'button', onClick };
  }

  const rootClassName = [
    'vehicle-card',
    `vehicle-card--${resolvedVariant}`,
    RootElement === 'article' ? '' : 'vehicle-card--interactive',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <RootElement {...restProps} {...rootProps} className={rootClassName}>
      <span className="vehicle-card__media">
        <picture className="vehicle-card__picture">
          <source media="(max-width: 1120px)" srcSet={narrowSource} />
          <img
            className="vehicle-card__image"
            src={wideSource}
            alt={alternativeText}
            loading="lazy"
          />
        </picture>
      </span>
      <h3 className="vehicle-card__name">{vehicleName}</h3>
    </RootElement>
  );
}
