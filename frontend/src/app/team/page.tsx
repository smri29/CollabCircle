import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";
import styles from "@/components/shared/content-sections.module.css";
import { MemberGrid } from "@/components/team/member-grid";
import { PageHero } from "@/components/shared/page-hero";
import { collaborationChecklist, currentResearchers, executiveMembers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        icon={UsersRound}
        intro="The people leading CollabCircle, with room to expand the researcher directory later."
        title="Executive panel first. Researcher directory next."
      />

      <MemberGrid
        eyebrow="Executive panel"
        intro="Profiles are already structured for future image integration."
        members={executiveMembers}
        title="The six executives of CollabCircle."
      />

      <MemberGrid
        eyebrow="Researchers"
        emptyMessage="Researcher profiles will appear here as the current researcher directory is finalized."
        intro="This section is ready for researcher data and images later."
        members={currentResearchers}
        placeholderCount={6}
        title="Current researchers of CollabCircle."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why it is split this way</h2>
            <p>
              Leadership stays clear, and the researcher section can scale without disturbing the layout.
            </p>
            <ul className={styles.list}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Directory principle</h3>
            <p>Structured data will keep this page maintainable as profiles grow.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="People should understand the team before they reach out."
          eyebrow="Next step"
          primaryHref="/contact"
          primaryLabel="Reach out"
          secondaryHref="/about"
          secondaryLabel="See the lab"
          title="The team page should feel clear and intentional."
        />
      </section>
    </>
  );
}
