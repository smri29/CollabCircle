import { PlayCircle } from "lucide-react";
import { youtubeChannelHref, youtubeShowcaseVideos } from "@/data/site-content";
import styles from "./youtube-showcase.module.css";

export function YouTubeShowcase() {
  return (
    <article className={styles.videoPanel}>
      <div className={styles.videoHeading}>
        <div>
          <p className={styles.eyebrow}>
            <PlayCircle size={16} strokeWidth={2} />
            <span>YouTube</span>
          </p>
          <h3>Videos from the CollabCircle YouTube channel will appear here.</h3>
        </div>

        <a
          className={styles.locationLink}
          href={youtubeChannelHref}
          rel="noreferrer"
          target="_blank"
        >
          Visit YouTube Channel
        </a>
      </div>

      {youtubeShowcaseVideos.length > 0 ? (
        <div className={styles.videoGrid}>
          {youtubeShowcaseVideos.map((video) => (
            <article className={styles.videoCard} key={video.embedUrl}>
              <div className={styles.videoFrameWrap}>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  aria-label={video.title}
                  className={styles.videoFrame}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={video.embedUrl}
                  title={video.title}
                />
              </div>
              <h4>{video.title}</h4>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.videoGrid}>
          {Array.from({ length: 3 }, (_, index) => (
            <article className={styles.videoPlaceholder} key={`video-slot-${index + 1}`}>
              <div className={styles.videoPlaceholderFrame}>
                <PlayCircle size={28} strokeWidth={1.8} />
                <span>Video Slot {index + 1}</span>
              </div>
              <h4>Upcoming channel video</h4>
              <p>Upload a YouTube embed URL to show a new CollabCircle video here.</p>
            </article>
          ))}
        </div>
      )}
    </article>
  );
}
