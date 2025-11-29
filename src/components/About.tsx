import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About Us</span>
          <h2 className={styles.title}>
            A Global Leader in<br />
            <span className={styles.highlight}>Digital Finance</span>
          </h2>
          <p className={styles.description}>
            END HOLDINGS Inc. is a forward-thinking fintech corporation headquartered in
            South Korea, with a global vision to transform the financial landscape.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.story}>
            <h3 className={styles.storyTitle}>Our Story</h3>
            <p className={styles.storyText}>
              END HOLDINGS Inc. was established with a bold vision: to bridge the gap between
              traditional finance and the emerging digital economy. We recognized the immense
              potential of digital assets and committed ourselves to building the infrastructure
              that would power the next generation of financial services.
            </p>
            <p className={styles.storyText}>
              Today, we stand as a trusted partner to institutions across the globe. Our team
              comprises world-class engineers, financial experts, and industry veterans who
              share a passion for innovation. Together, we are redefining what's possible
              in the world of digital finance.
            </p>
            <p className={styles.storyText}>
              Looking ahead, we remain committed to pushing the boundaries of what's achievable.
              Through strategic investments and continuous research, we are building a foundation
              for long-term growth while staying true to our core values of integrity, excellence,
              and client-first service.
            </p>
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
              <h4 className={styles.valueTitle}>Global Perspective</h4>
              <p className={styles.valueText}>
                We operate with a truly international mindset, understanding diverse
                markets and delivering solutions that transcend borders.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4 className={styles.valueTitle}>Unwavering Integrity</h4>
              <p className={styles.valueText}>
                Trust is the foundation of everything we do. We maintain the highest
                standards of transparency and ethical conduct in all our operations.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.vision}>
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
      </div>
    </section>
  );
};

export default About;
