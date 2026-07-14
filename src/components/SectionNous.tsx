import { NOUS } from '../data/site'
import Reveal from './Reveal'
import photo from '../assets/menino-mochila-biblioteca.jpg'

export default function SectionNous() {
  return (
    <section id="o-nous" className="bg-white py-20 md:py-28">
      <div className="container-nous grid items-center gap-12 lg:grid-cols-2">
        {/* Photo */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-sky" />
            <img
              src={photo}
              alt="Menino com mochila em uma biblioteca escolar"
              className="relative aspect-square w-full rounded-[2rem] object-cover shadow-card"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-cyan">
              {NOUS.kicker}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              <span className="relative inline-block">
                <span className="relative z-10">Nous</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-yellow/70" />
              </span>{' '}
              {NOUS.wordMeaning}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy/75">{NOUS.meaning}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border-l-4 border-magenta bg-sky/50 p-6">
              <h3 className="font-display text-xl font-bold text-navy">{NOUS.missionTitle}</h3>
              <p className="mt-2 leading-relaxed text-navy/80">{NOUS.mission}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 font-display text-xl font-semibold text-cyan">{NOUS.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
