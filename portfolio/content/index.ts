// ============================================================
// BRIAN BROWN — PORTFOLIO CONTENT
// Edit this file to update any content on the site.
// No code changes needed — just update the values below.
// ============================================================

// ---- META ---------------------------------------------------

export const meta = {
  title: "Brian Brown — Product Marketer",
  description:
    "Co-Founder of SHILLR and Product Marketer with $50M+ in client revenue across 40+ Web3 companies.",
  ogImage: "/new-og-image.jpg",
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
  /** Link to a client testimonial */
  testimonialUrl?: string;
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
      "Launched the Art Blocks 500, a campaign to round out the definitive onchain generative art canon. Led positioning, content strategy and collector acquisition across social and email.",
    clientUrl: "https://artblocks.io",
    workUrl: "https://x.com/artblocks_io/status/1953120356945842542?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "quine",
    name: "Quine by Larva Labs",
    image: "/work/quine.jpeg",
    category: "NFT & Collectibles",
    description:
      "Code Generates Art ⇄ Art Generates Code. Owned the GTM strategy and launch execution for the latest art release by Larva Labs, the creators of CryptoPunks. $14M in primary sales.",
    clientUrl: "https://larvalabs.com/quine",
    workUrl: "https://x.com/artblocks_io/status/1975591966944440521?s=20",
    workLinkType: "tweet",
    testimonialUrl: "https://x.com/larvalabs/status/1976754201557356689?s=20",
    featured: true,
  },
  {
    id: "konsek",
    name: "Konsek",
    image: "/work/konsek.jpeg",
    category: "Personal",
    description:
      "Vibe coded an app that uses Strava runs to keep a virtual pet alive. Available on desktop and mobile. Built with Next.js, Supabase, and Strava API.",
    clientUrl: "https://konsek.vercel.app/",
    featured: true,
  },
  {
    id: "flamingo-dao",
    name: "Flamingo DAO",
    image: "/work/flamingo-dao.jpeg",
    category: "DAO",
    clientUrl: "https://x.com/FLAMINGODAO",
    workUrl: "https://x.com/FLAMINGODAO/status/1863991996035064205?s=20",
    workLinkType: "tweet",
    description:
      "Developed messaging frameworks, community engagement strategy, and public-facing positioning to highlight the 9-figure NFT collection of the leading art collector DAO.",
    featured: true,
  },
  {
    id: "nifty-island",
    name: "Nifty Island",
    image: "/work/nifty-island.jpeg",
    category: "Web3 Gaming",
    clientUrl: "https://www.niftyisland.com/",
    workUrl: "https://x.com/niftyisland/status/1737558987019587770?s=20",
    workLinkType: "tweet",
    description:
      "GTM strategy for public beta launch, including aggressive player acquisition, influencer coordination, partnership management and community building for a Web3 gaming ecosystem.",
    featured: false,
  },
  {
    id: "gas-wars",
    name: "Gas Wars by Jack Butcher",
    image: "/work/jack-butcher.png",
    category: "NFT & Collectibles",
    description:
      "Owned the marketing campaign for the latest networked generative artwork by Jack Butcher. Wrote social media copy, developed email strategy, and coordinated a live artist interview to promote the release.",
    clientUrl: "https://www.artblocks.io/exhibitions/gas-wars-by-jack-butcher",
    workUrl: "https://x.com/artblocks_io/status/1968021508522963293?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "the-lao",
    name: "The LAO",
    image: "/work/the-lao.jpeg",
    category: "DAO",
    clientUrl: "https://x.com/TheLAOOfficial",
    workUrl: "https://x.com/TheLAOOfficial/status/1907440371241562131",
    workLinkType: "tweet",
    description:
      "Comprehensive social media execution for one of the oldest venture DAOs focused on early-stage crypto investments.",
    featured: true,
  },
  {
    id: "dour-darcels",
    name: "Dour Darcels",
    image: "/work/darcels.png",
    category: "NFT & Collectibles",
    description:
      "GTM strategy, social media execution and community building from Day 0 for a generative profile picture project, resulting in 11,000 ETH in lifetime sales.",
    clientUrl: "https://www.dourdarcels.io/",
    workUrl: "https://x.com/DourDarcelsNFT/status/1499163571548082176?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "genie",
    name: "Genie (acquired by Uniswap)",
    image: "/work/genie.png",
    category: "L2 & Infrastructure",
    clientUrl: "https://x.com/geniexyz",
    workUrl: "https://x.com/shillrxyz/status/1424821743827435529",
    workLinkType: "tweet",
    description:
      "Product marketing for a new NFT sweeper tool. Built brand awareness and user acquisition strategies through value propositions in the emerging NFT aggregator space.",
    featured: true,
  },
  {
    id: "prohibition",
    name: "Prohibition Art",
    image: "/work/prohibition.jpeg",
    category: "NFT & Collectibles",
    description:
      "Owned the GTM strategy from scratch, launching the first Art Blocks contract on an L2. Developed the positioning, artist onboarding strategy and social media content plan.",
    clientUrl: "https://www.artblocks.io/partners/prohibition",
    workUrl: "https://x.com/ProhibitionArt/status/1678453894735699979?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "xx",
    name: "XX DAO",
    image: "/work/xx-dao.jpeg",
    category: "DAO",
    clientUrl: "https://x.com/xxdao_xyz",
    workUrl: "https://x.com/xxdao_xyz/status/1883944319251271916?s=20",
    workLinkType: "tweet",
    description:
      "Owned and operated the social media presence for an art collector DAO focused on emerging onchain generative artists.",
    featured: true,
  },
  {
    id: "hologram",
    name: "Hologram",
    image: "/work/hologram.jpeg",
    category: "L2 & Infrastructure",
    description:
      "Managed GTM strategy and execution for the launch of a Desktop Studio & Chrome Extension which enables users to leverage their NFTs as video filters across Zoom, Google Meet and Twitch.",
    clientUrl: "https://holoworld.com/",
    workUrl: "https://x.com/HologramLabs/status/1573022294171353088",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "neon",
    name: "Neon DAO",
    image: "/work/neon-dao.jpeg",
    category: "DAO",
    clientUrl: "https://x.com/neon_dao",
    workUrl: "https://x.com/neon_dao/status/1944765042953445632?s=20",
    workLinkType: "tweet",
    description:
      "Owned and operated the social media presence for an NFT collector DAO focused on metaverse and fully onchain art.",
    featured: true,
  },
  {
    id: "hume",
    name: "Hume",
    image: "/work/hume.jpeg",
    category: "NFT & Collectibles",
    description:
      "Marketing strategy and positioning for a Web3 record label leveraging popular NFT IP to launch 'meta-stars'.",
    clientUrl: "https://www.wearehume.com/",
    workUrl: "https://x.com/wearehume/status/1549781634517307393",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "chain-runners",
    name: "Chain Runners",
    image: "/work/chain-runners.jpeg",
    category: "Web3 Gaming",
    description:
      "Crafted positioning and narrative to promote the second major product from Chain Runners: fully rigged 3D characters models suitable for gaming and the metaverse.",
    clientUrl: "https://x.com/chain_runners",
    workUrl: "https://x.com/chain_runners/status/1562886024836960258?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "poap",
    name: "POAP",
    image: "/work/poap.jpeg",
    category: "NFT & Collectibles",
    description:
      "Generated product awareness through IRL Scavenger Hunt in NYC. First client for SHILLR.",
    clientUrl: "https://poap.xyz/",
    workUrl: "https://x.com/poapxyz/status/1435642235681484820?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "alien-frens",
    name: "Alien Frens",
    image: "/work/alien-frens.png",
    category: "NFT & Collectibles",
    description:
      "Supported the '12 Days of Frensmas' campaign to promote their release, contribtuing to 31,000 ETH in lifetime sales.",
    clientUrl: "https://x.com/alienfrens",
    workUrl: "https://x.com/alienfrens/status/1469383208210866186",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "glimmer",
    name: "Glimmer DAO",
    image: "/work/glimmer-dao.jpeg",
    category: "DAO",
    clientUrl: "https://x.com/glimmerdao",
    workUrl: "https://x.com/glimmerdao/status/1945898854227771438?s=20",
    workLinkType: "tweet",
    description:
      "Owned and operated the social media presence for an art collector DAO focused on emerging artists from Asia.",
    featured: true,
  },
  {
    id: "mmerch",
    name: "mmERCH",
    image: "/work/mmerch.jpeg",
    category: "NFT & Collectibles",
    description:
      "Supported the launch of the first physical generative fashion release, promoting the drop through collector education, founder interviews and grassroots marketing.",
    clientUrl: "https://mmerch.com/",
    workUrl: "https://x.com/shillrxyz/status/1836527270665896214?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "skill-issue",
    name: "Skill Issue",
    image: "/work/skill-issue.jpeg",
    category: "NFT & Collectibles",
    description:
      "Executed GTM playbook for an NFT & token loot box, owning social media strategy across multiple channels, coordinating influencer partnerships and managing user feedback.",
    featured: true,
  },
  {
    id: "garden",
    name: "The Garden by SHILLR",
    image: "/work/garden.jpeg",
    category: "NFT & Collectibles",
    description:
      "3-Day event series at NFT NYC 2024. Over 500 attendees. Partnered with Base, Arbitrum, Optimism, Infinite Objects and Superchief Gallery.",
    clientUrl: "https://x.com/shillrxyz/status/1775228691276001607",
    featured: true,
  },
  {
    id: "generative-goods",
    name: "Generative Goods",
    image: "/work/generative-goods.jpeg",
    category: "NFT & Collectibles",
    description:
      "Developed positioning and GTM strategy for a new physical product line combining generative art technology with home goods.",
    clientUrl: "https://www.generativegoods.com/",
    workUrl: "https://x.com/generativegoods/status/1729140727068946704?s=20",
    workLinkType: "tweet",
    featured: true,
  },
  {
    id: "mobile-gallery",
    name: "Mobile Art Gallery by SHILLR",
    image: "/work/van.jpeg",
    category: "NFT & Collectibles",
    description:
      "Showcased the work of 1,000+ artists in a mobile gallery between New York and Miami. Pro-bono project to support emerging artists in the space.",
    clientUrl: "https://x.com/shillrxyz/status/1592595927558418432",
    featured: true,
  },
  {
    id: "white-walls",
    name: "White Walls",
    image: "/work/white-walls.jpeg",
    category: "L2 & Infrastructure",
    description:
      "Supported product launch and user acquisition for a new NFT display solution, converting any TV into a high-end digital art frame.",
    clientUrl: "https://www.whitewalls.art/",
    workUrl: "https://x.com/whitewallsapp/status/1774883211186676186?s=20",
    workLinkType: "tweet",
    featured: true,
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "NFT & Collectibles",
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
  subline: "Currently exploring PMM opportunities in crypto and fintech.",
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
