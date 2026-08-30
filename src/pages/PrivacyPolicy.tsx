import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import appIcon from '../assets/app-icon.png';

export const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="section" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Breadcrumb back link */}
          <div style={{ marginBottom: '1.75rem' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent-light)',
                fontWeight: 700,
                fontSize: '1rem',
              }}
            >
              ← Back to Home
            </Link>
          </div>

          {/* Privacy Policy Container Card */}
          <div
            className="bold-card"
            style={{
              padding: 'clamp(2rem, 4.5vw, 3.5rem)',
              backgroundColor: 'rgba(23, 32, 54, 0.9)',
              border: '3px solid var(--accent-color)',
            }}
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <img
                src={appIcon}
                alt="eXpend App Icon"
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '18px',
                  marginBottom: '1rem',
                  border: '3px solid var(--accent-color)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                }}
              />
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.5rem' }}>
                Privacy Policy
              </h1>
              <div style={{ color: 'var(--accent-light)', fontSize: '1.15rem', fontWeight: 700 }}>
                eXpend: Make Budgeting a Habit
              </div>
              <div style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginTop: '0.75rem',
                display: 'inline-block',
                border: '1.5px solid rgba(76, 116, 219, 0.4)',
                padding: '0.3rem 0.95rem',
                borderRadius: '8px',
              }}>
                Last Updated: July 18, 2026
              </div>
            </div>

            {/* Content Sections */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.25rem',
              lineHeight: 1.75,
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
            }}>
              {/* Section 1 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  1. Introduction
                </h2>
                <p>
                  <strong>eXpend</strong> is a personal finance management application designed with privacy as a core principle. This Privacy Policy explains how user data is handled, what information is processed, and user rights regarding that information.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  2. Data Collection and Usage
                </h2>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-light)', margin: '1.25rem 0 0.5rem 0' }}>
                  2.1 Financial Data
                </h3>
                <p>
                  eXpend allows users to track transactions, budgets, wallets, goals, and debts. All financial data is stored <strong style={{ color: '#FFFFFF' }}>locally on the user's device</strong>. eXpend does not collect, access, or transmit financial data to any external servers.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-light)', margin: '1.25rem 0 0.5rem 0' }}>
                  2.2 Personal Information
                </h3>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Profile Name:</strong> Users may optionally provide a name to personalize their profile. This information is stored strictly on the local device.
                  </li>
                  <li style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Email Address (Optional):</strong> If a user chooses to submit feedback through the in-app support feature, an email address may be voluntarily provided solely to receive a response.
                  </li>
                </ul>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-light)', margin: '1.25rem 0 0.5rem 0' }}>
                  2.3 Settings and Preferences
                </h3>
                <p>
                  App configuration settings (such as currency, language, theme, and display preferences) are stored locally on the device to ensure a consistent user experience.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-light)', margin: '1.25rem 0 0.5rem 0' }}>
                  2.4 Biometric Data
                </h3>
                <p>
                  If the "Screen Lock" feature is enabled, eXpend utilizes the device's native biometric authentication mechanisms (such as FaceID, TouchID, or Fingerprint). eXpend <strong style={{ color: '#FFFFFF' }}>never</strong> accesses, processes, or stores biometric data; it only receives confirmation from the operating system regarding authentication status.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-light)', margin: '1.25rem 0 0.5rem 0' }}>
                  2.5 Device Diagnostics
                </h3>
                <p>
                  When feedback is submitted or when a critical error occurs, the following technical diagnostics may be included to assist with troubleshooting:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Device brand and model</li>
                  <li>Operating System (OS) name and version</li>
                  <li>App build version</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  3. Data Storage and Security
                </h2>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Local Storage:</strong> All personal and financial data is stored directly on the device within an encrypted local database (Realm), ensuring data remains under the user's full control.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>No Cloud Synchronization:</strong> eXpend does not synchronize data to any cloud service, remote database, or third-party server. All data remains strictly on the device unless manually exported by the user.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  4. Third-Party Services
                </h2>
                <p>To support essential application functionality, eXpend integrates a minimal set of third-party services:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Exchange Rates Service (<code>open.er-api.com</code>):</strong> When automatic exchange rate updating is enabled, eXpend fetches live market exchange rates from <code>open.er-api.com</code>. <strong style={{ color: '#FFFFFF' }}>No personal data, user identifiers, wallet balances, or account details are ever transmitted.</strong> Only the ISO currency code of the selected main currency (e.g., <code>USD</code> or <code>PHP</code>) is sent to retrieve public exchange rates.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>RevenueCat:</strong> Used to manage in-app purchases and subscription status. RevenueCat may process anonymized transaction identifiers to verify active purchases.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>App Store Platforms (Apple App Store / Google Play Store):</strong> In-app transactions and payment processing are handled directly by Apple or Google. eXpend does not process or store credit card numbers or payment details.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Feedback and Error Reporting:</strong> Technical diagnostics provided during user-initiated feedback or crash reports are used exclusively for app maintenance and bug resolution.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  5. User Rights and Data Control
                </h2>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Access and Deletion:</strong> Because all data resides locally on the device, users maintain complete control over their information and can view, modify, or delete data at any time within the app.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: '#FFFFFF' }}>Permanent Data Removal:</strong> Uninstalling eXpend from the device permanently removes all locally stored application data and database files.
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  6. Children's Privacy
                </h2>
                <p>
                  eXpend is not directed at children under the age of 13 and does not knowingly collect personal information from children.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  7. Policy Updates
                </h2>
                <p>
                  This Privacy Policy may be updated periodically to reflect application enhancements or regulatory requirements. Any updates will be indicated by the "Last Updated" date at the top of this document.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 style={{
                  fontSize: '1.45rem',
                  color: '#FFFFFF',
                  borderBottom: '2.5px solid var(--accent-color)',
                  paddingBottom: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  8. Contact Information
                </h2>
                <p>
                  For questions regarding this Privacy Policy or data handling practices, users can reach out through the in-app feedback feature or via email at{' '}
                  <a
                    href="mailto:subdial.expend@outlook.com"
                    style={{
                      color: 'var(--accent-light)',
                      fontWeight: 700,
                      textDecoration: 'underline',
                    }}
                  >
                    subdial.expend@outlook.com
                  </a>.
                </p>
              </section>
            </div>

            {/* Back Button */}
            <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
              <Link to="/" className="btn-primary">
                ← Return to eXpend Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
