import type { Metadata } from "next";
import { Handshake } from "lucide-react";
import { CollaborationGrid } from "@/components/research/collaboration-grid";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchCollaborations } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Collaborations",
};

export default function ResearchCollaborationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collaborations"
        icon={Handshake}
        intro="Research collaborators, institutional partners, and external contributors connected to the Research Wing."
        title="Collaborations across people and institutions."
      />

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Collaborator Directory</span>
            <h2>A dedicated space for the people and institutions connected to the lab.</h2>
            <p>
              This page is ready for collaboration profiles with image, profession, institution,
              and an optional LinkedIn profile link.
            </p>
          </div>

          <CollaborationGrid
            emptyCopy="Collaboration profiles will appear here once the Research Wing publishes its active external collaborator directory."
            emptyTitle="No collaborations have been published yet."
            items={researchCollaborations}
          />
        </div>
      </section>
    </>
  );
}
