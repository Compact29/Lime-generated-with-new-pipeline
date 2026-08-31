import { useId, useState } from "react";
import "./SiteHeader.css";
import BrandLogo from "../brand_logo/BrandLogo.jsx";
import LanguageSelector from "../language_selector/LanguageSelector.jsx";
import SiteNavigation from "../site_navigation/SiteNavigation.jsx";
import Button from "../button/Button.jsx";
import MenuToggle from "../menu_toggle/MenuToggle.jsx";

const VARIANTS = ["default"];

export default function SiteHeader({
  variant = "default",
  className = "",
  logoHref,
  language,
  languageName,
  onLanguageChange,
  navigationItems,
  navigationLabel,
  onNavigate,
  primaryActionLabel = "Download App",
  primaryActionHref,
  onPrimaryAction,
}) {
  const resolvedVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0];
  const navigationId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const rootClassName = [
    "site-header",
    `site-header--${resolvedVariant}`,
    menuOpen ? "site-header--menu-open" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
  };

  // Only forward a link handler when the consumer supplied one: without it the
  // navigation keeps its non-interactive items instead of faking navigation.
  const handleNavigate = onNavigate
    ? (item, event) => {
        setMenuOpen(false);
        onNavigate(item, event);
      }
    : undefined;

  return (
    <header className={rootClassName}>
      <div className="site-header__inner">
        <div className="site-header__bar">
          <BrandLogo
            variant="inverse"
            className="site-header__logo"
            href={logoHref}
          />
          <LanguageSelector
            variant="default"
            className="site-header__locale"
            language={language}
            languageName={languageName}
            onClick={onLanguageChange}
          />
          <MenuToggle
            variant="default"
            className="site-header__menu-toggle"
            expanded={menuOpen}
            controls={navigationId}
            onClick={handleMenuToggle}
          />
        </div>

        <SiteNavigation
          variant="default"
          className="site-header__navigation"
          id={navigationId}
          label={navigationLabel}
          items={navigationItems}
          open={menuOpen}
          onLinkClick={handleNavigate}
        />

        <div className="site-header__actions">
          <Button
            variant="primary"
            href={primaryActionHref}
            onClick={onPrimaryAction}
          >
            {primaryActionLabel}
          </Button>
        </div>
      </div>
    </header>
  );
}
