import Link from "next/link";
import { ArrowRight, FileCheck2, FlaskConical, Radar } from "lucide-react";
import { heroSignals } from "@/data/site-content";
import styles from "./home-hero.module.css";

const signalIcons = [Radar, FlaskConical, FileCheck2];

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Research organization website</p>
        <h1>Collaborative research, organized for clarity.</h1>
        <p className={styles.lead}>
          CollabCircle is building a more disciplined way to run ML and DL projects, where
          experiments, writing, and publication goals stay aligned from the start.
        </p>

        <div className={styles.actions}>
          <Link className="button" href="/research">
            <span>Explore Research</span>
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <Link className="buttonGhost" href="/about">
            See How We Work
          </Link>
        </div>

        <div className={styles.ribbon}>
          <span>ML research</span>
          <span>DL experiments</span>
          <span>Paper-ready outputs</span>
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
            <span className={styles.iconWrap}>
              {(() => {
                const Icon = signalIcons[index];
                return <Icon size={18} strokeWidth={2} />;
              })()}
            </span>
            <p>{signal.value}</p>
            <span>{signal.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
