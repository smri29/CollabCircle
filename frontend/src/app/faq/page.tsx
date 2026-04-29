import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown, CircleHelp } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqItems = [
  {
    title: "What is CollabCircle at this stage?",
    description:
      "CollabCircle is growing from a research-led foundation toward a broader long-term organization. Right now, the public website shows both the active research side and the future-facing engineering direction.",
  },
  {
    title: "What is the difference between the Research Wing and the Engineering Hub?",
    description:
      "The Research Wing represents the current research-facing department with publications, tracks, projects, team, and policy. The Engineering Hub represents the long-term engineering and delivery direction, including systems, services, technologies, and roadmap planning.",
  },
  {
    title: "Where should I start if I am new to the website?",
    description:
      "Start from the homepage if you want the full company-level view. If you already know your interest, you can enter the Research Wing for research-focused pages or the Engineering Hub for technical delivery and future systems direction.",
  },
  {
    title: "Does the Research Wing have its own pages?",
    description:
      "Yes. The Research Wing is organized as its own nested section with dedicated pages for publications, research tracks, projects, team, and policy under the research-lab routes.",
  },
  {
    title: "What kind of content appears in Publications?",
    description:
      "The Publications page is intended for conference and journal outputs, along with other research-facing records that document the public scholarly side of the Research Wing.",
  },
  {
    title: "What kinds of updates appear in the Newsroom?",
    description:
      "The Newsroom is the public update hub for announcements, research highlights, and organization updates. It is meant for dated official updates rather than evergreen informational content.",
  },
  {
    title: "How can I contact CollabCircle for official communication?",
    description:
      "For collaborations, questions, or formal communication, use the official contact page and email address listed on the site. That is the primary channel for serious outreach.",
  },
  {
    title: "Which form should I choose if I want to apply?",
    description:
      "Choose the Researcher form if your strengths are closer to experiments, literature review, technical writing, or publication work. Choose the Engineer form if your strengths are closer to implementation, systems, tools, and technical delivery.",
  },
  {
    title: "Can I apply to both tracks?",
    description:
      "You should choose the one that best matches your current direction. If your profile spans both areas, explain that clearly in your application so the review can consider the strongest fit.",
  },
  {
    title: "How are applications reviewed?",
    description:
      "Applications are reviewed manually. Shortlisted applicants will be contacted through the information they provide in the form.",
  },
  {
    title: "What kind of information should I include?",
    description:
      "Be specific about your background, relevant skills, current interests, and the kind of contribution you want to make consistently.",
  },
  {
    title: "What if I still have questions before applying?",
    description:
      "If you need clarification before submitting, use the official contact email so your question can be handled directly.",
  },
  {
    title: "Who appears on the Research Wing team page and who appears in Founders' Corner?",
    description:
      "The Research Wing team page presents the current executive and department-facing team structure. Founders' Corner is separate and is used for founder and co-founding leadership context at the organization and department level.",
  },
  {
    title: "Will the website continue to grow with more sections later?",
    description:
      "Yes. The site is being structured so the research, engineering, newsroom, careers, and founder areas can grow over time without needing a full redesign.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        icon={CircleHelp}
        intro="Answers about the organization, the website structure, the research and engineering departments, and the application process."
        title="Frequently asked questions."
        titleSingleLine
      />

      <section className="section">
        <div className={styles.sectionIntro}>
          <p>Quick answers</p>
          <h2>Common questions, kept in one place.</h2>
          <p>
            If you are exploring the website, trying to understand the structure, or preparing to
            apply, these answers should help you move faster.
          </p>
        </div>
      </section>

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
            <h2>Use the next best route if your question is not covered here.</h2>
            <p>
              If your question is about applying, start with the Career page. If you need direct
              clarification, use the Contact page and reach out through the official channel.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link className="button" href="/career">
              <span>Open Career</span>
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
