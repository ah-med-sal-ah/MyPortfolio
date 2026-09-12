# Ahmed Salah — Portfolio

Personal portfolio built with Vue 3, TypeScript, Vite, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # type-check + production build to dist/
npm run preview     # serve the production build locally
npm run typecheck   # type-check only
```

## Project structure

```
src/
├── components/       UI components (one per section, plus shared pieces)
│   └── icons/         Small local brand icons (GitHub, LinkedIn)
├── data/             Structured content: projects, experience, certifications,
│                     technologies, social links — edit these, not the components
├── locales/          en.ts / fr.ts — all UI copy, centralized for translation
├── composables/      useLanguage, useCv, useFileExists, useReveal
├── config/site.ts    Site-wide constants (CV file paths, SEO defaults)
└── utils/date.ts     Locale-aware date formatting
public/               Static assets served as-is (Images, GIF, experience, certifications)
```

## Adding content later

- **CV**: two files live at `public/CV/ahmed-salah-cv-en.pdf` and
  `ahmed-salah-cv-fr.pdf` (paths defined in `src/config/site.ts` as
  `CV_FILES`). "Download CV" opens a small language-picker menu
  (`components/CvDownloadMenu.vue`) rather than downloading directly;
  each option checks its file exists before opening it, so a missing
  file shows an inline "not available" message instead of a broken
  link — replace the PDF at the same path to fix it.
- **Doctor Management preview**: `public/GIF/Doctor.png` is the real
  screenshot. `ProjectMedia.vue` falls back to a placeholder automatically
  if it's ever missing.
- **New project**: add an entry to `src/data/projects.ts` and matching
  copy (title/description) under `projects.items.<id>` in both
  `src/locales/en.ts` and `src/locales/fr.ts`.
- **New certification**: same pattern in `src/data/certifications.ts` +
  `certifications.items.<id>` in both locale files.

## Notes

- Language is stored in `localStorage` and defaults to English.
- `GIF/GYMapp.gif` is a large asset (~30MB); it's lazy-loaded via an
  IntersectionObserver so it's only fetched once its card scrolls near
  the viewport.
