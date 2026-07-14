import type { Member } from '../data/site'

const AVATAR_COLORS = [
  'bg-cyan text-white',
  'bg-magenta text-white',
  'bg-navy text-white',
  'bg-yellow text-navy',
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function TeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-navy/5">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
        aria-hidden="true"
      >
        {initials(member.name)}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold leading-tight text-navy">{member.name}</h3>
        <p className="text-sm font-semibold text-cyan">{member.role}</p>
      </div>
    </article>
  )
}
