import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import {
  BankIcon,
  PiggyBankIcon,
  CardIcon,
  AirplaneIcon,
  WalletIcon,
} from './icons';
import appScreenImg from '../assets/app-screen.png';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Animated App Logo & Orchestrated Typographic Reveal */}
          <div>
            {/* 1. Animated Logo */}
            <AnimatedLogo size={56} />

            {/* 2. Headline & Setup Text */}
            <div className={styles.revealHeadline}>
              <span className={styles.heroPreTitle}>
                Tracking your finances is a chore.
              </span>

              <h1 className={styles.heroMainTitle}>
                Let's make it a habit.
              </h1>
            </div>

            {/* 3. Official Download Badges */}
            <div className={styles.revealBadges}>
              <StoreBadges />
            </div>
          </div>

          {/* Right Column: 3D Perspective Phone Stage with Orbiting Highlights & Layered App Components */}
          <div className={styles.phoneMockupWrapper}>
            {/* Dedicated Background Layer (Atmospheric Ambient Aura) */}
            <div className={styles.phoneBackdropGroup}>
              {/* Elegant Radiant Multi-Tone Backlight Aura */}
              <div className={`${styles.phoneAuraContainer} ${styles.auraReveal}`}>
                <div className={styles.phoneBacklightAura} />
                <div className={styles.phoneAuraSecondary} />
              </div>
            </div>

            {/* Interactive Phone Mockup & Floating Overlay Components */}
            <div className={styles.phoneAnchor}>
              {/* Layer 3: Phone Device Container (Single Sleek Hardware Bezel) */}
              <div className={`${styles.phoneDeviceContainer} ${styles.phoneReveal}`}>
                <div className={styles.phoneMockup}>
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

              {/* Layer 4: Emanating Pure Vector Money Icons in Vibrant Blue */}
              <div className={`${styles.financeIconAnchor} ${styles.iconPosBank} ${styles.iconReveal1}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float1}`}>
                    <BankIcon size={34} color="var(--accent-color)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosCard} ${styles.iconReveal2}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float2}`}>
                    <CardIcon size={34} color="var(--accent-color)" />
                  </div>
                </div>
              </div>

              <div className={`${styles.financeIconAnchor} ${styles.iconPosPiggy} ${styles.iconReveal3}`}>
                <div className={styles.emanatingFinanceIcon}>
                  <div className={`${styles.financeIconInner} ${styles.float3}`}>
                    <PiggyBankIcon size={35} color="var(--accent-color)" />
                  </div>
                </div>
              </div>

              {/* Layer 5: Authentic eXpend App Component 1: Savings WalletItem (Top-Left) */}
              <div className={`${styles.appFloatingCard} ${styles.walletCardWrap} ${styles.cardReveal1}`}>
                <div className={styles.walletCardGradient}>
                  {/* Top Squircle Icon (Matches App's Wallet Icon) */}
                  <div className={styles.walletIconSquircle}>
                    <WalletIcon size={16} color="#FFFFFF" strokeWidth="6.5px" />
                  </div>

                  <div className={styles.walletDetails}>
                    <div className={styles.walletName}>Savings</div>
                    <div className={styles.walletAmount}>$2,247.99</div>
                  </div>
                </div>
              </div>

              {/* Layer 5: Authentic eXpend App Component 2: Vacation GoalListItem (Bottom-Right, in LIGHT MODE) */}
              <div className={`${styles.appFloatingCard} ${styles.goalCardWrap} ${styles.cardReveal2}`}>
                <div className={styles.goalCardBody}>
                  <div className={styles.goalTopRow}>
                    {/* Orange Squircle Icon with Airplane */}
                    <div className={styles.goalIconSquircle}>
                      <AirplaneIcon size={18} color="#FFFFFF" strokeWidth="6.25px" />
                    </div>

                    <div className={styles.goalInfo}>
                      <div className={styles.goalTitle}>Vacation</div>
                      <div className={styles.goalAmountRow}>
                        <span className={styles.goalNumbers}>$3,250.00 / $5,000.00</span>
                        <span className={styles.goalPercent}>65%</span>
                      </div>
                    </div>
                  </div>

                  {/* Real eXpend Goal Progress Bar */}
                  <div className={styles.goalProgressTrack}>
                    <div className={styles.goalProgressFill} style={{ width: '65%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center-Bottom Animated Scroll Guide */}
      <a
        href="#features"
        className={styles.scrollGuide}
        aria-label="Scroll down to view features"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className={styles.scrollGuideText}>Explore Features</span>
        <svg
          className={styles.scrollChevron}
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
