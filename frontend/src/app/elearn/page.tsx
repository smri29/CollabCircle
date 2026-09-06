import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/shared/coming-soon-banner";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "eLearn",
  description: "Practical learning paths from CollabCircle.",
};

export default function ELearnPage() {
  return (
    <>
      <PageHero
        title="Learn what matters. Build what lasts."
      />
      <ComingSoonBanner />
    </>
  );
}
