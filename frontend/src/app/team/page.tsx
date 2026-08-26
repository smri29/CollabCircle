import type { Metadata } from "next";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { executivePanelMembers, type ExecutivePanelMember } from "@/data/site-content";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Team",
};

const teamLinkedinLinks = {
  ceo: process.env.Rizvi,
  cfo: process.env.Shorna,
  coo: process.env.Saima,
  cyber: process.env.Saymon,
  advisor: process.env.Rimo,
  product: process.env.Mily,
  research: process.env.Shuchi,
  vp: process.env.Siyam,
  qa: process.env.Rumi,
} as const;
function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TeamNode({
  member,
  className,
}: {
  member: ExecutivePanelMember;
  className: string;
}) {
  return (
    <article className={`${styles.node} ${className}`}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>
          <span>{getInitials(member.name)}</span>
        </div>
      </div>

      <div className={styles.nodeCopy}>
        <h2 className={styles.name}>{member.name}</h2>
        <div className={styles.roleBlock}>
          {member.roleLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <a className={styles.profileLink} href={member.linkedinHref} rel="noreferrer" target="_blank">
          <Linkedin size={15} strokeWidth={2} />
          <span>LinkedIn</span>
          <ArrowUpRight size={14} strokeWidth={2} />
        </a>
      </div>
    </article>
  );
}

const membersById = Object.fromEntries(
  executivePanelMembers.map((member) => [
    member.id,
    {
      ...member,
      linkedinHref: teamLinkedinLinks[member.id] ?? member.linkedinHref,
    },
  ]),
) as Record<ExecutivePanelMember["id"], ExecutivePanelMember>;

export default function TeamPage() {
  return (
    <section className={styles.page}>
      <div className={styles.board}>
        <TeamNode className={styles.ceoNode} member={membersById.ceo} />
        <TeamNode className={styles.cfoNode} member={membersById.cfo} />
        <TeamNode className={styles.cooNode} member={membersById.coo} />
        <TeamNode className={styles.cyberNode} member={membersById.cyber} />
        <TeamNode className={styles.advisorNode} member={membersById.advisor} />
        <TeamNode className={styles.productNode} member={membersById.product} />
        <TeamNode className={styles.researchNode} member={membersById.research} />
        <TeamNode className={styles.vpNode} member={membersById.vp} />
        <TeamNode className={styles.qaNode} member={membersById.qa} />
      </div>
    </section>
  );
}
