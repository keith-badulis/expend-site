import React, { useEffect, useRef, useState } from 'react';
import {
  LockIcon,
  LightningBoltIcon,
  PaletteIcon,
  CoinIcon,
} from './icons';
import styles from './WhyChoose.module.css';

const opacityToHex = (opacity: number): string => {
  const clamped = Math.max(0, Math.min(100, opacity));
  const alpha = Math.round((clamped / 100) * 255);
  return alpha.toString(16).toUpperCase().padStart(2, '0');
};

export const colorSets = {
  green: {
    50: '#0BB190',
    10: `#0BB190${opacityToHex(22)}`,
  },
  blue: {
    50: '#7094F0',
    10: `#7094F0${opacityToHex(22)}`,
  },
  orange: {
    50: '#EF8354',
    10: `#EF8354${opacityToHex(22)}`,
  },
  purple: {
    50: '#BA7DE0',
    10: `#BA7DE0${opacityToHex(22)}`,
  },
} as const;

export type ColorSetKey = keyof typeof colorSets;

export interface PillarData {
  index: string;
  colorKey: ColorSetKey;
  title: string;
  accentWord: string;
  styledTitle: (accentColor: string) => React.ReactNode;
  description: string;
  accentColor: string;
  icon: React.ReactNode;
}

export const WhyChoose: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

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

  const pillars: PillarData[] = [
    {
      index: '01',
      colorKey: 'green',
      title: 'Your data never leaves your device.',
      accentWord: 'never',
      styledTitle: (color) => (
        <>
          Your data{' '}
          <span style={{ color, fontWeight: 800 }}>never</span>{' '}
          leaves your device.
        </>
      ),
      description:
        'Completely serverless. Zero cloud telemetry, no analytics trackers, and zero ads. Your financial ledger stays securely on your device.',
      accentColor: colorSets.green[50],
      icon: <LockIcon size={19} color={colorSets.green[50]} strokeWidth="6.25px" />,
    },
    {
      index: '02',
      colorKey: 'blue',
      title: 'Zero monthly subscriptions.',
      accentWord: 'Zero',
      styledTitle: (color) => (
        <>
          <span style={{ color, fontWeight: 900 }}>Zero</span> monthly
          subscriptions. Pay once, keep forever.
        </>
      ),
      description:
        'Unlock everything with a single one-time purchase. No recurring subscription fees, no renewal anxiety, and future updates included forever.',
      accentColor: colorSets.blue[50],
      icon: <CoinIcon size={19} color={colorSets.blue[50]} strokeWidth="6.25px" />,
    },
    {
      index: '03',
      colorKey: 'orange',
      title: 'Log transactions in seconds.',
      accentWord: 'seconds',
      styledTitle: (color) => (
        <>
          Log transactions in{' '}
          <span style={{ color, fontWeight: 800 }}>seconds,</span>{' '}
          not minutes.
        </>
      ),
      description:
        'A clean interface with an integrated keypad calculator and reusable templates. Logging daily expenses becomes effortless second nature.',
      accentColor: colorSets.orange[50],
      icon: <LightningBoltIcon size={19} color={colorSets.orange[50]} strokeWidth="6.25px" />,
    },
    {
      index: '04',
      colorKey: 'purple',
      title: 'Personalized to your unique style.',
      accentWord: 'unique style',
      styledTitle: (color) => (
        <>
          Personalized to your{' '}
          <span style={{ color, fontWeight: 800 }}>unique style</span> and flow.
        </>
      ),
      description:
        'Thoughtfully designed with 130+ handcrafted vector icons and smooth haptics. Personalize your experience with 17 dynamic themes and true Dark Mode.',
      accentColor: colorSets.purple[50],
      icon: <PaletteIcon size={19} color={colorSets.purple[50]} strokeWidth="6.25px" />,
    },
  ];

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className={styles.whyChooseSection}
    >
      {/* Subtle Boundary Seam Light Sweep */}
      <div className={styles.bottomLightSweep} aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Simple and intuitive. <br />
            <span style={{ color: 'var(--accent-light)' }}>
              Private and secure on your device.
            </span>
          </h2>
        </div>
      </div>

      {/* Edge-to-Edge Clean Monolith Columns */}
      <div className={styles.edgeBleedContainer}>
        <div className={styles.monolithGrid}>
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.index}
              className={styles.monolithCol}
              style={{ '--stagger-delay': `${idx * 70}ms` } as React.CSSProperties}
            >
              {/* Top Header Row: Quiet Ghost Numeral on Left, Icon on Right */}
              <div className={styles.colTopRow}>
                <span className={styles.ghostIndexNum}>{pillar.index}</span>
                <div
                  className={styles.cleanIconBox}
                  style={{ backgroundColor: colorSets[pillar.colorKey][10] }}
                >
                  {pillar.icon}
                </div>
              </div>

              {/* Content Block */}
              <div className={styles.colBodyBlock}>
                <h3 className={styles.cleanColTitle}>
                  {pillar.styledTitle(pillar.accentColor)}
                </h3>
                <p className={styles.cleanColDesc}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
