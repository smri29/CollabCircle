import { SectionHeading } from "@/components/shared/section-heading";
import { researchPillars } from "@/data/site-content";
import styles from "./research-pillars.module.css";

export function ResearchPillars() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Research areas"
        title="A focused set of themes that can grow into serious papers."
        intro="We keep the scope intentional. Each direction is broad enough to support multiple projects, but specific enough to maintain standards."
      />

      <div className={styles.grid}>
        {researchPillars.map((pillar) => (
          <article className={styles.card} key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
            <div className={styles.tags}>
              {pillar.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
