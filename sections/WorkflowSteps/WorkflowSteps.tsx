'use client'

import { useState } from 'react'
import styles from './WorkflowSteps.module.css'
import VideoFrame from '@/components/ui/VideoFrame'
import CarouselDots from '@/components/ui/CarouselDots'

type WorkflowStep = {
  stepNumber: number
  title: string
  description: string
  mockupSrc: string
}

const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: 'Ask in plain English',
    description:
      'Describe what you want built or reviewed: models, workflows or logic. Maven understands analyst-grade instructions, not just prompts.',
    mockupSrc: '/workflow/step1-mockup.png',
  },
  {
    stepNumber: 2,
    title: 'Maven does the heavy lifting',
    description:
      'Maven analyzes your requirements and generates production-ready code, documentation, and test cases automatically.',
    mockupSrc: '/workflow/step2-mockup.png',
  },
  {
    stepNumber: 3,
    title: 'Review and deploy',
    description:
      'Review the generated output, make any necessary adjustments, and deploy with confidence. Full audit trail included.',
    mockupSrc: '/workflow/step3-mockup.png',
  },
]

export default function WorkflowSteps() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="workflow" className={styles.workflowSteps}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>How Maven fits into your workflow</h2>
          <p className={styles.subtitle}>
            From prompt to production-ready output, without breaking auditability.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.steps}>
            {workflowSteps.map((step, index) => {
              const isActive = index === activeStep

              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  className={`${styles.stepCard} ${isActive ? styles.stepCardActive : styles.stepCardInactive}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={styles.activeContent}>
                    <p className={styles.stepNumberActive}>Step {step.stepNumber}</p>
                    <div className={styles.mockupContainer}>
                      <VideoFrame aspectRatio="16/9" radius="sharp" className={styles.videoFrame}>
                        <img src={step.mockupSrc} alt={step.title} />
                      </VideoFrame>
                    </div>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <p className={styles.stepNumberInactive}>{step.stepNumber}</p>
                </button>
              )
            })}
          </div>

          <div className={styles.carouselDots}>
            {workflowSteps.map((_, index) => (
              <CarouselDots
                key={index}
                active={index === activeStep}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
