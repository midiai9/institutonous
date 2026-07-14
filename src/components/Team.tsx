import { Users, ArrowRight } from 'lucide-react'
import { TEAM, TEAM_CTA, VOLUNTEER_FORM_URL } from '../data/site'
import Reveal from './Reveal'
import TeamCard from './TeamCard'

// Resolve all team photos at build time (slug -> url)
const PHOTOS = import.meta.glob('../assets/team/*.jpg', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function photoFor(slug: string): string | undefined {
  return PHOTOS[`../assets/team/${slug}.jpg`]
}

export default function Team() {
  const diretoria = TEAM.filter((m) => m.group === 'diretoria')
  const equipe = TEAM.filter((m) => m.group === 'equipe')

  return (
    <section id="equipe" className="bg-sky/40 py-14 md:py-20">
      <div className="container-nous">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan">Quem faz</span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Pessoas que cuidam de perto
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Uma equipe dedicada e voluntários de diversas áreas fazem o Instituto Nous acontecer.
          </p>
        </Reveal>

        {/* Diretoria */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diretoria.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} index={i} photoSrc={photoFor(m.photo)} />
            </Reveal>
          ))}
        </div>

        {/* Equipe / conselho */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <TeamCard member={m} index={i + 3} photoSrc={photoFor(m.photo)} />
            </Reveal>
          ))}
        </div>

        {/* Volunteer CTA */}
        <Reveal delay={0.1}>
          <div className="group mt-12 flex flex-col items-center gap-5 rounded-3xl bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan/12 text-cyan transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Users size={28} />
              </div>
              <p className="max-w-xl text-lg font-semibold text-navy">{TEAM_CTA}</p>
            </div>
            <a
              href={VOLUNTEER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold text-white transition-transform hover:scale-[1.04] active:scale-95"
            >
              Quero ser voluntário
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
