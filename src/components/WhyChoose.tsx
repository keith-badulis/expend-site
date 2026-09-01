import React from 'react';
import {
  LockIcon,
  DiamondIcon,
  SparklesIcon,
  LightningBoltIcon,
  WalletIcon,
  CoinIcon,
  StarOutlineIcon,
  CloudBackupIcon,
  ReportIcon,
} from './icons';
import styles from './WhyChoose.module.css';

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
      icon: <StarOutlineIcon size={16} color="#88ba4a" />,
      color: '#88ba4a',
      bg: 'rgba(136, 186, 74, 0.12)',
    },
    {
      label: 'Cloud & Local Backups',
      icon: <CloudBackupIcon size={16} color="#dd56b2" />,
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
    <section id="why-choose" className={`section ${styles.whyChooseCleanSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div className="section-subtitle">
            <SparklesIcon size={16} color="var(--accent-light)" />
            <span>Why Choose eXpend</span>
          </div>

          <h2 className="section-title" style={{ fontWeight: 700 }}>
            Built For Privacy. <br />
            <span style={{ color: 'var(--accent-light)' }}>Zero Subscriptions.</span>
          </h2>
        </div>

        {/* 2 Clean, Soft-Bordered Stacked Cards */}
        <div className={styles.cleanCardsContainer}>
          {/* Card 1: 100% Offline & Private */}
          <div className={styles.cleanValueCard}>
            <div className={styles.cleanCardIconWrap} style={{ background: 'rgba(11, 177, 144, 0.12)' }}>
              <LockIcon size={26} color="#0BB190" />
            </div>

            <div className={styles.cleanCardBody}>
              <span className={styles.cleanCardKicker} style={{ color: '#0BB190' }}>
                Privacy First
              </span>

              <h3 className={styles.cleanCardHeadline}>
                100% Offline & Private. No Sign-Ups. No Ads.
              </h3>

              <p className={styles.cleanCardDescription}>
                Your financial data never leaves your device. No mandatory accounts, no analytics tracking, and no third-party data broker access.
              </p>

              {/* Soft, Borderless Icon Chips */}
              <div className={styles.cleanChipsGrid}>
                {privacyPills.map((pill, idx) => (
                  <div
                    key={idx}
                    className={styles.cleanChip}
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
          <div className={styles.cleanValueCard}>
            <div className={styles.cleanCardIconWrap} style={{ background: 'rgba(76, 116, 219, 0.12)' }}>
              <DiamondIcon size={26} color="#4C74DB" />
            </div>

            <div className={styles.cleanCardBody}>
              <span className={styles.cleanCardKicker} style={{ color: '#7094F0' }}>
                Pay Once
              </span>

              <h3 className={styles.cleanCardHeadline}>
                One-Time Purchase. Premium Forever.
              </h3>

              <p className={styles.cleanCardDescription}>
                Say goodbye to recurring subscription fatigue. Pay once to unlock the full, unrestricted experience forever with complete data freedom.
              </p>

              {/* Soft, Borderless Icon Chips */}
              <div className={styles.cleanChipsGrid}>
                {purchasePills.map((pill, idx) => (
                  <div
                    key={idx}
                    className={styles.cleanChip}
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
