import type { Metadata } from "next";
import Image from "next/image";
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

const teamImagePaths = {
  ceo: "/Team%20Page%20Pictures/Shah%20Mohammad%20Rizvi.jpg",
  cfo: "/Team%20Page%20Pictures/Sumaiya%20Alam%20Shorna.jpg",
  coo: "/Team%20Page%20Pictures/Ummay%20Saima.png",
  cyber: "/Team%20Page%20Pictures/Saymon%20Hasan.jpg",
  advisor: "/Team%20Page%20Pictures/Rimo%20Bhuiyan.jpg",
  product: "/Team%20Page%20Pictures/Sumaiya%20Islam%20Mily.jpg",
  research: "/Team%20Page%20Pictures/Nur%20A%20Jannat%20Shuchi.jpg",
  vp: "/Team%20Page%20Pictures/Md.%20Aman%20Uddin%20Siyam.jpg",
  qa: "/Team%20Page%20Pictures/Rume%20Akter.jpg",
} as const;

type TeamPageMember = ExecutivePanelMember & {
  imageSrc: string;
};

function TeamNode({
  member,
  className,
}: {
  member: TeamPageMember;
  className: string;
}) {
  return (
    <article className={`${styles.node} ${className}`}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>
          <Image
            alt={member.name}
            className={styles.avatarImage}
            fill
            sizes="136px"
            src={member.imageSrc}
          />
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
      imageSrc: teamImagePaths[member.id],
      linkedinHref: teamLinkedinLinks[member.id] ?? member.linkedinHref,
    },
  ]),
) as Record<ExecutivePanelMember["id"], TeamPageMember>;

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
