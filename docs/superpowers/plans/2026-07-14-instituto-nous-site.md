# Instituto NOUS Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a one-page institutional website for Instituto NOUS (React + Vite + TS + Tailwind + Framer Motion), on-brand, animated, responsive, and deploy it to institutonous.org.br via Git→Plesk.

**Architecture:** Single-page app. Content lives in `src/data/site.ts` (decoupled copy). Brand tokens in `tailwind.config` + CSS vars. Each section is an isolated component composed in `App.tsx`. Verification is build-based + live-preview (Preview MCP) rather than unit TDD, since this is a static marketing artifact — the "test" is: it builds, renders every section, nav scrollspy works, and it looks correct.

**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Framer Motion, @fontsource (Fredoka + Nunito Sans), lucide-react (line icons), 21st.dev Magic MCP (component inspiration for hero/cards/divider).

---

## Brand tokens (single source of truth)

```
--nous-cyan:    #1BA0D7   (primary / action)
--nous-navy:    #14164F   (text / dark base)
--nous-magenta: #E6194B   (hot accent / CTA)
--nous-yellow:  #FFC800   (energy accent)
--nous-sky:     #DCEBF5   (light background)
--nous-white:   #FFFFFF
Fonts: display = Fredoka; body = Nunito Sans
```

## Assets (already staged in `_assets/`, to be moved into `src/assets`)

- `brand/instituto-nous-logo.png` — full color lockup (transparent)
- `photos/menina-sala-sorrindo.jpg` — HERO (girl, red shirt, classroom, joyful)
- `photos/menina-bracos-abertos.jpg` — História / impact band (arms open)
- `photos/menino-mochila-biblioteca.jpg` — "O NOUS" / mission
- `photos/menino-parque.jpg` — Pillars accent / secondary
- `photos/meninos-bandeira-brasil.jpg` — CTA band (optional)
- `photos/colagem-criancas.jpg` — spare (likely unused)

## File Structure

```
index.html                      # lang pt-BR, meta/OG, favicon
src/
  main.tsx                      # React entry
  index.css                     # Tailwind + font imports + base
  App.tsx                       # composes all sections
  data/site.ts                  # ALL copy (nav, hero, nous, pillars, historia, team, faq, cta, footer)
  lib/brand.ts                  # color/font constants for JS use
  assets/                       # logo + photos (imported)
  components/
    Nav.tsx                     # sticky nav + scrollspy + mobile drawer
    Hero.tsx
    SectionNous.tsx
    Pillars.tsx  PillarCard.tsx
    Historia.tsx
    Team.tsx  TeamCard.tsx
    Faq.tsx                     # accessible accordion
    CtaAjude.tsx                # WhatsApp CTA band
    Footer.tsx
    BrainStroke.tsx             # inline SVG brain (path-draw animation)
    Reveal.tsx                  # Framer Motion scroll-reveal wrapper (reduced-motion aware)
tailwind.config.ts              # brand colors + font families
.github/workflows/deploy.yml    # CI → deploy branch (added at deploy task)
```

WhatsApp link (used in Nav, Hero, Team, CTA, Footer):
`https://wa.me/5519999131070?text=Ol%C3%A1!%20Quero%20ajudar%20o%20Instituto%20NOUS`

---

## Task 1: Scaffold Vite + Tailwind + fonts

**Files:** create project in `~/Projects/institutonous` (repo root).

- [ ] **Step 1: Scaffold**
```bash
cd ~/Projects/institutonous
npm create vite@latest . -- --template react-ts   # keep existing docs/, _assets/, .git
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react @fontsource/fredoka @fontsource/nunito-sans
```
- [ ] **Step 2: Configure Tailwind** — `tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#1BA0D7', navy: '#14164F', magenta: '#E6194B',
        yellow: '#FFC800', sky: '#DCEBF5',
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
} satisfies Config
```
- [ ] **Step 3: `src/index.css`**:
```css
@import '@fontsource/fredoka/400.css';
@import '@fontsource/fredoka/500.css';
@import '@fontsource/fredoka/600.css';
@import '@fontsource/fredoka/700.css';
@import '@fontsource/nunito-sans/400.css';
@import '@fontsource/nunito-sans/600.css';
@import '@fontsource/nunito-sans/700.css';
@tailwind base; @tailwind components; @tailwind utilities;
html { scroll-behavior: smooth; scroll-padding-top: 80px; }
body { @apply font-body text-navy bg-white antialiased; }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
```
- [ ] **Step 4: Move assets** `cp -r _assets/brand _assets/photos src/assets/` (keep `_assets` gitignored; `src/assets` committed).
- [ ] **Step 5: Verify build** `npm run build` → Expected: success, `dist/` produced.
- [ ] **Step 6: Commit** `git add -A && git commit -m "chore: scaffold Vite+TS+Tailwind, fonts, brand tokens"`

## Task 2: Content data (`src/data/site.ts`)

- [ ] **Step 1:** Create `src/data/site.ts` exporting typed objects for every section using the copy below (final PT-BR copy, humanized). Include: `WHATSAPP_URL`, `nav[]`, `hero{}`, `nous{}`, `pillars[]` (4), `historia{}`, `team[]` (6), `faq[]` (6 — verbatim answers from spec §3.6), `cta{}`, `footer{cnpj, whatsapp}`.
- [ ] **Step 2:** Build succeeds (`npm run build`). Commit.

## Task 3: Reveal + BrainStroke primitives

- [ ] `Reveal.tsx`: Framer Motion wrapper — fade+rise on scroll (`whileInView`, `viewport once`), disabled under reduced-motion.
- [ ] `BrainStroke.tsx`: inline SVG of the continuous-line brain with `pathLength` draw animation; accepts `color` + `className`. (Trace paths from the logo; approximate loops acceptable.)
- [ ] Build + commit.

## Task 4: Nav (sticky + scrollspy + mobile drawer)

- [ ] Logo left; anchor links (Início, O NOUS, Como funciona, História, Equipe, FAQ) center/right; "Quero ajudar" magenta button → WhatsApp. Scrollspy highlights active section via IntersectionObserver. Mobile: hamburger → drawer. Backdrop blur on scroll.
- [ ] Verify in Preview MCP: links scroll, active state updates, mobile drawer opens. Commit.

## Task 5: Hero

- [ ] Left: h1 "Cultivando o conhecimento" (display), subhead, two CTAs. Right: hero photo (`menina-sala-sorrindo.jpg`) in organic/rounded frame + animated `BrainStroke` + floating brand-color blobs. Sky→white gradient bg. Use 21st.dev Magic MCP for hero motion inspiration, adapted to brand.
- [ ] Preview check + commit.

## Task 6: SectionNous (o significado + missão)

- [ ] Two-column: left photo (`menino-mochila-biblioteca.jpg`); right: "Nous" etymology card (yellow highlight on the word) + mission quote. Reveal on scroll. Commit.

## Task 7: Pillars (4 cards)

- [ ] `Pillars.tsx` maps `pillars[]` → `PillarCard` (line icon, title, text). Stagger reveal. Each card: white, rounded-2xl, soft shadow, top border in a rotating brand color. Commit.

## Task 8: Historia

- [ ] Narrative text + `menina-bracos-abertos.jpg` band, pull-quote "Nossas crianças são talentos…" on navy. No invented numbers. Commit.

## Task 9: Team (6)

- [ ] `Team.tsx` → `TeamCard` grid (3 leadership + 3 conselho/equipe), initials avatar in brand color (no photos of staff available), name + role. "Seja voluntário" sub-CTA → WhatsApp. Commit.

## Task 10: Faq (accordion)

- [ ] Accessible accordion (button + aria-expanded + region), one open at a time, 6 items verbatim. Chevron rotates. Commit.

## Task 11: CtaAjude + Footer

- [ ] CTA band (navy or magenta bg, optional `meninos-bandeira-brasil.jpg` faded): "Faça parte", 3 ways to help (mensal, único, voluntário), big WhatsApp button. Footer: logo (white/mono), tagline, CNPJ 62.604.226/0001-59, WhatsApp, back-to-top. Commit.

## Task 12: Meta/SEO + favicon + assemble

- [ ] `index.html`: `lang="pt-BR"`, title "Instituto NOUS — Cultivando o conhecimento", meta description, OG tags (og-image from brand), favicon (brain symbol). `App.tsx` composes: Nav, Hero, SectionNous, Pillars, Historia, Team, Faq, CtaAjude, Footer.
- [ ] Full Preview MCP pass: every section renders, responsive (mobile/tablet/desktop), no console errors, reduced-motion respected. Screenshot to user. Commit.

## Task 13: Deploy (Git → Plesk)

**BLOCKER:** requires write access to `midiai9/institutonous` (PAT). Resolve first.
- [ ] Add remote `origin` = repo; push `main`.
- [ ] Add `.github/workflows/deploy.yml` (Vite build → publish `dist` to `deploy` branch; **no `force_orphan`** — Plesk pull needs stable history). Mirror the working Always On pipeline.
- [ ] Confirm Plesk domain `institutonous.org.br` pulls `deploy` branch; verify site live (validate by content-type, not just HTTP 200).
- [ ] Copy final source into Google Drive: `Institutonous/PEÇAS/MIDIAS_DIGITAIS/1_SITE_NOUS/`.

---

## FINAL COPY (PT-BR) — use verbatim in `src/data/site.ts`

**Hero:** h1 "Cultivando o conhecimento" · sub "No Instituto Nous, acreditamos que toda criança é um talento. Transformamos vidas garantindo educação de qualidade — do primeiro ano até a formação — para crianças que mais precisam." · CTAs: "Quero ajudar" / "Conhecer o projeto".

**O NOUS:** "*Nous* é uma palavra grega que significa mente, entendimento, intelecto. Na filosofia, representa a capacidade humana de compreender, aprender, refletir e transformar a realidade através do conhecimento." · Missão: "Desejamos viver em uma sociedade onde todas as pessoas possam ser acolhidas, cuidadas e estimuladas a desenvolverem os seus talentos de forma gentil, segura e amorosa." · "Para nós, a educação é o caminho para uma vida digna."

**Pilares:**
1. Financiamento integral — "Cobrimos tudo o que a criança precisa para estudar: mensalidade, transporte, material, uniforme, alimentação e atividades escolares — sempre de acordo com a necessidade de cada uma."
2. Parceria com a família — "Pais e responsáveis participam ativamente da vida escolar e acompanham de perto a saúde e o desenvolvimento da criança."
3. Instituição credenciada — "Cada criança é acompanhada por uma instituição parceira, responsável pela seleção e pelo cuidado ao longo de toda a trajetória."
4. Parceria com a escola — "Aluno, família e escola trabalham juntos para garantir o sucesso acadêmico e social de cada criança."

**História:** "Sabe aquele desejo de fazer algo bom para o mundo? Foi assim que começamos. Três mulheres decidiram estender a outras crianças o mesmo cuidado com a educação que oferecem aos próprios filhos. Cuidamos de cada criança e de cada família como cuidaríamos das nossas — e recebemos de volta humanidade, gratidão e esperança. Atendemos famílias com renda inferior a três salários mínimos, oferecendo oportunidades iguais de desenvolvimento." · Pull-quote: "Nossas crianças são talentos que precisam de estímulos para se tornarem adultos capazes."

**Equipe:** Mariana Magri — Diretora Executiva · Glau Dias — Diretora Psicossocial · Limerci del Álamo — Diretora Acadêmica · Fabiana Rissio — Psicopedagoga · Eduardo Mendes — Conselheiro · Leandro BonVecchio — Conselheiro. Sub-CTA: "O Instituto Nous conta com voluntários de diversas áreas. Faça parte da equipe!"

**FAQ (verbatim):** the 6 Q&As from spec §3.6.

**CTA Ajude:** "Faça parte dessa história" · "Sua contribuição garante que uma criança continue estudando. Você pode contribuir mensalmente, uma única vez, ou doar seu tempo como voluntário. Toda ajuda é bem-vinda." · Botão "Falar no WhatsApp".

**Footer:** Instituto Nous · CNPJ 62.604.226/0001-59 · WhatsApp (19) 99913-1070.
