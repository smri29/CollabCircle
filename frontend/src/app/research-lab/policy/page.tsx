import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchPolicyBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Policy",
};

const workingRules = [
  "Research claims should match the actual evidence available.",
  "Experiments, notes, and decisions should remain readable to collaborators.",
  "Contributors should treat ethics, review feedback, and documentation as part of the work itself.",
  "The wing should prefer durable quality over rushed visibility.",
];

const policySignals = [
  {
    label: "Core Policy Areas",
    value: String(researchPolicyBlocks.length),
    copy: "The public standards of the wing are grouped into a small set of visible governance areas.",
  },
  {
    label: "Review Style",
    value: "Explicit",
    copy: "The department treats expectations as public operating rules rather than private assumptions.",
  },
  {
    label: "Policy Role",
    value: "Institutional",
    copy: "Policy exists to strengthen trust, clarity, and long-term research credibility.",
  },
];

export default function ResearchPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        icon={ShieldCheck}
        intro="The research wing should make its standards visible, not leave them implied."
        title="Research policy, expectations, and working standards."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {policySignals.map((item) => (
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
            <span className={wingStyles.leadMark}>Policy Framework</span>
            <h2>Standards should be public enough to guide trust in the department.</h2>
            <p>
              A research wing looks more credible when its norms are visible. These policy blocks
              show how the department thinks about integrity, documentation, responsibility, and
              collaboration.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {researchPolicyBlocks.map((block) => (
              <article className={styles.card} key={block.title}>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Working Rules</span>
            <h3>These practical rules help policy stay actionable instead of symbolic.</h3>
            <ul className={wingStyles.keyList}>
              {workingRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Why Policy Matters</span>
            <h3>Public standards strengthen the way research is interpreted from the outside.</h3>
            <p>
              Good research presentation is stronger when expectations for quality, conduct, and
              evidence are visible and stable.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
