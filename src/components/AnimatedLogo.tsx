import React, { useState, useEffect, useRef } from 'react';
import appLogoImg from '../assets/app-logo.png';
import styles from './AnimatedLogo.module.css';

interface AnimatedLogoProps {
  size?: number;
  showText?: boolean;
  animateOnScroll?: boolean;
  interactive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = 112,
  showText = true,
  animateOnScroll = false,
  interactive = true,
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
    if (!interactive) return;
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
      className={`${styles.container} ${className}`}
      onClick={interactive ? triggerAnimation : undefined}
      title={interactive ? 'Click to animate' : undefined}
      style={{
        marginBottom: showText ? undefined : '0',
        userSelect: 'none',
        cursor: interactive ? 'pointer' : 'default',
        ['--logo-frame-size' as any]: `${size}px`,
        ...style,
      }}
    >
      {/* 
        Parent Frame:
        1. Rotating Squircle Shape with unified attached shadow & glow
        2. Static Upright Logo Image (does NOT rotate)
      */}
      <div
        className={styles.logoFrame}
        style={{
          width: 'var(--logo-frame-size)',
          height: 'var(--logo-frame-size)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Layer 1: Unified Rotating Squircle Background */}
        <div
          className={`${styles.squircleShape} ${
            isSpinning ? styles.spinManual : animateOnScroll && !hasScrolledIn ? '' : styles.spinInitial
          }`}
        />

        {/* Layer 2: Static Upright Logo Image (Shifted 2px right to align circular coil) */}
        <div
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
            className={isSpinning || (!animateOnScroll) ? styles.innerImg : ''}
            style={{
              width: 'calc(var(--logo-frame-size) * 0.66)',
              height: 'calc(var(--logo-frame-size) * 0.66)',
              display: 'block',
              objectFit: 'contain',
              opacity: animateOnScroll && !hasScrolledIn ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          />
        </div>
      </div>

      {showText && (
        <div className={styles.brandText}>
          <span className={styles.brandName}>eXpend</span>
          <span className={styles.brandSub}>Make budgeting a habit</span>
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;
