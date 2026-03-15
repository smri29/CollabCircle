"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { primaryNavigation } from "@/data/company-content";
import { siteMeta } from "@/data/site-content";
import styles from "./site-header.module.css";

function isActivePath(pathname: string, href: string, matches?: string[]) {
  const paths = [href, ...(matches ?? [])];

  return paths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link className={styles.brand} href="/" onClick={() => setIsMenuOpen(false)}>
          <CollabCircleLogo className={styles.logo} height={44} priority width={44} />
          <span className={styles.brandText}>
            <strong>{siteMeta.name}</strong>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {primaryNavigation.map((item) => {
            const isActive = isActivePath(pathname, item.href, item.matches);

            return (
              <Link
                key={item.href}
                className={isActive ? styles.activeLink : styles.link}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link className={styles.joinLink} href="/join-us" onClick={() => setIsMenuOpen(false)}>
            Join Us
          </Link>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            Menu
          </button>
        </div>
      </div>

      <div
        className={isMenuOpen ? styles.mobilePanelOpen : styles.mobilePanel}
        id="mobile-navigation"
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {primaryNavigation.map((item) => {
            const isActive = isActivePath(pathname, item.href, item.matches);

            return (
              <Link
                key={item.href}
                className={isActive ? styles.mobileActiveLink : styles.mobileLink}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className={styles.mobileJoinLink} href="/join-us" onClick={() => setIsMenuOpen(false)}>
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
