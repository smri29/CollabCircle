import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";
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
          <Link className={styles.backLink} href={backHref}>
            <ArrowLeft size={16} strokeWidth={2} />
            <span>{backLabel}</span>
          </Link>
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
