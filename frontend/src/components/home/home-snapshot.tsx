import { ArrowUpRight, BookOpenText, BrainCircuit, ShieldCheck } from "lucide-react";
import Link from "next/link";
import styles from "./home-snapshot.module.css";

const snapshotItems = [
  {
    title: "Publication archive",
    description: "Conference and journal records presented as the public research-facing archive.",
    href: "/publications",
    icon: BrainCircuit,
  },
  {
    title: "Publication pathway",
    description: "Workflows built to move from experiments into strong papers.",
    href: "/publications",
    icon: BookOpenText,
  },
  {
    title: "Company direction",
    description: "See how CollabCircle is being shaped across research, development, and long-term growth.",
    href: "/about",
    icon: ShieldCheck,
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
