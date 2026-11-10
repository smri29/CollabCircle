import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/product-detail";
import { PageHero } from "@/components/shared/page-hero";
import { getProduct, products } from "@/Products/product-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = getProduct(slug);
    return { title: product?.name ?? "Product" };
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <PageHero title={product.name} />
      <section className="section">
        <ProductDetail product={product} />
      </section>
    </>
  );
}
