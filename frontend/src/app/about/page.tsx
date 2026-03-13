import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { principles, workflowSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CollabCircle"
        icon={Building2}
        intro="We are building an organization where research quality comes from structure, collaboration, and repeatable execution rather than improvisation."
        title="A research culture designed to stay sharp as the work gets bigger."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why this organization exists</h2>
            <p>
              CollabCircle is shaped around a simple idea: good research needs more than
              intelligence. It also needs accountability, readable systems, and a clear path from
              experiments to publication.
            </p>
            <p>
              The website reflects that same intention. It should feel calm, precise, and serious
              enough to represent a research team that values both substance and presentation.
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Operating idea</h3>
            <p>
              We work best when project structure, writing discipline, and technical execution
              reinforce each other instead of competing for attention.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={styles.cardGrid}>
          {principles.map((principle) => (
            <article className={styles.card} key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.timeline}>
          {workflowSteps.map((step) => (
            <article className={styles.timelineItem} key={step.step}>
              <span className={styles.timelineLabel}>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="The frontend is the first public layer of that system, so it should already feel organized, credible, and deliberate."
          eyebrow="Organization design"
          primaryHref="/research"
          primaryLabel="Review research areas"
          secondaryHref="/contact"
          secondaryLabel="Open collaboration"
          title="The public-facing experience should match the internal standard."
        />
      </section>
    </>
  );
}
