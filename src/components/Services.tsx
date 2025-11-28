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
      description: 'Comprehensive digital asset management and advisory services for institutional investors seeking to navigate the evolving landscape of digital finance.',
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
      description: 'Next-generation fintech infrastructure that empowers businesses to streamline operations, enhance efficiency, and unlock new growth opportunities.',
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
      description: 'Building lasting relationships with global enterprises, fostering collaboration that drives mutual success and industry advancement.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20V10"/>
          <path d="M18 20V4"/>
          <path d="M6 20v-4"/>
        </svg>
      ),
      title: 'Market Intelligence',
      description: 'Deep insights and analysis that enable our partners to make informed decisions in rapidly evolving global markets.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
      ),
      title: 'Compliance & Advisory',
      description: 'Expert guidance on regulatory compliance and best practices, ensuring our clients operate with confidence in complex regulatory environments.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Industry-leading security frameworks and protocols that protect assets and maintain the highest standards of operational integrity.',
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>What We Do</span>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Business Areas</span>
          </h2>
          <p className={styles.description}>
            END HOLDINGS operates across multiple domains of digital finance,
            delivering comprehensive solutions that address the diverse needs of our global partners.
          </p>
        </div>

        <div className={styles.grid}>
          {businessAreas.map((area, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{area.icon}</div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.metrics}>
          <div className={styles.metricsContent}>
            <h3 className={styles.metricsTitle}>Our Commitment</h3>
            <p className={styles.metricsSubtitle}>
              Delivering excellence across every dimension of our business
            </p>
          </div>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Excellence</span>
              <span className={styles.metricLabel}>In Every Detail</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Innovation</span>
              <span className={styles.metricLabel}>At Our Core</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Integrity</span>
              <span className={styles.metricLabel}>In All Actions</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Growth</span>
              <span className={styles.metricLabel}>For All Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
