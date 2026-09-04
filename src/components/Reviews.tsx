import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StarFilledIcon, StarOutlineIcon } from './icons';
import styles from './Reviews.module.css';

interface Review {
  name: string;
  role: string;
  rating: number;
  highlight: string;
  comment: string;
  store: 'App Store' | 'Google Play';
  avatarColor: string;
  avatarInitials: string;
}

const reviews: Review[] = [
  {
    name: 'Ibrahim H.',
    role: 'Verified Google Play Review',
    rating: 5,
    highlight: "Best expense tracking and budgeting app I've found.",
    comment:
      "I've been using this app for almost a year, and it exceeded my expectations. The interface is modern, clean, and easy to use with plenty of features without feeling complicated. The lifetime premium option is affordable and worth every riyal. Great work by the developer!",
    store: 'Google Play',
    avatarColor: '#4C74DB',
    avatarInitials: 'IH',
  },
  {
    name: 'cyaaanogenz',
    role: 'Verified App Store Review',
    rating: 5,
    highlight: 'Clean and Intuitive UI',
    comment:
      'One of the best looking expense and savings tracker out there. Presentation of data is great. No clutters. Easy to look at. In terms of functionality all basic reports are here. Hoping for more features in the future!',
    store: 'App Store',
    avatarColor: '#0BB190',
    avatarInitials: 'C',
  },
  {
    name: 'Susie C.',
    role: 'Verified Google Play Review',
    rating: 5,
    highlight: 'The choice of icons and colors is great!',
    comment:
      'I LOVE this app! The choice of icons and colors is great. The app is beautifully designed and easy to use. Thank you to the developer for making such a beautiful money tracking tool.',
    store: 'Google Play',
    avatarColor: '#EF8354',
    avatarInitials: 'SC',
  },
  {
    name: 'MRDJWS',
    role: 'Verified App Store Review',
    rating: 5,
    highlight: 'Perfect!!',
    comment:
      'An honest review, this app was perfect, the minimalistic and simple UI. That’s what I looked for! Please update more in the future! Worth to pay',
    store: 'App Store',
    avatarColor: '#7094F0',
    avatarInitials: 'M',
  },
  {
    name: 'Jurij M.',
    role: 'Verified Google Play Review',
    rating: 5,
    highlight: 'Design is just soo clean — bought lifetime premium!',
    comment:
      'This is honestly the best app for tracking expenses. I tried a bunch of others and always stopped tracking, but here the design is just soo clean, I actually love it! After two months I decided this is it and bought premium. Huge thank you for making it a ONE-TIME purchase!',
    store: 'Google Play',
    avatarColor: '#9957BD',
    avatarInitials: 'JM',
  },
];

// 5-set buffer for seamless infinite bi-directional looping with ample headroom
const infiniteReviews = [
  ...reviews,
  ...reviews,
  ...reviews,
  ...reviews,
  ...reviews,
];
const TOTAL_REAL = reviews.length; // 5
const START_INDEX = TOTAL_REAL * 2; // index 10 (center set 2)

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isSlidingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const handleNext = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleDotClick = (targetRealIndex: number) => {
    if (isSlidingRef.current) return;
    const currentRealIndex =
      ((currentIndex % TOTAL_REAL) + TOTAL_REAL) % TOTAL_REAL;
    if (targetRealIndex === currentRealIndex) return;

    isSlidingRef.current = true;
    setIsTransitioning(true);
    const diff = targetRealIndex - currentRealIndex;
    setCurrentIndex((prev) => prev + diff);
  };

  // Re-enable CSS transition on the next animation frame after a silent coordinate jump
  useEffect(() => {
    if (!isTransitioning) {
      const frameId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isSlidingRef.current = false;
        });
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isTransitioning]);

  // Periodic Auto-Advance Timer (every 4500ms)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, handleNext]);

  // Seamless Infinite Wrap on Transition End
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // CRITICAL: Ignore events bubbling up from child elements (.reviewCard, stars, etc.)
    if (e.target !== e.currentTarget) return;
    // CRITICAL: Only react to the track's own transform property
    if (e.propertyName !== 'transform') return;

    isSlidingRef.current = false;

    if (currentIndex >= TOTAL_REAL * 3) {
      // Reached set 3/4, silently snap back to corresponding card in middle set 2
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - TOTAL_REAL);
    } else if (currentIndex < TOTAL_REAL * 2) {
      // Reached set 1/0, silently snap forward to corresponding card in middle set 2
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + TOTAL_REAL);
    }
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      const threshold = 40;
      if (touchDeltaX.current < -threshold) {
        handleNext();
      } else if (touchDeltaX.current > threshold) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
    setIsPaused(false);
  };

  const activeRealIndex =
    ((currentIndex % TOTAL_REAL) + TOTAL_REAL) % TOTAL_REAL;

  return (
    <section id="reviews" className={`section ${styles.reviewsSection}`}>
      <div className="container">
        {/* Section Header with Aggregated Trust Badge */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-subtitle">
            <StarOutlineIcon size={16} color="var(--accent-light)" />
            <span>Community Feedback</span>
          </div>

          <h2 className="section-title" style={{ fontWeight: 700 }}>
            Loved by People Who Value <br />
            <span style={{ color: 'var(--accent-light)' }}>Simplicity & Design</span>
          </h2>

          <p
            className="section-description"
            style={{ maxWidth: '560px', margin: '0 auto 1.35rem auto' }}
          >
            Real reviews from verified budgeters managing their daily money with eXpend.
          </p>

          {/* Social Proof Trust Pill */}
          <div className={styles.trustPill}>
            <span className={styles.trustLabel}>App Store & Google Play Verified</span>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Infinitely Scrollable Carousel Viewport */}
      <div
        className={styles.carouselViewport}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`${styles.carouselTrack} ${
            isTransitioning ? styles.trackAnimated : styles.trackInstant
          }`}
          style={
            {
              '--active-index': currentIndex,
            } as React.CSSProperties
          }
          onTransitionEnd={handleTransitionEnd}
        >
          {infiniteReviews.map((rev, idx) => {
            const isActive = (idx % TOTAL_REAL) === activeRealIndex;
            return (
              <div
                key={idx}
                className={`${styles.reviewCard} ${
                  isActive ? styles.cardActive : styles.cardInactive
                }`}
                onClick={() => {
                  if (idx !== currentIndex && !isSlidingRef.current) {
                    isSlidingRef.current = true;
                    setIsTransitioning(true);
                    setCurrentIndex(idx);
                  }
                }}
              >
                {/* Top Row: 5 Gold Stars + Store Pill */}
                <div className={styles.reviewTopRow}>
                  <div className={styles.starsWrap}>
                    {Array.from({ length: rev.rating }).map((_, sIdx) => (
                      <StarFilledIcon
                        key={sIdx}
                        size={15}
                        color="#FBBF24"
                        strokeWidth="2px"
                      />
                    ))}
                  </div>
                  <span
                    className={`${styles.storePill} ${
                      rev.store === 'App Store'
                        ? styles.storeAppStore
                        : styles.storeGooglePlay
                    }`}
                  >
                    {rev.store}
                  </span>
                </div>

                {/* Highlight Title */}
                <h3 className={styles.reviewHighlight}>"{rev.highlight}"</h3>

                {/* Comment Body */}
                <p className={styles.reviewComment}>"{rev.comment}"</p>

                {/* Author Footer */}
                <div className={styles.authorFooter}>
                  <div
                    className={styles.authorAvatar}
                    style={{
                      backgroundColor: `${rev.avatarColor}18`,
                      color: rev.avatarColor,
                      borderColor: `${rev.avatarColor}40`,
                    }}
                  >
                    {rev.avatarInitials}
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{rev.name}</div>
                    <div className={styles.authorRole}>{rev.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Controls: Navigation Arrows & Pagination Dots */}
      <div className={styles.controlsRow}>
        <button
          className={styles.arrowButton}
          onClick={handlePrev}
          aria-label="Previous review"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.paginationDots}>
          {reviews.map((_, dotIdx) => (
            <button
              key={dotIdx}
              className={`${styles.dot} ${
                dotIdx === activeRealIndex ? styles.dotActive : ''
              }`}
              onClick={() => handleDotClick(dotIdx)}
              aria-label={`Go to review ${dotIdx + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.arrowButton}
          onClick={handleNext}
          aria-label="Next review"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
