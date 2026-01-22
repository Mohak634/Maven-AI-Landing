import { HTMLAttributes, ReactNode, useState, useEffect, useRef, cloneElement, isValidElement } from 'react'
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
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoFrameRef = useRef<HTMLDivElement>(null)
  const expandedVideoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
      // Focus trap for accessibility
      expandedVideoRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  useEffect(() => {
    if (!isExpanded) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isExpanded])

  const handleClick = () => {
    if (isMobile) {
      setIsExpanded(true)
    }
  }

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(false)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false)
    }
  }

  const aspectRatioClass = styles[`aspect${aspectRatio.replace('/', '')}`]
  const radiusClass = radius === 'sharp' ? styles.radiusSharp : styles.radiusSoft

  return (
    <>
      <div
        ref={videoFrameRef}
        className={`${styles.videoFrame} ${aspectRatioClass} ${radiusClass} ${isMobile ? styles.clickable : ''} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children || <div className={styles.placeholder} />}
      </div>
      
      {isExpanded && (
        <div
          ref={expandedVideoRef}
          className={styles.expandedOverlay}
          onClick={handleBackdropClick}
          tabIndex={-1}
        >
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close video"
          >
            ×
          </button>
          <div className={styles.expandedVideoContainer}>
            {isValidElement(children)
              ? cloneElement(children, {
                  ...children.props,
                  key: 'expanded-video',
                  style: { ...children.props.style, width: '100%', height: 'auto', maxHeight: '100vh' },
                })
              : children || <div className={styles.placeholder} />}
          </div>
        </div>
      )}
    </>
  )
}
