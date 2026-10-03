import React, { useEffect, useRef, useState } from 'react';
import {
  LockIcon,
  SparklesIcon,
  LightningBoltIcon,
  PaletteIcon,
  CoinIcon,
} from './icons';
import styles from './WhyChoose.module.css';

export interface PillarData {
  index: string;
  category: string;
  title: string;
  accentWord: string;
  styledTitle: (accentColor: string) => React.ReactNode;
  description: string;
  highlight: string;
  specCode: string;
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
      category: 'Private & Secure',
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
        'Completely serverless app design. No cloud telemetry, no analytics trackers, and zero ads. Your financial ledger lives safely on your device in your local Realm database.',
      highlight: '100% On-Device & Offline',
      specCode: 'SCHEMA_V59',
      accentColor: '#0BB190',
      icon: <LockIcon size={19} color="#0BB190" strokeWidth="6.25px" />,
    },
    {
      index: '02',
      category: 'One-Time Payment',
      title: 'Zero monthly subscriptions.',
      accentWord: 'Zero',
      styledTitle: (color) => (
        <>
          <span style={{ color, fontWeight: 900 }}>Zero</span> monthly
          subscriptions. Pay once, keep forever.
        </>
      ),
      description:
        'Unlock the full power of eXpend with a single one-time purchase. No recurring subscription fees, no renewal anxiety, and every future update is included forever.',
      highlight: 'Pay Once • Lifetime Access',
      specCode: 'LIFETIME_PRO',
      accentColor: '#7094F0',
      icon: <CoinIcon size={19} color="#7094F0" strokeWidth="6.25px" />,
    },
    {
      index: '03',
      category: 'Frictionless Input',
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
        'A clean, lightning-fast interface with an integrated keypad calculator and reusable quick-entry templates. Logging daily expenses becomes effortless second nature.',
      highlight: 'Calculator & Quick Templates',
      specCode: 'FAST_KEYPAD',
      accentColor: '#EF8354',
      icon: <LightningBoltIcon size={19} color="#EF8354" strokeWidth="6.25px" />,
    },
    {
      index: '04',
      category: 'Craft & Polish',
      title: 'Personalized to your unique style.',
      accentWord: 'unique style',
      styledTitle: (color) => (
        <>
          Personalized to your{' '}
          <span style={{ color, fontWeight: 800 }}>unique style</span> and flow.
        </>
      ),
      description:
        'Thoughtfully designed with 130+ handcrafted vector icons and smooth haptic feedback. Personalize your experience with 17 dynamic themes and true Dark Mode.',
      highlight: 'Dynamic Themes • Dark Mode',
      specCode: 'DARK_MODE',
      accentColor: '#BA7DE0',
      icon: <PaletteIcon size={19} color="#BA7DE0" strokeWidth="6.25px" />,
    },
  ];

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className={styles.whyChooseSection}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <SparklesIcon size={16} color="var(--accent-light)" />
            <span>Why Choose eXpend</span>
          </div>

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
                <div className={styles.cleanIconBox}>{pillar.icon}</div>
              </div>

              {/* Content Block */}
              <div className={styles.colBodyBlock}>
                <span
                  className={styles.flatCategoryKicker}
                  style={{ color: pillar.accentColor }}
                >
                  {pillar.category}
                </span>
                <h3 className={styles.cleanColTitle}>
                  {pillar.styledTitle(pillar.accentColor)}
                </h3>
                <p className={styles.cleanColDesc}>{pillar.description}</p>
              </div>

              {/* Grounded Blueprint Footer */}
              <div className={styles.colFooterBlock}>
                <div className={styles.flatHairline} />
                <div className={styles.colMetaRow}>
                  <span className={styles.metaHighlight}>{pillar.highlight}</span>
                  <span className={styles.metaSpecCode}>{pillar.specCode}</span>
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
