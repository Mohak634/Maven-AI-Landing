import { useState } from 'react'
import styles from './UseCases.module.css'
import VideoFrame from '@/components/ui/VideoFrame'

type UseCase = {
  label: string
  description: string
  videoSrc: string
}

const useCases: UseCase[] = [
  {
    label: 'Use Case Here',
    description:
      'Maven remembers your workstreams, files, and decisions, so every step builds on the last.',
    videoSrc: 'videos/hero-demo.mp4',
  },  
  {
    label: 'Use Case Here',
    description:
      'Maven remembers your workstreams, files, and decisions, so every step builds on the last.',
    videoSrc: 'videos/useCases/Research.mp4',
  },
  {
    label: 'Use Case Here',
    description:
      'Maven remembers your workstreams, files, and decisions, so every step builds on the last.',
    videoSrc: 'videos/useCases/Research.mp4',
  },
  {
    label: 'Use Case Here',
    description:
      'Maven remembers your workstreams, files, and decisions, so every step builds on the last.',
    videoSrc: 'videos/useCases/Research.mp4',
  },
  {
    label: 'Use Case Here',
    description:
      'Maven remembers your workstreams, files, and decisions, so every step builds on the last.',
    videoSrc: 'videos/useCases/Research.mp4',
  },
]

export default function UseCases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeUseCase = useCases[activeIndex]

  return (
    <section id="usecases" className={styles.useCases}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Real Work. Real Impact</h2>
        <div className={styles.content}>
          <div className={styles.tabs}>
            {useCases.map((useCase, index) => (
              <button
                key={index}
                className={`${styles.tab} ${activeIndex === index ? styles.tabActive : styles.tabInactive}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <div className={styles.tabButton}>
                  <p className={styles.tabLabel}>{useCase.label}</p>
                </div>
              </button>
            ))}
          </div>
          <p className={styles.description}>{activeUseCase.description}</p>
          <div className={styles.videoContainer}>
            <div className={styles.videoBackground} />
            <VideoFrame aspectRatio="4/5" radius="sharp" className={styles.videoFrame}>
              <video
                key={activeUseCase.videoSrc}
                src={activeUseCase.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
              />
            </VideoFrame>
          </div>
        </div>
      </div>
    </section>
  )
}