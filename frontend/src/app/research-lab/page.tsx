import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Microscope } from "lucide-react";
import collaborationStyles from "@/app/research-lab/collaborations/collaborations.module.css";
import { PublicationPreviewGrid } from "@/components/publications/publication-directory";
import styles from "@/components/research/research-home.module.css";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import { PageHero } from "@/components/shared/page-hero";
import { researchCollaborations } from "@/data/company-content";
import teamStyles from "@/components/team/member-grid.module.css";
import { currentResearchers } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

const featuredCollaborations = [...researchCollaborations].slice(-3).reverse();
const featuredResearchers = currentResearchers.slice(0, 3);
const placeholderCollaborations = Array.from({ length: 3 }, (_, index) => ({
  id: `homepage-placeholder-${index + 1}`,
  name: "Collaborator Name",
  profession: "Profession",
  institution: "Institution",
  projectName: "Project Name",
  image: null,
  linkedinHref: undefined,
}));

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ResearchLabPage() {
  const collaborationItems =
    featuredCollaborations.length > 0
      ? featuredCollaborations.map((item) => ({
          ...item,
          key: `${item.name}-${item.institution}-${item.projectName}`,
        }))
      : placeholderCollaborations.map((item) => ({
          ...item,
          key: item.id,
        }));

  return (
    <>
      <PageHero
        eyebrow="Research Department"
        icon={Microscope}
        intro=""
        title="Research Wing of CollabCircle."
      />

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Projects &amp; Publications</h2>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/publications">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <PublicationPreviewGrid />
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Team</h2>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/team">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={teamStyles.grid}>
            {featuredResearchers.map((member) => (
              <article className={teamStyles.card} key={member.name}>
                <div className={teamStyles.imageSlot} aria-hidden="true">
                  <span>{getInitials(member.name)}</span>
                </div>
                <div className={teamStyles.cardTop}>
                  <span className={teamStyles.role}>{member.role}</span>
                </div>
                <h3>{member.name}</h3>

                {member.profession ? (
                  <div className={teamStyles.noteCard}>
                    <h4>Profession</h4>
                    <p>{member.profession}</p>
                  </div>
                ) : null}

                {member.institution ? (
                  <div className={teamStyles.fieldRow}>
                    <span className={teamStyles.fieldLabel}>Institution</span>
                    <p>{member.institution}</p>
                  </div>
                ) : null}

                {member.linkedinHref ? (
                  <div className={teamStyles.fieldRow}>
                    <span className={teamStyles.fieldLabel}>LinkedIn</span>
                    <Link className={teamStyles.profileLink} href={member.linkedinHref} rel="noreferrer" target="_blank">
                      <span>Open profile</span>
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <h2>Collaborations</h2>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/collaborations">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={collaborationStyles.grid}>
            {collaborationItems.map((item) => (
              <article className={collaborationStyles.card} key={item.key}>
                <div className={collaborationStyles.imageWrap}>
                  {item.image ? (
                    <Image
                      alt={item.name}
                      className={collaborationStyles.image}
                      height={360}
                      src={item.image}
                      width={480}
                    />
                  ) : (
                    <div className={collaborationStyles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(item.name)}</span>
                    </div>
                  )}
                </div>

                <div className={collaborationStyles.body}>
                  <h2>{item.name}</h2>
                  <p className={collaborationStyles.profession}>{item.profession}</p>
                  <p className={collaborationStyles.institution}>{item.institution}</p>
                  <p className={collaborationStyles.projectName}>{item.projectName}</p>
                </div>

                <div className={collaborationStyles.note}>
                  {item.linkedinHref ? (
                    <Link className={collaborationStyles.noteLink} href={item.linkedinHref} rel="noreferrer" target="_blank">
                      <span>LinkedIn</span>
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                  ) : (
                    <p className={collaborationStyles.noteMuted}>LinkedIn</p>
                  )}
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
