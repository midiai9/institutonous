import { ArrowUp, MessageCircle } from 'lucide-react'
import { CNPJ, WHATSAPP_NUMBER, WHATSAPP_URL } from '../data/site'
import logo from '../assets/instituto-nous-logo.png'

export default function Footer() {
  return (
    <footer className="border-t border-sky bg-white">
      <div className="container-nous grid gap-10 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src={logo} alt="Instituto Nous" className="h-11 w-auto" />
          <p className="mt-4 max-w-xs leading-relaxed text-navy/70">
            Cultivando o conhecimento. Educação de qualidade para crianças que mais precisam.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-bold text-navy">Fale com a gente</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan hover:text-magenta"
          >
            <MessageCircle size={18} />
            WhatsApp {WHATSAPP_NUMBER}
          </a>
          <p className="mt-4 text-sm text-navy/60">CNPJ {CNPJ}</p>
        </div>

        {/* Back to top */}
        <div className="md:text-right">
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 rounded-full bg-sky px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-cyan hover:text-white"
          >
            <ArrowUp size={16} />
            Voltar ao topo
          </a>
        </div>
      </div>

      <div className="border-t border-sky/70">
        <div className="container-nous flex flex-col items-center justify-between gap-2 py-5 text-sm text-navy/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Instituto Nous. Todos os direitos reservados.</p>
          <p>Feito com 💙 pela educação.</p>
        </div>
      </div>
    </footer>
  )
}
