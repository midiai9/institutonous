import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Fixed top progress bar that fills as the page is scrolled and shifts
 * through the brand palette (cyan → magenta → yellow → navy).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  // Interpolate color across the scroll journey.
  const background = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#1BA0D7', '#E6194B', '#FFC800', '#14164F'],
  )

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, background }}
      className="fixed inset-x-0 top-0 z-[60] h-1.5 origin-left"
    />
  )
}
