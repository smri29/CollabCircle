import type { Metadata } from "next";
import contactStyles from "@/components/contact/contact-page.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { contactChannels } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact CollabCircle."
      />

      <section className="section">
        <div className={contactStyles.sectionHeader}>
          <p>Official Channels</p>
        </div>

        <div className={contactStyles.channelGrid}>
          {contactChannels.map((channel, index) => (
            <article
              className={contactStyles.channelCard}
              key={channel.label}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className={contactStyles.channelTop}>
                <h3>{channel.label}</h3>
              </div>

              <a href={channel.href} rel="noreferrer" target="_blank">
                {channel.value}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
