import "./CitiesSection.css";
import { useId } from "react";
import CityCard from "../../../../components/city_card/CityCard.jsx";
import CarouselPagination from "../../../../components/carousel_pagination/CarouselPagination.jsx";

const VARIANTS = ["default"];

/* Wide and narrow artwork comes from the two reference presentations of the
   same card. Cities without a dedicated narrow asset reuse their wide asset. */
const DEFAULT_CITIES = [
  {
    id: "new-york",
    name: "New York",
    image: "/generated-pages/page-1/generated-assets/named/n/c83391b775a3.jpg",
    imageNarrow: "/generated-pages/page-1/generated-assets/named/n/234ebe19073c.jpg",
    arrow: "/generated-pages/page-1/generated-assets/vectors/2001_3026.svg",
    arrowNarrow: "/generated-pages/page-1/generated-assets/vectors/2001_3259.svg",
  },
  {
    id: "san-francisco",
    name: "San Francisco",
    image: "/generated-pages/page-1/generated-assets/named/n/0214610f052b.jpg",
    imageNarrow: "/generated-pages/page-1/generated-assets/named/n/cc7f017746e8.jpg",
    arrow: "/generated-pages/page-1/generated-assets/vectors/2001_3031.svg",
    arrowNarrow: null,
  },
  {
    id: "washington-dc",
    name: "Washington, DC",
    image: "/generated-pages/page-1/generated-assets/named/n/56a6364e44ba.jpg",
    imageNarrow: null,
    arrow: "/generated-pages/page-1/generated-assets/vectors/2001_3036.svg",
    arrowNarrow: null,
  },
];

export default function CitiesSection({
  variant = "default",
  className = "",
  eyebrow = "Locations",
  heading = "Our U.S. Cities",
  cities = DEFAULT_CITIES,
  activeIndex = 0,
  onPageSelect,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "cities-section",
    `cities-section--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const items = Array.isArray(cities) ? cities : [];

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="cities-section__container">
        <div className="cities-section__header">
          {eyebrow ? (
            <p className="cities-section__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="cities-section__heading" id={headingId}>
            {heading}
          </h2>
        </div>
      </div>

      {/* Carousel viewport: clips the track that intentionally continues past
          the right edge with a cropped preview of the next city. */}
      <div className="cities-section__carousel">
        <ul className="cities-section__track">
          {items.map((city, index) => (
            <li className="cities-section__slide" key={city.id ?? index}>
              <CityCard
                variant="default"
                name={city.name}
                imageSrc={city.image}
                narrowImageSrc={city.imageNarrow}
                imageAlt={city.imageAlt}
                arrowSrc={city.arrow}
                narrowArrowSrc={city.arrowNarrow}
                href={city.href}
                target={city.target}
                rel={city.rel}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="cities-section__container">
        <div className="cities-section__pagination">
          <CarouselPagination
            variant="extended"
            activeIndex={activeIndex}
            onChange={onPageSelect}
          />
        </div>
      </div>
    </section>
  );
}
