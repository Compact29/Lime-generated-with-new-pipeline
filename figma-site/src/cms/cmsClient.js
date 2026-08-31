const DEFAULT_API_BASE = "http://localhost:8788/api";

export function cmsApiBase() {
  const runtimeBase = typeof window !== "undefined" ? window.__FIGMA_FIGHTER_CMS_API_BASE__ : "";
  const storedBase = typeof window !== "undefined" ? window.localStorage.getItem("figmaFighterCmsApiBase") : "";
  const savedBase = storedBase === "http://localhost:8787/api" || storedBase === "http://127.0.0.1:8787/api" ? "" : storedBase;
  return String(runtimeBase || savedBase || import.meta.env.VITE_CMS_API_BASE || DEFAULT_API_BASE).replace(/\/+$/, "");
}

async function cmsRequest(path, options = {}) {
  const response = await fetch(`${cmsApiBase()}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(payload?.error || `CMS request failed: ${response.status}`);
  }
  return payload;
}

export function getCmsSchema() {
  return cmsRequest("/cms/schema");
}

export function getCollection(collectionName) {
  return cmsRequest(`/cms/collections/${encodeURIComponent(collectionName)}`);
}

export function createCollectionItem(collectionName, item) {
  return cmsRequest(`/cms/collections/${encodeURIComponent(collectionName)}`, {
    method: "POST",
    body: JSON.stringify(item),
  });
}

export function updateCollectionItem(collectionName, id, item) {
  return cmsRequest(`/cms/collections/${encodeURIComponent(collectionName)}/${encodeURIComponent(id)}`, {
    method: "PUT",
    body: JSON.stringify(item),
  });
}

export function deleteCollectionItem(collectionName, id) {
  return cmsRequest(`/cms/collections/${encodeURIComponent(collectionName)}/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

export function getFormSubmissions(formName) {
  return cmsRequest(`/cms/forms/${encodeURIComponent(formName)}/submissions`);
}

export function submitCmsForm(formName, payload) {
  return cmsRequest(`/cms/forms/${encodeURIComponent(formName)}/submissions`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function uploadCmsAsset(fileName, dataUrl) {
  return cmsRequest("/cms/uploads", {
    method: "POST",
    body: JSON.stringify({ fileName, dataUrl }),
  });
}
