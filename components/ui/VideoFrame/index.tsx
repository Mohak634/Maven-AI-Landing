import { HTMLAttributes, ReactNode } from 'react'
import styles from './VideoFrame.module.css'

type VideoFrameProps = {
  aspectRatio?: '16/9' | '4/5' | '1/1'
  radius?: 'sharp' | 'soft'
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

export default function VideoFrame({
  aspectRatio = '16/9',
  radius = 'sharp',
  children,
  className = '',
  ...props
}: VideoFrameProps) {
  const aspectRatioClass = styles[`aspect${aspectRatio.replace('/', '')}`]
  const radiusClass = radius === 'sharp' ? styles.radiusSharp : styles.radiusSoft

  return (
    <div
      className={`${styles.videoFrame} ${aspectRatioClass} ${radiusClass} ${className}`}
      {...props}
    >
      {children || <div className={styles.placeholder} />}
    </div>
  )
}
