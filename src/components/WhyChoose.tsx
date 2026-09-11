import React, { useEffect, useRef, useState } from 'react';
import {
  LockIcon,
  DiamondIcon,
  SparklesIcon,
  LightningBoltIcon,
  CheckIcon,
  PaletteIcon,
  WalletIcon,
  CoinIcon,
  StarOutlineIcon,
  CloudBackupIcon,
  TagIcon,
} from './icons';
import styles from './WhyChoose.module.css';

interface PillarCard {
  index: string;
  category: string;
  title: string;
  description: string;
  highlight: string;
  accentColor: string;
  kickerColor: string;
  borderColor: string;
  iconBg: string;
  glowColor: string;
  ambientGlow: string;
  glareColor: string;
  icon: React.ReactNode;
}

export const WhyChoose: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [cardsEntered, setCardsEntered] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars: PillarCard[] = [
    {
      index: '01',
      category: 'Private & Secure',
      title: 'Your data never leaves your device.',
      description:
        'Completely serverless app design. No servers, no tracking, and no ads. Your data is yours and only yours, always.',
      highlight: '100% On-Device & Offline',
      accentColor: '#0BB190',
      kickerColor: '#0BB190',
      borderColor: 'rgba(11, 177, 144, 0.3)',
      iconBg: 'rgba(11, 177, 144, 0.12)',
      glowColor: 'rgba(11, 177, 144, 0.15)',
      ambientGlow: 'rgba(11, 177, 144, 0.08)',
      glareColor: 'rgba(215, 252, 245, 0.035)',
      icon: <LockIcon size={22} color="#0BB190" />,
    },
    {
      index: '02',
      category: 'One-Time Payment',
      title: 'Zero monthly subscriptions.',
      description:
        'Unlock the full power of eXpend with a single one-time purchase. No recurring subscriptions, and every future update is included forever.',
      highlight: 'Pay Once • Lifetime Access',
      accentColor: '#4C74DB',
      kickerColor: '#7094F0',
      borderColor: 'rgba(76, 116, 219, 0.3)',
      iconBg: 'rgba(76, 116, 219, 0.12)',
      glowColor: 'rgba(76, 116, 219, 0.18)',
      ambientGlow: 'rgba(76, 116, 219, 0.10)',
      glareColor: 'rgba(225, 238, 255, 0.035)',
      icon: <CoinIcon size={22} color="#4C74DB" />,
    },
    {
      index: '03',
      category: 'User-Friendly & Intuitive',
      title: 'Log transactions in seconds.',
      description:
        'A clean, modern interface with a built-in keypad calculator and reusable templates. Record income, expenses, and money transfers easily and effortlessly.',
      highlight: 'Keypad Calculator & Templates',
      accentColor: '#EF8354',
      kickerColor: '#EF8354',
      borderColor: 'rgba(239, 131, 84, 0.3)',
      iconBg: 'rgba(239, 131, 84, 0.12)',
      glowColor: 'rgba(239, 131, 84, 0.14)',
      ambientGlow: 'rgba(239, 131, 84, 0.07)',
      glareColor: 'rgba(255, 240, 230, 0.035)',
      icon: <LightningBoltIcon size={22} color="#EF8354" />,
    },
    {
      index: '04',
      category: 'Beautifully Customizable',
      title: 'Personalized to your style.',
      description:
        'Thoughtfully designed with handcrafted icons and smooth interactions. Personalize your experience with dynamic themes and full Dark Mode support.',
      highlight: 'Dynamic Themes • Dark Mode',
      accentColor: '#9957BD',
      kickerColor: '#BA7DE0',
      borderColor: 'rgba(153, 87, 189, 0.3)',
      iconBg: 'rgba(153, 87, 189, 0.12)',
      glowColor: 'rgba(153, 87, 189, 0.18)',
      ambientGlow: 'rgba(153, 87, 189, 0.10)',
      glareColor: 'rgba(248, 232, 255, 0.035)',
      icon: <PaletteIcon size={22} color="#9957BD" />,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6.5;
    const rotateY = ((x - centerX) / centerX) * 6.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    card.style.setProperty('--rot-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--rot-y', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
    card.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rot-x', '0deg');
    card.style.setProperty('--rot-y', '0deg');
    card.style.removeProperty('--glare-x');
    card.style.removeProperty('--glare-y');
  };

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className={`section ${styles.whyChooseSection}`}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-subtitle">
            <SparklesIcon size={16} color="var(--accent-light)" />
            <span>Why Choose eXpend</span>
          </div>

          <h2 className="section-title" style={{ fontWeight: 700 }}>
            Simple and intuitive. <br />
            <span style={{ color: 'var(--accent-light)' }}>
              Private and secure on your device.
            </span>
          </h2>
        </div>

        {/* 4 Feature Pillar Cards with Staggered Perspective Entrance on First Scroll */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`${styles.pillarCard} ${
                hasEntered && !cardsEntered[idx] ? styles.cardEntering : ''
              }`}
              style={
                {
                  '--card-accent': pillar.accentColor,
                  '--card-glow': pillar.glowColor,
                  '--card-ambient': pillar.ambientGlow,
                  '--card-border': pillar.borderColor,
                  '--glare-color': pillar.glareColor,
                  '--stagger-delay': `${idx * 90}ms`,
                } as React.CSSProperties
              }
              onAnimationEnd={() => {
                setCardsEntered((prev) => ({ ...prev, [idx]: true }));
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Masked Radial Glare Following Cursor */}
              <div className={styles.glareMask}>
                <div className={styles.radialGlare} />
              </div>

              <div className={styles.cardInnerContent}>
                {/* Architectural Header: Icon + Category on Left, Watermark Index on Right */}
                <div className={styles.archHeader}>
                  <div className={styles.archLeft}>
                    <div
                      className={styles.iconWrap}
                      style={{ backgroundColor: pillar.iconBg }}
                    >
                      {pillar.icon}
                    </div>
                    <span
                      className={styles.categoryName}
                      style={{ color: pillar.kickerColor }}
                    >
                      {pillar.category}
                    </span>
                  </div>
                  <span className={styles.watermarkIndex}>{pillar.index}</span>
                </div>

                {/* Title & Description */}
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>

                {/* Clean Structural Hairline */}
                <div className={styles.hairlineDivider} />

                {/* Grounded Highlight Anchor */}
                <div className={styles.cardFooter}>
                  <span
                    className={styles.highlightBadge}
                    style={{ color: pillar.kickerColor }}
                  >
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
