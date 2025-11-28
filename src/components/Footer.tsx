import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <img src="/logo.png" alt="END HOLDINGS Inc." className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>
              A global fintech leader driving innovation in digital
              asset technology and financial infrastructure.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#technology">Technology</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Business</h4>
              <a href="#services">Digital Assets</a>
              <a href="#services">Financial Technology</a>
              <a href="#services">Partnerships</a>
              <a href="#technology">Our Strengths</a>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contact</h4>
              <a href="mailto:ceo@endholdings.com">ceo@endholdings.com</a>
              <a href="https://www.endholdings.com" target="_blank" rel="noopener noreferrer">
                www.endholdings.com
              </a>
              <span>South Korea</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} END HOLDINGS Inc. All rights reserved.
          </p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
