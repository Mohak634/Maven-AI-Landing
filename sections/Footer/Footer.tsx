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
          <p className={styles.address}>
            Address Line 1<br />
            Address Line 2
          </p>
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
