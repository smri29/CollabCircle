import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Campaigns",
  description: "Campaigns and interactive experiences from CollabCircle.",
};

export default function CampaignsPage() {
  return (
    <PageHero
      intro="A dedicated space for the ideas, interactive experiences, and public initiatives that bring CollabCircle's work into the world."
      title="Ideas made to move people."
    />
  );
}
