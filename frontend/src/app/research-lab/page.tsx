import type { Metadata } from "next";
import { Microscope } from "lucide-react";
import { FeatureLinkGrid } from "@/components/company/feature-link-grid";
import styles from "@/components/shared/content-sections.module.css";
import { CtaBanner } from "@/components/shared/cta-banner";
import { PageHero } from "@/components/shared/page-hero";
import { researchLabLinks } from "@/data/company-content";
import { workflowSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

export default function ResearchLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Lab"
        icon={Microscope}
        intro="Everything we have already built for the research-facing side of CollabCircle now lives under this dedicated gateway."
        title="The current CollabCircle research experience, organized in one place."
      />

      <section className="section">
        <FeatureLinkGrid density="dense" items={researchLabLinks} />
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>What this gateway does</h2>
            <p>
              The homepage now carries the broader company story, while this page keeps the full
              research-facing experience easy to reach. That means the work we already completed is
              preserved and organized instead of scattered across the main navigation.
            </p>
            <p>
              It also gives us a cleaner foundation for future frontend and backend mapping, since
              the research side now has a clear entry point of its own.
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Current state</h3>
            <p>
              This is the active operational wing of the website today: research identity,
              directions, publications, team, and contact.
            </p>
          </aside>
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
          description="From here, visitors can move directly into research details, publication records, team information, or collaboration channels."
          eyebrow="Lab navigation"
          primaryHref="/research"
          primaryLabel="Open research directions"
          secondaryHref="/publications"
          secondaryLabel="See publications"
          title="A dedicated gateway makes the research side clearer."
        />
      </section>
    </>
  );
}
