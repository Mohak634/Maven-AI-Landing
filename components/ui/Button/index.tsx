import { ButtonHTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'
import styles from './Button.module.css'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  showTrailingIcon?: boolean
  showLeadingIcon?: boolean
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  variant = 'primary',
  children,
  showTrailingIcon = false,
  showLeadingIcon = false,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary
  const stateClass = disabled ? styles.disabled : ''

  return (
    <button
      className={`${styles.button} ${variantClass} ${stateClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {showLeadingIcon && (
        <span className={styles.leadingIcon} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
        </span>
      )}
      <span className={styles.text}>{children}</span>
      {showTrailingIcon && (
        <span className={styles.trailingIcon} aria-hidden="true">
          <Image src="/icon-arrow-right.svg" alt="" width={24} height={24} />
        </span>
      )}
    </button>
  )
}
