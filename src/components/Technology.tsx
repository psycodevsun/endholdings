import styles from './Technology.module.css';

const Technology = () => {
  const strengths = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      title: 'Global Network',
      description: 'Extensive partnerships across Asia, Europe, and the Americas, enabling seamless cross-border operations.',
      stats: '20+ Countries',
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
      title: 'Expert Team',
      description: 'Industry veterans and technology innovators united by a shared commitment to excellence.',
      stats: '50+ Experts',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Industry Leadership',
      description: 'Pioneers in digital finance, consistently setting new industry standards and best practices.',
      stats: '10+ Years',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Trusted Reputation',
      description: 'Built on integrity, transparency, and delivering on our promises to partners worldwide.',
      stats: '100% Compliance',
    },
  ];

  const coreValues = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
      ),
      title: 'Innovation',
      desc: 'Pushing boundaries of what\'s possible in digital finance through cutting-edge technology.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Excellence',
      desc: 'Maintaining the highest standards in everything we do, from service delivery to client relations.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Integrity',
      desc: 'Building trust through honesty, transparency, and ethical business practices always.',
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
      title: 'Collaboration',
      desc: 'Fostering strong partnerships that create mutual value and drive collective success.',
    },
  ];

  return (
    <>
      <section id="technology" className={styles.technology}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={styles.leftContent}>
              <span className={styles.label}>Why END HOLDINGS</span>
              <h2 className={styles.title}>
                Our <span className={styles.highlight}>Core Strengths</span>
              </h2>
              <p className={styles.description}>
                What sets END HOLDINGS apart is our unwavering commitment to excellence
                and our dedication to building lasting value for all stakeholders.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>$1B+</span>
                  <span className={styles.statLabel}>Assets Managed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>99.9%</span>
                  <span className={styles.statLabel}>System Uptime</span>
                </div>
              </div>
            </div>

            <div className={styles.strengthsGrid}>
              {strengths.map((item, index) => (
                <div key={index} className={styles.strengthCard}>
                  <div className={styles.strengthIcon}>{item.icon}</div>
                  <div className={styles.strengthContent}>
                    <h3 className={styles.strengthTitle}>{item.title}</h3>
                    <p className={styles.strengthDesc}>{item.description}</p>
                    <span className={styles.strengthStats}>{item.stats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.valuesContainer}>
          <h3 className={styles.valuesTitle}>Our Core Values</h3>
          <p className={styles.valuesSubtitle}>The principles that guide everything we do</p>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <span className={styles.valueTitle}>{value.title}</span>
                <span className={styles.valueDesc}>{value.desc}</span>
              </div>
            ))}
          </div>
          <div className={styles.valuesFooter}>
            <p className={styles.valuesFooterText}>
              Our values define who we are and how we operate. They are the foundation
              upon which we build trust, deliver excellence, and create lasting partnerships.
            </p>
            <div className={styles.valuesStats}>
              <div className={styles.valuesStatItem}>
                <span className={styles.valuesStatNumber}>10+</span>
                <span className={styles.valuesStatLabel}>Years of Trust</span>
              </div>
              <div className={styles.valuesStatItem}>
                <span className={styles.valuesStatNumber}>100+</span>
                <span className={styles.valuesStatLabel}>Global Partners</span>
              </div>
              <div className={styles.valuesStatItem}>
                <span className={styles.valuesStatNumber}>$1B+</span>
                <span className={styles.valuesStatLabel}>Assets Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
