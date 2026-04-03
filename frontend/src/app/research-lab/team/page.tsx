import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";
import wingStyles from "@/components/research/research-wing.module.css";
import { MemberGrid } from "@/components/team/member-grid";
import { PageHero } from "@/components/shared/page-hero";
import { collaborationChecklist, currentResearchers, executiveMembers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Team",
};

const teamSignals = [
  {
    label: "Executive Roles",
    value: String(executiveMembers.length),
    copy: "Leadership stays visible so the department presents accountable structure from the start.",
  },
  {
    label: "Researcher Directory",
    value: currentResearchers.length > 0 ? String(currentResearchers.length) : "Ready",
    copy: "The page is structured to scale as the active researcher directory grows over time.",
  },
  {
    label: "Directory Style",
    value: "Structured",
    copy: "People are shown as part of a readable organization rather than as isolated profile fragments.",
  },
];

export default function ResearchTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        icon={UsersRound}
        intro="The people leading and growing the research wing of CollabCircle."
        title="Executives first. Researchers next."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {teamSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.directoryNote}>
          <h3>Department structure</h3>
          <p>
            The team page is designed to communicate leadership, growth readiness, and a clear
            researcher-facing organizational model. It should feel like a department directory, not
            an informal gallery.
          </p>
        </div>
      </section>

      <MemberGrid
        eyebrow="Executive panel"
        intro="Profiles are already structured for future image integration."
        members={executiveMembers}
        title="The six executives of CollabCircle."
      />

      <MemberGrid
        eyebrow="Researchers"
        emptyMessage="Researcher profiles will appear here as the current researcher directory is finalized."
        intro="This section is ready for researcher data and images later."
        members={currentResearchers}
        placeholderCount={6}
        title="Current researchers of CollabCircle."
      />

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Collaboration Readiness</span>
            <h3>The team structure should support communication as much as visibility.</h3>
            <ul className={wingStyles.keyList}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Directory Principle</span>
            <h3>Structured team data makes the department easier to grow professionally.</h3>
            <p>
              Leadership stays clear, and the researcher section can scale without disturbing the
              overall page logic.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="People should understand the team before they follow the work."
          eyebrow="Next step"
          primaryHref="/research-lab/projects"
          primaryLabel="See projects"
          secondaryHref="/research-lab/policy"
          secondaryLabel="Read policy"
          title="The research team should connect clearly to the work and standards around it."
        />
      </section>
    </>
  );
}
