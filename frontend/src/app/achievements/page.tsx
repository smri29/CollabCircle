import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Trophy } from "lucide-react";
import styles from "@/components/achievements/achievement-page.module.css";
import { AchievementSectionGallery } from "@/components/achievements/achievement-section-gallery";
import { PageHero } from "@/components/shared/page-hero";
import { achievementShowcaseSections } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        icon={Trophy}
        intro="A record of CollabCircle activities, recognition, and milestone moments."
        title="Achievements through activity, participation, and recognition."
      />

      <section className="section">
        <div className={styles.sections}>
          {achievementShowcaseSections.map((section) => (
            <section className={styles.sectionBlock} key={section.id}>
              <div className={styles.sectionHeader}>
                <p className={styles.sectionLabel}>{section.title}</p>
                <h2>{section.title}</h2>
                <p className={styles.sectionIntro}>{section.intro}</p>
              </div>

              <AchievementSectionGallery sectionTitle={section.title} items={section.items} />
            </section>
          ))}
        </div>
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Join the journey</p>
            <h2>Be part of what CollabCircle is building.</h2>
            <p>
              Follow the milestones, explore the work more closely, or step in if you want to grow
              with the direction CollabCircle is shaping.
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
