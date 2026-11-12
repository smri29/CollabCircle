"use client";

import { useEffect, useState } from "react";

export type Enrollment = {
  name: string;
  completed: string[];
  enrolledAt: string;
  completedAt?: string;
  certificateCode?: string;
};

const keyFor = (slug: string) => `collabcircle-elearn-${slug}`;
const certificateSequenceKey = "collabcircle-certificate-sequence";

function nextCertificateCode() {
  const storedSequence = Number.parseInt(
    window.localStorage.getItem(certificateSequenceKey) ?? "0",
    10,
  );
  const sequence = Number.isFinite(storedSequence) ? storedSequence + 1 : 1;

  window.localStorage.setItem(certificateSequenceKey, String(sequence));
  return `cc14062500a${sequence}`;
}

export function useCourseEnrollment(slug: string) {
  const [enrollment, setEnrollment] = useState<Enrollment | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(keyFor(slug));
    // Browser storage must be read after hydration; this synchronizes the UI with localStorage.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnrollment(stored ? JSON.parse(stored) : null);
    setReady(true);
  }, [slug]);

  function enroll(name: string) {
    const next = { name: name.trim(), completed: [], enrolledAt: new Date().toISOString() };
    window.localStorage.setItem(keyFor(slug), JSON.stringify(next));
    setEnrollment(next);
  }

  function completeLesson(lessonId: string, totalLessons: number) {
    if (!enrollment || enrollment.completed.includes(lessonId)) return;
    const completed = [...enrollment.completed, lessonId];
    const completedAt = completed.length === totalLessons ? new Date().toISOString() : undefined;
    const certificateCode = completedAt ? nextCertificateCode() : undefined;
    const next = {
      ...enrollment,
      completed,
      ...(completedAt ? { completedAt, certificateCode } : {}),
    };

    window.localStorage.setItem(keyFor(slug), JSON.stringify(next));
    setEnrollment(next);
  }

  return { enrollment, ready, enroll, completeLesson };
}
