import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import productCardStyles from "@/components/development/development-project-card.module.css";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import { developmentProjects, developmentServices } from "@/data/company-content";
import servicesStyles from "./services-preview.module.css";
import styles from "./company-home.module.css";

const featuredServices = developmentServices;
const featuredProducts = [...developmentProjects].slice(-3).reverse();

export function CompanyHome() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles.panel}>
          <div className={styles.panelInner}>
            <h1>Research now. Development next. Built with a long view.</h1>
            <p className={styles.lead}>
              Driving innovation in Machine Learning &amp; Deep Learning through open collaboration
              and impactful research.
            </p>
            <Link className={`button ${styles.heroCta}`} href="/join-us">
              <span>Explore Careers</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <div className={servicesStyles.sectionStack}>
          <div className={servicesStyles.servicesHeader}>
            <div className={servicesStyles.sectionIntro}>
              <h2>Solutions &amp; Services</h2>
            </div>
          </div>

          <div className={servicesStyles.servicesTable}>
            <div className={servicesStyles.servicesRail}>
              {featuredServices.map((item, index) => (
                <details
                  className={index === 0 ? servicesStyles.serviceFeatureCard : servicesStyles.serviceCard}
                  key={item.title}
                >
                  <summary className={servicesStyles.serviceSummary}>
                    <div className={servicesStyles.serviceTop}>
                      <span className={servicesStyles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className={servicesStyles.serviceBody}>
                      <h3>{item.title}</h3>
                    </div>
                    <span className={servicesStyles.serviceChevron} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className={servicesStyles.serviceContent}>
                    <p>{item.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={servicesStyles.sectionStack}>
          <div className={servicesStyles.servicesHeader}>
            <div className={servicesStyles.sectionIntro}>
              <h2>Products</h2>
            </div>
            <Link className={servicesStyles.viewAllLink} href="/products">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={productCardStyles.grid}>
            {featuredProducts.map((project, index) => (
              <DevelopmentProjectCard index={index} key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.impactPanel}>
          <div className={styles.sectionHeader}>
            <p>At a glance</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>20+</span>
              <span className={styles.statLabel}>Team Members</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>2+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>16+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>7+</span>
              <span className={styles.statLabel}>Collaborators</span>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.section}>
        <article className={styles.locationPanel}>
          <div className={styles.locationCopy}>
            <p className={styles.eyebrow}>
              <MapPinned size={16} strokeWidth={2} />
              <span>Location</span>
            </p>
            <h3>CollabCircle is rooted in Mirpur, Dhaka, Bangladesh.</h3>
            <a
              className={styles.locationLink}
              href="https://www.google.com/maps?q=Mirpur,Dhaka,Bangladesh"
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
          </div>

          <div className={styles.mapFrameWrap}>
            <iframe
              aria-label="Google Map showing Mirpur, Dhaka, Bangladesh"
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Mirpur,Dhaka,Bangladesh&z=14&output=embed"
            />
          </div>
        </article>

        <YouTubeShowcase />
      </section>
    </>
  );
}
