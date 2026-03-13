import type { LucideIcon } from "lucide-react";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  icon?: LucideIcon;
};

export function PageHero({ eyebrow, title, intro, icon: Icon }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.kicker}>
          {Icon ? (
            <span className={styles.iconWrap}>
              <Icon size={18} strokeWidth={2} />
            </span>
          ) : null}
          <p>{eyebrow}</p>
        </div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
