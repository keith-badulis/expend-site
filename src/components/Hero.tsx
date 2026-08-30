import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import appScreenImg from '../assets/app-screen.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Animated App Logo & Orchestrated Typographic Reveal */}
          <div>
            {/* 1. Animated Logo (Starts immediately at T = 0.0s) */}
            <AnimatedLogo size={104} />

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

          {/* Right Column: Phone Mockup with Shapes Animating Outward from Screenshot */}
          <div className="phone-mockup-wrapper">
            <div className="phone-anchor">
              {/* The 5 Geometric Shapes with Balanced Open-Space Placements */}
              {/* 1. Large Ring (210px) - Floating free in upper-right open space */}
              <div className="chunky-shape chunky-ring-lg shape-reveal-1" />

              {/* 2. Rotated Rounded Square (170px) - Lower-left corner anchor */}
              <div className="chunky-shape chunky-square-md shape-reveal-2" />

              {/* 3. Small Ring (72px) - Upper-left accent */}
              <div className="chunky-shape chunky-ring-sm shape-reveal-3" />

              {/* 4. Dashed Ring (140px) - Lower-right anchor */}
              <div className="chunky-shape chunky-dashed-md shape-reveal-4" />

              {/* 5. Tilted Pill (115px x 46px) - Floating free in mid-right open space */}
              <div className="chunky-shape chunky-pill shape-reveal-5" />

              {/* Phone device container (Reveals at T = 1.25s) */}
              <div className="phone-mockup phone-reveal">
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
    </section>
  );
};
