import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";
import styles from "./research.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchPillars } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Tracks",
};

const trackSignals = [
  {
    label: "Track Count",
    value: "3",
  },
];

function getInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ResearchTracksPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Tracks"
        icon={BrainCircuit}
        intro="The active research tracks that shape how the wing frames and executes technical work."
        title="Research areas and working tracks."
      />

      <section className="section">
        <div className={wingStyles.metricGrid}>
          {trackSignals.map((item) => (
            <article className={wingStyles.metricCard} key={item.label}>
              <span className={wingStyles.metricLabel}>{item.label}</span>
              <strong className={wingStyles.metricValue}>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={styles.trackGrid}>
            {researchPillars.map((pillar) => (
              <article className={styles.trackCard} key={pillar.title}>
                <div className={styles.imageWrap}>
                  {pillar.image ? (
                    <Image
                      alt={pillar.title}
                      className={styles.image}
                      height={360}
                      src={pillar.image}
                      width={480}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(pillar.title)}</span>
                    </div>
                  )}
                </div>

                <div className={styles.body}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Join the journey</p>
            <h2>Be part of what CollabCircle is building.</h2>
            <p>
              Explore the research direction more closely, follow the active tracks, or step in if
              you want to contribute to the work taking shape inside the wing.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link className="button" href="/career">
              <span>Explore Careers</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link className={styles.secondaryCta} href="/contact">
              <span>Contact Us</span>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
