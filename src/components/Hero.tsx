import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import {
  BankIcon,
  PiggyBankIcon,
  CardIcon,
} from './icons';
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

          {/* Right Column: 3D Perspective Phone Stage with Orbiting Highlights & Layered App Components */}
          <div className={styles.phoneMockupWrapper}>
            {/* Dedicated Background Layer (Guaranteed Behind Phone & Chips) */}
            <div className={styles.phoneBackdropGroup}>
              {/* Layer 1: Radiant Backlight Aura */}
              <div className={`${styles.phoneAuraContainer} ${styles.auraReveal}`}>
                <div className={styles.phoneBacklightAura} />
              </div>

              {/* Layer 2: Emanating Concentric Ripple Rings */}
              <div className={`${styles.phoneRingsContainer} ${styles.ringsReveal}`}>
                <div className={`${styles.phoneRingWrap} ${styles.ringWrap1}`}>
                  <div className={`${styles.phoneEmanatingRing} ${styles.ring1} ${styles.pulseLoop1}`} />
                </div>
                <div className={`${styles.phoneRingWrap} ${styles.ringWrap2}`}>
                  <div className={`${styles.phoneEmanatingRing} ${styles.ring2} ${styles.pulseLoop2}`} />
                </div>
              </div>
            </div>

            {/* Interactive Phone Mockup & Floating Overlay Components */}
            <div className={styles.phoneAnchor}>
              {/* Layer 3: Phone Device Container (Centerpiece hardware) */}
              <div className={`${styles.phoneDeviceContainer} ${styles.phoneReveal}`}>
                <div className={styles.phoneMockup}>
                  {/* Dynamic Island Notch */}
                  <div className={styles.dynamicIsland}>
                    <div className={styles.cameraLens} />
                  </div>

                  {/* Specular Diagonal Glass Sheen */}
                  <div className={styles.screenSheen} />

                  <div className={styles.phoneScreen}>
                    <img
                      src={appScreenImg}
                      alt="eXpend App Home Screen"
                    />
                  </div>
                </div>
              </div>

              {/* Layer 4: Emanating Pure Vector Money Icons (Floating in front of phone) */}
              <div className={`${styles.financeIconAnchor} ${styles.iconPosBank} ${styles.iconReveal1}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float1}`}>
                    <BankIcon size={34} color="var(--accent-light)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosCard} ${styles.iconReveal2}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float2}`}>
                    <CardIcon size={34} color="var(--accent-light)" />
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

              {/* Layer 5: Authentic eXpend App Component 1 — Maya WalletItem (Top-Left) */}
              <div className={`${styles.appFloatingCard} ${styles.walletCardWrap} ${styles.cardReveal1}`}>
                <div className={styles.walletCardGradient}>
                  {/* Top Squircle Icon (Matches App's Phone Icon) */}
                  <div className={styles.walletIconSquircle}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="3" />
                      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                    </svg>
                  </div>

                  <div className={styles.walletDetails}>
                    <div className={styles.walletName}>Maya</div>
                    <div className={styles.walletAmount}>$2,247.99</div>
                  </div>
                </div>
              </div>

              {/* Layer 5: Authentic eXpend App Component 2 — Emergency Fund GoalListItem (Bottom-Right) */}
              <div className={`${styles.appFloatingCard} ${styles.goalCardWrap} ${styles.cardReveal2}`}>
                <div className={styles.goalCardBody}>
                  <div className={styles.goalTopRow}>
                    {/* Lime Squircle Icon (Matches App's Goal Plus Icon) */}
                    <div className={styles.goalIconSquircle}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="6" x2="12" y2="18" />
                        <line x1="6" y1="12" x2="18" y2="12" />
                      </svg>
                    </div>

                    <div className={styles.goalInfo}>
                      <div className={styles.goalTitle}>Emergency Fund</div>
                      <div className={styles.goalAmountRow}>
                        <span className={styles.goalNumbers}>$9,656.00 / $50,000.00</span>
                        <span className={styles.goalPercent}>19%</span>
                      </div>
                    </div>
                  </div>

                  {/* Real eXpend Goal Progress Bar */}
                  <div className={styles.goalProgressTrack}>
                    <div className={styles.goalProgressFill} style={{ width: '19%' }} />
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
