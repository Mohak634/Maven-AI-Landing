import styles from './About.module.css'
import TeamCard from './TeamCard'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>Meet the people behind the curtain</h2>
      
      <div className={styles.teamGrid}>
        <TeamCard
          imagePath="/Team/akshat.jpg"
          name="Akshat Ajmera"
          role="Finance Lead"
        />
        <TeamCard
          imagePath="/Team/akshat.jpg"
          name="Yuv Bindal"
          role="Tech Lead"
        />
        <TeamCard
          imagePath="/Team/akshat.jpg"
          name="Shayaan"
          role="Tech Lead"
        />
      </div>
    </section>
  )
}
