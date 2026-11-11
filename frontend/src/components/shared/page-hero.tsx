import type { LucideIcon } from "lucide-react";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  icon?: LucideIcon;
  titleSingleLine?: boolean;
  compactTitle?: boolean;
  transparent?: boolean;
  wideIntro?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  icon: Icon,
  titleSingleLine = false,
  compactTitle = false,
  transparent = false,
  wideIntro = false,
}: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${transparent ? styles.transparentHero : ""}`}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`${styles.content} ${transparent ? styles.transparentContent : ""}`}>
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
        <h1 className={`${titleSingleLine ? styles.singleLineTitle : ""} ${compactTitle ? styles.compactTitle : ""}`}>{title}</h1>
        {intro ? <p className={wideIntro ? styles.wideIntro : undefined}>{intro}</p> : null}
      </div>
    </section>
  );
}
