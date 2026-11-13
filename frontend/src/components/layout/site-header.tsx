"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CollabCircleLogo } from "@/components/brand/collabcircle-logo";
import { aboutNavigation, eLearnNavigation, primaryNavigation } from "@/data/company-content";
import styles from "./site-header.module.css";

function isActivePath(pathname: string, href: string, matches?: string[]) {
  return [href, ...(matches ?? [])].some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutMenuRef = useRef<HTMLDivElement | null>(null);
  const isAboutActive = aboutNavigation.some((item) => isActivePath(pathname, item.href, item.matches));

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!aboutMenuRef.current?.contains(event.target as Node)) {
        setIsAboutOpen(false);
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
          }}
        >
          <CollabCircleLogo
            className={styles.logo}
            height={58}
            priority
            width={190}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {primaryNavigation.map((item) => {
            const isActive = isActivePath(pathname, item.href, item.matches);

            if (item.label === "About") {
              return (
                <div
                  className={styles.moreWrap}
                  key={item.href}
                  onMouseEnter={() => {
                    setIsAboutOpen(true);
                  }}
                  onMouseLeave={() => setIsAboutOpen(false)}
                  ref={aboutMenuRef}
                >
                  <button
                    aria-expanded={isAboutOpen}
                    aria-haspopup="menu"
                    className={isAboutActive ? styles.activeMoreButton : styles.moreButton}
                    onClick={() => {
                      setIsAboutOpen((open) => !open);
                    }}
                    type="button"
                  >
                    <span>About</span>
                    <ChevronDown size={15} strokeWidth={2} />
                  </button>

                  <div className={isAboutOpen ? styles.morePanelOpen : styles.morePanel} role="menu">
                    {aboutNavigation.map((aboutItem) => {
                      const aboutItemIsActive = isActivePath(pathname, aboutItem.href, aboutItem.matches);

                      return (
                        <Link
                          key={aboutItem.href}
                          className={aboutItemIsActive ? styles.moreActiveLink : styles.moreLink}
                          href={aboutItem.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsAboutOpen(false);
                          }}
                          role="menuitem"
                        >
                          {aboutItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                className={isActive ? styles.activeLink : styles.link}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAboutOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            className={isActivePath(pathname, eLearnNavigation.href) ? styles.activeLink : styles.link}
            href={eLearnNavigation.href}
            onClick={() => {
              setIsMenuOpen(false);
              setIsAboutOpen(false);
            }}
          >
            {eLearnNavigation.label}
          </Link>

        </nav>

        <div className={styles.actions}>
          <Link
            className={styles.joinLink}
            href="/join-us"
            onClick={() => {
              setIsMenuOpen(false);
            setIsAboutOpen(false);
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

            if (item.label === "About") {
              return (
                <div className={styles.mobileMoreBlock} key={item.href}>
                  <button
                    aria-expanded={isAboutOpen}
                    className={isAboutActive ? styles.mobileMoreActiveButton : styles.mobileMoreButton}
                    onClick={() => setIsAboutOpen((open) => !open)}
                    type="button"
                  >
                    <span>About</span>
                    <ChevronDown size={15} strokeWidth={2} />
                  </button>

                  <div className={isAboutOpen ? styles.mobileMorePanelOpen : styles.mobileMorePanel}>
                    {aboutNavigation.map((aboutItem) => {
                      const aboutItemIsActive = isActivePath(pathname, aboutItem.href, aboutItem.matches);

                      return (
                        <Link
                          key={aboutItem.href}
                          className={aboutItemIsActive ? styles.mobileActiveLink : styles.mobileLink}
                          href={aboutItem.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsAboutOpen(false);
                          }}
                        >
                          {aboutItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                className={isActive ? styles.mobileActiveLink : styles.mobileLink}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsAboutOpen(false);
                }}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            className={isActivePath(pathname, eLearnNavigation.href) ? styles.mobileActiveLink : styles.mobileLink}
            href={eLearnNavigation.href}
            onClick={() => {
              setIsMenuOpen(false);
            setIsAboutOpen(false);
            }}
          >
            {eLearnNavigation.label}
          </Link>

          <Link
            className={styles.mobileJoinLink}
            href="/join-us"
            onClick={() => {
              setIsMenuOpen(false);
              setIsAboutOpen(false);
            }}
          >
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
}
