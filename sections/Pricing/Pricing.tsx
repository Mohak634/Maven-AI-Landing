import { useState } from 'react'
import Image from 'next/image'
import Toggle from '@/components/ui/Toggle'
import PricingCard from './PricingCard'
import styles from './Pricing.module.css'

const imgVisual = 'http://localhost:3845/assets/78507c3aaa85a48ee494d18e287533fc8aead6a1.svg'
const imgVisual1 = 'http://localhost:3845/assets/09dcb305be1d03bed81534ad0c190f0db17c8ac7.svg'

type PricingPlan = {
  name: string
  monthlyPrice: string
  annualPrice: string
  features: string[]
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
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = (checked: boolean) => {
    setIsAnnual(checked)
  }

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.background}>
        <div className={styles.backgroundVisual1}>
          <div className={styles.visualWrapper}>
            <div className={styles.visualContainer}>
              <img
                src={imgVisual}
                alt=""
                className={styles.visualImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.backgroundVisual2}>
          <div className={styles.visualContainer}>
            <img
              src={imgVisual1}
              alt=""
              className={styles.visualImage}
            />
          </div>
        </div>
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}
