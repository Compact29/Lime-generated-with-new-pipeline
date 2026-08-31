import "./AppStoreBadge.css";

const BADGES = {
  apple: {
    label: "Download on the App Store",
  },
  google: {
    label: "Get it on Google Play",
  },
};

function BadgeArtwork({ label }) {
  return (
    <picture className="app-store-badge__picture">
      <source
        media="(max-width: 1120px)"
        srcSet="/generated-pages/page-1/generated-assets/vectors/2001_3327.svg"
      />
      <img
        className="app-store-badge__artwork"
        src="/generated-pages/page-1/generated-assets/vectors/2001_3112.svg"
        alt={label}
      />
    </picture>
  );
}

function AppStoreBadge({
  variant = "apple",
  className = "",
  href,
  label,
}) {
  const activeVariant = BADGES[variant] ? variant : "apple";
  const accessibleLabel = label || BADGES[activeVariant].label;
  const rootClassName = [
    "app-store-badge",
    `app-store-badge--${activeVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={rootClassName} href={href} aria-label={accessibleLabel}>
        <BadgeArtwork label="" />
      </a>
    );
  }

  return (
    <span className={rootClassName}>
      <BadgeArtwork label={accessibleLabel} />
    </span>
  );
}

export default AppStoreBadge;
