import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { CtaBanner } from "@/components/shared/cta-banner";
import { PageHero } from "@/components/shared/page-hero";
import { engineeringFocusAreas } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Engineering Hub",
};

const engineeringPrinciples = [
  "Build software systems that make research capability usable",
  "Design internal tools and future products with clarity and reliability",
  "Create a bridge from experimentation to deployable technical value",
];

export default function EngineeringHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Hub"
        icon={Cpu}
        intro="This section introduces the future engineering department CollabCircle plans to grow into as the organization moves toward a broader company identity."
        title="A future home for products, systems, tooling, and technical delivery."
      />

      <section className="section">
        <div className={styles.cardGrid}>
          {engineeringFocusAreas.map((area) => (
            <article className={styles.card} key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Why this section exists now</h2>
            <p>
              Even if the engineering department is still a future plan, the website should already
              make room for it. That gives CollabCircle a more honest long-term structure and keeps
              the brand from feeling limited to one current phase.
            </p>
            <ul className={styles.list}>
              {engineeringPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Future build-out</h3>
            <p>
              This section can later expand into products, case studies, internal platforms,
              service offerings, and engineering team visibility.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <CtaBanner
          description="The engineering side will become more specific as we define products, software systems, and technical priorities."
          eyebrow="Next department"
          primaryHref="/mission-vision"
          primaryLabel="Read mission and vision"
          secondaryHref="/join-us"
          secondaryLabel="See joining paths"
          title="The engineering hub is the long-term build layer of CollabCircle."
        />
      </section>
    </>
  );
}
