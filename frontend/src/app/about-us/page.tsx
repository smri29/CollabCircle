import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Compass, Sparkles, UsersRound } from "lucide-react";
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
          <span className={styles.iconWrap}>
            <Building2 size={18} strokeWidth={2} />
          </span>
          <p>About Us</p>
        </div>

        <div className={styles.foundingNote}>
          <h1>The People behind CollabCircle</h1>
        </div>

        <div className={styles.imageFrame}>
          <Image
            alt="The six founding members of CollabCircle"
            className={styles.heroImage}
            priority
            sizes="(max-width: 960px) 100vw, 72rem"
            src="/CollabCircle Founding Body.png"
            width={1600}
            height={900}
          />
        </div>

        <div className={styles.foundingNote}>
          <p>
            CollabCircle began with the vision of Shah Mohammad Rizvi, the Founder of
            CollabCircle, who imagined a space where research, discipline, and long-term ambition
            could grow into something meaningful. At the core of that early journey was Md. Aman
            Uddin Siyam, whose support helped turn that vision into a real starting point.
          </p>
          <p>
            The other five joined as Co-Founders because they believed in the same dream: that
            together they could build something powerful, creative, and lasting. What brought them
            together was not only shared trust or interest, but a genuine belief that collective
            effort could create something larger than any one person alone.
          </p>
        </div>
      </div>

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
        <article className={styles.valuesPanel}>
          <div className={styles.sectionIntro}>
            <p>What drives us</p>
            <h2>The ideas that hold the organization together.</h2>
          </div>

          <div className={styles.valueList}>
            <div className={styles.valueItem}>
              <h3>Collaboration first</h3>
              <p>
                CollabCircle is built on the belief that meaningful work becomes stronger when
                people contribute across trust, discipline, and shared responsibility.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Open knowledge</h3>
              <p>
                We value research and learning that can be understood, shared, and carried forward
                by others rather than hidden behind unnecessary complexity.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Research discipline</h3>
              <p>
                Ideas matter, but structure matters too. We care about documentation, quality,
                ethics, and the kind of consistency that turns ambition into real progress.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Long-term building</h3>
              <p>
                CollabCircle is not shaped around quick visibility alone. It is being built with a
                longer horizon in mind, where research, engineering, and impact can reinforce each
                other over time.
              </p>
            </div>
          </div>
        </article>
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
            <Link className="button" href="/career">
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
