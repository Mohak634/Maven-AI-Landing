import styles from './Footer.module.css'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.tagline}>
        <div className={styles.logoWrapper}>
          <Logo variant="transparent" />
        </div>
        <p className={styles.taglineText}>
          Embed Enterprise AI in your Firm's DNA
        </p>
      </div>

      <div className={styles.linksSection}>
        <div className={styles.companyInfo}>
          <p className={styles.companyName}>Maven AI</p>
          <p>
            For further information, please reach out to:</p>
            <br />
            <p className={styles.companyName}>Akshat Ajmera</p>
            <p>Co-Founder, Maven</p>
            <br></br>
            <a href = "mailto:akshat@trymavenai.com" className ={styles.footerLink}><p>akshat@trymavenai.com</p></a>
            <a href = "tel:+6587967803" className ={styles.footerLink}><p>+65 87967803</p></a>
        </div>

        <div className={styles.linkGroups}>
          <nav className={styles.linkGroup}>
            <h3 className={styles.linkGroupHeading}>Legal</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#terms" className={styles.footerLink}>Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
              </li>
            </ul>
          </nav>

          <nav className={styles.linkGroup}>
            <h3 className={styles.linkGroupHeading}>Follow Us</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#x" className={styles.footerLink}>X</a>
              </li>
              <li>
                <a href="#linkedin" className={styles.footerLink}>LinkedIn</a>
              </li>
              <li>
                <a href="#youtube" className={styles.footerLink}>YouTube</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.copyrightText}>
          Copyright © 2026 Maven AI Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
