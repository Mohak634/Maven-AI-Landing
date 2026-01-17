import Image from 'next/image'
import styles from './TeamCard.module.css'

type TeamCardProps = {
  imagePath: string
  name: string
  role: string
}

export default function TeamCard({ imagePath, name, role }: TeamCardProps) {
  return (
    <div className={styles.outerCard}>
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
        </div>
      </div>
    </div>
  )
}
