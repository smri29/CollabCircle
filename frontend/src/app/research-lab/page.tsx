import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Microscope } from "lucide-react";
import collaborationStyles from "@/app/research-lab/collaborations/collaborations.module.css";
import projectStyles from "@/app/research-lab/projects/projects.module.css";
import trackStyles from "@/app/research-lab/research/research.module.css";
import styles from "@/components/research/research-home.module.css";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import { PageHero } from "@/components/shared/page-hero";
import {
  researchCollaborations,
  researchProjects,
} from "@/data/company-content";
import { researchPillars } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

const featuredTracks = [...researchPillars].slice(-3).reverse();
const featuredProjects = [...researchProjects].slice(-3).reverse();
const featuredCollaborations = [...researchCollaborations].slice(-3).reverse();
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
              <h2>Research Tracks</h2>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/research">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={trackStyles.trackGrid}>
            {featuredTracks.map((track) => (
              <article className={trackStyles.trackCard} key={track.title}>
                <div className={trackStyles.imageWrap}>
                  {track.image ? (
                    <Image
                      alt={track.title}
                      className={trackStyles.image}
                      height={360}
                      src={track.image}
                      width={480}
                    />
                  ) : (
                    <div className={trackStyles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(track.title)}</span>
                    </div>
                  )}
                </div>

                <div className={trackStyles.body}>
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
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
              <h2>Projects</h2>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/projects">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.homeGrid}>
            {featuredProjects.map((project) => (
              <article className={`${styles.homeCard} ${projectStyles.projectCard}`} key={project.title}>
                <div className={projectStyles.imageWrap}>
                  {project.image ? (
                    <Image
                      alt={project.title}
                      className={projectStyles.image}
                      height={360}
                      src={project.image}
                      width={480}
                    />
                  ) : (
                    <div className={projectStyles.imagePlaceholder} aria-hidden="true">
                      <span>{getInitials(project.title)}</span>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.noteCard}>
                  {project.liveLink ? (
                    <Link className={projectStyles.noteLink} href={project.liveLink} rel="noreferrer" target="_blank">
                      <span>Open project</span>
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </Link>
                  ) : (
                    <p className={styles.noteMuted}>Open project</p>
                  )}
                </div>
                <div className={styles.noteCard}>
                  <h4>Team</h4>
                  <p>{project.teamMembers.join(", ")}</p>
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
