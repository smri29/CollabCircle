import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpenText,
  Building2,
  Compass,
  Cpu,
  Handshake,
  Mail,
  Microscope,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { FeatureLink } from "@/data/company-content";
import styles from "./feature-link-grid.module.css";

type FeatureLinkGridProps = {
  items: FeatureLink[];
  density?: "threeUp" | "dense";
};

const iconMap: Record<string, LucideIcon> = {
  about: Building2,
  contact: Mail,
  engineering: Cpu,
  impact: Sparkles,
  join: Handshake,
  mission: Compass,
  publication: BookOpenText,
  research: Microscope,
  team: UsersRound,
};

export function FeatureLinkGrid({
  items,
  density = "threeUp",
}: FeatureLinkGridProps) {
  const gridClassName =
    density === "dense" ? `${styles.grid} ${styles.dense}` : `${styles.grid} ${styles.threeUp}`;

  return (
    <div className={gridClassName}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? Sparkles;

        return (
          <article className={styles.card} key={item.href}>
            <div className={styles.header}>
              <div>
                <h3>{item.label}</h3>
              </div>
              <span className={styles.iconWrap}>
                <Icon size={20} strokeWidth={2} />
              </span>
            </div>

            <p className={styles.description}>{item.description}</p>

            <ul className={styles.points}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <Link className={styles.link} href={item.href}>
              <span>{item.cta}</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
