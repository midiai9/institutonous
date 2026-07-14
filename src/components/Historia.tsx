import { Quote } from 'lucide-react'
import { HISTORIA } from '../data/site'
import Reveal from './Reveal'
import photo from '../assets/menina-bracos-abertos.jpg'

export default function Historia() {
  return (
    <section id="historia" className="bg-white py-20 md:py-28">
      <div className="container-nous grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div>
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-cyan">
              {HISTORIA.kicker}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">{HISTORIA.title}</h2>
          </Reveal>

          {HISTORIA.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.06 * (i + 1)}>
              <p className="mt-5 text-lg leading-relaxed text-navy/75">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Photo + quote */}
        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src={photo}
              alt="Menina de braços abertos e sorrindo em sala de aula"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
              loading="lazy"
            />
            <figure className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-navy p-6 text-white shadow-soft sm:left-8 sm:right-8">
              <Quote size={26} className="text-yellow" />
              <blockquote className="mt-2 font-display text-lg font-semibold leading-snug">
                {HISTORIA.quote}
              </blockquote>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
