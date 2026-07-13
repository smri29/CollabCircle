"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { developmentWingNavigation } from "@/data/company-content";
import styles from "./research-header.module.css";

const developmentMenuHiddenRoutes = new Set([
  "/development-wing/projects",
  "/development-wing/solutions-services",
  "/development-wing/roadmap",
]);

function isActivePath(pathname: string, href: string, matches?: string[]) {
  return [href, ...(matches ?? [])].some((path) => {
    if (path === "/engineering-hub") {
      return pathname === path;
    }

    if (path === "/development-wing") {
      return pathname === path;
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  });
}

export function DevelopmentHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isJoinActive = pathname === "/career" || pathname === "/join-us";
  const developmentMenuItems = developmentWingNavigation.filter(
    (item) => !developmentMenuHiddenRoutes.has(item.href),
  );

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link className={styles.brand} href="/" onClick={() => setIsMenuOpen(false)}>
          <CollabCircleLogo className={styles.logo} height={44} priority width={44} />
          <span className={styles.brandText}>
            <strong>CollabCircle</strong>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Development Wing">
          {developmentWingNavigation.map((item) => {
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
            aria-controls="development-mobile-navigation"
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
        id="development-mobile-navigation"
      >
        <nav className={styles.mobileNav} aria-label="Development Wing mobile">
          {developmentMenuItems.map((item) => {
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
