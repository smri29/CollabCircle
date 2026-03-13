import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import contactStyles from "@/components/contact/contact-page.module.css";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import {
  collaborationChecklist,
  contactChannels,
  contactMessageBlueprint,
  contactProcess,
  contactPurposes,
  siteMeta,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        icon={Mail}
        intro="The contact page should make it obvious how to reach CollabCircle, what to say, and which channel is best for a serious conversation."
        title="A clearer path for research inquiries, collaboration, and public connection."
      />

      <section className="section">
        <div className={contactStyles.heroGrid}>
          <article className={contactStyles.featureCard}>
            <p>How to contact us</p>
            <h2>Use the official channels with a message that gets to the point.</h2>
            <p>
              Whether you want to collaborate, introduce relevant work, or learn more about
              CollabCircle, the best first contact is concise, relevant, and easy to respond to.
            </p>
            <div className={contactStyles.featureActions}>
              <Link className="button" href={`mailto:${siteMeta.email}`}>
                Email CollabCircle
              </Link>
              <Link className="buttonGhost" href="/team">
                See the team first
              </Link>
            </div>
          </article>

          <article className={contactStyles.primaryChannel}>
            <p>Primary communication channel</p>
            <h2>Email is the main entry point for direct communication.</h2>
            <p>
              For collaborations, research discussions, and formal inquiries, email is the clearest
              and most reliable channel to start with.
            </p>
            <a className={contactStyles.primaryLink} href={`mailto:${siteMeta.email}`}>
              {siteMeta.email}
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <div className={contactStyles.sectionHeader}>
          <p>Official channels</p>
          <h2>All public contact points in one place.</h2>
          <p>
            These profiles support visibility and outreach, while email remains the best option for
            substantial communication.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactChannels.map((channel) => (
            <article className={styles.card} key={channel.label}>
              <h3>{channel.label}</h3>
              <p>{channel.description}</p>
              <a href={channel.href} rel="noreferrer" target="_blank">
                {channel.value}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>What people usually reach out about</h2>
            <div className={styles.cardGrid}>
              {contactPurposes.map((purpose) => (
                <article className={styles.card} key={purpose.title}>
                  <h3>{purpose.title}</h3>
                  <p>{purpose.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className={styles.panel}>
            <h3>Best starting point</h3>
            <p>
              If the message requires a real reply, a decision, or a follow-up conversation, email
              should be your first choice.
            </p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.timeline}>
            {contactProcess.map((item) => (
              <article className={styles.timelineItem} key={item.step}>
                <span className={styles.timelineLabel}>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.panel}>
            <h3>Message blueprint</h3>
            <ul className={styles.list}>
              {contactMessageBlueprint.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className={styles.gridTwo}>
          <div className={styles.stack}>
            <h2>Before you reach out</h2>
            <p>
              The best collaboration messages are short, specific, and honest about what you want
              to contribute. That makes the next step easier for everyone.
            </p>
            <ul className={styles.list}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Outreach note</h3>
            <p>
              Introduce your background, your preferred research area, and the kind of work or
              question you are bringing. Precision is more useful than volume.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
