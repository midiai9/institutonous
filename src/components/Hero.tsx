import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart, Pencil } from 'lucide-react'
import { HERO } from '../data/site'
import heroPhoto from '../assets/menina-sala-sorrindo.jpg'
import brainIcon from '../assets/icone-brain.png'

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
  const float = reduce
    ? {}
    : { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }

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
              href="#ajude"
              className="group inline-flex items-center gap-2 rounded-full bg-magenta px-7 py-3.5 text-base font-bold text-white shadow-soft transition-transform hover:scale-[1.04] active:scale-95"
            >
              <Heart size={19} className="fill-white transition-transform duration-300 group-hover:scale-125" />
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
            {/* photo in organic rounded frame, with subtle zoom on hover */}
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-soft ring-8 ring-white">
              <img
                src={heroPhoto}
                alt="Criança sorrindo em sala de aula"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="eager"
                width={640}
                height={800}
              />
            </div>

            {/* official brain icon, top-left, gently floating */}
            <motion.div
              animate={float}
              className="absolute -left-8 -top-8 flex h-28 w-28 items-center justify-center rounded-3xl bg-navy p-4 shadow-soft"
            >
              <img src={brainIcon} alt="" aria-hidden="true" className="h-full w-full object-contain" />
            </motion.div>

            {/* animated colored pencil accent */}
            <motion.div
              animate={reduce ? {} : { rotate: [0, 8, 0], y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan shadow-card"
            >
              <Pencil size={26} className="text-white" strokeWidth={2.2} />
            </motion.div>

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
