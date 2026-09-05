import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

type FeatureCategory = 'tracking' | 'reports' | 'overview';

interface FeatureItem {
  id: string;
  category: FeatureCategory;
  icon: (color: string) => React.ReactNode;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

interface CategoryTab {
  id: FeatureCategory;
  label: string;
  shortLabel: string;
  icon: (color: string) => React.ReactNode;
}

const categories: CategoryTab[] = [
  {
    id: 'tracking',
    label: 'Tracking & Budgets',
    shortLabel: 'Tracking',
    icon: (color) => <LightningBoltIcon size={15} color={color} />,
  },
  {
    id: 'reports',
    label: 'Reports & Insights',
    shortLabel: 'Reports',
    icon: (color) => <ReportIcon size={15} color={color} />,
  },
  {
    id: 'overview',
    label: 'Accounts & Overview',
    shortLabel: 'Overview',
    icon: (color) => <ProfileIcon size={15} color={color} />,
  },
];

const featureItems: FeatureItem[] = [
  {
    id: 'add-transaction',
    category: 'tracking',
    icon: (color) => <LightningBoltIcon size={16} color={color} />,
    badge: 'Quick & Easy Recording',
    title: 'Log Transactions within Seconds',
    description:
      'Log income, expenses, and money transfers in seconds with a fast, built-in keypad calculator. Use customizable reusable templates to record common everyday transactions instantly.',
    tags: ['Income & Expenses', 'Transfers', 'Customizable Templates'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    id: 'budget-planning',
    category: 'tracking',
    icon: (color) => <PiggyBankIcon size={16} color={color} />,
    badge: 'Flexible Budget Planning',
    title: 'Set Spending Limits & Stay Within Targets',
    description:
      'Set custom spending limits by category across flexible budget periods. Stay in control with clear visual progress bars, projected totals, and instant status indicators.',
    tags: ['Spending Limits', 'Flexible Periods', 'Projected Totals'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    id: 'filtered-reports',
    category: 'reports',
    icon: (color) => <FilterIcon size={16} color={color} />,
    badge: 'Filtered Reports',
    title: 'View Records Your Way With Flexible Filters',
    description:
      'Flexibly filter your transactions to see where you can improve. Interactive cashflow curves and categorical breakdowns calculate totals automatically.',
    tags: ['Flexible Filters', 'Automatic Totals', 'Cashflow Curves'],
    image: filteredReportsImg,
    imageAlt: 'eXpend Filtered Reports screen with cashflow timeline chart',
  },
  {
    id: 'spending-insights',
    category: 'reports',
    icon: (color) => <StonksIcon size={16} color={color} />,
    badge: 'Customizable Spending Reports',
    title: 'Gain Actionable Spending Insights',
    description:
      'Gain clear insights on your spending by viewing easy-to-digest, customizable reports that let you stay firmly in charge of your finances. Compare income against expenses and analyze weekly trends.',
    tags: ['Actionable Insights', 'Weekly Breakdown', 'Income vs Expense'],
    image: weeklyReportsImg,
    imageAlt: 'eXpend Monthly Report and weekly breakdown screen',
  },
  {
    id: 'accounts-summary',
    category: 'overview',
    icon: (color) => <ReportIcon size={16} color={color} />,
    badge: 'Detailed Financial Reports',
    title: 'Visualize Net Worth, Assets & Liabilities',
    description:
      'Comprehensive finance tools in one place. Monitor cash, digital wallets, bank accounts, and debts with real-time net worth and multi-currency support.',
    tags: ['Net Worth', 'Assets & Liabilities', 'Multi-Currency'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
  },
  {
    id: 'personalized-dashboard',
    category: 'overview',
    icon: (color) => <ProfileIcon size={16} color={color} />,
    badge: 'Personalized Dashboard',
    title: 'Everything Accessible in One Place',
    description:
      'You decide which important information takes the spotlight. See your wallets, savings goals, and debts at a single glance with a customizable overview.',
    tags: ['At-a-Glance View', 'Goals & Milestones', 'Debt Tracking'],
    image: profileDashboardImg,
    imageAlt: 'eXpend Profile and Dashboard with Wallets, Goals, and Debts',
  },
];

// Preserved 2-column desktop layout
const leftColItems = [featureItems[0], featureItems[2], featureItems[3]];
const rightColItems = [featureItems[1], featureItems[4], featureItems[5]];

// Hardware-grade phone mockup with specular sheen and unified brand blue backlight stage
const PhoneMockupFrame: React.FC<{
  image: string;
  alt: string;
}> = ({ image, alt }) => (
  <div className={styles.phoneStage}>
    <div className={styles.phoneBacklightStage} />
    <div className={styles.galleryPhoneFrame}>
      <div className={styles.screenSheen} />
      <div className={styles.dynamicIsland} />
      <img
        src={image}
        alt={alt}
        className={styles.galleryScreenImg}
        loading="lazy"
      />
    </div>
  </div>
);

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<FeatureCategory>('tracking');
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Show floating bottom dock when user is actively inside the features section
      // rect.bottom >= viewportHeight * 0.45 ensures dock smoothly slides away as Why Choose enters
      const inSection = rect.top <= viewportHeight * 0.75 && rect.bottom >= viewportHeight * 0.45;
      setIsFloatingVisible(inSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (newCat: FeatureCategory) => {
    if (newCat === activeCategory) return;
    setActiveCategory(newCat);
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < -60) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const activeItems = featureItems.filter((item) => item.category === activeCategory);
  const activeCategoryIndex = categories.findIndex((cat) => cat.id === activeCategory);

  return (
    <section ref={sectionRef} id="features" className={`section ${styles.galleryFeaturesSection}`}>
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

        {/* MOBILE SHOWCASE CARDS (<= 960px) */}
        <div key={activeCategory} className={styles.mobileCategoryShowcase}>
          {activeItems.map((item) => (
            <div key={item.id} className={styles.mobileFeatureCard}>
              <div className={styles.mobileCardHeader}>
                <span className={styles.galleryBadge}>
                  {item.icon('var(--accent-light)')}
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

              <div className={styles.mobileScreenStage}>
                <PhoneMockupFrame image={item.image} alt={item.imageAlt} />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE FLOATING STICKY BOTTOM TABS (Portaled to document.body to guarantee topmost z-index immunity against adjacent sections) */}
        {mounted && typeof document !== 'undefined'
          ? createPortal(
              <div
                className={`${styles.mobileFloatingDock} ${isFloatingVisible ? styles.dockVisible : styles.dockHidden}`}
                role="region"
                aria-label="Features category tabs"
              >
                <div className={styles.mobileSegmentTrack} role="tablist" aria-label="Feature categories">
                  {/* Animated sliding active indicator pill (matching eXpend InlineTabs) */}
                  <div
                    className={styles.slidingPillIndicator}
                    style={{
                      transform: `translateX(${activeCategoryIndex * 100}%)`,
                    }}
                    aria-hidden="true"
                  />

                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`${styles.mobileSegmentBtn} ${isActive ? styles.segmentActive : ''}`}
                      >
                        <span className={styles.segmentIconWrap}>
                          {cat.icon(isActive ? '#FFFFFF' : '#94A3B8')}
                        </span>
                        <span className={styles.segmentLabel}>{cat.shortLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>,
              document.body
            )
          : null}

        {/* DESKTOP 2-COLUMN STAGGERED EXHIBITION GALLERY (>= 961px) */}
        <div className={styles.galleryStaggeredGrid}>
          {/* LEFT COLUMN (Caption on Left, Screenshot on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColLeft}`}>
            {leftColItems.map((item) => (
              <div key={item.id} className={`${styles.galleryItem} ${styles.captionLeft}`}>
                {/* Caption on Left */}
                <div className={styles.galleryCaptionBox}>
                  <span className={styles.galleryBadge}>
                    {item.icon('var(--accent-light)')}
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
                  <PhoneMockupFrame image={item.image} alt={item.imageAlt} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (Staggered Downward: Screenshot on Left, Caption on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColRight}`}>
            {rightColItems.map((item) => (
              <div key={item.id} className={`${styles.galleryItem} ${styles.captionRight}`}>
                {/* Screenshot on Left */}
                <div className={styles.galleryScreenBox}>
                  <PhoneMockupFrame image={item.image} alt={item.imageAlt} />
                </div>

                {/* Caption on Right */}
                <div className={styles.galleryCaptionBox}>
                  <span className={styles.galleryBadge}>
                    {item.icon('var(--accent-light)')}
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
