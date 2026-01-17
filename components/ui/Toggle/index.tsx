import { ButtonHTMLAttributes } from 'react'
import Image from 'next/image'
import styles from './Toggle.module.css'

type ToggleProps = {
  checked?: boolean
  onToggle?: (checked: boolean) => void
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>

export default function Toggle({
  checked = false,
  onToggle,
  className = '',
  ...props
}: ToggleProps) {
  const handleClick = () => {
    if (onToggle) {
      onToggle(!checked)
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`${styles.toggle} ${checked ? styles.on : styles.off} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span className={styles.handle}>
        <Image
          src={checked ? '/toggle-handle-on.svg' : '/toggle-handle-off.svg'}
          alt=""
          width={32}
          height={32}
          className={styles.handleImage}
        />
      </span>
      <span className={styles.shadow} aria-hidden="true" />
    </button>
  )
}
