"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import type { Course } from "./course-data";
import { createCertificatePdf } from "./certificate-pdf";
import { useCourseEnrollment } from "./elearn-client";
import styles from "./elearn-ui.module.css";

export function CertificateView({ course }: { course: Course }) {
  const { enrollment, ready } = useCourseEnrollment(course.slug);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  const [nameScale, setNameScale] = useState(1);
  const learnerName = enrollment?.displayName ?? "";

  useLayoutEffect(() => {
    const nameElement = nameRef.current;
    if (!nameElement) return;

    const fitName = () => {
      const availableWidth = nameElement.clientWidth;
      const requiredWidth = nameElement.scrollWidth;
      setNameScale(requiredWidth > availableWidth ? availableWidth / requiredWidth : 1);
    };

    fitName();
    const resizeObserver = new ResizeObserver(fitName);
    resizeObserver.observe(nameElement);

    return () => resizeObserver.disconnect();
  }, [learnerName]);

  if (!ready || !enrollment) {
    return (
      <div className={styles.panel}>
        <p>Enroll in this course first to view your certificate.</p>
        <a className="button" href={`/elearn/${course.slug}`}>View course</a>
      </div>
    );
  }

  const complete = enrollment.progress.length === course.lessons.length;

  if (!complete || !enrollment.completedAt || !enrollment.certificate?.code) {
    return (
      <div className={styles.panel}>
        <h2>Finish the course to unlock your certificate.</h2>
        <a className="button" href={`/elearn/${course.slug}/learn`}>Continue learning</a>
      </div>
    );
  }

  const certificateEnrollment = enrollment;
  const completedAt = certificateEnrollment.completedAt!;
  const certificateCode = certificateEnrollment.certificate!.code;
  const completedDate = new Date(completedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  async function handleDownload() {
    setDownloadError(false);
    setIsDownloading(true);

    try {
      const pdfBytes = await createCertificatePdf({
        certificateCode,
        completedDate,
        courseName: course.title,
        learnerName: certificateEnrollment.displayName,
      });
      const pdfBuffer = new ArrayBuffer(pdfBytes.byteLength);
      new Uint8Array(pdfBuffer).set(pdfBytes);
      const blob = new Blob([pdfBuffer], { type: "application/pdf" });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = `collabcircle-certificate-${certificateCode}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch {
      setDownloadError(true);
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className={styles.completion}>
      <div className={styles.certificateFrame}>
        <Image
          alt="CollabCircle certificate design"
          className={styles.certificateImage}
          fill
          priority
          src="/Certificate%20Design/CollabCircle%20Certificate%20Template.png"
        />
        <div
          className={`${styles.certificateField} ${styles.certificateName}`}
          ref={nameRef}
          style={{ transform: `scaleX(${nameScale})` }}
        >
          {certificateEnrollment.displayName}
        </div>
        <div className={`${styles.certificateField} ${styles.certificateCourse}`}>{course.title}</div>
        <div className={`${styles.certificateField} ${styles.certificateMeta}`}>
          <span>{completedDate}</span>
          <span>Certificate Code: {certificateCode}</span>
        </div>
      </div>
      <div className={styles.certificateActions}>
        <button className="button" disabled={isDownloading} onClick={handleDownload} type="button">
          {isDownloading ? "Preparing..." : "Download"}
        </button>
        <button aria-label="Share certificate on LinkedIn (coming soon)" className="buttonGhost" disabled title="LinkedIn sharing will be configured later" type="button">
          <Linkedin aria-hidden="true" size={17} />
          LinkedIn
        </button>
        <button aria-label="Share certificate on Facebook (coming soon)" className="buttonGhost" disabled title="Facebook sharing will be configured later" type="button">
          <Facebook aria-hidden="true" size={17} />
          Facebook
        </button>
        <button aria-label="Share certificate on X (coming soon)" className="buttonGhost" disabled title="X sharing will be configured later" type="button">
          <Twitter aria-hidden="true" size={17} />
          X
        </button>
      </div>
      {downloadError ? <p className={styles.downloadError}>The certificate PDF could not be generated. Please try again.</p> : null}
    </div>
  );
}
