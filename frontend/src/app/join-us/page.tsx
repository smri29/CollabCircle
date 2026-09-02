import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { siteMeta } from "@/data/site-content";
import { CareerOpenings } from "./career-openings";
import styles from "./join-us.module.css";

export const metadata: Metadata = {
  title: "Career",
};

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        title="Build what matters. Grow with purpose."
      />

      <section className="section">
        <CareerOpenings />
      </section>

      <section className="section">
        <article className={styles.ctaPanel}>
          <div className={styles.ctaCopy}>
            <p>Before you apply</p>
            <h2>Questions before you apply?</h2>
            <p>
              Use the FAQ page for practical answers about the application flow, review process,
              and what to expect. If you still need help, reach out before submitting.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link className="button" href="/faq">
              <span>Open FAQ</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
            <a className={styles.secondaryCta} href={`mailto:${siteMeta.email}`}>
              Contact First
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
