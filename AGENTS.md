# AGENTS.md for multi-page Nuxt projects

## Image Handling

- Download all images into:
  `/public/images/original`

- After downloading all images, run:
  `bash transform-images.sh`

- Do NOT use raw `<img>` tags.
- Always use:
  `<UiPicture :src="'image_name.ext'" />`

---

## Code Structure & Reusability

- If a component or block is reused more than 2 times:
  → Extract it into a separate component

- Keep files under 300 lines:
  → Split when:
  - template becomes hard to scan
  - multiple responsibilities appear
  - repeated UI patterns exist

---

## Markup & Layout Rules

- Avoid unnecessary wrapper elements
- Do NOT add extra `<div>` unless required for layout or styling
- Keep DOM shallow and readable
- Avoid deep nesting (3+ levels) unless necessary

---

## SVG Usage

- Never use `<img>` for SVGs
- Always use inline SVG components:
  - `/components/svg/logo.vue` → `<SvgLogo />`
  - `/components/svg/name.vue` → `<SvgName />`
  - `/components/icons/chevron.vue` → `<IconsChevron />`
  - `/components/icons/name.vue` → `<IconsName />`

---

## i18n Rules (HIGH PRIORITY)

- Always use `@nuxtjs/i18n`
- NEVER hardcode user-facing text
- Always use `$t('key')`

- Always use localized routing:
  - `<NuxtLink :to="$localePath('/about')" />`

---

## App State

- Use Pinia for global/shared state
- Use `useState` or exported refs for local/simple state
- Do NOT introduce global state unnecessarily

---

## Nuxt Conventions

- Use `<script setup>`
- Prefer composables for reusable logic
- Keep logic simple and colocated when possible

---

## File Organization

- Split by responsibility:
  - UI → components
  - logic → composables
  - state → store

- Keep naming consistent and predictable

---

## General Principles

- Prefer clean, maintainable, and modular code
- Avoid duplication
- Follow existing project patterns
- Do NOT introduce new patterns unless necessary
