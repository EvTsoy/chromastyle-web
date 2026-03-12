import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>ChromaStyle</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/#features" className={styles.navLink}>Features</Link>
          <Link href="/privacy"   className={styles.navLink}>Privacy</Link>
          <Link href="/terms"     className={styles.navLink}>Terms</Link>
          <a
            href="https://apps.apple.com/app/chromastyle"
            className={`btn btn-primary ${styles.cta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
}
