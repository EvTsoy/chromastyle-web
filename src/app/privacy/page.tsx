import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ChromaStyle — how we collect, use, and protect your data.',
};

const EFFECTIVE = 'March 12, 2026';
const UPDATED   = 'March 12, 2026';

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
            ChromaStyle requests access to your device camera to perform real-time color analysis
            of your skin tone. <strong>Photos and camera frames are processed entirely on-device
            and are never uploaded to our servers or transmitted to any third party.</strong> The
            only data that leaves your device is described in Section 2b below.
          </p>

          <h2>2b. Color Analysis Data Sent to AI Services</h2>
          <p>
            To generate your seasonal color palette, personalized style recommendations, and daily
            inspiration content, ChromaStyle sends anonymized color values (CIE Lab color space
            coordinates — numerical representations of color, not photographs) to the following
            third-party AI services:
          </p>
          <ul>
            <li>
              <strong>OpenAI API (ChatGPT)</strong> — Used to generate style recommendations,
              outfit suggestions, and natural-language descriptions of your color palette.
              Data sent: your color season type (e.g., &quot;Soft Autumn&quot;), palette color values,
              and preference data you provide within the app. No photos are sent.
              OpenAI&apos;s Privacy Policy: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">openai.com/privacy</a>
            </li>
            <li>
              <strong>Serper API</strong> — Used to fetch relevant style imagery and fashion
              content for your Style Guide. Data sent: search queries derived from your color
              season (e.g., &quot;Soft Autumn outfit ideas&quot;). No personal identifying information
              is included.
              Serper&apos;s Privacy Policy: <a href="https://serper.dev/privacy" target="_blank" rel="noopener noreferrer">serper.dev/privacy</a>
            </li>
          </ul>
          <p>
            Both services are used solely to deliver in-app features. We do not use them for
            advertising, tracking, or profiling.
          </p>

          <h2>2c. Purchase Data</h2>
          <p>
            ChromaStyle offers a one-time lifetime in-app purchase processed exclusively through
            <strong> Apple&apos;s App Store and StoreKit</strong>. We do not collect, store, or process
            any payment card numbers, billing addresses, or financial information. Purchase
            verification is handled entirely by Apple. Apple&apos;s Privacy Policy:&nbsp;
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              apple.com/legal/privacy
            </a>
          </p>

          <h2>2d. Device &amp; Usage Data</h2>
          <p>
            The App may collect anonymized, aggregated crash reports and performance diagnostics
            through Apple&apos;s built-in frameworks (e.g., MetricKit). This data cannot be used to
            identify you personally. We do not use third-party analytics SDKs.
          </p>

          <h2>2e. Local Storage (SwiftData)</h2>
          <p>
            Your color palette results, wardrobe items, custom palettes, and style preferences are
            stored <strong>locally on your device</strong> using Apple&apos;s SwiftData framework.
            This data is backed up to iCloud only as part of your personal iCloud account, which
            is controlled entirely by you and Apple.
          </p>

          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To determine your personal color season and generate your palette.</li>
            <li>To provide personalized style recommendations and daily content.</li>
            <li>To enable the Color Scanner and virtual draping features.</li>
            <li>To verify and restore your lifetime purchase.</li>
            <li>To diagnose crashes and improve app stability.</li>
          </ul>
          <p>We do <strong>not</strong> use your data for advertising, profiling, or any purpose
          not listed above.</p>

          <h2>4. Data Sharing &amp; Third Parties</h2>
          <p>
            We share only the minimal data necessary to provide the features described above with
            the following third parties:
          </p>
          <ul>
            <li><strong>OpenAI</strong> — AI-generated style content (see Section 2b)</li>
            <li><strong>Serper</strong> — Style imagery search (see Section 2b)</li>
            <li><strong>Apple</strong> — Purchase processing and device analytics</li>
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

          <h2>6. Data Retention</h2>
          <p>
            Since we do not maintain user accounts or server-side databases, there is no personal
            data stored on our servers to retain or delete. All personal data lives on your device.
            You can delete all app data at any time by uninstalling ChromaStyle from your iPhone.
          </p>

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
