import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { aboutCompanyPoints } from "@/data/company-content";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        icon={Building2}
        intro="CollabCircle is growing from a research foundation into a broader company idea."
        title="A research-rooted organization with a bigger future in view."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Company-level identity</h2>
            <ul className={styles.list}>
              {aboutCompanyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>What changed</h3>
            <p>The site now reflects both the current research phase and the longer engineering vision.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
