import type { Metadata } from "next";
import { Compass } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { missionVisionBlocks } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Mission & Vision",
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Vision"
        icon={Compass}
        intro="The long-range direction behind the new structure."
        title="A concise mission, a 2030 vision, and a clear operating promise."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {missionVisionBlocks.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
