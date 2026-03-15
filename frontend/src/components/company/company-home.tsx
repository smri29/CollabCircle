import Link from "next/link";
import { ArrowRight, Compass, Cpu, Microscope } from "lucide-react";
import {
  aboutCompanyPoints,
  companyLinks,
  landingFeatures,
} from "@/data/company-content";
import { FeatureLinkGrid } from "./feature-link-grid";
import styles from "./company-home.module.css";

const spotlightItems = [
  {
    title: "Research Lab",
    description: "The current public research system.",
  },
  {
    title: "Engineering Hub",
    description: "The future technical build layer.",
  },
  {
    title: "Impact Sector",
    description: "The practical horizon of the company.",
  },
];

export function CompanyHome() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles.panel}>
          <div className={styles.panelInner}>
            <p className={styles.eyebrow}>CollabCircle</p>
            <h1>Research now. Engineering next. Built with a long view.</h1>
            <p className={styles.lead}>
              The homepage now frames CollabCircle as a future-ready organization, not only a
              research site.
            </p>
            <div className={styles.actions}>
              <Link className="button" href="/research-lab">
                <Microscope size={18} strokeWidth={2} />
                <span>Open Research Lab</span>
              </Link>
              <Link className="buttonGhost" href="/engineering-hub">
                <Cpu size={18} strokeWidth={2} />
                <span>View Engineering Hub</span>
              </Link>
            </div>
            <div className={styles.micro}>
              <span>Research</span>
              <span>Engineering</span>
              <span>Impact</span>
            </div>
          </div>
        </article>

        <aside className={styles.aside}>
          <div className={styles.asideInner}>
            <p className={styles.asideLabel}>Structure</p>
            <h2>A cleaner front door for the full company story.</h2>
            <div className={styles.asideCards}>
              {spotlightItems.map((item) => (
                <article className={styles.asideCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Main pillars</p>
          <h2>Three clear parts, each with its own purpose.</h2>
          <p>The landing page guides visitors into the right branch of the organization.</p>
        </div>
        <FeatureLinkGrid items={landingFeatures} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Company layer</p>
          <h2>The broader identity sits above the current research work.</h2>
          <p>These sections keep the brand future-ready without making the site feel crowded.</p>
        </div>
        <FeatureLinkGrid items={companyLinks} />
      </section>

      <section className={styles.section}>
        <article className={styles.note}>
          <div className={styles.noteInner}>
            <div className={styles.noteCopy}>
              <p className={styles.eyebrow}>
                <Compass size={16} strokeWidth={2} />
                <span>Why this change</span>
              </p>
              <h2>The website should reflect the institution you plan to build.</h2>
              <p>
                The research side stays accessible, while the homepage becomes a stronger company
                entry point.
              </p>
              <ul className={styles.noteList}>
                {aboutCompanyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <aside className={styles.noteAside}>
              <h3>Next step</h3>
              <p>
                We can now keep expanding research and engineering without overloading the landing
                page.
              </p>
              <Link className={styles.linkInline} href="/join-us">
                <span>See where people fit in</span>
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
