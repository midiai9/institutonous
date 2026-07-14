import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ } from '../data/site'
import Reveal from './Reveal'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-14 md:py-20">
      <div className="container-nous max-w-3xl">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan">Dúvidas</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-4 text-lg text-navy/70">
            Tudo o que você precisa saber para apoiar com tranquilidade.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQ.map((item, i) => {
            const open = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-2xl bg-sky/40 ring-1 ring-navy/5">
                  <h3>
                    <button
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-navy">{item.q}</span>
                      <ChevronDown
                        size={22}
                        className={`shrink-0 text-cyan transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-5 leading-relaxed text-navy/75">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
