import http from "node:http";
import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CMS_ROOT = path.resolve(__dirname, "..");
const SCHEMA_PATH = path.join(CMS_ROOT, "schema.json");
const DB_PATH = path.join(CMS_ROOT, "db.json");
const UPLOADS_DIR = path.join(CMS_ROOT, "uploads");
const PORT = Number.parseInt(process.env.CMS_PORT || "8788", 10);
const HOST = process.env.CMS_HOST || "127.0.0.1";
const PUBLIC_URL = (process.env.CMS_PUBLIC_URL || `http://${HOST}:${PORT}`).replace(/\/+$/, "");

const DEFAULT_DB = { collections: {}, forms: { contact_requests: [] }, uploads: [] };

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return structuredClone(fallback);
  }
}

async function writeJson(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function send(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(body);
}

function notFound(res) {
  send(res, 404, { error: "Not found" });
}

function safeName(value) {
  const name = String(value || "").trim();
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(name)) {
    throw new Error("Invalid CMS name");
  }
  return name;
}

function collectionSchema(schema, collectionName) {
  return schema.collections?.[collectionName] || null;
}

function formSchema(schema, formName) {
  return schema.forms?.[formName] || null;
}

function normalizeItem(input, fields = []) {
  const allowed = new Set(fields.map((field) => field.name));
  const item = {};
  for (const [key, value] of Object.entries(input || {})) {
    if (["id", "createdAt", "updatedAt"].includes(key)) continue;
    if (allowed.size > 0 && !allowed.has(key)) continue;
    item[key] = value;
  }
  return item;
}

async function handleUpload(req, res) {
  const payload = await readBody(req);
  const dataUrl = String(payload.dataUrl || "");
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) {
    send(res, 400, { error: "Expected dataUrl" });
    return;
  }
  const extension = String(payload.fileName || "").split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "bin";
  const fileName = `${Date.now()}-${randomUUID()}.${extension}`;
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  await fs.writeFile(path.join(UPLOADS_DIR, fileName), Buffer.from(match[2], "base64"));
  const db = await readJson(DB_PATH, DEFAULT_DB);
  db.uploads = Array.isArray(db.uploads) ? db.uploads : [];
  const record = { id: randomUUID(), fileName, mimeType: match[1], url: `${PUBLIC_URL}/cms/uploads/${fileName}`, createdAt: new Date().toISOString() };
  db.uploads.unshift(record);
  await writeJson(DB_PATH, db);
  send(res, 201, record);
}

async function route(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
  const pathname = url.pathname.replace(/\/+$/, "") || "/";
  const schema = await readJson(SCHEMA_PATH, { version: 1, collections: {}, forms: {} });
  const db = await readJson(DB_PATH, DEFAULT_DB);
  db.collections = db.collections || {};
  db.forms = db.forms || {};

  try {
    if (req.method === "GET" && pathname.startsWith("/cms/uploads/")) {
      const fileName = path.basename(pathname);
      const filePath = path.join(UPLOADS_DIR, fileName);
      const ext = path.extname(fileName).toLowerCase();
      const contentType = ext === ".png" ? "image/png"
        : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg"
        : ext === ".webp" ? "image/webp"
        : ext === ".gif" ? "image/gif"
        : "application/octet-stream";
      const file = await fs.readFile(filePath);
      res.writeHead(200, {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
      });
      res.end(file);
      return;
    }
    if (req.method === "GET" && pathname === "/api/health") {
      send(res, 200, { ok: true });
      return;
    }
    if (req.method === "GET" && pathname === "/api/cms/schema") {
      send(res, 200, schema);
      return;
    }
    if (req.method === "PUT" && pathname === "/api/cms/schema") {
      const nextSchema = await readBody(req);
      await writeJson(SCHEMA_PATH, nextSchema);
      send(res, 200, nextSchema);
      return;
    }
    if (req.method === "POST" && pathname === "/api/cms/uploads") {
      await handleUpload(req, res);
      return;
    }

    const collectionMatch = pathname.match(/^\/api\/cms\/collections\/([^/]+)(?:\/([^/]+))?$/);
    if (collectionMatch) {
      const collectionName = safeName(decodeURIComponent(collectionMatch[1]));
      const itemId = collectionMatch[2] ? decodeURIComponent(collectionMatch[2]) : "";
      const config = collectionSchema(schema, collectionName);
      if (!config) {
        send(res, 404, { error: `Unknown collection: ${collectionName}` });
        return;
      }
      db.collections[collectionName] = Array.isArray(db.collections[collectionName]) ? db.collections[collectionName] : [];
      const fields = config.fields || [];
      if (req.method === "GET" && !itemId) {
        send(res, 200, db.collections[collectionName]);
        return;
      }
      if (req.method === "POST" && !itemId) {
        const now = new Date().toISOString();
        const item = { id: randomUUID(), ...normalizeItem(await readBody(req), fields), createdAt: now, updatedAt: now };
        db.collections[collectionName].unshift(item);
        await writeJson(DB_PATH, db);
        send(res, 201, item);
        return;
      }
      const index = db.collections[collectionName].findIndex((item) => String(item.id) === String(itemId));
      if (index < 0) {
        send(res, 404, { error: "Item not found" });
        return;
      }
      if (req.method === "PUT") {
        db.collections[collectionName][index] = {
          ...db.collections[collectionName][index],
          ...normalizeItem(await readBody(req), fields),
          updatedAt: new Date().toISOString(),
        };
        await writeJson(DB_PATH, db);
        send(res, 200, db.collections[collectionName][index]);
        return;
      }
      if (req.method === "DELETE") {
        const [removed] = db.collections[collectionName].splice(index, 1);
        await writeJson(DB_PATH, db);
        send(res, 200, removed);
        return;
      }
    }

    const formMatch = pathname.match(/^\/api\/cms\/forms\/([^/]+)\/submissions$/);
    if (formMatch) {
      const formName = safeName(decodeURIComponent(formMatch[1]));
      const config = formSchema(schema, formName);
      if (!config) {
        send(res, 404, { error: `Unknown form: ${formName}` });
        return;
      }
      db.forms[formName] = Array.isArray(db.forms[formName]) ? db.forms[formName] : [];
      if (req.method === "GET") {
        send(res, 200, db.forms[formName]);
        return;
      }
      if (req.method === "POST") {
        const now = new Date().toISOString();
        const item = { id: randomUUID(), ...normalizeItem(await readBody(req), config.fields || []), createdAt: now };
        db.forms[formName].unshift(item);
        await writeJson(DB_PATH, db);
        send(res, 201, item);
        return;
      }
    }

    const publicCollectionMatch = pathname.match(/^\/api\/([^/]+)$/);
    if (publicCollectionMatch) {
      const collectionName = safeName(decodeURIComponent(publicCollectionMatch[1]));
      const config = collectionSchema(schema, collectionName);
      if (!config) return notFound(res);
      db.collections[collectionName] = Array.isArray(db.collections[collectionName]) ? db.collections[collectionName] : [];
      if (req.method === "GET") {
        send(res, 200, db.collections[collectionName]);
        return;
      }
      if (req.method === "POST") {
        const now = new Date().toISOString();
        const item = { id: randomUUID(), ...normalizeItem(await readBody(req), config.fields || []), createdAt: now, updatedAt: now };
        db.collections[collectionName].unshift(item);
        await writeJson(DB_PATH, db);
        send(res, 201, item);
        return;
      }
    }
  } catch (error) {
    send(res, 400, { error: error.message || String(error) });
    return;
  }

  notFound(res);
}

if (!existsSync(DB_PATH)) {
  await writeJson(DB_PATH, DEFAULT_DB);
}
await fs.mkdir(UPLOADS_DIR, { recursive: true });

http.createServer(route).listen(PORT, HOST, () => {
  console.log(`CMS API listening at http://${HOST}:${PORT}`);
});
