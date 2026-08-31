import "./MenuToggle.css";

export default function MenuToggle({
  variant = "default",
  className = "",
  expanded = false,
  controls,
  label = "Open menu",
  onClick,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const rootClassName = ["menu-toggle", `menu-toggle--${resolvedVariant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={rootClassName}
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
    >
      <span className="menu-toggle__line" />
      <span className="menu-toggle__line" />
      <span className="menu-toggle__line" />
    </button>
  );
}
