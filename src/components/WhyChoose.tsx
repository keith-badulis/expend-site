import React from 'react';
import {
  LockIcon,
  DiamondIcon,
  CheckIcon,
} from './icons';

export const WhyChoose: React.FC = () => {
  // Block 1: Offline & Privacy Points (Color-coded with solid app palette)
  const privacyTiles = [
    {
      title: 'No Accounts or Sign-Ups',
      desc: 'Open the app and start logging immediately. No email, passwords, or personal profile needed.',
      color: '#0BB190', // green-50
      tag: 'Zero Sign-Up',
    },
    {
      title: 'Zero Cloud Servers',
      desc: 'We do not collect, store, or sell your data. We have no remote servers tracking your habits.',
      color: '#9957BD', // purple-50
      tag: 'No Tracking',
    },
    {
      title: '100% Local Storage',
      desc: 'Your financial transactions and budgets live strictly in your device’s local secure database.',
      color: '#37a5d6', // sky-50
      tag: 'On-Device',
    },
    {
      title: 'Full Offline Freedom',
      desc: 'Log expenses anytime, anywhere—on planes, in subways, or completely disconnected from the web.',
      color: '#EAAF3B', // yellow-50
      tag: 'No Internet Needed',
    },
  ];

  // Block 2: No-Subscriptions / Ownership Points (Color-coded with solid app palette)
  const ownershipTiles = [
    {
      title: 'Pay Once, Keep Forever',
      desc: 'Say goodbye to recurring monthly fees. Unlock the full app with a single, transparent purchase.',
      color: '#EF8354', // orange-50
      tag: 'No Subscriptions',
    },
    {
      title: 'CSV Data Export',
      desc: 'Export your full transaction history to CSV format for Excel, Google Sheets, or Numbers anytime.',
      color: '#4fb2b5', // teal-50
      tag: 'Excel & Sheets',
    },
    {
      title: 'Local JSON Backup',
      desc: 'Easily backup and restore your financial data safely using local files without cloud lock-in.',
      color: '#dd56b2', // pink-50
      tag: 'Offline Backup',
    },
    {
      title: 'Unlimited Everything',
      desc: 'Create unlimited wallets, budgets, goals, debts, and custom categories without artificial limits.',
      color: '#88ba4a', // lime-50
      tag: 'No Limits',
    },
  ];

  return (
    <section id="why-choose" className="section why-choose-stacked-section">
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

          <p className="section-description" style={{ maxWidth: '620px', margin: '0 auto' }}>
            No accounts, no cloud servers, and no recurring fees. Built around two simple promises: pure privacy and true ownership.
          </p>
        </div>

        {/* =======================================================
            BLOCK 1: 100% OFFLINE & PRIVATE (TOP HERO BLOCK)
        ======================================================= */}
        <div className="why-stacked-block block-privacy">
          {/* Left Column: Core Privacy Manifesto */}
          <div className="block-lead-column">
            <div className="lead-badge-row">
              <div className="lead-icon-box icon-green">
                <LockIcon size={28} color="#0BB190" />
              </div>
              <span className="lead-badge-pill pill-green">
                100% Offline & Private
              </span>
            </div>

            <h3 className="lead-title">
              Your Financial Data Stays On Your Device.
            </h3>

            <p className="lead-desc">
              eXpend is engineered from day one to be 100% offline. We don't have user databases, telemetry servers, or analytics trackers. Your personal financial habits are private, secure, and entirely yours.
            </p>
          </div>

          {/* Right Column: 4 Solid Color Feature Tiles */}
          <div className="block-tiles-grid">
            {privacyTiles.map((tile, idx) => (
              <div
                key={idx}
                className="color-feature-tile"
                style={{
                  '--tile-color': tile.color,
                  borderColor: `${tile.color}40`,
                } as React.CSSProperties}
              >
                <div className="tile-top-row">
                  <span
                    className="tile-tag-pill"
                    style={{
                      color: tile.color,
                      borderColor: `${tile.color}60`,
                      backgroundColor: `${tile.color}15`,
                    }}
                  >
                    {tile.tag}
                  </span>
                  <div
                    className="tile-check-dot"
                    style={{ backgroundColor: tile.color }}
                  >
                    <CheckIcon size={11} color="#172036" />
                  </div>
                </div>

                <h4 className="tile-title" style={{ color: '#FFFFFF' }}>
                  {tile.title}
                </h4>

                <p className="tile-desc">
                  {tile.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =======================================================
            BLOCK 2: NO SUBSCRIPTIONS / ONE-TIME PURCHASE (BELOW BLOCK 1)
        ======================================================= */}
        <div className="why-stacked-block block-ownership">
          {/* Left Column: Core Ownership Manifesto */}
          <div className="block-lead-column">
            <div className="lead-badge-row">
              <div className="lead-icon-box icon-blue">
                <DiamondIcon size={28} color="#4C74DB" />
              </div>
              <span className="lead-badge-pill pill-blue">
                One-Time Purchase • No Subscriptions
              </span>
            </div>

            <h3 className="lead-title">
              Pay Once. Keep It Forever.
            </h3>

            <p className="lead-desc">
              No subscription fatigue. Enjoy the complete, unrestricted feature set of eXpend with a single one-time lifetime purchase. Complete data ownership with local backup and CSV export.
            </p>
          </div>

          {/* Right Column: 4 Solid Color Feature Tiles */}
          <div className="block-tiles-grid">
            {ownershipTiles.map((tile, idx) => (
              <div
                key={idx}
                className="color-feature-tile"
                style={{
                  '--tile-color': tile.color,
                  borderColor: `${tile.color}40`,
                } as React.CSSProperties}
              >
                <div className="tile-top-row">
                  <span
                    className="tile-tag-pill"
                    style={{
                      color: tile.color,
                      borderColor: `${tile.color}60`,
                      backgroundColor: `${tile.color}15`,
                    }}
                  >
                    {tile.tag}
                  </span>
                  <div
                    className="tile-check-dot"
                    style={{ backgroundColor: tile.color }}
                  >
                    <CheckIcon size={11} color="#172036" />
                  </div>
                </div>

                <h4 className="tile-title" style={{ color: '#FFFFFF' }}>
                  {tile.title}
                </h4>

                <p className="tile-desc">
                  {tile.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
