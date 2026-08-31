import "./HomeHero.css";
import { useId } from "react";
import Button from "../../../../components/button/Button.jsx";

const VARIANTS = ["default"];

const DEFAULT_IMAGE_SRC =
  "/generated-pages/page-1/generated-assets/named/n/b50d74e06bed.jpg";
const DEFAULT_IMAGE_MOBILE_SRC =
  "/generated-pages/page-1/generated-assets/named/n/59bc8a0270ac.jpg";

export default function HomeHero({
  variant = "default",
  className = "",
  heading = "Ride Green",
  imageSrc = DEFAULT_IMAGE_SRC,
  imageMobileSrc = DEFAULT_IMAGE_MOBILE_SRC,
  imageAlt = "",
  locationActionLabel = "Our cities",
  locationActionHref,
  onLocationAction,
  downloadActionLabel = "Download the App",
  downloadActionHref,
  onDownloadAction,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = ["home-hero", `home-hero--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");
  const desktopImage = imageSrc || imageMobileSrc;
  const mobileImage = imageMobileSrc || imageSrc;

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="home-hero__media">
        <picture className="home-hero__picture">
          <source media="(max-width: 1120px)" srcSet={mobileImage} />
          <img className="home-hero__image" src={desktopImage} alt={imageAlt} />
        </picture>

        <div className="home-hero__layer">
          <div className="home-hero__content">
            <h1 className="home-hero__heading" id={headingId}>
              {heading}
            </h1>

            <div className="home-hero__actions">
              <Button
                variant="outline"
                href={locationActionHref}
                onClick={onLocationAction}
              >
                {locationActionLabel}
              </Button>
              <Button
                variant="primary"
                href={downloadActionHref}
                onClick={onDownloadAction}
              >
                {downloadActionLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
