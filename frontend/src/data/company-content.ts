export type AchievementItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string; // path relative to /public
  href?: string;
};

// ✏️ Update this list to showcase your latest achievements on the homepage
export const latestAchievements: AchievementItem[] = [
  {
    id: "achievement-1",
    title: "2024 Research Excellence Award",
    date: "March 2024",
    description: "CollabCircle recognised for outstanding contribution to collaborative AI research methodology.",
    image: "/achievement-placeholder.png",
    href: "/achievements",
  },
];

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

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/achievements",
    label: "Achievements",
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

export const landingFeatures: FeatureLink[] = [
  {
    href: "/research-lab",
    label: "Research Lab",
    description: "The active research-facing side of CollabCircle.",
    icon: "research",
    cta: "Enter the lab",
  },
  {
    href: "/engineering-hub",
    label: "Engineering Hub",
    description: "The future home for products, systems, and technical delivery.",
    icon: "engineering",
    cta: "See the direction",
  },
  {
    href: "/impact-sector",
    label: "Impact Sector",
    description: "Where research and engineering can create visible value over time.",
    icon: "impact",
    cta: "View sectors",
  },
];

export const companyLinks: FeatureLink[] = [
  {
    href: "/mission-vision",
    label: "Mission & Vision",
    description: "The long-range direction behind the organization.",
    icon: "mission",
    cta: "Read the mission",
  },
  {
    href: "/about-us",
    label: "About Us",
    description: "A concise view of the company-level identity.",
    icon: "about",
    cta: "Get the overview",
  },
  {
    href: "/join-us",
    label: "Join Us",
    description: "For researchers, future engineers, and long-term collaborators.",
    icon: "join",
    cta: "See how to join",
  },
];

export const researchLabLinks = [
  { href: "/about", label: "About", description: "Why the lab exists and how it works." },
  { href: "/research", label: "Research", description: "Current focus areas and methods." },
  { href: "/publications", label: "Publications", description: "Journal and conference records." },
  { href: "/team", label: "Team", description: "Executive panel and researcher structure." },
  { href: "/contact", label: "Contact", description: "Official channels and collaboration path." },
];

export const engineeringFocusAreas = [
  {
    title: "Products and tools",
    description: "A future space for software, platforms, and AI-enabled systems.",
  },
  {
    title: "Applied delivery",
    description: "Turning technical capability into durable user-facing outcomes.",
  },
  {
    title: "Platform thinking",
    description: "Building systems that can scale beyond one-off experiments.",
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
    description: "Build a disciplined organization where research and engineering strengthen each other.",
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
  "Engineering Hub is the future build layer.",
  "The website should already reflect both realities.",
];

export const joinPaths = [
  {
    title: "Research track",
    description: "For contributors focused on experiments, writing, and publication work.",
  },
  {
    title: "Engineering track",
    description: "For future builders interested in products, tooling, and technical systems.",
  },
  {
    title: "Long-term collaboration",
    description: "For serious partners who want to grow with CollabCircle over time.",
  },
];
