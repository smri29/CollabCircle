import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import sharedStyles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";

export const metadata: Metadata = {
  title: "Cognitive Cyber Lab",
};

const focusAreas = [
  {
    title: "Cognitive security research",
    description:
      "Exploring how people, systems, and intelligent agents interact under security pressure and uncertainty.",
  },
  {
    title: "Cyber intelligence workflows",
    description:
      "Designing practical workflows for threat analysis, signal interpretation, and human-guided response.",
  },
  {
    title: "Resilient AI systems",
    description:
      "Studying robust, accountable AI-enabled systems that can operate safely in adversarial or high-risk settings.",
  },
];

const directionPoints = [
  "A dedicated home for cyber and cognition-aligned work inside the wider CollabCircle vision.",
  "A structure that can later grow into projects, publications, team pages, and policy pages of its own.",
  "An early public-facing foundation for future research and development activity in this domain.",
];

export default function CognitiveCyberLabPage() {
  return (
    <>
      <PageHero
        backHref="/"
        eyebrow="Cognitive Cyber Lab"
        icon={Shield}
        intro="A new section of CollabCircle focused on cognitive security, cyber intelligence, and resilient systems thinking."
        title="Cognitive Cyber Lab (CCL)."
      />

      <section className="section">
        <div className={sharedStyles.gridTwo}>
          <div className={sharedStyles.stack}>
            <h2>A dedicated direction inside CollabCircle.</h2>
            <p>
              CCL is being introduced as a dedicated destination so the website can grow beyond the
              current Research Wing and Development Wing structure while staying cohesive.
            </p>
          </div>

          <aside className={sharedStyles.panel}>
            <h3>Current stage</h3>
            <p>
              This is the initial homepage for CCL. More section-specific pages can be added as the
              lab direction becomes more active.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={sharedStyles.cardGrid}>
          {focusAreas.map((item) => (
            <article className={sharedStyles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={sharedStyles.panel}>
          <h3>What this section is preparing for</h3>
          <ul className={sharedStyles.list}>
            {directionPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <article className={sharedStyles.ctaPanel}>
          <div className={sharedStyles.ctaCopy}>
            <p>Explore CollabCircle</p>
            <h2>Move between the active and emerging parts of the organization.</h2>
            <p>
              You can return to the main site, explore the Research Wing, or review the Development
              Wing while this new section continues to take shape.
            </p>
          </div>

          <div className={sharedStyles.ctaActions}>
            <Link className="button" href="/research-lab">
              <span>Research Wing</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link className={sharedStyles.secondaryCta} href="/development-wing">
              <span>Development Wing</span>
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <YouTubeShowcase />
      </section>
    </>
  );
}
