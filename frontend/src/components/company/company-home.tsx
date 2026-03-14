import Link from "next/link";
import { ArrowRight, Compass, Cpu, Microscope } from "lucide-react";
import {
  aboutCompanyPoints,
  homeDivisions,
  homeSpotlights,
  strategicLinks,
} from "@/data/company-content";
import { FeatureLinkGrid } from "./feature-link-grid";
import styles from "./company-home.module.css";

export function CompanyHome() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles.heroPanel}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Future-ready CollabCircle</p>
            <h1>Research today. Engineering tomorrow. One long-horizon organization.</h1>
            <p className={styles.lead}>
              CollabCircle is being shaped as more than a research website. The new landing page
              positions the organization for a future where a disciplined research lab and a strong
              engineering hub can grow under one identity.
            </p>

            <div className={styles.actions}>
              <Link className="button" href="/research-lab">
                <Microscope size={18} strokeWidth={2} />
                <span>Open Research Lab</span>
              </Link>
              <Link className="buttonGhost" href="/engineering-hub">
                <Cpu size={18} strokeWidth={2} />
                <span>Explore Engineering Hub</span>
              </Link>
            </div>

            <div className={styles.microNote}>
              <span>The existing research experience now lives under the Research Lab gateway.</span>
              <span>
                The homepage becomes the broader company-facing entry point for the next phase.
              </span>
            </div>
          </div>
        </article>

        <aside className={styles.spotlightPanel}>
          <div className={styles.spotlightIntro}>
            <p>Homepage structure</p>
            <h2>A cleaner front door for the company-level story.</h2>
          </div>

          <div className={styles.spotlightCards}>
            {homeSpotlights.map((item) => (
              <article className={styles.spotlightCard} key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Main pillars</p>
          <h2>The homepage now introduces CollabCircle through its major directions.</h2>
          <p>
            Instead of mixing every research page directly into the top navigation, the site now
            presents a company-level structure first and lets each department have its own space.
          </p>
        </div>

        <FeatureLinkGrid items={homeDivisions} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p>Strategic sections</p>
          <h2>The rest of the navigation explains who we are, what we believe, and how people join.</h2>
          <p>
            These sections help the site feel intentional now while leaving room for CollabCircle
            to grow into a broader technology company later.
          </p>
        </div>

        <FeatureLinkGrid density="threeUp" items={strategicLinks} />
      </section>

      <section className={styles.section}>
        <article className={styles.storyPanel}>
          <div className={styles.storyGrid}>
            <div className={styles.storyStack}>
              <p className={styles.eyebrow}>
                <Compass size={16} strokeWidth={2} />
                <span>Why this matters</span>
              </p>
              <h2>The website should already reflect the institution you plan to become.</h2>
              <p>
                A future company needs a cleaner story than a page-by-page research menu. This
                structure gives CollabCircle a clearer public identity now without losing the work
                we have already completed.
              </p>
              <ul className={styles.storyList}>
                {aboutCompanyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <aside className={styles.storyAside}>
              <h3>Next layer</h3>
              <p>
                The research side stays intact under one gateway, and the engineering side gets its
                own dedicated section as we keep iterating.
              </p>
              <Link className={styles.linkInline} href="/join-us">
                <span>See where people can fit in</span>
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </aside>
          </div>
        </article>
      </section>
    </>
  );
}
