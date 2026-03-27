import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";

const newsroomTracks = [
  {
    title: "Announcements",
    description: "Official updates, milestones, and important public notices.",
  },
  {
    title: "Research highlights",
    description: "Readable summaries of papers, experiments, and technical progress.",
  },
  {
    title: "Team stories",
    description: "Moments, events, and organizational growth worth sharing.",
  },
];

export const metadata: Metadata = {
  title: "Newsroom",
};

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        icon={Newspaper}
        intro="A dedicated place for public updates and future storytelling."
        title="News, updates, and highlights from CollabCircle."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {newsroomTracks.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Current status</h2>
            <p>This page is ready to receive announcements, updates, and media-ready content as it is published.</p>
          </div>

          <aside className={styles.panel}>
            <h3>Contact for updates</h3>
            <p>
              For official communication, use
              {" "}
              <Link href="/contact">Contact Us</Link>.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
