import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { newsroomItems, type NewsCategory } from "@/data/newsroom-content";
import styles from "./newsroom.module.css";

export const metadata: Metadata = {
  title: "Newsroom",
};

const categoryLabels: Record<NewsCategory, string> = {
  announcement: "Announcement",
  research: "Research Highlight",
  organization: "Organization Update",
};

const sortedItems = [...newsroomItems];
const archiveItems = sortedItems;

function renderLinkLabel(item: { href?: string; ctaLabel?: string }) {
  if (!item.href) {
    return null;
  }

  return item.ctaLabel ?? "Read update";
}

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        icon={Newspaper}
        intro=""
        title="Official updates and highlights from CollabCircle."
      />

      <section className="section">
        <div className={styles.sectionIntro}>
          <h2>Latest updates</h2>
        </div>
      </section>

      <section className="section">
        <div className={styles.archiveList}>
          {archiveItems.map((item) => (
            <article className={styles.archiveItem} key={item.id}>
              <div className={styles.archiveMeta}>
                <span className={styles.archiveBadge}>{categoryLabels[item.category]}</span>
                <span className={styles.dateLabel}>{item.publishedAt}</span>
              </div>

              <div className={styles.archiveBody}>
                <div className={styles.archiveHeader}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>

                {item.href ? (
                  <Link className={styles.archiveLink} href={item.href}>
                    <span>{renderLinkLabel(item)}</span>
                    <ArrowRight size={15} strokeWidth={2} />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Join the journey</p>
            <h2>Be part of what CollabCircle is building.</h2>
            <p>
              Follow the updates, explore the work more closely, or reach out if you want to be
              part of the direction CollabCircle is shaping.
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
