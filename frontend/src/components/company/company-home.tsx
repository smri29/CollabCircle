import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Trophy } from "lucide-react";
import {
  aboutCompanyPoints,
  companyLinks,
  landingFeatures,
  latestAchievements,
} from "@/data/company-content";
import { FeatureLinkGrid } from "./feature-link-grid";
import styles from "./company-home.module.css";



export function CompanyHome() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles.panel}>
          <div className={styles.panelInner}>
            <p className={styles.eyebrow}>CollabCircle</p>
            <h1>Research now. Engineering next. Built with a long view.</h1>
            <p className={styles.lead}>
              Driving innovation in Machine Learning &amp; Deep Learning through open collaboration and impactful research.
            </p>
            <Link className={`button ${styles.heroCta}`} href="/join-us">
              <span>Join CollabCircle</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </article>

        {latestAchievements[0] && (
          <aside className={styles.aside}>
            <div className={styles.asideInner}>

              {/* Label */}
              <p className={styles.asideLabel}>
                <Trophy size={12} strokeWidth={2.5} style={{ display: "inline", marginRight: "0.35rem", verticalAlign: "middle" }} />
                Latest Achievement
              </p>

              {/* Title | divider | description — horizontal meta row */}
              <div className={styles.achievementMeta}>
                <h2 className={styles.achievementTitle}>{latestAchievements[0].title}</h2>
                <span className={styles.achievementDivider} aria-hidden="true" />
                <p className={styles.achievementDesc}>{latestAchievements[0].description}</p>
              </div>

              {/* Image — full natural ratio, no cropping */}
              <div className={styles.achievementImageWrap}>
                <Image
                  alt={latestAchievements[0].title}
                  className={styles.achievementImage}
                  height={0}
                  priority
                  sizes="(max-width: 960px) 100vw, 45vw"
                  src={latestAchievements[0].image}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  width={0}
                />
                <span className={styles.achievementDate}>{latestAchievements[0].date}</span>
              </div>

              {/* Link below image */}
              {latestAchievements[0].href && (
                <Link className={styles.achievementLink} href={latestAchievements[0].href}>
                  <span>View all achievements</span>
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              )}

            </div>
          </aside>
        )}
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
