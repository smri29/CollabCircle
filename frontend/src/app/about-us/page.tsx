import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { FeatureLinkGrid } from "@/components/company/feature-link-grid";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { aboutCompanyPoints, homeDivisions } from "@/data/company-content";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        icon={Building2}
        intro="This page describes CollabCircle at the organization level rather than only through its current research activity."
        title="An evolving organization with research roots and a broader company future."
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Who CollabCircle is becoming</h2>
            <p>
              CollabCircle is being shaped with the future in mind. The organization starts from a
              research-centered foundation, but the website now acknowledges the longer path toward
              engineering capability and broader technical impact.
            </p>
            <ul className={styles.list}>
              {aboutCompanyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Identity shift</h3>
            <p>
              The brand now speaks at two levels: what CollabCircle is today and what CollabCircle
              is preparing to become.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <FeatureLinkGrid items={homeDivisions} />
      </section>
    </>
  );
}
