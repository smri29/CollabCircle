import Link from "next/link";
import { ArrowRight, Cpu, Microscope } from "lucide-react";
import styles from "./gateway-section.module.css";

const gatewayItems = [
  {
    href: "/research-lab",
    title: "Research Lab",
    description:
      "Exploring the frontiers of AI, signal processing, and data science to solve tomorrow's problems.",
    themeClassName: styles.research,
    Icon: Microscope,
  },
  {
    href: "/engineering-hub",
    title: "Engineering Hub",
    description:
      "Architecting robust, scalable systems and technical infrastructure for the next stage of CollabCircle.",
    themeClassName: styles.engineering,
    Icon: Cpu,
  },
];

export function GatewaySection() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>Choose the part of CollabCircle you want to enter.</h2>
      </div>

      <div className={styles.gateway}>
        {gatewayItems.map(({ href, title, description, themeClassName, Icon }) => (
          <Link className={`${styles.panel} ${themeClassName}`} href={href} key={href}>
            <div className={styles.blob} aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.iconWrap}>
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.cta}>
                <span>Enter</span>
                <ArrowRight size={16} strokeWidth={2} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
