import type { Metadata } from "next";
import { Package } from "lucide-react";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import styles from "@/components/development/development-project-card.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { developmentProjects } from "@/data/company-content";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        backHref="/"
        eyebrow="Products"
        icon={Package}
        intro=""
        title="Products of CollabCircle"
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
