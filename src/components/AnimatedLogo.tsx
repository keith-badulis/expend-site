import React, { useState, useEffect, useRef } from 'react';
import appLogoImg from '../assets/app-logo.png';

interface AnimatedLogoProps {
  size?: number;
  showText?: boolean;
  animateOnScroll?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 104,
  showText = true,
  animateOnScroll = false,
  style,
  className = '',
}) => {
  const [isSpinning, setIsSpinning] = useState(!animateOnScroll);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animateOnScroll || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolledIn) {
            setHasScrolledIn(true);
            setIsSpinning(false);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIsSpinning(true);
              });
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOnScroll, hasScrolledIn]);

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
      ref={containerRef}
      className={`animated-logo-container ${className}`}
      onClick={triggerAnimation}
      title="Click to animate"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1.25rem',
        marginBottom: showText ? '2rem' : '0',
        userSelect: 'none',
        cursor: 'pointer',
        ...style,
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
        {/* Layer 1: Unified Rotating Squircle Background (Circle -> 38px Squircle) */}
        <div
          className={`logo-squircle-shape ${
            isSpinning ? 'spin-manual' : animateOnScroll && !hasScrolledIn ? '' : 'spin-initial'
          }`}
        />

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
            className={isSpinning || (!animateOnScroll) ? 'logo-inner-img' : ''}
            style={{
              width: `${Math.round(size * 0.66)}px`,
              height: `${Math.round(size * 0.66)}px`,
              display: 'block',
              objectFit: 'contain',
              opacity: animateOnScroll && !hasScrolledIn ? 0 : 1,
              transition: 'opacity 0.4s ease',
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

export default AnimatedLogo;
