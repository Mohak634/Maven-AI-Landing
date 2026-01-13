import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <div className={styles.logoImage}>
            <Image
              src="/logo.png"
              alt="Maven AI Logo"
              width={64}
              height={64}
            />
          </div>
          <div className={styles.logoText}>Maven</div>
        </div>

        <nav className={styles.nav}>
          <a href="#solutions">Solutions</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className={styles.cta}>
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Demo
          </a>
        </div>
      </div>
    </header>
  )
}