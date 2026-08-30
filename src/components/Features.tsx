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
    badge: '📊 Detailed Financial Reports',
    title: 'Visualize Net Worth, Assets & Liabilities',
    description: 'Comprehensive finance tools in one place. Monitor cash, digital wallets, bank accounts, and debts with real-time net worth and multi-currency support.',
    tags: ['Net Worth', 'Assets & Liabilities', 'Multi-Currency'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
  },
  {
    badge: '📈 Filtered & Detailed Reports',
    title: 'Analyze Spending Habits With Charts',
    description: 'Get deeper insights with filtered and detailed report views. Interactive cashflow curves and categorical spending breakdowns reveal where your money goes.',
    tags: ['Cashflow Curves', 'Category Breakdown', 'Filtered Views'],
    image: reportsImg,
    imageAlt: 'eXpend Filtered Reports with interactive cashflow chart',
  },
  {
    badge: '🏷️ Organize With Tags',
    title: 'Label, Filter & Group With Custom Tags',
    description: 'Group transactions, accounts, and planned bills with custom tags like #Impulse or #FundTransfer to analyze your financial life exactly how you want it.',
    tags: ['Custom Tags', 'Nested Categories', 'Planned Bills'],
    image: txListImg,
    imageAlt: 'eXpend All Transactions list with tag filters',
  },
];

const rightColItems: GalleryItemData[] = [
  {
    badge: '🎯 Flexible Budget Planning',
    title: 'Set Spending Limits & Stay Within Targets',
    description: 'Set spending limits by category and stay within your monthly targets with clear visual progress bars, projected totals, and instant status indicators.',
    tags: ['Spending Limits', 'Monthly Targets', 'Projected Totals'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    badge: '⚡ Quick & Easy Recording',
    title: 'Log In Seconds With Built-in Calculator',
    description: 'Log income, expenses, and money transfers in seconds. Use customizable reusable templates to record common everyday transactions instantly.',
    tags: ['Income & Expenses', 'Transfers', 'Customizable Templates'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    badge: '🤝 Comprehensive Debt & Milestones',
    title: 'Track Debts, Goals & Weekly Rhythm',
    description: 'Mindfully track all your debts (both payable and receivable), monitor savings progress milestones, and compare weekly income vs expense balance.',
    tags: ['Debt Management', 'Smart Goal Tracking', 'Weekly Trends'],
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
          <div className="section-subtitle">📝 Key Features</div>
          <h2 className="section-title">
            Simplify Your Finances. <br />
            <span style={{ color: 'var(--accent-light)' }}>Reach Your Goals.</span>
          </h2>
          <p className="section-description">
            Ditch the spreadsheets and notebooks. Embrace the simplicity of eXpend and make mindful financial journaling a habit today.
          </p>
        </div>

        {/* 2-Column Staggered Exhibition Gallery (Side-by-side columns not on the same row, no cards) */}
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
