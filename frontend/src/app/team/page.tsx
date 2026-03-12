import type { Metadata } from "next";
import { CtaBanner } from "@/components/shared/cta-banner";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { collaborationChecklist, teamRoles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        intro="The team structure is intentionally compact. That makes ownership easier to trace and makes quality conversations more useful."
        title="A collaboration model built for clarity, contribution, and momentum."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {teamRoles.map((role) => (
            <article className={styles.card} key={role.title}>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>What strong collaboration looks like</h2>
            <ul className={styles.list}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Team principle</h3>
            <p>
              A smaller team only works if communication stays direct, deadlines stay visible, and
              everyone treats documentation as shared infrastructure.
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
