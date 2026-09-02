"use client";

import { useState } from "react";
import styles from "./join-us.module.css";

type OpeningType = "internships" | "full-time" | "part-time";

const openingTypes: { id: OpeningType; label: string }[] = [
  { id: "internships", label: "Internships" },
  { id: "full-time", label: "Full Time" },
  { id: "part-time", label: "Part Time" },
];

type Opening = {
  title: string;
  applicationUrl?: string;
};

const internshipOpenings: Opening[] = [
  { title: "Internship - Backend Developer" },
  { title: "Internship - Frontend Developer" },
  { title: "Internship - DevOps Engineer" },
  { title: "Internship - Software Engineer" },
  { title: "Internship - SQA Engineer" },
  { title: "Internship - UI/UX Designer" },
];

const fullTimeOpenings: Opening[] = [
  { title: "Jr. Software Engineer" },
  { title: "Backend Developer" },
  { title: "Frontend Developer" },
  { title: "UI/UX Designer" },
  { title: "DevOps Engineer" },
  { title: "Researcher" },
  { title: "SQA" },
  { title: "Sr. Software Engineer" },
  { title: "AI Engineer" },
];

const partTimeOpenings: Opening[] = [
  { title: "UI/UX Designer" },
  { title: "QA Tester" },
  { title: "AI Developer" },
  { title: "Business Case Analyst" },
];

const openingsByType: Record<OpeningType, Opening[]> = {
  internships: internshipOpenings,
  "full-time": fullTimeOpenings,
  "part-time": partTimeOpenings,
};

export function CareerOpenings() {
  const [activeType, setActiveType] = useState<OpeningType>("internships");
  const openings = openingsByType[activeType];

  return (
    <section className={styles.openingsSection} aria-label="Current openings">
      <div className={styles.openingTypeTabs} aria-label="Opening type">
        {openingTypes.map((type) => (
          <button
            className={activeType === type.id ? styles.openingTypeTabActive : styles.openingTypeTab}
            key={type.id}
            onClick={() => setActiveType(type.id)}
            type="button"
          >
            {type.label}
          </button>
        ))}
      </div>

      {openings.length > 0 ? (
        <div className={styles.openingList}>
          {openings.map((opening, index) => (
            <article className={styles.openingRow} key={opening.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{opening.title}</h2>
              {opening.applicationUrl ? (
                <a
                  className={styles.openingApply}
                  href={opening.applicationUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Apply
                </a>
              ) : (
                <button className={styles.openingApply} disabled type="button">
                  Apply
                </button>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className={styles.emptyOpenings}>No openings are currently published for this work type.</p>
      )}
    </section>
  );
}
