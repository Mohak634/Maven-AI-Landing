import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          Maven
        </div>

        <nav className={styles.nav}>
          <a href="#process">How it works</a>
          <a href="#features">Features</a>
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