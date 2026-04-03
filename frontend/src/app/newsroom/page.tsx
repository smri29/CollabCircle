import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import sharedStyles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { newsroomCategories, newsroomItems, type NewsCategory } from "@/data/newsroom-content";
import { siteMeta } from "@/data/site-content";
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
const featuredItem =
  sortedItems.find((item) => item.featured) ??
  sortedItems[0];
const archiveItems = sortedItems.filter((item) => item.id !== featuredItem?.id);

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
        intro="A public record of announcements, research visibility, and organization milestones."
        title="Official updates and highlights from CollabCircle."
      />

      {featuredItem ? (
        <section className="section">
          <article className={styles.featuredCard}>
            <div className={styles.metaRow}>
              <span className={styles.categoryBadge}>{categoryLabels[featuredItem.category]}</span>
              <span className={styles.dateLabel}>{featuredItem.publishedAt}</span>
            </div>

            <div className={styles.featuredContent}>
              <h2>{featuredItem.title}</h2>
              <p>{featuredItem.summary}</p>
            </div>

            {featuredItem.href ? (
              <div>
                <Link className="button" href={featuredItem.href}>
                  <span>{renderLinkLabel(featuredItem)}</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </div>
            ) : null}

            <p className={styles.featuredHint}>Featured update</p>
          </article>
        </section>
      ) : null}

      <section className="section">
        <div className={styles.sectionIntro}>
          <h2>What you will find here</h2>
          <p>
            The newsroom is the public update layer of CollabCircle. It highlights official
            announcements, research-facing visibility, and visible organization progress.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.categoryGrid}>
          {newsroomCategories.map((item) => (
            <article className={styles.categoryCard} key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionIntro}>
          <h2>Latest updates</h2>
          <p>Recent entries remain dated and categorized so visitors can quickly understand what changed and why it matters.</p>
        </div>
      </section>

      <section className="section">
        <div className={styles.archiveGrid}>
          {archiveItems.map((item) => (
            <article className={styles.archiveCard} key={item.id}>
              <div className={styles.archiveHeader}>
                <div className={styles.metaRow}>
                  <span className={styles.archiveBadge}>{categoryLabels[item.category]}</span>
                  <span className={styles.dateLabel}>{item.publishedAt}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>

              {item.href ? (
                <Link className={styles.archiveLink} href={item.href}>
                  <span>{renderLinkLabel(item)}</span>
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={sharedStyles.gridTwo}>
          <div className={sharedStyles.stack}>
            <h2>Why this page exists</h2>
            <p>
              Evergreen pages explain what CollabCircle is and where it is going. The newsroom is
              different: it records what has recently happened, what has been launched, and what is
              publicly worth noting right now.
            </p>
          </div>

          <aside className={sharedStyles.panel}>
            <h3>What belongs here</h3>
            <ul className={sharedStyles.list}>
              <li>Official announcements and launches</li>
              <li>Research-facing public updates</li>
              <li>Organization progress and milestones</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={sharedStyles.gridTwo}>
          <div className={sharedStyles.stack}>
            <h2>Official communication</h2>
            <p>
              For questions about announcements, collaborations, or official communication, use the
              contact page or reach out through the organization email.
            </p>
          </div>

          <aside className={sharedStyles.panel}>
            <h3>Contact for updates</h3>
            <p>
              Use
              {" "}
              <Link href="/contact">Contact Us</Link>
              {" "}
              or email
              {" "}
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
