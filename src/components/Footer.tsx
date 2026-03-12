import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>ChromaStyle</span>
          <p className={styles.tagline}>Discover your perfect color palette.</p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <span className={styles.colTitle}>App</span>
            <a href="https://apps.apple.com/app/chromastyle" target="_blank" rel="noopener noreferrer">
              Download on App Store
            </a>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>Legal</span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>Support</span>
            <a href="mailto:chromastyle@evtsoy.com">chromastyle@evtsoy.com</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} ChromaStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
