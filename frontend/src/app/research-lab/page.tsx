import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import { CollaborationGrid } from "@/components/research/collaboration-grid";
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

const featuredTracks = researchPillars.slice(0, 3);
const featuredProjects = researchProjects.slice(0, 3);
const featuredCollaborations = researchCollaborations.slice(0, 3);

export default function ResearchLabPage() {
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

          <div className={styles.previewGrid}>
            {featuredTracks.map((track) => (
              <article className={styles.previewCard} key={track.title}>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
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

          <div className={styles.previewGrid}>
            {featuredProjects.map((project) => (
              <article className={styles.previewCard} key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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
