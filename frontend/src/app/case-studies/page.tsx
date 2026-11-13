import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import styles from "@/components/shared/content-sections.module.css";

export const metadata: Metadata = {
  title: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        intro="A closer look at the problems, decisions, and outcomes behind selected CollabCircle work."
        title="Case Studies of CollabCircle."
      />

      <section className="section">
        <div className={styles.stack}>
          <article className={styles.panel}>
            <h2>Case studies are coming soon.</h2>
            <p>
              We are preparing detailed stories about the products, systems, and collaborations built by CollabCircle.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
