import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const privacySections = [
  {
    title: "Overview",
    paragraphs: [
      "At CollabCircle, your privacy is paramount, and we are committed to preserving and safeguarding it in compliance with relevant regulations.",
    ],
  },
  {
    title: "Visitor information",
    paragraphs: [
      "We collect non-personally identifiable information from all site visitors, such as browser type, language preference, and visit date/time. This data, which remains anonymous, may be used for trend analysis and reporting purposes. We also utilize Google Analytics to gather website usage data, which is subject to Google's privacy policy.",
    ],
  },
  {
    title: "User information",
    paragraphs: [
      "When personal information is required for interactions on our site (e.g., newsletter sign-ups, comments, job applications), we only request relevant data. Personally identifiable information, such as IP addresses, is collected for logged-in users, commenters, and job applicants, and is disclosed only to our administrators.",
    ],
  },
  {
    title: "Analytics & statistics",
    paragraphs: [
      "In addition to internal analytics, we use Google Analytics to generate statistics based on user behavior. These analytics help us understand website traffic and usage patterns. While Google Analytics collects data using cookies and other tracking technologies, it does not provide us with personally identifiable information.",
    ],
  },
  {
    title: "Disclosure of personally identifiable information",
    paragraphs: [
      "We do not share personally identifiable information with third parties. Information is only shared with our management and recruitment team, who require it for service provision. These individuals are bound by confidentiality agreements. We may also disclose information in response to legal requests or to protect our site and public interest.",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "We use cookies to track and identify users and their preferences. You can adjust your browser settings to reject cookies, but this may affect site functionality.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        icon={ShieldCheck}
        intro="Review how privacy and visitor data are handled across the CollabCircle website."
        title="Privacy Policy"
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Effective date</h2>
            <p>
              This privacy statement is effective as of March 20, 2026.
              {" "}
              <Link href="/contact" style={{ textDecoration: "underline" }}>Contact Us</Link>
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Important note</h3>
            <p>Your privacy is treated as a core responsibility across the website.</p>
          </aside>
        </div>
      </section>

      {privacySections.map((section) => (
        <section className="section" key={section.title}>
          <article className={styles.card}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </section>
      ))}
    </>
  );
}
