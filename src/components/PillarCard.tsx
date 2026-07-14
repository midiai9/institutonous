import { GraduationCap, HeartHandshake, Building2, School } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Pillar } from '../data/site'

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  HeartHandshake,
  Building2,
  School,
}

const ACCENTS = ['bg-cyan', 'bg-magenta', 'bg-yellow', 'bg-navy']
const ICON_BG = ['bg-cyan/12 text-cyan', 'bg-magenta/12 text-magenta', 'bg-yellow/20 text-navy', 'bg-navy/8 text-navy']

export default function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const Icon = ICONS[pillar.icon] ?? GraduationCap
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-navy/5 transition-transform duration-300 hover:-translate-y-1.5">
      <span className={`absolute inset-x-0 top-0 h-1.5 ${ACCENTS[index % 4]}`} />
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${ICON_BG[index % 4]}`}>
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-navy">{pillar.title}</h3>
      <p className="mt-3 leading-relaxed text-navy/70">{pillar.text}</p>
    </article>
  )
}
