import { HomeHero } from "@/components/home/home-hero";
import { HomeSnapshot } from "@/components/home/home-snapshot";
import { InsightStrip } from "@/components/home/insight-strip";
import { ResearchPillars } from "@/components/home/research-pillars";
import { WorkflowSection } from "@/components/home/workflow-section";
import { CtaBanner } from "@/components/shared/cta-banner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSnapshot />
      <ResearchPillars />
      <WorkflowSection />
      <InsightStrip />
      <section className="section">
        <CtaBanner
          description="The public-facing experience should stay clear, calm, and aligned with the research system behind it."
          eyebrow="Next move"
          primaryHref="/team"
          primaryLabel="Meet the team"
          secondaryHref="/contact"
          secondaryLabel="Contact CollabCircle"
          title="A cleaner research presence starts with a coherent interface."
        />
      </section>
    </>
  );
}
