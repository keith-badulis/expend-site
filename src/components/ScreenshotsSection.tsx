import React, { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon, SunIcon, MoonIcon } from './icons';

// Import all 18 authentic app screenshots (9 Light / Dark pairs)
import img3358 from '../assets/screenshots/IMG_3358.png';
import img3359 from '../assets/screenshots/IMG_3359.png';
import img3360 from '../assets/screenshots/IMG_3360.png';
import img3361 from '../assets/screenshots/IMG_3361.png';
import img3363 from '../assets/screenshots/IMG_3363.png';
import img3364 from '../assets/screenshots/IMG_3364.png';
import img3365 from '../assets/screenshots/IMG_3365.png';
import img3366 from '../assets/screenshots/IMG_3366.png';
import img3367 from '../assets/screenshots/IMG_3367.png';
import img3370 from '../assets/screenshots/IMG_3370.png';
import img3368 from '../assets/screenshots/IMG_3368.png';
import img3369 from '../assets/screenshots/IMG_3369.png';
import img3372 from '../assets/screenshots/IMG_3372.png';
import img3371 from '../assets/screenshots/IMG_3371.png';
import img3373 from '../assets/screenshots/IMG_3373.png';
import img3374 from '../assets/screenshots/IMG_3374.png';
import img3377 from '../assets/screenshots/IMG_3377.png';
import img3378 from '../assets/screenshots/IMG_3378.png';

import styles from './ScreenshotsSection.module.css';

interface ScreenshotPair {
  id: string;
  lightImage: string;
  darkImage: string;
  title: string;
  category: string;
}

const allScreenshots: ScreenshotPair[] = [
  {
    id: 'dashboard-overview',
    lightImage: img3358,
    darkImage: img3359,
    category: 'Dashboard',
    title: 'Net Worth & Overview',
  },
  {
    id: 'add-keypad',
    lightImage: img3360,
    darkImage: img3361,
    category: 'Logging',
    title: 'Keypad & Fast Entry',
  },
  {
    id: 'transaction-ledger',
    lightImage: img3363,
    darkImage: img3364,
    category: 'Ledger',
    title: 'Transaction Ledger & Search',
  },
  {
    id: 'budget-details',
    lightImage: img3365,
    darkImage: img3366,
    category: 'Budgets',
    title: 'Budget Details & Progress',
  },
  {
    id: 'accounts-summary',
    lightImage: img3367,
    darkImage: img3370,
    category: 'Accounts',
    title: 'Accounts & Balances',
  },
  {
    id: 'visual-reports',
    lightImage: img3368,
    darkImage: img3369,
    category: 'Analytics',
    title: 'Spending Trends & Cash Flow',
  },
  {
    id: 'filtered-insights',
    lightImage: img3372,
    darkImage: img3371,
    category: 'Analytics',
    title: 'Filtered Category Insights',
  },
  {
    id: 'wallets-profile',
    lightImage: img3373,
    darkImage: img3374,
    category: 'Accounts',
    title: 'Wallets, Cards & Profile',
  },
  {
    id: 'custom-tags',
    lightImage: img3377,
    darkImage: img3378,
    category: 'Ledger',
    title: 'Custom Tags & Split Ledger',
  },
];

export const ScreenshotsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotPair | null>(null);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);

  // Dynamically calculate section scroll height based on track scrollable width
  const updateDimensions = useCallback(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxTranslate = Math.max(0, trackWidth - viewportWidth);
    // Multiply by 1.1 for comfortable, natural scroll pacing
    const scrollDistance = Math.round(maxTranslate * 1.1);
    setSectionHeight(window.innerHeight + scrollDistance);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Sticky Horizontal Scroll translation handler
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const totalScrollableDistance = rect.height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      // Progress: 0 at rect.top == 0, 1 at rect.bottom == window.innerHeight
      const currentScroll = -sectionTop;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableDistance));

      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth);
      const tx = -progress * maxTranslate;

      trackRef.current.style.transform = `translate3d(${tx}px, 0, 0)`;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sectionHeight]);

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
    <section
      id="screens"
      ref={sectionRef}
      className={styles.stickySection}
      style={{ height: sectionHeight ? `${sectionHeight}px` : '340vh' }}
    >
      <div className={styles.stickyViewport}>
        {/* Section Header */}
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.sectionSubtitle}>APP PREVIEW</span>
              <h2 className={styles.sectionTitle}>Designed for Focus and Clarity</h2>
              <p className={styles.sectionDescription}>
                Explore authentic screens in light and dark mode as you scroll through the app.
              </p>
            </div>

            {/* Light / Dark Mode Toggle */}
            <div className={styles.headerControls}>
              <div className={styles.themeToggle} role="group" aria-label="Screenshot theme toggle">
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${themeMode === 'light' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setThemeMode('light')}
                  aria-pressed={themeMode === 'light'}
                >
                  <SunIcon size={16} />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${themeMode === 'dark' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setThemeMode('dark')}
                  aria-pressed={themeMode === 'dark'}
                >
                  <MoonIcon size={16} />
                  <span>Dark</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Gallery Track */}
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.horizontalTrack}>
            <div className={styles.trackPaddingStart} />

            {allScreenshots.map((item) => (
              <div
                key={item.id}
                className={styles.screenshotCard}
                onClick={() => setSelectedScreenshot(item)}
                title="Click to enlarge"
              >
                {/* Realistic Hardware Phone Frame */}
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneScreen}>
                    <img
                      src={item.lightImage}
                      alt={`${item.title} (Light Mode)`}
                      className={`${styles.screenImg} ${themeMode === 'light' ? styles.imgVisible : styles.imgHidden}`}
                      loading="lazy"
                    />
                    <img
                      src={item.darkImage}
                      alt={`${item.title} (Dark Mode)`}
                      className={`${styles.screenImg} ${themeMode === 'dark' ? styles.imgVisible : styles.imgHidden}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Caption: Category + Title only (headers are enough) */}
                <div className={styles.captionGroup}>
                  <span className={styles.categoryBadge}>{item.category}</span>
                  <h4 className={styles.screenshotTitle}>{item.title}</h4>
                </div>
              </div>
            ))}

            <div className={styles.trackPaddingEnd} />
          </div>
        </div>

        {/* Minimal Scroll Progress Indicator */}
        <div className="container">
          <div className={styles.progressRow}>
            <div className={styles.progressBarTrack}>
              <div ref={progressBarRef} className={styles.progressBarFill} />
            </div>
            <span className={styles.scrollHint}>Scroll down to explore</span>
          </div>
        </div>
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
                  src={themeMode === 'light' ? selectedScreenshot.lightImage : selectedScreenshot.darkImage}
                  alt={selectedScreenshot.title}
                  className={styles.lightboxImg}
                />
              </div>
              <div className={styles.lightboxCaption}>
                <span className={styles.lightboxCategory}>{selectedScreenshot.category}</span>
                <h3 className={styles.lightboxTitle}>{selectedScreenshot.title}</h3>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default ScreenshotsSection;
