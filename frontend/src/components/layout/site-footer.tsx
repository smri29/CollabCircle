import Link from "next/link";
import {
  BookOpenText,
  BrainCircuit,
  Facebook,
  Home,
  Info,
  Instagram,
  Linkedin,
  Mail,
  UsersRound,
  Youtube,
} from "lucide-react";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { navigation, siteMeta, socialLinks } from "@/data/site-content";
import styles from "./site-footer.module.css";

const navIcons = {
  "/": Home,
  "/about": Info,
  "/research": BrainCircuit,
  "/publications": BookOpenText,
  "/team": UsersRound,
  "/contact": Mail,
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
          <h2>Research systems built with clarity, discipline, and collaboration.</h2>
          <p>
            We design work that reads well, scales cleanly, and stays defensible from experiment
            setup to manuscript submission.
          </p>
        </div>

        <div className={styles.linkColumns}>
          <div>
            <h3>Explore</h3>
            <ul>
              {navigation.map((item) => {
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
            <h3>Connect</h3>
            <ul>
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
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>{siteMeta.tagline}</p>
        <p>Designed for thoughtful iteration and long-term collaboration.</p>
      </div>
    </footer>
  );
}
