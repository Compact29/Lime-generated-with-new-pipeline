---
name: figma-fighter-cms
description: "Use for Figma Fighter generated CMS work: adding forms, saving frontend submissions, wiring generated React pages to cms/schema.json, cms/db.json, src/cms/cmsClient.js, and the auto-created CMS admin page."
---

# Figma Fighter CMS Skill

Use this skill when the user asks to connect generated site content or frontend forms to the auto-created Figma Fighter CMS.

## Cost Discipline

This skill exists to keep CMS form work cheap. Follow these limits unless the user asks for a custom CMS feature.

- Do not create or update a task list for routine "connect this form to CMS" requests.
- Prefer the selected-element JSX/CSS snippets already present in the prompt. If they identify the form fields and submit button, start editing immediately.
- Maximum normal inspection before editing:
  - one `rg` command to find form labels/classes if no selected-element snippet is enough;
  - one `sed` range of at most 90 JSX lines around the form;
  - one `sed` or `cat` of `cms/schema.json`;
  - read `src/cms/cmsClient.js` only if `submitCmsForm` was not already seen in prompt or schema context.
- Do not inspect `src/cms/CmsAdminPage.jsx` for normal form inbox work. It already renders `schema.forms`.
- Do not read broad CSS ranges to "understand" generated layout. Add generic reset classes and keep generated layout classes unchanged.
- Do not use `git status`, `git diff`, or repeated broad post-edit reads for normal generated CMS form tasks.
- Stop after one successful targeted verification, plus `npm run build` only when JSX imports/markup changed.

If a patch fails, do one narrow `rg`/`sed` around the failed anchor, then retry once with a smaller patch. Do not switch to a large Python rewrite unless a patch cannot reasonably express the change.

## Fixed CMS Structure

The generated project always uses this CMS layout:

- `cms/schema.json`: schema for CMS collections and form inboxes.
- `cms/db.json`: JSON storage used by the CMS backend.
- `cms/backend/server.mjs`: backend API.
- `src/cms/cmsClient.js`: frontend helpers:
  - `getCmsSchema()`
  - `getCollection(collectionName)`
  - `createCollectionItem(collectionName, item)`
  - `updateCollectionItem(collectionName, id, item)`
  - `deleteCollectionItem(collectionName, id)`
  - `getFormSubmissions(formName)`
  - `submitCmsForm(formName, payload)`
  - `uploadCmsAsset(fileName, dataUrl)`
- `src/cms/CmsAdminPage.jsx`: admin UI. It already renders:
  - `schema.collections` as editable collections.
  - `schema.forms` as form inboxes via `getFormSubmissions(name)`.

Do not build a second CMS UI. Usually editing `cms/schema.json` and the generated page JSX is enough.

## Fast Route For Frontend Forms

For requests like "save contact/feedback form submissions to CMS":

1. Inspect only the minimum needed context:
   - selected-element snippets from the prompt first;
   - otherwise one exact `rg` search for form labels/classes;
   - one small JSX range around the form;
   - `cms/schema.json`.
2. Add or update `schema.forms.<form_name>` in `cms/schema.json`.
3. In the generated page:
   - import `useState` if needed.
   - import `submitCmsForm` from the relative `src/cms/cmsClient.js` path.
   - keep original generated class names and `data-figma-*` attributes.
   - convert the visual form group container to `<form ... onSubmit={handleSubmit}>`.
   - convert placeholder text nodes for fields to controlled `<input>` or `<textarea>` with the same generated class.
   - convert the visual button wrapper to `<button type="submit">` and put the original text class on an inner `<span>` if needed.
4. Submit with:

```jsx
await submitCmsForm("contact_requests", payload);
```

5. Let `src/cms/CmsAdminPage.jsx` display submissions through its existing `FormInbox`. Edit it only if the requested display cannot be represented by `schema.forms`.

Expected command pattern for a normal request:

```bash
rg -n "Имя|Телефон|Telegram|запрос|Связаться|form" src/generated
sed -n '<small form range>' src/generated/<page>/GeneratedScene_*.jsx
cat cms/schema.json
```

Then edit. Do not add additional exploratory commands unless these do not identify the form.

## Schema Rules

Prefer `forms` for frontend submissions, not `collections`.

Example:

```json
{
  "version": 1,
  "collections": {},
  "forms": {
    "contact_requests": {
      "label": "Заявки из формы обратной связи",
      "description": "Заявки, отправленные с формы на сайте.",
      "fields": [
        { "name": "name", "label": "Имя", "type": "text" },
        { "name": "phone", "label": "Телефон", "type": "text" },
        { "name": "source", "label": "Источник", "type": "text" }
      ]
    }
  }
}
```

Match field names in the submitted payload exactly to the schema fields. If the visible form has only name and phone, do not invent email/message fields.

## CSS Rules For Generated Forms

Generated text classes usually have paragraph defaults. When converting `<p>` to `<input>` or `<button>`, add minimal CSS resets to the existing generated CSS. You normally do not need to read the exact generated CSS positions first.

```css
.ff-cms-field {
  border: 0;
  background: transparent;
  outline: none;
  font: inherit;
  color: inherit;
}

.ff-cms-field::placeholder {
  color: inherit;
  opacity: 1;
}

.ff-cms-submit {
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  cursor: pointer;
}
```

Append this short block near the end of the generated CSS or near existing local override rules. Keep generated selectors/classes. Do not rewrite large generated CSS blocks.

## Editing Rules For Cheap Patches

- Prefer `apply_patch` with exact local anchors over a generated Python rewrite.
- Patch imports and state/handler near the top of the component separately from the form markup.
- Patch mobile and desktop form blocks separately if both exist.
- Keep patches small enough that the tool output is short. Avoid emitting the whole rewritten file.
- If using a script is unavoidable, it must print only a tiny success summary, not the rewritten JSX or large snippets.

## What To Avoid

- Do not read whole generated JSX/CSS files. Use exact `rg` hits and small `sed` ranges.
- Do not read more than one generated CSS range before editing. For reset classes, read no CSS range at all unless there is a known selector conflict.
- Do not inspect the full CMS admin page unless schema/forms behavior is unclear. It already supports form inboxes.
- Do not modify `cms/backend/server.mjs` for normal form submissions.
- Do not create localStorage-only submission storage when `submitCmsForm` exists.
- Do not add a new route or a custom inbox if `schema.forms` plus `FormInbox` solves it.
- Do not run a full build for schema-only changes. Run `npm run build` only if JSX imports, converted form markup, or CSS edits could break compilation.
- Do not run `git status` for final reporting in generated workspaces.
- Do not repeat verification reads after `rg` confirms the import, form name, fields, and CSS helper classes.

## Minimal Verification

For CMS form wiring, a good verification is:

- one targeted `rg` for `submitCmsForm`, the form name, key field names, and CSS helper classes;
- `npm run build` if generated JSX/imports changed.

Avoid repeating broad source reads after the patch. Final response can name files from memory: generated JSX, generated CSS if reset classes were added, and `cms/schema.json`.
