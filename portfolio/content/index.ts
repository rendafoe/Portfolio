// ============================================================
// BRIAN BROWN — PORTFOLIO CONTENT
// Edit this file to update any content on the site.
// No code changes needed — just update the values below.
// ============================================================

// ---- META ---------------------------------------------------

export const meta = {
  title: "Brian Brown — Product Marketer",
  description:
    "Co-founder of SHILLR, 100-mile trail runner, and senior PMM with $50M+ in client results across 40+ Web3 companies.",
  ogImage: "/og-image.png",
};

// ---- HERO ---------------------------------------------------

export const hero = {
  name: "Brian Brown",
  titleLines: ["Product Marketing", "Web3", "Go-to-Market"],
  tagline: "Crypto-Native Product Marketer & Founder.",
  ctas: {
    primary: { label: "View My Work", href: "#work" },
    secondary: { label: "Download Resume", href: "/resume.pdf" },
  },
};

// ---- ABOUT --------------------------------------------------

export const about = {
  paragraphs: [
    "Hi! I'm **Brian**, a **Product Marketer and Founder** with 5+ years experience leading go-to-market for crypto-native launches across NFTs, SocialFi, Protocols, DAOs, L2s and Gaming. Previously spent 5 years building a quantitative foundation in Marketing Insights & Analytics at Best Buy.",
    "In 2021, I co-founded SHILLR, a Web3 marketing agency. I executed GTM for 40+ clients across every major vertical of the crypto space, scaled the team to 8 and built the internal operations from scratch.",
    "I led the strategy, positioning and launch execution for ‘Quine’ by Larva Labs ($14M in sales), Nifty Island (1.2M impressions at launch), Alien Frens (31K ETH in lifetime sales), and Prohibition Art (First Art Blocks contract on an L2). I also managed social media for institutional DAOs including Flamingo DAO and The LAO, growing engagement 120% YOY. Over four years, we drove $50M+ in client sales revenue.",
    "I have a deep interest in crypto and have been an active onchain participant since 2013, allowing me to apply both my professional and my personal expertise into product marketing. I’m also AI fluent: I build automation workflows into my daily work, have shipped apps from scratch using Claude Code, and enjoy experimenting with new tools to gain a competitive edge in product marketing.",
  ],
};

// ---- PROFESSIONAL HIGHLIGHTS --------------------------------

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "$50M+", label: "Client Sales Driven" },
  { value: "40+", label: "Clients Served" },
  { value: "4", label: "Years as Co-Founder" },
  { value: "8", label: "Team Members Built & Led" },
];

export type TimelineEntry = {
  years: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const timeline: TimelineEntry[] = [
  {
    years: "2021–2026",
    role: "Co-Founder & Head of Product Marketing",
    company: "SHILLR",
    location: "Minneapolis, MN",
    summary:
      "Built and scaled a Web3 marketing agency from zero to 40 clients, driving $50M+ in client sales across every major vertical of crypto.",
    bullets: [
      "Co-founded SHILLR and built internal operations from scratch, scaling the team to 8 full-time members",
      "Led go-to-market strategy for 40+ clients across NFTs, DeFi, L2s, DAOs, and gaming",
      "Executed launch for Quine by Larva Labs ($14M in sales), Nifty Island (1.2M impressions at launch), and Alien Frens (31K ETH lifetime sales)",
      "Managed social media for Flamingo DAO and The LAO, growing engagement 120% YOY",
      "Positioned and launched Prohibition Art — the first Art Blocks contract deployed on an L2",
    ],
  },
  {
    years: "2020–2021",
    role: "Senior Analyst, Decision Science & Analytics",
    company: "Best Buy",
    location: "Richfield, MN",
    summary:
      "Drove customer engagement +13% YOY through data-driven insights that directly shaped marketing campaigns across 10 product categories.",
    bullets: [
      "Built analytical frameworks that influenced marketing spend allocation across 10 product categories",
      "Partnered with campaign teams to translate data insights into actionable strategy",
      "Drove customer engagement +13% YOY through targeted recommendations",
    ],
  },
  {
    years: "2016–2020",
    role: "Analyst, Business Intelligence & Forecasting",
    company: "Best Buy",
    location: "Richfield, MN",
    summary:
      "Grew revenue +22% across 5 business units through BI consulting, physical space optimization, and demand forecasting for a $300M business.",
    bullets: [
      "Grew revenue +22% across 5 business units as an embedded BI consultant",
      "Optimized physical retail space layout across 1,000 Best Buy locations",
      "Forecasted demand for a $300M business, improving inventory accuracy and reducing overstock",
      "Built and maintained executive reporting dashboards used by senior leadership",
    ],
  },
];

// ---- WORK / PROJECTS ----------------------------------------

export type ProjectCategory =
  | "All"
  | "NFT & Collectibles"
  | "DeFi"
  | "Web3 Gaming"
  | "L2 & Infrastructure"
  | "Personal"
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
  /** Path relative to /public, e.g. "/work/art-blocks.png" */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "art-blocks",
    name: "Art Blocks",
    image: "/work/ab500.png",
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
    image: "/work/flamingo.png",
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
  "Personal",
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
};

// ---- CONTACT ------------------------------------------------

export const contact = {
  headline: "Let's talk.",
  subline: "Currently exploring senior PMM opportunities in crypto and fintech.",
  email: "Brownrobertbrian@gmail.com",
  links: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/brian-brown-86399066/", // Update with real URL
    },
    {
      platform: "X",
      url: "https://x.com/bernardo_cafe", // Update with real URL,
    },
  ],
  resumeUrl: "/resume.pdf",
};
