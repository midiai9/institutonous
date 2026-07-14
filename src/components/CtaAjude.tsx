import { CalendarHeart, Gift, HandHeart, MessageCircle } from 'lucide-react'
import { CTA, WHATSAPP_URL } from '../data/site'
import Reveal from './Reveal'
import bg from '../assets/meninos-bandeira-brasil.jpg'

const WAY_ICONS = [CalendarHeart, Gift, HandHeart]

export default function CtaAjude() {
  return (
    <section id="ajude" className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
      {/* faded photo backdrop */}
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy/80" />

      <div className="container-nous relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-yellow">{CTA.kicker}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{CTA.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">{CTA.text}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {CTA.ways.map((way, i) => {
            const Icon = WAY_ICONS[i]
            return (
              <Reveal key={way.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-yellow text-navy">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{way.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{way.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15} className="mt-12 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-magenta px-9 py-4 text-lg font-bold text-white shadow-soft transition-transform hover:scale-[1.05] active:scale-95"
          >
            <MessageCircle size={22} className="fill-white/20" />
            {CTA.button}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
