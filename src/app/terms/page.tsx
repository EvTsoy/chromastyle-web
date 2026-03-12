import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for ChromaStyle — your rights and responsibilities when using the app.',
};

const EFFECTIVE = 'March 12, 2026';
const UPDATED   = 'March 12, 2026';

export default function TermsPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.hero}>
        <div className="container">
          <div className="prose">
            <p className="label">Legal</p>
            <h1 style={{ marginTop: 8 }}>Terms of Use</h1>
            <p className="subtitle">
              Please read these Terms of Use (&quot;Terms&quot;) carefully before using ChromaStyle.
              By downloading or using the App, you agree to be bound by these Terms.
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

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ChromaStyle (&quot;the App&quot;), you confirm that you are at least
            13 years of age and agree to these Terms of Use and our{' '}
            <a href="/privacy">Privacy Policy</a>. If you do not agree to these Terms, do not
            download or use the App.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            ChromaStyle is an iOS application that:
          </p>
          <ul>
            <li>Analyses your skin tone via your device camera to determine your personal color season</li>
            <li>Provides a curated color palette based on seasonal color theory</li>
            <li>Offers a real-time Color Scanner to evaluate how clothing and items match your palette</li>
            <li>Provides a virtual try-on (draping) feature using your live camera</li>
            <li>Generates AI-powered style recommendations via the OpenAI API</li>
            <li>Fetches style imagery via the Serper API</li>
            <li>Allows management of a personal wardrobe tracker and custom palettes</li>
          </ul>
          <p>
            ChromaStyle is provided as-is for personal, non-commercial use only.
          </p>

          <h2>3. In-App Purchases</h2>
          <p>
            ChromaStyle offers a <strong>one-time, non-refundable lifetime purchase</strong> of
            premium features for $4.99 USD (or the equivalent price in your local currency as
            determined by Apple). The purchase is processed by Apple through the App Store.
          </p>
          <ul>
            <li>All purchases are final and non-refundable, except as required by applicable law
                or Apple&apos;s refund policies.</li>
            <li>To request a refund, contact Apple directly via{' '}
                <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
                  reportaproblem.apple.com</a>.</li>
            <li>If you delete the App, you can restore your purchase at any time using the
                &quot;Restore Purchase&quot; option within the App, provided you are signed in to the
                same Apple ID.</li>
            <li>Prices may vary by region. Apple determines local pricing.</li>
          </ul>

          <h2>4. License</h2>
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
            revocable license to use ChromaStyle for your personal, non-commercial purposes on
            Apple devices you own or control, as permitted by the App Store Terms of Service.
          </p>
          <p>You may not:</p>
          <ul>
            <li>Copy, modify, or distribute the App or its content</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Use the App to develop a competing product or service</li>
            <li>Remove any copyright or proprietary notices</li>
            <li>Use the App for any unlawful purpose</li>
          </ul>

          <h2>5. Camera &amp; Permissions</h2>
          <p>
            ChromaStyle requires access to your device camera to function. By granting camera
            access, you acknowledge that:
          </p>
          <ul>
            <li>Camera images are processed on-device and are not uploaded to any server</li>
            <li>Anonymized color values (not photos) may be sent to our AI service providers to
                generate style recommendations (see our <a href="/privacy">Privacy Policy</a>)</li>
            <li>You can revoke camera permission at any time in your iPhone Settings, though this
                will prevent core features from working</li>
          </ul>

          <h2>6. Third-Party Services</h2>
          <p>
            ChromaStyle integrates with the following third-party services to deliver its features:
          </p>
          <ul>
            <li>
              <strong>OpenAI (ChatGPT API)</strong> — Generates style recommendations and
              natural-language content. Subject to{' '}
              <a href="https://openai.com/policies/terms-of-use" target="_blank" rel="noopener noreferrer">
                OpenAI&apos;s Terms of Use</a>.
            </li>
            <li>
              <strong>Serper API</strong> — Provides style-relevant search results. Subject to{' '}
              <a href="https://serper.dev/terms" target="_blank" rel="noopener noreferrer">
                Serper&apos;s Terms of Service</a>.
            </li>
            <li>
              <strong>Apple App Store &amp; StoreKit</strong> — Processes all payments. Subject to{' '}
              <a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html"
                 target="_blank" rel="noopener noreferrer">
                Apple Media Services Terms and Conditions</a>.
            </li>
          </ul>
          <p>
            We are not responsible for the availability, accuracy, or content of third-party
            services. Your use of third-party services is subject to their respective terms.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            ChromaStyle is provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong>
            without warranties of any kind, express or implied. We do not warrant that:
          </p>
          <ul>
            <li>The App will be uninterrupted, error-free, or bug-free</li>
            <li>Color analysis results will be perfectly accurate for all users</li>
            <li>AI-generated style recommendations will be suitable for your specific situation</li>
            <li>The App will be compatible with all future iOS versions or devices</li>
          </ul>
          <p>
            Color analysis results are based on algorithmic color science and should be treated
            as guidance, not professional fashion advice.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Evtsoy shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages arising out of
            your use of or inability to use the App, even if we have been advised of the possibility
            of such damages. Our total liability to you for any claims arising from your use of
            the App shall not exceed the amount you paid for the App (i.e., $4.99 USD or local
            equivalent).
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content, design, code, branding, and materials in ChromaStyle are owned by or
            licensed to Evtsoy and are protected by intellectual property laws. The ChromaStyle
            name, logo, and all related marks are our trademarks. You may not use our trademarks
            without prior written permission.
          </p>

          <h2>10. User Content</h2>
          <p>
            ChromaStyle does not collect or store user-generated content on our servers. All
            wardrobe items, custom palettes, and preferences are stored locally on your device.
            You retain full ownership of any content you create within the App.
          </p>

          <h2>11. Termination</h2>
          <p>
            We reserve the right to discontinue the App or any feature at any time. If we
            discontinue the App, you will retain access to your locally stored data. We may also
            update, modify, or remove features at our discretion. Significant changes will be
            communicated within the App where feasible.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable law.
            Any disputes shall be resolved through good-faith negotiation. If you have a dispute,
            please contact us first at{' '}
            <a href="mailto:chromastyle@evtsoy.com">chromastyle@evtsoy.com</a>.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We will update the &quot;Last updated&quot; date
            above. Continued use of the App after changes to the Terms constitutes your acceptance.
            For material changes, we will provide notice in the App.
          </p>

          <h2>14. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us:
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
            These Terms of Use govern your use of the ChromaStyle iOS app. By using the App
            you confirm you have read and agreed to these terms.
          </p>
        </article>
      </div>
    </div>
  );
}
