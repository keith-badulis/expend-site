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
  DescriptionIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
    title: 'Log Transactions in Seconds',
    description:
      'Log income, expenses, and money transfers in seconds with a built-in keypad calculator. Use customizable, reusable templates to record common transactions instantly, or schedule recurring transactions for a hassle-free routine.',
    tags: ['Income & Expenses', 'Custom Templates', 'Recurring Transactions'],
    image: addTxImg,
    imageAlt: 'eXpend Add Transaction keypad and calculator screen',
  },
  {
    id: 'budget-planning',
    category: 'tracking',
    icon: (color) => <PiggyBankIcon size={16} color={color} />,
    badge: 'Flexible Budget Planning',
    title: 'Set Spending Limits & Stay on Target',
    description:
      'Plan and set budgets to stay within your target spending limits. Keep in control with clear visual progress bars, category breakdowns, and flexible budget periods.',
    tags: ['Spending Limits', 'Flexible Periods', 'Progress Tracking'],
    image: budgetImg,
    imageAlt: 'eXpend Budget Details and spending status screen',
  },
  {
    id: 'filtered-reports',
    category: 'reports',
    icon: (color) => <FilterIcon size={16} color={color} />,
    badge: 'Organize with Tags & Filters',
    title: 'Filter and Analyze Exactly How You Want',
    description:
      'Group transactions and accounts with custom tags. Filter records by date, category, or tag to see where your money goes, complete with interactive cashflow curves and automatic totals.',
    tags: ['Custom Tags', 'Flexible Filters', 'Cashflow Curves'],
    image: filteredReportsImg,
    imageAlt: 'eXpend Filtered Reports screen with cashflow timeline chart',
  },
  {
    id: 'spending-insights',
    category: 'reports',
    icon: (color) => <StonksIcon size={16} color={color} />,
    badge: 'Detailed Financial Reports',
    title: 'Analyze Spending Habits and Trends',
    description:
      'Visualize and analyze your spending habits and earnings with detailed, flexible reports. Compare income against expenses and view weekly trends to stay firmly in control of your finances.',
    tags: ['Income vs Expense', 'Weekly Trends', 'Detailed Reports'],
    image: weeklyReportsImg,
    imageAlt: 'eXpend Monthly Report and weekly breakdown screen',
  },
  {
    id: 'accounts-summary',
    category: 'overview',
    icon: (color) => <ReportIcon size={16} color={color} />,
    badge: 'Comprehensive Accounts',
    title: 'Track Net Worth, Assets & Liabilities',
    description:
      'Keep track of cash, savings, credit cards, and debts in one place. Monitor your real-time net worth and view a clear breakdown of your accounts across multiple currencies.',
    tags: ['Net Worth', 'Assets & Liabilities', 'Multi-Currency'],
    image: accountsImg,
    imageAlt: 'eXpend Accounts Summary and Net Worth screen',
  },
  {
    id: 'personalized-dashboard',
    category: 'overview',
    icon: (color) => <ProfileIcon size={16} color={color} />,
    badge: 'Personalized Dashboard',
    title: 'Everything in One Place',
    description:
      'Stay focused on reaching your personal goals by monitoring your savings milestones. Mindfully track debts, payable and receivable, all from a clean and customizable overview.',
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
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const [activeCategory, setActiveCategory] = useState<FeatureCategory>('tracking');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

  const handleCategoryChange = (newCat: FeatureCategory) => {
    setActiveCategory(newCat);
    const targetIndex = newCat === 'tracking' ? 0 : newCat === 'reports' ? 2 : 4;
    setActiveSlideIndex(targetIndex);

    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      if (cards[targetIndex]) {
        isProgrammaticScroll.current = true;
        (cards[targetIndex] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 400);
      }
    }

    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < -60) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

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
      const newCat = closestIndex < 2 ? 'tracking' : closestIndex < 4 ? 'reports' : 'overview';
      if (newCat !== activeCategory) {
        setActiveCategory(newCat);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.children;
      if (cards[index]) {
        isProgrammaticScroll.current = true;
        setActiveSlideIndex(index);
        const newCat = index < 2 ? 'tracking' : index < 4 ? 'reports' : 'overview';
        setActiveCategory(newCat);
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

  const activeCategoryIndex = categories.findIndex((cat) => cat.id === activeCategory);

  return (
    <section ref={sectionRef} id="features" className={`section ${styles.galleryFeaturesSection}`}>
      {/* Precision Glowing Transition Seams */}
      <div className={styles.topGlowSeam} aria-hidden="true" />
      <div className={styles.bottomGlowSeam} aria-hidden="true" />

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
            Ditch the spreadsheets and notebooks. Embrace the simplicity of eXpend and make mindful financial journaling a habit today!
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
                <div className={styles.mobileCardHeader}>
                  <div className={styles.mobileKicker}>
                    {item.icon('var(--accent-light)')}
                    <span>{item.badge}</span>
                  </div>
                  <h3 className={styles.galleryItemTitle}>{item.title}</h3>
                  <p className={styles.galleryItemDesc}>{item.description}</p>
                </div>

                <div className={styles.mobileScreenStage}>
                  <PhoneMockupFrame
                    image={item.image}
                    alt={item.imageAlt}
                    onClick={() => setSelectedImageIndex(index)}
                  />
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

        {/* MOBILE FLOATING STICKY BOTTOM TABS (Portaled to document.body) */}
        {mounted && typeof document !== 'undefined'
          ? createPortal(
              <div
                className={`${styles.mobileFloatingDock} ${isFloatingVisible ? styles.dockVisible : styles.dockHidden}`}
                role="region"
                aria-label="Features category tabs"
              >
                <div className={styles.mobileSegmentTrack} role="tablist" aria-label="Feature categories">
                  {/* Animated sliding active indicator pill */}
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
            {leftColItems.map((item) => {
              const itemIndex = featureItems.findIndex((f) => f.id === item.id);
              return (
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
                {/* Header Bar */}
                <div className={styles.lightboxHeader}>
                  <div className={styles.lightboxMetaInfo}>
                    <div className={styles.lightboxBadge}>
                      {featureItems[selectedImageIndex].icon('var(--accent-light)')}
                      <span>{featureItems[selectedImageIndex].badge}</span>
                    </div>
                    <span className={styles.lightboxIndexIndicator}>
                      {selectedImageIndex + 1} / {featureItems.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClosePreview}
                    className={styles.lightboxCloseBtn}
                    aria-label="Close screenshot preview"
                  >
                    <CloseIcon size={20} color="#FFFFFF" />
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

                {/* Footer Bar */}
                <div className={styles.lightboxFooter}>
                  <h3 className={styles.lightboxTitle}>
                    {featureItems[selectedImageIndex].title}
                  </h3>
                  <p className={styles.lightboxDesc}>
                    {featureItems[selectedImageIndex].description}
                  </p>
                  <div className={styles.lightboxTagsWrap}>
                    {featureItems[selectedImageIndex].tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.lightboxTagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>

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
