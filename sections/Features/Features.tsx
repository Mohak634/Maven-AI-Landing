'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './Features.module.css'
import ScrollSection from '@/components/ScrollSection'

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
    description: 'Maven stores your files and documents in a secure vault, so you can access them anytime.',
    imageSrc: '/Features/Vault.png',
  },
  {
    id: 'feature-5',
    label: 'Workflows',
    description: 'Maven allows you to create and manage your workflows, so you can automate those repetitive tasks.',
    imageSrc: '/Features/Workflows.png',
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
  const [isDesktop, setIsDesktop] = useState(false)
  const previousIndexRef = useRef(0)
  const containerRef = useRef<HTMLElement>(null)
  const activeFeature = features[activeFeatureIndex]

  // Detect desktop viewport (min-width: 1024px)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Animation effect for tab switching
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

  // Scroll listener: Calculate active feature based on scroll position in the tall container
  useEffect(() => {
    if (!isDesktop) return

    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()

      // Calculate how far we've scrolled into the container
      // For consistency across displays, we get the nav height computed.
      // E.g., if sticky wrapper stops at top: 90px (from var(--navbar-height)), 
      // rect.top will be 90 when we reach it.
      // Let's use a small threshold above 0 for edge case detection.

      // We start transitioning when container reaches sticky position
      // In CSS, sticky is top: var(--navbar-height). To be safe, we just check rect.top relative to 100px.
      // Let's use 100 as a safe sticky top offset for the calculation.
      const stickyTopOffset = 100

      if (rect.top > stickyTopOffset) {
        if (activeFeatureIndex !== 0) setActiveFeatureIndex(0)
        return
      }

      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return

      // The distance scrolled into the sticky container
      const scrolled = stickyTopOffset - rect.top

      let progress = scrolled / scrollableDistance
      progress = Math.max(0, Math.min(1, progress))

      const rawIndex = Math.floor(progress * features.length)
      const newIndex = Math.min(rawIndex, features.length - 1)

      if (newIndex !== activeFeatureIndex) {
        setActiveFeatureIndex(newIndex)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDesktop, activeFeatureIndex, features.length])

  return (
    <ScrollSection>
      <section
        id="features"
        ref={containerRef}
        className={styles.featuresOuter}
      >
        <div className={styles.featuresStickyWrapper}>
          <div className={styles.features}>
            <div className={styles.container}>
              <h2 className={styles.heading}>Features that work for You</h2>
              <div className={styles.content}>
                <div className={styles.leftPane}>
                  <div className={styles.featureTabsList}>
                    {features.map((feature, index) => (
                      <FeatureTab
                        key={feature.id}
                        label={feature.label}
                        isActive={index === activeFeatureIndex}
                        onClick={() => {
                          if (containerRef.current && isDesktop) {
                            const rect = containerRef.current.getBoundingClientRect()
                            const scrollableDistance = rect.height - window.innerHeight
                            const targetScrollTop = window.scrollY + rect.top - 100 + (index / features.length) * scrollableDistance + 10
                            window.scrollTo({ top: targetScrollTop, behavior: 'smooth' })
                          } else {
                            setActiveFeatureIndex(index)
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.rightPane}>
                  <FeatureContent feature={activeFeature} isAnimating={isAnimating} />
                </div>
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
          </div>
        </div>
      </section>
    </ScrollSection>
  )
}