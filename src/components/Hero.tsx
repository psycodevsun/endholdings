import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundVideo}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.content}>
            <p className={styles.tagline}>END HOLDINGS Inc.</p>

            <h1 className={styles.title}>
              Building Tomorrow's
              <br />
              Financial Infrastructure
            </h1>

            <div className={styles.divider}></div>

            <p className={styles.description}>
              We are a global fintech holding company committed to creating
              sustainable value through innovation, integrity, and excellence.
            </p>

            <div className={styles.cta}>
              <a href="#about" className={styles.primaryButton}>
                About Us
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get in Touch
              </a>
            </div>
          </div>

          <div className={styles.sideInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoNumber}>10+</span>
              <span className={styles.infoLabel}>Years of Excellence</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoNumber}>Global</span>
              <span className={styles.infoLabel}>Market Reach</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoNumber}>Trust</span>
              <span className={styles.infoLabel}>Built Partnerships</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.location}>
            <span className={styles.locationIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            <span>Seoul, South Korea</span>
          </div>
          <div className={styles.established}>
            <span>Established for the Future</span>
          </div>
          <div className={styles.scrollHint}>
            <span>Scroll</span>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
