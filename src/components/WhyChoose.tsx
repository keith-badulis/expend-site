import React from 'react';
import {
  LockIcon,
  DiamondIcon,
  SparklesIcon,
  LightningBoltIcon,
  WalletIcon,
  CoinIcon,
  StarFilledIcon,
  DescriptionIcon,
  ReportIcon,
} from './icons';

export const WhyChoose: React.FC = () => {
  const privacyPills = [
    {
      label: 'No Sign-Ups',
      icon: <LightningBoltIcon size={16} color="#0BB190" />,
      color: '#0BB190',
      bg: 'rgba(11, 177, 144, 0.12)',
    },
    {
      label: 'No Ads or Trackers',
      icon: <SparklesIcon size={16} color="#9957BD" />,
      color: '#9957BD',
      bg: 'rgba(153, 87, 189, 0.12)',
    },
    {
      label: 'Zero Cloud Servers',
      icon: <LockIcon size={16} color="#37a5d6" />,
      color: '#37a5d6',
      bg: 'rgba(55, 165, 214, 0.12)',
    },
    {
      label: '100% On-Device',
      icon: <WalletIcon size={16} color="#EAAF3B" />,
      color: '#EAAF3B',
      bg: 'rgba(234, 175, 59, 0.12)',
    },
  ];

  const purchasePills = [
    {
      label: 'Zero Subscriptions',
      icon: <CoinIcon size={16} color="#EF8354" />,
      color: '#EF8354',
      bg: 'rgba(239, 131, 84, 0.12)',
    },
    {
      label: 'Lifetime Access',
      icon: <StarFilledIcon size={16} color="#88ba4a" />,
      color: '#88ba4a',
      bg: 'rgba(136, 186, 74, 0.12)',
    },
    {
      label: 'Local JSON Backup',
      icon: <DescriptionIcon size={16} color="#dd56b2" />,
      color: '#dd56b2',
      bg: 'rgba(221, 86, 178, 0.12)',
    },
    {
      label: 'CSV Data Export',
      icon: <ReportIcon size={16} color="#4fb2b5" />,
      color: '#4fb2b5',
      bg: 'rgba(79, 178, 181, 0.12)',
    },
  ];

  return (
    <section id="why-choose" className="section why-choose-clean-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="clean-section-pill">
            Why Choose eXpend
          </div>

          <h2 className="section-title" style={{ fontWeight: 700 }}>
            Built For Privacy. <br />
            <span style={{ color: 'var(--accent-light)' }}>Zero Subscriptions.</span>
          </h2>
        </div>

        {/* 2 Clean, Soft-Bordered Stacked Cards */}
        <div className="clean-cards-container">
          {/* Card 1: 100% Offline & Private */}
          <div className="clean-value-card">
            <div className="clean-card-icon-wrap" style={{ background: 'rgba(11, 177, 144, 0.12)' }}>
              <LockIcon size={26} color="#0BB190" />
            </div>

            <div className="clean-card-body">
              <span className="clean-card-kicker" style={{ color: '#0BB190' }}>
                Privacy First
              </span>

              <h3 className="clean-card-headline">
                100% Offline & Private. No Sign-Ups. No Ads.
              </h3>

              <p className="clean-card-description">
                Your financial data never leaves your device. No cloud sync, no tracking, and no third-party data broker access.
              </p>

              {/* Soft, Borderless Icon Chips */}
              <div className="clean-chips-grid">
                {privacyPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="clean-chip"
                    style={{ backgroundColor: pill.bg }}
                  >
                    {pill.icon}
                    <span style={{ color: pill.color }}>{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: One-Time Purchase, Premium Forever */}
          <div className="clean-value-card">
            <div className="clean-card-icon-wrap" style={{ background: 'rgba(76, 116, 219, 0.12)' }}>
              <DiamondIcon size={26} color="#4C74DB" />
            </div>

            <div className="clean-card-body">
              <span className="clean-card-kicker" style={{ color: '#7094F0' }}>
                True Ownership
              </span>

              <h3 className="clean-card-headline">
                One-Time Purchase. Premium Forever.
              </h3>

              <p className="clean-card-description">
                Say goodbye to recurring subscription fatigue. Pay once to unlock the full, unrestricted experience forever with complete data freedom.
              </p>

              {/* Soft, Borderless Icon Chips */}
              <div className="clean-chips-grid">
                {purchasePills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="clean-chip"
                    style={{ backgroundColor: pill.bg }}
                  >
                    {pill.icon}
                    <span style={{ color: pill.color }}>{pill.label}</span>
                  </div>
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
