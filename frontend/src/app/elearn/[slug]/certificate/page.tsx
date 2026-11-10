import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { CertificateView } from "@/eLearn/certificate-view";
import { getCourse } from "@/eLearn/course-data";

export default async function CertificatePage({ params }: { params: Promise<{ slug: string }> }) {
  const course = getCourse((await params).slug); if (!course) notFound();
  return <><PageHero title="Course certificate" /><section className="section"><CertificateView course={course} /></section></>;
}
