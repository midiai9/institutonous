import { Sparkles } from 'lucide-react'

const WORDS = ['Educação', 'Cuidado', 'Oportunidade', 'Conhecimento', 'Talento', 'Esperança']

/**
 * Infinite brand ribbon (marquee), inspired by 21st.dev marquee patterns.
 * Pure-CSS infinite track (duplicated for seamless loop), pauses on hover,
 * and stops entirely under prefers-reduced-motion (handled in index.css).
 */
export default function Marquee() {
  const items = [...WORDS, ...WORDS] // duplicate for seamless -50% loop

  return (
    <div className="marquee-group overflow-hidden bg-navy py-4" aria-hidden="true">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-display text-lg font-semibold text-white sm:text-xl">
              {word}
            </span>
            <Sparkles
              size={20}
              className={i % 2 === 0 ? 'text-yellow' : 'text-cyan'}
              strokeWidth={2.2}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
