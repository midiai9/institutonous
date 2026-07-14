import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../data/site'
import logo from '../assets/instituto-nous-logo.png'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('inicio')

  // Elevate + blur nav after scrolling past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: highlight the section currently in view.
  useEffect(() => {
    const ids = ['inicio', ...NAV.map((n) => n.id), 'ajude']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-nous flex h-[72px] items-center justify-between">
        <a href="#inicio" className="flex items-center" aria-label="Instituto Nous — início">
          <img src={logo} alt="Instituto Nous" className="h-9 w-auto md:h-10" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative text-[15px] font-semibold transition-colors hover:text-cyan ${
                  active === item.id ? 'text-cyan' : 'text-navy'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-yellow" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#ajude"
          className="hidden rounded-full bg-magenta px-5 py-2.5 text-sm font-bold text-white shadow-card transition-transform hover:scale-[1.04] active:scale-95 lg:inline-block"
        >
          Quero ajudar
        </a>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 text-navy lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md lg:hidden ${
          open ? 'max-h-[420px] border-t border-sky' : 'max-h-0'
        } transition-[max-height] duration-300`}
      >
        <ul className="container-nous flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                  active === item.id ? 'bg-sky text-cyan' : 'text-navy'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#ajude"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-magenta px-5 py-3 text-center text-base font-bold text-white"
            >
              Quero ajudar
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
