import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { impactSectors } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Impact Sector",
};

export default function ImpactSectorPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact Sector"
        icon={Sparkles}
        intro="A short view of where CollabCircle aims to create value over time."
        title="The practical horizon behind research and engineering."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {impactSectors.map((sector) => (
            <article className={styles.card} key={sector.title}>
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
