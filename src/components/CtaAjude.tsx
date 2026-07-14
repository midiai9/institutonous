import { CalendarHeart, Gift, HandHeart, MessageCircle, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CTA, WHATSAPP_URL } from '../data/site'
import Reveal from './Reveal'
import bg from '../assets/meninos-bandeira-brasil.jpg'

const ICONS: Record<string, LucideIcon> = { CalendarHeart, Gift, HandHeart }

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

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
          {CTA.ways.map((way, i) => {
            const Icon = ICONS[way.icon] ?? HandHeart
            return (
              <Reveal key={way.title} delay={i * 0.1} className="h-full">
                <a
                  href={way.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow text-navy transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">{way.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/75">{way.text}</p>
                  <span className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-magenta px-5 py-2.5 text-sm font-bold text-white transition-colors group-hover:bg-magenta/90">
                    {way.button}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            <MessageCircle size={18} />
            Ficou com dúvidas? Fale com a gente no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
