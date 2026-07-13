import type { LucideIcon } from "lucide-react";
import { BackButton } from "./back-button";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  icon?: LucideIcon;
  titleSingleLine?: boolean;
  backHref?: string;
  backLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  icon: Icon,
  titleSingleLine = false,
  backHref,
  backLabel = "Back",
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.content}>
        {backHref ? (
          <div className={styles.topRow}>
            <BackButton href={backHref} label={backLabel} />
          </div>
        ) : null}
        <div className={styles.kicker}>
          {Icon ? (
            <span className={styles.iconWrap}>
              <Icon size={18} strokeWidth={2} />
            </span>
          ) : null}
          <p>{eyebrow}</p>
        </div>
        <h1 className={titleSingleLine ? styles.singleLineTitle : undefined}>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
