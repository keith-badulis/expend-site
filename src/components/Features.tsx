import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import addTxImg from '../assets/screenshots/IMG_2926.png';
import budgetImg from '../assets/screenshots/IMG_2932.png';
import filteredReportsImg from '../assets/screenshots/IMG_2940.png';
import accountsImg from '../assets/screenshots/IMG_2935.png';
import weeklyReportsImg from '../assets/screenshots/IMG_2936.png';
import profileDashboardImg from '../assets/screenshots/IMG_2939.png';
import {
  LightningBoltIcon,
  PiggyBankIcon,
  FilterIcon,
  ReportIcon,
  StonksIcon,
  ProfileIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from './icons';
import styles from './Features.module.css';

type FeatureCategory = 'tracking' | 'reports' | 'overview';

interface FeatureItem {
  id: string;
  category: FeatureCategory;
  icon: (color?: string, size?: number) => React.ReactNode;
  title: string;
  description: string;
  shortDescription?: string;
  tags: string[];
  image: string;
  imageAlt: string;
}


const featureItems: FeatureItem[] = [
  {
    id: 'add-transaction',
    category: 'tracking',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <LightningBoltIcon size={size} color={color} />
    ),
    title: 'Log Transactions in Seconds',
    description:
      'Log income, expenses, and transfers in seconds with a built-in calculator. Use reusable templates or schedule recurring transactions for hassle-free tracking.',
    shortDescription:
      'Quickly log income and expenses with the built-in keypad, reusable templates, and recurring transactions.',
    tags: ['Income & Expenses', 'Custom Templates', 'Recurring Transactions'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    id: 'budget-planning',
    category: 'tracking',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <PiggyBankIcon size={size} color={color} />
    ),
    title: 'Set Spending Limits & Stay on Target',
    description:
      'Set budgets to stay within target spending limits. Stay in control with visual progress bars, category breakdowns, and flexible periods.',
    shortDescription:
      'Set spending limits with visual progress bars, category breakdowns, and flexible budget periods.',
    tags: ['Spending Limits', 'Flexible Periods', 'Progress Tracking'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    id: 'filtered-reports',
    category: 'reports',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <FilterIcon size={size} color={color} />
    ),
    title: 'Filter and Analyze Exactly How You Want',
    description:
      'Group transactions and accounts with custom tags. Filter by date, category, or tag with interactive cashflow curves and automatic totals.',
    shortDescription:
      'Group records with custom tags and filter by date or category with interactive cashflow curves.',
    tags: ['Custom Tags', 'Flexible Filters', 'Cashflow Curves'],
    image: filteredReportsImg,
    imageAlt: 'eXpend Filtered Reports screen with cashflow timeline chart',
  },
  {
    id: 'spending-insights',
    category: 'reports',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <StonksIcon size={size} color={color} />
    ),
    title: 'Analyze Spending Habits and Trends',
    description:
      'Analyze spending habits and earnings with flexible reports. Compare income against expenses and spot weekly trends at a glance.',
    shortDescription:
      'Analyze income vs. expenses, spot weekly trends, and view detailed monthly reports.',
    tags: ['Income vs Expense', 'Weekly Trends', 'Detailed Reports'],
    image: weeklyReportsImg,
    imageAlt: 'eXpend Monthly Report and weekly breakdown screen',
  },
  {
    id: 'accounts-summary',
    category: 'overview',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <ReportIcon size={size} color={color} />
    ),
    title: 'Track Net Worth, Assets & Liabilities',
    description:
      'Keep track of cash, savings, cards, and debts in one place. Monitor your real-time net worth with multi-currency support.',
    shortDescription:
      'Track cash, savings, credit cards, and multi-currency net worth in one comprehensive view.',
    tags: ['Net Worth', 'Assets & Liabilities', 'Multi-Currency'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
  },
  {
    id: 'personalized-dashboard',
    category: 'overview',
    icon: (color = 'var(--accent-light)', size = 20) => (
      <ProfileIcon size={size} color={color} />
    ),
    title: 'Everything in One Place',
    description:
      'Stay focused on reaching goals with visual savings milestones. Mindfully track debts, payable and receivable, in one clean overview.',
    shortDescription:
      'Monitor savings milestones and mindfully manage payable and receivable debts at a glance.',
    tags: ['Smart Goal Tracking', 'Debt Management', 'At-a-Glance View'],
    image: profileDashboardImg,
    imageAlt: 'eXpend Profile and Dashboard with Wallets, Goals, and Debts',
  },
];

// Preserved 2-column desktop layout
const leftColItems = [featureItems[0], featureItems[2], featureItems[3]];
const rightColItems = [featureItems[1], featureItems[4], featureItems[5]];

// Hardware-grade phone mockup with specular sheen, unified backlight, and interactive click affordance
const PhoneMockupFrame: React.FC<{
  image: string;
  alt: string;
  onClick?: () => void;
}> = ({ image, alt, onClick }) => (
  <div
    className={`${styles.phoneStage} ${onClick ? styles.clickablePhoneStage : ''}`}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    aria-label={onClick ? `View enlarged screenshot: ${alt}` : undefined}
    onKeyDown={
      onClick
        ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onClick();
            }
          }
        : undefined
    }
  >
    <div className={styles.phoneBacklightStage} />
    <div className={styles.galleryPhoneFrame}>
      <div className={styles.screenSheen} />
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and listen for Escape/Arrow keys when preview overlay is open
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev === null ? null : (prev - 1 + featureItems.length) % featureItems.length
        );
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) =>
          prev === null ? null : (prev + 1) % featureItems.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  const handleCarouselScroll = () => {
    if (isProgrammaticScroll.current || !carouselRef.current) return;
    const container = carouselRef.current;
    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const dist = Math.abs(childCenter - containerCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeSlideIndex) {
      setActiveSlideIndex(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      if (cards[index]) {
        isProgrammaticScroll.current = true;
        setActiveSlideIndex(index);
        (cards[index] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 400);
      }
    }
  };

  const handlePrevPreview = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev - 1 + featureItems.length) % featureItems.length
    );
  };

  const handleNextPreview = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % featureItems.length
    );
  };

  const handleClosePreview = () => {
    setSelectedImageIndex(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    
    // Horizontal swipe threshold: > 45px and predominantly horizontal
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX > 0) {
        handlePrevPreview();
      } else {
        handleNextPreview();
      }
    } else if (deltaY > 80 && Math.abs(deltaY) > Math.abs(deltaX) * 2) {
      // Swipe down to dismiss
      handleClosePreview();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

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
          <h2 className="section-title">
            Simplify Your Finances. <br />
            <span style={{ color: 'var(--accent-light)' }}>Reach Your Goals.</span>
          </h2>
          <p className="section-description">
            Ditch the spreadsheets and notebooks. Make mindful financial journaling an effortless habit.
          </p>
        </div>

        {/* MOBILE CONTINUOUS 6-SCREEN CAROUSEL (<= 960px) */}
        <div className={styles.mobileCarouselWrapper}>
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className={styles.mobileCarouselTrack}
          >
            {featureItems.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.mobileFeatureCard} ${activeSlideIndex === index ? styles.activeCard : ''}`}
              >
                <div className={styles.mobileScreenStage}>
                  <PhoneMockupFrame
                    image={item.image}
                    alt={item.imageAlt}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </div>

                <div className={styles.mobileCardContent}>
                  <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  <p className={styles.galleryItemDesc}>
                    {item.shortDescription || item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 6-Slide Indicator Pagination Bar */}
          <div className={styles.carouselPaginationDots} role="tablist" aria-label="Feature slides">
            {featureItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                role="tab"
                aria-selected={activeSlideIndex === dotIdx}
                aria-label={`Go to feature slide ${dotIdx + 1}`}
                onClick={() => scrollToSlide(dotIdx)}
                className={`${styles.paginationDot} ${activeSlideIndex === dotIdx ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        </div>


        {/* DESKTOP 2-COLUMN STAGGERED EXHIBITION GALLERY (>= 961px) */}
        <div className={styles.galleryStaggeredGrid}>
          {/* LEFT COLUMN (Caption on Left, Screenshot on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColLeft}`}>
            {leftColItems.map((item) => {
              const itemIndex = featureItems.findIndex((f) => f.id === item.id);
              return (
                <div key={item.id} className={`${styles.galleryItem} ${styles.captionLeft}`}>
                  {/* Caption on Left */}
                  <div className={styles.galleryCaptionBox}>
                    <div className={styles.featureIconSquircle}>
                      {item.icon('var(--accent-light)', 20)}
                    </div>
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
                    <PhoneMockupFrame
                      image={item.image}
                      alt={item.imageAlt}
                      onClick={() => setSelectedImageIndex(itemIndex)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN (Staggered Downward: Screenshot on Left, Caption on Right) */}
          <div className={`${styles.galleryColumn} ${styles.galleryColRight}`}>
            {rightColItems.map((item) => {
              const itemIndex = featureItems.findIndex((f) => f.id === item.id);
              return (
                <div key={item.id} className={`${styles.galleryItem} ${styles.captionRight}`}>
                  {/* Screenshot on Left */}
                  <div className={styles.galleryScreenBox}>
                    <PhoneMockupFrame
                      image={item.image}
                      alt={item.imageAlt}
                      onClick={() => setSelectedImageIndex(itemIndex)}
                    />
                  </div>

                  {/* Caption on Right */}
                  <div className={styles.galleryCaptionBox}>
                    <div className={styles.featureIconSquircle}>
                      {item.icon('var(--accent-light)', 20)}
                    </div>
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
              );
            })}
          </div>
        </div>
      </div>

      {/* SCREENSHOT DETAIL PREVIEW OVERLAY / LIGHTBOX MODAL */}
      {mounted && selectedImageIndex !== null && typeof document !== 'undefined'
        ? createPortal(
            <div
              className={styles.lightboxOverlay}
              role="dialog"
              aria-modal="true"
              aria-label="Screenshot detail preview modal"
            >
              {/* Semi-transparent dark blur backdrop */}
              <div
                className={styles.lightboxBackdrop}
                onClick={handleClosePreview}
              />

              {/* Lightbox Modal Container */}
              <div
                className={styles.lightboxContainer}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Top Floating Capsule Bar */}
                <div className={styles.lightboxTopCapsule}>
                  <div className={styles.lightboxCapsuleMeta}>
                    <span className={styles.lightboxCapsuleIcon}>
                      {featureItems[selectedImageIndex].icon('var(--accent-light)', 16)}
                    </span>
                    <span className={styles.lightboxCapsuleCounter}>
                      {selectedImageIndex + 1} / {featureItems.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClosePreview}
                    className={styles.lightboxCapsuleCloseBtn}
                    aria-label="Close screenshot preview"
                  >
                    <CloseIcon size={16} color="#FFFFFF" />
                  </button>
                </div>

                {/* Main Visual Stage */}
                <div className={styles.lightboxVisualStage}>
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={handlePrevPreview}
                    className={`${styles.lightboxNavBtn} ${styles.lightboxNavPrev}`}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeftIcon size={24} color="#FFFFFF" />
                  </button>

                  {/* Phone Mockup Frame */}
                  <div className={styles.lightboxPhoneContainer}>
                    <div className={styles.lightboxBacklight} />
                    <div className={styles.lightboxPhoneFrame}>
                      <div className={styles.screenSheen} />
                      <img
                        key={featureItems[selectedImageIndex].image}
                        src={featureItems[selectedImageIndex].image}
                        alt={featureItems[selectedImageIndex].imageAlt}
                        className={styles.lightboxScreenImg}
                      />
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNextPreview}
                    className={`${styles.lightboxNavBtn} ${styles.lightboxNavNext}`}
                    aria-label="Next screenshot"
                  >
                    <ChevronRightIcon size={24} color="#FFFFFF" />
                  </button>
                </div>

                {/* Bottom Floating Glass Card */}
                <div className={styles.lightboxBottomCard}>
                  <h3 className={styles.lightboxTitle}>
                    {featureItems[selectedImageIndex].title}
                  </h3>
                  <p className={styles.lightboxDesc}>
                    {featureItems[selectedImageIndex].description}
                  </p>

                  {/* 6-Slide Quick Jump Pagination Dots */}
                  <div
                    className={styles.lightboxDotsTrack}
                    role="tablist"
                    aria-label="Lightbox screenshot slides"
                  >
                    {featureItems.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        role="tab"
                        aria-selected={selectedImageIndex === dotIdx}
                        aria-label={`Jump to screenshot ${dotIdx + 1}`}
                        onClick={() => setSelectedImageIndex(dotIdx)}
                        className={`${styles.lightboxDot} ${
                          selectedImageIndex === dotIdx ? styles.lightboxDotActive : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
};

export default Features;
