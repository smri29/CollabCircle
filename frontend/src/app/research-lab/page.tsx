import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import { CollaborationGrid } from "@/components/research/collaboration-grid";
import styles from "@/components/research/research-home.module.css";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import sharedStyles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import {
  researchCollaborations,
  researchProjects,
} from "@/data/company-content";
import { researchPillars } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Research Lab",
};

const featuredTracks = researchPillars.slice(0, 3);
const featuredProjects = researchProjects.slice(0, 3);
const featuredCollaborations = researchCollaborations.slice(0, 3);

export default function ResearchLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Research Lab"
        icon={Microscope}
        intro="The home page of the Research Wing, organized around active tracks, projects, collaborations, and public video updates."
        title="Research Wing of CollabCircle."
      />

      <section className="section">
        <div className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIntro}>
              <span className={styles.eyebrow}>Research Tracks</span>
              <h2>The core research directions currently visible from the lab.</h2>
              <p>
                These tracks show the problem spaces and methods that shape the current research
                direction of CollabCircle.
              </p>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/research">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={sharedStyles.cardGrid}>
            {featuredTracks.map((track) => (
              <article className={sharedStyles.card} key={track.title}>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <div className={sharedStyles.pillList}>
                  {track.tags.map((tag) => (
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
              <span className={styles.eyebrow}>Projects</span>
              <h2>Current research work and documented milestones.</h2>
              <p>
                The project preview keeps active and completed work visible from the department
                home page before visitors go deeper.
              </p>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/projects">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <div className={sharedStyles.cardGrid}>
            {featuredProjects.map((project) => (
              <article className={sharedStyles.card} key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className={sharedStyles.pillList}>
                  <span className={sharedStyles.pill}>{project.focus}</span>
                  <span className={sharedStyles.pill}>
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
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
              <span className={styles.eyebrow}>Collaborations</span>
              <h2>People and institutions connected to the Research Wing.</h2>
              <p>
                This section is ready to show collaboration profiles with image, profession,
                institution, and an optional LinkedIn profile.
              </p>
            </div>

            <Link className={styles.viewAllLink} href="/research-lab/collaborations">
              <span>View all</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>

          <CollaborationGrid
            emptyCopy="No collaboration profiles are published yet. This section is ready for real collaborator entries as they become available."
            emptyTitle="Collaboration directory coming soon."
            items={featuredCollaborations}
          />
        </div>
      </section>

      <section className="section">
        <YouTubeShowcase />
      </section>
    </>
  );
}
