import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Microscope, UsersRound } from "lucide-react";
import sharedStyles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { recruitmentProcess, recruitmentTracks } from "@/data/company-content";
import { siteMeta } from "@/data/site-content";
import styles from "./join-us.module.css";

export const metadata: Metadata = {
  title: "Career",
};

const trackIcons = {
  researcher: Microscope,
  engineer: Cpu,
} as const;

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        icon={UsersRound}
        intro="Choose the track that best matches how you want to contribute to CollabCircle."
        title="Apply as a Researcher or Engineer."
      />

      <section className="section">
        <div className={styles.introCard}>
          <p>
            Choose the form that best matches your interests and background, complete the
            application, and share clear details about the kind of contribution you want to make.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.trackGrid}>
          {recruitmentTracks.map((track) => {
            const Icon = trackIcons[track.id as keyof typeof trackIcons];

            return (
              <article className={styles.trackCard} key={track.id}>
                <div className={styles.trackTop}>
                  <p className={styles.eyebrow}>
                    <Icon size={16} strokeWidth={2} />
                    {" "}
                    {track.title} Track
                  </p>
                  <h2>{track.title}</h2>
                  <p>{track.description}</p>
                </div>

                <div className={styles.detailBlock}>
                  <h3>Who should apply</h3>
                  <p className={styles.audience}>{track.audience}</p>
                </div>

                <div className={styles.detailBlock}>
                  <h3>What we expect</h3>
                  <ul className={styles.detailList}>
                    {track.expectations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.ctaBlock}>
                  <a
                    className="button"
                    href={track.googleFormUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{track.ctaLabel}</span>
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </a>
                  <p className={styles.ctaHint}>The application form opens in a new tab.</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className={styles.processShell}>
          <div className={styles.processIntro}>
            <h2>What happens after you apply</h2>
            <p>
              Submit the form that fits your track. Every application is reviewed manually, and
              shortlisted applicants will be contacted through the information they provide.
            </p>
          </div>

          <div className={sharedStyles.timeline}>
            {recruitmentProcess.map((item) => (
              <article className={sharedStyles.timelineItem} key={item.step}>
                <span className={sharedStyles.timelineLabel}>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={sharedStyles.gridTwo}>
          <div className={sharedStyles.stack}>
            <h2>Questions before you apply?</h2>
            <p>Use the FAQ page for practical answers about the application flow, review process, and what to expect.</p>
            <Link href="/faq">
              <span>Open FAQ</span>
            </Link>
          </div>

          <aside className={sharedStyles.panel}>
            <h3>Need help first?</h3>
            <p>
              For questions before applying, contact
              {" "}
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
