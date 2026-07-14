import { PILLARS } from '../data/site'
import Reveal from './Reveal'
import PillarCard from './PillarCard'

export default function Pillars() {
  return (
    <section id="como-funciona" className="relative bg-sky/40 py-14 md:py-20">
      <div className="container-nous">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Um cuidado que envolve todos ao redor da criança
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Nosso apoio se apoia em quatro pilares que garantem a trajetória escolar completa de cada criança.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
              <PillarCard pillar={pillar} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
