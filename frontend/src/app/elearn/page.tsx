import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { CourseCard } from "@/eLearn/course-card";
import { courses } from "@/eLearn/course-data";
import styles from "@/eLearn/elearn-ui.module.css";

export const metadata: Metadata = { title: "eLearn", description: "Free practical learning paths from CollabCircle." };

export default function ELearnPage() {
  return <><PageHero title="Learn what matters. Build what lasts." /><section className="section">
    <div className={styles.grid}>{courses.map((course) => <CourseCard course={course} key={course.slug} />)}</div>
  </section></>;
}
