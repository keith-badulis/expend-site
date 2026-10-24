import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import styles from './CtaSection.module.css';

export const CtaSection: React.FC = () => {
  return (
    <section id="download" className={`section ${styles.ctaOpenSection}`}>
      <div className="container">
        <div className={styles.ctaCardContainer}>
          <div className={styles.ctaInnerContent}>
            {/* Animated Brand Logo */}
            <div className={styles.ctaIconWrapper}>
              <AnimatedLogo
                size={96}
                showText={false}
                animateOnScroll={true}
                interactive={false}
              />
            </div>

            {/* Main Headline */}
            <h2 className={styles.ctaHeadline}>
              Let's Make Budgeting a Habit. <br />
              <span className={styles.ctaHighlight}>Download eXpend Today.</span>
            </h2>

            {/* Subtext */}
            <p className={styles.ctaDescription}>
              Take control of your personal finances with a simple, private expense tracker. 100% on-device, zero ads, and no monthly subscriptions.
            </p>

            {/* Store Download Badges */}
            <div className={styles.ctaBadgesWrap}>
              <StoreBadges />
            </div>

            {/* Trust Points */}
            <div className={styles.ctaTrustRow}>
              <span>✓ 100% On-Device Persistence</span>
              <span>•</span>
              <span>✓ Pay Once, Lifetime Premium</span>
              <span>•</span>
              <span>✓ No Account Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
