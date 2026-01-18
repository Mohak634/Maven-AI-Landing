import { useState } from 'react'
import Toggle from '@/components/ui/Toggle'
import PricingCard from './PricingCard'
import styles from './Pricing.module.css'

type PricingPlan = {
  name: string
  monthlyPrice: string
  annualPrice: string
  features: string[]
  ctaText: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Individual',
    monthlyPrice: '$29',
    annualPrice: '$299',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    ctaText: 'Buy Now',
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$199',
    annualPrice: '$1999',
    features: [
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
      'Lorem ipsum dolor sit amet',
    ],
    ctaText: 'Contact Sales',
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = (checked: boolean) => {
    setIsAnnual(checked)
  }

  return (
    <section id="pricing" className={styles.pricing}>
      {/* Background Layer */}
      <div className={styles.backgroundLayer}>
        <img
          src="/Hero/bg.svg"
          alt=""
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Get Maven for your firm today.</h2>

          <div className={styles.toggleContainer}>
            <span className={styles.toggleLabel}>Monthly</span>
            {/* @ts-expect-error - TypeScript type inference issue with Toggle component */}
            <Toggle checked={isAnnual} onToggle={handleToggle} />
            <span className={styles.toggleLabel}>Annually</span>
          </div>
        </div>

        <div className={styles.cards}>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              planName={plan.name}
              price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
              billingPeriod={isAnnual ? ' /Year' : ' /Month'}
              features={plan.features}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
