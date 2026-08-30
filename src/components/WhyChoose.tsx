import React from 'react';
import {
  LockIcon,
  DiamondIcon,
  CheckIcon,
} from './icons';

export const WhyChoose: React.FC = () => {
  const privacyPoints = [
    {
      title: 'No Accounts or Sign-Ups Required',
      desc: 'Open the app and start budgeting immediately. No email, no passwords, and no personal profile needed.',
    },
    {
      title: 'Zero Cloud Servers & No Tracking',
      desc: 'We do not collect, store, or sell your data. We have no servers to log your income, expenses, or habits.',
    },
    {
      title: '100% Local Device Storage',
      desc: 'Your financial records remain strictly on your physical phone, guarded by your device’s native security.',
    },
    {
      title: 'Full Offline Functionality',
      desc: 'Log expenses anytime, anywhere—whether on a flight, in the subway, or completely disconnected from the internet.',
    },
  ];

  const premiumPoints = [
    {
      title: 'One-Time Purchase, Forever Yours',
      desc: 'No recurring monthly or yearly subscription fees. Pay once to unlock the full app forever.',
    },
    {
      title: 'CSV Data Export Freedom',
      desc: 'Export your entire transaction history to CSV format for Excel, Google Sheets, or Numbers anytime.',
    },
    {
      title: 'Local JSON Backup & Restore',
      desc: 'Easily create offline backups and restore your financial data safely without relying on third-party cloud services.',
    },
    {
      title: 'Unlimited Everything',
      desc: 'Manage unlimited wallets, budget limits, savings goals, debts, and custom categories with zero limits.',
    },
  ];

  return (
    <section id="why-choose" className="section why-choose-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="why-section-pill">
            <span>Why Choose eXpend</span>
          </div>

          <h2 className="section-title">
            100% Offline. <br />
            <span style={{ color: '#4C74DB' }}>Zero Subscriptions.</span>
          </h2>

          <p className="section-description" style={{ maxWidth: '600px', margin: '0 auto' }}>
            No accounts, no cloud servers, and no recurring fees. A lightweight personal finance tracker built around two core promises: pure privacy and true ownership.
          </p>
        </div>

        {/* 2 Focused Main Pillar Cards */}
        <div className="why-focused-grid">
          {/* Card 1: 100% Offline & Private (Solid Green Theme #0BB190) */}
          <div className="why-core-card card-privacy">
            <div className="core-card-header">
              <div className="core-icon-box icon-green">
                <LockIcon size={28} color="#0BB190" />
              </div>

              <div className="core-badge-pill badge-green">
                <span>100% Offline & Private</span>
              </div>
            </div>

            <h3 className="core-card-title">
              Your Financial Data Stays On Your Device.
            </h3>

            <p className="core-card-desc">
              eXpend is built from the ground up to be an offline-first app. Your personal records are never transmitted across the web or stored on remote servers.
            </p>

            <div className="core-points-list">
              {privacyPoints.map((pt, idx) => (
                <div key={idx} className="core-point-item">
                  <div className="point-check-bullet check-green">
                    <CheckIcon size={13} color="#0BB190" />
                  </div>
                  <div>
                    <h4 className="point-title">{pt.title}</h4>
                    <p className="point-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: No Subscriptions • Lifetime Premium (Solid Blue Theme #4C74DB) */}
          <div className="why-core-card card-pricing">
            <div className="core-card-header">
              <div className="core-icon-box icon-blue">
                <DiamondIcon size={28} color="#4C74DB" />
              </div>

              <div className="core-badge-pill badge-blue">
                <span>One-Time Purchase • No Subscriptions</span>
              </div>
            </div>

            <h3 className="core-card-title">
              Pay Once. Keep It Forever.
            </h3>

            <p className="core-card-desc">
              Say goodbye to subscription fatigue. Unlock the complete, unrestricted power of eXpend with a single transparent one-time purchase.
            </p>

            <div className="core-points-list">
              {premiumPoints.map((pt, idx) => (
                <div key={idx} className="core-point-item">
                  <div className="point-check-bullet check-blue">
                    <CheckIcon size={13} color="#4C74DB" />
                  </div>
                  <div>
                    <h4 className="point-title">{pt.title}</h4>
                    <p className="point-desc">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
