"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation, siteMeta } from "@/data/site-content";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link className={styles.brand} href="/" onClick={() => setIsMenuOpen(false)}>
          <span className={styles.mark} aria-hidden="true">
            <span />
          </span>
          <span className={styles.brandText}>
            <strong>{siteMeta.name}</strong>
            <small>{siteMeta.tagline}</small>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

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
          <Link className="button" href="/contact" onClick={() => setIsMenuOpen(false)}>
            Start a Conversation
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
          {navigation.map((item) => {
            const isActive = pathname === item.href;

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
          <Link className="button" href="/contact" onClick={() => setIsMenuOpen(false)}>
            Start a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
