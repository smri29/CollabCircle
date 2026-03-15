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
        intro="This section keeps the website oriented toward where CollabCircle wants its work to matter, not only what the organization is currently building."
        title="A place to connect research and engineering to meaningful outcomes."
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

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why impact deserves its own space</h2>
            <p>
              A future company should not look inward only. The impact layer helps visitors
              understand the real-world sectors where CollabCircle intends to apply its capability
              over time.
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Strategic role</h3>
            <p>
              This page gives the brand a practical horizon. It shows that the organization is
              thinking beyond internal activity and toward useful external outcomes.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
