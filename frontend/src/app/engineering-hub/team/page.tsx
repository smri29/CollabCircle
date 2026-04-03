import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { MemberGrid } from "@/components/team/member-grid";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringTeamTracks } from "@/data/company-content";
import { executiveMembers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Team",
};

const engineeringSignals = [
  {
    label: "Executive Oversight",
    value: String(executiveMembers.length),
    copy: "The department currently reflects executive-level direction while dedicated engineering leadership is still future-facing.",
  },
  {
    label: "Team Formation",
    value: "Planned",
    copy: "The page is intentionally ready for future engineering leads, builders, and technical contributors.",
  },
  {
    label: "Department Style",
    value: "Growing",
    copy: "The Engineering Hub is presented as a structured department-in-formation rather than a finished team directory.",
  },
];

export default function EngineeringTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        icon={Wrench}
        intro="The engineering department should make clear who is guiding it now and how the team is expected to grow."
        title="Executive oversight now. Engineering team growth next."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {engineeringSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <MemberGrid
        eyebrow="Executive oversight"
        intro="The current executive structure provides institutional direction while engineering leadership is still taking shape."
        members={executiveMembers}
        title="Current executive oversight for the Engineering Hub."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {engineeringTeamTracks.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="The engineering side should connect people, standards, and future execution clearly."
          eyebrow="Next step"
          primaryHref="/engineering-hub/policy"
          primaryLabel="Read policy"
          secondaryHref="/engineering-hub/roadmap"
          secondaryLabel="See roadmap"
          title="The team page should explain both the present structure and the future build direction."
        />
      </section>
    </>
  );
}
