import { AnchorHTMLAttributes, ReactNode } from 'react'
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
  return (
    <a
      href={href}
      className={`${styles.navLink} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
