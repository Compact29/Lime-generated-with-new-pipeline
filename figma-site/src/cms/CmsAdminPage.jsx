import { useEffect, useMemo, useState } from "react";
import {
  cmsApiBase,
  createCollectionItem,
  deleteCollectionItem,
  getCmsSchema,
  getCollection,
  getFormSubmissions,
  updateCollectionItem,
  uploadCmsAsset,
} from "./cmsClient";
import defaultCmsSchema from "../../cms/schema.json";
import "./cms.css";

const EMPTY_SCHEMA = { collections: {}, forms: {} };

function firstSchemaEntry(schema) {
  const firstCollection = Object.keys(schema?.collections || {})[0];
  const firstForm = Object.keys(schema?.forms || {})[0];
  if (firstCollection) return { type: "collections", name: firstCollection };
  if (firstForm) return { type: "forms", name: firstForm };
  return null;
}

function emptyValueForField(field) {
  if (field.type === "number") return 0;
  if (field.type === "boolean") return false;
  return "";
}

function emptyDraft(fields = []) {
  return Object.fromEntries(fields.map((field) => [field.name, emptyValueForField(field)]));
}

function FieldInput({ field, value, onChange }) {
  const commonProps = {
    id: field.name,
    name: field.name,
    value: value ?? "",
    placeholder: field.placeholder || "",
    onChange: (event) => onChange(event.target.value),
  };

  if (field.type === "textarea" || field.type === "richtext") {
    return <textarea {...commonProps} rows={4} />;
  }
  if (field.type === "boolean") {
    return (
      <label className="cms-check">
        <input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
        <span>{field.label || field.name}</span>
      </label>
    );
  }
  if (field.type === "image") {
    return (
      <div className="cms-image-field">
        <input {...commonProps} />
        <input
          type="file"
          accept="image/*"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const dataUrl = await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(String(reader.result || ""));
              reader.onerror = reject;
              reader.readAsDataURL(file);
            });
            const uploaded = await uploadCmsAsset(file.name, dataUrl);
            onChange(uploaded.url);
          }}
        />
        {value ? <img src={value} alt="" /> : null}
      </div>
    );
  }
  return <input {...commonProps} type={field.type === "email" ? "email" : field.type === "number" ? "number" : "text"} />;
}

function CollectionEditor({ name, collection }) {
  const fields = collection.fields || [];
  const [items, setItems] = useState([]);
  const [draft, setDraft] = useState(() => emptyDraft(fields));
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const loadItems = async () => {
    setItems(await getCollection(name));
  };

  useEffect(() => {
    setDraft(emptyDraft(fields));
    setEditingId(null);
    loadItems().catch((err) => setError(err.message));
  }, [name]);

  const save = async (event) => {
    event.preventDefault();
    setError("");
    try {
      if (editingId) {
        await updateCollectionItem(name, editingId, draft);
      } else {
        await createCollectionItem(name, draft);
      }
      setDraft(emptyDraft(fields));
      setEditingId(null);
      await loadItems();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="cms-panel">
      <div className="cms-panel-head">
        <div>
          <h2>{collection.label || name}</h2>
          {collection.description ? <p>{collection.description}</p> : null}
        </div>
        <span>{items.length} items</span>
      </div>
      {error ? <div className="cms-error">{error}</div> : null}
      <form className="cms-form" onSubmit={save}>
        {fields.map((field) => (
          <label key={field.name}>
            <span>{field.label || field.name}</span>
            <FieldInput field={field} value={draft[field.name]} onChange={(value) => setDraft((current) => ({ ...current, [field.name]: value }))} />
          </label>
        ))}
        {fields.length === 0 ? <p className="cms-empty">No fields yet. Ask the agent to add fields to cms/schema.json.</p> : null}
        <div className="cms-actions">
          <button type="submit">{editingId ? "Update item" : "Create item"}</button>
          {editingId ? <button type="button" onClick={() => { setEditingId(null); setDraft(emptyDraft(fields)); }}>Cancel</button> : null}
        </div>
      </form>
      <div className="cms-items">
        {items.map((item) => (
          <article key={item.id} className="cms-item">
            <pre>{JSON.stringify(item, null, 2)}</pre>
            <div>
              <button type="button" onClick={() => { setEditingId(item.id); setDraft(Object.fromEntries(fields.map((field) => [field.name, item[field.name] ?? emptyValueForField(field)]))); }}>Edit</button>
              <button type="button" onClick={async () => { await deleteCollectionItem(name, item.id); await loadItems(); }}>Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormInbox({ name, form }) {
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getFormSubmissions(name).then(setSubmissions).catch((err) => setError(err.message));
  }, [name]);

  return (
    <section className="cms-panel">
      <div className="cms-panel-head">
        <div>
          <h2>{form.label || name}</h2>
          {form.description ? <p>{form.description}</p> : null}
        </div>
        <span>{submissions.length} requests</span>
      </div>
      {error ? <div className="cms-error">{error}</div> : null}
      <div className="cms-items">
        {submissions.map((item) => (
          <article key={item.id} className="cms-item">
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </article>
        ))}
        {submissions.length === 0 ? <p className="cms-empty">No submissions yet.</p> : null}
      </div>
    </section>
  );
}

export default function CmsAdminPage() {
  const [schema, setSchema] = useState(defaultCmsSchema || EMPTY_SCHEMA);
  const [activeType, setActiveType] = useState("collections");
  const [activeName, setActiveName] = useState(() => firstSchemaEntry(defaultCmsSchema)?.name || "");
  const [apiBase, setApiBase] = useState(cmsApiBase());
  const [error, setError] = useState("");

  useEffect(() => {
    getCmsSchema()
      .then((nextSchema) => {
        const resolvedSchema = nextSchema || defaultCmsSchema || EMPTY_SCHEMA;
        setSchema(resolvedSchema);
        const firstEntry = firstSchemaEntry(resolvedSchema);
        if (firstEntry) {
          setActiveType(firstEntry.type);
          setActiveName(firstEntry.name);
        }
      })
      .catch((err) => {
        setSchema(defaultCmsSchema || EMPTY_SCHEMA);
        const firstEntry = firstSchemaEntry(defaultCmsSchema);
        if (firstEntry) {
          setActiveType(firstEntry.type);
          setActiveName(firstEntry.name);
        }
        setError(`${err.message}. Showing local cms/schema.json; run npm run cms:server to edit content.`);
      });
  }, []);

  const entries = useMemo(() => {
    const collections = Object.entries(schema.collections || {}).map(([name, config]) => ({ type: "collections", name, label: config.label || name }));
    const forms = Object.entries(schema.forms || {}).map(([name, config]) => ({ type: "forms", name, label: config.label || name }));
    return [...collections, ...forms];
  }, [schema]);

  const activeConfig = activeType === "collections"
    ? schema.collections?.[activeName]
    : schema.forms?.[activeName];

  return (
    <main className="cms-page">
      <aside className="cms-sidebar">
        <h1>CMS</h1>
        <label className="cms-api-base">
          <span>API base</span>
          <input
            value={apiBase}
            onChange={(event) => setApiBase(event.target.value)}
            onBlur={() => window.localStorage.setItem("figmaFighterCmsApiBase", apiBase)}
          />
        </label>
        <nav>
          {entries.map((entry) => (
            <button
              key={entry.type + ":" + entry.name}
              type="button"
              className={entry.type === activeType && entry.name === activeName ? "active" : ""}
              onClick={() => {
                setActiveType(entry.type);
                setActiveName(entry.name);
              }}
            >
              <span>{entry.label}</span>
              <small>{entry.type === "forms" ? "form inbox" : "collection"}</small>
            </button>
          ))}
        </nav>
      </aside>
      <section className="cms-content">
        {error ? <div className="cms-error">{error}. Run npm run cms:server in the generated project.</div> : null}
        {!error && entries.length === 0 ? (
          <section className="cms-panel">
            <h2>No CMS collections yet</h2>
            <p>Ask the agent to add a collection to cms/schema.json and connect generated React elements through src/cms/cmsClient.js.</p>
          </section>
        ) : null}
        {!error && activeType === "collections" && activeConfig ? <CollectionEditor name={activeName} collection={activeConfig} /> : null}
        {!error && activeType === "forms" && activeConfig ? <FormInbox name={activeName} form={activeConfig} /> : null}
      </section>
    </main>
  );
}
