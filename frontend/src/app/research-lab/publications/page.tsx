import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { PublicationDirectory } from "@/components/publications/publication-directory";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Publications",
};

export default function ResearchPublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        icon={BookOpenText}
        intro=""
        title="Research Archive of CollabCircle."
      />

      <section className="section">
        <PublicationDirectory />
      </section>
    </>
  );
}
