import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./back-button.module.css";

type BackButtonProps = {
  href: string;
  label?: string;
};

export function BackButton({ href, label = "Back" }: BackButtonProps) {
  return (
    <Link className={styles.backLink} href={href}>
      <ArrowLeft size={16} strokeWidth={2} />
      <span>{label}</span>
    </Link>
  );
}
