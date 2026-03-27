import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { latestAchievements } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        icon={Trophy}
        intro="Milestones, team moments, and progress worth documenting."
        title="A growing record of what CollabCircle has accomplished."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {latestAchievements.map((item) => (
            <article className={styles.card} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why this page exists</h2>
            <p>Achievements give visitors a quick way to see real progress, not just future plans.</p>
          </div>

          <aside className={styles.panel}>
            <h3>Next stop</h3>
            <p>
              Learn more about the organization on
              {" "}
              <Link href="/about-us">About Us</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
