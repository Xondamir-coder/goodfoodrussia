# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at localhost:3000
npm run build      # build for production (SSR)
npm run generate   # static site generation
npm run lint:fix   # auto-fix ESLint issues
```

There are no tests in this project.

## Architecture

**Nuxt 4 static/SSR site** for the Good Food Russia brand. All content is static JSON — there is no backend API.

### Data layer

All data lives in `app/assets/data/` as JSON files (`products.json`, `recipes.json`, `categories.json`, `media/news.json`, `media/events.json`, `media/gallery.json`). These are imported and mapped to typed class instances (`app/types/*.js`) inside the single Pinia store at `app/stores/api.js`. Components consume data exclusively through `useApiStore()`.

The `mapRt` helper in `app/utils/functions.js` recursively resolves i18n locale references (`{ loc: '...' }` objects) embedded in JSON data using the `rt()` function from `useI18n`.

### i18n

Two locales: `ru` (default) and `en`. Translation files are in `i18n/locales/`. Never hardcode user-facing text — always use `$t('key')` / `useI18n()`. Use `$localePath()` for all internal links (`<NuxtLink :to="$localePath('/about')">`).

### Routing & pages

| Route | File |
|---|---|
| `/` | `pages/index.vue` — home with 7 full-screen slides rendered via `v-show` based on `?slide=N` query param |
| `/products` | products catalog with modal detail view and sidebar + mobile modal filters |
| `/recipes` | recipe listing |
| `/recipes/[id]` | recipe detail |
| `/about`, `/services`, `/contacts`, `/media` | single-page sections |

### Components

Components live under `app/components/` and are auto-imported by Nuxt:

- `ui/` — all feature components, further split into `home/`, `products/`, `media/` subdirs
- `layout/` — `header.vue`, `footer.vue`
- `icons/` — inline SVG icon components (e.g. `<IconsChevron />`)
- `svg/` — inline SVG logo/brand components

**Never use `<img>` tags.** Always use `<UiPicture :src="'filename.ext'" />` which resolves from `public/images/`. SVGs must always be inline components, never `<img>`.

### Styling

SCSS with `sass-embedded`. `abstracts/_variables.scss` and `abstracts/_mixins.scss` are globally injected (no explicit `@use` needed in component `<style>` blocks — they are available as `vars.$bp-md`, `mix.glass-bezel()` etc.). The layout uses two CSS custom properties for spacing: `--spacing-inline` and `--line-spacing`, defined responsively in `_variables.scss`.

Global utility classes (`_classes.scss`) and animation keyframes (`_animations.scss`) are loaded once in `main.scss`.

### Plugins & smooth scroll

`plugins/lenis.client.js` initialises Lenis smooth scroll globally and provides `$lenis` and `$toggleLenis` (use the latter to pause scroll when modals open). Lenis auto-scrolls to top on every route change.

### Images

Raw source images go in `public/images/original/`. After adding new images run:

```bash
bash transform-images.sh
```

This generates the optimised versions consumed by `<UiPicture />`.

## Key conventions from AGENTS.md

- Extract components used more than twice; keep files under ~300 lines
- Avoid unnecessary wrapper `<div>` elements; keep DOM shallow
- Use `<script setup>` throughout
- Use Pinia for shared state; `useState` or plain `ref` for local/simple state
- Follow existing naming patterns — don't introduce new conventions
