# PRD: Brian Brown — Personal Portfolio Website

---

## 1. Overview & Vision

Build a personal portfolio website for Brian Brown — co-founder, marketing executive, endurance athlete, and crypto native — that functions as a living, curated record of his professional and personal achievements. The site must feel like a $100,000 custom build: intentional, distinctive, and visually commanding, while remaining immediately legible to a recruiter spending 60 seconds on it.

This is not a generic "here's my resume online" site. It is a narrative-driven showcase that communicates:

- **Who he is**: Senior product marketer with deep crypto/Web3 roots, a founder track record, and a quantified history of moving markets.
- **What he's done**: Specific, impressive, linkable achievements across clients, campaigns, and channels.
- **Who he is outside of work**: A serious endurance athlete (2x 100-mile finisher), content creator, and long-time crypto participant since 2013.

The tone should be **confident, precise, and unexpectedly human** — not corporate, not generic agency vibes, not a dark-mode Web3 cliché.

---

## 2. Design Direction

### Aesthetic
**Refined editorial minimalism with structural contrast.** Think: the intersection of a high-end magazine layout and a well-designed annual report. Not a SaaS landing page, not a Web3 agency portfolio.

- **Typography**: Use a high-contrast serif/sans-serif pairing. Suggested: `Playfair Display` or `DM Serif Display` for display headings paired with `DM Sans` or `Libre Franklin` for body. Numbers and stats should feel proud — large, bold, mono-styled.
- **Color palette**: Off-white or warm cream background (`#F8F5F0` or similar) with near-black ink tone (`#1A1A18`). Single sharp accent color — a deep forest green (`#1E4D35`) or slate blue (`#1C3557`). No purple gradients. No neon. No "Web3 blue."
- **Layout**: Generous whitespace. Asymmetric column layouts. Full-bleed section breaks. Overlapping typographic elements. Sticky section labels in the margin on desktop.
- **Motion**: Subtle but deliberate. Fade-in-and-rise on scroll for content sections. Smooth parallax on the hero. Hover states on cards that feel tactile. One memorable page-load animation (name/title reveal with a masked wipe or stagger).
- **Details**: Thin horizontal rules. Small-caps section labels. Generous line-height. No rounded corners on cards — sharp geometry communicates precision. A fine grain texture overlay on the background.

### Vibe Keywords
Precision. Craft. Credibility. Movement. Unexpected warmth.

---

## 3. Information Architecture

### Pages / Sections (Single-Page Scroll with Anchor Nav)

1. **Hero**
2. **About**
3. **Professional Highlights** (stats + career timeline)
4. **Work / Projects** (client work, campaigns, notable achievements)
5. **Personal** (running, YouTube, crypto history)
6. **Contact**

All sections should be reachable from a sticky nav. The page is a single scroll experience on both desktop and mobile.

---

## 4. Section Specifications

---

### 4.1 — Hero

**Purpose**: Immediate impression. Name, identity, and a gut-punch opening line.

**Content**:
- Full name: **Brian Brown**
- Title line (rotating or static): `Product Marketing · Web3 · Go-to-Market`
- Tagline (short): e.g. *"I help crypto companies find their market, then move it."*
- Two CTAs: `View My Work` (scrolls to Work section) and `Download Resume` (PDF link placeholder)
- Subtle background: either a very light grain-textured solid or a slowly drifting geometric shape in the accent color

**Animation**:
- Name reveals with a horizontal wipe mask on page load
- Title fades in 400ms after name
- CTA buttons slide up 600ms after title

---

### 4.2 — About

**Purpose**: Human context. Build trust and establish narrative arc.

**Content** (editable):
- 2–3 paragraph bio. Default copy:

  > I'm a co-founder and product marketer who spent four years building SHILLR, a Web3 marketing agency where I led go-to-market strategy across 35+ clients and drove over $50M in client sales. Before that, I was a senior data analyst at Best Buy — which means I think in both stories and spreadsheets.
  >
  > I've been in crypto since 2013. Not as a tourist. As a practitioner who's marketed NFT projects, DeFi protocols, L2s, and Web3 games — and watched the space evolve from meme coins to institutional infrastructure.
  >
  > Outside of work, I'm a two-time 100-mile trail race finisher currently training for the Superior Fall 100. I run about 50 miles a week and document the journey on my YouTube channel, The Trail Experience. Running long distances teaches you something marketing school doesn't: how to stay calm when nothing is going according to plan.

- No headshot or photo — layout should be typography-only in this section

---

### 4.3 — Professional Highlights

**Purpose**: Scannable proof of impact. Recruiters and hiring managers should be able to absorb this in 10 seconds.

**Content — Stat Cards** (large number + label):

| Stat | Label |
|---|---|
| $50M+ | Client Sales Driven |
| 35+ | Clients Served |
| 4 | Years as Co-Founder |
| 8 | Team Members Built & Led |

**Content — Career Timeline** (vertical or horizontal):

| Year | Role | Company |
|---|---|---|
| 2021–2026 | Co-Founder & Head of Client Marketing | SHILLR |
| ~2018–2021 | Senior Analyst, Decision Science & Analytics | Best Buy |
| 2013 | First Bitcoin Purchase | Coinbase |

Timeline entries should support optional short descriptors (1–2 lines) that can be toggled or shown inline.

---

### 4.4 — Work / Projects

**Purpose**: Show the depth and breadth of real client work. This is the most important section for a hiring manager.

**Layout**: Filterable card grid or masonry layout. Cards should feel like editorial tiles, not SaaS feature blocks.

**Filter tags** (optional, toggleable):
- All / NFT & Collectibles / DeFi / Web3 Gaming / L2 & Infrastructure / Brand Strategy

**Each Card Contains**:
- Client/project name (bold)
- Category tag
- Short description of what Brian did and the outcome (2–3 sentences)
- Optional: metric or result highlight (e.g. "$X in sales," "X% growth")
- Optional link (external URL, Twitter post, article, press mention)
- Link type indicator: Website 🔗 / Tweet 🐦 / Article 📰 (small icon)

**Default Projects to Pre-Populate** (Brian can edit/expand):

1. **Art Blocks** — NFT & Collectibles
   - Go-to-market strategy and community marketing for one of the most recognized generative art platforms in Web3.
   - [Link placeholder]

2. **Flamingo DAO** — NFT & Collectibles
   - Member marketing and communications strategy for a leading NFT-focused investment DAO.
   - [Link placeholder]

3. **The LAO** — DeFi / DAO
   - Marketing strategy and positioning for one of the first legally compliant venture DAOs in the US.
   - [Link placeholder]

4. **Genie (acquired by Uniswap)** — DeFi
   - Growth marketing support ahead of Uniswap acquisition. Helped build brand awareness in the NFT aggregator space.
   - [Link to acquisition announcement placeholder]

5. **Nifty Island** — Web3 Gaming
   - Player acquisition and community GTM strategy for a social gaming platform built on Web3.
   - [Link placeholder]

6. **[Add More]** — placeholder card with "+" icon for easy addition

---

### 4.5 — Personal

**Purpose**: Make Brian memorable and three-dimensional. Humanize the resume. This section differentiates him from every other PMM candidate.

**Sub-sections**:

#### The Long Runs
- Short copy about endurance running. Default:
  > I've finished two 100-mile trail races. The training for these events — the long days alone in the mountains, the problem-solving mid-race when everything breaks — has made me a better marketer, not just a more tired one.
- Stats: 100-mile finishes: **2** | Weekly miles: **~50** | Next race: **Superior Fall 100**

#### The Trail Experience (YouTube)
- Channel description + link to YouTube
- Embed or card for latest/featured video (YouTube embed or thumbnail card with link)
- Subscriber count placeholder (manual update)

#### Crypto Since 2013
- Brief copy:
  > I bought my first Bitcoin on Coinbase in 2013. I've watched every cycle, survived every bear market, and marketed through the chaos. That's not a humble brag — it's context for why I take this industry seriously.

---

### 4.6 — Contact

**Purpose**: Make it frictionless to reach Brian.

**Content**:
- Short line: *"Currently exploring senior PMM opportunities in crypto and fintech."*
- Email button (link to `mailto:`)
- LinkedIn icon + link
- Twitter/X icon + link
- Optional: "Download Resume" button (PDF)

No contact form needed — links only.

---

## 5. Content Management Strategy

### Easy Updates — No CMS Required

All site content should be stored in a single `content.js` (or `content.json`) file at the root of the project. Every piece of editable text, every card, every stat, and every link lives in this file. Brian should be able to:

1. Open `content.js`
2. Add a new object to the `projects` array (or `personal` array)
3. Save the file and redeploy

**Example structure for a project entry**:

```js
{
  id: "art-blocks",
  name: "Art Blocks",
  category: "NFT & Collectibles",
  description: "Go-to-market strategy and community marketing for one of the most recognized generative art platforms in Web3.",
  result: "$XM in primary sales supported",
  linkUrl: "https://artblocks.io",
  linkType: "website", // "website" | "tweet" | "article"
  featured: true
}
```

**Example structure for a stat**:

```js
{ value: "$50M+", label: "Client Sales Driven" }
```

All sections — bio text, stats, timeline entries, personal section content, social links — should follow this pattern.

---

## 6. Technical Specifications

### Stack
- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS with a custom design token config (colors, fonts, spacing defined in `tailwind.config.js`)
- **Fonts**: Google Fonts via `next/font` — `DM Serif Display` (display) + `DM Sans` (body) as defaults, but configured as variables for easy swap
- **Animations**: Framer Motion for scroll-triggered reveals and page-load sequences
- **Deployment**: Vercel (zero-config)

### File Structure
```
/
├── app/
│   ├── page.tsx              # Main single-page layout
│   ├── layout.tsx            # Root layout with font/meta setup
│   └── globals.css           # Global styles, CSS variables
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Highlights.tsx
│   ├── Work.tsx
│   ├── Personal.tsx
│   └── Contact.tsx
├── content/
│   └── index.ts              # ALL editable content lives here
├── public/
│   ├── resume.pdf            # Placeholder
│   └── og-image.png          # Social share image
└── tailwind.config.ts
```

### Responsive Behavior
- **Desktop (1280px+)**: Full layout with margin labels, multi-column cards, asymmetric sections
- **Tablet (768–1279px)**: 2-column cards, condensed nav
- **Mobile (<768px)**: Single column, hamburger nav, stacked stats, simplified hero

### Performance
- Lighthouse score target: 90+ on all metrics
- Images: `next/image` with proper sizing and lazy loading
- Fonts: Preloaded, display: swap

### SEO / Meta
- Title: `Brian Brown — Product Marketer & Web3 Strategist`
- Description: `Co-founder of SHILLR, 100-mile trail runner, and senior PMM with $50M+ in client results across 35+ Web3 companies.`
- OG image configured for social sharing
- `robots.txt` allowing indexing

---

## 7. Nice-to-Have (Phase 2)

These are out of scope for v1 but should be built in a way that makes them easy to add:

- **Dark mode toggle** — CSS variables already support it if set up from the start
- **Blog / Writing section** — simple MDX-based posts
- **Case study modal** — clicking a project card expands into a full case study overlay
- **YouTube auto-fetch** — pull latest video via YouTube Data API instead of manual embed
- **Analytics** — Vercel Analytics (one-line add)

---

## 8. Deliverable Checklist for Claude Code

- [ ] Next.js project scaffolded with TypeScript + Tailwind
- [ ] `content/index.ts` created with all default content populated
- [ ] All 6 section components built and wired to content file
- [ ] Framer Motion scroll-reveal animations on all sections
- [ ] Page-load hero animation (name wipe + stagger)
- [ ] Sticky navigation with smooth scroll to anchors
- [ ] Project card grid with optional filter tabs
- [ ] Stat cards with large typographic numbers
- [ ] Career timeline component
- [ ] Mobile responsive across all breakpoints
- [ ] `tailwind.config.ts` with custom color + font tokens
- [ ] Social links and mailto in Contact section
- [ ] Resume PDF download button (links to `/public/resume.pdf`)
- [ ] README with instructions for updating `content/index.ts`
- [ ] Vercel-ready (no custom server config needed)

---