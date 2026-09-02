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
  kicker: string;
  title: string;
  description: string;
  accentColor: string;
  kickerColor: string;
  borderColor: string;
  iconBg: string;
  glowColor: string;
  ambientGlow: string;
  glareColor: string;
  icon: React.ReactNode;
  chips: Array<{
    label: string;
    icon: React.ReactNode;
  }>;
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
      kicker: 'Privacy by Default',
      title: 'Your money, your business.',
      description:
        'No accounts to create and no ads watching your spending. Everything stays safely on your phone.',
      accentColor: '#0BB190',
      kickerColor: '#0BB190',
      borderColor: 'rgba(11, 177, 144, 0.3)',
      iconBg: 'rgba(11, 177, 144, 0.12)',
      glowColor: 'rgba(11, 177, 144, 0.15)',
      ambientGlow: 'rgba(11, 177, 144, 0.08)',
      glareColor: 'rgba(215, 252, 245, 0.035)',
      icon: <LockIcon size={24} color="#0BB190" />,
      chips: [
        {
          label: 'No Sign-Ups Needed',
          icon: <CheckIcon size={14} color="#0BB190" />,
        },
        {
          label: 'No Ads or Trackers',
          icon: <SparklesIcon size={14} color="#0BB190" />,
        },
        {
          label: 'Works Fully Offline',
          icon: <CloudBackupIcon size={14} color="#0BB190" />,
        },
      ],
    },
    {
      kicker: 'Honest Pricing',
      title: 'Zero monthly subscriptions.',
      description:
        'Skip recurring fees. Pay once for full access forever, with every future update included.',
      accentColor: '#4C74DB',
      kickerColor: '#7094F0',
      borderColor: 'rgba(76, 116, 219, 0.3)',
      iconBg: 'rgba(76, 116, 219, 0.12)',
      glowColor: 'rgba(76, 116, 219, 0.18)',
      ambientGlow: 'rgba(76, 116, 219, 0.10)',
      glareColor: 'rgba(225, 238, 255, 0.035)',
      icon: <DiamondIcon size={24} color="#4C74DB" />,
      chips: [
        {
          label: 'One-Time Purchase',
          icon: <CoinIcon size={14} color="#7094F0" />,
        },
        {
          label: 'Lifetime Updates',
          icon: <StarOutlineIcon size={14} color="#7094F0" />,
        },
        {
          label: 'No Hidden Fees',
          icon: <CheckIcon size={14} color="#7094F0" />,
        },
      ],
    },
    {
      kicker: 'Effortless Logging',
      title: 'Log expenses in a snap.',
      description:
        'Built-in calculator and reusable quick templates so you can log transactions and get right on with your day.',
      accentColor: '#EF8354',
      kickerColor: '#EF8354',
      borderColor: 'rgba(239, 131, 84, 0.3)',
      iconBg: 'rgba(239, 131, 84, 0.12)',
      glowColor: 'rgba(239, 131, 84, 0.14)',
      ambientGlow: 'rgba(239, 131, 84, 0.07)',
      glareColor: 'rgba(255, 240, 230, 0.035)',
      icon: <LightningBoltIcon size={24} color="#EF8354" />,
      chips: [
        {
          label: 'Built-in Calculator',
          icon: <TagIcon size={14} color="#EF8354" />,
        },
        {
          label: 'Quick Templates',
          icon: <LightningBoltIcon size={14} color="#EF8354" />,
        },
        {
          label: 'Zero Clutter',
          icon: <CheckIcon size={14} color="#EF8354" />,
        },
      ],
    },
    {
      kicker: 'Made with Care',
      title: 'Smooth, fun & customizable.',
      description:
        'Fluid animations and vibrant themes make daily money tracking feel satisfying instead of like a chore.',
      accentColor: '#9957BD',
      kickerColor: '#BA7DE0',
      borderColor: 'rgba(153, 87, 189, 0.3)',
      iconBg: 'rgba(153, 87, 189, 0.12)',
      glowColor: 'rgba(153, 87, 189, 0.18)',
      ambientGlow: 'rgba(153, 87, 189, 0.10)',
      glareColor: 'rgba(248, 232, 255, 0.035)',
      icon: <SparklesIcon size={24} color="#9957BD" />,
      chips: [
        {
          label: 'Smooth Animations',
          icon: <SparklesIcon size={14} color="#BA7DE0" />,
        },
        {
          label: '17 Color Themes',
          icon: <PaletteIcon size={14} color="#BA7DE0" />,
        },
        {
          label: '130+ Custom Icons',
          icon: <WalletIcon size={14} color="#BA7DE0" />,
        },
      ],
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
            Simple to use. <br />
            <span style={{ color: 'var(--accent-light)' }}>
              Respects your privacy & wallet.
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
                {/* Card Header: Accent Icon Wrap + Kicker */}
                <div className={styles.cardHeader}>
                  <div
                    className={styles.iconWrap}
                    style={{ backgroundColor: pillar.iconBg }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className={styles.kicker}
                    style={{ color: pillar.kickerColor }}
                  >
                    {pillar.kicker}
                  </span>
                </div>

                {/* Title & Body */}
                <h3 className={styles.cardTitle}>{pillar.title}</h3>
                <p className={styles.cardDesc}>{pillar.description}</p>

                {/* Neutral Action Chips with Colored Icon Highlights */}
                <div className={styles.chipsRow}>
                  {pillar.chips.map((chip, cIdx) => (
                    <div key={cIdx} className={styles.chip}>
                      {chip.icon}
                      <span>{chip.label}</span>
                    </div>
                  ))}
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
