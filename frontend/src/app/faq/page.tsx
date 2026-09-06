import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqItems = [
  {
    title: "What is CollabCircle?",
    description:
      "CollabCircle is a technology-focused organization working across research, engineering, cybersecurity, and practical digital solutions.",
  },
  {
    title: "What does CollabCircle work on?",
    description:
      "Our work spans applied research, software and product engineering, AI systems, cloud platforms, cybersecurity, automation, and specialized interactive experiences.",
  },
  {
    title: "Where can I find CollabCircle publications?",
    description:
      "Visit the Publications page to explore the current research archive, organized by journal and conference records.",
  },
  {
    title: "How do I apply for an opening?",
    description:
      "Visit Join Us, choose Internships, Full Time, or Part Time, then select a role. An Apply button opens the relevant application form when that opening is active.",
  },
  {
    title: "Are all listed roles currently accepting applications?",
    description:
      "Openings are published by role and work type. Application links are added to individual positions when applications are available.",
  },
  {
    title: "What are eLearn and Campaigns?",
    description:
      "eLearn and Campaigns are growing CollabCircle initiatives. Their pages will expand as learning content, public initiatives, and interactive experiences are announced.",
  },
  {
    title: "How can I contact CollabCircle?",
    description:
      "Use the Contact page for collaborations, partnerships, general inquiries, or official communication.",
  },
  {
    title: "Where can I learn more about products and services?",
    description:
      "The homepage provides an overview of CollabCircle's service areas, while the Products page presents current product directions and projects.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions."
        titleSingleLine
      />

      <section className="section">
        <div className={styles.faqWrap}>
          {faqItems.map((item) => (
            <details className={styles.item} key={item.title}>
              <summary>
                <span className={styles.question}>{item.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  <ChevronDown size={16} strokeWidth={2} />
                </span>
              </summary>
              <p className={styles.answer}>{item.description}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Still need help?</p>
            <h2>Let&apos;s find the right next step.</h2>
          </div>

          <div className={styles.ctaActions}>
            <Link className="button" href="/join-us">
              <span>Open Join Us</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link className={styles.secondaryCta} href="/contact">
              <span>Contact Us</span>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
