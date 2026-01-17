'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Logo from '@/components/ui/Logo'
import NavLink from '@/components/ui/NavLink'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
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
