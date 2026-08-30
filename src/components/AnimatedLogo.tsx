import React, { useState } from 'react';
import appLogoImg from '../assets/app-logo.png';

interface AnimatedLogoProps {
  size?: number;
  showText?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 84, showText = true }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const triggerAnimation = () => {
    setIsSpinning(false);
    // Force DOM reflow to re-trigger CSS animation
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
        gap: '1rem',
        marginBottom: '2rem',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Outer Spring Rotating Rounded Square Box */}
      <div
        className={`logo-bounding-box ${isSpinning ? 'spin-manual' : 'spin-initial'}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Inner App Logo Graphic */}
        <img
          src={appLogoImg}
          alt="eXpend Logo"
          className="logo-inner-img"
          style={{
            width: `${Math.round(size * 0.68)}px`,
            height: `${Math.round(size * 0.68)}px`,
          }}
        />
      </div>

      {showText && (
        <div className="logo-brand-text">
          <span className="logo-brand-name">eXpend</span>
          <span className="logo-brand-sub">Personal Finance</span>
        </div>
      )}
    </div>
  );
};
