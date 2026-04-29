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
  description: string;
  status: "ongoing" | "completed";
  image?: string | null;
  liveLink?: string;
  teamMembers: string[];
};

export type ResearchCollaboration = {
  name: string;
  profession: string;
  institution: string;
  image?: string | null;
  projectName: string;
  linkedinHref?: string;
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
    label: "Home",
  },
  {
    href: "/research-lab/publications",
    label: "Publications",
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
    description: "An ongoing effort to improve evaluation quality through cleaner datasets, tighter baselines, and better error analysis.",
    status: "ongoing",
    image: null,
    liveLink: "https://example.com/data-centric-benchmark-refinement",
    teamMembers: ["Shah Mohammad Rizvi", "Sumaiya Alam Shorna"],
  },
  {
    title: "Efficient Model Training Workflow",
    description: "A structured training workflow focused on reproducibility, experiment tracking, and practical efficiency decisions.",
    status: "ongoing",
    image: null,
    liveLink: "https://example.com/efficient-model-training-workflow",
    teamMembers: ["Rumi Akter", "Rimo Bhuiyan"],
  },
  {
    title: "Publication Preparation Pipeline",
    description: "A repeatable workflow for turning experiments, figures, and findings into submission-ready research outputs.",
    status: "ongoing",
    image: null,
    liveLink: "https://example.com/publication-preparation-pipeline",
    teamMembers: ["Md. Aman Uddin Siyam", "Sumaiya Islam Mily"],
  },
  {
    title: "Internal Research Structure Rollout",
    description: "Completed internal work to organize the public-facing research wing around tracks, outputs, and long-term readability.",
    status: "completed",
    image: null,
    liveLink: "https://example.com/internal-research-structure-rollout",
    teamMembers: ["Shah Mohammad Rizvi", "Rumi Akter"],
  },
  {
    title: "Research Wing Website Foundation",
    description: "Completed foundational work to present the research department as a coherent destination with its own navigation and pages.",
    status: "completed",
    image: null,
    liveLink: "https://example.com/research-wing-website-foundation",
    teamMembers: ["Sumaiya Alam Shorna", "Rimo Bhuiyan"],
  },
];

export const researchCollaborations: ResearchCollaboration[] = [];

export const researchPolicyBlocks: ResearchPolicyBlock[] = [
  {
    title: "Membership Policy",
    description:
      "CollabCircle is founded by one Founder (President) and five Co-Founders. Everyone actively involved in research is treated as a Researcher. New Researchers are admitted at the President's discretion through a probationary process: they are assigned to a conference or journal project under supervision, evaluated after the project outcome, and may receive an offer only after successful review and signing the official Researcher Agreement. All members are engaged as independent contractors, must follow research, confidentiality, and professionalism expectations, and are expected to meet a yearly publication minimum of two conference papers or one journal paper.",
  },
  {
    title: "Organizational Structure and Roles",
    description:
      "The President serves as the strategic head and final decision-maker of CollabCircle, including defining the research agenda, initiating projects, forming teams, approving papers before submission, and representing the organization externally. Co-Founders and other Researchers are responsible for hands-on technical work, analysis, experimentation, and writing. For specific projects, the President may assign a temporary Team Lead who coordinates researchers, tracks progress, and reports directly to the President. A typical project team includes three CollabCircle Researchers and one external faculty member or supervisor, although the President may change this structure based on project needs.",
  },
  {
    title: "Research and Project Management Policy",
    description:
      "Research projects may come from the President's vision or from Co-Founder proposals, but final approval rests with the President. Once approved, the project lead is expected to define objectives, scope, team responsibilities, milestones, and a strategy for data, experiments, and analysis. Researchers are required to communicate openly, participate in meetings, share progress and problems transparently, and use designated internal communication channels. Code must be maintained under version control, documentation of code and experiments is mandatory, research data must be stored securely and consistently, and any new resource needs must be submitted for approval.",
  },
  {
    title: "Publication and Authorship Policy",
    description:
      "Every project is expected to work toward a publishable manuscript. Authorship is based on significant intellectual contribution, including areas such as project conception, data acquisition or analysis, drafting or revising the manuscript, final approval, and accountability for the work. Author order is decided by the project team together with the President, with disagreements settled by the President before submission. Manuscripts must go through internal review before submission, and the President has the final say on the target venue and whether the paper is ready to submit. The policy also requires originality, forbids fabrication or falsification of data, requires enough transparency for reproducibility, and requires disclosure of conflicts of interest.",
  },
  {
    title: "Intellectual Property (IP) Policy",
    description:
      "Research papers, models, code, datasets, methods, and inventions created during CollabCircle projects belong to CollabCircle. Individual contributors still receive recognition through authorship under the publication policy, but use or distribution of CollabCircle IP outside official publication requires written permission from the President. Pre-existing intellectual property brought in by a member remains that member's property, but it must be disclosed before use in a project. Decisions about open-sourcing are made project by project by the President.",
  },
  {
    title: "Communication Policy",
    description:
      "Project teams are expected to use designated digital channels such as Messenger, WhatsApp, or Discord for day-to-day discussion, while organization-level announcements are communicated through a central channel. Team Leads are responsible for regular meetings. Any official external communication, including public statements, formal collaboration outreach, or media interaction, must be approved by or routed through the President.",
  },
  {
    title: "Confidentiality and Data Privacy",
    description:
      "Members may have access to unpublished findings, proprietary data, internal strategies, and other confidential materials. They are required to protect that information from unauthorized disclosure during and after their involvement with CollabCircle. Where research involves sensitive or personal data, members must follow relevant privacy and data-protection rules, store information securely, and immediately report any suspected confidentiality or security breach. Unless explicitly authorized by the President, confidential CollabCircle information must not be discussed outside the organization.",
  },
  {
    title: "Conduct and Professionalism",
    description:
      "CollabCircle states that it must remain a respectful, inclusive, and professional environment. Discrimination, harassment, and bullying are not tolerated. Members are expected to act with integrity, accountability, cooperation, and professional behavior, and to resolve conflicts through constructive dialogue. They must also comply with applicable laws and regulations. Serious violations, especially around ethics, confidentiality, or conduct, can lead to disciplinary action or termination at the President's discretion.",
  },
  {
    title: "Policy Review and Amendments",
    description:
      "The organization policy is to be reviewed at least once each year by the President and Co-Founders. The document specifically states that the first review should be completed by June 15, 2026. Amendments or modifications may only be made by the President, in consultation with the Co-Founders.",
  },
  {
    title: "Financial Management and Funding Policy",
    description:
      "The President holds final authority over financial matters. Funding may be pursued through grants, sponsorships, or donations, but funding proposals and applications must be approved by the President. Significant expenditures also require prior approval, and financial records are to be maintained transparently. Resources are meant to support the core mission, including compute, licenses, data access, and conference costs. The policy also states that CollabCircle currently operates as a non-profit, non-equity organization, and that any future for-profit transition would require a separate agreement. Founder, Co-Founders, and full Researchers are required to contribute to shared tool and service costs, while probationary candidates are exempt.",
  },
  {
    title: "Training and Development Policy",
    description:
      "CollabCircle says it is committed to the continuous learning and professional development of its members. This may include internal knowledge sharing, mentorship, access to learning resources, and support for conference participation. At the same time, the policy makes clear that each member remains individually responsible for their own professional growth.",
  },
  {
    title: "Open Science and Data Sharing Policy",
    description:
      "The policy supports open science where appropriate. It encourages pre-print submission, including on platforms such as arXiv, as long as the same internal review and approval process is followed. It also strongly encourages code and trained model release for published papers, and seeks to make datasets publicly available when legal, ethical, privacy, or confidentiality restrictions do not prevent it. Members are also expected to make sure that open release does not expose confidential or sensitive information.",
  },
  {
    title: "Conflict of Interest Policy",
    description:
      "A conflict of interest is defined as a situation where a member's personal interests could influence, or appear to influence, their professional judgment. Members are required to disclose actual, potential, or perceived conflicts to the President as soon as they become aware of them. After disclosure, the President decides how the conflict will be managed, which may include recusal, role changes, or a formal management plan.",
  },
  {
    title: "Offboarding and Departure Policy",
    description:
      "Members who plan to leave CollabCircle are expected to provide reasonable advance notice, such as 30 to 60 days, to help with transition planning. Before departure, they must document ongoing work properly, transfer knowledge, and return CollabCircle documents, data, and access credentials. Confidentiality obligations continue after departure. The policy also states that departing members should still be acknowledged in ongoing or future publications that come from work they contributed to.",
  },
  {
    title: "Official Channels and Contact",
    description:
      "The document states that official external communication must be managed by the President and lists the approved public channels for CollabCircle. These include the primary email address `collabcircle.official@gmail.com`, the official LinkedIn page, Facebook page, Instagram profile, and YouTube channel.",
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
    label: "Home",
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
