import Link from "next/link";
import styles from "./cta-banner.module.css";

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBannerProps) {
  return (
    <section className={styles.banner}>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <Link className="button" href={primaryHref}>
          {primaryLabel}
        </Link>
        <Link className="buttonGhost" href={secondaryHref}>
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
