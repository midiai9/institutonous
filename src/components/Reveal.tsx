import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** delay in seconds */
  delay?: number
  /** slide direction on reveal */
  y?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Scroll-reveal wrapper. Fades + rises into view once.
 * Respects prefers-reduced-motion (renders static).
 */
export default function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  )
}
