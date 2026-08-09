export type NavigationItem = {
  href: string;
  label: string;
  matches?: string[];
};

export type FeatureLink = {
  href: string;
  label: string;
  description: string;
  icon: "research" | "engineering" | "impact" | "mission" | "about" | "join";
  cta: string;
};

export type RecruitmentTrack = {
  id: string;
  title: string;
  description: string;
  audience: string;
  expectations: string[];
  googleFormUrl: string;
  ctaLabel: string;
};

export type EngineeringService = {
  title: string;
  description: string;
  scope: string;
};

export type DevelopmentProject = {
  title: string;
  overview: string;
  client: string;
  startDate: string;
  endDate: string;
  status: "Planned" | "Ongoing" | "Halt" | "Completed";
  liveLink?: string;
  focus: string;
};
export const primaryNavigation: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/courses",
    label: "Courses",
  },
  {
    href: "/about-us",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const moreNavigation: NavigationItem[] = [
  {
    href: "/publications",
    label: "Publications",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/terms-of-use",
    label: "Terms of Use",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
];

export const landingFeatures: FeatureLink[] = [
  {
    href: "/publications",
    label: "Publications",
    description: "The public archive of CollabCircle's research-facing outputs.",
    icon: "research",
    cta: "Browse the archive",
  },
  {
    href: "/products",
    label: "Products",
    description: "The product-facing view of systems, tools, and delivery direction.",
    icon: "engineering",
    cta: "Browse products",
  },
];

export const companyLinks: FeatureLink[] = [
  {
    href: "/about-us",
    label: "About Us",
    description: "A concise view of the company-level identity.",
    icon: "about",
    cta: "Get the overview",
  },
  {
    href: "/career",
    label: "Career",
    description: "For researchers, future engineers, and long-term collaborators.",
    icon: "join",
    cta: "Explore careers",
  },
];

export const cognitiveCyberLabNavigation: NavigationItem[] = [
  {
    href: "/cognitive-cyber-lab",
    label: "Home",
  },
];

export const developmentServices: EngineeringService[] = [
  {
    title: "Applied AI & ML Integration",
    description: "Transitioning complex deep learning models into optimized, production-ready software systems. We build efficient inference pipelines that bring research to life.",
    scope: "AI deployment systems",
  },
  {
    title: "Enterprise Web Platforms",
    description: "Engineering robust, secure full-stack web architectures with advanced user workflows, administrative controls, and secure data layers.",
    scope: "Full-stack platforms",
  },
  {
    title: "Distributed Systems & Optimization",
    description: "Building scalable backend infrastructure, real-time data pipelines, and optimized caching layers designed to handle intensive operational workloads.",
    scope: "Backend infrastructure",
  },
  {
    title: "Agentic Workflow Automation",
    description: "Eliminating manual operational bottlenecks by engineering autonomous workflow pipelines. We integrate n8n, Zapier, and custom webhooks to orchestrate asynchronous tasks, sync multi-platform data, and automate business logic behind the scenes.",
    scope: "Workflow automation",
  },
  {
    title: "Intelligent Knowledge Systems",
    description: "Transforming fragmented institutional data into accessible intelligence. We build custom Retrieval-Augmented Generation (RAG) pipelines, secure semantic search engines, and multi-turn AI assistants designed to chat directly with proprietary databases safely.",
    scope: "Knowledge systems",
  },
  {
    title: "Immersive Gamification & Campaign Tech",
    description: "Driving viral brand engagement through interactive digital experiences. We engineer high-performance web campaign games, real-time interactive leaderboards, and generative AI marketing micro-apps built to scale instantly during high-traffic launches.",
    scope: "Campaign experiences",
  },
];

export const developmentProjects: DevelopmentProject[] = [
  {
    title: "CollabCircle Operations Core",
    overview:
      "A unified internal operations platform for researcher coordination, task visibility, approvals, and cross-wing activity tracking.",
    client: "CollabCircle Internal",
    startDate: "January 2026",
    endDate: "June 2026",
    status: "Planned",
    liveLink: "https://example.com/collabcircle-operations-core",
    focus: "Internal platform",
  },
  {
    title: "Applied AI Delivery Framework",
    overview:
      "A structured framework for turning research prototypes into production-ready APIs, deployment pipelines, and monitored delivery surfaces.",
    client: "AI Product Teams",
    startDate: "March 2026",
    endDate: "September 2026",
    status: "Planned",
    liveLink: "https://example.com/applied-ai-delivery-framework",
    focus: "AI delivery systems",
  },
  {
    title: "Secure Knowledge Assistant Stack",
    overview:
      "A private retrieval and assistant system designed to let teams query internal documents, workflows, and institutional knowledge safely.",
    client: "Research and Operations Teams",
    startDate: "May 2026",
    endDate: "November 2026",
    status: "Ongoing",
    liveLink: "https://example.com/secure-knowledge-assistant-stack",
    focus: "Knowledge systems",
  },
  {
    title: "Campaign Experience Engine",
    overview:
      "A reusable build system for high-performance branded microsites, interactive campaign games, and real-time engagement tracking.",
    client: "Consumer Brand Partners",
    startDate: "January 2027",
    endDate: "August 2027",
    status: "Planned",
    liveLink: "https://example.com/campaign-experience-engine",
    focus: "Campaign technology",
  },
  {
    title: "Workflow Automation Control Layer",
    overview:
      "A modular orchestration layer for automating lead flow, approvals, task routing, and cross-platform data synchronization.",
    client: "Operations and Logistics Teams",
    startDate: "April 2027",
    endDate: "December 2027",
    status: "Halt",
    liveLink: "https://example.com/workflow-automation-control-layer",
    focus: "Automation infrastructure",
  },
];


export const engineeringTeamTracks = [
  {
    title: "Executive oversight",
    description: "Current executive leadership keeps the direction visible while the engineering structure is still forming.",
  },
  {
    title: "Future engineering leads",
    description: "This section is designed to support dedicated engineering leadership as the department becomes more active.",
  },
  {
    title: "Builders and contributors",
    description: "The page is ready to scale toward engineers, product-minded builders, and technical collaborators later.",
  },
];

export const impactSectors = [
  {
    title: "Education",
    description: "Tools and systems that support learning and technical growth.",
  },
  {
    title: "AI workflows",
    description: "Interfaces that make technical work more effective and traceable.",
  },
  {
    title: "Public value",
    description: "Responsible technology shaped around meaningful practical use.",
  },
];

export const missionVisionBlocks = [
  {
    title: "Mission",
    description: "Build a disciplined organization where research and development strengthen each other.",
  },
  {
    title: "Vision",
    description: "Grow CollabCircle into a credible technology company by 2030.",
  },
  {
    title: "Promise",
    description: "Stay organized, ethical, and quality-driven while the company expands.",
  },
];

export const aboutCompanyPoints = [
  "Research Lab is the current public foundation.",
  "Products and solutions represent the future build layer.",
  "The website should already reflect both realities.",
];

export const recruitmentTracks: RecruitmentTrack[] = [
  {
    id: "researcher",
    title: "Researcher",
    description: "For contributors focused on experiments, literature review, technical writing, and publication work.",
    audience: "Choose this track if you want to work on machine learning and deep learning research with a publication-minded workflow.",
    expectations: [
      "Comfort with experiments, analysis, or technical writing",
      "Ability to document progress and communicate clearly",
      "Interest in disciplined, long-term research collaboration",
    ],
    googleFormUrl: "https://forms.gle/A3ZjsV2HFrGBiCq17",
    ctaLabel: "Apply as Researcher",
  },
  {
    id: "engineer",
    title: "Engineer",
    description: "For builders interested in products, tooling, technical systems, and long-term delivery direction.",
    audience: "Choose this track if you want to help translate ideas into software, systems, and durable technical delivery.",
    expectations: [
      "Comfort with implementation, debugging, or platform thinking",
      "Ability to work through structured technical tasks responsibly",
      "Interest in building systems that can grow beyond one-off experiments",
    ],
    googleFormUrl: "https://forms.gle/ZCtv8TFLPzQUuAgeA",
    ctaLabel: "Apply as Engineer",
  },
];

export const recruitmentProcess = [
  {
    step: "01",
    title: "Choose your track",
    description: "Pick the role that best matches how you want to contribute right now: Researcher or Engineer.",
  },
  {
    step: "02",
    title: "Submit the Google Form",
    description: "Complete the relevant form with clear information about your background, skills, and intended contribution.",
  },
  {
    step: "03",
    title: "Manual review",
    description: "Submissions are reviewed manually, and shortlisted applicants will be contacted through the information they provide.",
  },
];
