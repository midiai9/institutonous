import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  className?: string
  color?: string
  /** animate the stroke drawing itself on view */
  animate?: boolean
  strokeWidth?: number
}

/**
 * Stylized continuous-line brain, echoing the Instituto Nous symbol.
 * A single flowing stroke of looping curves. Optionally self-draws on view.
 */
export default function BrainStroke({
  className,
  color = '#1BA0D7',
  animate = true,
  strokeWidth = 7,
}: Props) {
  const reduce = useReducedMotion()
  const draw = animate && !reduce

  const paths = [
    // outer brain outline (single loop)
    'M60 150 C40 120 45 78 82 66 C92 40 140 34 156 58 C186 44 214 68 208 96 C232 108 228 150 200 158 C204 186 168 208 146 190 C128 214 84 206 82 178 C52 178 44 160 60 150 Z',
    // inner loops (the "folds")
    'M96 96 C82 96 82 118 98 118 C114 118 114 96 96 96',
    'M138 88 C122 88 120 112 140 112 C160 112 156 88 138 88',
    'M112 140 C96 140 96 166 116 166 C138 166 134 140 112 140',
    'M164 138 C150 138 150 160 168 160 C186 160 184 138 164 138',
    // the descending tail (spinal thread)
    'M96 190 C92 214 104 232 118 236',
  ]

  return (
    <svg
      viewBox="0 0 260 260"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={draw ? { pathLength: 0, opacity: 0 } : false}
          whileInView={draw ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}
