import { HomeHero } from "@/components/home/home-hero";
import { InsightStrip } from "@/components/home/insight-strip";
import { ResearchPillars } from "@/components/home/research-pillars";
import { WorkflowSection } from "@/components/home/workflow-section";
import { CtaBanner } from "@/components/shared/cta-banner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ResearchPillars />
      <WorkflowSection />
      <InsightStrip />
      <section className="section">
        <CtaBanner
          description="If you want to build CollabCircle as a serious research presence, the interface, structure, and project rhythm should all point in the same direction."
          eyebrow="Next move"
          primaryHref="/team"
          primaryLabel="See the team model"
          secondaryHref="/contact"
          secondaryLabel="Open collaboration channels"
          title="A polished research organization starts with a coherent system."
        />
      </section>
    </>
  );
}
