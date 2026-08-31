import "./LanguageSelector.css";

export default function LanguageSelector({
  variant = "default",
  className = "",
  language = "EN",
  languageName = "English",
  desktopFlagSrc = "/generated-pages/page-1/generated-assets/vectors/2001_3206.svg",
  mobileFlagSrc = "/generated-pages/page-1/generated-assets/vectors/2001_3435.svg",
  onClick,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const rootClassName = ["language-selector", `language-selector--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={rootClassName}
      type="button"
      aria-label={`Change language, current language ${languageName}`}
      onClick={onClick}
    >
      <picture className="language-selector__flag" aria-hidden="true">
        <source media="(max-width: 1120px)" srcSet={mobileFlagSrc} />
        <img src={desktopFlagSrc} alt="" />
      </picture>
      <span className="language-selector__code">{language}</span>
    </button>
  );
}
