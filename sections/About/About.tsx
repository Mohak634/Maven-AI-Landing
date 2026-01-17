import styles from './About.module.css'
import TeamCard from './TeamCard'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>Meet the people behind the curtain</h2>
      
      <div className={styles.teamGrid}>
        <TeamCard
          imagePath="/team/akshat-ajmera.jpg"
          name="Akshat Ajmera"
          role="Finance Lead"
        />
        <TeamCard
          imagePath="/team/yuv-bindal.jpg"
          name="Yuv Bindal"
          role="Tech Lead"
        />
        <TeamCard
          imagePath="/team/shayaan.jpg"
          name="Shayaan"
          role="Tech Lead"
        />
      </div>
    </section>
  )
}
