import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ChromaStyle — how we collect, use, and protect your data.',
};

const EFFECTIVE = 'March 12, 2026';
const UPDATED   = 'March 17, 2026';

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.hero}>
        <div className="container">
          <div className="prose">
            <p className="label">Legal</p>
            <h1 style={{ marginTop: 8 }}>Privacy Policy</h1>
            <p className="subtitle">
              ChromaStyle (&quot;the App&quot;) is operated by Evtsoy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              This policy explains what data we collect, why, and how we protect it.
            </p>
            <div className={styles.meta}>
              <span className={styles.metaItem}>📅 Effective: {EFFECTIVE}</span>
              <span className={styles.metaItem}>🔄 Last updated: {UPDATED}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <article className="prose">

          <h2>1. Overview</h2>
          <p>
            ChromaStyle is an iOS app that analyses your personal color palette using your device
            camera and provides personalized style recommendations. We are committed to protecting
            your privacy. We do <strong>not</strong> create user accounts, store your photos on our
            servers, or sell your personal data.
          </p>

          <h2>2. Information We Collect</h2>

          <h2>2a. Camera &amp; Photo Data</h2>
          <p>
            ChromaStyle requests access to your device camera to capture a selfie for skin tone
            analysis. All photo processing is performed <strong>entirely on-device</strong> using
            Apple&apos;s Vision framework. <strong>Selfie photos and camera frames are never uploaded
            to our servers, never sent to OpenAI, and never transmitted to any third party
            whatsoever.</strong> The only data that leaves your device is described in Section 2b
            below.
          </p>

          <h2>2b. Style Quiz &amp; Locally Stored Preferences</h2>
          <p>
            During onboarding, ChromaStyle asks you a series of style quiz questions, including
            your age range, style preferences, lifestyle, budget, climate, and fashion goals.
            <strong> All quiz answers are stored only on your device</strong> using Apple&apos;s
            SwiftData framework and are never transmitted to our servers. A subset of this data
            (your color season type, palette colors, and style preferences) is sent to OpenAI
            solely to generate recommendations, as described in Section 2c.
          </p>
          <p>
            We <strong>never</strong> collect or store your name, email address, physical location,
            or device identifiers. No user accounts are created.
          </p>

          <h2>2c. Color Analysis Data Sent to OpenAI</h2>
          <p>
            To generate personalized style recommendations, ChromaStyle sends the following
            anonymized, non-photographic data to OpenAI:
          </p>
          <ul>
            <li>Your color season type (e.g., &quot;Soft Autumn&quot;)</li>
            <li>Your palette color values (numerical color representations)</li>
            <li>Style preferences you provided in the quiz</li>
          </ul>
          <p>
            <strong>No photos, selfies, or images of any kind are ever sent to OpenAI.</strong>{' '}
            This data is used solely to generate in-app style content and not for advertising,
            tracking, or profiling.
          </p>
          <p>
            OpenAI&apos;s Privacy Policy:{' '}
            <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">openai.com/privacy</a>
          </p>

          <h2>2d. Product Inspiration Images (Google Shopping via Serper.dev)</h2>
          <p>
            Product inspiration images displayed in your Style Guide are sourced from Google
            Shopping through the Serper.dev API. These requests are made by <strong>our server</strong>,
            not directly from your device. No personal information or user identifiers are sent
            to Serper.dev or Google — only a search query derived from your color season (e.g.,
            &quot;Soft Autumn outfit ideas&quot;).
          </p>
          <p>
            Serper&apos;s Privacy Policy:{' '}
            <a href="https://serper.dev/privacy" target="_blank" rel="noopener noreferrer">serper.dev/privacy</a>
          </p>

          <h2>2e. Purchase Data</h2>
          <p>
            ChromaStyle offers in-app purchases processed by <strong>Apple&apos;s App Store</strong>.
            We do not collect, store, or process any payment card numbers, billing addresses, or
            financial information. Purchase receipts are validated through{' '}
            <strong>RevenueCat</strong>, which receives only an anonymous app user ID (not linked
            to your identity) and your Apple purchase receipt to verify entitlements. RevenueCat
            does not receive your name, email, photos, or any personal data.
          </p>
          <p>
            RevenueCat&apos;s Privacy Policy:{' '}
            <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a>
          </p>

          <h2>2f. Server Infrastructure (Supabase)</h2>
          <p>
            Our server backend uses <strong>Supabase</strong> infrastructure to proxy requests
            for product inspiration images (see Section 2d). No personal user data is stored in
            Supabase — it is used solely as a relay to fetch external content on your behalf.
          </p>
          <p>
            Supabase&apos;s Privacy Policy:{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>
          </p>

          <h2>2g. Device &amp; Usage Data</h2>
          <p>
            The App may collect anonymized, aggregated crash reports and performance diagnostics
            through Apple&apos;s built-in frameworks (e.g., MetricKit). This data cannot be used to
            identify you personally. We do not use third-party analytics SDKs.
          </p>

          <h2>2h. Local Storage (SwiftData)</h2>
          <p>
            Your color palette results, quiz answers, wardrobe items, custom palettes, and style
            preferences are stored <strong>locally on your device</strong> using Apple&apos;s SwiftData
            framework. There are no user accounts and no server-side personal data storage. This
            data may be backed up to iCloud only as part of your personal iCloud account, which
            is controlled entirely by you and Apple.
          </p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To analyze your skin tone on-device and determine your personal color season.</li>
            <li>To generate personalized style recommendations via OpenAI (color season, palette, and quiz preferences only — no photos).</li>
            <li>To display product inspiration images fetched through our server proxy.</li>
            <li>To enable the Color Scanner and virtual draping features.</li>
            <li>To verify and restore your in-app purchase via RevenueCat.</li>
            <li>To diagnose crashes and improve app stability via Apple diagnostics.</li>
          </ul>
          <p>We do <strong>not</strong> use your data for advertising, profiling, or any purpose
          not listed above.</p>

          <h2>4. Data Sharing &amp; Third Parties</h2>
          <p>
            We share only the minimal data necessary to provide the features described above. The
            following third-party services are used:
          </p>
          <ul>
            <li>
              <strong>OpenAI</strong> — Receives your color season, palette values, and style
              preferences to generate recommendations. No photos sent.{' '}
              <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </li>
            <li>
              <strong>RevenueCat</strong> — Receives an anonymous app user ID and Apple purchase
              receipt to validate in-app purchases. No personal data sent.{' '}
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </li>
            <li>
              <strong>Supabase</strong> — Server infrastructure used to proxy product image
              searches. No personal user data stored.{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </li>
            <li>
              <strong>Apple</strong> — Purchase processing, device analytics, and iCloud backup
              (under your own Apple account).
            </li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information. We do not use advertising
            networks, cross-app tracking, or third-party analytics SDKs.
          </p>

          <h2>5. Children&apos;s Privacy</h2>
          <p>
            ChromaStyle is not directed to children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you believe a child under 13
            has provided personal information through the App, please contact us immediately at
            <a href="mailto:chromastyle@evtsoy.com"> chromastyle@evtsoy.com</a> and we will
            promptly delete it.
          </p>

          <h2>6. Data Deletion</h2>
          <p>
            Since we do not maintain user accounts or server-side personal databases, there is no
            personal data stored on our servers to retain or delete. All personal data lives on
            your device. You can delete all app data in either of the following ways:
          </p>
          <ul>
            <li>
              <strong>In-app:</strong> Go to Settings → tap <em>&quot;Delete My Data&quot;</em> to
              permanently erase all locally stored data.
            </li>
            <li>
              <strong>Delete the app:</strong> Uninstalling ChromaStyle from your iPhone removes
              all associated data from your device.
            </li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights including access, correction,
            deletion, or portability of your personal data. Since all personal data is stored
            locally on your device, you can exercise these rights directly by managing or deleting
            the App. For any questions or requests, contact us at:
          </p>
          <div className={styles.contactBox}>
            <p>📧 <a href="mailto:chromastyle@evtsoy.com">chromastyle@evtsoy.com</a></p>
          </div>

          <h2>8. Security</h2>
          <p>
            We take security seriously. Camera processing is on-device only. Data transmitted to
            AI services uses HTTPS/TLS encryption. We do not log or retain color analysis inputs
            on any server. Purchase verification is handled by Apple&apos;s secure infrastructure.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the top of this page. Continued use of the App after changes
            constitutes acceptance of the revised policy. For significant changes, we will provide
            notice within the App.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests about this Privacy Policy or your data,
            please contact:
          </p>
          <div className={styles.contactBox}>
            <p>
              <strong>ChromaStyle Support</strong><br />
              📧 <a href="mailto:chromastyle@evtsoy.com">chromastyle@evtsoy.com</a><br />
              🌐 <a href="https://chromastyle.evtsoy.com">chromastyle.evtsoy.com</a>
            </p>
          </div>

          <hr className="divider" />
          <p style={{ fontSize: '.85rem' }}>
            This privacy policy was written specifically for the ChromaStyle iOS app and reflects
            our actual data practices. If you have any questions about this policy, do not hesitate
            to reach out.
          </p>
        </article>
      </div>
    </div>
  );
}
