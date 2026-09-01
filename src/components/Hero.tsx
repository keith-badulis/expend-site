import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import { BankIcon, WalletIcon, PiggyBankIcon, CardIcon } from './icons';
import appScreenImg from '../assets/app-screen.png';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative Geometric Shapes Framing the Sides & Edges of the Section */}
      <div className={`${styles.edgeShape} ${styles.shapeTopLeft} ${styles.shapeReveal1}`} />
      <div className={`${styles.edgeShape} ${styles.shapeTopRight} ${styles.shapeReveal2}`} />
      <div className={`${styles.edgeShape} ${styles.shapeBottomLeft} ${styles.shapeReveal3}`} />
      <div className={`${styles.edgeShape} ${styles.shapeBottomRight} ${styles.shapeReveal4}`} />
      <div className={`${styles.edgeShape} ${styles.shapeMidRight} ${styles.shapeReveal5}`} />

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Animated App Logo & Orchestrated Typographic Reveal */}
          <div>
            {/* 1. Animated Logo (Starts immediately at T = 0.0s) */}
            <AnimatedLogo size={112} />

            {/* 2. Headline & Setup Text (Stagger 1: T = 0.45s) */}
            <div className={styles.revealHeadline} style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontSize: 'clamp(1.35rem, 2.6vw, 1.95rem)',
                fontWeight: 300,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
                display: 'block',
                marginBottom: '0.45rem',
                lineHeight: 1.25,
              }}>
                Tracking your finances is a chore.
              </span>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.8vw, 3.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                color: '#FFFFFF',
                margin: 0,
              }}>
                Let's make it{' '}
                <span style={{
                  color: 'var(--accent-light)',
                }}>
                  a habit.
                </span>
              </h1>
            </div>

            {/* 3. Subtext Paragraph (Stagger 2: T = 0.75s) */}
            <div className={styles.revealSubtext}>
              <p style={{
                fontSize: '1.12rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '520px',
                fontWeight: 400,
              }}>
                Take control of your money with <strong>eXpend</strong>—the thoughtfully-designed, all-in-one expense tracker and budget planner. Simplify personal finances, track spending habits, and reach your goals—all while keeping your data private and secure on your device.
              </p>
            </div>

            {/* 4. Official Download Badges (Stagger 3: T = 1.05s) */}
            <div className={styles.revealBadges}>
              <StoreBadges />
            </div>
          </div>

          {/* Right Column: Phone Mockup with 4 Floating Finance Icons */}
          <div className={styles.phoneMockupWrapper}>
            <div className={styles.phoneAnchor}>
              {/* 1. Radiant Backlight Aura (Separated Entrance Reveal & Interactive Glow) */}
              <div className={`${styles.phoneAuraContainer} ${styles.auraReveal}`}>
                <div className={styles.phoneBacklightAura} />
              </div>

              {/* 2. Emanating Concentric Ripple Rings (Separated Entrance Reveal & Breathing Loops) */}
              <div className={`${styles.phoneRingsContainer} ${styles.ringsReveal}`}>
                <div className={`${styles.phoneRingWrap} ${styles.ringWrap1}`}>
                  <div className={`${styles.phoneEmanatingRing} ${styles.ring1} ${styles.pulseLoop1}`} />
                </div>
                <div className={`${styles.phoneRingWrap} ${styles.ringWrap2}`}>
                  <div className={`${styles.phoneEmanatingRing} ${styles.ring2} ${styles.pulseLoop2}`} />
                </div>
              </div>

              {/* 3. Emanating Pure Vector Money Icons (Separated Entrance Reveal & Floating Loops) */}
              <div className={`${styles.financeIconAnchor} ${styles.iconPosBank} ${styles.iconReveal1}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float1}`}>
                    <BankIcon size={34} color="var(--accent-light)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosWallet} ${styles.iconReveal2}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float2}`}>
                    <WalletIcon size={36} color="var(--accent-light)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosPiggy} ${styles.iconReveal3}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float3}`}>
                    <PiggyBankIcon size={35} color="var(--accent-light)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosCard} ${styles.iconReveal4}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float1}`}>
                    <CardIcon size={34} color="var(--accent-light)" />
                  </div>
                </div>
              </div>

              {/* 4. Phone Device Container (Separated entrance reveal & interactive mockup) */}
              <div className={`${styles.phoneDeviceContainer} ${styles.phoneReveal}`}>
                <div className={styles.phoneMockup}>
                  <div className={styles.phoneScreen}>
                    <img
                      src={appScreenImg}
                      alt="eXpend App Home Screen"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
