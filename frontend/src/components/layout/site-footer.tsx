import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Compass,
  Cpu,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Microscope,
  Sparkles,
  Youtube,
} from "lucide-react";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { primaryNavigation, researchLabLinks } from "@/data/company-content";
import { siteMeta, socialLinks } from "@/data/site-content";
import styles from "./site-footer.module.css";

const navIcons = {
  "/about-us": Building2,
  "/engineering-hub": Cpu,
  "/impact-sector": Sparkles,
  "/mission-vision": Compass,
  "/research-lab": Microscope,
} as const;

const socialIcons = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  YouTube: Youtube,
} as const;

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brandRow}>
            <CollabCircleLogo className={styles.logo} height={56} width={56} />
            <p className={styles.eyebrow}>CollabCircle</p>
          </div>
          <div className={styles.connectBlock}>
            <h3>Connect</h3>
            <ul className={styles.connectList}>
              <li>
                <a href={`mailto:${siteMeta.email}`}>
                  <Mail size={16} strokeWidth={2} />
                  <span>{siteMeta.email}</span>
                </a>
              </li>
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];

                return (
                  <li key={item.href}>
                    <a href={item.href} rel="noreferrer" target="_blank">
                      <Icon size={16} strokeWidth={2} />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link className={styles.joinCta} href="/join-us">
            <span>Join the journey</span>
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>

        <div className={styles.linkColumns}>
          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/">
                  <Building2 size={16} strokeWidth={2} />
                  <span>Home</span>
                </Link>
              </li>
              {primaryNavigation.map((item) => {
                const Icon = navIcons[item.href as keyof typeof navIcons];

                return (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <Icon size={16} strokeWidth={2} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3>Research Lab</h3>
            <ul>
              {researchLabLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <Microscope size={16} strokeWidth={2} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>We research to understand; we build to empower.</p>
      </div>
    </footer>
  );
}
