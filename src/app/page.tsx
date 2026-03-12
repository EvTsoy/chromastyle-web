import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ChromaStyle — Discover Your Personal Color Palette',
};

const PALETTE = [
  '#B5A18A', '#8B7355', '#6B4F3A',
  '#7A9E8E', '#4A6B5C', '#A8C5B5',
  '#C4A882', '#8B6B4A', '#D4B896',
];

const FEATURES = [
  {
    icon: '🎨',
    title: 'AI Color Season Analysis',
    desc: 'Point your camera at your face and ChromaStyle instantly identifies your seasonal palette — Spring, Summer, Autumn, or Winter — with subcategory precision.',
  },
  {
    icon: '📷',
    title: 'Live Color Scanner',
    desc: 'Scan any item in real time and see exactly how well it matches your palette, with a Delta-E color accuracy score.',
  },
  {
    icon: '👗',
    title: 'Virtual Try-On (Draping)',
    desc: 'Preview your palette colors draped over your live camera feed before committing to a purchase.',
  },
  {
    icon: '✨',
    title: 'Personalized Style Guide',
    desc: 'Get outfit ideas, combination tips, and color pairings curated specifically for your season — refreshed daily.',
  },
  {
    icon: '👔',
    title: 'Smart Wardrobe Tracker',
    desc: 'Catalogue your clothes and see your palette alignment score. Know which items work and which to retire.',
  },
  {
    icon: '🖌️',
    title: 'Custom Palettes',
    desc: 'Build unlimited custom color palettes for different moods, occasions, or seasons alongside your core result.',
  },
];

const STEPS = [
  {
    n: 1,
    title: 'Take a selfie',
    desc: 'Hold your phone in natural light. ChromaStyle samples your skin tone with precision color science.',
  },
  {
    n: 2,
    title: 'Get your season',
    desc: 'Our AI classifies you into one of 12 color seasons and shows your full personal palette.',
  },
  {
    n: 3,
    title: 'Shop & dress smarter',
    desc: 'Use the scanner and draping tools every time you shop. Never buy the wrong color again.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.eyebrow}>
            <span>✦</span> Now available on iPhone
          </div>

          <h1 className={styles.heroTitle}>
            Wear colors that<br />
            <em>were made for you</em>
          </h1>

          <p className={styles.heroSub}>
            ChromaStyle uses AI color science to find your personal seasonal palette,
            then helps you apply it — from shopping to your wardrobe.
          </p>

          <div className={styles.heroCtas}>
            <a
              href="https://apps.apple.com/app/chromastyle"
              className={styles.appStoreBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span>
                <span className={styles.appStoreSubtext}>Download on the</span>
                <span className={styles.appStorePrimary}>App Store</span>
              </span>
            </a>
          </div>

          {/* Decorative palette strip */}
          <div className={styles.paletteStrip} aria-hidden="true">
            {PALETTE.map((color) => (
              <div
                key={color}
                className={styles.colorDot}
                style={{ background: color }}
                title={color}
              />
            ))}
          </div>
          <p className={styles.heroNote}>Sample Soft Autumn palette</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">What ChromaStyle does</p>
            <h2 className="heading" style={{ marginTop: 8 }}>
              Every tool you need,<br />none you don&apos;t
            </h2>
          </div>

          <div className={styles.featuresGrid}>
            {FEATURES.map((f) => (
              <div className={styles.featureCard} key={f.title}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.section} style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">How it works</p>
            <h2 className="heading" style={{ marginTop: 8 }}>Three steps to your palette</h2>
          </div>

          <div className={styles.steps}>
            {STEPS.map((s) => (
              <div className={styles.step} key={s.n}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="label">Pricing</p>
            <h2 className="heading" style={{ marginTop: 8 }}>Simple, honest pricing</h2>
          </div>

          <div className={styles.pricingBox}>
            <span className={styles.pricingLabel}>Lifetime Access</span>
            <div className={styles.pricingAmount}>$4.99</div>
            <p className={styles.pricingNote}>No subscription. Pay once, yours forever.</p>

            <ul className={styles.pricingFeatures}>
              <li>Unlimited Color Analysis</li>
              <li>Watermark-Free Palette Cards</li>
              <li>Color Scanner</li>
              <li>Full Palette Try-On</li>
              <li>Custom Palettes</li>
            </ul>

            <a
              href="https://apps.apple.com/app/chromastyle"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get ChromaStyle
            </a>
          </div>
        </div>
      </section>

      {/* ── Support ── */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.supportBanner}>
            <div className={styles.supportText}>
              <h3>Need help?</h3>
              <p>
                We respond to every message. Reach us at any time.
              </p>
            </div>
            <a href="mailto:chromastyle@evtsoy.com" className={styles.supportEmail}>
              <span>✉</span>
              chromastyle@evtsoy.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
