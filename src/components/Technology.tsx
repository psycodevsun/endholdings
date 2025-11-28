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
      description: 'Extensive partnerships spanning across Asia, Europe, and the Americas, enabling us to serve clients in every major financial market.',
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
      description: 'A diverse team of industry veterans, financial experts, and technology innovators united by a shared commitment to excellence.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Industry Leadership',
      description: 'Recognized as a pioneer in digital finance, setting standards and driving innovation that shapes the future of the industry.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Trusted Reputation',
      description: 'Built on a foundation of integrity and transparency, earning the trust of institutions and partners worldwide.',
    },
  ];

  const coreValues = [
    { title: 'Innovation', desc: 'Continuously pushing boundaries' },
    { title: 'Excellence', desc: 'Striving for the highest standards' },
    { title: 'Integrity', desc: 'Acting with honesty and transparency' },
    { title: 'Collaboration', desc: 'Building strong partnerships' },
    { title: 'Responsibility', desc: 'Committed to sustainable growth' },
    { title: 'Agility', desc: 'Adapting to evolving markets' },
  ];

  return (
    <section id="technology" className={styles.technology}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Why END HOLDINGS</span>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Core Strengths</span>
          </h2>
          <p className={styles.description}>
            What sets END HOLDINGS apart is our unwavering commitment to excellence,
            our global perspective, and our dedication to building lasting value for all stakeholders.
          </p>
        </div>

        <div className={styles.strengthsGrid}>
          {strengths.map((item, index) => (
            <div key={index} className={styles.strengthCard}>
              <div className={styles.strengthIcon}>{item.icon}</div>
              <h3 className={styles.strengthTitle}>{item.title}</h3>
              <p className={styles.strengthDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.values}>
          <h3 className={styles.valuesTitle}>Our Core Values</h3>
          <p className={styles.valuesSubtitle}>The principles that guide everything we do</p>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <span className={styles.valueTitle}>{value.title}</span>
                <span className={styles.valueDesc}>{value.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
