import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import productCardStyles from "@/components/development/development-project-card.module.css";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import { developmentProjects } from "@/data/company-content";
import servicesStyles from "./services-preview.module.css";
import styles from "./company-home.module.css";

const featuredProducts = [...developmentProjects].slice(-3).reverse();

const solutionAreas = [
  {
    title: "Research",
    description: "Explore what's possible before committing to what gets built.",
    services: [
      {
        title: "Applied Research & Technology Strategy",
        description:
          "Explore emerging technologies, evaluate feasibility, and turn complex technical questions into actionable technology roadmaps.",
      },
      {
        title: "AI Research & Prototyping",
        description:
          "Experiment, benchmark and validate AI concepts through rapid prototypes before committing to production-scale implementation.",
      },
    ],
  },
  {
    title: "Engineering",
    description: "Turn validated ideas into reliable systems engineered for production.",
    services: [
      {
        title: "Software & Product Engineering",
        description:
          "Design and build secure, scalable digital products and enterprise systems from concept to production.",
      },
      {
        title: "AI & Intelligent Systems",
        description:
          "Build production-ready AI and machine learning systems that transform data into intelligent products, decisions and experiences.",
      },
      {
        title: "Cloud & Platform Engineering",
        description:
          "Architect resilient cloud platforms, distributed systems and data infrastructure engineered for scale, reliability and performance.",
      },
      {
        title: "AI Agents & Automation",
        description:
          "Automate complex workflows with intelligent agents that securely connect your data, applications and business processes.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    description: "Protect products, platforms and infrastructure by building security into every layer.",
    services: [
      {
        title: "Security Assessment & Offensive Testing",
        description:
          "Identify vulnerabilities across applications, APIs and infrastructure before they can be exploited.",
      },
      {
        title: "Application & Cloud Security",
        description:
          "Secure applications, infrastructure and cloud environments throughout their architecture and deployment lifecycle.",
      },
      {
        title: "DevSecOps & Secure Engineering",
        description:
          "Embed security into software development through secure coding, automated testing and continuous security controls.",
      },
    ],
  },
  {
    title: "Specialized Solutions",
    description: "Adapt focused technical work to complex organizational requirements.",
    services: [
      {
        title: "Immersive & Spatial Experiences",
        description:
          "AR/VR applications, interactive environments and immersive digital experiences.",
      },
      {
        title: "Gamification & Interactive Campaigns",
        description:
          "Game mechanics and interactive technology designed for engagement, education and campaigns.",
      },
      {
        title: "Simulation & Visualization",
        description:
          "Interactive simulations and visualization systems for training, demonstration and complex information.",
      },
    ],
  },
];

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

      <section className="section" aria-labelledby="solutions-services-heading">
        <div className={servicesStyles.sectionStack}>
          <div className={servicesStyles.servicesHeader}>
            <div className={servicesStyles.sectionIntro}>
              <div className={servicesStyles.sectionCopy}>
                <h2 id="solutions-services-heading">Solutions &amp; Services</h2>
                <h3>From research to resilient systems.</h3>
                <p>
                  We explore emerging technologies, engineer production-grade solutions, and secure
                  the systems organizations depend on.
                </p>
              </div>
            </div>
          </div>
          <div className={servicesStyles.solutionList}>
            {solutionAreas.map((area) => (
              <details className={servicesStyles.solutionOption} key={area.title}>
                <summary>
                  <span className={servicesStyles.solutionOptionTitle}>{area.title}</span>
                  <span className={servicesStyles.solutionOptionControl} aria-hidden="true">+</span>
                </summary>
                <div className={servicesStyles.solutionOptionContent}>
                  <p>{area.description}</p>
                  <ul>
                    {area.services.map((service, index) => (
                      <li key={service.title}>
                        <span className={servicesStyles.solutionServiceIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <strong>{service.title}</strong>
                          {service.description ? <small>{service.description}</small> : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={servicesStyles.sectionStack}>
          <div className={servicesStyles.servicesHeader}>
            <div className={servicesStyles.sectionIntro}>
              <div className={servicesStyles.sectionCopy}>
                <h2>Products</h2>
                <h3>Technology shaped for real-world use.</h3>
                <p>
                  Explore systems, platforms, and digital experiences designed to turn complex needs
                  into durable outcomes.
                </p>
              </div>
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
            <h2>At a glance</h2>
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
            <h2>Location</h2>
            <p className={styles.locationDescription}>
              Our work connects research, technology, and collaboration from Bangladesh to a wider
              community.
            </p>
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
