# Headless CMS Scaffold

This is a starter CMS for the generated Figma Fighter project.

## Run

```bash
npm run cms:server
```

The React admin page is available at `/cms`.

## API

- `GET /api/cms/schema`
- `GET /api/cms/collections/:collection`
- `POST /api/cms/collections/:collection`
- `PUT /api/cms/collections/:collection/:id`
- `DELETE /api/cms/collections/:collection/:id`
- `GET /api/:collection` for public frontend reads
- `POST /api/:collection` for simple public writes
- `GET /api/cms/forms/:form/submissions`
- `POST /api/cms/forms/:form/submissions`

## Agent workflow

When the user asks to make a generated element CMS-controlled:

1. Add or update a collection in `cms/schema.json`.
2. Use `src/cms/cmsClient.js` from the generated React page.
3. Replace the static repeated JSX with a `collection.map(...)` render.
4. Keep the original generated class names where possible so Figma Fighter element selection still works.

When the user asks to collect a frontend form:

1. Add or update a form entry in `cms/schema.json`.
2. Submit the React form with `submitCmsForm(formName, payload)`.
3. The CMS admin page will show submissions automatically.
