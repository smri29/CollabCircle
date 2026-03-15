import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { CtaBanner } from "@/components/shared/cta-banner";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { principles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CollabCircle"
        icon={Building2}
        intro="A research organization built around structure, collaboration, and clarity."
        title="A disciplined lab culture with room to grow."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why it exists</h2>
            <p>
              CollabCircle is built on a simple belief: strong research needs clear systems, not
              just good ideas.
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Operating idea</h3>
            <p>Structure, writing, and execution should support each other.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={styles.cardGrid}>
          {principles.map((principle) => (
            <article className={styles.card} key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="The public-facing experience should stay as organized as the research behind it."
          eyebrow="Next step"
          primaryHref="/research"
          primaryLabel="View research"
          secondaryHref="/contact"
          secondaryLabel="Contact us"
          title="A clear lab should look clear from the outside too."
        />
      </section>
    </>
  );
}
