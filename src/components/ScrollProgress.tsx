import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Two fixed progress bars (top and bottom of the viewport) that fill as the
 * page is scrolled and shift through the brand palette
 * (cyan → magenta → yellow → navy). Extra glow for visibility.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  const background = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ['#1BA0D7', '#E6194B', '#FFC800', '#14164F'],
  )
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      '0 0 12px 1px rgba(27,160,215,0.7)',
      '0 0 12px 1px rgba(230,25,75,0.7)',
      '0 0 12px 1px rgba(255,200,0,0.7)',
      '0 0 12px 1px rgba(20,22,79,0.7)',
    ],
  )

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX, background, boxShadow }}
        className="fixed inset-x-0 top-0 z-[60] h-2 origin-left"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleX, background, boxShadow }}
        className="fixed inset-x-0 bottom-0 z-[60] h-2 origin-left"
      />
    </>
  )
}
