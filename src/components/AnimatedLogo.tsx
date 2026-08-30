import React, { useState } from 'react';
import appLogoImg from '../assets/app-logo.png';

interface AnimatedLogoProps {
  size?: number;
  showText?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 104, showText = true }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const triggerAnimation = () => {
    setIsSpinning(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsSpinning(true);
      });
    });
  };

  return (
    <div
      className="animated-logo-container"
      onClick={triggerAnimation}
      title="Click to animate"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1.25rem',
        marginBottom: '2rem',
        userSelect: 'none',
      }}
    >
      {/* 
        Parent Frame:
        1. Rotating Squircle Shape with unified attached shadow & glow
        2. Static Upright Logo Image (does NOT rotate)
      */}
      <div
        className="logo-frame"
        style={{
          position: 'relative',
          width: `${size}px`,
          height: `${size}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Layer 1: Unified Rotating Squircle Background (Circle -> 30px Squircle) */}
        <div className={`logo-squircle-shape ${isSpinning ? 'spin-manual' : 'spin-initial'}`} />

        {/* Layer 2: Static Upright Logo Image (Shifted 2px right to align circular coil) */}
        <div
          className="logo-graphic-wrapper"
          style={{
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateX(2px)',
          }}
        >
          <img
            src={appLogoImg}
            alt="eXpend Logo"
            className="logo-inner-img"
            style={{
              width: `${Math.round(size * 0.66)}px`,
              height: `${Math.round(size * 0.66)}px`,
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {showText && (
        <div className="logo-brand-text">
          <span className="logo-brand-name">eXpend</span>
          <span className="logo-brand-sub">Make budgeting a habit</span>
        </div>
      )}
    </div>
  );
};
