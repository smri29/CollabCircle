import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import styles from "@/components/shared/content-sections.module.css";

export const metadata: Metadata = {
  title: "Reports",
};

export default function ReportsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reports"
        intro="A dedicated space for CollabCircle reports and future reporting initiatives."
        title="Reports from CollabCircle."
      />

      <section className="section">
        <div className={styles.stack}>
          <article className={styles.panel}>
            <h2>Reports are coming soon.</h2>
            <p>We are preparing this space for future CollabCircle reports.</p>
          </article>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <h3>Research reports</h3>
              <p>Future reports covering research findings, benchmarks, and applied technology insights.</p>
            </article>
            <article className={styles.card}>
              <h3>Product reports</h3>
              <p>Future reports documenting product decisions, engineering work, and measurable outcomes.</p>
            </article>
            <article className={styles.card}>
              <h3>Impact reports</h3>
              <p>Future reports sharing CollabCircle initiatives, collaborations, and broader impact.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
