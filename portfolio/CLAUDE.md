# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also runs type check)
npm run lint     # ESLint via next lint
npx tsc --noEmit # type-check without building
```

There are no tests in this project.

## Architecture

Single-page Next.js 16 App Router site. The page is a vertical scroll with 6 anchored sections: Hero → About → Highlights → Work → Personal → Contact.

**Content is fully decoupled from components.** `content/index.ts` is the single source of truth for every string, stat, project, and link on the site. All components import directly from `@/content` — no props drilling, no CMS. To add a project or change bio copy, edit only that file.

**All components are client components** (`"use client"`) because they use Framer Motion. Scroll-triggered animations use `useInView` from framer-motion with `once: true`. The hero animation sequence is purely time-based (staggered `delay` values in `motion` props), not scroll-triggered.

**Design tokens** live in `tailwind.config.ts` — custom colors (`background`, `ink`, `accent`, `rule`, etc.), fluid `fontSize` scales using `clamp()` (`text-display-xl`, `text-stat-xl`), and a `.section-pad` utility class in `globals.css` for consistent vertical rhythm.

**Inverted sections:** The Highlights section uses `bg-ink` (dark background, light text). The Contact section uses `bg-accent` (green background). All other sections use the default `bg-background` (off-white). When adding new sections, follow this pattern.

**Layout pattern used throughout:** `grid lg:grid-cols-[200px_1fr]` — a narrow sticky label column on the left, content on the right. This is the primary desktop layout for every section.

## Key Design Constraints

- No rounded corners on cards — use sharp geometry
- Colors: `#F8F5F0` bg / `#1A1A18` ink / `#1E4D35` accent
- Fonts: `font-serif` = DM Serif Display, `font-sans` = DM Sans
- Small-caps labels use the `.label-caps` utility class (defined in `globals.css`)
- Headshot `/public/port-headshot2.png` is displayed in the About section's sticky left column (small circle on mobile, portrait 3:4 on desktop)
