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
          keyPoint1="• Lorem ipsum dolor sit amet."
          keyPoint2="• Lorem ipsum dolor sit amet."
          keyPoint3="• Lorem ipsum dolor sit amet."
          keyPoint4="• Lorem ipsum dolor sit amet."
        />
        <TeamCard
          imagePath="/Team/akshat.jpg"
          name="Yuv Bindal"
          role="Tech Lead"
          keyPoint1="• Lorem ipsum dolor sit amet."
          keyPoint2="• Lorem ipsum dolor sit amet."
          keyPoint3="• Lorem ipsum dolor sit amet."
          keyPoint4="• Lorem ipsum dolor sit amet."
        />
        <TeamCard
          imagePath="/Team/akshat.jpg"
          name="Shayaan"
          role="Tech Lead"
          keyPoint1="• Lorem ipsum dolor sit amet."
          keyPoint2="• Lorem ipsum dolor sit amet"
          keyPoint3="• Lorem ipsum dolor sit amet."
          keyPoint4="• Lorem ipsum dolor sit amet."
        />
      </div>
    </section>
  )
}
