import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import type { ResearchCollaboration } from "@/data/company-content";
import styles from "./collaboration-grid.module.css";

type CollaborationGridProps = {
  items: ResearchCollaboration[];
  emptyTitle: string;
  emptyCopy: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function CollaborationGrid({ items, emptyTitle, emptyCopy }: CollaborationGridProps) {
  if (items.length === 0) {
    return (
      <article className={styles.emptyState}>
        <h3>{emptyTitle}</h3>
        <p>{emptyCopy}</p>
      </article>
    );
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article className={styles.card} key={`${item.name}-${item.institution}`}>
          <div className={styles.imageWrap}>
            {item.image ? (
              <Image
                alt={item.name}
                className={styles.image}
                height={320}
                src={item.image}
                width={320}
              />
            ) : (
              <div className={styles.placeholder} aria-hidden="true">
                <span>{getInitials(item.name)}</span>
              </div>
            )}
          </div>

          <div className={styles.body}>
            <h3>{item.name}</h3>
            <p className={styles.profession}>{item.profession}</p>
            <p className={styles.institution}>{item.institution}</p>

            {item.linkedinHref ? (
              <Link
                className={styles.link}
                href={item.linkedinHref}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin size={16} strokeWidth={2} />
                <span>LinkedIn Profile</span>
              </Link>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
