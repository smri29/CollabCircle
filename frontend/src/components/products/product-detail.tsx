import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/Products/product-data";
import styles from "./product-detail.module.css";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className={styles.shell}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>{product.eyebrow}</p>
        <h2>{product.tagline}</h2>
        <p>{product.overview}</p>
        <p><strong>Built for:</strong> {product.audience}</p>
        <div className={styles.actions}>
          <a className="button" href={product.liveUrl} rel="noreferrer" target="_blank">
            Open live product <ArrowUpRight size={16} strokeWidth={2} />
          </a>
          <span className={styles.secondaryAction}>Status: {product.status}</span>
        </div>
      </section>

      <div className={styles.gallery}>
        {product.imagePaths.map((imagePath, index) => (
          <figure key={imagePath}>
            <Image
              alt={`${product.name} interface preview ${index + 1}`}
              height={900}
              src={imagePath}
              width={1600}
            />
          </figure>
        ))}
      </div>

      <section className={styles.detailSection}>
        <p className={styles.sectionLabel}>At a glance</p>
        <ul className={styles.list}>
          {product.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>

      <section className={styles.detailSection}>
        <p className={styles.sectionLabel}>Capabilities</p>
        <div className={styles.featureGrid}>
          {product.features.map((feature) => (
            <article className={styles.feature} key={feature.title}>
              <h3>{feature.title}</h3>
              {feature.description && <p>{feature.description}</p>}
            </article>
          ))}
        </div>
      </section>

      {product.methodology && (
        <section className={styles.detailSection}>
          <p className={styles.sectionLabel}>Scoring methodology</p>
          <div className={styles.methodologyGrid}>
            {product.methodology.map((item) => (
              <div className={styles.methodologyItem} key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className={styles.notice}>
        <p className={styles.sectionLabel}>Privacy and scope</p>
        <p>{product.privacyNote}</p>
        {product.scopeNote && <p>{product.scopeNote}</p>}
      </section>
    </div>
  );
}
