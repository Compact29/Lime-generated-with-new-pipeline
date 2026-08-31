import React, { useEffect, useMemo, useState } from "react";
import { refactoredPages } from "./refactored/pages.js";
import "./refactored/site.css";

function normalizeRoutePath(value) {
  const text = String(value || "/").replace(/\/+$/g, "") || "/";
  return text.startsWith("/") ? text : `/${text}`;
}

function currentRoutePath() {
  const previewMatch = window.location.pathname.match(/^\/preview\/[^/]+(\/.*)?$/);
  if (previewMatch) return normalizeRoutePath(previewMatch[1] || "/");
  return normalizeRoutePath(window.location.pathname || "/");
}

export default function App() {
  const [routePath, setRoutePath] = useState(currentRoutePath);
  const activePage = useMemo(() => {
    const normalized = normalizeRoutePath(routePath);
    return refactoredPages.find((page) => normalizeRoutePath(page.routePath) === normalized) || refactoredPages[0];
  }, [routePath]);

  useEffect(() => {
    const onPopState = () => setRoutePath(currentRoutePath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const ActivePage = activePage.Component;
  return <div className="refactored-app" data-page-id={activePage.id}><ActivePage /></div>;
}
