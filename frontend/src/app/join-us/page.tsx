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
        intro="This page creates a clear invitation for the kinds of people who may want to grow with CollabCircle over time."
        title="A place for researchers, future engineers, and long-term collaborators."
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
            <h2>What we want from future collaborators</h2>
            <p>
              The strongest fit is someone who values consistency, ownership, and organized
              execution. We are building patiently, so long-term alignment matters more than noise.
            </p>
            <p>
              If you want to work with CollabCircle, the best first move is still a focused message
              that explains your background and how you want to contribute.
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Start here</h3>
            <p>
              Email remains the clearest path for serious outreach.
              {" "}
              <Link href={`mailto:${siteMeta.email}`}>{siteMeta.email}</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
