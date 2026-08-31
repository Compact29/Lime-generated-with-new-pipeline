import "./PrinciplesSection.css";
import { useId, useState } from "react";
import PrincipleCard from "../../../../components/principle_card/PrincipleCard.jsx";
import CarouselPagination from "../../../../components/carousel_pagination/CarouselPagination.jsx";

const VARIANTS = ["default"];

const DEFAULT_PRINCIPLES = [
  {
    id: "safety",
    title: "Safety",
    image: "/generated-pages/page-1/generated-assets/named/n/09e138019cc2.jpg",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    image: "/generated-pages/page-1/generated-assets/named/n/35369c9da425.png",
  },
  {
    id: "community",
    title: "Community",
    image: "/generated-pages/page-1/generated-assets/named/n/1bb15f2e697e.png",
  },
];

export default function PrinciplesSection({
  variant = "default",
  className = "",
  eyebrow = "Why Lime",
  heading = "Our Core Principles",
  principles = DEFAULT_PRINCIPLES,
  onPrincipleSelect,
  onSlideChange,
}) {
  const headingId = useId();
  const [activeSlide, setActiveSlide] = useState(0);
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "principles-section",
    `principles-section--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const items = Array.isArray(principles) ? principles : [];
  // Pagination exposes more dots than there are slides, so the track offset is
  // clamped to the last existing card.
  const trackSlide = items.length > 0 ? Math.min(activeSlide, items.length - 1) : 0;

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="principles-section__container">
        <div className="principles-section__header">
          {eyebrow ? (
            <p className="principles-section__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="principles-section__heading" id={headingId}>
            {heading}
          </h2>
        </div>

        {/* Track intentionally continues past the container line; the section
            clips it so the next card stays a cropped preview. */}
        <ul className="principles-section__track" data-active-slide={trackSlide}>
          {items.map((principle, index) => (
            <li className="principles-section__item" key={principle.id ?? index}>
              <PrincipleCard
                variant="default"
                title={principle.title}
                image={principle.image}
                imageAlt={principle.imageAlt}
                href={principle.href}
                onClick={
                  onPrincipleSelect
                    ? (event) => onPrincipleSelect(principle, event)
                    : undefined
                }
              />
            </li>
          ))}
        </ul>

        <div className="principles-section__pagination">
          <CarouselPagination
            variant="compact"
            activeIndex={activeSlide}
            onChange={handleSlideChange}
          />
        </div>
      </div>
    </section>
  );
}
