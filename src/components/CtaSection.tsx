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
            Make Budgeting a Habit. <br />
            <span style={{ color: 'var(--accent-light)' }}>Download eXpend Today.</span>
          </h2>

          {/* Subtext */}
          <p className={styles.ctaDescription}>
            Take control of your daily finances with a fast, distraction-free expense tracker designed to keep you consistent. 100% offline, zero ads, and no monthly subscriptions.
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
              <span>No Ads or Sign-Ups</span>
            </span>

            <span className={styles.ctaGuaranteeSeparator}>•</span>

            <span className={styles.ctaGuaranteeItem}>
              <DiamondIcon size={14} color="#4C74DB" />
              <span>Pay Once, Own Forever</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
