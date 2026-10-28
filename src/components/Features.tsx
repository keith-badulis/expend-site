import React, { useEffect, useRef } from 'react';
import {
  WalletIcon,
  CardIcon,
  AirplaneIcon,
  PiggyBankIcon,
  LockIcon,
  LightningBoltIcon,
  StonksIcon,
  CoinIcon,
  DrinkIcon,
  SpoonForkIcon,
  GameIcon,
  HeadphonesIcon,
  HouseIcon,
  ShoppingCartIcon,
  SparklesIcon,
  JsonIcon,
  CloudBackupIcon,
  BackupIcon,
  ReceiptIcon,
  HeartIcon,
  CategoriesIcon,
  InfinityIcon,
  ArrowDownIcon,
  NoteIcon,
  HangerIcon,
  DropletsIcon,
  LaptopIcon,
} from './icons';
import styles from './Features.module.css';
import appLogo from '../assets/app-logo.webp';

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only activate auto-scroll hover on mobile view (stacked bento boxes <= 960px)
    const mobileQuery = window.matchMedia('(max-width: 960px)');

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      if (!mobileQuery.matches) {
        // Desktop view: ensure all mobile active classes are removed
        if (containerRef.current) {
          const boxes = containerRef.current.querySelectorAll(`.${styles.bentoBox}`);
          boxes.forEach((box) => box.classList.remove(styles.boxActive));
        }
        return;
      }

      // Mobile view: trigger hover animations automatically when each bento box is well-centered in view
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.boxActive);
            } else {
              entry.target.classList.remove(styles.boxActive);
            }
          });
        },
        {
          // Calibrated active band so animation begins when the card is well in view, not prematurely
          rootMargin: '-20% 0px -38% 0px',
          threshold: 0.15,
        }
      );

      if (containerRef.current) {
        const boxes = containerRef.current.querySelectorAll(`.${styles.bentoBox}`);
        boxes.forEach((box) => {
          observer?.observe(box);
        });
      }
    };

    setupObserver();
    mobileQuery.addEventListener('change', setupObserver);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      mobileQuery.removeEventListener('change', setupObserver);
    };
  }, []);

  return (
    <section id="features" ref={containerRef} className={`section ${styles.featuresSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Manage Your Personal Finances <span className={styles.titleHighlight}>Effortlessly</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>

          {/* =========================================================
              BOX 1: All Your Accounts in One Place (Span 7)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxAccounts}`}>
            {/* Visual Components at TOP */}
            <div className={styles.visualAccountsWrap}>
              {/* Overlapping Wallets Duo */}
              <div className={styles.walletsOverlapStage}>
                {/* Back Card: Cash (Red Gradient) */}
                <div className={styles.backWalletCard}>
                  <div className={styles.walletHeaderRow}>
                    <div className={styles.walletIconSquircle}>
                      <WalletIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                    </div>
                  </div>
                  <div className={styles.walletCardBottom}>
                    <span className={styles.walletCardName}>Cash</span>
                    <span className={styles.walletCardBalance}>$3,480.50</span>
                  </div>
                </div>

                {/* Front Card: Credit Card (Blue Gradient with Credit Pill) */}
                <div className={styles.frontWalletCard}>
                  <div className={styles.walletHeaderRow}>
                    <div className={styles.walletIconSquircle}>
                      <CardIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                    </div>
                    <span className={styles.creditBadgePill}>Credit</span>
                  </div>
                  <div className={styles.walletCardBottom}>
                    <span className={styles.walletCardName}>Credit Card</span>
                    <span className={styles.walletCardBalance}>$1,250.00</span>
                  </div>
                </div>
              </div>

              {/* Goals & Debts Stack (Companion column) */}
              <div className={styles.goalsAndDebtsStack}>
                {/* GoalListItem Replica */}
                <div className={styles.miniGoalCard}>
                  <div className={styles.miniGoalHeader}>
                    <div className={styles.goalIconSquircle}>
                      <AirplaneIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                    </div>
                    <div className={styles.goalDetails}>
                      <span className={styles.goalTitle}>Vacation Goal</span>
                      <div className={styles.goalAmountPercentRow}>
                        <div className={styles.goalAmountFlip}>
                          <span className={styles.goalAmountRest}>$3,250 / $5,000</span>
                          <span className={styles.goalAmountActive}>$4,250 / $5,000</span>
                        </div>
                        <div className={styles.goalPercentFlip}>
                          <span className={styles.goalPercentRest}>65%</span>
                          <span className={styles.goalPercentActive}>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.goalProgressBar}>
                    <div className={styles.goalProgressFill} />
                  </div>
                </div>

                {/* DebtListItem Replica */}
                <div className={styles.miniDebtCard}>
                  <div className={styles.debtHeaderRow}>
                    <div className={styles.debtTextIconWrap}>
                      <span className={styles.debtInitial}>J</span>
                      <svg className={styles.debtRingSvg} viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(76, 116, 219, 0.15)" strokeWidth="2.4" />
                        <circle
                          className={styles.debtRingProgress}
                          cx="16" cy="16" r="13" fill="none"
                          stroke="#4C74DB" strokeWidth="2.4"
                          strokeDasharray="57 82"
                          strokeDashoffset="20"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.debtDetails}>
                      <div className={styles.debtTitleRow}>
                        <span className={styles.debtName}>Juan dela Cruz</span>
                        <span className={styles.debtDate}>Sep 18</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.debtBottomRow}>
                    <div className={styles.debtTypeBadge}>
                      <ArrowDownIcon size={11} color="currentColor" strokeWidth="6.25px" />
                      <span>Payable</span>
                    </div>
                    <span className={styles.debtAmountStatement}>$120.00 left</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillBlue}`}>
                <WalletIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>All Your Accounts in One Place</span>
              </div>
              <p className={styles.boxSubtitle}>
                Everything you have, from wallets and goals to credit cards and debts, consolidated under one clean and easy-to-use dashboard.
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 2: Quick & easy recording (Span 5)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxKeypad}`}>
            {/* Visual Components at TOP */}
            <div className={styles.visualKeypadWrap}>
              {/* Minimal Keypad Card */}
              <div className={styles.miniKeypadCard}>
                <div className={styles.miniKeypadDisplay}>
                  <div className={styles.miniDisplayAmountStack}>
                    <span className={styles.typeAmt0}><span className={styles.miniDisplaySymbol}>$</span>0</span>
                    <span className={styles.typeAmt1}><span className={styles.miniDisplaySymbol}>$</span>2</span>
                    <span className={styles.typeAmt2}><span className={styles.miniDisplaySymbol}>$</span>24</span>
                    <span className={styles.typeAmt3}><span className={styles.miniDisplaySymbol}>$</span>24.</span>
                    <span className={styles.typeAmt4}><span className={styles.miniDisplaySymbol}>$</span>24.5</span>
                    <span className={styles.typeAmt5}><span className={styles.miniDisplaySymbol}>$</span>24.50</span>
                  </div>
                  <span className={styles.displayCursor} />
                </div>
                <div className={styles.miniKeypadKeys}>
                  <span className={styles.keyUnit}>7</span>
                  <span className={styles.keyUnit}>8</span>
                  <span className={styles.keyUnit}>9</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnit4}`}>4</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnit5}`}>5</span>
                  <span className={styles.keyUnit}>6</span>
                  <span className={styles.keyUnit}>1</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnit2}`}>2</span>
                  <span className={styles.keyUnit}>3</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnitDot}`}>.</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnit0}`}>0</span>
                  <span className={`${styles.keyUnit} ${styles.keyUnitPrimary} ${styles.keyUnitCheck}`}>✓</span>
                </div>
              </div>

              {/* Overlapping Template Chips (Splay at rest -> Separates level on hover) */}
              <div className={styles.templatesOverlapStack}>
                <div className={styles.miniTemplateChipTop}>
                  <div className={styles.templateIconSquircleOrange}>
                    <DrinkIcon size={15} color="#EF8354" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.templateInfo}>
                    <span className={styles.templateName}>Morning Coffee</span>
                    <span className={styles.templateSub}>Food & Dining</span>
                  </div>
                  <span className={styles.templateCostExpense}>-$4.50</span>
                </div>

                <div className={styles.miniTemplateChipBottom}>
                  <div className={styles.templateIconSquircleGreen}>
                    <ShoppingCartIcon size={15} color="#0DBF96" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.templateInfo}>
                    <span className={styles.templateName}>Weekly Groceries</span>
                    <span className={styles.templateSub}>Supermarket</span>
                  </div>
                  <span className={styles.templateCostExpense}>-$68.20</span>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillYellow}`}>
                <LightningBoltIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>Quick & Easy Recording</span>
              </div>
              <p className={styles.boxSubtitle}>
                Record income, expenses, and account transfers in seconds, with a built-in calculator. Record routine purchases in a single tap with reusable templates.
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 3: Flexible budget planning (Span 4)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxBudgets}`}>
            {/* Visual Budget Cards at TOP - Progress Bars & Multi-Bar Animate on Hover/Active */}
            <div className={styles.visualBudgetsWrap}>
              <div className={styles.budgetCardsGrid}>
                {/* Card 1: Entertainment (Transitions from Green 72% -> Amber 38% on hover/active) */}
                <div className={styles.budgetItemCard}>
                  <div className={styles.budgetCardIconSquircle}>
                    <GameIcon size={15} color="#3A435A" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.budgetCardLabels}>
                    <span className={styles.budgetCardTitle}>Entertainment</span>
                    <span className={styles.budgetCardSubtitle}>$95.00 remaining</span>
                  </div>
                  <div className={styles.budgetBarPercentRow}>
                    <div className={`${styles.budgetProgressBarTrackAmber} ${styles.budgetTrackDynamic}`}>
                      <div className={`${styles.budgetProgressBarFillAmber} ${styles.budgetFillDynamic}`} />
                    </div>
                    <span className={styles.budgetCardPercent}>38%</span>
                  </div>
                </div>

                {/* Card 2: Food & Groceries (Green, animates from 46% -> 70% on hover/active) */}
                <div className={styles.budgetItemCard}>
                  <div className={styles.budgetCardIconSquircle}>
                    <SpoonForkIcon size={15} color="#3A435A" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.budgetCardLabels}>
                    <span className={styles.budgetCardTitle}>Food & Groceries</span>
                    <span className={styles.budgetCardSubtitle}>$420.00 remaining</span>
                  </div>
                  <div className={styles.budgetBarPercentRow}>
                    <div className={styles.budgetProgressBarTrackGreen}>
                      <div className={`${styles.budgetProgressBarFillGreen} ${styles.budgetFillGreenAnim}`} />
                    </div>
                    <span className={styles.budgetCardPercent}>70%</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Categories Breakdown / Distribution Bar Card from App (media_1792731495776_8d35d98f.png) */}
              <div className={styles.categoryDistributionCard}>
                <div className={styles.catDistHeaderRow}>
                  <span className={styles.catDistTitle}>All Categories</span>
                  <span className={styles.catDistTotal}>$10,759.59</span>
                </div>

                {/* Multi-segment Colored Distribution Bar (Segments shift proportions on hover/active) */}
                <div className={styles.catDistMultiBar}>
                  <div className={`${styles.distSegment} ${styles.distSeg1}`} style={{ backgroundColor: '#F56960' }} title="Food & Groceries" />
                  <div className={`${styles.distSegment} ${styles.distSeg2}`} style={{ backgroundColor: '#5E6882' }} title="Clothing & Shopping" />
                  <div className={`${styles.distSegment} ${styles.distSeg3}`} style={{ backgroundColor: '#DD56B2' }} title="Utilities" />
                  <div className={`${styles.distSegment} ${styles.distSeg4}`} style={{ backgroundColor: '#4C74DB' }} title="Electronics" />
                  <div className={`${styles.distSegment} ${styles.distSeg5}`} style={{ backgroundColor: '#20C49E' }} title="Transportation" />
                  <div className={`${styles.distSegment} ${styles.distSeg6}`} style={{ backgroundColor: '#8BAA36' }} title="Personal" />
                  <div className={`${styles.distSegment} ${styles.distSeg7}`} style={{ backgroundColor: '#EAAF3B' }} title="Entertainment" />
                </div>

                {/* Filter Pill Row */}
                <div className={styles.catDistFilterRow}>
                  {/* Selected Active Circle */}
                  <div className={styles.catFilterCircleActive} title="All Categories">
                    <CategoriesIcon size={14} color="#FFFFFF" strokeWidth="6.25px" />
                  </div>

                  {/* Icon Circles with authentic category colors */}
                  <div className={styles.catFilterCircle} title="Food & Groceries">
                    <SpoonForkIcon size={14} color="#F56960" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.catFilterCircle} title="Clothing & Shopping">
                    <HangerIcon size={14} color="#5E6882" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.catFilterCircle} title="Utilities">
                    <DropletsIcon size={14} color="#DD56B2" strokeWidth="6.25px" />
                  </div>
                  <div className={styles.catFilterCircle} title="Electronics">
                    <LaptopIcon size={14} color="#4C74DB" strokeWidth="6.25px" />
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillGreen}`}>
                <PiggyBankIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>Flexible Budget Planning</span>
              </div>
              <p className={styles.boxSubtitle}>
                Set custom budget limits and easily choose where your spending goes to keep your habits in check. Stay informed with smart budget insights!
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 4: Visual Reports & Analytics (Span 4)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxReports}`}>
            {/* Visual Component: Separate Cards Stack at TOP */}
            <div className={styles.visualReportsWrap}>
              <div className={styles.visualReportsStack}>
                {/* Card 1: Balance Trend Curve (Graph & Cursor animate on hover/active) */}
                <div className={styles.miniTrendCard}>
                  <div className={styles.trendBalanceRow}>
                    <div className={styles.trendBalanceCol}>
                      <span className={styles.trendColLabel}>Starting</span>
                      <span className={styles.trendColAmount}>$144,120.00</span>
                    </div>
                    <div className={`${styles.trendBalanceCol} ${styles.trendColRight}`}>
                      <div className={styles.trendEndingHeader}>
                        <span className={styles.trendColLabel}>Ending</span>
                        <span className={styles.trendGrowthBadge}>▲ +2.4%</span>
                      </div>
                      <span className={`${styles.trendColAmount} ${styles.trendEndingAmount}`}>$147,570.00</span>
                    </div>
                  </div>

                  <div className={styles.trendSvgWrap}>
                    <svg viewBox="0 0 280 50" className={styles.trendSvg} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="expendBalanceTrendGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4C74DB" stopOpacity="0.24" />
                          <stop offset="100%" stopColor="#4C74DB" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Starting vertical indicator guide */}
                      <line x1="8" y1="4" x2="8" y2="48" stroke="rgba(76, 116, 219, 0.2)" strokeWidth="1.5" />

                      {/* Area Gradient Fill - animates opacity/scale on hover */}
                      <path
                        className={styles.trendAreaPath}
                        d="M 0 42 C 20 44, 35 46, 55 33 C 75 20, 95 38, 115 37 C 135 36, 145 22, 165 24 C 185 26, 195 30, 215 16 C 230 6, 250 10, 280 11 L 280 50 L 0 50 Z"
                        fill="url(#expendBalanceTrendGrad)"
                      />

                      {/* Faint baseline track so the drawing stroke animates over a subtle guide */}
                      <path
                        d="M 0 42 C 20 44, 35 46, 55 33 C 75 20, 95 38, 115 37 C 135 36, 145 22, 165 24 C 185 26, 195 30, 215 16 C 230 6, 250 10, 280 11"
                        fill="none"
                        stroke="rgba(76, 116, 219, 0.16)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Dotted cursor vertical line at active peak */}
                      <line
                        className={styles.trendPeakLine}
                        x1="244"
                        y1="9.37"
                        x2="244"
                        y2="48"
                        stroke="#4C74DB"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        strokeOpacity="0.75"
                      />

                      {/* Blue Line Curve that draws forward on hover/active */}
                      <path
                        className={styles.trendCurvePath}
                        pathLength="100"
                        d="M 0 42 C 20 44, 35 46, 55 33 C 75 20, 95 38, 115 37 C 135 36, 145 22, 165 24 C 185 26, 195 30, 215 16 C 230 6, 250 10, 280 11"
                        fill="none"
                        stroke="#4C74DB"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Active Radar Pulse Ring around Peak Dot */}
                      <circle
                        className={styles.trendPeakDotRing}
                        cx="244"
                        cy="9.37"
                        r="3.8"
                        fill="none"
                        stroke="#4C74DB"
                        strokeWidth="1.5"
                      />

                      {/* Active Cursor Circle on Curve */}
                      <circle
                        className={styles.trendPeakDot}
                        cx="244"
                        cy="9.37"
                        r="3.8"
                        fill="#4C74DB"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card 2: Pie / Donut Breakdown (Donut segments & category icons animate on hover/active) */}
                <div className={styles.miniPieCard}>
                  {/* Left: Thick Donut Chart */}
                  <div className={styles.pieDonutWrap}>
                    <svg viewBox="0 0 100 100" className={styles.pieDonutSvg}>
                      <circle className={styles.pieSeg1} cx="50" cy="50" r="34" fill="none" stroke="#EF8354" strokeWidth="16" strokeDasharray="58 214" strokeDashoffset="0" />
                      <circle className={styles.pieSeg2} cx="50" cy="50" r="34" fill="none" stroke="#20C49E" strokeWidth="16" strokeDasharray="46 214" strokeDashoffset="-59" />
                      <circle className={styles.pieSeg3} cx="50" cy="50" r="34" fill="none" stroke="#DD56B2" strokeWidth="16" strokeDasharray="34 214" strokeDashoffset="-106" />
                      <circle className={styles.pieSeg4} cx="50" cy="50" r="34" fill="none" stroke="#5E6882" strokeWidth="16" strokeDasharray="26 214" strokeDashoffset="-141" />
                      <circle className={styles.pieSeg5} cx="50" cy="50" r="34" fill="none" stroke="#4C74DB" strokeWidth="16" strokeDasharray="22 214" strokeDashoffset="-168" />
                      <circle className={styles.pieSeg6} cx="50" cy="50" r="34" fill="none" stroke="#EAAF3B" strokeWidth="16" strokeDasharray="18 214" strokeDashoffset="-191" />
                      <circle className={styles.pieSeg7} cx="50" cy="50" r="34" fill="none" stroke="#E29965" strokeWidth="16" strokeDasharray="9 214" strokeDashoffset="-210" />
                    </svg>
                  </div>

                  {/* Right: Stacked Expense Badge & Category Filter Icons */}
                  <div className={styles.pieRightStack}>
                    <span className={styles.pieExpensePill}>
                      <ArrowDownIcon size={12} color="currentColor" strokeWidth="6.25px" />
                      <span>Expense</span>
                    </span>

                    <div className={styles.pieCategoryIcons}>
                      <div className={styles.catRoundOrange} title="Housing">
                        <HouseIcon size={12} color="#EF8354" strokeWidth="6.25px" />
                      </div>
                      <div className={styles.catRoundTeal} title="Travel">
                        <AirplaneIcon size={12} color="#20C49E" strokeWidth="6.25px" />
                      </div>
                      <div className={styles.catRoundCoral} title="Dining">
                        <SpoonForkIcon size={12} color="#F56960" strokeWidth="6.25px" />
                      </div>
                      <div className={styles.catRoundPink} title="Health">
                        <HeartIcon size={12} color="#DD56B2" strokeWidth="6.25px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillTeal}`}>
                <StonksIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>Visual Reports & Analytics</span>
              </div>
              <p className={styles.boxSubtitle}>
                Visualize your spending habits and income trends with clean, interactive charts. Monitor your net worth and review your transaction history your way.
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 5: Plan Your Subscriptions (Span 4)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxPlanned}`}>
            {/* Visual Component at TOP */}
            <div className={styles.visualPlannedWrap}>
              <div className={styles.miniPlannedWidget}>
                <div className={styles.plannedHeaderRow}>
                  <span className={styles.monthTag}>October</span>
                </div>

                {/* Calendar strip: Sunday 4 to Saturday 10 */}
                <div className={styles.miniCalendarStrip}>
                  <div className={styles.calGridInner}>
                    {/* Sliding selection glider from Oct 4 to Oct 9 */}
                    <div className={styles.calActivePillGlider} />

                    <div className={`${styles.calDay} ${styles.calDayFour}`}><span className={styles.calDayName}>S</span><span className={styles.calDate}>4</span></div>
                    <div className={styles.calDay}><span className={styles.calDayName}>M</span><span className={styles.calDate}>5</span></div>
                    <div className={styles.calDay}><span className={styles.calDayName}>T</span><span className={styles.calDate}>6</span></div>
                    <div className={styles.calDay}><span className={styles.calDayName}>W</span><span className={styles.calDate}>7</span></div>
                    <div className={styles.calDay}><span className={styles.calDayName}>T</span><span className={styles.calDate}>8</span></div>
                    <div className={`${styles.calDay} ${styles.calDayNine}`}><span className={styles.calDayName}>F</span><span className={styles.calDate}>9</span></div>
                    <div className={styles.calDay}><span className={styles.calDayName}>S</span><span className={styles.calDate}>10</span></div>
                  </div>
                </div>

                {/* Clean bill rows that highlight on hover/active */}
                <div className={styles.plannedItemsListNoOverlap}>
                  {/* Top Card: Music Subscription */}
                  <div className={`${styles.miniBillCardClean} ${styles.billCardTop}`}>
                    <div className={styles.billIconCirclePurple}>
                      <HeadphonesIcon size={15} color="#9957BD" strokeWidth="6.25px" />
                    </div>
                    <div className={styles.billMeta}>
                      <span className={styles.billName}>Music Subscription</span>
                      <span className={styles.billDue}>Oct 9 • Recurring</span>
                    </div>
                    <div className={styles.billRightGroup}>
                      <span className={styles.billAmount}>-$14.99</span>
                      <div className={styles.billPillFlip}>
                        <span className={styles.billPillRest}>In 5 days</span>
                        <span className={styles.billPillActive}>Due today</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card: Apartment Rent */}
                  <div className={`${styles.miniBillCardClean} ${styles.billCardBottom}`}>
                    <div className={styles.billIconCircleBlue}>
                      <HouseIcon size={15} color="#4C74DB" strokeWidth="6.25px" />
                    </div>
                    <div className={styles.billMeta}>
                      <span className={styles.billName}>Apartment Rent</span>
                      <span className={styles.billDue}>Oct 15 • Monthly</span>
                    </div>
                    <div className={styles.billRightGroup}>
                      <span className={styles.billAmount}>-$1,250.00</span>
                      <div className={styles.billPillFlip}>
                        <span className={styles.billPillRest}>In 11 days</span>
                        <span className={styles.billPillActiveBottom}>In 6 days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillPurple}`}>
                <ReceiptIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>Plan Your Subscriptions</span>
              </div>
              <p className={styles.boxSubtitle}>
                Keep track of upcoming renewals, recurring dues, and scheduled settlements before they sneak up on you.
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 6: One-Time Payment, Premium Forever (Span 6)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxLifetime}`}>
            {/* Visual Component: Minimalist Paper-Craft Lifetime Pass with 3D Perspective & Glare */}
            <div className={styles.visualLifetimeWrap}>
              <div className={styles.platinumPassCard}>
                {/* Subtle Infinity Watermark in Background */}
                <div className={styles.passWatermarkInfinity} aria-hidden="true">
                  <InfinityIcon size={78} color="#4C74DB" strokeWidth="5.5px" />
                </div>

                {/* Dynamic Specular Glare Overlay that sweeps across as perspective tilts */}
                <div className={styles.paperGlareOverlay} />

                {/* Top Row: Brand Logo + eXpend (Single Primary Color) & Clean Premium Pill */}
                <div className={styles.platinumTopRow}>
                  <div className={styles.platinumBrandGroup}>
                    <img src={appLogo} alt="eXpend" className={styles.platinumAppIconImg} />
                    <span className={styles.platinumBrandName}>eXpend</span>
                  </div>

                  <div className={styles.platinumTierBadge}>
                    <SparklesIcon size={11} color="#4C74DB" strokeWidth="6.25px" />
                    <span>Premium</span>
                  </div>
                </div>

                {/* Bottom Row: Validity Lifetime Claim */}
                <div className={styles.platinumBottomRow}>
                  <div className={styles.platinumClaimCol}>
                    <span className={styles.platinumSubClaim}>Validity</span>
                    <span className={styles.platinumMainClaim}>Lifetime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillPink}`}>
                <CoinIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>One-Time Payment, Premium Forever</span>
              </div>
              <p className={styles.boxSubtitle}>
                Say goodbye to recurring monthly subscriptions. One payment unlocks full premium access for life. Stay tuned for more updates!
              </p>
            </div>
          </div>

          {/* =========================================================
              BOX 7: Private and Serverless Design (Span 6)
              Illustration at TOP, Centered Badge & Text at BOTTOM
             ========================================================= */}
          <div className={`${styles.bentoBox} ${styles.boxPrivacy}`}>
            {/* Visual Component: Square Cards Fanned Spread at TOP */}
            <div className={styles.visualBackupWrap}>
              <div className={styles.backupFanStage}>
                <div className={`${styles.squareBackupCardFan} ${styles.fanCard1}`}>
                  <div className={styles.backupIconCircleYellow}>
                    <JsonIcon size={18} color="currentColor" strokeWidth="6.25px" />
                  </div>
                  <span className={styles.backupSquareTitle}>JSON</span>
                </div>

                <div className={`${styles.squareBackupCardFan} ${styles.fanCard2}`}>
                  <div className={styles.backupIconCircleGreen}>
                    <NoteIcon size={18} color="currentColor" strokeWidth="6.25px" />
                  </div>
                  <span className={styles.backupSquareTitle}>CSV</span>
                </div>

                <div className={`${styles.squareBackupCardFan} ${styles.fanCard3}`}>
                  <div className={styles.backupIconCircleOrange}>
                    <BackupIcon size={18} color="currentColor" strokeWidth="6.25px" />
                  </div>
                  <span className={styles.backupSquareTitle}>Local Backup</span>
                </div>

                <div className={`${styles.squareBackupCardFan} ${styles.fanCard4}`}>
                  <div className={styles.backupIconCircleBlue}>
                    <CloudBackupIcon size={18} color="currentColor" strokeWidth="6.25px" />
                  </div>
                  <span className={styles.backupSquareTitle}>Cloud Backup</span>
                </div>
              </div>
            </div>

            {/* Centered Badge & Text at BOTTOM */}
            <div className={styles.boxTextContent}>
              <div className={`${styles.boxTagPill} ${styles.tagPillEmerald}`}>
                <LockIcon size={16} color="#FFFFFF" strokeWidth="6.25px" />
                <span>Private and Serverless Design</span>
              </div>
              <p className={styles.boxSubtitle}>
                Your financial data stays yours, alone, with multiple export options to choose from. Backup and restore your data anytime, with optional Google Drive cloud backup.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;