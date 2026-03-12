import Link from "next/link";
import { heroSignals } from "@/data/site-content";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Research organization website</p>
        <h1>Where collaborative research is shaped with rigor and style.</h1>
        <p className={styles.lead}>
          CollabCircle brings machine learning and deep learning research into a more disciplined
          workflow, where experimentation, documentation, and publication strategy move together.
        </p>

        <div className={styles.actions}>
          <Link className="button" href="/research">
            Explore Research
          </Link>
          <Link className="buttonGhost" href="/about">
            See How We Work
          </Link>
        </div>

        <div className={styles.ribbon}>
          <span>ML systems</span>
          <span>DL experimentation</span>
          <span>Publication-ready writing</span>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.orbit} aria-hidden="true" />
        {heroSignals.map((signal, index) => (
          <article
            className={styles.signalCard}
            key={signal.value}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <p>{signal.value}</p>
            <span>{signal.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
