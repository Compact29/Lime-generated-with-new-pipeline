import React, { useEffect, useMemo, useState } from "react";
import { generatedPages } from "./generated/pages";

function normalizeRoutePath(value) {
  const text = String(value || "/").replace(/\/+$/g, "") || "/";
  return text.startsWith("/") ? text : `/${text}`;
}

function currentRoutePath() {
  const previewMatch = window.location.pathname.match(/^\/preview\/[^/]+(\/.*)?$/);
  if (previewMatch) return normalizeRoutePath(previewMatch[1] || "/");
  return normalizeRoutePath(window.location.pathname || "/");
}

export function navigateToGeneratedRoute(route) {
  const targetRoute = normalizeRoutePath(route);
  const previewPrefixMatch = window.location.pathname.match(/^\/preview\/[^/]+/);
  const base = previewPrefixMatch ? previewPrefixMatch[0] : "";
  window.history.pushState({}, "", targetRoute === "/" ? base || "/" : `${base}${targetRoute}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

if (typeof window !== "undefined") window.figmaFighterNavigate = navigateToGeneratedRoute;

export default function App() {
  const [routePath, setRoutePath] = useState(currentRoutePath);
  const activePage = useMemo(() => {
    const normalized = normalizeRoutePath(routePath);
    return generatedPages.find((page) => normalizeRoutePath(page.routePath) === normalized) || generatedPages[0];
  }, [routePath]);

  useEffect(() => {
    const onPopState = () => setRoutePath(currentRoutePath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const ActivePage = activePage.Component;
  return <div className="ff-page-shell" data-page-key={activePage.key}><ActivePage /></div>;
}
