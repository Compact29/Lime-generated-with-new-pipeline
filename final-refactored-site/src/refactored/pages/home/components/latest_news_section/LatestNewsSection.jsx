import { useId } from "react";
import NewsCard from "../../../../components/news_card/NewsCard.jsx";
import Button from "../../../../components/button/Button.jsx";
import "./LatestNewsSection.css";

const VARIANTS = ["default"];

const ASSET_BASE = "/generated-pages/page-1/generated-assets/vectors";

const DEFAULT_ARTICLES = [
  {
    id: "net-zero-target",
    category: "Sustainability",
    title:
      "With Our Industry-Leading Net-Zero Target Validated Our Hard Work Continues",
    author: "Andrew Savage",
    date: "January 16, 2024",
    image: `${ASSET_BASE}/2001_3080.svg`,
    narrowImage: `${ASSET_BASE}/2001_3303.svg`,
    imageAlt: "",
  },
  {
    id: "hero-of-the-month",
    category: "",
    title: "Hero of the Month: Respire",
    author: "",
    date: "January 10, 2024",
    image: `${ASSET_BASE}/2001_3090.svg`,
    narrowImage: "",
    imageAlt: "",
  },
  {
    id: "ride-replay-2023",
    category: "",
    title: "Lime Recaps 2023 With Its Annual \u200b‘Ride Replay’",
    author: "",
    date: "December 13, 2023",
    image: `${ASSET_BASE}/2001_3098.svg`,
    narrowImage: "",
    imageAlt: "",
  },
];

export default function LatestNewsSection({
  variant = "default",
  className = "",
  eyebrow = "Lime Times Blog",
  heading = "Our Latest News",
  articles = DEFAULT_ARTICLES,
  moreLabel = "View More",
  moreHref,
  onMoreClick,
}) {
  const headingId = useId();
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const rootClassName = [
    "latest-news-section",
    `latest-news-section--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const resolvedArticles = Array.isArray(articles) ? articles : DEFAULT_ARTICLES;

  return (
    <section className={rootClassName} aria-labelledby={headingId}>
      <div className="latest-news-section__container">
        <div className="latest-news-section__header">
          {eyebrow ? (
            <p className="latest-news-section__eyebrow">{eyebrow}</p>
          ) : null}
          <h2 className="latest-news-section__heading" id={headingId}>
            {heading}
          </h2>
        </div>
      </div>

      {/* Full-bleed carousel viewport: the track starts at the container line
          and is clipped here, so the page never scrolls horizontally. */}
      <div
        className="latest-news-section__viewport"
        role="group"
        aria-labelledby={headingId}
        tabIndex={0}
      >
        <ul className="latest-news-section__track">
          {resolvedArticles.map((article, index) => (
            <li
              className="latest-news-section__item"
              key={article.id ?? index}
            >
              <NewsCard
                variant="default"
                category={article.category ?? ""}
                title={article.title}
                author={article.author ?? ""}
                date={article.date ?? ""}
                image={article.image}
                narrowImage={article.narrowImage ?? ""}
                imageAlt={article.imageAlt ?? ""}
                href={article.href}
              />
            </li>
          ))}
        </ul>
      </div>

      {moreLabel ? (
        <div className="latest-news-section__container latest-news-section__actions">
          <Button
            variant="primary"
            label={moreLabel}
            href={moreHref}
            onClick={onMoreClick}
          />
        </div>
      ) : null}
    </section>
  );
}
