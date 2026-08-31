import "./FooterNavigation.css";
import { useState } from "react";
import SocialLink from "../social_link/SocialLink.jsx";

const TOGGLE_ICON_SRC =
  "/generated-pages/page-1/generated-assets/vectors/2001_3377.svg";

const DEFAULT_GROUPS = [
  {
    id: "join-us",
    title: "Join Us",
    links: [
      { id: "careers", label: "Careers" },
      { id: "lime-times-blog", label: "Lime Times Blog" },
      { id: "press", label: "Press" },
      { id: "partners", label: "Partners" },
    ],
  },
  {
    id: "about",
    title: "About",
    links: [
      { id: "community", label: "Community" },
      { id: "e-bike", label: "E-Bike" },
      { id: "e-scooter", label: "E-Scooter" },
      { id: "sustainability", label: "Sustainability" },
      { id: "innovation", label: "Innovation" },
      { id: "safety", label: "Safety" },
    ],
  },
  {
    id: "programs",
    title: "Programs",
    links: [
      { id: "advertise", label: "Advertise" },
      { id: "lime-access", label: "Lime Access" },
      { id: "lime-hero", label: "Lime Hero" },
      { id: "lime-assist", label: "Lime Assist" },
      { id: "insurance", label: "Insurance" },
      { id: "our-cities", label: "Our Cities" },
    ],
  },
];

const DEFAULT_UTILITY_LINKS = [
  { id: "find-location", label: "Find Location" },
  { id: "get-help", label: "Get help" },
  { id: "sitemap", label: "Sitemap" },
];

const DEFAULT_SOCIAL_LINKS = [
  {
    id: "twitter",
    label: "Twitter",
    desktopIconSrc: "/generated-pages/page-1/generated-assets/named/n/7f527cbb8f4e.png",
    mobileIconSrc: "/generated-pages/page-1/generated-assets/named/n/34b8d9a8ffc5.png",
  },
  {
    id: "facebook",
    label: "Facebook",
    desktopIconSrc: "/generated-pages/page-1/generated-assets/named/n/a8fa2d0a9629.png",
    mobileIconSrc: "/generated-pages/page-1/generated-assets/named/n/e9f44917eded.png",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    desktopIconSrc: "/generated-pages/page-1/generated-assets/named/n/d03d08da61ed.png",
    mobileIconSrc: "/generated-pages/page-1/generated-assets/named/n/b4e05b83eafb.png",
  },
  {
    id: "youtube",
    label: "YouTube",
    desktopIconSrc: "/generated-pages/page-1/generated-assets/named/n/630f601abe8c.png",
    mobileIconSrc: "/generated-pages/page-1/generated-assets/named/n/a2a33dd88f67.png",
  },
  {
    id: "instagram",
    label: "Instagram",
    desktopIconSrc: "/generated-pages/page-1/generated-assets/named/n/2c5277915bc6.png",
    mobileIconSrc: "/generated-pages/page-1/generated-assets/named/n/366de3c922ce.png",
  },
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

function renderNavigationLink(item, linkClassName, onLinkClick) {
  const label = item && item.label ? item.label : "";
  const href =
    item && typeof item.href === "string" && item.href.length > 0
      ? item.href
      : undefined;
  const handleClick = onLinkClick
    ? (event) => onLinkClick(item, event)
    : undefined;

  if (href) {
    return (
      <a className={linkClassName} href={href} onClick={handleClick}>
        {label}
      </a>
    );
  }

  if (handleClick) {
    return (
      <button className={linkClassName} type="button" onClick={handleClick}>
        {label}
      </button>
    );
  }

  return <span className={linkClassName}>{label}</span>;
}

export default function FooterNavigation({
  variant = "default",
  className = "",
  id = "footer-navigation",
  label = "Footer",
  groups = DEFAULT_GROUPS,
  utilityLinks = DEFAULT_UTILITY_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  initialOpenGroups = [],
  onLinkClick,
  onGroupToggle,
}) {
  const resolvedVariant = variant === "default" ? variant : "default";
  const resolvedGroups =
    Array.isArray(groups) && groups.length > 0 ? groups : DEFAULT_GROUPS;
  const resolvedUtilityLinks = Array.isArray(utilityLinks)
    ? utilityLinks
    : DEFAULT_UTILITY_LINKS;
  const resolvedSocialLinks = Array.isArray(socialLinks)
    ? socialLinks
    : DEFAULT_SOCIAL_LINKS;

  const [openGroups, setOpenGroups] = useState(() =>
    Array.isArray(initialOpenGroups) ? initialOpenGroups.map(String) : [],
  );

  const toggleGroup = (groupId, event) => {
    const willOpen = !openGroups.includes(groupId);
    setOpenGroups((current) =>
      current.includes(groupId)
        ? current.filter((entry) => entry !== groupId)
        : current.concat(groupId),
    );
    if (onGroupToggle) {
      onGroupToggle(groupId, willOpen, event);
    }
  };

  const rootClassName = [
    "footer-navigation",
    `footer-navigation--${resolvedVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id={id} className={rootClassName} aria-label={label}>
      <div className="footer-navigation__columns">
        {resolvedGroups.map((group, groupIndex) => {
          const groupId = String(entryKey(group, groupIndex));
          const panelId = `${id}-${groupId}-panel`;
          const isOpen = openGroups.includes(groupId);
          const groupLinks = Array.isArray(group && group.links)
            ? group.links
            : [];
          const panelClassName = [
            "footer-navigation__panel",
            isOpen ? "footer-navigation__panel--open" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <section className="footer-navigation__group" key={groupId}>
              <h3 className="footer-navigation__group-heading">
                <button
                  className="footer-navigation__group-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={(event) => toggleGroup(groupId, event)}
                >
                  <span className="footer-navigation__group-title">
                    {group && group.title ? group.title : ""}
                  </span>
                  <img
                    className="footer-navigation__group-icon"
                    src={
                      group && group.iconSrc ? group.iconSrc : TOGGLE_ICON_SRC
                    }
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div className={panelClassName} id={panelId}>
                <ul className="footer-navigation__list">
                  {groupLinks.map((item, itemIndex) => (
                    <li
                      className="footer-navigation__item"
                      key={entryKey(item, itemIndex)}
                    >
                      {renderNavigationLink(
                        item,
                        "footer-navigation__link",
                        onLinkClick,
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <div className="footer-navigation__utility">
          <ul className="footer-navigation__utility-list">
            {resolvedUtilityLinks.map((item, itemIndex) => (
              <li
                className="footer-navigation__utility-item"
                key={entryKey(item, itemIndex)}
              >
                {renderNavigationLink(
                  item,
                  "footer-navigation__utility-link",
                  onLinkClick,
                )}
              </li>
            ))}
          </ul>

          <ul className="footer-navigation__social">
            {resolvedSocialLinks.map((item, itemIndex) => (
              <li
                className="footer-navigation__social-item"
                key={entryKey(item, itemIndex)}
              >
                <SocialLink
                  variant="default"
                  label={item && item.label ? item.label : undefined}
                  href={item && item.href ? item.href : undefined}
                  desktopIconSrc={
                    item && item.desktopIconSrc ? item.desktopIconSrc : undefined
                  }
                  mobileIconSrc={
                    item && item.mobileIconSrc ? item.mobileIconSrc : undefined
                  }
                  target={item && item.target ? item.target : undefined}
                  rel={item && item.rel ? item.rel : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
