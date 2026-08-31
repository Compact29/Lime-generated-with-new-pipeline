import "./AppDownloadBanner.css";
import { useId } from "react";
import AppStoreBadge from "../app_store_badge/AppStoreBadge.jsx";

const VARIANTS = ["default"];

const DEFAULT_STORE_BADGES = [
  { variant: "apple", label: "Download on the App Store" },
  { variant: "google", label: "Get it on Google Play" },
];

const DEFAULT_ILLUSTRATION_SRC =
  "/generated-pages/page-1/generated-assets/named/n/b4a3b4a25617.png";
const DEFAULT_ILLUSTRATION_MOBILE_SRC =
  "/generated-pages/page-1/generated-assets/named/n/be316cfdae1f.png";

export default function AppDownloadBanner({
  variant = "default",
  className = "",
  heading = "Download the App",
  illustrationSrc = DEFAULT_ILLUSTRATION_SRC,
  illustrationMobileSrc = DEFAULT_ILLUSTRATION_MOBILE_SRC,
  illustrationAlt = "",
  storeBadges = DEFAULT_STORE_BADGES,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "app-download-banner",
    `app-download-banner--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const badges = Array.isArray(storeBadges) ? storeBadges : DEFAULT_STORE_BADGES;
  const desktopIllustration = illustrationSrc || illustrationMobileSrc;
  const mobileIllustration = illustrationMobileSrc || illustrationSrc;

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="app-download-banner__inner">
        <figure className="app-download-banner__illustration">
          <picture className="app-download-banner__picture">
            <source media="(max-width: 1120px)" srcSet={mobileIllustration} />
            <img
              className="app-download-banner__image"
              src={desktopIllustration}
              alt={illustrationAlt}
            />
          </picture>
        </figure>

        <div className="app-download-banner__content">
          <h2 className="app-download-banner__heading" id={headingId}>
            {heading}
          </h2>

          <ul className="app-download-banner__badges">
            {badges.map((badge, index) => (
              <li className="app-download-banner__badge" key={badge?.variant || index}>
                <AppStoreBadge
                  variant={badge?.variant}
                  href={badge?.href}
                  label={badge?.label}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
