import type { Metadata } from "next";
import { BrainCircuit } from "lucide-react";
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
        icon={BrainCircuit}
        intro="Current ML and DL directions inside the lab."
        title="Focused research, cleaner methodology."
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
            <h2>How projects are handled</h2>
            <p>
              Projects stay scoped, evidence-led, and readable from start to finish.
            </p>
            <ul className={styles.list}>
              {methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Research posture</h3>
            <p>Deliberate work beats rushed output.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
