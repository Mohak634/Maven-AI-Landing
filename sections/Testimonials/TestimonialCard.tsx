import Image from 'next/image'
import styles from './TestimonialCard.module.css'

type TestimonialCardProps = {
  content: string
  name: string
  position: string
  imagePath: string
  isActive: boolean
  onClick: () => void
}

export default function TestimonialCard({
  content,
  name,
  position,
  imagePath,
  isActive,
  onClick,
}: TestimonialCardProps) {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}
      onClick={onClick}
    >
      <div className={styles.picture}>
        <div className={styles.imageWrapper}>
          <Image
            src={imagePath}
            alt={name}
            width={104}
            height={104}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.quote}>
          <p className={styles.quoteText}>{content}</p>
        </div>

        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </div>
  )
}