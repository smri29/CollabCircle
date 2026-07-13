import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import projectCardStyles from "@/components/development/development-project-card.module.css";
import styles from "./development-home.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import {
  developmentClientGroups,
  developmentProjects,
  developmentServices,
} from "@/data/company-content";

export const metadata: Metadata = {
  title: "Development Wing",
};

const featuredServices = developmentServices;
const featuredProjects = [...developmentProjects].slice(-3).reverse();
const featuredClients = developmentClientGroups;

export default function DevelopmentWingPage() {
  return (
    <>
      <PageHero
        backHref="/"
        eyebrow="Development Wing"
        icon={Cpu}
        intro=""
        title="Development Wing of CollabCircle"
      />

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.servicesHeader}>
            <div className={styles.sectionIntro}>
              <h2>Solutions &amp; Services</h2>
            </div>
            <Link className={styles.viewAllLink} href="/development-wing/solutions-services">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.servicesTable}>
            <div className={styles.servicesRail}>
              {featuredServices.map((item, index) => (
                <details
                  className={index === 0 ? styles.serviceFeatureCard : styles.serviceCard}
                  key={item.title}
                >
                  <summary className={styles.serviceSummary}>
                    <div className={styles.serviceTop}>
                      <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={styles.serviceBody}>
                      <h3>{item.title}</h3>
                    </div>
                    <span className={styles.serviceChevron} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className={styles.serviceContent}>
                    <p>{item.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Projects</h2>
            </div>
            <Link className={styles.viewAllLink} href="/development-wing/projects">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={projectCardStyles.grid}>
            {featuredProjects.map((item, index) => (
              <DevelopmentProjectCard index={index} key={item.title} project={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.audienceHeaderRow}>
            <div className={styles.sectionIntro}>
              <h2>Who We Build For</h2>
            </div>
          </div>

          <div className={styles.audienceShowcase}>
            <div className={styles.audienceGrid}>
              {featuredClients.map((item) => (
                <article className={styles.audienceCard} key={item.title}>
                  <div className={styles.audienceTop}>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <YouTubeShowcase />
      </section>
    </>
  );
}
