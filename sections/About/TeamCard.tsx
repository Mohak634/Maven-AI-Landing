import Image from 'next/image'
import styles from './TeamCard.module.css'

type TeamCardProps = {
  imagePath: string
  name: string
  role: string
  keyPoint1?: string
  keyPoint2?: string
  keyPoint3?: string
  keyPoint4?: string
  link?: string
}

export default function TeamCard({ 
  imagePath, 
  name, 
  role, 
  keyPoint1, 
  keyPoint2, 
  keyPoint3, 
  keyPoint4,
  link
}: TeamCardProps) {
  const keyPoints = [keyPoint1, keyPoint2, keyPoint3, keyPoint4].filter(Boolean)
  
  const cardContent = (
    <div className={styles.innerCard}>
      <div className={styles.imageFrame}>
        <Image
          src={imagePath}
          alt={`${name}, ${role}`}
          width={330}
          height={360}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
        {keyPoints.length > 0 && (
          <div className={styles.keyPoints}>
            {keyPoints.map((point, index) => (
              <p key={index} className={styles.keyPoint}>
                {point}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
  
  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.outerCard}
      >
        {cardContent}
      </a>
    )
  }
  
  return (
    <div className={styles.outerCard}>
      {cardContent}
    </div>
  )
}
