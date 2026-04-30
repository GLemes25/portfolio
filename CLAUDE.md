# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm lint         # run ESLint
pnpx shadcn add <component>  # install a shadcn/ui component
```

There are no tests in this project.

## Architecture

Single-page portfolio built with **Next.js 16 App Router**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** (style: `radix-nova`).

`app/page.tsx` composes the full page by rendering section components in order: `Navigation → Hero → TechStack → Projects → About → Experience → Contact → Footer`. All section components live flat in `components/`.

### Data

Content is currently hardcoded directly inside each section component (e.g. the projects array in `components/Projects.tsx`). Per `general.md`, data should eventually live in `data/` as JSON files — use that pattern when adding new content sections.

`lib/github.ts` contains a server-side fetch helper for the GitHub API (with 1h revalidation via Next.js `fetch` cache).

### Styling / Theming

There are two CSS entry points:

- `app/globals.css` — imported by `app/layout.tsx`; this is the **active** theme file used at runtime
- `styles/index.css` → `styles/theme.css` — a secondary theme file not currently wired into the layout

When adding or changing CSS variables, edit `app/globals.css`. The theme uses **oklch** color values for light and dark modes. Tailwind color utilities are mapped to CSS variables via `@theme inline` in `globals.css`.

### Animations

Scroll and mount animations use **`motion/react`** (`motion` package). Components that animate use `"use client"` and `motion.div` with `whileInView` / `initial` / `animate` props.

### shadcn/ui

`components.json` configures aliases: `@/components/ui` for primitives, `@/lib/utils` for `cn()`. The icon library is **lucide-react**.
