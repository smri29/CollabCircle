"use client";

import { useState } from "react";
import { ExternalLink, FileText, Fingerprint, LibraryBig, UsersRound } from "lucide-react";
import {
  conferencePublications,
  journalPublications,
  type PublicationRecord,
} from "@/data/publication-content";
import styles from "./publication-directory.module.css";

type PublicationTab = "journal" | "conference";

const fieldIcons = {
  venue: LibraryBig,
  doi: Fingerprint,
  link: ExternalLink,
  authors: UsersRound,
} as const;

const tabs: Array<{
  key: PublicationTab;
  label: string;
  count: number;
}> = [
  {
    key: "journal",
    label: "Journal",
    count: journalPublications.length,
  },
  {
    key: "conference",
    label: "Conference",
    count: conferencePublications.length,
  },
];

function PublicationCard({
  publication,
  typeLabel,
}: {
  publication: PublicationRecord;
  typeLabel: string;
}) {
  const LinkIcon = fieldIcons.link;
  const VenueIcon = fieldIcons.venue;
  const DoiIcon = fieldIcons.doi;
  const AuthorsIcon = fieldIcons.authors;

  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.typeBadge}>{typeLabel}</span>
        <FileText size={18} strokeWidth={2} />
      </div>

      <h3>{publication.title}</h3>

      <div className={styles.metaList}>
        <div>
          <span className={styles.metaLabel}>
            <VenueIcon size={15} strokeWidth={2} />
            Journal/Conference
          </span>
          <p>{publication.venue}</p>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <DoiIcon size={15} strokeWidth={2} />
            DOI
          </span>
          <p>{publication.doi}</p>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <LinkIcon size={15} strokeWidth={2} />
            Link
          </span>
          <a href={publication.link} rel="noreferrer" target="_blank">
            Open publication
          </a>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <AuthorsIcon size={15} strokeWidth={2} />
            Authors
          </span>
          <p>{publication.authors.join(", ")}</p>
        </div>
      </div>
    </article>
  );
}

function PlaceholderCard({ typeLabel }: { typeLabel: string }) {
  const LinkIcon = fieldIcons.link;
  const VenueIcon = fieldIcons.venue;
  const DoiIcon = fieldIcons.doi;
  const AuthorsIcon = fieldIcons.authors;

  return (
    <article className={styles.placeholderCard}>
      <div className={styles.cardHeader}>
        <span className={styles.typeBadge}>{typeLabel}</span>
        <FileText size={18} strokeWidth={2} />
      </div>

      <h3>Publication record</h3>

      <div className={styles.metaList}>
        <div>
          <span className={styles.metaLabel}>
            <VenueIcon size={15} strokeWidth={2} />
            Journal/Conference
          </span>
          <p>To be added</p>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <DoiIcon size={15} strokeWidth={2} />
            DOI
          </span>
          <p>To be added</p>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <LinkIcon size={15} strokeWidth={2} />
            Link
          </span>
          <p>To be added</p>
        </div>

        <div>
          <span className={styles.metaLabel}>
            <AuthorsIcon size={15} strokeWidth={2} />
            Authors
          </span>
          <p>To be added</p>
        </div>
      </div>
    </article>
  );
}

export function PublicationDirectory() {
  const [activeTab, setActiveTab] = useState<PublicationTab>("journal");

  const activeRecords =
    activeTab === "journal" ? journalPublications : conferencePublications;
  const typeLabel = activeTab === "journal" ? "Journal" : "Conference";

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <p>Publication directory</p>
          <h2>Browse journal and conference publications in one organized archive.</h2>
        </div>

        <div className={styles.tabGroup} role="tablist" aria-label="Publication type">
          {tabs.map((tab) => (
            <button
              aria-selected={activeTab === tab.key}
              className={activeTab === tab.key ? styles.tabActive : styles.tab}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              type="button"
            >
              <span>{tab.label}</span>
              <small>{tab.count}</small>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {activeRecords.length > 0
          ? activeRecords.map((publication) => (
              <PublicationCard
                key={`${typeLabel}-${publication.title}`}
                publication={publication}
                typeLabel={typeLabel}
              />
            ))
          : Array.from({ length: 3 }, (_, index) => (
              <PlaceholderCard key={`${typeLabel}-${index}`} typeLabel={typeLabel} />
            ))}
      </div>
    </section>
  );
}
