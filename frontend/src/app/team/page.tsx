import type { Metadata } from "next";
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
        intro="The team page is organized around the people leading CollabCircle and the structure that will later hold the broader researcher directory."
        title="An executive panel first, then a researcher directory built to scale cleanly."
      />

      <MemberGrid
        eyebrow="Executive panel"
        intro="This grid follows the requested display order and keeps each profile card ready for a future Cloudinary image source."
        members={executiveMembers}
        title="The six executives of CollabCircle."
      />

      <MemberGrid
        eyebrow="Researchers"
        emptyMessage="Researcher profiles will appear here as the current researcher directory is finalized."
        intro="This section is already structured for profile cards, so researcher data and images can be added later without redesigning the page."
        members={currentResearchers}
        placeholderCount={6}
        title="Current researchers of CollabCircle."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>What this structure supports</h2>
            <p>
              The executive grid establishes the leadership layer first. The researcher section is
              intentionally separate so the directory can expand without disturbing the executive
              presentation.
            </p>
            <ul className={styles.list}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Directory principle</h3>
            <p>
              Profile images, names, roles, and ordering should come from structured data so the
              team page stays maintainable when Cloudinary and researcher records are connected.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="If someone wants to work with CollabCircle, the expectations should be visible before the first meeting."
          eyebrow="Collaboration"
          primaryHref="/contact"
          primaryLabel="Reach out"
          secondaryHref="/about"
          secondaryLabel="See the culture"
          title="The team experience should feel as intentional as the research itself."
        />
      </section>
    </>
  );
}
