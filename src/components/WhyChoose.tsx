import React from 'react';
import {
  LockIcon,
  DiamondIcon,
  CheckIcon,
} from './icons';

export const WhyChoose: React.FC = () => {
  const privacyPills = [
    { label: 'No Sign-Ups', color: '#0BB190' }, // green-50
    { label: 'No Ads', color: '#9957BD' },      // purple-50
    { label: 'Zero Servers', color: '#37a5d6' }, // sky-50
    { label: '100% On-Device', color: '#EAAF3B' }, // yellow-50
  ];

  const purchasePills = [
    { label: 'Zero Subscriptions', color: '#EF8354' }, // orange-50
    { label: 'Lifetime Access', color: '#88ba4a' },    // lime-50
    { label: 'Local JSON Backup', color: '#dd56b2' },  // pink-50
    { label: 'CSV Data Export', color: '#4fb2b5' },    // teal-50
  ];

  return (
    <section id="why-choose" className="section why-choose-concise-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="why-section-pill">
            <span>Why Choose eXpend</span>
          </div>

          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Built For Privacy. <br />
            <span style={{ color: '#4C74DB' }}>Zero Subscriptions.</span>
          </h2>
        </div>

        {/* 2 Concise, Punchy Stacked Cards */}
        <div className="why-concise-container">
          {/* Card 1: 100% Offline & Private */}
          <div className="why-punchy-card card-green-theme">
            <div className="punchy-icon-box icon-box-green">
              <LockIcon size={32} color="#0BB190" />
            </div>

            <div className="punchy-text-content">
              <span className="punchy-kicker kicker-green">Privacy First</span>
              <h3 className="punchy-headline">
                100% Offline & Private. No Sign-Ups. No Ads.
              </h3>
              <p className="punchy-tagline">
                Your data never leaves your device. No cloud sync, no tracking, and no third-party access.
              </p>

              {/* Colorful Solid Pills */}
              <div className="punchy-pills-wrap">
                {privacyPills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="solid-badge-pill"
                    style={{
                      color: pill.color,
                      borderColor: pill.color,
                      backgroundColor: `${pill.color}15`,
                    }}
                  >
                    <CheckIcon size={12} color={pill.color} />
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: One-Time Purchase, Premium Forever */}
          <div className="why-punchy-card card-blue-theme">
            <div className="punchy-icon-box icon-box-blue">
              <DiamondIcon size={32} color="#4C74DB" />
            </div>

            <div className="punchy-text-content">
              <span className="punchy-kicker kicker-blue">True Ownership</span>
              <h3 className="punchy-headline">
                One-Time Purchase. Premium Forever.
              </h3>
              <p className="punchy-tagline">
                Say goodbye to monthly fees. Pay once to unlock the full, unrestricted experience forever.
              </p>

              {/* Colorful Solid Pills */}
              <div className="punchy-pills-wrap">
                {purchasePills.map((pill, idx) => (
                  <span
                    key={idx}
                    className="solid-badge-pill"
                    style={{
                      color: pill.color,
                      borderColor: pill.color,
                      backgroundColor: `${pill.color}15`,
                    }}
                  >
                    <CheckIcon size={12} color={pill.color} />
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
