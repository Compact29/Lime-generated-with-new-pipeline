import "./SiteNavigation.css";

const DEFAULT_ITEMS = [
  { id: "about-us", label: "About Us" },
  { id: "why-lime", label: "Why Lime" },
  { id: "vehicles", label: "Vehicles" },
  { id: "locations", label: "Locations" },
  { id: "advertise", label: "Advertise" },
  { id: "blog", label: "Blog" },
  { id: "help", label: "Help" },
];

export default function SiteNavigation({
  variant = "default",
  className = "",
  id = "site-navigation",
  label = "Primary",
  items = DEFAULT_ITEMS,
  open = false,
  onLinkClick,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const resolvedItems =
    Array.isArray(items) && items.length > 0 ? items : DEFAULT_ITEMS;
  const rootClassName = [
    "site-navigation",
    `site-navigation--${resolvedVariant}`,
    open ? "site-navigation--open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id={id} className={rootClassName} aria-label={label}>
      <ul className="site-navigation__list">
        {resolvedItems.map((item, index) => {
          const itemLabel = item.label ?? "";
          const href =
            typeof item.href === "string" && item.href.length > 0
              ? item.href
              : undefined;
          const handleClick = onLinkClick
            ? (event) => onLinkClick(item, event)
            : undefined;
          const key = item.id ?? itemLabel ?? index;

          return (
            <li className="site-navigation__item" key={key}>
              {href ? (
                <a
                  className="site-navigation__link"
                  href={href}
                  onClick={handleClick}
                >
                  {itemLabel}
                </a>
              ) : handleClick ? (
                <button
                  className="site-navigation__link"
                  type="button"
                  onClick={handleClick}
                >
                  {itemLabel}
                </button>
              ) : (
                <span className="site-navigation__link">{itemLabel}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
