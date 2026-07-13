import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { DevelopmentProject } from "@/data/company-content";
import styles from "./development-project-card.module.css";

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type DevelopmentProjectCardProps = {
  project: DevelopmentProject;
  index?: number;
};

export function DevelopmentProjectCard({
  project,
  index,
}: DevelopmentProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageSlot} aria-hidden="true">
        <span>{getInitials(project.title)}</span>
      </div>

      <div className={styles.cardTop}>
        <span className={styles.serial}>
          {index !== undefined ? String(index + 1).padStart(2, "0") : project.startDate}
        </span>
        <span className={styles.role}>{project.status}</span>
      </div>

      <h3>{project.title}</h3>

      <div className={styles.noteCard}>
        <h4>Project overview</h4>
        <p>{project.overview}</p>
      </div>

      <div className={styles.fieldRow}>
        <span className={styles.fieldLabel}>Client</span>
        <p>{project.client}</p>
      </div>

      <div className={styles.fieldRow}>
        <span className={styles.fieldLabel}>Start Date</span>
        <p>{project.startDate}</p>
      </div>

      <div className={styles.fieldRow}>
        <span className={styles.fieldLabel}>End Date</span>
        <p>{project.endDate}</p>
      </div>

      <div className={styles.fieldRow}>
        <span className={styles.fieldLabel}>Focus/Track</span>
        <p>{project.focus}</p>
      </div>

      <div className={styles.fieldRow}>
        <span className={styles.fieldLabel}>Live Link</span>
        {project.liveLink ? (
          <Link className={styles.link} href={project.liveLink} rel="noreferrer" target="_blank">
            <span>Open project</span>
            <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        ) : (
          <p className={styles.muted}>Unavailable</p>
        )}
      </div>
    </article>
  );
}
