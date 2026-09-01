import React from 'react';
import addTxImg from '../assets/screenshots/IMG_2301.png';
import budgetImg from '../assets/screenshots/IMG_2304.png';
import filteredReportsImg from '../assets/screenshots/IMG_2308.png';
import accountsImg from '../assets/screenshots/IMG_2305.png';
import weeklyReportsImg from '../assets/screenshots/IMG_2306.png';
import profileDashboardImg from '../assets/screenshots/IMG_2309.png';
import {
  LightningBoltIcon,
  PiggyBankIcon,
  FilterIcon,
  ReportIcon,
  StonksIcon,
  ProfileIcon,
  DescriptionIcon,
} from './icons';
import styles from './Features.module.css';

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
    icon: <LightningBoltIcon size={16} color="var(--accent-light)" />,
    badge: 'Quick & Easy Recording',
    title: 'Log Transactions within Seconds',
    description: 'Log income, expenses, and money transfers in seconds with a fast, built-in keypad calculator. Use customizable reusable templates to record common everyday transactions instantly.',
    tags: ['Income & Expenses', 'Transfers', 'Customizable Templates'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    icon: <FilterIcon size={16} color="var(--accent-light)" />,
    badge: 'Filtered Reports',
    title: 'View Records Your Way With Flexible Filters',
    description: 'Flexibly filter your transactions to see where you can improve. Interactive cashflow curves and categorical breakdowns calculate totals automatically.',
    tags: ['Flexible Filters', 'Automatic Totals', 'Cashflow Curves'],
    image: filteredReportsImg,
    imageAlt: 'eXpend Filtered Reports screen with cashflow timeline chart',
  },
  {
    icon: <StonksIcon size={16} color="var(--accent-light)" />,
    badge: 'Customizable Spending Reports',
    title: 'Gain Actionable Spending Insights',
    description: 'Gain clear insights on your spending by viewing easy-to-digest, customizable reports that let you stay firmly in charge of your finances. Compare income against expenses and analyze weekly trends.',
    tags: ['Actionable Insights', 'Weekly Breakdown', 'Income vs Expense'],
    image: weeklyReportsImg,
    imageAlt: 'eXpend Monthly Report and weekly breakdown screen',
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
];

export const Features: React.FC = () => {
  return (
    <section id="features" className={`section ${styles.galleryFeaturesSection}`}>
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

        {/* 2-Column Staggered Exhibition Gallery (3 in Left, 3 in Right) */}
        <div className={styles.galleryStaggeredGrid}>
          {/* LEFT COLUMN (Caption on Left, Screenshot on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColLeft}`}>
            {leftColItems.map((item, idx) => (
              <div key={idx} className={`${styles.galleryItem} ${styles.captionLeft}`}>
                {/* Caption on Left */}
                <div className={styles.galleryCaptionBox}>
                  <span className={styles.galleryBadge}>
                    {item.icon}
                    <span>{item.badge}</span>
                  </span>
                  <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  <p className={styles.galleryItemDesc}>{item.description}</p>
                  <div className={styles.galleryTagsWrap}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.galleryTagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshot on Right */}
                <div className={styles.galleryScreenBox}>
                  <div className={styles.galleryPhoneFrame}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={styles.galleryScreenImg}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (Staggered Downward: Screenshot on Left, Caption on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColRight}`}>
            {rightColItems.map((item, idx) => (
              <div key={idx} className={`${styles.galleryItem} ${styles.captionRight}`}>
                {/* Screenshot on Left */}
                <div className={styles.galleryScreenBox}>
                  <div className={styles.galleryPhoneFrame}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={styles.galleryScreenImg}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Caption on Right */}
                <div className={styles.galleryCaptionBox}>
                  <span className={styles.galleryBadge}>
                    {item.icon}
                    <span>{item.badge}</span>
                  </span>
                  <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  <p className={styles.galleryItemDesc}>{item.description}</p>
                  <div className={styles.galleryTagsWrap}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.galleryTagPill}>
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
