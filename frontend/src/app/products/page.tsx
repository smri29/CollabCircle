import type { Metadata } from "next";
import { DevelopmentProjectCard } from "@/components/development/development-project-card";
import styles from "@/components/development/development-project-card.module.css";
import { PageHero } from "@/components/shared/page-hero";
import { products } from "@/Products/product-data";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products of CollabCircle"
      />

      <section className="section">
        <div className={styles.grid}>
          {products.map((product, index) => (
            <DevelopmentProjectCard index={index} key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
