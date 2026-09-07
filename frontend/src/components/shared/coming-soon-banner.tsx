import styles from "./coming-soon-banner.module.css";

export function ComingSoonBanner() {
  return (
    <section className="section" aria-label="Coming soon">
      <div className={styles.banner}>Coming Soon...</div>
    </section>
  );
}
