import styles from './Navbar.module.css'
import Logo from '@/components/ui/Logo'
import NavLink from '@/components/ui/NavLink'
import Button from '@/components/ui/Button'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoImage}>
            <Logo variant="transparent" />
          </div>
          <div className={styles.logoText}>Maven</div>
        </div>

        <nav className={styles.nav}>
          <NavLink href="#solutions">Solutions</NavLink>
          <NavLink href="#security">Security</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </nav>

        <div className={styles.cta}>
          <Button variant="primary">Request Demo</Button>
        </div>
      </div>
    </header>
  )
}
