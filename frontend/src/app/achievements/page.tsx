import type { Metadata } from "next";
import { Trophy } from "lucide-react";
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
    </>
  );
}
