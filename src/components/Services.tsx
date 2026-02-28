import styles from './Services.module.css';

const Services = () => {
  const businessAreas = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: 'Digital Asset Solutions',
      description: 'Comprehensive digital asset management and advisory services for institutional investors seeking exposure to emerging markets.',
      features: ['Portfolio Management', 'Risk Assessment', 'Market Analysis'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      ),
      title: 'Financial Technology',
      description: 'Next-generation fintech infrastructure that empowers businesses to streamline operations and accelerate growth.',
      features: ['API Integration', 'Real-time Processing', 'Scalable Systems'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87"/>
          <path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'Strategic Partnerships',
      description: 'Building lasting relationships with global enterprises through collaborative ventures and shared value creation.',
      features: ['Joint Ventures', 'Cross-border Deals', 'Long-term Alliances'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Industry-leading security frameworks that protect assets, maintain integrity, and ensure regulatory compliance.',
      features: ['Compliance', 'Encryption', 'Audit Trails'],
    },
  ];

  return (
    <>
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.leftContent}>
              <span className={styles.label}>What We Do</span>
              <h2 className={styles.title}>
                Our <span className={styles.highlight}>Business Areas</span>
              </h2>
              <p className={styles.description}>
                END HOLDINGS operates across multiple domains of digital finance,
                delivering comprehensive solutions for our global partners.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Diverse</span>
                  <span className={styles.statLabel}>Business Portfolio</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Active</span>
                  <span className={styles.statLabel}>Global Projects</span>
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              {businessAreas.map((area, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardIcon}>{area.icon}</div>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                  <p className={styles.cardDescription}>{area.description}</p>
                  <div className={styles.cardFeatures}>
                    {area.features.map((feature, idx) => (
                      <span key={idx} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metrics}>
        <div className={styles.metricsContainer}>
          <div className={styles.metricsHeader}>
            <h3 className={styles.metricsTitle}>Our Commitment</h3>
            <p className={styles.metricsSubtitle}>The values that drive our success</p>
          </div>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <div className={styles.metricIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className={styles.metricValue}>Excellence</span>
              <span className={styles.metricLabel}>In Every Detail</span>
              <p className={styles.metricDesc}>We pursue the highest standards in everything we do.</p>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </div>
              <span className={styles.metricValue}>Innovation</span>
              <span className={styles.metricLabel}>At Our Core</span>
              <p className={styles.metricDesc}>Pioneering new solutions for emerging challenges.</p>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className={styles.metricValue}>Integrity</span>
              <span className={styles.metricLabel}>In All Actions</span>
              <p className={styles.metricDesc}>Building trust through transparency and honesty.</p>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.metricIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              </div>
              <span className={styles.metricValue}>Growth</span>
              <span className={styles.metricLabel}>For All Partners</span>
              <p className={styles.metricDesc}>Creating lasting value for all stakeholders.</p>
            </div>
          </div>
          <div className={styles.metricsFooter}>
            <p className={styles.metricsFooterText}>
              These core values are embedded in every aspect of our operations,
              guiding our decisions and shaping our relationships with partners worldwide.
            </p>
            <div className={styles.metricsStats}>
              <div className={styles.metricsStatItem}>
                <span className={styles.metricsStatNumber}>Dedicated</span>
                <span className={styles.metricsStatLabel}>Client Focus</span>
              </div>
              <div className={styles.metricsStatItem}>
                <span className={styles.metricsStatNumber}>Robust</span>
                <span className={styles.metricsStatLabel}>Security Standards</span>
              </div>
              <div className={styles.metricsStatItem}>
                <span className={styles.metricsStatNumber}>Always-On</span>
                <span className={styles.metricsStatLabel}>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
