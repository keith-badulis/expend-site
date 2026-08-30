import React from 'react';
import accountsImg from '../assets/screenshots/IMG_2305.png';
import budgetImg from '../assets/screenshots/IMG_2304.png';
import reportsImg from '../assets/screenshots/IMG_2308.png';
import addTxImg from '../assets/screenshots/IMG_2301.png';
import txListImg from '../assets/screenshots/IMG_2303.png';
import weeklyImg from '../assets/screenshots/IMG_2306.png';

interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  isWide?: boolean;
}

const featureItems: FeatureCardProps[] = [
  {
    badge: '💰 Multi-Account & Net Worth',
    title: 'Track Every Account in One Place',
    description: 'Monitor cash, bank accounts, digital wallets, debts, and savings. Real-time net worth calculation with seamless multi-currency support.',
    tags: ['Net Worth', 'Multi-Currency', 'Asset & Debt Tracking'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
    isWide: true,
  },
  {
    badge: '📊 Smart Budgeting',
    title: 'Stay On Track Automatically',
    description: 'Set realistic monthly limits by category. Visual progress bars, projected totals, and instant "On Track" status prevent overspending before it happens.',
    tags: ['Custom Categories', 'Projected Totals', 'Status Alerts'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    badge: '📈 Visual Cashflow & Trends',
    title: 'See Where Every Dollar Goes',
    description: 'Interactive cashflow curves and categorical spending breakdowns reveal your financial habits clearly over custom date ranges.',
    tags: ['Cashflow Curves', 'Category Bars', 'Filtered Reports'],
    image: reportsImg,
    imageAlt: 'eXpend Filtered Reports with interactive cashflow chart',
  },
  {
    badge: '⚡ Lightning-Fast Entry',
    title: 'Log Expenses in Under 3 Seconds',
    description: 'A built-in calculator keypad lets you log purchases, split amounts, and pick wallets with zero friction.',
    tags: ['Built-in Calculator', '1-Tap Wallets', 'Quick Split'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    badge: '🏷️ Tags & Planned Bills',
    title: 'Organize with Tags & Upcoming Bills',
    description: 'Attach custom tags like #Impulse or #FundTransfer, search transactions instantly, and keep tabs on upcoming scheduled bills.',
    tags: ['Custom Tags', 'Planned Transactions', 'Instant Search'],
    image: txListImg,
    imageAlt: 'eXpend All Transactions list with tag filters',
  },
  {
    badge: '🗓️ Weekly Rhythm Analytics',
    title: 'Compare Weekly Income vs Expense',
    description: 'Understand your monthly rhythm across each week with clean, comparative bar charts and income vs. expense balance.',
    tags: ['Weekly Breakdown', 'Income vs Expense', '100% Offline Realm DB'],
    image: weeklyImg,
    imageAlt: 'eXpend Monthly Report and weekly breakdown screen',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="section features-section">
      {/* Background Accent Shapes */}
      <div
        className="edge-shape ring"
        style={{
          width: '380px',
          height: '380px',
          top: '10%',
          right: '-140px',
        }}
      />
      <div
        className="edge-shape square"
        style={{
          width: '260px',
          height: '260px',
          bottom: '15%',
          left: '-100px',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Features</div>
          <h2 className="section-title">
            Everything You Need to <br />
            <span style={{ color: 'var(--accent-light)' }}>Master Your Money</span>
          </h2>
          <p className="section-description">
            Thoughtfully crafted tools designed for speed, privacy, and lasting financial clarity—all stored safely on your device.
          </p>
        </div>

        {/* Bento / Showcase Collage Grid */}
        <div className="features-bento-grid">
          {featureItems.map((item, idx) => (
            <div
              key={idx}
              className={`feature-showcase-card ${item.isWide ? 'card-wide' : ''}`}
            >
              {/* Text / Copy Column */}
              <div className="feature-card-content">
                <span className="feature-badge">{item.badge}</span>

                <h3 className="feature-card-title">{item.title}</h3>

                <p className="feature-card-desc">{item.description}</p>

                <div className="feature-tags-list">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="feature-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone Screenshot Showcase Column */}
              <div className="feature-card-mockup-wrap">
                <div className="feature-phone-frame">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="feature-screen-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
