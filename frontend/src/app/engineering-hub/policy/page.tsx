import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringPolicyBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Policy",
};

const workingRules = [
  "Engineering delivery should be understandable in ownership, scope, and intended result.",
  "Technical systems should favor maintainability over rushed complexity.",
  "Documentation and handoff quality are part of the engineering standard itself.",
  "AI-enabled systems should remain reviewable, accountable, and practically safe to operate.",
];

export default function EngineeringPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        icon={ShieldCheck}
        intro="The engineering department should make its delivery standards and technical expectations public."
        title="Engineering policy, standards, and operating discipline."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {engineeringPolicyBlocks.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.featureGrid}>
          <article className={wingStyles.featurePanel}>
            <span className={wingStyles.panelEyebrow}>Working Rules</span>
            <h3>These rules help the engineering hub behave like a serious delivery function.</h3>
            <ul className={wingStyles.keyList}>
              {workingRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>

          <aside className={wingStyles.sidePanel}>
            <span className={wingStyles.panelEyebrow}>Policy Role</span>
            <h3>Visible standards strengthen trust in how engineering will be executed.</h3>
            <p>
              Public engineering policy helps the department feel accountable before the full build
              function is scaled.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
