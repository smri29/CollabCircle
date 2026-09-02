"use client";

import { useState } from "react";
import {
  ExternalLink,
  ScrollText,
} from "lucide-react";
import {
  conferencePublications,
  journalPublications,
  type PublicationRecord,
} from "@/data/publication-content";
import styles from "./publication-directory.module.css";

type PublicationTab = "journal" | "conference";

const tabs = [
  { id: "journal" as const, label: "Journal", count: journalPublications.length },
  { id: "conference" as const, label: "Conference", count: conferencePublications.length },
];

function PublicationCard({ item }: { item: PublicationRecord }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Research Record</h3>
      </div>

      <div className={styles.metaList}>
        <div className={styles.metaBlock}>
          <div className={styles.metaLabel}>
            <ScrollText size={15} strokeWidth={2} />
            <span>Paper Title</span>
          </div>
          <p className={styles.paperTitle}>{item.title}</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <ExternalLink size={15} strokeWidth={2} />
            <span>Link</span>
          </div>
          <a href={item.link} rel="noreferrer" target="_blank">
            Open publication
          </a>
        </div>

      </div>
    </article>
  );
}

function PlaceholderCard() {
  return (
    <article className={`${styles.card} ${styles.placeholderCard}`}>
      <div className={styles.cardHeader}>
        <h3>Research Record</h3>
      </div>

      <div className={styles.metaList}>
        <div className={styles.metaBlock}>
          <div className={styles.metaLabel}>
            <ScrollText size={15} strokeWidth={2} />
            <span>Paper Title</span>
          </div>
          <p className={styles.paperTitle}>To be added</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <ExternalLink size={15} strokeWidth={2} />
            <span>Link</span>
          </div>
          <p>To be added</p>
        </div>

      </div>
    </article>
  );
}

export function PublicationPreviewGrid() {
  const latestJournalItems = journalPublications.map((item) => ({
    item,
    type: "journal" as const,
  }));
  const latestConferenceItems = conferencePublications.map((item) => ({
    item,
    type: "conference" as const,
  }));
  const latestItems = [...latestJournalItems, ...latestConferenceItems].slice(-4).reverse();

  return (
    <div className={styles.grid}>
      {latestItems.length > 0
        ? latestItems.map(({ item, type }) => (
            <PublicationCard item={item} key={`${type}-${item.title}`} />
          ))
        : [
            <PlaceholderCard key="preview-journal-1" />,
            <PlaceholderCard key="preview-conference-1" />,
            <PlaceholderCard key="preview-journal-2" />,
            <PlaceholderCard key="preview-conference-2" />,
          ]}
    </div>
  );
}

export function PublicationDirectory() {
  const [activeTab, setActiveTab] = useState<PublicationTab>("journal");
  const activeItems = activeTab === "journal" ? journalPublications : conferencePublications;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.tabGroup} aria-label="Publication type">
          {tabs.map((tab) => (
            <button
              className={activeTab === tab.id ? styles.tabActive : styles.tab}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {activeItems.length > 0
          ? activeItems.map((item) => (
              <PublicationCard item={item} key={`${activeTab}-${item.title}`} />
            ))
          : Array.from({ length: 2 }, (_, index) => (
              <PlaceholderCard key={`${activeTab}-${index + 1}`} />
            ))}
      </div>
    </section>
  );
}
