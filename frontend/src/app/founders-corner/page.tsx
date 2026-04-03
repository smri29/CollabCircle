import type { Metadata } from "next";
import { ArrowUpRight, Crown, Linkedin } from "lucide-react";
import wingStyles from "@/components/research/research-wing.module.css";
import { PageHero } from "@/components/shared/page-hero";
import {
  engineeringDepartmentCoFounders,
  founderProfile,
  researchWingCoFounders,
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
        eyebrow="Founders' Corner"
        icon={Crown}
        intro="A dedicated place for the founder-level identity of CollabCircle and the co-founding leadership shaping its departments."
        title="Leaders across CollabCircle and its departments."
      />

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Company Founder</span>
            <h2>Founder, CollabCircle.</h2>
            <p>
              This profile represents the founding identity of the full company rather than only one
              current department.
            </p>
          </div>

          <article className={wingStyles.profileHeroCard}>
            <div className={wingStyles.profileImageLarge} aria-hidden="true">
              <span>{getInitials(founderProfile.name)}</span>
            </div>

            <div className={wingStyles.profileBody}>
              <span className={wingStyles.profileRole}>Founder</span>
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
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Research Wing</span>
            <h2>Co-founders, Research Wing.</h2>
            <p>
              These profiles belong to the origin and development of the Research Wing specifically
              and are presented in that department context.
            </p>
          </div>

          <div className={wingStyles.profileGrid}>
            {researchWingCoFounders.map((member) => (
              <FounderCard badge="Research Wing" key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={wingStyles.sectionStack}>
          <div className={wingStyles.lead}>
            <span className={wingStyles.leadMark}>Engineering Department</span>
            <h2>Co-founders, Engineering Department.</h2>
            <p>
              This section is ready for the engineering side of CollabCircle and can absorb full
              founder profiles as that department becomes public-facing.
            </p>
          </div>

          <div className={wingStyles.profileGrid}>
            {engineeringDepartmentCoFounders.map((member) => (
              <FounderCard badge="Engineering Dept." key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
