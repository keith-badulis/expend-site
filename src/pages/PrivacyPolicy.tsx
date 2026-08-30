import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appIcon from '../assets/app-icon.png';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy - eXpend';
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="privacy-page-root">
      {/* Top Bar with Clean Back / Close Navigation */}
      <div className="privacy-top-bar">
        <div className="privacy-top-bar-inner">
          <button onClick={handleBack} className="privacy-back-btn" aria-label="Go back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>

          <Link to="/" className="privacy-brand-link">
            <img src={appIcon} alt="eXpend Icon" className="privacy-brand-mini-icon" />
            <span className="privacy-brand-name">eXpend</span>
          </Link>

          <button onClick={handleBack} className="privacy-close-btn" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main White Document Container */}
      <main className="privacy-main-content">
        <div className="privacy-doc-container">
          {/* Header */}
          <div className="privacy-doc-header">
            <img src={appIcon} alt="eXpend Icon" className="privacy-doc-app-icon" />
            <h1 className="privacy-doc-title">Privacy Policy for eXpend</h1>
            <div className="privacy-doc-tagline">Make Budgeting a Habit</div>
          </div>

          <p className="privacy-last-updated">
            <strong>Last Updated: July 18, 2026</strong>
          </p>

          {/* Section 1 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">1. Introduction</h2>
            <p>
              eXpend is a personal finance management application designed with privacy as a core principle. This Privacy Policy explains how user data is handled, what information is processed, and user rights regarding that information.
            </p>
          </section>

          {/* Section 2 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">2. Data Collection and Usage</h2>

            <h3 className="privacy-heading-3">2.1 Financial Data</h3>
            <p>
              eXpend allows users to track transactions, budgets, wallets, goals, and debts. All financial data is stored <strong>locally on the user's device</strong>. eXpend does not collect, access, or transmit financial data to any external servers.
            </p>

            <h3 className="privacy-heading-3">2.2 Personal Information</h3>
            <ul>
              <li>
                <strong>Profile Name:</strong> Users may optionally provide a name to personalize their profile. This information is stored strictly on the local device.
              </li>
              <li>
                <strong>Email Address (Optional):</strong> If a user chooses to submit feedback through the in-app support feature, an email address may be voluntarily provided solely to receive a response.
              </li>
            </ul>

            <h3 className="privacy-heading-3">2.3 Settings and Preferences</h3>
            <p>
              App configuration settings (such as currency, language, theme, and display preferences) are stored locally on the device to ensure a consistent user experience.
            </p>

            <h3 className="privacy-heading-3">2.4 Biometric Data</h3>
            <p>
              If the "Screen Lock" feature is enabled, eXpend utilizes the device's native biometric authentication mechanisms (such as FaceID, TouchID, or Fingerprint). eXpend <strong>never</strong> accesses, processes, or stores biometric data; it only receives confirmation from the operating system regarding authentication status.
            </p>

            <h3 className="privacy-heading-3">2.5 Device Diagnostics</h3>
            <p>
              When feedback is submitted or when a critical error occurs, the following technical diagnostics may be included to assist with troubleshooting:
            </p>
            <ul>
              <li>Device brand and model</li>
              <li>Operating System (OS) name and version</li>
              <li>App build version</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">3. Data Storage and Security</h2>
            <ul>
              <li>
                <strong>Local Storage:</strong> All personal and financial data is stored directly on the device within an encrypted local database (Realm), ensuring data remains under the user's full control.
              </li>
              <li>
                <strong>No Cloud Synchronization:</strong> eXpend does not synchronize data to any cloud service, remote database, or third-party server. All data remains strictly on the device unless manually exported by the user.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">4. Third-Party Services</h2>
            <p>
              To support essential application functionality, eXpend integrates a minimal set of third-party services:
            </p>
            <ul>
              <li>
                <strong>Exchange Rates Service (<code>open.er-api.com</code>):</strong> When automatic exchange rate updating is enabled, eXpend fetches live market exchange rates from <code>open.er-api.com</code>. <strong>No personal data, user identifiers, wallet balances, or account details are ever transmitted.</strong> Only the ISO currency code of the selected main currency (e.g., <code>USD</code> or <code>PHP</code>) is sent to retrieve public exchange rates.
              </li>
              <li>
                <strong>RevenueCat:</strong> Used to manage in-app purchases and subscription status. RevenueCat may process anonymized transaction identifiers to verify active purchases.
              </li>
              <li>
                <strong>App Store Platforms (Apple App Store / Google Play Store):</strong> In-app transactions and payment processing are handled directly by Apple or Google. eXpend does not process or store credit card numbers or payment details.
              </li>
              <li>
                <strong>Feedback and Error Reporting:</strong> Technical diagnostics provided during user-initiated feedback or crash reports are used exclusively for app maintenance and bug resolution.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">5. User Rights and Data Control</h2>
            <ul>
              <li>
                <strong>Access and Deletion:</strong> Because all data resides locally on the device, users maintain complete control over their information and can view, modify, or delete data at any time within the app.
              </li>
              <li>
                <strong>Permanent Data Removal:</strong> Uninstalling eXpend from the device permanently removes all locally stored application data and database files.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">6. Children's Privacy</h2>
            <p>
              eXpend is not directed at children under the age of 13 and does not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 7 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">7. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically to reflect application enhancements or regulatory requirements. Any updates will be indicated by the "Last Updated" date at the top of this document.
            </p>
          </section>

          {/* Section 8 */}
          <section className="privacy-section">
            <h2 className="privacy-heading-2">8. Contact Information</h2>
            <p>
              For questions regarding this Privacy Policy or data handling practices, users can reach out through the in-app feedback feature or via email at{' '}
              <a href="mailto:subdial.expend@outlook.com">subdial.expend@outlook.com</a>.
            </p>
          </section>

          {/* Bottom Back Button */}
          <div className="privacy-doc-footer">
            <button onClick={handleBack} className="privacy-bottom-btn">
              ← Return to eXpend
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
