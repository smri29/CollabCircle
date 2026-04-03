import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { PublicationDirectory } from "@/components/publications/publication-directory";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { publicationStandards } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Publications",
};

const publicationSignals = [
  {
    label: "Output Streams",
    value: "2",
    copy: "Conference and journal pathways remain visible as distinct publication channels.",
  },
  {
    label: "Presentation Bias",
    value: "Reviewer-ready",
    copy: "The department treats structure and readability as part of research quality, not decoration.",
  },
  {
    label: "Archive Style",
    value: "Curated",
    copy: "Outputs are grouped for clarity so the wing can present its record with less noise.",
  },
];

export default function ResearchPublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        icon={BookOpenText}
        intro="Conference and journal outputs from the research wing live here."
        title="Research outputs, organized by publication type."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {publicationSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Publication Posture</span>
            <h3>The archive should communicate credibility before a reader opens any paper.</h3>
            <p>
              Research outputs are part of the department&apos;s public reputation. This section is
              designed to keep the publication record clean, interpretable, and easy to trust.
            </p>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Standards</span>
            <h3>Every output should support the department&apos;s long-term credibility.</h3>
            <p>
              These principles shape how work moves from experiments to conference submissions,
              journal papers, and reusable research assets.
            </p>
          </aside>
        </div>
      </section>

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
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Publication Directory</span>
            <h2>Conference papers and journal records remain separated for clarity.</h2>
            <p>
              The archive is organized as a readable publication desk so visitors can move through
              the department&apos;s output record without unnecessary complexity.
            </p>
          </div>

          <PublicationDirectory />
        </div>
      </section>
    </>
  );
}
