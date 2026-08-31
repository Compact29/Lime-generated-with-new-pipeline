import "./InstructionStepCard.css";

const VARIANTS = ["default"];

const DEFAULT_IMAGE =
  "/generated-pages/page-1/generated-assets/named/n/f9d31b1704bb.png";
const DEFAULT_NARROW_IMAGE =
  "/generated-pages/page-1/generated-assets/named/n/4da44716b06d.png";

function InstructionStepCard({
  variant = "default",
  className = "",
  label = "Locate",
  description = "Download the Lime app to find a vehicle.",
  imageSrc = DEFAULT_IMAGE,
  narrowImageSrc = DEFAULT_NARROW_IMAGE,
  imageAlt = "",
}) {
  const activeVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "instruction-step-card",
    `instruction-step-card--${activeVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const wideImage = imageSrc || narrowImageSrc;
  const narrowImage = narrowImageSrc || imageSrc;

  return (
    <article className={rootClassName}>
      {wideImage ? (
        <picture className="instruction-step-card__media">
          {narrowImage && narrowImage !== wideImage ? (
            <source media="(max-width: 1120px)" srcSet={narrowImage} />
          ) : null}
          <img
            className="instruction-step-card__image"
            src={wideImage}
            alt={imageAlt}
          />
        </picture>
      ) : null}
      <div className="instruction-step-card__body">
        {label ? (
          <h3 className="instruction-step-card__label">{label}</h3>
        ) : null}
        {description ? (
          <p className="instruction-step-card__description">{description}</p>
        ) : null}
      </div>
    </article>
  );
}

export default InstructionStepCard;
