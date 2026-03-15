"use client";

import { useState } from "react";
import {
  ExternalLink,
  Fingerprint,
  LibraryBig,
  UsersRound,
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

function PublicationCard({
  item,
  type,
}: {
  item: PublicationRecord;
  type: PublicationTab;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{item.title}</h3>
        <span className={styles.typeBadge}>{type === "journal" ? "Journal" : "Conference"}</span>
      </div>

      <div className={styles.metaList}>
        <div>
          <div className={styles.metaLabel}>
            <LibraryBig size={15} strokeWidth={2} />
            <span>Journal/Conference</span>
          </div>
          <p>{item.venue}</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <Fingerprint size={15} strokeWidth={2} />
            <span>DOI</span>
          </div>
          <p>{item.doi}</p>
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

        <div>
          <div className={styles.metaLabel}>
            <UsersRound size={15} strokeWidth={2} />
            <span>Authors</span>
          </div>
          <p>{item.authors.join(", ")}</p>
        </div>
      </div>
    </article>
  );
}

function PlaceholderCard({ type }: { type: PublicationTab }) {
  return (
    <article className={`${styles.card} ${styles.placeholderCard}`}>
      <div className={styles.cardHeader}>
        <h3>Publication record will appear here</h3>
        <span className={styles.typeBadge}>{type === "journal" ? "Journal" : "Conference"}</span>
      </div>

      <div className={styles.metaList}>
        <div>
          <div className={styles.metaLabel}>
            <LibraryBig size={15} strokeWidth={2} />
            <span>Journal/Conference</span>
          </div>
          <p>To be added</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <Fingerprint size={15} strokeWidth={2} />
            <span>DOI</span>
          </div>
          <p>To be added</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <ExternalLink size={15} strokeWidth={2} />
            <span>Link</span>
          </div>
          <p>To be added</p>
        </div>

        <div>
          <div className={styles.metaLabel}>
            <UsersRound size={15} strokeWidth={2} />
            <span>Authors</span>
          </div>
          <p>To be added</p>
        </div>
      </div>
    </article>
  );
}

export function PublicationDirectory() {
  const [activeTab, setActiveTab] = useState<PublicationTab>("journal");
  const activeItems = activeTab === "journal" ? journalPublications : conferencePublications;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2>Publication archive</h2>
          <p>Switch between journal and conference records.</p>
        </div>

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
              <PublicationCard item={item} key={`${activeTab}-${item.title}`} type={activeTab} />
            ))
          : Array.from({ length: 2 }, (_, index) => (
              <PlaceholderCard key={`${activeTab}-${index + 1}`} type={activeTab} />
            ))}
      </div>
    </section>
  );
}
