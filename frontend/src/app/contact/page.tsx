import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  ShieldCheck,
  Youtube,
} from "lucide-react";
import contactStyles from "@/components/contact/contact-page.module.css";
import { PageHero } from "@/components/shared/page-hero";
import {
  contactChannels,
  siteMeta,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
};

const channelIcons: Record<string, LucideIcon> = {
  Email: Mail,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        icon={Mail}
        intro="Official channels for inquiries, collaborations, partnerships, and general communication."
        title="Contact CollabCircle."
      />

      <section className="section">
        <div className={contactStyles.heroGrid}>
          <article className={contactStyles.primaryCard}>
            <p className={contactStyles.kicker}>Primary Contact</p>
            <h2>Email is the main communication channel.</h2>
            <p className={contactStyles.lead}>
              Please use email for research discussions, collaboration proposals, partnership
              inquiries, and formal communication.
            </p>
            <a className={contactStyles.primaryLink} href={`mailto:${siteMeta.email}`}>
              {siteMeta.email}
            </a>
          </article>

          <article className={contactStyles.infoCard}>
            <div className={contactStyles.infoRow}>
              <MapPinned size={18} strokeWidth={2} />
              <div>
                <h3>Location</h3>
                <p>Mirpur, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className={contactStyles.infoRow}>
              <ShieldCheck size={18} strokeWidth={2} />
              <div>
                <h3>Preferred approach</h3>
                <p>Clear, concise, and relevant messages help us respond more effectively.</p>
              </div>
            </div>

            <Link className="buttonGhost" href="/founders-corner">
              Founders&apos; Corner
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className={contactStyles.sectionHeader}>
          <p>Official Channels</p>
          <h2>Public contact points</h2>
        </div>

        <div className={contactStyles.channelGrid}>
          {contactChannels.map((channel, index) => {
            const Icon = channelIcons[channel.label];

            return (
              <article
                className={contactStyles.channelCard}
                key={channel.label}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className={contactStyles.channelTop}>
                  <span className={contactStyles.channelIcon}>
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <h3>{channel.label}</h3>
                    <p>{channel.description}</p>
                  </div>
                </div>

                <a href={channel.href} rel="noreferrer" target="_blank">
                  {channel.value}
                </a>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
