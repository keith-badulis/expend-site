import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import { LockIcon, SparklesIcon, DiamondIcon } from './icons';

export const CtaSection: React.FC = () => {
  return (
    <section id="download" className="section cta-open-section">
      {/* Radiant Spotlight Background Aura */}
      <div className="cta-spotlight-aura" />

      <div className="container">
        <div className="cta-inner-content">
          {/* Animated Brand Logo (Scroll-triggered Squircle Morph Spin, non-clickable) */}
          <div className="cta-icon-wrapper">
            <AnimatedLogo
              size={112}
              showText={false}
              animateOnScroll={true}
              interactive={false}
            />
          </div>

          {/* Main Headline */}
          <h2 className="cta-headline">
            Make Budgeting a Habit. <br />
            <span style={{ color: 'var(--accent-light)' }}>Download eXpend Today.</span>
          </h2>

          {/* Subtext */}
          <p className="cta-description">
            Take control of your daily finances with a fast, distraction-free expense tracker designed to keep you consistent. 100% offline, zero ads, and no monthly subscriptions.
          </p>

          {/* Store Download Badges */}
          <div className="cta-badges-wrap">
            <StoreBadges />
          </div>

          {/* Feature Guarantee Micro-Pills */}
          <div className="cta-guarantee-pills">
            <span className="cta-guarantee-item">
              <LockIcon size={14} color="#0BB190" />
              <span>100% Offline & Private</span>
            </span>

            <span className="cta-guarantee-separator">•</span>

            <span className="cta-guarantee-item">
              <SparklesIcon size={14} color="#9957BD" />
              <span>No Ads or Sign-Ups</span>
            </span>

            <span className="cta-guarantee-separator">•</span>

            <span className="cta-guarantee-item">
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
