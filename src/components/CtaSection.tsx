import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import { LockIcon, SparklesIcon, DiamondIcon } from './icons';
import styles from './CtaSection.module.css';

export const CtaSection: React.FC = () => {
  return (
    <section id="download" className={`section ${styles.ctaOpenSection}`}>
      {/* Radiant Spotlight Background Aura */}
      <div className={styles.ctaSpotlightAura} />

      <div className="container">
        <div className={styles.ctaInnerContent}>
          {/* Animated Brand Logo (Scroll-triggered Squircle Morph Spin, non-clickable) */}
          <div className={styles.ctaIconWrapper}>
            <AnimatedLogo
              size={112}
              showText={false}
              animateOnScroll={true}
              interactive={false}
            />
          </div>

          {/* Main Headline */}
          <h2 className={styles.ctaHeadline}>
            Let's Make Budgeting a Habit. <br />
            <span style={{ color: 'var(--accent-light)' }}>Download eXpend Today.</span>
          </h2>

          {/* Subtext */}
          <p className={styles.ctaDescription}>
            Take control of your personal finances with a simple, thoughtfully-designed expense tracker and budget planner. Everything stays locally on your device, with no ads, no trackers, and no monthly subscriptions.
          </p>

          {/* Store Download Badges */}
          <div className={styles.ctaBadgesWrap}>
            <StoreBadges />
          </div>

          {/* Feature Guarantee Micro-Pills */}
          <div className={styles.ctaGuaranteePills}>
            <span className={styles.ctaGuaranteeItem}>
              <LockIcon size={14} color="#0BB190" />
              <span>100% Offline & Private</span>
            </span>

            <span className={styles.ctaGuaranteeSeparator}>•</span>

            <span className={styles.ctaGuaranteeItem}>
              <SparklesIcon size={14} color="#9957BD" />
              <span>No Ads or Tracking</span>
            </span>

            <span className={styles.ctaGuaranteeSeparator}>•</span>

            <span className={styles.ctaGuaranteeItem}>
              <DiamondIcon size={14} color="#4C74DB" />
              <span>One-Time Payment, Lifetime Access</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
