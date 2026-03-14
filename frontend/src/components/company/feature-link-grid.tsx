import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Building2,
  Compass,
  Cpu,
  Handshake,
  Microscope,
  Sparkles,
} from "lucide-react";
import type { FeatureLink } from "@/data/company-content";
import styles from "./feature-link-grid.module.css";

type FeatureLinkGridProps = {
  items: FeatureLink[];
  density?: "threeUp" | "dense";
};

const iconMap: Record<FeatureLink["icon"], LucideIcon> = {
  about: Building2,
  engineering: Cpu,
  impact: Sparkles,
  join: Handshake,
  mission: Compass,
  research: Microscope,
};

export function FeatureLinkGrid({
  items,
  density = "threeUp",
}: FeatureLinkGridProps) {
  return (
    <div className={`${styles.grid} ${density === "dense" ? styles.dense : styles.threeUp}`}>
      {items.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <article className={styles.card} key={item.href}>
            <div className={styles.topRow}>
              <div className={styles.title}>
                <h3>{item.label}</h3>
              </div>
              <span className={styles.iconWrap}>
                <Icon size={19} strokeWidth={2} />
              </span>
            </div>
            <p>{item.description}</p>
            <Link className={styles.link} href={item.href}>
              <span>{item.cta}</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
