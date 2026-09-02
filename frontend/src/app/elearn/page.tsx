import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "eLearn",
  description: "Practical learning paths from CollabCircle.",
};

export default function ELearnPage() {
  return (
    <>
      <PageHero
        intro="Sharpen your thinking, expand your skills, and turn curiosity into practical capability across research, engineering, and secure technology."
        title="Learn boldly. Build what lasts."
      />
    </>
  );
}
