import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchProjects } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Projects",
};

const ongoingProjects = researchProjects.filter((project) => project.status === "ongoing");
const completedProjects = researchProjects.filter((project) => project.status === "completed");

const projectSignals = [
  {
    label: "Active Projects",
    value: String(ongoingProjects.length),
    copy: "Active work remains visible so the department's current technical momentum is easy to read.",
  },
  {
    label: "Completed Projects",
    value: String(completedProjects.length),
    copy: "Completed work stays public to show continuity and organizational memory.",
  },
  {
    label: "Project Logic",
    value: "Trackable",
    copy: "Projects are separated by status so a visitor can distinguish ongoing execution from completed milestones.",
  },
];

export default function ResearchProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        icon={FolderKanban}
        intro="Research work is easier to follow when active efforts and completed work are visible separately."
        title="Ongoing and completed projects inside the Research Wing."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {projectSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
              <p className={wingStyles.metricCopy}>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.statusSection}>
          <div className={wingStyles.statusHeader}>
            <div className={wingStyles.lead}>
              <span className={wingStyles.leadMark}>Active Work</span>
              <h2>Ongoing projects</h2>
              <p>These are the efforts currently shaping the wing&apos;s technical and operational momentum.</p>
            </div>
            <span className={wingStyles.statusBadge}>Ongoing</span>
          </div>

          <div className={styles.cardGrid}>
            {ongoingProjects.map((project) => (
              <article className={styles.card} key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className={styles.pillList}>
                  <span className={styles.pill}>{project.focus}</span>
                  <span className={styles.pill}>Ongoing</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.statusSection}>
          <div className={wingStyles.statusHeader}>
            <div className={wingStyles.lead}>
              <span className={wingStyles.leadMark}>Completed Work</span>
              <h2>Completed projects</h2>
              <p>Completed work stays visible so the research wing can show progression, not just current activity.</p>
            </div>
            <span className={wingStyles.statusBadge}>Completed</span>
          </div>

          <div className={styles.cardGrid}>
            {completedProjects.map((project) => (
              <article className={styles.card} key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className={styles.pillList}>
                  <span className={styles.pill}>{project.focus}</span>
                  <span className={styles.pill}>Completed</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
