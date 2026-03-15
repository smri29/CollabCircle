export const siteMeta = {
  name: "CollabCircle",
  tagline: "A future-ready research and engineering organization.",
  description:
    "CollabCircle is evolving into a future-ready organization with a research lab, an engineering hub, and a long-term focus on meaningful impact.",
  email: "collabcircle.official@gmail.com",
};

const socialProfiles = {
  linkedin: "https://www.linkedin.com/company/collabcircle-official/",
  facebook: "https://www.facebook.com/collabcircle.official",
  instagram: "https://www.instagram.com/collabcircle.official/",
  youtube: "https://www.youtube.com/@collabcircle.official",
};

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

export const heroSignals = [
  {
    value: "Research-first",
    label: "Every project begins with a defensible question, not a vague trend.",
  },
  {
    value: "Documentation-led",
    label: "Experiments, assumptions, and decisions are kept visible from day one.",
  },
  {
    value: "Submission-ready",
    label: "Work is shaped toward strong manuscripts, polished figures, and clear results.",
  },
];

export const researchPillars = [
  {
    title: "Data-Centric Machine Learning",
    description:
      "We prioritize dataset quality, labeling strategy, and evaluation discipline before optimizing models.",
    tags: ["benchmark design", "error analysis", "robust evaluation"],
  },
  {
    title: "Efficient Deep Learning Systems",
    description:
      "We explore architectures and training strategies that increase performance without wasting compute.",
    tags: ["parameter efficiency", "distillation", "training pipelines"],
  },
  {
    title: "Applied Intelligence Workflows",
    description:
      "We connect models to real decision systems through clear interfaces, reproducible code, and practical constraints.",
    tags: ["deployment framing", "monitoring", "human-in-the-loop"],
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Frame the problem",
    description:
      "Define the question, novelty angle, success criteria, and evaluation boundaries before building.",
  },
  {
    step: "02",
    title: "Build the evidence",
    description:
      "Implement datasets, baselines, and experiments in a way that survives replication and review.",
  },
  {
    step: "03",
    title: "Shape the narrative",
    description:
      "Turn findings into a clear story with figures, tables, ablations, and limitations that reviewers can follow.",
  },
  {
    step: "04",
    title: "Submit with confidence",
    description:
      "Refine the manuscript through internal critique, venue fit review, and final quality checks.",
  },
];

export const principles = [
  {
    title: "Small teams, strong accountability",
    description:
      "Compact teams make it easier to track ownership, preserve momentum, and keep quality standards high.",
  },
  {
    title: "Readable systems win",
    description:
      "Codebases, experiment logs, and manuscript drafts should be understandable by another researcher without guesswork.",
  },
  {
    title: "Aesthetic clarity matters",
    description:
      "Research communication is part of the work. Layout, figure quality, and writing discipline are not optional extras.",
  },
];

export const publicationStandards = [
  {
    title: "Original contribution",
    description:
      "Each project needs a clear reason to exist and a contribution that is easy to state without inflation.",
  },
  {
    title: "Reproducible methodology",
    description:
      "Methods, settings, and data sources must be documented tightly enough to reproduce the result.",
  },
  {
    title: "Reviewer-ready presentation",
    description:
      "Strong structure, direct writing, and carefully designed visuals improve the odds of a fair reading.",
  },
];

export const outputFormats = [
  {
    title: "Conference papers",
    description:
      "Fast-moving research with a clear experimental story, focused contribution, and strong comparisons.",
  },
  {
    title: "Journal articles",
    description:
      "Extended studies with deeper analysis, broader context, and a more comprehensive discussion of results.",
  },
  {
    title: "Research assets",
    description:
      "Code, trained models, benchmarks, and technical notes that make our work easier to inspect and reuse.",
  },
];

export const teamRoles = [
  {
    title: "Research direction",
    description:
      "Sets the problem framing, project ambition, and submission strategy with a clear standard for quality.",
  },
  {
    title: "Experiment ownership",
    description:
      "Designs baselines, runs model training, analyzes failures, and keeps the empirical evidence trustworthy.",
  },
  {
    title: "Technical writing",
    description:
      "Builds the paper narrative, aligns sections with findings, and improves clarity for reviewers and readers.",
  },
  {
    title: "Collaboration support",
    description:
      "Maintains documentation, sync rhythm, figure quality, and handoff discipline across the project lifecycle.",
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
    description: "Follow updates, initiatives, and public-facing research activity.",
  },
  {
    label: "Facebook",
    value: "collabcircle.official",
    href: socialProfiles.facebook,
    description: "Stay connected through CollabCircle's public community and updates.",
  },
  {
    label: "Instagram",
    value: "@collabcircle.official",
    href: socialProfiles.instagram,
    description: "Visual snapshots of the organization and its research culture.",
  },
  {
    label: "YouTube",
    value: "@collabcircle.official",
    href: socialProfiles.youtube,
    description: "Follow video content, talks, and future research communication.",
  },
];

export const contactPurposes = [
  {
    title: "Research collaboration",
    description:
      "Reach out if you want to discuss a paper idea, a shared research direction, or a contribution to an ongoing initiative.",
  },
  {
    title: "Joining as a contributor",
    description:
      "Introduce your background, technical strengths, and the kind of work you can consistently own over time.",
  },
  {
    title: "Partnerships and visibility",
    description:
      "Use the official channels for academic connections, organizational visibility, and future public-facing collaborations.",
  },
];

export const contactProcess = [
  {
    step: "01",
    title: "Choose the right channel",
    description:
      "Use email for direct and formal communication. Use the public social profiles for updates, visibility, and lightweight connection.",
  },
  {
    step: "02",
    title: "Keep the message specific",
    description:
      "State your intent clearly, identify the research area, and explain what kind of contribution or discussion you are proposing.",
  },
  {
    step: "03",
    title: "Make the next step obvious",
    description:
      "Mention whether you want to collaborate, ask a question, share relevant work, or request a follow-up discussion.",
  },
];

export const contactMessageBlueprint = [
  "A short introduction with your name and background",
  "The reason you are contacting CollabCircle",
  "Your relevant skills, experience, or research interest",
  "A clear next step you want to discuss",
];
