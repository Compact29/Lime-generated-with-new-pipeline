import "./SiteFooter.css";
import BrandLogo from "../brand_logo/BrandLogo.jsx";
import FooterNavigation from "../footer_navigation/FooterNavigation.jsx";

const DEFAULT_COPYRIGHT = "2024 Lime";

const DEFAULT_LEGAL_LINKS = [
  { id: "user-agreement", label: "User Agreement" },
  { id: "privacy-notice", label: "Privacy Notice" },
  { id: "data-request", label: "Data Request" },
  { id: "research", label: "Research" },
  { id: "legal-bases", label: "Legal Bases" },
  { id: "my-information", label: "My Information" },
  { id: "imprint", label: "Imprint" },
];

function entryKey(item, index) {
  if (item && typeof item.id === "string" && item.id.length > 0) {
    return item.id;
  }
  if (item && typeof item.label === "string" && item.label.length > 0) {
    return item.label;
  }
  return index;
}

function renderLegalLink(item, onLegalLinkClick) {
  const label = item && item.label ? item.label : "";
  const href =
    item && typeof item.href === "string" && item.href.length > 0
      ? item.href
      : undefined;
  const handleClick = onLegalLinkClick
    ? (event) => onLegalLinkClick(item, event)
    : undefined;

  if (href) {
    return (
      <a className="site-footer__legal-link" href={href} onClick={handleClick}>
        {label}
      </a>
    );
  }

  if (handleClick) {
    return (
      <button
        className="site-footer__legal-link"
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }

  return <span className="site-footer__legal-link">{label}</span>;
}

export default function SiteFooter({
  variant = "default",
  className = "",
  copyright = DEFAULT_COPYRIGHT,
  legalLinks = DEFAULT_LEGAL_LINKS,
  logoHref,
  onLegalLinkClick,
  onNavigationLinkClick,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const resolvedLegalLinks = Array.isArray(legalLinks)
    ? legalLinks
    : DEFAULT_LEGAL_LINKS;

  const rootClassName = ["site-footer", `site-footer--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={rootClassName}>
      <div className="site-footer__container">
        <div className="site-footer__top">
          <BrandLogo
            variant="brand"
            className="site-footer__logo"
            href={logoHref}
          />
          <FooterNavigation
            variant="default"
            className="site-footer__navigation"
            onLinkClick={onNavigationLinkClick}
          />
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">{copyright}</p>

          <ul className="site-footer__legal">
            {resolvedLegalLinks.map((item, itemIndex) => (
              <li
                className="site-footer__legal-item"
                key={entryKey(item, itemIndex)}
              >
                {renderLegalLink(item, onLegalLinkClick)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
