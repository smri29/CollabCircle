"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { moreNavigation, primaryNavigation } from "@/data/company-content";
import { siteMeta } from "@/data/site-content";
import styles from "./site-header.module.css";

function isActivePath(pathname: string, href: string, matches?: string[]) {
  return [href, ...(matches ?? [])].some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);
  const isMoreActive = moreNavigation.some((item) => isActivePath(pathname, item.href, item.matches));

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!moreMenuRef.current?.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <Link
          className={styles.brand}
          href="/"
          onClick={() => {
            setIsMenuOpen(false);
            setIsMoreOpen(false);
          }}
        >
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
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMoreOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <div
            className={styles.moreWrap}
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
            ref={moreMenuRef}
          >
            <button
              aria-expanded={isMoreOpen}
              aria-haspopup="menu"
              className={isMoreActive ? styles.activeMoreButton : styles.moreButton}
              onClick={() => setIsMoreOpen((open) => !open)}
              type="button"
            >
              <span>More</span>
              <ChevronDown size={15} strokeWidth={2} />
            </button>

            <div className={isMoreOpen ? styles.morePanelOpen : styles.morePanel} role="menu">
              {moreNavigation.map((item) => {
                const isActive = isActivePath(pathname, item.href, item.matches);

                return (
                  <Link
                    key={item.href}
                    className={isActive ? styles.moreActiveLink : styles.moreLink}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMoreOpen(false);
                    }}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <div className={styles.actions}>
          <Link
            className={styles.joinLink}
            href="/career"
            onClick={() => {
              setIsMenuOpen(false);
              setIsMoreOpen(false);
            }}
          >
            Careers
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
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMoreOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <div className={styles.mobileMoreBlock}>
            <button
              aria-expanded={isMoreOpen}
              className={isMoreActive ? styles.mobileMoreActiveButton : styles.mobileMoreButton}
              onClick={() => setIsMoreOpen((open) => !open)}
              type="button"
            >
              <span>More</span>
              <ChevronDown size={15} strokeWidth={2} />
            </button>

            <div className={isMoreOpen ? styles.mobileMorePanelOpen : styles.mobileMorePanel}>
              {moreNavigation.map((item) => {
                const isActive = isActivePath(pathname, item.href, item.matches);

                return (
                  <Link
                    key={item.href}
                    className={isActive ? styles.mobileActiveLink : styles.mobileLink}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMoreOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            className={styles.mobileJoinLink}
            href="/career"
            onClick={() => {
              setIsMenuOpen(false);
              setIsMoreOpen(false);
            }}
          >
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
}
