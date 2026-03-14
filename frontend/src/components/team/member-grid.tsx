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
          {members.map((member, index) => (
            <article className={styles.card} key={member.name}>
              <div className={styles.imageSlot} aria-hidden="true">
                <span>{getInitials(member.name)}</span>
              </div>
              <div className={styles.cardTop}>
                <span className={styles.serial}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.role}>{member.role}</span>
              </div>
              <h3>{member.name}</h3>
              <p>Image slot ready for future Cloudinary integration.</p>
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
