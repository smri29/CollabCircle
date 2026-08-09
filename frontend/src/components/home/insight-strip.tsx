import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { principles, publicationStandards } from "@/data/site-content";
import styles from "./insight-strip.module.css";

export function InsightStrip() {
  return (
    <section className={styles.section}>
      <article className={styles.feature}>
        <div className={styles.kicker}>
          <ShieldCheck size={16} strokeWidth={2} />
          <p>Operating principle</p>
        </div>
        <h2>Presentation should match the quality of the work behind it.</h2>
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
            <div className={styles.kicker}>
              <Sparkles size={16} strokeWidth={2} />
              <p>Publication model</p>
            </div>
            <h2>Outputs should be easy to trust at first glance.</h2>
          </div>
          <Link href="/publications">
            <span>See more</span>
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
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
