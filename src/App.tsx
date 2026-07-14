import Nav from './components/Nav'
import Hero from './components/Hero'
import SectionNous from './components/SectionNous'
import Marquee from './components/Marquee'
import Pillars from './components/Pillars'
import Historia from './components/Historia'
import Team from './components/Team'
import Faq from './components/Faq'
import CtaAjude from './components/CtaAjude'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionNous />
        <Marquee />
        <Pillars />
        <Historia />
        <Team />
        <Faq />
        <CtaAjude />
      </main>
      <Footer />
    </>
  )
}
