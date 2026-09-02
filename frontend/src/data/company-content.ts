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
    href: "/campaigns",
    label: "Campaigns",
  },
];

export const eLearnNavigation: NavigationItem = {
  href: "/elearn",
  label: "eLearn",
};

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
    href: "/join-us",
    label: "Career",
    description: "For researchers, future engineers, and long-term collaborators.",
    icon: "join",
    cta: "Explore careers",
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
    description: "Shape CollabCircle into a high-tech company where research, engineering, and cybersecurity grow together with clarity and purpose.",
  },
  {
    title: "Promise",
    description: "Stay disciplined, ethical, and quality-driven as the company grows and evolves.",
  },
];

export const aboutCompanyPoints = [
  "Research Lab is the current public foundation.",
  "Products and solutions represent the future build layer.",
  "The website should already reflect both realities.",
];
