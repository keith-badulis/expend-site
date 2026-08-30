import React from 'react';
import {
  LockIcon,
  SparklesIcon,
  WrenchIcon,
  PaletteIcon,
  DiamondIcon,
  CheckIcon,
} from './icons';

export const WhyChoose: React.FC = () => {
  const whyPoints = [
    {
      icon: <LockIcon size={28} color="var(--accent-light)" />,
      title: 'Private & Secure',
      desc: 'Your data never leaves your device. No servers, no tracking—just pure privacy.',
    },
    {
      icon: <SparklesIcon size={28} color="var(--accent-light)" />,
      title: 'User-Friendly & Intuitive',
      desc: 'A clean, modern interface designed for a seamless, worry-free experience.',
    },
    {
      icon: <WrenchIcon size={28} color="var(--accent-light)" />,
      title: 'Comprehensive Finance Tools',
      desc: 'From budget planning to debt management, everything you need is in one place.',
    },
    {
      icon: <PaletteIcon size={28} color="var(--accent-light)" />,
      title: 'Beautifully Customizable',
      desc: 'Personalize your experience with dynamic themes and full Dark Mode support.',
    },
  ];

  const premiumFeatures = [
    'Unlimited Wallets, Budgets, Goals, Debts & Templates',
    'Advanced Tagging for superior organization',
    'CSV Export to Excel or Google Sheets',
    'Filtered & Detailed Report Views',
    'Local JSON Backup & Restore tools',
  ];

  return (
    <section id="why-choose" className="section" style={{ position: 'relative' }}>
      {/* Background Accent Ring */}
      <div
        className="edge-shape ring"
        style={{
          width: '320px',
          height: '320px',
          top: '20%',
          left: '-120px',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Why Choose eXpend</div>
          <h2 className="section-title">
            Built for Mindful Habits. <br />
            <span style={{ color: 'var(--accent-light)' }}>Zero Subscriptions.</span>
          </h2>
          <p className="section-description">
            Ditch the spreadsheets and notebooks. Embrace the simplicity of eXpend and make mindful financial journaling a habit today.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3.5rem',
        }}>
          {whyPoints.map((point, idx) => (
            <div
              key={idx}
              className="bold-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <div className="feature-icon-box" style={{ marginBottom: '1.15rem' }}>
                {point.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                marginBottom: '0.65rem',
                color: '#FFFFFF',
              }}>
                {point.title}
              </h3>
              <p style={{
                fontSize: '0.98rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lifetime Premium & Data Freedom Banner */}
        <div
          className="bold-card"
          style={{
            padding: 'clamp(2.25rem, 4vw, 3.25rem)',
            background: 'linear-gradient(145deg, #182238 0%, #1F2A47 100%)',
            border: '2.5px solid var(--accent-color)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              background: 'rgba(76, 116, 219, 0.2)',
              border: '1.5px solid var(--accent-color)',
              borderRadius: '9999px',
              color: 'var(--accent-light)',
              fontSize: '0.82rem',
              fontWeight: 800,
              marginBottom: '1rem',
            }}>
              <DiamondIcon size={14} color="var(--accent-light)" />
              <span>One-Time Payment • Lifetime Premium</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '0.85rem',
              lineHeight: 1.2,
            }}>
              No Monthly Subscriptions. <br />
              <span style={{ color: 'var(--accent-light)' }}>Complete Data Freedom.</span>
            </h3>
            <p style={{
              fontSize: '1.02rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '1.25rem',
            }}>
              Unlock the full power of eXpend with a single one-time purchase. Backup and restore your data locally via JSON or export transaction history to CSV for Excel or Google Sheets anytime.
            </p>
          </div>

          <div style={{
            background: 'rgba(23, 32, 54, 0.75)',
            border: '1.5px solid rgba(76, 116, 219, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
          }}>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <SparklesIcon size={16} color="var(--accent-light)" />
              <span>Premium Highlights</span>
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {premiumFeatures.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckIcon size={16} color="var(--accent-light)" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
