import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringWingHighlights } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Engineering Hub",
};

const engineeringMetrics = [
  {
    label: "Core Sections",
    value: "6",
    copy: "The engineering department is organized around services, clients, technologies, team, policy, and roadmap.",
  },
  {
    label: "Department Role",
    value: "Build",
    copy: "The hub exists to translate long-term ideas into delivery systems, products, tools, and technical operations.",
  },
  {
    label: "Execution Style",
    value: "Structured",
    copy: "The public engineering identity is framed around disciplined delivery, maintainable systems, and future scalability.",
  },
];

const orientationPoints = [
  "Engineering Home gives visitors the high-level structure of the department before they move into specifics.",
  "Solutions & Services explains what the department intends to build and deliver.",
  "Clients and Technologies clarify who the work is for and what technical foundations it will rely on.",
  "Team, Policy, and Roadmap define people, standards, and long-term direction.",
];

export default function EngineeringHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Hub"
        icon={Cpu}
        intro="The engineering-facing department of CollabCircle now has its own structured destination inside the wider website."
        title="Welcome to the Engineering Hub."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {engineeringMetrics.map((item) => (
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
            <h3>The Engineering Hub should feel like a delivery department, not just a concept page.</h3>
            <p>
              This section presents the engineering side as a professional department-in-formation
              with its own public logic. Visitors should understand what it intends to build, who it
              is for, and how it plans to grow from future capability into real execution.
            </p>
            <ul className={wingStyles.keyList}>
              {orientationPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Navigation Logic</span>
            <h3>From delivery model to long-term direction.</h3>
            <p>
              The engineering department is organized to move a visitor from what it builds, to who
              it serves, to how it operates, and finally to where it is heading.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Department Sections</span>
            <h2>Everything important is visible from one engineering overview.</h2>
            <p>
              The Engineering Hub should feel coherent to future collaborators, clients, and
              internal stakeholders. These sections form the public backbone of the department.
            </p>
          </div>

          <div className={wingStyles.highlightGrid}>
            {engineeringWingHighlights.map((item) => (
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
