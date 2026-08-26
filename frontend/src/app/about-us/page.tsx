import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, UsersRound } from "lucide-react";
import { missionVisionBlocks } from "@/data/company-content";
import styles from "./about-us.module.css";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.kicker}>
          <p>Founders Corner</p>
        </div>

      </div>

      <section className={styles.section}>
        <article className={styles.founderPanel}>
          <div className={styles.founderImageFrame}>
            <Image
              alt="Shah Mohammad Rizvi, Founder of CollabCircle"
              className={styles.founderImage}
              priority
              sizes="(max-width: 960px) 100vw, 22rem"
              src="/Founder.jpg"
              width={960}
              height={1200}
            />
          </div>

          <div className={styles.founderCopy}>
            <div className={styles.sectionIntro}>
              <h2>Shah Mohammad Rizvi</h2>
            </div>

            <p>
              I started CollabCircle from a long-view belief that disciplined research, thoughtful
              systems, and shared ambition could grow into an organization with real public value.
            </p>
            <p>
              What began as an early idea gradually became a real foundation through collaboration,
              research work, and a growing belief that meaningful progress requires both ambition
              and structure.
            </p>
            <p>
              In the beginning, CollabCircle was shaped around research. We built our early work
              with care, developed internal structure, and grew through shared effort, discipline,
              and consistency. That stage gave us more than output. It gave us identity.
            </p>
            <p>
              Over time, I realized CollabCircle should not remain limited to research alone. If
              we are capable of serious research, then we should also be capable of building real
              systems from that knowledge. That realization opened a larger direction for the
              company.
            </p>
            <p>
              Today, I see CollabCircle as a high-tech startup being shaped across three connected
              fields: Research using AI, Machine Learning, and Deep Learning; Focused
              Engineering; and Cybersecurity. I want it to be built not only on ideas, but on
              trust, structure, consistency, and the kind of long-term impact that lasts.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.section}>
        <article className={styles.aboutPanel}>
          <div className={styles.sectionIntro}>
            <p>About CollabCircle</p>
            <h2>How we think, build, and grow.</h2>
          </div>

          <div className={styles.aboutCopy}>
            <p>
              CollabCircle is a high-tech startup company being shaped across three connected
              fields: research using Artificial Intelligence, Machine Learning, and Deep Learning;
              focused engineering; and cybersecurity. What connects these areas is a shared belief
              that strong ideas should lead to real systems, real structure, and meaningful public
              value.
            </p>
            <p>
              We believe good work does not grow from energy alone. It grows from discipline,
              clarity, documentation, and responsible execution. That is why CollabCircle is being
              built around organized processes, thoughtful collaboration, and a culture that values
              consistency as much as ambition.
            </p>
            <p>
              Our way of working is rooted in learning deeply, building carefully, and improving
              steadily. We approach research with seriousness, engineering with focus, and
              cybersecurity with responsibility. As CollabCircle grows, we want that standard to
              remain visible in everything we do.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.section}>
        <div className={styles.dualGrid}>
          {missionVisionBlocks.map((item) => (
            <article className={styles.featureCard} key={item.title}>
              <span className={styles.featureIcon} aria-hidden="true">
                {item.title === "Mission" ? (
                  <Sparkles size={18} strokeWidth={2} />
                ) : item.title === "Vision" ? (
                  <Compass size={18} strokeWidth={2} />
                ) : (
                  <UsersRound size={18} strokeWidth={2} />
                )}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <article className={styles.impactPanel}>
          <div className={styles.sectionIntro}>
            <p>At a glance</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>11+</span>
              <span className={styles.statLabel}>Researchers</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3+</span>
              <span className={styles.statLabel}>Collaborators</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>1+</span>
              <span className={styles.statLabel}>Institutions</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.section}>
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Join the journey</p>
            <h2>Be part of what CollabCircle is building.</h2>
            <p>
              Whether you want to contribute through research, grow with the broader vision, or
              simply understand the direction more closely, there is space to step in.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link className="button" href="/join-us">
              <span>Explore Careers</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <Link className={styles.secondaryCta} href="/contact">
              <span>Contact Us</span>
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
}
