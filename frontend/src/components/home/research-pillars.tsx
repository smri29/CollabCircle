import { BrainCircuit, Database, Waypoints } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { researchPillars } from "@/data/site-content";
import styles from "./research-pillars.module.css";

const pillarIcons = [Database, BrainCircuit, Waypoints];

export function ResearchPillars() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Research areas"
        icon={BrainCircuit}
        title="Three core research directions."
        intro="Each track is scoped to stay practical, readable, and publication-oriented."
      />

      <div className={styles.grid}>
        {researchPillars.map((pillar, index) => {
          const Icon = pillarIcons[index];

          return (
          <article className={styles.card} key={pillar.title}>
            <span className={styles.iconWrap}>
              <Icon size={18} strokeWidth={2} />
            </span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
            <div className={styles.tags}>
              {pillar.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
