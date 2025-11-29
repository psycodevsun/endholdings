import styles from './CEO.module.css';

const CEO = () => {
  return (
    <section id="ceo" className={styles.ceo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Leadership</span>
          <h2 className={styles.title}>
            Meet Our <span className={styles.highlight}>CEO</span>
          </h2>
        </div>

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
            <div className={styles.nameSection}>
              <h3 className={styles.name}>Yonghyun Lee</h3>
              <span className={styles.position}>Founder & Chief Executive Officer</span>
            </div>

            <div className={styles.bio}>
              <p>
                A visionary technologist and entrepreneur who has been at the forefront of
                South Korea's digital transformation. With over a decade of experience in
                software engineering and systems architecture, he has built and scaled
                multiple technology ventures before founding END HOLDINGS Inc.
              </p>
              <p>
                Recognized as one of Asia's leading authorities in blockchain technology
                and digital asset markets, he brings deep technical expertise combined with
                strategic business acumen. His pioneering work in cryptocurrency infrastructure
                has earned him recognition from industry leaders and financial institutions
                across the globe.
              </p>
              <p>
                Under his leadership, END HOLDINGS has grown into a trusted partner for
                institutional investors seeking to navigate the complexities of digital finance.
                His commitment to innovation, integrity, and excellence continues to drive
                the company's mission to shape the future of global finance.
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
                  <span>Early adopter and innovator in blockchain technology</span>
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
                  <span>Former senior software engineer with expertise in scalable systems</span>
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
                  <strong>Global Perspective</strong>
                  <span>Established partnerships across Asia, Europe, and Americas</span>
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
