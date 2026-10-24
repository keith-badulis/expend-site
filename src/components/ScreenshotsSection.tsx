import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons';

// Import all 16 authentic app screenshots
import img2930 from '../assets/screenshots/IMG_2930.png';
import img2931 from '../assets/screenshots/IMG_2931.png';
import img2926 from '../assets/screenshots/IMG_2926.png';
import img2927 from '../assets/screenshots/IMG_2927.png';
import img2928 from '../assets/screenshots/IMG_2928.png';
import img2929 from '../assets/screenshots/IMG_2929.png';
import img2932 from '../assets/screenshots/IMG_2932.png';
import img2933 from '../assets/screenshots/IMG_2933.png';
import img2934 from '../assets/screenshots/IMG_2934.png';
import img2935 from '../assets/screenshots/IMG_2935.png';
import img2936 from '../assets/screenshots/IMG_2936.png';
import img2937 from '../assets/screenshots/IMG_2937.png';
import img2938 from '../assets/screenshots/IMG_2938.png';
import img2939 from '../assets/screenshots/IMG_2939.png';
import img2940 from '../assets/screenshots/IMG_2940.png';
import img2941 from '../assets/screenshots/IMG_2941.png';

import styles from './ScreenshotsSection.module.css';

interface ScreenshotItem {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

const allScreenshots: ScreenshotItem[] = [
  {
    id: 'home-overview',
    image: img2930,
    title: 'Net Worth & Quick Access',
    category: 'Dashboard',
    description: 'High-level net worth, assets trajectory, and quick action bar.',
  },
  {
    id: 'home-feed',
    image: img2931,
    title: 'Daily Activity & Balances',
    category: 'Dashboard',
    description: 'Real-time account balances and chronological daily expense feed.',
  },
  {
    id: 'add-keypad',
    image: img2926,
    title: 'Keypad & Fast Entry',
    category: 'Logging',
    description: 'Built-in calculator keypad for fast transaction entry on the go.',
  },
  {
    id: 'split-tx',
    image: img2927,
    title: 'Subcategories & Splits',
    category: 'Logging',
    description: 'Split single receipts across multiple nested subcategories.',
  },
  {
    id: 'tag-search',
    image: img2928,
    title: 'Custom Tag Search',
    category: 'Ledger',
    description: 'Filter and search through tagged transactions instantly.',
  },
  {
    id: 'transaction-ledger',
    image: img2929,
    title: 'Complete Ledger History',
    category: 'Ledger',
    description: 'Searchable, filterable chronological transaction ledger.',
  },
  {
    id: 'budget-limits',
    image: img2932,
    title: 'Budget Limits & Progress',
    category: 'Budgets',
    description: 'Visual color-coded spending limits for target categories.',
  },
  {
    id: 'budget-insights',
    image: img2933,
    title: 'Historical Spending Analysis',
    category: 'Budgets',
    description: 'Multi-cycle budget comparison and spending behavior insights.',
  },
  {
    id: 'accounts-summary',
    image: img2934,
    title: 'Accounts & Net Worth',
    category: 'Accounts',
    description: 'Assets, liabilities, and debt summaries with multi-currency totals.',
  },
  {
    id: 'wallets-cards',
    image: img2935,
    title: 'Wallets, Cards & Cash',
    category: 'Accounts',
    description: 'Debit cards, credit cycles, cash wallets, and bank accounts.',
  },
  {
    id: 'monthly-report',
    image: img2936,
    title: 'Income vs Expense Breakdown',
    category: 'Reports',
    description: 'Monthly cashflow summary and category distribution breakdowns.',
  },
  {
    id: 'balance-trend',
    image: img2937,
    title: 'Cashflow Trend Curves',
    category: 'Reports',
    description: 'Interactive net balance curves plotted smoothly across time.',
  },
  {
    id: 'profile-hub',
    image: img2938,
    title: 'Financial Management Hub',
    category: 'Profile',
    description: 'Manage all wallets, budgets, goals, and debts from one center.',
  },
  {
    id: 'profile-settings',
    image: img2939,
    title: 'Preferences & Security',
    category: 'Settings',
    description: 'Currency settings, custom date formats, and local data controls.',
  },
  {
    id: 'filtered-reports',
    image: img2940,
    title: 'Deep Filtered Reports',
    category: 'Analytics',
    description: 'Drill down by custom date range, transaction type, and tags.',
  },
  {
    id: 'csv-export',
    image: img2941,
    title: 'Customizable CSV Export',
    category: 'Data Export',
    description: 'Filter and export your transaction records to clean CSV spreadsheets.',
  },
];

export const ScreenshotsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotItem | null>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedScreenshot(null);
    };
    if (selectedScreenshot) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedScreenshot]);

  return (
    <section id="screens" className={`section ${styles.screenshotsSection}`}>
      <div className="container">
        {/* Section Header with Carousel Navigation Buttons */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionSubtitle}>APP PREVIEW</span>
            <h2 className={styles.sectionTitle}>Designed for Focus and Clarity</h2>
            <p className={styles.sectionDescription}>
              Scroll through all 16 authentic screens from the eXpend mobile application.
            </p>
          </div>

          <div className={styles.navControls}>
            <button
              type="button"
              className={styles.carouselBtn}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeftIcon size={20} color={canScrollLeft ? 'var(--text-primary)' : 'var(--text-muted)'} />
            </button>
            <button
              type="button"
              className={styles.carouselBtn}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRightIcon size={20} color={canScrollRight ? 'var(--text-primary)' : 'var(--text-muted)'} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Gallery */}
      <div
        ref={scrollContainerRef}
        className={styles.carouselTrack}
      >
        <div className={styles.trackPaddingStart} />

        {allScreenshots.map((item) => (
          <div
            key={item.id}
            className={styles.screenshotCard}
            onClick={() => setSelectedScreenshot(item)}
            title="Click to view full size"
          >
            {/* Realistic Hardware Phone Frame */}
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={styles.screenImage}
                />
              </div>
            </div>

            {/* Caption & Category */}
            <div className={styles.captionGroup}>
              <span className={styles.categoryBadge}>{item.category}</span>
              <h4 className={styles.screenshotTitle}>{item.title}</h4>
              <p className={styles.screenshotDesc}>{item.description}</p>
            </div>
          </div>
        ))}

        <div className={styles.trackPaddingEnd} />
      </div>

      {/* Lightbox Modal for Enlarge View */}
      {selectedScreenshot &&
        createPortal(
          <div className={styles.lightboxBackdrop} onClick={() => setSelectedScreenshot(null)}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.lightboxCloseBtn}
                onClick={() => setSelectedScreenshot(null)}
                aria-label="Close enlarged preview"
              >
                <CloseIcon size={24} color="#FFFFFF" />
              </button>
              <div className={styles.lightboxPhone}>
                <img
                  src={selectedScreenshot.image}
                  alt={selectedScreenshot.title}
                  className={styles.lightboxImg}
                />
              </div>
              <div className={styles.lightboxCaption}>
                <span className={styles.lightboxCategory}>{selectedScreenshot.category}</span>
                <h3 className={styles.lightboxTitle}>{selectedScreenshot.title}</h3>
                <p className={styles.lightboxDesc}>{selectedScreenshot.description}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default ScreenshotsSection;
