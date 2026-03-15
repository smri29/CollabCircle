export type NavigationItem = {
  href: string;
  label: string;
  matches?: string[];
};

export type FeatureLink = {
  href: string;
  label: string;
  description: string;
  points: string[];
  icon: string;
  cta: string;
};

export type SpotlightCard = {
  label: string;
  title: string;
  description: string;
};

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/research-lab",
    label: "Research Lab",
    matches: ["/about", "/research", "/publications", "/team", "/contact"],
  },
  {
    href: "/engineering-hub",
    label: "Engineering Hub",
  },
  {
    href: "/impact-sector",
    label: "Impact Sector",
  },
  {
    href: "/mission-vision",
    label: "Mission & Vision",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
];

export const homeSpotlights: SpotlightCard[] = [
  {
    label: "Current foundation",
    title: "Research Lab",
    description: "The research-facing work we have already built becomes one clear destination.",
  },
  {
    label: "2030 direction",
    title: "Engineering Hub",
    description: "A future product and systems arm for turning technical capability into durable tools.",
  },
  {
    label: "Long-term promise",
    title: "Impact Sector",
    description: "A place to show where our work can matter beyond internal milestones.",
  },
];

export const homeDivisions: FeatureLink[] = [
  {
    href: "/research-lab",
    label: "Research Lab",
    description:
      "Today’s active CollabCircle experience. It houses the research identity, directions, publications, team, and collaboration pathways we have already built.",
    points: [
      "Existing research pages organized under one gateway",
      "Publication-focused workflows and documentation standards",
      "Team, contact, and research direction in one place",
    ],
    icon: "research",
    cta: "Enter the lab",
  },
  {
    href: "/engineering-hub",
    label: "Engineering Hub",
    description:
      "The future technical arm of CollabCircle, designed for products, platforms, applied AI systems, and engineering execution at company scale.",
    points: [
      "Future-ready structure for products and internal platforms",
      "Space for software systems, tooling, and deployment thinking",
      "A foundation for scaling beyond publication-only work",
    ],
    icon: "engineering",
    cta: "See the direction",
  },
  {
    href: "/impact-sector",
    label: "Impact Sector",
    description:
      "A strategic layer for connecting research and engineering work to the domains where we want CollabCircle to create tangible value.",
    points: [
      "Shows the sectors we aim to serve over time",
      "Helps future visitors understand practical relevance",
      "Keeps the homepage anchored in real-world outcomes",
    ],
    icon: "impact",
    cta: "View sectors",
  },
];

export const strategicLinks: FeatureLink[] = [
  {
    href: "/mission-vision",
    label: "Mission & Vision",
    description:
      "The principles that keep CollabCircle coherent while it grows from a research organization into a broader company.",
    points: [
      "What we are building toward",
      "How we want to operate",
      "Why the long horizon matters",
    ],
    icon: "mission",
    cta: "Read the mission",
  },
  {
    href: "/about-us",
    label: "About Us",
    description:
      "A company-level explanation of who we are, how the research and engineering departments fit together, and what kind of institution we are shaping.",
    points: [
      "Organization-wide narrative",
      "Dual-department structure",
      "Future company positioning",
    ],
    icon: "about",
    cta: "Get the overview",
  },
  {
    href: "/join-us",
    label: "Join Us",
    description:
      "A forward-looking invitation for researchers, engineers, and long-term collaborators who want to grow with CollabCircle.",
    points: [
      "Research contributors",
      "Future engineering builders",
      "Long-term collaboration tracks",
    ],
    icon: "join",
    cta: "Explore ways to join",
  },
];

export const researchLabLinks: FeatureLink[] = [
  {
    href: "/about",
    label: "About the Lab",
    description:
      "The current research-facing identity of CollabCircle, including why the lab exists and how it operates.",
    points: [
      "Organization rationale",
      "Research culture and standards",
      "A view of the operating model",
    ],
    icon: "about",
    cta: "Open lab overview",
  },
  {
    href: "/research",
    label: "Research Directions",
    description:
      "The machine learning and deep learning directions that define the present focus of the lab.",
    points: [
      "Research pillars",
      "Methods and posture",
      "Current problem framing",
    ],
    icon: "research",
    cta: "Review directions",
  },
  {
    href: "/publications",
    label: "Publications",
    description:
      "A clean archive for journal and conference work, built to grow as the research output expands.",
    points: [
      "Journal and conference separation",
      "Structured publication cards",
      "A future-ready archive layout",
    ],
    icon: "publication",
    cta: "Browse publications",
  },
  {
    href: "/team",
    label: "Team",
    description:
      "The executive panel and the researcher area that represent the people behind the lab.",
    points: [
      "Executive structure",
      "Researcher directory placeholder",
      "Future image-ready member cards",
    ],
    icon: "team",
    cta: "Meet the team",
  },
  {
    href: "/contact",
    label: "Contact",
    description:
      "The full contact system for outreach, collaboration, and official public communication.",
    points: [
      "Official channels",
      "Contact guidance",
      "Message blueprint and process",
    ],
    icon: "contact",
    cta: "Open contact page",
  },
];

export const engineeringFocusAreas = [
  {
    title: "AI products and software systems",
    description:
      "The engineering department can eventually support products, internal platforms, and interfaces built on technical research capability.",
  },
  {
    title: "Platform thinking",
    description:
      "Engineering should make it easier to move from ideas and prototypes to reliable systems that others can use repeatedly.",
  },
  {
    title: "Applied delivery",
    description:
      "The long-term goal is not only to study problems, but also to ship carefully designed solutions when the organization is ready.",
  },
];

export const impactSectors = [
  {
    title: "Research and education tools",
    description:
      "Systems that help people learn faster, experiment more clearly, and work with stronger technical foundations.",
  },
  {
    title: "AI-assisted workflows",
    description:
      "Interfaces and automation layers that make technical work more accessible, traceable, and productive.",
  },
  {
    title: "Public-good technology",
    description:
      "Long-term exploration of where research and engineering can support meaningful, responsible outcomes beyond internal projects.",
  },
];

export const missionVisionBlocks = [
  {
    title: "Mission",
    description:
      "Build CollabCircle into an organization where disciplined research and thoughtful engineering reinforce each other.",
  },
  {
    title: "Vision",
    description:
      "Grow from a publication-oriented research group into a credible technology company with lasting impact by 2030.",
  },
  {
    title: "Operating promise",
    description:
      "Stay organized, ethical, collaborative, and quality-driven as the organization becomes broader and more capable.",
  },
];

export const aboutCompanyPoints = [
  "CollabCircle is being shaped with a two-department future in mind.",
  "Research Lab represents the present foundation and current public work.",
  "Engineering Hub creates room for future systems, products, and technical delivery.",
  "The website should already reflect that broader identity instead of only the current stage.",
];

export const joinPaths = [
  {
    title: "Join as a researcher",
    description:
      "Contribute to the current research-facing work through experiments, writing, analysis, and publication support.",
  },
  {
    title: "Join the future engineering track",
    description:
      "Help shape the software, product, and systems mindset that CollabCircle will need as it matures into a company.",
  },
  {
    title: "Collaborate long-term",
    description:
      "Partner with CollabCircle as a serious collaborator who values consistency, ownership, and long-horizon growth.",
  },
];
