import styles from './About.module.css'
import ScrollSection from '@/components/ScrollSection'
import TeamCard from './TeamCard'

export default function About() {
  return (
    <ScrollSection>
      <section id="about" className={styles.about}>
        <h2 className={styles.heading}>Meet the people behind the curtain</h2>
        
        <div className={styles.teamGrid}>
          <TeamCard
            imagePath="/Team/placeholder.svg"
            name="Lorem Ipsum"
            role="Finance Lead"
            keyPoint1="• Lorem ipsum dolor sit amet."
            keyPoint2="• Lorem ipsum dolor sit amet."
            keyPoint3="• Lorem ipsum dolor sit amet."
            keyPoint4="• Lorem ipsum dolor sit amet."
          />
          <TeamCard
            imagePath="/Team/placeholder.svg"
            name="Dolor Amet"
            role="Tech Lead"
            keyPoint1="• Lorem ipsum dolor sit amet."
            keyPoint2="• Lorem ipsum dolor sit amet."
            keyPoint3="• Lorem ipsum dolor sit amet."
            keyPoint4="• Lorem ipsum dolor sit amet."
          />
          <TeamCard
            imagePath="/Team/placeholder.svg"
            name="Sit Consectetur"
            role="Tech Lead"
            keyPoint1="• Lorem ipsum dolor sit amet."
            keyPoint2="• Lorem ipsum dolor sit amet"
            keyPoint3="• Lorem ipsum dolor sit amet."
            keyPoint4="• Lorem ipsum dolor sit amet."
          />
        </div>
      </section>
    </ScrollSection>
  )
}
