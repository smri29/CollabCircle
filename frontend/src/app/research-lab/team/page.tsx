import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { MemberGrid } from "@/components/team/member-grid";
import { PageHero } from "@/components/shared/page-hero";
import { currentResearchers, executiveMembers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Team",
};

export default function ResearchTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        icon={UsersRound}
        intro="The people leading and growing the research wing of CollabCircle."
        title="Executives and Researches of Research Wing."
      />

      <MemberGrid
        eyebrow="Executive panel"
        intro=""
        members={executiveMembers}
        title="The Executive Panel."
      />

      <MemberGrid
        eyebrow="Researchers"
        emptyMessage=""
        intro=""
        members={currentResearchers}
        placeholderCount={6}
        title="Active Researchers."
      />
    </>
  );
}
