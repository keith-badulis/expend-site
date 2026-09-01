import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appIcon from '../assets/app-icon.png';
import styles from './PrivacyPolicy.module.css';

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy - eXpend';
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.privacyPageRoot}>
      {/* Clean Single Back Navigation */}
      <header className={styles.privacyTopBar}>
        <div className={styles.privacyTopBarInner}>
          <a href="/" onClick={handleBack} className={styles.privacyBackLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to eXpend</span>
          </a>
        </div>
      </header>

      {/* Main White Document Container */}
      <main className={styles.privacyMainContent}>
        <div className={styles.privacyDocContainer}>
          {/* Header */}
          <div className={styles.privacyDocHeader}>
            <img src={appIcon} alt="eXpend Icon" className={styles.privacyDocAppIcon} />
            <h1 className={styles.privacyDocTitle}>Privacy Policy for eXpend</h1>
            <div className={styles.privacyDocTagline}>Make Budgeting a Habit</div>
          </div>

          <p className={styles.privacyLastUpdated}>
            <strong>Last Updated: August 31, 2026</strong>
          </p>

          {/* Section 1 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>1. Introduction</h2>
            <p>
              eXpend is an offline-first personal finance management application designed with user privacy as a foundational principle. This Privacy Policy explains how data is handled, stored, backed up, and protected when using the eXpend mobile application.
            </p>
          </section>

          {/* Section 2 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>2. Data Collection and Usage</h2>

            <h3 className={styles.privacyHeading3}>2.1 Financial Data</h3>
            <p>
              eXpend allows users to track transactions, budgets, wallets, goals, and debts. All financial records and account balances are stored <strong>strictly locally on the user's device</strong> inside an encrypted database. eXpend does not maintain central database servers, nor does it collect, monetize, or transmit financial data to any external parties.
            </p>

            <h3 className={styles.privacyHeading3}>2.2 Personal Information</h3>
            <ul>
              <li>
                <strong>Profile Name:</strong> Users may optionally provide a display name to personalize their profile. This information is stored exclusively on the local device.
              </li>
              <li>
                <strong>Google Account Information (Optional):</strong> When a user chooses to connect their Google account to enable Google Drive Cloud Backup, eXpend accesses basic profile details (email address, display name, and avatar image) solely to display connected account status within the app settings. This information is stored locally on the device and is never transmitted to any eXpend or third-party servers.
              </li>
              <li>
                <strong>Email Address (Optional):</strong> If a user chooses to submit feedback or support inquiries through the in-app feedback feature, an email address may be voluntarily provided solely to receive a reply.
              </li>
            </ul>

            <h3 className={styles.privacyHeading3}>2.3 Settings and Preferences</h3>
            <p>
              App configuration settings (such as base currency, active language, color themes, display preferences, and backup settings) are stored locally on the device to maintain application functionality.
            </p>

            <h3 className={styles.privacyHeading3}>2.4 Biometric Data</h3>
            <p>
              If the "Screen Lock" security feature is enabled, eXpend interacts with the device's native biometric authentication mechanisms (such as Face ID, Touch ID, or Android Biometric Prompt). eXpend <strong>never</strong> accesses, processes, or stores biometric identifiers; authentication is handled entirely by the device's secure hardware and operating system.
            </p>

            <h3 className={styles.privacyHeading3}>2.5 Backup and Export Files</h3>
            <p>
              eXpend provides multiple user-initiated and automated options to safeguard and export financial data:
            </p>
            <ul>
              <li>
                <strong>Local Backups & Auto-Backups:</strong> Encrypted Realm database files (<code>.backup</code>) and automated daily local backups created on device storage to prevent accidental data loss.
              </li>
              <li>
                <strong>Data Exports (CSV & JSON):</strong> User-initiated exports of raw transactional records and configuration data saved directly to user-chosen directories on the device.
              </li>
              <li>
                <strong>Cloud Backups (Google Drive):</strong> Optional user-managed cloud backups stored directly in the user's private Google Drive storage.
              </li>
            </ul>

            <h3 className={styles.privacyHeading3}>2.6 Device Diagnostics and Error Logs</h3>
            <p>
              When user feedback is submitted or when an unexpected application error occurs during operations (such as backup or restore tasks), technical diagnostics may be transmitted to developer logging channels solely for troubleshooting and maintenance. These diagnostics include:
            </p>
            <ul>
              <li>Device brand, model, and name</li>
              <li>Operating system (OS) name and version</li>
              <li>eXpend application build version</li>
              <li>Technical error stack trace and operation name</li>
            </ul>
            <p>
              <strong>Diagnostic logs never contain financial transaction amounts, merchant names, notes, wallet balances, or account credentials.</strong>
            </p>
          </section>

          {/* Section 3 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>3. Data Storage and Security</h2>
            <ul>
              <li>
                <strong>Local Encrypted Storage:</strong> All personal and financial records are stored within an encrypted local Realm database directly on the user's device.
              </li>
              <li>
                <strong>Zero Proprietary Cloud Servers:</strong> eXpend does not operate any centralized cloud servers, remote analytics databases, or user accounts. Financial data remains under the user's direct physical possession.
              </li>
              <li>
                <strong>Google Drive Cloud Backup Security:</strong> When the optional Google Drive Cloud Backup feature is enabled:
                <ul>
                  <li>
                    <strong>Direct HTTPS Transfer:</strong> Encrypted backup files are transferred directly between the user's device and Google's official Drive APIs via secure, encrypted HTTPS channels. No intermediary developer or proxy servers are involved.
                  </li>
                  <li>
                    <strong>Restricted Application Data Folder:</strong> Backups are saved exclusively to Google Drive's dedicated Application Data folder (<code>appDataFolder</code>). This restricted directory is hidden from regular Google Drive browsing and is completely inaccessible to other third-party applications.
                  </li>
                  <li>
                    <strong>No Broad Drive Access:</strong> eXpend only requests access to its own application data folder and cannot view, read, modify, or delete any personal documents, spreadsheets, photos, or other files in the user's Google Drive.
                  </li>
                  <li>
                    <strong>Developer Zero-Knowledge:</strong> eXpend developers have no ability to access, inspect, or decrypt user Google Drive backups.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>4. Third-Party Services</h2>
            <p>
              eXpend integrates a minimal set of third-party services to support core functionality:
            </p>
            <ul>
              <li>
                <strong>Google APIs & Google Drive:</strong> Used solely to provide optional Google Sign-In authentication and cloud backup/restore functionality via the restricted Application Data folder (<code>drive.appdata</code> scope).
                <br /><br />
                <em>Google API Limited Use Disclosure:</em> eXpend's use and transfer to any other app of information received from Google APIs adheres to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements:
                <ul>
                  <li>Google user data and Drive backups are used solely to provide user-facing backup and restore features.</li>
                  <li>Google user data is never transferred to third parties except as necessary to provide or improve these features, comply with applicable law, or as part of a merger/acquisition.</li>
                  <li>Google user data is never used or transferred for serving advertisements, retargeting, personalized promotions, or interest-based advertising.</li>
                  <li>Google user data is never used to train generalized artificial intelligence (AI) or machine learning (ML) models.</li>
                </ul>
              </li>
              <li>
                <strong>Exchange Rates Service (<code>open.er-api.com</code>):</strong> When automatic exchange rate updating is enabled, eXpend fetches public currency conversion rates from <code>open.er-api.com</code>. <strong>No personal data, user identifiers, wallet balances, or account details are transmitted.</strong> Only the 3-letter ISO code of the selected base currency (e.g., <code>USD</code> or <code>EUR</code>) is sent.
              </li>
              <li>
                <strong>RevenueCat:</strong> Used to manage in-app purchases and verify premium lifetime license status. RevenueCat processes anonymized purchase tokens without access to personal financial records.
              </li>
              <li>
                <strong>App Store Platforms (Apple App Store / Google Play Store):</strong> Payment processing and subscription billing are handled directly by Apple or Google. eXpend does not collect, process, or store credit card numbers or banking information.
              </li>
              <li>
                <strong>Error Diagnostics & User Feedback:</strong> Technical error traces and user-submitted feedback messages are transmitted via secure webhooks exclusively for bug tracking, troubleshooting, and stability improvements.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>5. User Rights and Data Control</h2>
            <ul>
              <li>
                <strong>Full Data Ownership:</strong> Because data is stored locally on the device (and optionally in the user's personal Google Drive), users maintain complete control to create, modify, or delete any record at any time.
              </li>
              <li>
                <strong>Data Portability:</strong> Users can export their complete transaction history and data at any time in open, standardized formats (CSV and JSON) or as complete database backups.
              </li>
              <li>
                <strong>Cloud Backup Control & Disconnection:</strong> Users can toggle automatic cloud backups on or off, trigger manual backups or restores, and disconnect their Google Drive account at any time within the app. Disconnecting immediately removes stored access tokens from the device's secure keystore. Users can also revoke eXpend's permissions at any time via their Google Account Security settings.
              </li>
              <li>
                <strong>Permanent Data Removal:</strong> Uninstalling eXpend permanently deletes all local application databases and configuration settings from the device. Cloud backups can be deleted at any time through the app or by managing connected apps in Google Drive settings.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>6. Children's Privacy</h2>
            <p>
              eXpend is not directed at children under the age of 13 and does not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 7 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>7. Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically to reflect application enhancements, new features, or regulatory requirements. Any updates will be indicated by the "Last Updated" date at the top of this document.
            </p>
          </section>

          {/* Section 8 */}
          <section className={styles.privacySection}>
            <h2 className={styles.privacyHeading2}>8. Contact Information</h2>
            <p>
              For questions or feedback regarding this Privacy Policy or data handling practices, users can reach out through the in-app feedback feature or via email at{' '}
              <a href="mailto:hello@subdial.dev">hello@subdial.dev</a>.
            </p>
          </section>

          {/* Bottom Back Button */}
          <div className={styles.privacyDocFooter}>
            <a href="/" onClick={handleBack} className={styles.privacyBottomBtn}>
              ← Return to eXpend
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
