import type { Metadata } from "next";
import { Boxes } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringTechnologies } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Technologies",
};

const technologySignals = [
  {
    label: "Technology Areas",
    value: String(engineeringTechnologies.length),
    copy: "The hub is being framed around a few strategic technology areas instead of an unfocused stack list.",
  },
  {
    label: "Technical Style",
    value: "Platform-minded",
    copy: "The department should prefer systems that scale into products, tools, and internal infrastructure over ad hoc builds.",
  },
  {
    label: "Capability Bias",
    value: "Practical",
    copy: "Technology choices are intended to support maintainable delivery, integration, and applied AI workflows.",
  },
];

export default function EngineeringTechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        icon={Boxes}
        intro="The Engineering Hub should make its technical direction understandable before it becomes a larger delivery organization."
        title="Technology areas and platform directions."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {technologySignals.map((item) => (
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
          {engineeringTechnologies.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.pillList}>
                {item.tags.map((tag) => (
                  <span className={styles.pill} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
