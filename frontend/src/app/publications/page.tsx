import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { outputFormats, publicationStandards, workflowSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        icon={BookOpenText}
        intro="We treat writing and presentation as part of the research process, not as an afterthought added at the end."
        title="A publication model built around clarity, evidence, and reviewer trust."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {publicationStandards.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
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

          <div className={styles.stack}>
            {outputFormats.map((format) => (
              <article className={styles.card} key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
