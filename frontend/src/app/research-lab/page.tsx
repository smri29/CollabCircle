import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchLabLinks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

export default function ResearchLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Lab"
        icon={Microscope}
        intro="The current research-facing side of CollabCircle lives here."
        title="Everything built so far, organized under one lab."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {researchLabLinks.map((item) => (
            <article className={styles.card} key={item.href}>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <Link href={item.href}>
                <span>Open page</span>
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why this gateway matters</h2>
            <p>The landing page now tells the company story. This page keeps the research side focused.</p>
          </div>

          <aside className={styles.panel}>
            <h3>Current scope</h3>
            <p>Research directions, publications, team, and contact remain easy to reach from here.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
