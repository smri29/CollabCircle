import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { campaignThemes } from "@/Campaigns/campaign-data";
import imageStyles from "@/Campaigns/campaign-images.module.css";
import styles from "@/Campaigns/campaigns.module.css";

export const metadata: Metadata = { title: "Campaigns", description: "Explore CollabCircle campaigns organized by theme." };

export default function CampaignsPage() {
  return <><section className="section"><div className={styles.sectionHeading}><h2>Choose a theme to explore its campaigns</h2></div><div className={styles.grid}>{campaignThemes.map((theme) => <a className={styles.card} href={`/campaigns/${theme.slug}`} key={theme.slug}><div className={imageStyles.imageWrap}><Image alt={theme.name} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw" src={theme.imagePath} /></div><h2>{theme.name}</h2><p>{theme.description}</p><span className={styles.cardLink}>Explore theme <ArrowRight size={16} strokeWidth={2} /></span></a>)}</div></section></>;
}
