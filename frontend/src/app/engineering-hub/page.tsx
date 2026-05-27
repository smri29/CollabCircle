import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import styles from "./engineering-home.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import {
  engineeringClientGroups,
  engineeringServices,
  engineeringTechnologies,
} from "@/data/company-content";
import { executiveMembers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Engineering Department",
};

const featuredServices = engineeringServices;
const featuredClients = engineeringClientGroups;
const featuredTechnologies = engineeringTechnologies;
const featuredTeam = executiveMembers.slice(0, 3);

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function EngineeringHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Department"
        icon={Cpu}
        intro=""
        title="Engineering Wing of CollabCircle"
      />

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.servicesHeader}>
            <div className={styles.sectionIntro}>
              <h2>Solutions &amp; Services</h2>
            </div>
            <Link className={styles.viewAllLink} href="/engineering-hub/solutions-services">
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
          <div className={styles.audienceHeaderRow}>
            <div className={styles.sectionIntro}>
              <h2>Who We Build For</h2>
            </div>
            <Link className={styles.viewAllLink} href="/engineering-hub/clients">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
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
        <div className={styles.sectionStack}>
          <div className={styles.technologyHeader}>
            <div className={styles.sectionIntro}>
              <h2>Technologies</h2>
            </div>
            <Link className={styles.viewAllLink} href="/engineering-hub/technologies">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.technologyTable}>
            <div className={styles.technologyRail}>
              {featuredTechnologies.map((item, index) => (
                <details className={styles.technologyBand} key={item.title}>
                  <summary className={styles.technologyBandSummary}>
                    <div className={styles.technologyBandTop}>
                      <span className={styles.technologyBandIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className={styles.technologyBandBody}>
                      <h3>{item.title}</h3>
                    </div>
                    <span className={styles.technologyChevron} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className={styles.technologyBandContent}>
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
              <h2>Team</h2>
            </div>

            <Link className={styles.viewAllLink} href="/engineering-hub/team">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.teamGrid}>
            {featuredTeam.map((member) => (
              <article className={styles.teamCard} key={member.name}>
                <div className={styles.teamImageSlot} aria-hidden="true">
                  <span>{getInitials(member.name)}</span>
                </div>
                <div className={styles.teamCopy}>
                  <h3>{member.name}</h3>
                  <p>{member.profession ?? member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <YouTubeShowcase />
      </section>
    </>
  );
}
