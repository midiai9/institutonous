import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import { HERO, WHATSAPP_URL } from '../data/site'
import heroPhoto from '../assets/menina-sala-sorrindo.jpg'
import BrainStroke from './BrainStroke'

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-sky via-sky/50 to-white pt-28 pb-20 md:pt-32 md:pb-28"
    >
      {/* soft brand blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" />

      <div className="container-nous relative grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-bold text-cyan shadow-card ring-1 ring-cyan/15"
          >
            <span className="h-2 w-2 rounded-full bg-magenta" />
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
          >
            {HERO.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy/75"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-magenta px-7 py-3.5 text-base font-bold text-white shadow-soft transition-transform hover:scale-[1.04] active:scale-95"
            >
              <Heart size={19} className="fill-white" />
              {HERO.ctaPrimary}
            </a>
            <a
              href="#o-nous"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-navy shadow-card ring-1 ring-navy/10 transition-transform hover:scale-[1.04] active:scale-95"
            >
              {HERO.ctaSecondary}
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            {/* photo in organic rounded frame */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft ring-8 ring-white">
              <img
                src={heroPhoto}
                alt="Criança sorrindo em sala de aula"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* brain accent, top-left */}
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-2xl bg-navy p-3 shadow-soft">
              <BrainStroke color="#1BA0D7" className="h-full w-full" />
            </div>

            {/* floating badge, bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-yellow px-5 py-3 text-navy shadow-soft sm:-right-6"
            >
              <p className="font-display text-lg font-bold leading-none">Toda criança</p>
              <p className="text-sm font-semibold">é um talento 💛</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
