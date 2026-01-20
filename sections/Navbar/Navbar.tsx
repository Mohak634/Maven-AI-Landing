'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Logo from '@/components/ui/Logo'
import NavLink from '@/components/ui/NavLink'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
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

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburger}>
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}
        onClick={closeMobileMenu}
      >
        <div 
          className={styles.mobileMenuContent}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with logo and close button */}
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileMenuLogoSection}>
              <div className={styles.mobileMenuLogoImage}>
                <Logo variant="transparent" />
              </div>
              <div className={styles.mobileMenuLogoText}>Maven</div>
            </div>
            <button 
              className={styles.mobileMenuClose}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={styles.mobileMenuNav}>
            <NavLink href="#solutions" onClick={closeMobileMenu}>Solutions</NavLink>
            <NavLink href="#security" onClick={closeMobileMenu}>Security</NavLink>
            <NavLink href="#pricing" onClick={closeMobileMenu}>Pricing</NavLink>
          </nav>

          {/* CTA Button */}
          <div className={styles.mobileMenuCta}>
            <Button variant="primary" onClick={closeMobileMenu}>Request Demo</Button>
          </div>
        </div>
      </div>
    </>
  )
}
