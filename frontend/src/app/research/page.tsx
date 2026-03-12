import type { Metadata } from "next";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchPillars } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research",
};

const methods = [
  "Hypothesis framing before implementation",
  "Baselines and ablations that clarify contribution",
  "Readable experiment records and reproducible outputs",
  "Figures and tables designed as part of the analysis",
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        intro="We focus on machine learning and deep learning work that can support serious analysis, strong writing, and credible submission targets."
        title="Focused directions, disciplined methodology, and room for meaningful work."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {researchPillars.map((pillar) => (
            <article className={styles.card} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className={styles.pillList}>
                {pillar.tags.map((tag) => (
                  <span className={styles.pill} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>How we approach projects</h2>
            <p>
              Each project should be narrow enough to execute with focus, but rich enough to
              produce an argument that matters. That means careful scope, honest limitations, and
              a clear line between experiments and claims.
            </p>
            <ul className={styles.list}>
              {methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Research posture</h3>
            <p>
              We prefer deliberate projects with durable evidence over rushed experiments that look
              busy but collapse under review.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
