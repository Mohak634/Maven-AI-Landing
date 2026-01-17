import { AnchorHTMLAttributes, ReactNode, MouseEvent } from 'react'
import styles from './NavLink.module.css'

type NavLinkProps = {
  children: ReactNode
  href?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function NavLink({
  children,
  href = '#',
  className = '',
  ...props
}: NavLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only handle smooth scrolling for anchor links (starting with #)
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        const navbarHeight = 90 // --navbar-height from tokens.css
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <a
      href={href}
      className={`${styles.navLink} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  )
}
