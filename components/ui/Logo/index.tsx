import Image from 'next/image'
import styles from './Logo.module.css'

type LogoProps = {
  variant?: 'white' | 'transparent'
  className?: string
}

export default function Logo({ variant = 'white', className }: LogoProps) {
  const logoSrc = variant === 'transparent' 
    ? '/logo-transparent.svg' 
    : '/logo-white.svg'
  
  const logoAlt = variant === 'transparent'
    ? 'Maven AI Logo'
    : 'Maven AI Logo'

  return (
    <div className={`${styles.logo} ${variant === 'white' ? styles.white : styles.transparent} ${className || ''}`}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={167}
        height={168}
        className={styles.image}
      />
    </div>
  )
}
