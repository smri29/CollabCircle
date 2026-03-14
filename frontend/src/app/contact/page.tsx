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
        intro="Official channels for collaboration and public outreach."
        title="A simple, direct way to reach CollabCircle."
      />

      <section className="section">
        <div className={contactStyles.heroGrid}>
          <article className={contactStyles.featureCard}>
            <p>How to contact us</p>
            <h2>Use the official channels and keep the message focused.</h2>
            <p>Short, relevant outreach works best.</p>
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
            <h2>Email is the main entry point.</h2>
            <p>Use it for collaborations, research discussions, and formal inquiries.</p>
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
          <p>Email is still the best option for serious communication.</p>
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
            <p>Short, specific, honest messages are easier to respond to.</p>
            <ul className={styles.list}>
              {collaborationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel}>
            <h3>Outreach note</h3>
            <p>Say who you are, what you want, and what the next step should be.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
