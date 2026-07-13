import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import styles from "@/components/development/development-project-card.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { developmentProjects } from "@/data/company-content";

export const metadata: Metadata = { title: "Projects" };

export default function DevelopmentProjectsPage() {
  return (
    <>
      <PageHero
        backHref="/development-wing"
        eyebrow="Projects"
        icon={FolderKanban}
        intro=""
        title="Projects Archive of CollabCircle"
      />

      <section className="section">
        <div className={styles.grid}>
          {developmentProjects.map((project, index) => (
            <DevelopmentProjectCard index={index} key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
