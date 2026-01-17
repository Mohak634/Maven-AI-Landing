import { useState } from 'react'
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
    imagePath: 'public\Oval.svg',
  },
  {
    content:
      'Maven has transformed how we handle financial operations. The platform is intuitive and powerful, making complex workflows simple and efficient.',
    name: 'Jane Smith',
    position: 'CFO at Tech Innovations Inc.',
    imagePath: 'public\Oval.svg',
  },
  {
    content:
      'As a financial analyst, I rely on Maven daily. The accuracy and speed of its insights have been game-changing for our team.',
    name: 'Robert Johnson',
    position: 'Senior Analyst at Global Finance Corp',
    imagePath: 'public\Oval.svg',
  },
  {
    content:
      'The automation features in Maven have saved us countless hours. It handles complex calculations and reporting with precision.',
    name: 'Emily Davis',
    position: 'Finance Director at Startup Ventures',
    imagePath: 'public\Oval.svg',
  },
  {
    content:
      'Maven provides the transparency and control we need for our financial processes. Highly recommend it to any finance team.',
    name: 'Michael Chen',
    position: 'VP of Finance at Enterprise Solutions',
    imagePath: 'public\Oval.svg',
  },
]

export default function Testimonials() {
  // Start at the center-most card
  const initialIndex = Math.floor(testimonials.length / 2)
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  // Card dimensions and spacing
  const ACTIVE_CARD_WIDTH = 768
  const INACTIVE_CARD_WIDTH = 708
  const CARD_GAP = 20
  // Spacing between card centers (using inactive width + gap for simpler calculation)
  const CARD_SPACING = INACTIVE_CARD_WIDTH + CARD_GAP

  const handleCardClick = (targetIndex: number) => {
    setActiveIndex(targetIndex)
  }

  // Calculate transform to center the active card
  // We need to account for half the active card width plus spacing for previous cards
  const calculateTransform = () => {
    const halfActiveWidth = ACTIVE_CARD_WIDTH / 2
    // For each previous card, account for inactive width + gap
    const previousCardsOffset = activeIndex * CARD_SPACING
    return `translateX(calc(50% - ${halfActiveWidth + previousCardsOffset}px))`
  }

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.heading}>
        What <span className={styles.headingHighlight}>people</span> say about us.
      </h2>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselList} style={{ transform: calculateTransform() }}>
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex

            return (
              <TestimonialCard
                key={`testimonial-${index}-${testimonial.name}`}
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                imagePath={testimonial.imagePath}
                isActive={isActive}
                onClick={() => handleCardClick(index)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}