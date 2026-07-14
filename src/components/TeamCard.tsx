import type { Member } from '../data/site'

const RING_COLORS = ['ring-cyan', 'ring-magenta', 'ring-navy', 'ring-yellow']

export default function TeamCard({
  member,
  index,
  photoSrc,
}: {
  member: Member
  index: number
  photoSrc?: string
}) {
  return (
    <article className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-navy/5 transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ${RING_COLORS[index % RING_COLORS.length]} ring-offset-2`}
      >
        <img
          src={photoSrc}
          alt={`Foto de ${member.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          width={64}
          height={64}
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold leading-tight text-navy">{member.name}</h3>
        <p className="text-sm font-semibold text-cyan">{member.role}</p>
      </div>
    </article>
  )
}
