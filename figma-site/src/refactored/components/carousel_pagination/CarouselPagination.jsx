import "./CarouselPagination.css";

const VARIANT_COUNTS = {
  extended: 11,
  compact: 4,
};

export default function CarouselPagination({
  variant = "extended",
  className = "",
  count,
  activeIndex = 0,
  onChange,
  label = "Carousel pagination",
}) {
  const resolvedVariant = VARIANT_COUNTS[variant] ? variant : "extended";
  const resolvedCount = Math.max(1, Number.isFinite(count) ? Math.floor(count) : VARIANT_COUNTS[resolvedVariant]);
  const resolvedActiveIndex = Math.min(Math.max(0, activeIndex), resolvedCount - 1);
  const rootClassName = ["carousel-pagination", `carousel-pagination--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} role="group" aria-label={label}>
      {Array.from({ length: resolvedCount }, (_, index) => (
        <button
          className={`carousel-pagination__dot${index === resolvedActiveIndex ? " carousel-pagination__dot--active" : ""}`}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === resolvedActiveIndex ? "true" : undefined}
          onClick={() => onChange?.(index)}
          key={index}
        />
      ))}
    </div>
  );
}
