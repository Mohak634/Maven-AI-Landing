'use client'

import { useState } from 'react'
import styles from './Features.module.css'

type Feature = {
  id: string
  label: string
  description: string
  imageSrc: string
}

const features: Feature[] = [
  {
    id: 'feature-1',
    label: 'Feature 1',
    description: 'Description for feature 1 goes here.',
    imageSrc: '/Features/Integrations.png',
  },
  {
    id: 'feature-2',
    label: 'Feature 2',
    description: 'Description for feature 2 goes here.',
    imageSrc: '/Features/Bg.png',
  },
  {
    id: 'feature-3',
    label: 'Feature 3',
    description: 'Description for feature 3 goes here.',
    imageSrc: '/Features/Integrations.png',
  },
  {
    id: 'feature-4',
    label: 'Feature 4',
    description: 'Description for feature 4 goes here.',
    imageSrc: '/Features/Integrations.png',
  },
]

type FeatureTabProps = {
  label: string
  isActive: boolean
  onClick: () => void
}

function FeatureTab({ label, isActive, onClick }: FeatureTabProps) {
  return (
    <button
      type="button"
      className={`${styles.featureTab} ${isActive ? styles.featureTabActive : styles.featureTabInactive}`}
      onClick={onClick}
    >
      <span className={`${styles.featureTabLabel} ${isActive ? styles.featureTabLabelActive : ''}`}>{label}</span>
    </button>
  )
}

type FeatureContentProps = {
  feature: Feature
}

function FeatureContent({ feature }: FeatureContentProps) {
  return (
    <div className={styles.featureContent}>
      <div className={styles.scrollerContent}>
        <div className={styles.bgContainer}>
          <div className={styles.bgLayer}>
            <div className={styles.bgGradient} />
            <div className={styles.bgImageWrapper}>
              <img 
                src="Features/Bg.png" 
                alt="Background Image" 
                className={styles.bgImage}
              />
            </div>
          </div>
          <div className={styles.bgShadow} />
        </div>
        <div className={styles.contentFrame}>
          <div className={styles.pngFrame}>
            <img 
              src={feature.imageSrc} 
              alt={feature.label}
              className={styles.pngImage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const activeFeature = features[activeFeatureIndex]

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.leftPane}>
          <div className={styles.featureTabsList}>
            {features.map((feature, index) => (
              <FeatureTab
                key={feature.id}
                label={feature.label}
                isActive={index === activeFeatureIndex}
                onClick={() => setActiveFeatureIndex(index)}
              />
            ))}
          </div>
          <div className={styles.featureDescription}>
            <p className={styles.featureDescriptionText}>
              {features[activeFeatureIndex].description}
            </p>
          </div>
        </div>
        <div className={styles.rightPane}>
          <FeatureContent feature={activeFeature} />
        </div>
      </div>
    </section>
  )
}
