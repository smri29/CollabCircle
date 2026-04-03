export type NewsCategory = "announcement" | "research" | "organization";

export type NewsroomCategoryInfo = {
  id: NewsCategory;
  title: string;
  description: string;
};

export type NewsroomItem = {
  id: string;
  title: string;
  summary: string;
  category: NewsCategory;
  publishedAt: string;
  featured?: boolean;
  href?: string;
  ctaLabel?: string;
};

export const newsroomCategories: NewsroomCategoryInfo[] = [
  {
    id: "announcement",
    title: "Announcements",
    description: "Official notices, public milestones, launches, and important communication from CollabCircle.",
  },
  {
    id: "research",
    title: "Research Highlights",
    description: "Readable updates about research direction, publications, experiments, and technical progress.",
  },
  {
    id: "organization",
    title: "Organization Updates",
    description: "Team growth, internal milestones, meetups, and visible progress across the organization.",
  },
];

export const newsroomItems: NewsroomItem[] = [
  {
    id: "join-us-live",
    title: "Researcher and Engineer applications are now live on the Join Us page",
    summary:
      "CollabCircle now accepts focused applications through separate Researcher and Engineer recruitment tracks, each with its own dedicated Google Form.",
    category: "announcement",
    publishedAt: "April 2026",
    featured: true,
    href: "/career",
    ctaLabel: "View careers",
  },
  {
    id: "newsroom-launch",
    title: "The Newsroom is now the public home for official updates",
    summary:
      "This page now serves as the public record for announcements, research visibility, and organization milestones as CollabCircle grows.",
    category: "organization",
    publishedAt: "April 2026",
  },
  {
    id: "research-foundation-update",
    title: "Research-first structure remains the public foundation of CollabCircle",
    summary:
      "The organization continues to present research as its current public core while preparing the engineering layer for future expansion.",
    category: "research",
    publishedAt: "April 2026",
    href: "/research-lab",
    ctaLabel: "Enter the lab",
  },
  {
    id: "team-visibility-update",
    title: "Executive team visibility and researcher-ready structure are now clearer on the site",
    summary:
      "The Team page keeps the executive panel visible today while preserving a scalable structure for the future researcher directory.",
    category: "organization",
    publishedAt: "April 2026",
    href: "/team",
    ctaLabel: "See the team",
  },
  {
    id: "achievement-showcase-update",
    title: "CollabCircle achievements and team moments now have a dedicated showcase area",
    summary:
      "Milestones, meetup records, and future recognition moments now have a clearer presentation through the Achievements section.",
    category: "announcement",
    publishedAt: "April 2026",
    href: "/achievements",
    ctaLabel: "View achievements",
  },
];
