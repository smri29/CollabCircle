import Link from "next/link";
import { navigation, siteMeta, socialLinks } from "@/data/site-content";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.eyebrow}>CollabCircle</p>
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
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Connect</h3>
            <ul>
              <li>
                <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
              </li>
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} rel="noreferrer" target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
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
