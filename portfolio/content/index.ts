// ============================================================
// BRIAN BROWN — PORTFOLIO CONTENT
// Edit this file to update any content on the site.
// No code changes needed — just update the values below.
// ============================================================

// ---- META ---------------------------------------------------

export const meta = {
  title: "Brian Brown — Product Marketer & Web3 Strategist",
  description:
    "Co-founder of SHILLR, 100-mile trail runner, and senior PMM with $50M+ in client results across 35+ Web3 companies.",
  ogImage: "/og-image.png",
};

// ---- HERO ---------------------------------------------------

export const hero = {
  name: "Brian Brown",
  titleLines: ["Product Marketing", "Web3", "Go-to-Market"],
  tagline: "I help crypto companies find their market, then move it.",
  ctas: {
    primary: { label: "View My Work", href: "#work" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
};

// ---- ABOUT --------------------------------------------------

export const about = {
  paragraphs: [
    "I'm a co-founder and product marketer who spent four years building SHILLR, a Web3 marketing agency where I led go-to-market strategy across 35+ clients and drove over $50M in client sales. Before that, I was a senior data analyst at Best Buy — which means I think in both stories and spreadsheets.",
    "I've been in crypto since 2013. Not as a tourist. As a practitioner who's marketed NFT projects, DeFi protocols, L2s, and Web3 games — and watched the space evolve from meme coins to institutional infrastructure.",
    "Outside of work, I'm a two-time 100-mile trail race finisher currently training for the Superior Fall 100. I run about 50 miles a week and document the journey on my YouTube channel, The Trail Experience. Running long distances teaches you something marketing school doesn't: how to stay calm when nothing is going according to plan.",
  ],
};

// ---- PROFESSIONAL HIGHLIGHTS --------------------------------

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "$50M+", label: "Client Sales Driven" },
  { value: "35+", label: "Clients Served" },
  { value: "4", label: "Years as Co-Founder" },
  { value: "8", label: "Team Members Built & Led" },
];

export type TimelineEntry = {
  years: string;
  role: string;
  company: string;
  descriptor?: string;
};

export const timeline: TimelineEntry[] = [
  {
    years: "2021–2026",
    role: "Co-Founder & Head of Client Marketing",
    company: "SHILLR",
    descriptor:
      "Built and ran a Web3 marketing agency from zero to 35+ clients, leading GTM strategy across NFTs, DeFi, L2s, and gaming.",
  },
  {
    years: "2018–2021",
    role: "Senior Analyst, Decision Science & Analytics",
    company: "Best Buy",
    descriptor:
      "Delivered data-driven insights at enterprise scale, bridging analytics and business strategy across merchandising and marketing.",
  },
  {
    years: "2013",
    role: "First Bitcoin Purchase",
    company: "Coinbase",
    descriptor: "Entered crypto early — before it was obvious.",
  },
];

// ---- WORK / PROJECTS ----------------------------------------

export type ProjectCategory =
  | "All"
  | "NFT & Collectibles"
  | "DeFi"
  | "Web3 Gaming"
  | "L2 & Infrastructure"
  | "Brand Strategy"
  | "DAO";

export type LinkType = "website" | "tweet" | "article";

export type Project = {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  result?: string;
  linkUrl?: string;
  linkType?: LinkType;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "art-blocks",
    name: "Art Blocks",
    category: "NFT & Collectibles",
    description:
      "Go-to-market strategy and community marketing for one of the most recognized generative art platforms in Web3. Led positioning, launch campaigns, and collector acquisition across primary and secondary markets.",
    result: "Primary sales supported across multiple drops",
    linkUrl: "https://artblocks.io",
    linkType: "website",
    featured: true,
  },
  {
    id: "flamingo-dao",
    name: "Flamingo DAO",
    category: "NFT & Collectibles",
    description:
      "Member marketing and communications strategy for a leading NFT-focused investment DAO. Developed messaging frameworks, community engagement strategy, and public-facing positioning.",
    linkUrl: undefined,
    linkType: "website",
    featured: true,
  },
  {
    id: "the-lao",
    name: "The LAO",
    category: "DAO",
    description:
      "Marketing strategy and positioning for one of the first legally compliant venture DAOs in the US. Helped define the narrative around decentralized venture at a pivotal moment for the space.",
    linkUrl: undefined,
    linkType: "website",
    featured: true,
  },
  {
    id: "genie",
    name: "Genie (acquired by Uniswap)",
    category: "DeFi",
    description:
      "Growth marketing support ahead of Uniswap acquisition. Built brand awareness and user acquisition strategies in the emerging NFT aggregator space — helping the team tell a clear story at a critical inflection point.",
    result: "Acquired by Uniswap",
    linkUrl: undefined,
    linkType: "article",
    featured: true,
  },
  {
    id: "nifty-island",
    name: "Nifty Island",
    category: "Web3 Gaming",
    description:
      "Player acquisition and community GTM strategy for a social gaming platform built on Web3. Led launch-phase marketing, community flywheel design, and cross-ecosystem partnership narratives.",
    linkUrl: undefined,
    linkType: "website",
    featured: false,
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "NFT & Collectibles",
  "DeFi",
  "DAO",
  "Web3 Gaming",
  "L2 & Infrastructure",
  "Brand Strategy",
];

// ---- PERSONAL -----------------------------------------------

export const personal = {
  running: {
    headline: "The Long Runs",
    copy: "I've finished two 100-mile trail races. The training for these events — the long days alone in the mountains, the problem-solving mid-race when everything breaks — has made me a better marketer, not just a more tired one.",
    stats: [
      { value: "2", label: "100-mile finishes" },
      { value: "~50", label: "Weekly miles" },
      { value: "Superior Fall 100", label: "Next race" },
    ],
  },
  youtube: {
    headline: "The Trail Experience",
    copy: "I document long-distance trail running on YouTube — the training, the racing, the inevitable suffering. It's raw, it's honest, and it's built a community of people who take their running seriously.",
    channelUrl: "https://www.youtube.com/@thetrailexperience",
    subscriberCount: undefined as string | undefined, // e.g. "12K"
    featuredVideoId: undefined as string | undefined, // YouTube video ID, e.g. "dQw4w9WgXcQ"
  },
  crypto: {
    headline: "Crypto Since 2013",
    copy: "I bought my first Bitcoin on Coinbase in 2013. I've watched every cycle, survived every bear market, and marketed through the chaos. That's not a humble brag — it's context for why I take this industry seriously.",
  },
};

// ---- CONTACT ------------------------------------------------

export const contact = {
  headline: "Let's talk.",
  subline: "Currently exploring senior PMM opportunities in crypto and fintech.",
  email: "brian@example.com", // Update with real email
  links: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/brianbrown", // Update with real URL
      label: "LinkedIn",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/brianbrown", // Update with real URL
      label: "Twitter / X",
    },
  ],
  resumeUrl: "/resume.pdf",
};
