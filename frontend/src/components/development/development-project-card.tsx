import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/Products/product-data";
import styles from "./development-project-card.module.css";

function getInitials(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

type DevelopmentProjectCardProps = {
  product: Product;
  index?: number;
};

export function DevelopmentProjectCard({
  product,
  index,
}: DevelopmentProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageSlot}>
        {product.imagePaths[0] ? (
          <Image
            alt={`${product.name} preview`}
            className={styles.productImage}
            fill
            sizes="(max-width: 960px) 100vw, 33vw"
            src={product.imagePaths[0]}
          />
        ) : (
          <span>{getInitials(product.name)}</span>
        )}
      </div>

      <div className={styles.cardTop}>
        <span className={styles.serial}>
          {index !== undefined ? String(index + 1).padStart(2, "0") : product.status}
        </span>
      </div>

      <h3>{product.name}</h3>

      <div className={styles.noteCard}>
        <p>{product.overview}</p>
      </div>

      <div className={styles.fieldRow}>
        <Link className={styles.link} href={`/products/${product.slug}`}>
            <span>View details</span>
            <ArrowUpRight size={15} strokeWidth={2} />
        </Link>
        <Link className={styles.externalLink} href={product.liveUrl} rel="noreferrer" target="_blank">
          <span>Open live product</span>
          <ArrowUpRight size={15} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
