import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import wingStyles from "@/components/research/research-wing.module.css";
import { researchWingHighlights } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

const researchWingMetrics = [
  {
    label: "Core Structure",
    value: "5",
    copy: "Public-facing sections organize the wing around outputs, tracks, projects, people, and policy.",
  },
  {
    label: "Current Focus",
    value: "ML / DL",
    copy: "The department is centered on machine learning and deep learning work with a publication-minded posture.",
  },
  {
    label: "Operating Model",
    value: "Evidence-led",
    copy: "Research choices are expected to stay scoped, readable, and grounded in actual experimental work.",
  },
];

const orientationPoints = [
  "Research Home gives visitors an overview of the department before they explore deeper sections.",
  "Research Tracks explains the intellectual directions that shape current work.",
  "Projects separates active execution from completed milestones and internal build-out.",
  "Publications presents the formal output archive of the department.",
];

export default function ResearchLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Lab"
        icon={Microscope}
        intro="The research-facing department of CollabCircle now lives as a dedicated destination inside the wider website."
        title="Welcome to the Research Wing."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {researchWingMetrics.map((item) => (
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
            <span className={wingStyles.panelEyebrow}>Department Overview</span>
            <h3>A professional research wing should explain both its work and its structure.</h3>
            <p>
              This section is designed to feel more like an academic department or research unit
              than a generic marketing page. Visitors should understand what the wing studies, how
              it operates, and where the public evidence of that work lives.
            </p>
            <ul className={wingStyles.keyList}>
              {orientationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Navigation Logic</span>
            <h3>Clarity first, complexity later.</h3>
            <p>
              The wing is organized so a visitor can move from overview to research direction, then
              into projects, outputs, people, and standards without losing context.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Department Sections</span>
            <h2>Everything important is visible from one structured overview.</h2>
            <p>
              The research wing should feel stable and legible to collaborators, reviewers, and
              future researchers. These sections form the public backbone of the department.
            </p>
          </div>

          <div className={wingStyles.highlightGrid}>
            {researchWingHighlights.map((item) => (
              <article className={wingStyles.highlightCard} key={item.href}>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <Link className={wingStyles.inlineLink} href={item.href}>
                  <span>Open section</span>
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
