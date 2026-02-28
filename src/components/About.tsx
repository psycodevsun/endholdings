import styles from './About.module.css';

const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <span className={styles.label}>About Us</span>
              <h2 className={styles.title}>
                A Global Leader in<br />
                <span className={styles.highlight}>Digital Finance</span>
              </h2>
              <p className={styles.description}>
                END HOLDINGS Inc. is a forward-thinking fintech corporation headquartered in
                South Korea, with a global vision to transform the financial landscape.
              </p>
              <div className={styles.story}>
                <p className={styles.storyText}>
                  END HOLDINGS Inc. was established with a bold vision: to bridge the gap between
                  traditional finance and the emerging digital economy. We recognized the immense
                  potential of digital assets and committed ourselves to building the infrastructure
                  that would power the next generation of financial services.
                </p>
                <p className={styles.storyText}>
                  Today, we stand as a trusted partner to institutions across the globe,
                  redefining what's possible in the world of digital finance.
                </p>
              </div>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Trusted</span>
                <span className={styles.statLabel}>Industry Leadership</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Global</span>
                <span className={styles.statLabel}>Market Presence</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Growing</span>
                <span className={styles.statLabel}>Partner Network</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Dedicated</span>
                <span className={styles.statLabel}>Support & Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.vision}>
        <div className={styles.container}>
          <div className={styles.visionHeader}>
            <span className={styles.visionHeaderLabel}>Our Purpose</span>
            <h2 className={styles.visionHeaderTitle}>Vision & Mission</h2>
          </div>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <span className={styles.visionLabel}>Our Vision</span>
              <p className={styles.visionText}>
                "To become a global catalyst for financial innovation, empowering
                institutions and individuals to thrive in the digital economy."
              </p>
            </div>
            <div className={styles.missionCard}>
              <span className={styles.missionLabel}>Our Mission</span>
              <p className={styles.missionText}>
                "To deliver world-class financial technology solutions that drive
                growth, create value, and shape the future of global finance."
              </p>
            </div>
          </div>
          <div className={styles.values}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.valueTitle}>Global Perspective</h4>
                <p className={styles.valueText}>
                  We operate with a truly international mindset, delivering solutions that transcend borders.
                </p>
              </div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.valueTitle}>Unwavering Integrity</h4>
                <p className={styles.valueText}>
                  Trust is the foundation of everything we do with highest standards of transparency.
                </p>
              </div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.valueTitle}>Excellence Driven</h4>
                <p className={styles.valueText}>
                  We pursue excellence in every aspect, setting industry standards for quality.
                </p>
              </div>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.valueTitle}>Client Partnership</h4>
                <p className={styles.valueText}>
                  Building lasting relationships with our clients through dedicated service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
