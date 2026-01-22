import { useState, useEffect } from 'react'
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
  // Start at the center-most card
  const initialIndex = Math.floor(testimonials.length / 2)
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

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

  // Card dimensions and spacing (in rem, assuming 1rem = 10px)
  // Desktop dimensions (used at 769px and above, default styles)
  const ACTIVE_CARD_WIDTH_DESKTOP = 76.8 // 768px = 76.8rem
  const INACTIVE_CARD_WIDTH_DESKTOP = 70.8 // 708px = 70.8rem
  const CARD_GAP_DESKTOP = 2 // 20px = 2rem

  // Mobile dimensions (matching CSS values, used below 768px)
  const ACTIVE_CARD_WIDTH_MOBILE = 40 // 40rem (400px)
  const INACTIVE_CARD_WIDTH_MOBILE = 38 // 38rem (380px)
  const CARD_GAP_MOBILE = 2 // 2rem (20px)

  // Use responsive dimensions
  // Mobile: <= 768px uses mobile dimensions
  // Tablet/Desktop: > 768px uses desktop dimensions (default CSS styles)
  // At 1230px+ explicitly uses desktop dimensions (CSS media query)
  const ACTIVE_CARD_WIDTH = isMobile ? ACTIVE_CARD_WIDTH_MOBILE : ACTIVE_CARD_WIDTH_DESKTOP
  const INACTIVE_CARD_WIDTH = isMobile ? INACTIVE_CARD_WIDTH_MOBILE : INACTIVE_CARD_WIDTH_DESKTOP
  const CARD_GAP = isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP

  // Spacing between card centers (using inactive width + gap for simpler calculation)
  const CARD_SPACING = INACTIVE_CARD_WIDTH + CARD_GAP

  // Normalize index to always be within bounds (0 to testimonials.length - 1)
  const normalizeIndex = (index: number): number => {
    // Handle negative indices properly
    if (index < 0) {
      const mod = index % testimonials.length
      return mod < 0 ? mod + testimonials.length : mod
    }
    // Handle indices >= length
    if (index >= testimonials.length) {
      return index % testimonials.length
    }
    return index
  }

  const handleCardClick = (targetIndex: number) => {
    // Normalize the target index to ensure it's within bounds
    const normalizedIndex = normalizeIndex(targetIndex)
    setActiveIndex(normalizedIndex)
  }

  // Calculate transform to center the active card
  // We need to account for half the active card width plus spacing for previous cards
  const calculateTransform = () => {
    const halfActiveWidth = ACTIVE_CARD_WIDTH / 2
    
    // Normalize the active index to ensure it's within bounds
    const normalizedIndex = normalizeIndex(activeIndex)
    
    // For each previous card, account for inactive width + gap
    const previousCardsOffset = normalizedIndex * CARD_SPACING
    return `translateX(calc(50% - ${halfActiveWidth + previousCardsOffset}rem))`
  }

  // Get normalized active index for rendering
  const normalizedActiveIndex = normalizeIndex(activeIndex)

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.heading}>
        What <span className={styles.headingHighlight}>people</span> say about us.
      </h2>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselList}
          style={
            isTablet
              ? undefined
              : { transform: calculateTransform() }
          }
        >
          {testimonials.map((testimonial, index) => {
            // On tablet, all cards are active (horizontal scroll)
            // On mobile and desktop, use carousel logic
            const isActive = isTablet ? true : index === normalizedActiveIndex

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
    </section>
  )
}