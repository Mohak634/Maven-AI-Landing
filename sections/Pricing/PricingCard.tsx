import Button from '@/components/ui/Button'
import styles from './PricingCard.module.css'

type PricingCardProps = {
  planName: string
  price: string
  billingPeriod: string
  features: string[]
  ctaText?: string
}

export default function PricingCard({
  planName,
  price,
  billingPeriod,
  features,
  ctaText = 'Buy Now',
}: PricingCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.planName}>
            <h3 className={styles.planNameText}>{planName}</h3>
          </div>
          <div className={styles.price}>
            <span className={styles.priceAmount}>{price}</span>
            <span className={styles.billingPeriod}>{billingPeriod}</span>
          </div>
        </div>

        <div className={styles.cta}>
          <Button variant="primary" className={styles.button}>
            {ctaText}
          </Button>
        </div>

        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.checkmark}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="var(--icon-black)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.featureText}>
                <p>{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
