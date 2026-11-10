"use client";

import type { Course } from "./course-data";
import { useCourseEnrollment } from "./elearn-client";
import styles from "./elearn-ui.module.css";

export function CertificateView({ course }: { course: Course }) {
  const { enrollment, ready } = useCourseEnrollment(course.slug);
  if (!ready || !enrollment) return <div className={styles.panel}><p>Enroll in this course first to view your certificate.</p><a className="button" href={`/elearn/${course.slug}`}>View course</a></div>;
  const complete = enrollment.completed.length === course.lessons.length;
  return <div className={styles.completion}>{complete ? <div className={styles.certificate}><p>COLLABCIRCLE ELEARN</p><h1>Certificate of Completion</h1><p>This certificate is proudly presented to</p><h2>{enrollment.name}</h2><p>for successfully completing</p><h2>{course.title}</h2><p>Issued by CollabCircle · {new Date().toLocaleDateString()}</p></div> : <><h2>Finish the course to unlock your certificate.</h2><a className="button" href={`/elearn/${course.slug}/learn`}>Continue learning</a></>}</div>;
}
