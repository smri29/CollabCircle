import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringServices } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Solutions & Services",
};

const serviceSignals = [
  {
    label: "Service Lines",
    value: String(engineeringServices.length),
    copy: "The public service model is organized into a small number of durable engineering categories.",
  },
  {
    label: "Delivery Posture",
    value: "Applied",
    copy: "This department is being shaped around practical delivery rather than abstract technical ambition alone.",
  },
  {
    label: "Service Logic",
    value: "Scalable",
    copy: "Each service area is intended to support future growth into repeatable products, tools, and systems.",
  },
];

export default function SolutionsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & Services"
        icon={BriefcaseBusiness}
        intro="The public delivery model of the Engineering Hub begins with a small number of focused service directions."
        title="Solutions and services the department is being built to deliver."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {serviceSignals.map((item) => (
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
            <span className={wingStyles.panelEyebrow}>Delivery Model</span>
            <h3>The engineering department should describe what it can build in terms people can understand.</h3>
            <p>
              Rather than presenting engineering as a vague future capability, the hub should show
              the kinds of systems, tools, and applied delivery it intends to support.
            </p>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Service Principle</span>
            <h3>Engineering should turn capability into usable outcomes.</h3>
            <p>
              Solutions & Services exists to make the department legible to future collaborators and
              to frame engineering as a practical build function within CollabCircle.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={styles.cardGrid}>
          {engineeringServices.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.pillList}>
                <span className={styles.pill}>{item.scope}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
