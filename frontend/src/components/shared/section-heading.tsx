import type { LucideIcon } from "lucide-react";
import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  icon?: LucideIcon;
};

export function SectionHeading({ eyebrow, title, intro, icon: Icon }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.kicker}>
        {Icon ? (
          <span className={styles.iconWrap}>
            <Icon size={16} strokeWidth={2} />
          </span>
        ) : null}
        <p className={styles.eyebrow}>{eyebrow}</p>
      </div>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}
