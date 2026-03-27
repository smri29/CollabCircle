import type { Metadata } from "next";
import Link from "next/link";
import { Scale } from "lucide-react";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Terms of Use",
};

const termsSections = [
  {
    title: "Introduction",
    paragraphs: [
      'These Website Terms of Use ("Terms") govern your use of our website provided by CollabCircle ("we," "us," or "our"). By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, please refrain from using our website.',
    ],
  },
  {
    title: "Use of website",
    paragraphs: [
      "You must be at least 13 years old to use our website. By using our website, you confirm that you are at least 13 years old or have obtained parental consent if you are younger than 13. You agree to use our website only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "All content on our website, social media, and other digital platforms, including but not limited to text, graphics, logos, images, and software, is owned by CollabCircle or its licensors and protected under copyright and intellectual property laws. Unauthorized reproduction, distribution, modification, or creation of derivative works from any content on these platforms is strictly prohibited without prior written permission from CollabCircle.",
    ],
  },
  {
    title: "User content",
    paragraphs: [
      "You may submit content, such as comments or feedback, to our website. By submitting content, you grant CollabCircle a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, distribute, and display such content worldwide in any media. You agree that your content will not violate the rights of any third party, including copyright, trademark, privacy, publicity, or other personal or proprietary rights.",
    ],
  },
  {
    title: "Disclaimer of warranties",
    paragraphs: [
      'Our website is provided on an "as is" and "as available" basis. We make no warranties or representations of any kind, express or implied, regarding the accuracy, reliability, or completeness of any information on our website. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "In no event shall CollabCircle, its directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our website. Our total liability to you for any damages shall not exceed the amount paid by you, if any, for accessing or using our website.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These Terms shall be governed by and construed in accordance with the laws of [jurisdiction], without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [jurisdiction].",
    ],
  },
  {
    title: "Changes to Terms",
    paragraphs: [
      "We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after any such changes constitutes acceptance of the modified Terms.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Use"
        icon={Scale}
        intro="Review the terms that govern use of the CollabCircle website."
        title="Terms of Use"
      />

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Effective date</h2>
            <p>
              This Terms of Use statement is effective as of March 20, 2026.
              {" "}
              <Link href="/contact" style={{ textDecoration: "underline" }}>Contact Us</Link>
            </p>
          </div>

          <aside className={styles.panel}>
            <h3>Important note</h3>
            <p>By accessing or using the website, you agree to these Terms.</p>
          </aside>
        </div>
      </section>

      {termsSections.map((section) => (
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
