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
                fontSize: 'clamp(2.5rem, 5.2vw, 3.9rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: '#FFFFFF',
                margin: 0,
              }}>
                Let's make it{' '}
                <span style={{
                  color: 'var(--accent-light)',
                  borderBottom: '5px solid var(--accent-color)',
                  display: 'inline-block',
                  paddingBottom: '2px',
                }}>
                  a habit.
                </span>
              </h1>
            </div>

            {/* 3. Subtext Paragraph (Stagger 2: T = 0.75s) */}
            <div className="hero-reveal-subtext">
              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2.25rem',
                maxWidth: '480px',
                fontWeight: 400,
              }}>
                Effortless daily tracking, smart budgets, and goal planning—100% private on your phone with zero accounts or subscriptions.
              </p>
            </div>

            {/* 4. Official Download Badges & Stars (Stagger 3: T = 1.05s) */}
            <div className="hero-reveal-badges">
              <StoreBadges />

              <div className="rating-wrapper" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginTop: '1.75rem',
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
              }}>
                <span style={{ color: '#FFB800', letterSpacing: '2px', fontSize: '1.15rem' }}>★★★★★</span>
                <span><strong>4.9/5</strong> rating from happy budgeters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Shapes Animating Outward from Screenshot */}
          <div className="phone-mockup-wrapper">
            <div className="phone-anchor">
              {/* The 5 Geometric Shapes (Burst Outward from Screenshot at T = 1.6s - 2.0s) */}
              {/* 1. Large Ring (240px) */}
              <div className="chunky-shape chunky-ring-lg shape-reveal-1" />

              {/* 2. Rotated Rounded Square (180px) */}
              <div className="chunky-shape chunky-square-md shape-reveal-2" />

              {/* 3. Small Ring (76px) */}
              <div className="chunky-shape chunky-ring-sm shape-reveal-3" />

              {/* 4. Dashed Ring (140px) */}
              <div className="chunky-shape chunky-dashed-md shape-reveal-4" />

              {/* 5. Tilted Pill (115px x 48px) */}
              <div className="chunky-shape chunky-pill shape-reveal-5" />

              {/* Phone device container (Reveals at T = 1.35s) */}
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
