const envValue = (value: string | undefined) => value?.trim() || undefined;

export const siteMeta = {
  name: "CollabCircle",
  tagline: "Research, engineering, and long-term impact.",
  description:
    "CollabCircle is a future-ready organization growing from a research foundation toward engineering and broader impact.",
  email: envValue(process.env.Gmail) ?? "",
};

const socialProfiles = {
  linkedin: envValue(process.env.Linkedin) ?? "",
  facebook: envValue(process.env.Facebook) ?? "",
  instagram: envValue(process.env.Instagram) ?? "",
  youtube: envValue(process.env.Youtube) ?? "",
  x: envValue(process.env.x) ?? "",
  github: envValue(process.env.Github) ?? "",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: socialProfiles.linkedin,
  },
  {
    label: "X",
    href: socialProfiles.x,
  },
  {
    label: "GitHub",
    href: socialProfiles.github,
  },
  {
    label: "Facebook",
    href: socialProfiles.facebook,
  },
  {
    label: "Instagram",
    href: socialProfiles.instagram,
  },
  {
    label: "YouTube",
    href: socialProfiles.youtube,
  },
].filter((item): item is { label: string; href: string } => Boolean(item.href));

export const youtubeChannelHref = socialProfiles.youtube ?? "";

export type YouTubeShowcaseVideo = {
  title: string;
  embedUrl: string;
};

export const youtubeShowcaseVideos: YouTubeShowcaseVideo[] = [];

export type ResearchPillar = {
  title: string;
  description: string;
  tags: string[];
  image?: string | null;
};

export const heroSignals = [
  {
    value: "Research-first",
    label: "Clear questions before execution.",
  },
  {
    value: "Structured",
    label: "Decisions stay visible.",
  },
  {
    value: "Scalable",
    label: "Built to grow into more.",
  },
];

export const researchPillars: ResearchPillar[] = [
  {
    title: "Data-Centric Machine Learning",
    description: "Better data design before bigger models.",
    tags: ["benchmark design", "error analysis", "robust evaluation"],
    image: null,
  },
  {
    title: "Efficient Deep Learning Systems",
    description: "Sharper models with cleaner training decisions.",
    tags: ["parameter efficiency", "distillation", "training pipelines"],
    image: null,
  },
  {
    title: "Applied Intelligence Workflows",
    description: "Interfaces, systems, and applied model workflows.",
    tags: ["deployment framing", "monitoring", "human-in-the-loop"],
    image: null,
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Frame the problem",
    description: "Set the question and evaluation boundary.",
  },
  {
    step: "02",
    title: "Build the evidence",
    description: "Run experiments that stay reviewable.",
  },
  {
    step: "03",
    title: "Shape the narrative",
    description: "Turn results into a clean research story.",
  },
  {
    step: "04",
    title: "Submit with confidence",
    description: "Polish the work before submission.",
  },
];

export const principles = [
  {
    title: "Small teams, strong accountability",
    description: "Clear ownership helps quality stay high.",
  },
  {
    title: "Readable systems win",
    description: "Work should stay understandable to others.",
  },
  {
    title: "Aesthetic clarity matters",
    description: "Presentation is part of the standard.",
  },
];

export const publicationStandards = [
  {
    title: "Original contribution",
    description: "A real contribution with a clear claim.",
  },
  {
    title: "Reproducible methodology",
    description: "Methods should be easy to follow and repeat.",
  },
  {
    title: "Reviewer-ready presentation",
    description: "Clean structure helps work earn trust.",
  },
];

export const outputFormats = [
  {
    title: "Conference papers",
    description: "Compact work with a sharp experimental story.",
  },
  {
    title: "Journal articles",
    description: "Longer studies with deeper analysis.",
  },
  {
    title: "Research assets",
    description: "Supporting assets that make the work reusable.",
  },
];

export const teamRoles = [
  {
    title: "Research direction",
    description: "Keeps scope, ambition, and standards aligned.",
  },
  {
    title: "Experiment ownership",
    description: "Builds and validates the empirical side.",
  },
  {
    title: "Technical writing",
    description: "Turns results into readable papers.",
  },
  {
    title: "Collaboration support",
    description: "Keeps documentation and handoff clean.",
  },
];

export const collaborationChecklist = [
  "Clear research area and intended contribution",
  "Comfort with writing, coding, or experiment execution",
  "Consistency in communication and weekly follow-through",
  "Respect for documentation, ethics, and review feedback",
];

export type TeamMember = {
  name: string;
  role: string;
  imagePublicId: string | null;
  institution?: string;
  profession?: string;
  linkedinHref?: string;
};

export type FounderProfile = {
  name: string;
  role: string;
  description: string;
  imagePublicId: string | null;
  linkedinHref: string;
};

export type ExecutivePanelMember = {
  id:
    | "ceo"
    | "cfo"
    | "coo"
    | "cyber"
    | "advisor"
    | "product"
    | "research"
    | "vp"
    | "qa";
  name: string;
  roleLines: string[];
  linkedinHref: string;
};

export const executiveMembers: TeamMember[] = [
  {
    name: "Sumaiya Alam Shorna",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Shah Mohammad Rizvi",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Founder and Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Rumi Akter",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Rimo Bhuiyan",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Md. Aman Uddin Siyam",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Sumaiya Islam Mily",
    role: "Executive",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Research Executive",
    linkedinHref: socialProfiles.linkedin,
  },
];

export const founderProfile: FounderProfile = {
  name: "Shah Mohammad Rizvi",
  role: "Founder & President, CollabCircle",
  description:
    "Shah Mohammad Rizvi leads the long-term founding vision of CollabCircle and helps shape its organizational direction.",
  imagePublicId: null,
  linkedinHref: socialProfiles.linkedin,
};

export const executivePanelMembers: ExecutivePanelMember[] = [
  {
    id: "ceo",
    name: "Shah Mohammad Rizvi",
    roleLines: ["Chief Executive Officer", "(CEO) & Lead Architect"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "cfo",
    name: "Sumaiya Alam Shorna",
    roleLines: ["Chief Financial Officer", "(CFO) & Financial Analyst"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "coo",
    name: "Ummay Saima",
    roleLines: ["Chief Operating Officer", "(COO) & Chief of Staff"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "cyber",
    name: "Saymon Hasan",
    roleLines: ["Director of Cybersecurity Operations"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "advisor",
    name: "Rimo Bhuiyan",
    roleLines: ["Operations Advisor &", "Board Consultant"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "product",
    name: "Sumaiya Islam Mily",
    roleLines: ["Associate Product Manager", "& Business Analyst"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "research",
    name: "Nur A Jannat Shuchi",
    roleLines: ["Director of Research &", "Artificial Intelligence (R&D)"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "vp",
    name: "Md. Aman Uddin Siyam",
    roleLines: ["Vice President (VP) of", "Software Engineering"],
    linkedinHref: socialProfiles.linkedin,
  },
  {
    id: "qa",
    name: "Rumi Akter",
    roleLines: ["QA Associate"],
    linkedinHref: socialProfiles.linkedin,
  },
];

export const companyCoFounders: FounderProfile[] = [
  {
    name: "Sumaiya Alam Shorna",
    role: "Co-Founder, CollabCircle",
    description:
      "Part of the early leadership group helping shape the public foundation, discipline, and collaborative culture of CollabCircle.",
    imagePublicId: null,
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Rumi Akter",
    role: "Co-Founder, CollabCircle",
    description:
      "Supports the early institutional structure of CollabCircle through founding-level commitment and executive participation.",
    imagePublicId: null,
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Rimo Bhuiyan",
    role: "Co-Founder, CollabCircle",
    description:
      "Contributes to the early growth and organizational grounding of CollabCircle as part of its founding group.",
    imagePublicId: null,
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Md. Aman Uddin Siyam",
    role: "Co-Founder, CollabCircle",
    description:
      "Helps establish the company's early structure, direction, and continuity as part of the founding leadership team.",
    imagePublicId: null,
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Sumaiya Islam Mily",
    role: "Co-Founder, CollabCircle",
    description:
      "Part of the founding group supporting CollabCircle's early development and long-term organizational identity.",
    imagePublicId: null,
    linkedinHref: socialProfiles.linkedin,
  },
];

export const productCoFounders: FounderProfile[] = [
  {
    name: "Aarav Sen",
    role: "Co-Founder, CollabCircle",
    description:
      "Part of the early co-founding group shaping CollabCircle's delivery standards, systems direction, and long-term execution culture.",
    imagePublicId: null,
    linkedinHref: "https://www.linkedin.com/in/aarav-sen-placeholder/",
  },
  {
    name: "Nadia Rahman",
    role: "Co-Founder, CollabCircle",
    description:
      "Supports the product-facing structure through founding-level planning around products, tooling, and technical organization.",
    imagePublicId: null,
    linkedinHref: "https://www.linkedin.com/in/nadia-rahman-placeholder/",
  },
  {
    name: "Ishaan Malik",
    role: "Co-Founder, CollabCircle",
    description:
      "Contributes to the early product and delivery vision by helping define scalable technical practices and the operational discipline expected from this side of the organization.",
    imagePublicId: null,
    linkedinHref: "https://www.linkedin.com/in/ishaan-malik-placeholder/",
  },
];

export const currentResearchers: TeamMember[] = [
  {
    name: "Nur-A-Jannat Shuchi",
    role: "Researcher",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Researcher",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Saymon Hasan",
    role: "Researcher",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Researcher",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Sifat Hasan",
    role: "Researcher",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Researcher",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Sheikh Samiya Samad Joya",
    role: "Researcher",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Researcher",
    linkedinHref: socialProfiles.linkedin,
  },
  {
    name: "Nondita Devnath",
    role: "Researcher",
    imagePublicId: null,
    institution: "CollabCircle",
    profession: "Researcher",
    linkedinHref: socialProfiles.linkedin,
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
    description: "Primary channel for collaborations, inquiries, and formal communication.",
  },
  {
    label: "LinkedIn",
    value: "CollabCircle Official",
    href: socialProfiles.linkedin,
    description: "Professional updates and public visibility.",
  },
  {
    label: "Facebook",
    value: "collabcircle.official",
    href: socialProfiles.facebook,
    description: "Public updates and community presence.",
  },
  {
    label: "X",
    value: "@CollabCircle1",
    href: socialProfiles.x,
    description: "Short updates, public notes, and broader visibility.",
  },
  {
    label: "Instagram",
    value: "@collabcircle.official",
    href: socialProfiles.instagram,
    description: "Visual snapshots and organization moments.",
  },
  {
    label: "GitHub",
    value: "CollabCircle-Official",
    href: socialProfiles.github,
    description: "Code, repositories, and public technical presence.",
  },
  {
    label: "YouTube",
    value: "@collabcircle.official",
    href: socialProfiles.youtube,
    description: "Video content and future public communication.",
  },
].filter((channel): channel is { label: string; value: string; href: string; description: string } =>
  Boolean(channel.value && channel.href),
);

export const contactPurposes = [
  {
    title: "Research collaboration",
    description: "Discuss a paper idea or shared research direction.",
  },
  {
    title: "Joining as a contributor",
    description: "Share your background and what you can own.",
  },
  {
    title: "Partnerships and visibility",
    description: "Use official channels for partnerships and visibility.",
  },
];

export const contactProcess = [
  {
    step: "01",
    title: "Choose the right channel",
    description: "Use email for serious outreach.",
  },
  {
    step: "02",
    title: "Keep the message specific",
    description: "Say what you want clearly.",
  },
  {
    step: "03",
    title: "Make the next step obvious",
    description: "Make the next step easy to understand.",
  },
];

export const contactMessageBlueprint = [
  "A short introduction with your name and background",
  "The reason you are contacting CollabCircle",
  "Your relevant skills, experience, or research interest",
  "A clear next step you want to discuss",
];
