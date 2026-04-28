import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Handshake } from "lucide-react";
import styles from "./collaborations.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { researchCollaborations } from "@/data/company-content";

export const metadata: Metadata = {
  title: "Collaborations",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const placeholderCollaborations = Array.from({ length: 6 }, (_, index) => ({
  id: `placeholder-${index + 1}`,
  name: "Collaborator Name",
  profession: "Profession",
  institution: "Institution",
  projectName: "Project Name",
}));

export default function ResearchCollaborationsPage() {
  const collaborationItems =
    researchCollaborations.length > 0
      ? researchCollaborations.map((item) => ({
          key: `${item.name}-${item.institution}-${item.projectName}`,
          name: item.name,
          profession: item.profession,
          institution: item.institution,
          projectName: item.projectName,
          image: item.image,
          linkedinHref: item.linkedinHref,
        }))
      : placeholderCollaborations.map((item) => ({
          key: item.id,
          name: item.name,
          profession: item.profession,
          institution: item.institution,
          projectName: item.projectName,
          image: null,
          linkedinHref: undefined,
        }));

  return (
    <>
      <PageHero
        eyebrow="Collaborations"
        icon={Handshake}
        intro=""
        title="Collaborations across people and institutions."
      />

      <section className="section">
        <div className={styles.grid}>
          {collaborationItems.map((item) => (
            <article className={styles.card} key={item.key}>
              <div className={styles.imageWrap}>
                {item.image ? (
                  <Image
                    alt={item.name}
                    className={styles.image}
                    height={360}
                    src={item.image}
                    width={480}
                  />
                ) : (
                  <div className={styles.imagePlaceholder} aria-hidden="true">
                    <span>{getInitials(item.name)}</span>
                  </div>
                )}
              </div>

              <div className={styles.body}>
                <h2>{item.name}</h2>
                <p className={styles.profession}>{item.profession}</p>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.projectName}>{item.projectName}</p>
              </div>

              <div className={styles.note}>
                {item.linkedinHref ? (
                  <Link className={styles.noteLink} href={item.linkedinHref} rel="noreferrer" target="_blank">
                    <span>LinkedIn</span>
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </Link>
                ) : (
                  <p className={styles.noteMuted}>LinkedIn</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Join the journey</p>
            <h2>Be part of what CollabCircle is building.</h2>
            <p>
              If you want to collaborate, contribute to ongoing work, or build institutional
              connections around the research wing, this is a good place to begin.
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
    </>
  );
}
