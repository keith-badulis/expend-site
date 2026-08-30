import React from 'react';
import { StoreBadges } from './StoreBadges';
import { AnimatedLogo } from './AnimatedLogo';
import appScreenImg from '../assets/app-screen.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Animated App Logo & Typographic hierarchy */}
          <div>
            {/* Animated Logo (Replicating App Setup Wizard) */}
            <AnimatedLogo size={78} />

            <div style={{ marginBottom: '1.5rem' }}>
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

            {/* Official Crisp SVG Brand Download Badges */}
            <StoreBadges />

            {/* Store Rating summary */}
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

          {/* Right Column: Phone Mockup with the 5 Geometric Shapes */}
          <div className="phone-mockup-wrapper">
            <div className="phone-anchor">
              {/* 1. Large Ring (240px, 9.5px stroke + breathing animation) */}
              <div className="chunky-shape chunky-ring-lg" />

              {/* 2. Rotated Rounded Square (180px, 7.5px stroke, 18deg tilt) */}
              <div className="chunky-shape chunky-square-md" />

              {/* 3. Small Ring (76px, 4.5px stroke) */}
              <div className="chunky-shape chunky-ring-sm" />

              {/* 4. Dashed Ring (140px, 5px dashed stroke) */}
              <div className="chunky-shape chunky-dashed-md" />

              {/* 5. Tilted Pill (115px x 48px, 6px stroke, -28deg tilt) */}
              <div className="chunky-shape chunky-pill" />

              {/* Phone device container */}
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
    </section>
  );
};
