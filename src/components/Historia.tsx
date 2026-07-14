import { Quote } from 'lucide-react'
import { HISTORIA } from '../data/site'
import Reveal from './Reveal'
import photo from '../assets/menina-bracos-abertos.jpg'

export default function Historia() {
  return (
    <section id="historia" className="bg-white py-14 md:py-20">
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
          <div className="group relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={photo}
                alt="Menina de braços abertos e sorrindo em sala de aula"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>
            <figure className="relative mt-4 rounded-2xl bg-navy p-6 text-white shadow-soft sm:absolute sm:-bottom-6 sm:left-8 sm:right-8 sm:mt-0">
              <Quote size={26} className="text-yellow" />
              <blockquote className="mt-2 font-display text-base font-semibold leading-snug sm:text-lg">
                {HISTORIA.quote}
              </blockquote>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
