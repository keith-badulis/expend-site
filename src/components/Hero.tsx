import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import {
  BankIcon,
  PiggyBankIcon,
  CardIcon,
  AirplaneIcon,
  WalletIcon,
  LockIcon,
  LightningBoltIcon,
  CoinIcon,
} from './icons';
import appScreenImg from '../assets/app-screen.png';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* 1. Ambient Aurora Mesh & Radial Glow Orbs */}
      <div className={styles.heroAuroraContainer} aria-hidden="true">
        <div className={`${styles.auroraOrb} ${styles.auroraOrbEmerald}`} />
        <div className={`${styles.auroraOrb} ${styles.auroraOrbCobalt}`} />
        <div className={`${styles.auroraOrb} ${styles.auroraOrbSunset}`} />
      </div>

      {/* 2. Delicate Radial Masked Dot Matrix Grid */}
      <div className={styles.heroDotGrid} aria-hidden="true" />

      {/* 3. Subtle Boundary Seam Light Sweeps */}
      <div className={styles.topLightSweep} aria-hidden="true" />
      <div className={styles.bottomLightSweep} aria-hidden="true" />

      {/* 4. Floating Frosted Glass Micro-Cards */}
      {/* Badge 1: Private & Offline (Top-Right) */}
      <div className={`${styles.perimeterGlassCard} ${styles.glassCardOffline} ${styles.glassReveal1}`}>
        <div className={`${styles.glassCardInner} ${styles.floatCardA}`}>
          <div className={styles.glassIconSquircleEmerald}>
            <LockIcon size={16} color="#0DBF96" strokeWidth="6.25px" />
          </div>
          <div className={styles.glassCardContent}>
            <span className={styles.glassCardTitle}>Private & Offline</span>
            <span className={styles.glassCardSub}>No Accounts</span>
          </div>
        </div>
      </div>

      {/* Badge 2: Quickly Record Transactions (Top-Left) */}
      <div className={`${styles.perimeterGlassCard} ${styles.glassCardHierarchy} ${styles.glassReveal2}`}>
        <div className={`${styles.glassCardInner} ${styles.floatCardB}`}>
          <div className={styles.glassIconSquircleSunset}>
            <LightningBoltIcon size={16} color="#EF8354" strokeWidth="6.25px" />
          </div>
          <div className={styles.glassCardContent}>
            <span className={styles.glassCardTitle}>Quickly Record Transactions</span>
            <span className={styles.glassCardSub}>Apply Templates to Eliminate the Hassle!</span>
          </div>
        </div>
      </div>

      {/* Badge 3: Zero Subscriptions (Bottom-Left) */}
      <div className={`${styles.perimeterGlassCard} ${styles.glassCardBudgets} ${styles.glassReveal3}`}>
        <div className={`${styles.glassCardInner} ${styles.floatCardC}`}>
          <div className={styles.glassIconSquircleCobalt}>
            <CoinIcon size={16} color="#7094F0" strokeWidth="6.25px" />
          </div>
          <div className={styles.glassCardContent}>
            <span className={styles.glassCardTitle}>Zero Subscriptions</span>
            <span className={styles.glassCardSub}>Pay Once, Premium Forever</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Animated App Logo & Orchestrated Typographic Reveal */}
          <div>
            {/* 1. Animated Logo (Starts immediately at T = 0.0s) */}
            <AnimatedLogo size={112} />

            {/* 2. Headline & Setup Text (Stagger 1: T = 0.45s) */}
            <div className={styles.revealHeadline}>
              <span className={styles.heroPreTitle}>
                Tracking your finances is a chore.
              </span>

              <h1 className={styles.heroMainTitle}>
                Let's make it{' '}
                <span style={{ color: 'var(--accent-light)' }}>
                  a habit.
                </span>
              </h1>
            </div>

            {/* 3. Subtext Paragraph (Stagger 2: T = 0.75s) */}
            <div className={styles.revealSubtext}>
              <p className={styles.heroDescription}>
                Track daily expenses, set flexible budgets, and reach your goals, 100% privately on your device with no monthly subscriptions.
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

              {/* Layer 5: Authentic eXpend App Component 2: Vacation GoalListItem (Bottom-Right) */}
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
    </section>
  );
};

export default Hero;
