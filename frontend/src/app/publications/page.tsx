import type { Metadata } from "next";
import { PublicationDirectory } from "@/components/publications/publication-directory";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Research Archive of CollabCircle."
      />

      <section className="section">
        <PublicationDirectory />
      </section>
    </>
  );
}
