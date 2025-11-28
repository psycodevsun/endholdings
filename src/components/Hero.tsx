import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.gridPattern}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Global Fintech Company
          </div>

          <h1 className={styles.title}>
            Shaping the Future of
            <span className={styles.highlight}> Digital Finance </span>
          </h1>

          <p className={styles.subtitle}>
            END HOLDINGS Inc. is a global fintech leader headquartered in South Korea,
            driving innovation across digital asset technology and next-generation
            financial infrastructure for institutions worldwide.
          </p>

          <div className={styles.cta}>
            <a href="#contact" className={styles.primaryButton}>
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className={styles.secondaryButton}>
              Discover More
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Global</span>
            <span className={styles.statLabel}>Market Presence</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Fintech</span>
            <span className={styles.statLabel}>Industry Pioneer</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Innovation</span>
            <span className={styles.statLabel}>Driven Culture</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Trust</span>
            <span className={styles.statLabel}>Built Partnerships</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
