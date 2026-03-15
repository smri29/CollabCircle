import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { PublicationDirectory } from "@/components/publications/publication-directory";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { publicationStandards } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        icon={BookOpenText}
        intro="A clean archive for journal and conference work."
        title="Publications, organized with less noise."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {publicationStandards.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <PublicationDirectory />
      </section>
    </>
  );
}
