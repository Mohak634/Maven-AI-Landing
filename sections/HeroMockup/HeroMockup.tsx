import { HTMLAttributes } from 'react'
import styles from './HeroMockup.module.css'
import VideoFrame from '@/components/ui/VideoFrame'

type HeroMockupProps = {
  videoSrc: string
  aspectRatio?: '16/9' | '4/3'
  className?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export default function HeroMockup({
  videoSrc,
  aspectRatio = '16/9',
  className = '',
  ...props
}: HeroMockupProps) {
  // VideoFrame only supports '16/9', '4/5', '1/1', so we use '16/9' as base
  // and handle '4/3' via custom CSS class
  const videoFrameAspectRatio = aspectRatio === '4/3' ? '16/9' : aspectRatio

  return (
    <div
      className={`${styles.heroMockup} ${aspectRatio === '4/3' ? styles.aspect43 : ''} ${className}`}
      {...props}
    >
      <div className={styles.page}>
        <div className={styles.browserChrome}>
          <div className={styles.dots}>
            <img
              src="/Hero/Dots.svg"
              alt=""
              className={styles.dotsImage}
            />
          </div>
          <div className={styles.urlBar} />
        </div>
        <div className={styles.videoContainer}>
          <VideoFrame
            aspectRatio={videoFrameAspectRatio as '16/9' | '4/5' | '1/1'}
            radius="sharp"
            className={styles.videoFrame}
          >
            <video
              src={videoSrc}
              loop
              muted
              playsInline
              autoPlay
              className={styles.video}
            />
          </VideoFrame>
        </div>
      </div>
    </div>
  )
}
