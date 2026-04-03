import type { Metadata } from "next";
import { Handshake } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringClientGroups } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Clients",
};

const clientSignals = [
  {
    label: "Client Groups",
    value: String(engineeringClientGroups.length),
    copy: "The department is being framed around a small set of client archetypes rather than an undefined market.",
  },
  {
    label: "Client Bias",
    value: "Selective",
    copy: "The hub is positioned for mission-aligned delivery rather than generic volume-driven software work.",
  },
  {
    label: "Near-Term Focus",
    value: "Internal First",
    copy: "The most immediate engineering clients are likely to be internal teams and adjacent collaborators.",
  },
];

export default function EngineeringClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        icon={Handshake}
        intro="The Engineering Hub should be clear about who it is designed to support as it grows into delivery."
        title="Client groups and future delivery fit."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {clientSignals.map((item) => (
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
            <span className={wingStyles.leadMark}>Client Model</span>
            <h2>Engineering strategy is stronger when the intended clients are visible.</h2>
            <p>
              This page explains the kinds of teams and organizations the department is meant to
              serve so that the hub feels grounded in real delivery logic rather than abstract positioning.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {engineeringClientGroups.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.pillList}>
                  <span className={styles.pill}>{item.fit}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
