import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'
import styles from './CarouselDots.module.css'

type CarouselDotsProps = {
  active?: boolean
  onClick?: () => void
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export default function CarouselDots({
  active = false,
  onClick,
  className = '',
  ...props
}: CarouselDotsProps) {
  if (active) {
    return (
      <button
        type="button"
        className={`${styles.dot} ${styles.active} ${className}`}
        onClick={onClick}
        aria-label="Active carousel dot"
        {...props}
      >
        <span className={styles.activeIndicator} />
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`${styles.dot} ${styles.inactive} ${className}`}
      onClick={onClick}
      aria-label="Inactive carousel dot"
      {...props}
    >
      <Image
        src="/carousel-dot-inactive.svg"
        alt=""
        width={24}
        height={24}
        className={styles.inactiveImage}
      />
    </button>
  )
}
