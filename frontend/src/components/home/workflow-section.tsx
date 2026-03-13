import { FlaskConical, PenTool, Rocket, SearchCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { workflowSteps } from "@/data/site-content";
import styles from "./workflow-section.module.css";

const workflowIcons = [SearchCheck, FlaskConical, PenTool, Rocket];

export function WorkflowSection() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Workflow"
        icon={Rocket}
        title="A compact process from idea to submission."
        intro="The work stays structured so research, writing, and review move together."
      />

      <div className={styles.timeline}>
        {workflowSteps.map((step, index) => {
          const Icon = workflowIcons[index];

          return (
          <article className={styles.step} key={step.step}>
            <div className={styles.topRow}>
              <span>{step.step}</span>
              <Icon size={18} strokeWidth={2} />
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
          );
        })}
      </div>
    </section>
  );
}
