"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import type { AchievementShowcaseItem } from "@/data/company-content";
import styles from "./achievement-page.module.css";

type AchievementSectionGalleryProps = {
  sectionTitle: string;
  items: AchievementShowcaseItem[];
};

const MIN_RENDER_ITEMS = 18;

export function AchievementSectionGallery({
  sectionTitle,
  items,
}: AchievementSectionGalleryProps) {
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");
  const [isPaused, setIsPaused] = useState(false);
  const displayItems = useMemo(() => {
    const repeated: AchievementShowcaseItem[] = [];
    const targetLength = Math.max(items.length * 2, MIN_RENDER_ITEMS);

    for (let index = 0; index < targetLength; index += 1) {
      repeated.push(items[index % items.length]);
    }

    return repeated;
  }, [items]);
  const selectedItem = items.find((item) => item.id === selectedId) ?? items[0];
  const trackStyle = {
    "--slide-distance": `calc((clamp(8.5rem, 13vw, 11.5rem) + 1rem) * ${items.length})`,
  } as CSSProperties;

  function handleSelect(itemId: string) {
    setSelectedId(itemId);
    setIsPaused(true);
  }

  return (
    <div
      className={styles.galleryShell}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.sliderViewport}>
        <div
          className={`${styles.sliderTrack} ${isPaused ? styles.sliderTrackPaused : ""}`}
          style={trackStyle}
        >
          {displayItems.map((item, index) => (
            <button
              className={`${styles.tile} ${selectedItem?.id === item.id ? styles.tileActive : ""}`}
              key={`${item.id}-${index}`}
              onClick={() => handleSelect(item.id)}
              type="button"
            >
              <div className={styles.tileMedia}>
                <Image
                  alt={item.title}
                  className={styles.tileImage}
                  fill
                  sizes="(max-width: 960px) 85vw, 20vw"
                  src={item.image}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedItem ? (
        <article className={styles.detailCard}>
          <div className={styles.detailThumb}>
            <Image
              alt={selectedItem.title}
              className={styles.detailThumbImage}
              fill
              sizes="(max-width: 960px) 100vw, 12rem"
              src={selectedItem.image}
            />
          </div>

          <div className={styles.detailContent}>
            <p className={styles.detailLabel}>{sectionTitle}</p>
            <h3>{selectedItem.title}</h3>
            <p className={styles.detailDate}>{selectedItem.date}</p>
            <p className={styles.detailDescription}>{selectedItem.description}</p>
          </div>
        </article>
      ) : null}
    </div>
  );
}
