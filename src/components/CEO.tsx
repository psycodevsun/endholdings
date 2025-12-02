import styles from './CEO.module.css';

const CEO = () => {
  return (
    <section id="ceo" className={styles.ceo}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img
                src="/ceo.png"
                alt="CEO of END HOLDINGS Inc."
                className={styles.image}
              />
            </div>
            <div className={styles.imageDecor}></div>
          </div>

          <div className={styles.info}>
            <span className={styles.label}>Leadership</span>
            <h2 className={styles.title}>
              Meet Our <span className={styles.highlight}>CEO</span>
            </h2>

            <div className={styles.nameSection}>
              <h3 className={styles.name}>Yonghyeon Lee</h3>
              <span className={styles.position}>Founder & Chief Executive Officer</span>
            </div>

            <div className={styles.bio}>
              <p>
                A visionary technologist and entrepreneur at the forefront of South Korea's
                digital transformation. With over a decade of experience in software engineering
                and systems architecture, he founded END HOLDINGS Inc. to bridge traditional
                finance with emerging digital asset markets.
              </p>
              <p>
                Recognized as a leading authority in blockchain technology, he brings deep
                technical expertise combined with strategic business acumen. Under his leadership,
                END HOLDINGS has grown into a trusted partner for institutional investors.
              </p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
                <div>
                  <strong>Industry Pioneer</strong>
                  <span>Early adopter in blockchain technology</span>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </span>
                <div>
                  <strong>Technical Visionary</strong>
                  <span>Expert in scalable systems</span>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                </span>
                <div>
                  <strong>Global Leader</strong>
                  <span>Partnerships across continents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
