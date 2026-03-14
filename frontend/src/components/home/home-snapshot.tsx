import { ArrowUpRight, BookOpenText, BrainCircuit, UsersRound } from "lucide-react";
import Link from "next/link";
import styles from "./home-snapshot.module.css";

const snapshotItems = [
  {
    title: "Focused research",
    description: "ML and DL projects shaped for clean execution and credible outcomes.",
    href: "/research",
    icon: BrainCircuit,
  },
  {
    title: "Publication pathway",
    description: "Workflows built to move from experiments into strong papers.",
    href: "/publications",
    icon: BookOpenText,
  },
  {
    title: "Compact team structure",
    description: "Clear ownership and smaller teams that can maintain quality.",
    href: "/team",
    icon: UsersRound,
  },
];

export function HomeSnapshot() {
  return (
    <section className={styles.section}>
      {snapshotItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link className={styles.card} href={item.href} key={item.title}>
            <span className={styles.iconWrap}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <div className={styles.copy}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <ArrowUpRight size={18} strokeWidth={2} />
          </Link>
        );
      })}
    </section>
  );
}
