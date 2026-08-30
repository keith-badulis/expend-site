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
        gap: '1.25rem',
        marginBottom: '2rem',
        userSelect: 'none',
      }}
    >
      {/* Outer Spring Rotating Rounded Square Box (Only this rotates & transitions color) */}
      <div
        className={`logo-bounding-box ${isSpinning ? 'spin-manual' : 'spin-initial'}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {/* Inner App Logo Graphic (Does NOT rotate; shifted slightly right so the circular part aligns with the squircle) */}
        <div
          style={{
            transform: `translateX(${Math.ceil(size * 0.04)}px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={appLogoImg}
            alt="eXpend Logo"
            className="logo-inner-img"
            style={{
              width: `${Math.round(size * 0.65)}px`,
              height: `${Math.round(size * 0.65)}px`,
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
