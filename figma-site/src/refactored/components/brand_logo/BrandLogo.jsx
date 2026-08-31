import './BrandLogo.css';

const LOGO_ASSETS = {
  inverse: {
    desktop: '/generated-pages/page-1/generated-assets/vectors/2001_3197.svg',
    narrow: '/generated-pages/page-1/generated-assets/vectors/2001_3426.svg',
  },
  brand: {
    desktop: '/generated-pages/page-1/generated-assets/vectors/2001_3153.svg',
    narrow: '/generated-pages/page-1/generated-assets/vectors/2001_3368.svg',
  },
};

function BrandLogo({
  variant = 'inverse',
  className = '',
  href = '/',
  ariaLabel = 'Lime home',
}) {
  const resolvedVariant = LOGO_ASSETS[variant] ? variant : 'inverse';
  const assets = LOGO_ASSETS[resolvedVariant];
  const rootClassName = [
    'brand-logo',
    `brand-logo--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={rootClassName} href={href} aria-label={ariaLabel}>
      <picture className="brand-logo__picture">
        <source media="(max-width: 1120px)" srcSet={assets.narrow} />
        <img
          className="brand-logo__image"
          src={assets.desktop}
          alt=""
          aria-hidden="true"
        />
      </picture>
    </a>
  );
}

export default BrandLogo;
