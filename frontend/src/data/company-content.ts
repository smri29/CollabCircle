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

export type ResearchProject = {
  title: string;
  summary: string;
  status: "ongoing" | "completed";
  focus: string;
};

export type ResearchPolicyBlock = {
  title: string;
  description: string;
};

export type EngineeringService = {
  title: string;
  description: string;
  scope: string;
};

export type EngineeringClientGroup = {
  title: string;
  description: string;
  fit: string;
};

export type EngineeringTechnology = {
  title: string;
  description: string;
  tags: string[];
};

export type EngineeringPolicyBlock = {
  title: string;
  description: string;
};

export type EngineeringRoadmapBlock = {
  title: string;
  description: string;
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
  { href: "/research-lab/research", label: "Research", description: "Current focus areas and methods." },
  { href: "/research-lab/publications", label: "Publications", description: "Journal and conference records." },
  { href: "/research-lab/team", label: "Team", description: "Executive panel and researcher structure." },
  { href: "/contact", label: "Contact", description: "Official channels and collaboration path." },
];

export const researchWingNavigation: NavigationItem[] = [
  {
    href: "/research-lab",
    label: "Research Home",
  },
  {
    href: "/research-lab/publications",
    label: "Publications",
  },
  {
    href: "/research-lab/research",
    label: "Research Tracks",
  },
  {
    href: "/research-lab/projects",
    label: "Projects",
  },
  {
    href: "/research-lab/team",
    label: "Team",
  },
  {
    href: "/research-lab/policy",
    label: "Policy",
  },
];

export const researchWingHighlights = [
  {
    label: "Publications",
    description: "Journal and conference outputs stay organized under one research-facing archive.",
    href: "/research-lab/publications",
  },
  {
    label: "Research Tracks",
    description: "Core ML and DL directions stay visible so visitors understand what the wing is building toward.",
    href: "/research-lab/research",
  },
  {
    label: "Projects",
    description: "Ongoing and completed work remains separated so current momentum is easy to read.",
    href: "/research-lab/projects",
  },
  {
    label: "Team",
    description: "Leadership and researcher structure stay clear for collaborators and future applicants.",
    href: "/research-lab/team",
  },
  {
    label: "Policy",
    description: "Research standards, ethics, and collaboration expectations stay public and explicit.",
    href: "/research-lab/policy",
  },
];

export const researchProjects: ResearchProject[] = [
  {
    title: "Data-Centric Benchmark Refinement",
    summary: "An ongoing effort to improve evaluation quality through cleaner datasets, tighter baselines, and better error analysis.",
    status: "ongoing",
    focus: "Machine learning evaluation",
  },
  {
    title: "Efficient Model Training Workflow",
    summary: "A structured training workflow focused on reproducibility, experiment tracking, and practical efficiency decisions.",
    status: "ongoing",
    focus: "Deep learning systems",
  },
  {
    title: "Publication Preparation Pipeline",
    summary: "A repeatable workflow for turning experiments, figures, and findings into submission-ready research outputs.",
    status: "ongoing",
    focus: "Research operations",
  },
  {
    title: "Internal Research Structure Rollout",
    summary: "Completed internal work to organize the public-facing research wing around tracks, outputs, and long-term readability.",
    status: "completed",
    focus: "Research organization",
  },
  {
    title: "Research Wing Website Foundation",
    summary: "Completed foundational work to present the research department as a coherent destination with its own navigation and pages.",
    status: "completed",
    focus: "Public communication",
  },
];

export const researchPolicyBlocks: ResearchPolicyBlock[] = [
  {
    title: "Research integrity",
    description: "Claims should remain evidence-based, readable, and proportionate to the actual results produced.",
  },
  {
    title: "Documentation standard",
    description: "Methods, assumptions, and decisions should remain visible so work can be reviewed and reproduced more easily.",
  },
  {
    title: "Ethics and responsibility",
    description: "Research direction should respect responsible use, clear authorship, and honest reporting of limitations.",
  },
  {
    title: "Collaboration discipline",
    description: "Contributors are expected to communicate consistently, maintain organized records, and work through feedback responsibly.",
  },
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

export const engineeringWingNavigation: NavigationItem[] = [
  {
    href: "/engineering-hub",
    label: "Engineering Home",
  },
  {
    href: "/engineering-hub/solutions-services",
    label: "Solutions & Services",
  },
  {
    href: "/engineering-hub/clients",
    label: "Clients",
  },
  {
    href: "/engineering-hub/technologies",
    label: "Technologies",
  },
  {
    href: "/engineering-hub/team",
    label: "Team",
  },
  {
    href: "/engineering-hub/policy",
    label: "Policy",
  },
  {
    href: "/engineering-hub/roadmap",
    label: "Roadmap",
  },
];

export const engineeringWingHighlights = [
  {
    label: "Solutions & Services",
    description: "The public-facing services and solution categories that define what the engineering department aims to deliver.",
    href: "/engineering-hub/solutions-services",
  },
  {
    label: "Clients",
    description: "The types of organizations and teams the department is being shaped to support over time.",
    href: "/engineering-hub/clients",
  },
  {
    label: "Technologies",
    description: "The technical stack directions and platform capabilities the hub intends to build around.",
    href: "/engineering-hub/technologies",
  },
  {
    label: "Team",
    description: "Executive oversight today, with a structure ready for future engineering leads and contributors.",
    href: "/engineering-hub/team",
  },
  {
    label: "Policy",
    description: "Delivery principles, technical standards, and operating expectations that should guide the department.",
    href: "/engineering-hub/policy",
  },
  {
    label: "Roadmap",
    description: "The mission and vision that define how the engineering side should grow from future capability to real execution.",
    href: "/engineering-hub/roadmap",
  },
];

export const engineeringServices: EngineeringService[] = [
  {
    title: "AI-enabled internal tools",
    description: "Operational tools that help teams automate workflows, improve visibility, and reduce repeated manual effort.",
    scope: "Internal productivity systems",
  },
  {
    title: "Product prototyping",
    description: "Early-stage product architecture and prototype work designed to translate promising ideas into testable software systems.",
    scope: "Product incubation",
  },
  {
    title: "Applied platform delivery",
    description: "Structured technical delivery aimed at turning research-adjacent capability into durable user-facing systems.",
    scope: "Platforms and services",
  },
];

export const engineeringClientGroups: EngineeringClientGroup[] = [
  {
    title: "Internal CollabCircle teams",
    description: "The first engineering clients are likely to be internal research and operational teams that need clearer tooling and systems.",
    fit: "Immediate and strategic",
  },
  {
    title: "Education and knowledge organizations",
    description: "Institutions that benefit from structured tools, applied AI workflows, and practical software support are a strong long-term fit.",
    fit: "High long-term relevance",
  },
  {
    title: "Mission-aligned partners",
    description: "Future external collaborators who need thoughtful technical delivery rather than generic development outsourcing.",
    fit: "Selective and relationship-led",
  },
];

export const engineeringTechnologies: EngineeringTechnology[] = [
  {
    title: "Application platforms",
    description: "Modern web application foundations for building internal tools, dashboards, portals, and product surfaces.",
    tags: ["frontend systems", "backend services", "deployment"],
  },
  {
    title: "AI workflow infrastructure",
    description: "Technical systems that make model-assisted work more usable, observable, and maintainable.",
    tags: ["automation", "monitoring", "human-in-the-loop"],
  },
  {
    title: "Data and integration layers",
    description: "Connective systems for data flow, service integration, and operational traceability.",
    tags: ["data pipelines", "APIs", "system integration"],
  },
];

export const engineeringPolicyBlocks: EngineeringPolicyBlock[] = [
  {
    title: "Delivery clarity",
    description: "Engineering work should be understandable in scope, ownership, and expected outcome before implementation begins.",
  },
  {
    title: "Maintainable systems",
    description: "The department should prefer readable architecture and clean operational decisions over rushed complexity.",
  },
  {
    title: "Responsible implementation",
    description: "AI-enabled or data-enabled systems should be designed with accountability, reviewability, and practical safeguards in mind.",
  },
  {
    title: "Execution discipline",
    description: "Documentation, testing posture, and handoff quality should be treated as part of the engineering standard itself.",
  },
];

export const engineeringRoadmapBlocks: EngineeringRoadmapBlock[] = [
  {
    title: "Vision",
    description: "Grow the Engineering Hub into a credible product and systems department that can carry CollabCircle from research strength into real-world technical execution.",
  },
  {
    title: "Mission",
    description: "Build disciplined software, tooling, and platform capability that turns ideas into durable delivery.",
  },
  {
    title: "Near-term direction",
    description: "Start with internal tools, applied workflows, and architecture foundations before expanding into broader external-facing systems.",
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
