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
  const [isSticky, setIsSticky] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const previousIndexRef = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)
  const scrollAccumulatorRef = useRef(0)
  const isScrollingRef = useRef(false)
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

  // Scroll listener: Detect when section reaches top of viewport
  useEffect(() => {
    if (!isDesktop || !sectionRef.current) return

    const section = sectionRef.current

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top

      // Section top is at or above viewport top (0), and section bottom is still in viewport
      if (sectionTop <= 0 && rect.bottom > 0) {
        // Only activate sticky if not on last tab
        if (activeFeatureIndex < features.length - 1) {
          setIsSticky(true)
        } else {
          // On last tab: release sticky to allow normal scroll
          setIsSticky(false)
          scrollAccumulatorRef.current = 0
        }
      } else {
        // Section is above viewport (scrolled back up) or below viewport (scrolled past)
        setIsSticky(false)
        scrollAccumulatorRef.current = 0
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDesktop, activeFeatureIndex, features.length])

  // Wheel event handler: Switch tabs while sticky, prevent default scroll
  useEffect(() => {
    if (!isDesktop || !isSticky) return

    const handleWheel = (e: WheelEvent) => {
      // Skip if already processing a scroll
      if (isScrollingRef.current) return

      // If on last tab and scrolling down, release sticky and allow smooth scroll to next section
      if (activeFeatureIndex === features.length && e.deltaY > 0) {
        e.preventDefault()
        e.stopPropagation()
      
        setIsSticky(false)
        scrollAccumulatorRef.current = 0
      
        // Defer scrolling to next frame so layout updates first
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const nextSection = document.getElementById('usecases')
            if (!nextSection) return
      
            const navbarHeight = 90
            const top =
              nextSection.getBoundingClientRect().top +
              window.scrollY -
              navbarHeight
      
            window.scrollTo({
              top,
              behavior: 'smooth',
            })
          })
        })
      
        return
      }

      // Prevent default scrolling while sticky (for all other cases)
      e.preventDefault()
      e.stopPropagation()

      // Accumulate scroll delta
      scrollAccumulatorRef.current += e.deltaY

      // Scroll threshold: 200px per tab switch
      const SCROLL_THRESHOLD = 200

      if (Math.abs(scrollAccumulatorRef.current) >= SCROLL_THRESHOLD) {
        isScrollingRef.current = true

        if (scrollAccumulatorRef.current > 0) {
          // Scrolling down: next tab
          if (activeFeatureIndex < features.length - 1) {
            setActiveFeatureIndex((prev) => {
              const nextIndex = Math.min(prev + 1, features.length - 1)
              return nextIndex
            })
          }
        } else {
          // Scrolling up: previous tab
          if (activeFeatureIndex > 0) {
            setActiveFeatureIndex((prev) => Math.max(prev - 1, 0))
          }
        }

        // Reset accumulator
        scrollAccumulatorRef.current = 0

        // Re-enable scrolling after animation
        setTimeout(() => {
          isScrollingRef.current = false
        }, 100)
      }

      // Check section position after wheel event to update sticky state
      // This ensures we can detect when to release sticky even when scroll is prevented
      const section = sectionRef.current
      if (section) {
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect()
          if (rect.top > 0 || rect.bottom <= 0) {
            setIsSticky(false)
            scrollAccumulatorRef.current = 0
          }
        })
      }
    }

    // Use passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [isDesktop, isSticky, activeFeatureIndex, features.length])

  // No need to set minHeight - let the section use its natural height
  // The sticky behavior will work with the natural section height

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className={`${styles.features} ${isSticky ? styles.featuresSticky : ''}`}
    >
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
                  onClick={() => setActiveFeatureIndex(index)}
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
    </section>
  )
}