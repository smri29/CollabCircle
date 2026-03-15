import type { Metadata } from "next";
import Link from "next/link";
import { UsersRound } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { joinPaths } from "@/data/company-content";
import { siteMeta } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        icon={UsersRound}
        intro="A simple place for future researchers, engineers, and collaborators."
        title="Grow with CollabCircle."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {joinPaths.map((path) => (
            <article className={styles.card} key={path.title}>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Start with a focused message</h2>
            <p>Tell us your background, your direction, and how you want to contribute.</p>
          </div>

          <aside className={styles.panel}>
            <h3>Best first step</h3>
            <p>
              Email
              {" "}
              <Link href={`mailto:${siteMeta.email}`}>{siteMeta.email}</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
