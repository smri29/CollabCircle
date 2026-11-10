import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { CourseEnrollment } from "@/eLearn/course-enrollment";
import { getCourse } from "@/eLearn/course-data";
import styles from "@/eLearn/elearn-ui.module.css";

export default async function LearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const course = getCourse((await params).slug); if (!course) notFound();
  return <><PageHero title={`Learning: ${course.title}`} /><section className="section"><div className={styles.panel}><p className={styles.label}>Your learning space</p><p>Complete each lesson below. Progress is saved locally in this browser for this frontend version.</p><CourseEnrollment course={course} /></div></section></>;
}
