import type { Metadata } from "next";
import { Compass } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { missionVisionBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Mission & Vision",
};

const operatingValues = [
  "Stay rigorous in research and deliberate in engineering",
  "Keep systems organized enough for small teams to move well",
  "Build a public identity that can scale with the organization",
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        icon={Compass}
        intro="This section explains the long-range direction behind the new homepage structure and the company-ready positioning of CollabCircle."
        title="A clear mission, a long-term vision, and an operating promise that can scale."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {missionVisionBlocks.map((block) => (
            <article className={styles.card} key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>How this affects the website</h2>
            <p>
              The new landing page is no longer only a research homepage. It is the front door to a
              broader organization, with enough structure to hold both current work and future
              growth.
            </p>
            <ul className={styles.list}>
              {operatingValues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Practical outcome</h3>
            <p>
              Mission and vision should not sit as abstract text. They should shape the site
              structure, the navigation, and the clarity of each department.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
