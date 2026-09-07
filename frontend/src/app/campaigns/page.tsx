import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/shared/coming-soon-banner";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "Campaigns and interactive experiences from CollabCircle.",
};

export default function CampaignsPage() {
  return (
    <>
      <PageHero title="Ideas made to move people." />
      <ComingSoonBanner />
    </>
  );
}
