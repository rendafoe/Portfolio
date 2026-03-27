# Brian Brown — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Updating Content

**All site content lives in one file: `content/index.ts`**

Open it and edit any value — no code changes required. Then redeploy.

### Add a new project

In `content/index.ts`, add an entry to the `projects` array:

```ts
{
  id: "my-project",           // unique slug
  name: "My Project",
  category: "DeFi",           // see ProjectCategory type for options
  description: "What you did and the outcome. 2-3 sentences.",
  result: "Optional metric highlight",   // optional
  linkUrl: "https://example.com",        // optional
  linkType: "website",                   // "website" | "tweet" | "article"
  featured: true,
}
```

### Update stats

Edit the `stats` array:

```ts
{ value: "$50M+", label: "Client Sales Driven" }
```

### Update social links / email

Edit the `contact` object — update `email`, `links[].url`, and `resumeUrl`.

### Update resume

Drop your PDF at `public/resume.pdf` — the download button links there automatically.

### Add a YouTube video embed

In the `personal.youtube` object, set `featuredVideoId` to the YouTube video ID (the part after `?v=` in the URL).

```ts
featuredVideoId: "dQw4w9WgXcQ"
```

---

## Development

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build
npm run start   # serve production build
```

## Deployment

Push to GitHub and connect the repo to [Vercel](https://vercel.com) — zero config needed.

## Stack

- **Next.js 16** — App Router, static export
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design tokens in `tailwind.config.ts`
- **Framer Motion** — scroll reveals + hero load sequence
- **DM Serif Display + DM Sans** — Google Fonts via `next/font`
