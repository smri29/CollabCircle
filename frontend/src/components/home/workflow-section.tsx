import { SectionHeading } from "@/components/shared/section-heading";
import { workflowSteps } from "@/data/site-content";
import styles from "./workflow-section.module.css";

export function WorkflowSection() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Workflow"
        title="A research process that stays coherent from concept to submission."
        intro="Good design is not separate from good operations. We use a project rhythm that keeps research, writing, and review aligned."
      />

      <div className={styles.timeline}>
        {workflowSteps.map((step) => (
          <article className={styles.step} key={step.step}>
            <span>{step.step}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
