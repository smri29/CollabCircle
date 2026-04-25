import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./member-grid.module.css";
import type { TeamMember } from "@/data/site-content";

type MemberGridProps = {
  eyebrow: string;
  title: string;
  intro: string;
  members: TeamMember[];
  placeholderCount?: number;
  emptyMessage?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function MemberGrid({
  eyebrow,
  title,
  intro,
  members,
  placeholderCount = 0,
  emptyMessage,
}: MemberGridProps) {
  const placeholders = Array.from({ length: placeholderCount }, (_, index) => index + 1);

  return (
    <section className="section">
      <div className={styles.header}>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      {members.length > 0 ? (
        <div className={styles.grid}>
          {members.map((member) => (
            <article className={styles.card} key={member.name}>
              <div className={styles.imageSlot} aria-hidden="true">
                <span>{getInitials(member.name)}</span>
              </div>
              <div className={styles.cardTop}>
                <span className={styles.role}>{member.role}</span>
              </div>
              <h3>{member.name}</h3>

              {member.profession ? (
                <div className={styles.noteCard}>
                  <h4>Profession</h4>
                  <p>{member.profession}</p>
                </div>
              ) : null}

              {member.institution ? (
                <div className={styles.fieldRow}>
                  <span className={styles.fieldLabel}>Institution</span>
                  <p>{member.institution}</p>
                </div>
              ) : null}

              {member.linkedinHref ? (
                <div className={styles.fieldRow}>
                  <span className={styles.fieldLabel}>LinkedIn</span>
                  <Link className={styles.profileLink} href={member.linkedinHref} rel="noreferrer" target="_blank">
                    <span>Open profile</span>
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>{emptyMessage}</p>
          <div className={styles.grid}>
            {placeholders.map((item) => (
              <article className={styles.placeholderCard} key={item}>
                <div className={styles.placeholderImage} aria-hidden="true" />
                <div>
                  <h3>Researcher Profile</h3>
                  <p>Placeholder for future researcher data and image.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
