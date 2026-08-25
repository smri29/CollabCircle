import type { Metadata } from "next";
import { ArrowUpRight, Linkedin } from "lucide-react";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import {
  companyCoFounders,
  founderProfile,
  productCoFounders,
  type FounderProfile,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Founders' Corner",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function FounderCard({
  member,
  badge,
}: {
  member: FounderProfile;
  badge: string;
}) {
  return (
    <article className={wingStyles.profileCard}>
      <div className={wingStyles.profileImage} aria-hidden="true">
        <span>{getInitials(member.name)}</span>
      </div>

      <div className={wingStyles.profileBody}>
        <span className={wingStyles.profileRole}>{badge}</span>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <p>{member.description}</p>
        <div className={wingStyles.profileLinks}>
          <a className={wingStyles.profileLink} href={member.linkedinHref} rel="noreferrer" target="_blank">
            <Linkedin size={15} strokeWidth={2} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function FoundersCornerPage() {
  return (
    <>
      <PageHero
        title="Leaders across CollabCircle."
      />

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <h2>Founder, CollabCircle.</h2>
          </div>

          <article className={wingStyles.profileHeroCard}>
            <div className={wingStyles.profileImageLarge} aria-hidden="true">
              <span>{getInitials(founderProfile.name)}</span>
            </div>

            <div className={wingStyles.profileBody}>
              <h3>{founderProfile.name}</h3>
              <p>{founderProfile.role}</p>
              <p>{founderProfile.description}</p>
              <div className={wingStyles.profileLinks}>
                <a
                  className={wingStyles.profileLink}
                  href={founderProfile.linkedinHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin size={15} strokeWidth={2} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              </div>
              <p className={wingStyles.profileHint}>
                Individual founder images and LinkedIn profiles can be swapped in whenever they are ready.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.profileGrid}>
            {companyCoFounders.map((member) => (
              <FounderCard badge="Co-Founder" key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.profileGrid}>
            {productCoFounders.map((member) => (
              <FounderCard badge="Co-Founder" key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
