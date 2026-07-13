import type { Metadata } from "next";
import { Compass } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { developmentRoadmapBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Roadmap",
};

const roadmapSignals = [
  {
    label: "Mission & Vision",
    value: "Visible",
    copy: "The development side should state its long-term direction publicly rather than leaving it implied.",
  },
  {
    label: "Build Horizon",
    value: "Long-term",
    copy: "The wing is future-facing, but it is already being framed in terms of real systems and delivery logic.",
  },
  {
    label: "Growth Logic",
    value: "Stepwise",
    copy: "The roadmap moves from internal build capability toward broader product and platform execution over time.",
  },
];

export default function DevelopmentRoadmapPage() {
  return (
    <>
      <PageHero
        backHref="/development-wing"
        eyebrow="Roadmap"
        icon={Compass}
        intro="The development wing should be clear about where it is heading before it scales."
        title="Vision, mission, and long-term direction of the Development Wing."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {roadmapSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.cardGrid}>
          {developmentRoadmapBlocks.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Roadmap Principle</span>
            <h3>Development should grow from disciplined foundations, not from rushed expansion.</h3>
            <p>
              The roadmap exists to keep the wing legible as it evolves from a future-facing
              concept into a serious build and delivery function within CollabCircle.
            </p>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Direction</span>
            <h3>The long-term role of development is to carry ideas into durable execution.</h3>
            <p>
              Vision and mission should explain how products, tools, systems, and applied delivery
              will gradually become part of the organization&apos;s public identity.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
