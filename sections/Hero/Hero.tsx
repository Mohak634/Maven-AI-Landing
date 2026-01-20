import styles from './Hero.module.css'
import Button from '@/components/ui/Button'
import HeroMockup from '@/sections/HeroMockup/HeroMockup'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background Layer */}
      <div className={styles.backgroundLayer}>
        <img
          src="/Hero/bg.svg"
          alt=""
          className={styles.backgroundImage}
        />
      </div>

      {/* Foreground Layer */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Stop wasting analyst hours on
            <br />
            manual modelling & workflows
          </h1>
          <p className={styles.description}>
            Automate modelling, reporting, and deliverables with an AI built for
            finance and professional services. Saving hours per analyst, every week.
          </p>
        </div>
        <div className={styles.ctaContainer}>
          <a 
            href="https://demo.mavenai.finance" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaLink}>
            <Button variant="primary" showTrailingIcon>
              Try Free
            </Button>
          </a>
        </div>
        <div className={styles.mockupContainer}>
          <HeroMockup
            videoSrc="/videos/hero-demo.mp4"
            aspectRatio="16/9"
          />
        </div>
      </div>
    </section>
  )
}
