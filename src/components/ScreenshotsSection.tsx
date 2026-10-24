import React, { useRef, useState, useEffect, useCallback } from 'react';
import { SunIcon, MoonIcon } from './icons';

// Import all 16 authentic app screenshots (8 Light / Dark pairs)
import img3358 from '../assets/screenshots/IMG_3358.png';
import img3359 from '../assets/screenshots/IMG_3359.png';
import img3360 from '../assets/screenshots/IMG_3360.png';
import img3361 from '../assets/screenshots/IMG_3361.png';
import img3377 from '../assets/screenshots/IMG_3377.png';
import img3378 from '../assets/screenshots/IMG_3378.png';
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

import styles from './ScreenshotsSection.module.css';

interface ScreenshotPair {
  id: string;
  lightImage: string;
  darkImage: string;
  title: string;
}

const allScreenshots: ScreenshotPair[] = [
  {
    id: 'dashboard-overview',
    lightImage: img3358,
    darkImage: img3359,
    title: 'Your Net Worth at a Glance',
  },
  {
    id: 'add-keypad',
    lightImage: img3360,
    darkImage: img3361,
    title: 'Quick & Easy Recording',
  },
  {
    id: 'transaction-ledger',
    lightImage: img3377,
    darkImage: img3378,
    title: 'All Your Transactions, Reviewed',
  },
  {
    id: 'budget-details',
    lightImage: img3365,
    darkImage: img3366,
    title: 'Flexible Budget Planning',
  },
  {
    id: 'accounts-summary',
    lightImage: img3367,
    darkImage: img3370,
    title: 'Keep Your Accounts in Check',
  },
  {
    id: 'visual-reports',
    lightImage: img3368,
    darkImage: img3369,
    title: 'Detailed Financial Reports',
  },
  {
    id: 'filtered-insights',
    lightImage: img3372,
    darkImage: img3371,
    title: 'View Your Records, Your Way',
  },
  {
    id: 'wallets-profile',
    lightImage: img3373,
    darkImage: img3374,
    title: 'Easy Access in One Place',
  },
];

export const ScreenshotsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);

  // Dynamically calculate section scroll height based on track scrollable width
  const updateDimensions = useCallback(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.offsetWidth;
    const viewportWidth = document.documentElement.clientWidth;
    const maxTranslate = Math.max(0, trackWidth - viewportWidth);
    const scrollDistance = Math.round(maxTranslate * 1.25);
    setSectionHeight(window.innerHeight + scrollDistance);
  }, []);

  useEffect(() => {
    updateDimensions();
    const observer = new ResizeObserver(() => updateDimensions());
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    window.addEventListener('resize', updateDimensions);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  // Sticky horizontal scroll + focus scale wave (flicker-free 2D GPU compositing)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;
      if (totalScrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollableDistance));

      const trackWidth = trackRef.current.offsetWidth;
      const viewportWidth = document.documentElement.clientWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth);
      const tx = -progress * maxTranslate;

      trackRef.current.style.transform = `translate3d(${tx.toFixed(2)}px, 0, 0)`;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      }

      // Sliding focal index from 0 (first screenshot) to N - 1 (last screenshot)
      const totalCards = allScreenshots.length;
      const focusIndex = progress * (totalCards - 1);

      const isMobile = window.innerWidth <= 768;
      const minScale = isMobile ? 0.86 : 0.76;
      const step = isMobile ? 0.045 : 0.072;

      for (let i = 0; i < totalCards; i++) {
        const cardEl = cardRefs.current[i];
        if (!cardEl) continue;

        const absDist = Math.abs(i - focusIndex);
        // Smooth scale falloff: 1.0 at focusIndex, gradually reducing for further cards
        const scale = Math.max(minScale, 1 - absDist * step);

        cardEl.style.transform = `translate3d(0, 0, 0) scale(${scale.toFixed(4)})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionHeight]);

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
              <h2 className={styles.sectionTitle}>
                Designed for <span className={styles.titleHighlight}>Focus and Clarity</span>
              </h2>
            </div>

            {/* Light / Dark Mode Icon Toggle */}
            <div className={styles.headerControls}>
              <div className={styles.themeToggle} role="group" aria-label="Screenshot theme toggle">
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${themeMode === 'light' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setThemeMode('light')}
                  aria-label="Light mode"
                  aria-pressed={themeMode === 'light'}
                >
                  <SunIcon size={18} />
                </button>
                <button
                  type="button"
                  className={`${styles.toggleBtn} ${themeMode === 'dark' ? styles.toggleBtnActive : ''}`}
                  onClick={() => setThemeMode('dark')}
                  aria-label="Dark mode"
                  aria-pressed={themeMode === 'dark'}
                >
                  <MoonIcon size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Gallery Track */}
        <div className={styles.trackWrapper}>
          <div ref={trackRef} className={styles.horizontalTrack}>
            {allScreenshots.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={styles.screenshotCard}
              >
                {/* Realistic Multi-Layered Hardware Frame (Matches Hero Mockup) */}
                <div className={styles.phoneFrame}>
                  {/* Specular Diagonal Glass Sheen */}
                  <div className={styles.screenSheen} aria-hidden="true" />

                  <div className={styles.phoneScreen}>
                    <div className={styles.dynamicIsland} aria-hidden="true">
                      <span className={styles.dynamicIslandCamera} />
                    </div>
                    <img
                      src={item.lightImage}
                      alt={`${item.title} (Light Mode)`}
                      decoding="async"
                      className={`${styles.screenImg} ${themeMode === 'light' ? styles.imgVisible : styles.imgHidden}`}
                    />
                    <img
                      src={item.darkImage}
                      alt={`${item.title} (Dark Mode)`}
                      decoding="async"
                      className={`${styles.screenImg} ${themeMode === 'dark' ? styles.imgVisible : styles.imgHidden}`}
                    />
                  </div>
                </div>

                {/* Caption: Title only */}
                <div className={styles.captionGroup}>
                  <h4 className={styles.screenshotTitle}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Scroll Progress Bar */}
        <div className="container">
          <div className={styles.progressRow}>
            <div className={styles.progressBarTrack}>
              <div ref={progressBarRef} className={styles.progressBarFill} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
