import { useState, useEffect } from 'react'
import ScrollSection from '@/components/ScrollSection'
import styles from './Testimonials.module.css'
import TestimonialCard from './TestimonialCard'

type Testimonial = {
  content: string
  name: string
  position: string
  imagePath: string
}

const testimonials: Testimonial[] = [
  {
    content:
      'I trust Maven with my daily finance workflows. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    name: 'Firstname Lastname',
    position: 'Huge Position at Majorhedge Fund',
    imagePath: '/Testimonials/Oval.svg',
  },
  {
    content:
      'Maven has transformed how we handle financial operations. The platform is intuitive and powerful, making complex workflows simple and efficient.',
    name: 'Jane Smith',
    position: 'CFO at Tech Innovations Inc.',
    imagePath: '/Testimonials/Oval.svg',
  },
  {
    content:
      'As a financial analyst, I rely on Maven daily. The accuracy and speed of its insights have been game-changing for our team.',
    name: 'Robert Johnson',
    position: 'Senior Analyst at Global Finance Corp',
    imagePath: '/Testimonials/Oval.svg',
  },
  {
    content:
      'The automation features in Maven have saved us countless hours. It handles complex calculations and reporting with precision.',
    name: 'Emily Davis',
    position: 'Finance Director at Startup Ventures',
    imagePath: '/Testimonials/Oval.svg',
  },
  {
    content:
      'Maven provides the transparency and control we need for our financial processes. Highly recommend it to any finance team.',
    name: 'Michael Chen',
    position: 'VP of Finance at Enterprise Solutions',
    imagePath: '/Testimonials/Oval.svg',
  },
]

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Infinite loop configuration: Duplicate the items 3 times for a buffer on each side
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  // Start at the center copy to allow natural backwards/forwards scrolling
  const initialIndex = testimonials.length + Math.floor(testimonials.length / 2)

  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth
      // Use mobile layout only below 768px
      setIsMobile(width <= 768)
      // Use desktop dimensions at 1230px and above
      setIsDesktop(width >= 1230)
      // Tablet is between 769px and 1229px
      setIsTablet(width > 768 && width < 1230)
    }

    checkViewport()
    window.addEventListener('resize', checkViewport)
    return () => window.removeEventListener('resize', checkViewport)
  }, [])

  // Auto-play effect
  useEffect(() => {
    if (isTablet) return // Disable auto-play on tablet horizontal scroll

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setActiveIndex((prev) => prev + 1)
    }, 4000)

    // Clear interval immediately on interaction or unmount
    return () => clearInterval(interval)
  }, [isTablet, activeIndex])

  // Restore transition state instantly after an invisible snap boundary
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  // Card dimensions and spacing (in rem, assuming 1rem = 10px)
  // Desktop dimensions (used at 769px and above, default styles) - increased by 10%
  const ACTIVE_CARD_WIDTH_DESKTOP = 84.48 // 76.8rem * 1.1 = 84.48rem
  const INACTIVE_CARD_WIDTH_DESKTOP = 77.88 // 70.8rem * 1.1 = 77.88rem
  const CARD_GAP_DESKTOP = 2.2 // 2rem * 1.1 = 2.2rem

  // Mobile dimensions (matching CSS values, used below 768px) - increased by 10%
  const ACTIVE_CARD_WIDTH_MOBILE = 44 // 40rem * 1.1 = 44rem
  const INACTIVE_CARD_WIDTH_MOBILE = 41.8 // 38rem * 1.1 = 41.8rem
  const CARD_GAP_MOBILE = 2.2 // 2rem * 1.1 = 2.2rem

  // Use responsive dimensions
  const ACTIVE_CARD_WIDTH = isMobile ? ACTIVE_CARD_WIDTH_MOBILE : ACTIVE_CARD_WIDTH_DESKTOP
  const INACTIVE_CARD_WIDTH = isMobile ? INACTIVE_CARD_WIDTH_MOBILE : INACTIVE_CARD_WIDTH_DESKTOP
  const CARD_GAP = isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP

  // Spacing between card centers (using inactive width + gap for simpler calculation)
  const CARD_SPACING = INACTIVE_CARD_WIDTH + CARD_GAP

  const handleCardClick = (targetIndex: number) => {
    if (targetIndex === activeIndex) return
    setIsTransitioning(true)
    setActiveIndex(targetIndex)
  }

  const handleTransitionEnd = () => {
    // If scrolling horizontally into the first copy (left buffer)
    if (activeIndex < testimonials.length) {
      setIsTransitioning(false)
      setActiveIndex(activeIndex + testimonials.length)
    }
    // If scrolling horizontally into the third copy (right buffer)
    else if (activeIndex >= testimonials.length * 2) {
      setIsTransitioning(false)
      setActiveIndex(activeIndex - testimonials.length)
    }
  }

  // Calculate transform to center the active card over continuous bounds
  const calculateTransform = () => {
    const halfActiveWidth = ACTIVE_CARD_WIDTH / 2

    // For each previous card, account for inactive width + gap, natively moving without modulo snap.
    const previousCardsOffset = activeIndex * CARD_SPACING
    return `translateX(calc(50% - ${halfActiveWidth + previousCardsOffset}rem))`
  }

  return (
    <ScrollSection id="testimonials" className={styles.testimonials}>
      <h2 className={styles.heading}>
        What <span className={styles.headingHighlight}>people</span> say about us.
      </h2>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselList}
          style={
            isTablet
              ? undefined
              : {
                transform: calculateTransform(),
                transition: isTransitioning ? 'transform 0.5s ease' : 'none'
              }
          }
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map((testimonial, index) => {
            // On tablet, all cards are active (horizontal scroll)
            // On mobile and desktop, use carousel logic
            const isActive = isTablet ? true : index === activeIndex

            return (
              <TestimonialCard
                key={`testimonial-${index}-${testimonial.name}`}
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                imagePath={testimonial.imagePath}
                isActive={isActive}
                onClick={isTablet ? undefined : () => handleCardClick(index)}
              />
            )
          })}
        </div>
      </div>
    </ScrollSection>
  )
}