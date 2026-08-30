import React from 'react';
import accountsImg from '../assets/screenshots/IMG_2305.png';
import budgetImg from '../assets/screenshots/IMG_2304.png';
import reportsImg from '../assets/screenshots/IMG_2308.png';
import addTxImg from '../assets/screenshots/IMG_2301.png';
import txListImg from '../assets/screenshots/IMG_2303.png';
import weeklyImg from '../assets/screenshots/IMG_2306.png';

interface GalleryItemData {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

const leftColItems: GalleryItemData[] = [
  {
    badge: '💰 Multi-Account & Net Worth',
    title: 'Track Every Account in One Place',
    description: 'Monitor cash, bank accounts, digital wallets, debts, and savings. Real-time net worth calculation with seamless multi-currency support.',
    tags: ['Net Worth', 'Multi-Currency', 'Asset & Debt Tracking'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
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
    badge: '🏷️ Tags & Planned Bills',
    title: 'Organize with Tags & Upcoming Bills',
    description: 'Attach custom tags like #Impulse or #FundTransfer, search transactions instantly, and keep tabs on upcoming scheduled bills.',
    tags: ['Custom Tags', 'Planned Transactions', 'Instant Search'],
    image: txListImg,
    imageAlt: 'eXpend All Transactions list with tag filters',
  },
];

const rightColItems: GalleryItemData[] = [
  {
    badge: '📊 Smart Budgeting',
    title: 'Stay On Track Automatically',
    description: 'Set realistic monthly limits by category. Visual progress bars, projected totals, and instant "On Track" status prevent overspending before it happens.',
    tags: ['Custom Categories', 'Projected Totals', 'Status Alerts'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
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
    <section id="features" className="section gallery-features-section">
      {/* Background Ambient Shapes */}
      <div
        className="edge-shape ring"
        style={{
          width: '380px',
          height: '380px',
          top: '12%',
          right: '-140px',
        }}
      />
      <div
        className="edge-shape square"
        style={{
          width: '260px',
          height: '260px',
          bottom: '18%',
          left: '-100px',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">Gallery & Features</div>
          <h2 className="section-title">
            Crafted for Clarity. <br />
            <span style={{ color: 'var(--accent-light)' }}>Built for Daily Habits.</span>
          </h2>
          <p className="section-description">
            Explore the interface designed to give you frictionless control, deep insights, and 100% privacy on your device.
          </p>
        </div>

        {/* 2-Column Staggered Open Exhibition Gallery (Cardless) */}
        <div className="gallery-staggered-grid">
          {/* LEFT COLUMN (Caption on Left, Screenshot on Right) */}
          <div className="gallery-column gallery-col-left">
            {leftColItems.map((item, idx) => (
              <div key={idx} className="gallery-item caption-left">
                {/* Caption on Left */}
                <div className="gallery-caption-box">
                  <span className="gallery-badge">{item.badge}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                  <div className="gallery-tags-wrap">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="gallery-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot on Right */}
                <div className="gallery-screen-box">
                  <div className="gallery-phone-frame">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="gallery-screen-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (Staggered Downward: Screenshot on Left, Caption on Right) */}
          <div className="gallery-column gallery-col-right">
            {rightColItems.map((item, idx) => (
              <div key={idx} className="gallery-item caption-right">
                {/* Screenshot on Left */}
                <div className="gallery-screen-box">
                  <div className="gallery-phone-frame">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="gallery-screen-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Caption on Right */}
                <div className="gallery-caption-box">
                  <span className="gallery-badge">{item.badge}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                  <div className="gallery-tags-wrap">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="gallery-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
