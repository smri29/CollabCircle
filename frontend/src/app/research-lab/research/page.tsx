import type { Metadata } from "next";
import { BrainCircuit } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchPillars } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Tracks",
};

const methods = [
  "Hypothesis framing before implementation",
  "Baselines and ablations that clarify contribution",
  "Readable experiment records and reproducible outputs",
  "Figures and tables designed as part of the analysis",
];

const trackSignals = [
  {
    label: "Track Count",
    value: "3",
    copy: "The current public-facing research structure is organized around three core directions.",
  },
  {
    label: "Method Bias",
    value: "Disciplined",
    copy: "Each track is framed to favor readable progress over vague ambition or rushed experimentation.",
  },
  {
    label: "Research Style",
    value: "Publication-ready",
    copy: "The wing treats framing, evidence, and writing as one connected workflow rather than separate tasks.",
  },
];

export default function ResearchTracksPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Tracks"
        icon={BrainCircuit}
        intro="The active research tracks that shape how the wing frames and executes technical work."
        title="Research areas and working tracks."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {trackSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Research Directions</span>
            <h2>Tracks are public so the department&apos;s work stays intelligible from the outside.</h2>
            <p>
              A strong research department makes its intellectual structure visible. These tracks
              signal where the wing is spending attention and what kinds of contributions it is
              organized to support.
            </p>
          </div>

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
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Method Discipline</span>
            <h3>Research quality should be visible in the way work is framed and recorded.</h3>
            <ul className={wingStyles.keyList}>
              {methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Track Philosophy</span>
            <h3>Clear tracks reduce confusion for both collaborators and reviewers.</h3>
            <p>
              Each track exists to keep scope, method, and expected contribution easier to
              understand as work evolves across projects and outputs.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
