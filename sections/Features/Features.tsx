'use client'

import { useState } from 'react'
import styles from './Features.module.css'

type Feature = {
  id: string
  label: string
  description: string
}

const features: Feature[] = [
  {
    id: 'feature-1',
    label: 'Feature 1',
    description: 'Description for feature 1 goes here.',
  },
  {
    id: 'feature-2',
    label: 'Feature 2',
    description: 'Description for feature 2 goes here.',
  },
  {
    id: 'feature-3',
    label: 'Feature 3',
    description: 'Description for feature 3 goes here.',
  },
  {
    id: 'feature-4',
    label: 'Feature 4',
    description: 'Description for feature 4 goes here.',
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
                src="http://localhost:3845/assets/af131fcd994a169e6577b0c71cb87545da7e8d09.png" 
                alt="" 
                className={styles.bgImage}
              />
            </div>
          </div>
          <div className={styles.bgShadow} />
        </div>
        <div className={styles.contentFrame}>
          <div className={styles.integrationsGrid}>
            {/* Integration icons will be rendered here - placeholder for now */}
            <div className={styles.integrationsPlaceholder}>
              {/* Integration icons grid content */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featureDescription}>
        <p className={styles.featureDescriptionText}>{feature.description}</p>
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
          <h2 className={styles.sectionTitle}>Features</h2>
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
        </div>
        <div className={styles.rightPane}>
          <FeatureContent feature={activeFeature} />
        </div>
      </div>
    </section>
  )
}
