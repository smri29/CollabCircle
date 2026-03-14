import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringFocusAreas } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Engineering Hub",
};

const engineeringNotes = [
  "Future products and software systems",
  "Internal tools and technical platforms",
  "A bridge from research to delivery",
];

export default function EngineeringHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Hub"
        icon={Cpu}
        intro="A future home for the engineering side of CollabCircle."
        title="Where products, systems, and technical delivery will grow."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {engineeringFocusAreas.map((area) => (
            <article className={styles.card} key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Built for the next phase</h2>
            <ul className={styles.list}>
              {engineeringNotes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Long-term role</h3>
            <p>This area will expand as CollabCircle moves from research foundation to company execution.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
