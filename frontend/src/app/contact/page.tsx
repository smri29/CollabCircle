import type { Metadata } from "next";
import styles from "@/components/shared/content-sections.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { collaborationChecklist, contactChannels } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        intro="Use the primary contact channels to discuss collaborations, research interest, or ways to contribute to the organization."
        title="Open the conversation through clear channels, not scattered messages."
      />

      <section className="section">
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
            <h3>Best first message</h3>
            <p>
              Introduce your background, your preferred research area, and the kind of work you can
              reliably own. Precision is more useful than volume.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
