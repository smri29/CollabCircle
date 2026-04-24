import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, Trophy } from "lucide-react";
import { YouTubeShowcase } from "@/components/shared/youtube-showcase";
import { latestAchievements } from "@/data/company-content";
import { GatewaySection } from "./gateway-section";
import styles from "./company-home.module.css";



export function CompanyHome() {
  return (
    <>
      <section className={styles.hero}>
        <article className={styles.panel}>
          <div className={styles.panelInner}>
            <h1>Research now. Engineering next. Built with a long view.</h1>
            <p className={styles.lead}>
              Driving innovation in Machine Learning &amp; Deep Learning through open collaboration and impactful research.
            </p>
            <Link className={`button ${styles.heroCta}`} href="/career">
              <span>Explore Careers</span>
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </article>

        {latestAchievements[0] && (
          <aside className={styles.aside}>
            <div className={styles.asideInner}>

              {/* Label */}
              <p className={styles.asideLabel}>
                <Trophy size={12} strokeWidth={2.5} style={{ display: "inline", marginRight: "0.35rem", verticalAlign: "middle" }} />
                Latest Achievement
              </p>

              {/* Title | divider | description — horizontal meta row */}
              <div className={styles.achievementMeta}>
                <h2 className={styles.achievementTitle}>{latestAchievements[0].title}</h2>
                <span className={styles.achievementDivider} aria-hidden="true" />
                <p className={styles.achievementDesc}>{latestAchievements[0].description}</p>
              </div>

              {/* Image — full natural ratio, no cropping */}
              <div className={styles.achievementImageWrap}>
                <Image
                  alt={latestAchievements[0].title}
                  className={styles.achievementImage}
                  height={0}
                  priority
                  sizes="(max-width: 960px) 100vw, 45vw"
                  src={latestAchievements[0].image}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  width={0}
                />
                <span className={styles.achievementDate}>{latestAchievements[0].date}</span>
              </div>

              {/* Link below image */}
              {latestAchievements[0].href && (
                <Link className={styles.achievementLink} href={latestAchievements[0].href}>
                  <span>View all achievements</span>
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              )}

            </div>
          </aside>
        )}
      </section>

      <GatewaySection />

      <section className={styles.section}>
        <article className={styles.locationPanel}>
          <div className={styles.locationCopy}>
            <p className={styles.eyebrow}>
              <MapPinned size={16} strokeWidth={2} />
              <span>Location</span>
            </p>
            <h3>CollabCircle is rooted in Mirpur, Dhaka, Bangladesh.</h3>
            <a
              className={styles.locationLink}
              href="https://www.google.com/maps?q=Mirpur,Dhaka,Bangladesh"
              rel="noreferrer"
              target="_blank"
            >
              Open in Google Maps
            </a>
          </div>

          <div className={styles.mapFrameWrap}>
            <iframe
              aria-label="Google Map showing Mirpur, Dhaka, Bangladesh"
              className={styles.mapFrame}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Mirpur,Dhaka,Bangladesh&z=14&output=embed"
            />
          </div>
        </article>

        <YouTubeShowcase />
      </section>

    </>
  );
}
