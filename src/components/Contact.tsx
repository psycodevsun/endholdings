import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Get in Touch</span>
          <h2 className={styles.title}>
            Let's Build the <span className={styles.highlight}>Future Together</span>
          </h2>
          <p className={styles.description}>
            We're genuinely excited about the possibility of working together.
            Reach out to discuss partnership opportunities.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4>Headquarters</h4>
                <p>South Korea</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <a href="mailto:ceo@endholdings.com">ceo@endholdings.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h4>Website</h4>
                <a href="https://www.endholdings.com" target="_blank" rel="noopener noreferrer">
                  www.endholdings.com
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <div className={styles.ctaCard}>
              <h3>Ready to Partner?</h3>
              <p>
                If you have questions about anything or would like to discuss next steps,
                please don't hesitate to reach out. We're flexible on scheduling and
                happy to accommodate your preferred communication style.
              </p>
              <a href="mailto:ceo@endholdings.com" className={styles.ctaButton}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
