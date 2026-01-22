'use client'

import { useState, useEffect, useRef } from 'react'
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
    label: 'Assistant',
    description: 'Your AI assistant, always ready to help you with your tasks and projects.',
    imageSrc: '/Features/Assistant.png',
  },
  {
    id: 'feature-2',
    label: 'Integrations',
    description: 'Maven integrates with your existing tools and workflows to provide a seamless experience.',
    imageSrc: '/Features/Integrations.png',
  },
  {
    id: 'feature-3',
    label: 'Knowledge',
    description: 'Maven uses your organization\'s knowledge base to help you with your tasks and projects.',
    imageSrc: '/Features/Knowledge.png',
  },
  {
    id: 'feature-4',
    label: 'Vault',
    description: 'Description for feature 4 goes here.',
    imageSrc: '/Features/Integrations.png',
  },
  {
    id: 'feature-5',
    label: 'Workflows',
    description: 'Description for feature 5 goes here.',
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
  isAnimating: boolean
}

function FeatureContent({ feature, isAnimating }: FeatureContentProps) {
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
        <div className={`${styles.contentFrame} ${isAnimating ? styles.contentFrameAnimating : ''}`}>
          <div className={styles.pngFrame}>
            <img 
              src={feature.imageSrc} 
              alt={feature.label}
              className={styles.pngImage}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.featureDescription} ${isAnimating ? styles.featureDescriptionAnimating : ''}`}>
        <p className={styles.featureDescriptionText}>
          {feature.description}
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const previousIndexRef = useRef(0)
  const activeFeature = features[activeFeatureIndex]

  useEffect(() => {
    if (previousIndexRef.current !== activeFeatureIndex) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 600) // Match animation duration
      
      previousIndexRef.current = activeFeatureIndex
      return () => clearTimeout(timer)
    }
  }, [activeFeatureIndex])

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
        </div>
        <div className={styles.rightPane}>
          <FeatureContent feature={activeFeature} isAnimating={isAnimating} />
        </div>
        <div className={styles.mobileFeaturesList}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.mobileFeatureCard}>
              <div className={styles.mobileFeatureVisual}>
                <div className={styles.mobileFeatureBgContainer}>
                  <div className={styles.mobileFeatureBgLayer}>
                    <div className={styles.mobileFeatureBgGradient} />
                    <div className={styles.mobileFeatureBgImageWrapper}>
                      <img 
                        src="/Features/Bg.png" 
                        alt="" 
                        className={styles.mobileFeatureBgImage}
                      />
                    </div>
                  </div>
                  <div className={styles.mobileFeatureBgShadow} />
                </div>
                <div className={styles.mobileFeatureImageWrapper}>
                  <img 
                    src={feature.imageSrc} 
                    alt={feature.label}
                    className={styles.mobileFeatureImage}
                  />
                </div>
              </div>
              <h3 className={styles.mobileFeatureTitle}>{feature.label}</h3>
              <p className={styles.mobileFeatureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
