import "./SocialLink.css";

export default function SocialLink({
  variant = "default",
  className = "",
  href,
  label = "Twitter",
  desktopIconSrc = "/generated-pages/page-1/generated-assets/named/n/7f527cbb8f4e.png",
  mobileIconSrc = "/generated-pages/page-1/generated-assets/named/n/34b8d9a8ffc5.png",
  target,
  rel,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const rootClassName = ["social-link", `social-link--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <picture className="social-link__icon">
      <source media="(max-width: 1120px)" srcSet={mobileIconSrc || desktopIconSrc} />
      <img src={desktopIconSrc || mobileIconSrc} alt="" />
    </picture>
  );

  if (!href) {
    return (
      <span className={rootClassName} role="img" aria-label={label}>
        {content}
      </span>
    );
  }

  return (
    <a className={rootClassName} href={href} aria-label={label} target={target} rel={rel}>
      {content}
    </a>
  );
}
