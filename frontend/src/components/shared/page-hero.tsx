import type { LucideIcon } from "lucide-react";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  icon?: LucideIcon;
  titleSingleLine?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  icon: Icon,
  titleSingleLine = false,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.content}>
        {eyebrow || Icon ? (
          <div className={styles.kicker}>
            {Icon ? (
              <span className={styles.iconWrap}>
                <Icon size={18} strokeWidth={2} />
              </span>
            ) : null}
            {eyebrow ? <p>{eyebrow}</p> : null}
          </div>
        ) : null}
        <h1 className={titleSingleLine ? styles.singleLineTitle : undefined}>{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </div>
    </section>
  );
}
