import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { primaryNavigation } from "@/data/company-content";
import { siteMeta, socialLinks } from "@/data/site-content";
import styles from "./site-footer.module.css";

const socialIcons = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
} as const;

const footerLinks = [
  { href: "/", label: "Home" },
  ...primaryNavigation.map((item) => ({ href: item.href, label: item.label })),
  { href: "/career", label: "Join Us" },
  { href: "/founders-corner", label: "Founders' Corner" },
];

const legalLinks = [
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <div className={styles.brandBlock}>
          <div className={styles.brandRow}>
            <CollabCircleLogo className={styles.logo} height={54} width={54} />
            <div>
              <p className={styles.eyebrow}>CollabCircle</p>
              <h2>{siteMeta.tagline}</h2>
            </div>
          </div>

          <p className={styles.description}>{siteMeta.description}</p>

          <a className={styles.emailLink} href={`mailto:${siteMeta.email}`}>
            <Mail size={16} strokeWidth={2} />
            <span>{siteMeta.email}</span>
          </a>

          <div className={styles.socialRow}>
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label as keyof typeof socialIcons];

              return (
                <a
                  aria-label={item.label}
                  className={styles.socialLink}
                  href={item.href}
                  key={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon size={16} strokeWidth={2} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.linkArea}>
          <div className={styles.linkColumn}>
            <h3>Explore</h3>
            <ul>
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3>Legal</h3>
            <ul>
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.bottomMeta}>© 2026 CollabCircle. All rights reserved.</p>
        <p>We research to understand; we build to empower.</p>
        <div className={styles.bottomLinks}>
          {legalLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
