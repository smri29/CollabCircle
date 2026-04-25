import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectStyles from "./projects.module.css";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
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
  },
  {
    label: "Completed Projects",
    value: String(completedProjects.length),
  },
];

function getInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ResearchProjectsPage() {
  return (
    <>
      <section className="section">
        <div className={projectStyles.signalGrid}>
          {projectSignals.map((item) => (
            <article className={`${wingStyles.metricCard} ${projectStyles.signalCard}`} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.statusSection}>
          <div className={wingStyles.statusHeader}>
            <div className={wingStyles.lead}>
              <h2>Active Projects</h2>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {ongoingProjects.map((project) => (
              <article className={`${styles.card} ${projectStyles.projectCard}`} key={project.title}>
                <div className={projectStyles.imageWrap}>
                  {project.image ? (
                    <Image
                      alt={project.title}
                      className={projectStyles.image}
                      height={360}
                      src={project.image}
                      width={480}
                    />
                  ) : (
                    <div className={projectStyles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(project.title)}</span>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={wingStyles.directoryNote}>
                  {project.liveLink ? (
                    <Link className={projectStyles.noteLink} href={project.liveLink} rel="noreferrer" target="_blank">
                      <span>Open project</span>
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                  ) : (
                    <p>Live link will be added here.</p>
                  )}
                </div>
                <div className={wingStyles.directoryNote}>
                  <h3>Team</h3>
                  <p>{project.teamMembers.join(", ")}</p>
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
              <h2>Completed Projects</h2>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {completedProjects.map((project) => (
              <article className={`${styles.card} ${projectStyles.projectCard}`} key={project.title}>
                <div className={projectStyles.imageWrap}>
                  {project.image ? (
                    <Image
                      alt={project.title}
                      className={projectStyles.image}
                      height={360}
                      src={project.image}
                      width={480}
                    />
                  ) : (
                    <div className={projectStyles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(project.title)}</span>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={wingStyles.directoryNote}>
                  {project.liveLink ? (
                    <Link className={projectStyles.noteLink} href={project.liveLink} rel="noreferrer" target="_blank">
                      <span>Open project</span>
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                  ) : (
                    <p>Live link will be added here.</p>
                  )}
                </div>
                <div className={wingStyles.directoryNote}>
                  <h3>Team</h3>
                  <p>{project.teamMembers.join(", ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
