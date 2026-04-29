import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import sharedStyles from "@/components/shared/content-sections.module.css";
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
  title: "Engineering Hub",
};

const featuredServices = engineeringServices.slice(0, 3);
const featuredClients = engineeringClientGroups.slice(0, 3);
const featuredTechnologies = engineeringTechnologies.slice(0, 3);
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
        eyebrow="Engineering Hub"
        icon={Cpu}
        intro=""
        title="Welcome to the Engineering Hub."
      />

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Solutions &amp; Services</h2>
            </div>

            <Link className={styles.viewAllLink} href="/engineering-hub/solutions-services">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={sharedStyles.cardGrid}>
            {featuredServices.map((item) => (
              <article className={sharedStyles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={sharedStyles.pillList}>
                  <span className={sharedStyles.pill}>{item.scope}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Clients</h2>
            </div>

            <Link className={styles.viewAllLink} href="/engineering-hub/clients">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={sharedStyles.cardGrid}>
            {featuredClients.map((item) => (
              <article className={sharedStyles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={sharedStyles.pillList}>
                  <span className={sharedStyles.pill}>{item.fit}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Technologies</h2>
            </div>

            <Link className={styles.viewAllLink} href="/engineering-hub/technologies">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={sharedStyles.cardGrid}>
            {featuredTechnologies.map((item) => (
              <article className={sharedStyles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={sharedStyles.pillList}>
                  {item.tags.map((tag) => (
                    <span className={sharedStyles.pill} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
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
                <h3>{member.name}</h3>
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
