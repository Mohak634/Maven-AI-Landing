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
  isActive,
  onClick,
}: TestimonialCardProps) {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.cardActive : styles.cardInactive}`}
      onClick={onClick}
    >
      <span className={styles.quoteMarkTop}>"</span>
      <span className={styles.quoteMarkBottom}>"</span>

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