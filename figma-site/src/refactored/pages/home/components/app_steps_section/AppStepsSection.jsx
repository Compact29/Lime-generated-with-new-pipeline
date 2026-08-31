import { useId } from "react";
import InstructionStepCard from "../../../../components/instruction_step_card/InstructionStepCard.jsx";
import "./AppStepsSection.css";

const VARIANTS = ["default"];

const ASSET_BASE = "/generated-pages/page-1/generated-assets/named/n";

const DEFAULT_STEPS = [
  {
    id: "locate",
    label: "Locate",
    description: "Download the Lime app to find a vehicle.",
    imageSrc: `${ASSET_BASE}/f9d31b1704bb.png`,
    narrowImageSrc: `${ASSET_BASE}/4da44716b06d.png`,
    imageAlt: "",
  },
  {
    id: "scan",
    label: "Scan",
    description:
      "Scan the QR code on the vehicle to unlock. Learn how to ride safely in the app.",
    imageSrc: `${ASSET_BASE}/a7dae4a9cc82.png`,
    narrowImageSrc: `${ASSET_BASE}/cfa3ee35015d.png`,
    imageAlt: "",
  },
  {
    id: "ride",
    label: "Ride",
    description:
      "Follow all traffic rules, stick to the streets and bike lanes where legally permitted.",
    imageSrc: `${ASSET_BASE}/3fd1a3e2fee7.png`,
    narrowImageSrc: `${ASSET_BASE}/fe266f370283.png`,
    imageAlt: "",
  },
];

export default function AppStepsSection({
  variant = "default",
  className = "",
  eyebrow = "The App",
  heading = "How to Lime",
  steps = DEFAULT_STEPS,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "app-steps-section",
    `app-steps-section--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const resolvedSteps = Array.isArray(steps) ? steps : DEFAULT_STEPS;

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="app-steps-section__container">
        <div className="app-steps-section__header">
          {eyebrow ? (
            <p className="app-steps-section__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="app-steps-section__heading" id={headingId}>
            {heading}
          </h2>
        </div>

        <ul className="app-steps-section__list">
          {resolvedSteps.map((step, index) => (
            <li className="app-steps-section__item" key={step.id ?? index}>
              <InstructionStepCard
                variant="default"
                label={step.label}
                description={step.description}
                imageSrc={step.imageSrc}
                narrowImageSrc={step.narrowImageSrc}
                imageAlt={step.imageAlt ?? ""}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
