import './Button.css';

const VARIANT_DEFAULTS = {
  primary: 'Download the App',
  outline: 'Our cities',
};

export default function Button({
  variant = 'primary',
  className = '',
  children,
  label,
  href,
  onClick,
  type = 'button',
  ...restProps
}) {
  const resolvedVariant = Object.hasOwn(VARIANT_DEFAULTS, variant)
    ? variant
    : 'primary';
  const content = children ?? label ?? VARIANT_DEFAULTS[resolvedVariant];
  const rootClassName = [
    'refactored-button',
    `refactored-button--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (typeof href === 'string' && href.length > 0) {
    return (
      <a
        {...restProps}
        className={rootClassName}
        href={href}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...restProps}
      className={rootClassName}
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
