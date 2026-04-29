"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { engineeringWingNavigation } from "@/data/company-content";
import styles from "./research-header.module.css";

const engineeringMenuHiddenRoutes = new Set([
  "/engineering-hub/solutions-services",
  "/engineering-hub/clients",
  "/engineering-hub/technologies",
  "/engineering-hub/team",
]);

function isActivePath(pathname: string, href: string, matches?: string[]) {
  return [href, ...(matches ?? [])].some((path) => {
    if (path === "/engineering-hub") {
      return pathname === path;
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  });
}

export function EngineeringHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isJoinActive = pathname === "/career" || pathname === "/join-us";
  const engineeringMenuItems = engineeringWingNavigation.filter(
    (item) => !engineeringMenuHiddenRoutes.has(item.href),
  );

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link className={styles.brand} href="/engineering-hub" onClick={() => setIsMenuOpen(false)}>
          <CollabCircleLogo className={styles.logo} height={44} priority width={44} />
          <span className={styles.brandText}>
            <strong>CollabCircle</strong>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Engineering Hub">
          {engineeringWingNavigation.map((item) => {
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
          <Link
            className={isJoinActive ? styles.joinActiveLink : styles.joinLink}
            href="/career"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
          <Link className={styles.backLink} href="/" onClick={() => setIsMenuOpen(false)}>
            Main Site
          </Link>
          <button
            aria-controls="engineering-mobile-navigation"
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
        id="engineering-mobile-navigation"
      >
        <nav className={styles.mobileNav} aria-label="Engineering Hub mobile">
          {engineeringMenuItems.map((item) => {
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
          <Link className={pathname === "/faq" ? styles.mobileActiveLink : styles.mobileLink} href="/faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <Link className={styles.mobileBackLink} href="/" onClick={() => setIsMenuOpen(false)}>
            Main Site
          </Link>
        </nav>
      </div>
    </header>
  );
}
