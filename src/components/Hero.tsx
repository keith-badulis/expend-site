import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import { BankIcon, WalletIcon, PiggyBankIcon, CardIcon } from './icons';
import appScreenImg from '../assets/app-screen.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Decorative Geometric Shapes Framing the Sides & Edges of the Section */}
      <div className="hero-edge-shape hero-shape-top-left shape-reveal-1" />
      <div className="hero-edge-shape hero-shape-top-right shape-reveal-2" />
      <div className="hero-edge-shape hero-shape-bottom-left shape-reveal-3" />
      <div className="hero-edge-shape hero-shape-bottom-right shape-reveal-4" />
      <div className="hero-edge-shape hero-shape-mid-right shape-reveal-5" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Animated App Logo & Orchestrated Typographic Reveal */}
          <div>
            {/* 1. Animated Logo (Starts immediately at T = 0.0s) */}
            <AnimatedLogo size={112} />

            {/* 2. Headline & Setup Text (Stagger 1: T = 0.45s) */}
            <div className="hero-reveal-headline" style={{ marginBottom: '1.5rem' }}>
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
            <div className="hero-reveal-subtext">
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
            <div className="hero-reveal-badges">
              <StoreBadges />
            </div>
          </div>

          {/* Right Column: Phone Mockup with 4 Floating Finance Icons */}
          <div className="phone-mockup-wrapper">
            <div className="phone-anchor">
              {/* 1. Radiant Backlight Aura */}
              <div className="phone-backlight-aura" />

              {/* 2. Emanating Concentric Ripple Rings */}
              <div className="phone-emanating-ring ring-1" />
              <div className="phone-emanating-ring ring-2" />

              {/* 3. Emanating Pure Vector Money Icons (Seamless Entrance + Continuous Float) */}
              <div className="emanating-finance-icon icon-bank">
                <div className="finance-icon-inner float-1">
                  <BankIcon size={34} color="var(--accent-light)" />
                </div>
              </div>
              <div className="emanating-finance-icon icon-wallet">
                <div className="finance-icon-inner float-2">
                  <WalletIcon size={36} color="var(--accent-light)" />
                </div>
              </div>
              <div className="emanating-finance-icon icon-piggy">
                <div className="finance-icon-inner float-3">
                  <PiggyBankIcon size={35} color="var(--accent-light)" />
                </div>
              </div>
              <div className="emanating-finance-icon icon-card">
                <div className="finance-icon-inner float-1">
                  <CardIcon size={34} color="var(--accent-light)" />
                </div>
              </div>

              {/* 4. Phone Device Container (Separated entrance reveal & interactive mockup) */}
              <div className="phone-device-container phone-reveal">
                <div className="phone-mockup">
                  <div className="phone-screen">
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
