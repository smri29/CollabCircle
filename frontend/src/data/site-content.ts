export const siteMeta = {
  name: "CollabCircle",
  tagline: "Research, engineering, and long-term impact.",
  description:
    "CollabCircle is a future-ready organization growing from a research foundation toward engineering and broader impact.",
  email: "collabcircle.official@gmail.com",
};

const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/collabcircle-official/",
  facebook: "https://www.facebook.com/collabcircle.official",
  instagram: "https://www.instagram.com/collabcircle.official/",
  youtube: "https://www.youtube.com/@collabcircle.official",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: socialProfiles.linkedin,
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
];

export const youtubeChannelHref = socialProfiles.youtube;

export type YouTubeShowcaseVideo = {
  title: string;
  embedUrl: string;
};

export const youtubeShowcaseVideos: YouTubeShowcaseVideo[] = [];

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

export const researchPillars = [
  {
    title: "Data-Centric Machine Learning",
    description: "Better data design before bigger models.",
    tags: ["benchmark design", "error analysis", "robust evaluation"],
  },
  {
    title: "Efficient Deep Learning Systems",
    description: "Sharper models with cleaner training decisions.",
    tags: ["parameter efficiency", "distillation", "training pipelines"],
  },
  {
    title: "Applied Intelligence Workflows",
    description: "Interfaces, systems, and applied model workflows.",
    tags: ["deployment framing", "monitoring", "human-in-the-loop"],
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
};

export const executiveMembers: TeamMember[] = [
  {
    name: "Sumaiya Alam Shorna",
    role: "Co-Founder",
    imagePublicId: null,
  },
  {
    name: "Shah Mohammad Rizvi",
    role: "Founder & President",
    imagePublicId: null,
  },
  {
    name: "Rumi Akter",
    role: "Co-Founder",
    imagePublicId: null,
  },
  {
    name: "Rimo Bhuiyan",
    role: "Co-Founder",
    imagePublicId: null,
  },
  {
    name: "Md. Aman Uddin Siyam",
    role: "Co-Founder",
    imagePublicId: null,
  },
  {
    name: "Sumaiya Islam Mily",
    role: "Co-Founder",
    imagePublicId: null,
  },
];

export const currentResearchers: TeamMember[] = [];

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
    label: "Instagram",
    value: "@collabcircle.official",
    href: socialProfiles.instagram,
    description: "Visual snapshots and organization moments.",
  },
  {
    label: "YouTube",
    value: "@collabcircle.official",
    href: socialProfiles.youtube,
    description: "Video content and future public communication.",
  },
];

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
