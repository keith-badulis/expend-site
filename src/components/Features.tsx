import React from 'react';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: '💳',
    title: 'Accounts & Wallets',
    description: 'Keep track of cash in hand, bank accounts, savings, and credit card cycles in one unified dashboard.',
  },
  {
    icon: '📊',
    title: 'Budget Planning',
    description: 'Set realistic monthly spending limits for each category and see where your money goes with visual charts.',
  },
  {
    icon: '🎯',
    title: 'Goals & Savings',
    description: 'Create savings targets for vacations, emergency funds, or big purchases and watch your progress grow.',
  },
  {
    icon: '🤝',
    title: 'Debts & Lendings',
    description: 'Track money you owe and money people owe you with clear payment records and due dates.',
  },
  {
    icon: '⚡',
    title: '1-Tap Templates',
    description: 'Save your frequent everyday purchases to log morning coffee, commute, or lunch in less than two seconds.',
  },
  {
    icon: '🔒',
    title: '100% Private & Offline',
    description: 'No accounts, no logins, and no servers. All your financial data stays strictly on your phone.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="section" style={{ position: 'relative' }}>
      {/* Single shape anchored to bottom-right edge */}
      <div
        className="edge-shape ring"
        style={{
          width: '340px',
          height: '340px',
          bottom: '-100px',
          right: '-100px',
        }}
      />

      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Features</div>
          <h2 className="section-title">
            Everything You Need. <br />
            <span style={{ color: 'var(--accent-light)' }}>Nothing You Don't.</span>
          </h2>
          <p className="section-description">
            Designed to make daily money management fast, straightforward, and completely private.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bold-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <div className="feature-icon-box">
                {feature.icon}
              </div>

              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                marginBottom: '0.75rem',
                color: '#FFFFFF',
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: '1rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                margin: 0,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
