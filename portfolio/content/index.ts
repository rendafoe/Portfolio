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
    location: "Minneapolis, MN (Remote)",
    summary:
      "Built and scaled a Web3 marketing agency from zero to 40 clients, driving $50M+ in client sales through product marketing.",
    bullets: [
      "Led GTM strategy and product launch campaigns for 40 Web3 clients, driving $50M+ in sales revenue across NFTs, SocialFi, DAOs, Gaming, Tooling & L2s",
      "Developed positioning, messaging, and go-to-market execution for key launches including “Quine” by Larva Labs ($14M in sales), Prohibition Art (First Art Blocks Contract on L2), Nifty Island (1.2M Impressions in Launch Month) & Alien Frens (31k ETH in Lifetime Sales)",
      "Authored email newsletters, leveraged influencer network & implemented token incentives to roll out the Art Blocks 500, a campaign which resulted in 5 rapid NFT sellouts & 11% follower growth over 4 months",
      "Consulted on product positioning and audience development for early-stage products including Genie (Acquired by Uniswap), Hume (AI Record Label) & mmERCH (Generative Fashion)",
      "Owned social media strategy and operations for institutional DAOs covering Flamingo DAO, The LAO, XX DAO, Neon DAO & Glimmer DAO, growing engagement +120% YOY",
      "Scaled and led a team of 8, establishing marketing operations, client onboarding & best practices",
      "Hosted community events across NYC, Miami, and Lisbon; partnered with Base, OpenSea & Proof Collective",
    ],
  },
  {
    years: "2020–2021",
    role: "Senior Analyst, Decision Science & Analytics",
    company: "Best Buy",
    location: "Richfield, MN",
    summary:
      "Discovered and reported fact-based marketing insights that influenced product campaigns.",
    bullets: [
      "Drove customer engagement by +13% YOY, providing insights that directly influenced marketing campaigns, including customer profiles by category shopped and consumer journey analyses",
      "Partnered with cross-functional marketing teams to test business hypotheses & align on strategy across 10 categories",
      "Reported monthly analytics that highlighted changes in customer behaviors over time, broken down by demographic traits, channels shopped & geographic location",
    ],
  },
  {
    years: "2018–2020",
    role: "Strategist, Business Intelligence",
    company: "Best Buy",
    location: "Richfield, MN",
    summary:
      "Leveraged hypothesis testing to increase efficiency and productivity of brick and mortar stores.",
    bullets: [
      "Acted as an intelligence consultant by utilizing sales & demographics data, uncovering KPIs & category trends to grow revenue +22% across 5 business units",
      "Measured and published “Return on Space” financial reports that validated the effectiveness of company initiatives and told concise narratives to leadership",
      "Optimized physical space for profitability across 1,000 Brick & Mortar locations, making recommendations for planogram lengths based on demand elasticity",
    ],
  },
    {
    years: "2016–2017",
    role: "Analyst, Product Demand Forecasting",
    company: "Best Buy",
    location: "Richfield, MN",
    summary:
      "Supported aggressive category growth by accurately forecasting product demand.",
    bullets: [
      "Analyzed historical sales data to forecast demand for a $300M business; managed 1,300 products that span 1,000 store locations nationwide",
      "Collaborated effectively with vendor partners, staying within 6% forecast accuracy to ensure healthy inventory levels",
      "Delivered accurate and unbiased forecasts, contributing to 17% growth in the business YOY",
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
  /** Direct link to the client's website */
  clientUrl?: string;
  /** Link to an example of work done for this client */
  workUrl?: string;
  workLinkType?: Exclude<LinkType, "website">;
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
    clientUrl: "https://artblocks.io",
    workUrl: "https://x.com/artblocks_io/status/1953120356945842542?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "flamingo-dao",
    name: "Flamingo DAO",
    image: "/work/flamingo-dao.jpeg",
    category: "NFT & Collectibles",
    description:
      "Member marketing and communications strategy for a leading NFT-focused investment DAO. Developed messaging frameworks, community engagement strategy, and public-facing positioning.",
    featured: true,
  },
  {
    id: "the-lao",
    name: "The LAO",
    image: "/work/the-lao.jpeg",
    category: "DAO",
    description:
      "Marketing strategy and positioning for one of the first legally compliant venture DAOs in the US. Helped define the narrative around decentralized venture at a pivotal moment for the space.",
    featured: true,
  },
  {
    id: "genie",
    name: "Genie (acquired by Uniswap)",
    image: "/work/genie.png",
    category: "DeFi",
    description:
      "Growth marketing support ahead of Uniswap acquisition. Built brand awareness and user acquisition strategies in the emerging NFT aggregator space — helping the team tell a clear story at a critical inflection point.",
    result: "Acquired by Uniswap",
    featured: true,
  },
  {
    id: "nifty-island",
    name: "Nifty Island",
    image: "/work/nifty-island.jpeg",
    category: "Web3 Gaming",
    description:
      "Player acquisition and community GTM strategy for a social gaming platform built on Web3. Led launch-phase marketing, community flywheel design, and cross-ecosystem partnership narratives.",
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
    {
      platform: "GitHub",
      url: "https://github.com/rendafoe", // Update with your GitHub username
    },
  ],
  resumeUrl: "/resume.pdf",
};
