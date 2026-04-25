import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import styles from "./policy.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchPolicyBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Policy",
};

export default function ResearchPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policy"
        icon={ShieldCheck}
        intro=""
        title="Policies of the Research Wing."
      />

      <section className="section">
        <div className={styles.accordion}>
          {researchPolicyBlocks.map((block) => (
            <details className={styles.item} key={block.title}>
              <summary className={styles.summary}>
                <h3>{block.title}</h3>
                <span aria-hidden="true" className={styles.chevron}>
                  v
                </span>
              </summary>
              <div className={styles.content}>
                <p>{block.description}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
