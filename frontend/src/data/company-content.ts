export type AchievementItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string; // path relative to /public
  href?: string;
};

export type AchievementShowcaseSection = {
  id: string;
  title: string;
  intro: string;
  items: AchievementShowcaseItem[];
};

export type AchievementShowcaseItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string; // path relative to /public
};

// ✏️ Update this list to showcase your latest achievements on the homepage
export const latestAchievements: AchievementItem[] = [
  {
    id: "achievement-1",
    title: "CollabCircle Team Meetup",
    date: "March 2024",
    description: "Our research team gathered to align on upcoming milestones and celebrate progress together.",
    image: "/team-meetup.jpg.jpeg",
    href: "/achievements",
  },
];

export const achievementShowcaseSections: AchievementShowcaseSection[] = [
  {
    id: "team-meetups",
    title: "Team Meetups",
    intro: "Internal gatherings, planning sessions, and team moments documented through photos.",
    items: [
      {
        id: "team-meetup-2024",
        title: "CollabCircle Team Meetup",
        date: "March 2024",
        description:
          "A documented team meetup focused on alignment, coordination, and shared momentum across ongoing work.",
        image: "/team-meetup.jpg.jpeg",
      },
      {
        id: "team-meetup-archive-01",
        title: "Meetup Archive Entry",
        date: "To be updated",
        description:
          "Additional team meetup photographs and records will be published here as future sessions are documented.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "team-meetup-archive-02",
        title: "Activity Documentation Entry",
        date: "To be updated",
        description:
          "This slot is reserved for future internal activity records, group sessions, and meetup highlights.",
        image: "/achievement-placeholder.png",
      },
    ],
  },
  {
    id: "conference-moments",
    title: "Conference Moments",
    intro: "Photos and records from conferences, academic events, presentations, and public participation.",
    items: [
      {
        id: "conference-record-01",
        title: "Conference Participation Record",
        date: "To be updated",
        description:
          "Conference appearances, visits, and presentation-related moments will be displayed here as they are recorded.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "conference-record-02",
        title: "Event Documentation Entry",
        date: "To be updated",
        description:
          "This section supports multiple conference photos so event participation can be documented in a fuller way.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "conference-record-03",
        title: "Conference Archive Entry",
        date: "To be updated",
        description:
          "Additional conference and event records will appear here as more participation moments are documented.",
        image: "/achievement-placeholder.png",
      },
    ],
  },
  {
    id: "mvp-month",
    title: "MVP of the Month",
    intro: "Monthly recognition for standout contribution, consistency, ownership, and initiative.",
    items: [
      {
        id: "mvp-month-record-01",
        title: "Monthly MVP Recognition",
        date: "To be updated",
        description:
          "Monthly MVP records will be published here with a photo, recognition date, and a short summary of contribution.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "mvp-month-record-02",
        title: "Monthly Recognition Archive",
        date: "To be updated",
        description:
          "This grid is designed to hold multiple monthly recognition entries over time without overcrowding the page.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "mvp-month-record-03",
        title: "Monthly Achievement Entry",
        date: "To be updated",
        description:
          "Future monthly recognition records will be added here using the same picture, title, date, and description format.",
        image: "/achievement-placeholder.png",
      },
    ],
  },
  {
    id: "mvp-year",
    title: "MVP of the Year",
    intro: "Annual recognition for the most impactful and sustained contribution across the organization.",
    items: [
      {
        id: "mvp-year-record-01",
        title: "Annual MVP Recognition",
        date: "To be updated",
        description:
          "The annual MVP entry will highlight the contributor whose work had the strongest overall impact during the year.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "mvp-year-record-02",
        title: "Recognition Archive Entry",
        date: "To be updated",
        description:
          "Future annual recognition records will appear here with the same photo-first format for consistency and clarity.",
        image: "/achievement-placeholder.png",
      },
      {
        id: "mvp-year-record-03",
        title: "Annual Recognition Archive",
        date: "To be updated",
        description:
          "Additional yearly achievement records will be placed here as the archive of annual recognition grows.",
        image: "/achievement-placeholder.png",
      },
    ],
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

export type RecruitmentTrack = {
  id: string;
  title: string;
  description: string;
  audience: string;
  expectations: string[];
  googleFormUrl: string;
  ctaLabel: string;
};

export const primaryNavigation: NavigationItem[] = [
  {
    href: "/achievements",
    label: "Achievements",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/newsroom",
    label: "Newsroom",
  },
  {
    href: "/contact",
    label: "Contact Us",
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
    href: "/career",
    label: "Career",
    description: "For researchers, future engineers, and long-term collaborators.",
    icon: "join",
    cta: "Explore careers",
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
    description: "For builders interested in products, tooling, technical systems, and the future Engineering Hub direction.",
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
