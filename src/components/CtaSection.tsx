import React from 'react';
import { StoreBadges } from './StoreBadges';
import appIcon from '../assets/app-icon.png';

export const CtaSection: React.FC = () => {
  return (
    <section id="download" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="bold-card"
          style={{
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3.5rem)',
            background: 'linear-gradient(145deg, #172036 0%, #1F2A47 100%)',
            border: '4px solid var(--accent-color)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px var(--accent-glow)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Shapes inside the card, clipped to corners */}
          <div
            className="edge-shape ring"
            style={{
              width: '300px',
              height: '300px',
              top: '-120px',
              right: '-100px',
            }}
          />
          <div
            className="edge-shape square"
            style={{
              width: '180px',
              height: '180px',
              bottom: '-70px',
              left: '-50px',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <img
                src={appIcon}
                alt="eXpend App Icon"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  border: '3.5px solid var(--accent-color)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 25px var(--accent-glow)',
                }}
              />
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              letterSpacing: '-0.025em',
            }}>
              Ready to Make Budgeting <br />
              <span style={{ color: 'var(--accent-light)' }}>a Permanent Habit?</span>
            </h2>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
            }}>
              Download eXpend on Android and iOS. Free, private, and built to make managing everyday money effortless.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1.75rem',
            }}>
              <StoreBadges />
            </div>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              margin: 0,
            }}>
              No sign-up required • Instant setup • 100% on your device
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
