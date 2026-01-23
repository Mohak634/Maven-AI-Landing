import Image from 'next/image'
import styles from './Security.module.css'
import Button from '@/components/ui/Button'

type SecurityFeature = {
  iconSrc: string
  iconAlt: string
  title: string
}

const securityFeatures: SecurityFeature[] = [
  {
    iconSrc: '/Security/Security Icon-3.svg',
    iconAlt: 'No Training on User Data',
    title: 'No Training on User Data',
  },
  {
    iconSrc: '/Security/Security Icon.svg',
    iconAlt: 'Industry Standard Encryption',
    title: 'Industry Standard Encryption',
  },
  {
    iconSrc: '/Security/Security Icon-2.svg',
    iconAlt: 'Full Data Transparency',
    title: 'Full Data Transparency',
  },
  {
    iconSrc: '/Security/Security Icon-1.svg',
    iconAlt: 'Detailed Audit Logs',
    title: 'Detailed Audit Logs',
  },
]

export default function Security() {
  return (
    <section id="security" className={styles.security}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.headline}>Built for Enterprise Security</h2>
          <p className={styles.supportingCopy}>
            Maven ensures your data stays compliant with strict privacy and security standards.
          </p>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Request+Demo+with+Maven+AI"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            <Button variant="primary">
              Learn More
            </Button>
          </a>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.grid}>
            {securityFeatures.map((feature, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={feature.iconSrc}
                    alt={feature.iconAlt}
                    width={153}
                    height={153}
                  />
                </div>
                <p className={styles.featureTitle}>{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
