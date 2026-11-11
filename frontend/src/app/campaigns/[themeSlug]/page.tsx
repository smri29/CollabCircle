import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { campaignThemes, getTheme } from "@/Campaigns/campaign-data";
import imageStyles from "@/Campaigns/campaign-images.module.css";
import styles from "@/Campaigns/campaigns.module.css";

export function generateStaticParams() { return campaignThemes.map((theme) => ({ themeSlug: theme.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ themeSlug: string }> }): Promise<Metadata> { const theme = getTheme((await params).themeSlug); return { title: theme?.name ?? "Campaign theme" }; }

export default async function CampaignThemePage({ params }: { params: Promise<{ themeSlug: string }> }) {
  const theme = getTheme((await params).themeSlug); if (!theme) notFound();
  return <><PageHero transparent wideIntro title={theme.name} intro={theme.description} /><section className="section"><div className={styles.sectionHeading}><p className={styles.label}>Campaigns under this theme</p></div><div className={styles.grid}>{theme.campaigns.map((campaign) => <article className={styles.card} key={campaign.slug}><div className={imageStyles.imageWrap}><Image alt={campaign.title} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw" src={campaign.imagePath} /></div><p className={styles.label}>Campaign</p><h2>{campaign.title}</h2><p>{campaign.subtitle}</p><Link className={styles.cardLink} href={`/campaigns/${theme.slug}/${campaign.slug}`}>View campaign <ArrowRight size={16} strokeWidth={2} /></Link></article>)}</div></section><section className="section"><Link className={styles.contactLink} href="/campaigns">Back to campaign themes <ArrowRight size={16} strokeWidth={2} /></Link></section></>;
}
