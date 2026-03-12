import Link from "next/link";
import { principles, publicationStandards } from "@/data/site-content";
import styles from "./insight-strip.module.css";

export function InsightStrip() {
  return (
    <section className={styles.section}>
      <article className={styles.feature}>
        <p>Design principle</p>
        <h2>Front-facing polish should reflect backend discipline, not hide the lack of it.</h2>
        <div className={styles.featureList}>
          {principles.map((principle) => (
            <div key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </article>

      <article className={styles.standards}>
        <div className={styles.topRow}>
          <div>
            <p>Publication standard</p>
            <h2>Outputs should look credible before they ask for attention.</h2>
          </div>
          <Link href="/publications">See publication model</Link>
        </div>

        <div className={styles.standardList}>
          {publicationStandards.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
