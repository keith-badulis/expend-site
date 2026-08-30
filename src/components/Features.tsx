import React from 'react';
import accountsImg from '../assets/screenshots/IMG_2305.png';
import budgetImg from '../assets/screenshots/IMG_2304.png';
import profileDashboardImg from '../assets/screenshots/IMG_2309.png';
import addTxImg from '../assets/screenshots/IMG_2301.png';
import txListImg from '../assets/screenshots/IMG_2303.png';
import weeklyImg from '../assets/screenshots/IMG_2306.png';
import {
  ReportIcon,
  PiggyBankIcon,
  StonksIcon,
  LightningBoltIcon,
  TagIcon,
  ProfileIcon,
  DescriptionIcon,
} from './icons';

interface GalleryItemData {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

const leftColItems: GalleryItemData[] = [
  {
    icon: <ReportIcon size={16} color="var(--accent-light)" />,
    badge: 'Detailed Financial Reports',
    title: 'Visualize Net Worth, Assets & Liabilities',
    description: 'Comprehensive finance tools in one place. Monitor cash, digital wallets, bank accounts, and debts with real-time net worth and multi-currency support.',
    tags: ['Net Worth', 'Assets & Liabilities', 'Multi-Currency'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
  },
  {
    icon: <ProfileIcon size={16} color="var(--accent-light)" />,
    badge: 'Personalized Dashboard',
    title: 'Everything Accessible in One Place',
    description: 'You decide which important information takes the spotlight. See your wallets, savings goals, and debts at a single glance with a customizable overview.',
    tags: ['At-a-Glance View', 'Goals & Milestones', 'Debt Tracking'],
    image: profileDashboardImg,
    imageAlt: 'eXpend Profile and Dashboard with Wallets, Goals, and Debts',
  },
  {
    icon: <TagIcon size={16} color="var(--accent-light)" />,
    badge: 'Organize With Tags',
    title: 'Label, Filter & Group With Custom Tags',
    description: 'Group transactions, accounts, and planned bills with custom tags like #Impulse or #FundTransfer to analyze your financial life exactly how you want it.',
    tags: ['Custom Tags', 'Nested Categories', 'Planned Bills'],
    image: txListImg,
    imageAlt: 'eXpend All Transactions list with tag filters',
  },
];

const rightColItems: GalleryItemData[] = [
  {
    icon: <PiggyBankIcon size={16} color="var(--accent-light)" />,
    badge: 'Flexible Budget Planning',
    title: 'Set Spending Limits & Stay Within Targets',
    description: 'Set custom spending limits by category across flexible budget periods. Stay in control with clear visual progress bars, projected totals, and instant status indicators.',
    tags: ['Spending Limits', 'Flexible Periods', 'Projected Totals'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    icon: <LightningBoltIcon size={16} color="var(--accent-light)" />,
    badge: 'Quick & Easy Recording',
    title: 'Log In Seconds With Built-in Calculator',
    description: 'Log income, expenses, and money transfers in seconds. Use customizable reusable templates to record common everyday transactions instantly.',
    tags: ['Income & Expenses', 'Transfers', 'Customizable Templates'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    icon: <StonksIcon size={16} color="var(--accent-light)" />,
    badge: 'Customizable Spending Reports',
    title: 'Gain Actionable Spending Insights',
    description: 'Gain clear insights on your spending by viewing easy-to-digest, customizable reports that let you stay firmly in charge of your finances. Compare income against expenses and analyze weekly trends.',
    tags: ['Actionable Insights', 'Weekly Breakdown', 'Income vs Expense'],
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
          <div className="section-subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
            <DescriptionIcon size={15} color="var(--accent-light)" />
            <span>Key Features</span>
          </div>
          <h2 className="section-title">
            Simplify Your Finances. <br />
            <span style={{ color: 'var(--accent-light)' }}>Reach Your Goals.</span>
          </h2>
          <p className="section-description">
            Ditch the spreadsheets and notebooks. Embrace the simplicity of eXpend and make mindful financial journaling a habit today.
          </p>
        </div>

        {/* 2-Column Staggered Exhibition Gallery */}
        <div className="gallery-staggered-grid">
          {/* LEFT COLUMN (Caption on Left, Screenshot on Right) */}
          <div className="gallery-column gallery-col-left">
            {leftColItems.map((item, idx) => (
              <div key={idx} className="gallery-item caption-left">
                {/* Caption on Left */}
                <div className="gallery-caption-box">
                  <span className="gallery-badge">
                    {item.icon}
                    <span>{item.badge}</span>
                  </span>
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
                  <span className="gallery-badge">
                    {item.icon}
                    <span>{item.badge}</span>
                  </span>
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
