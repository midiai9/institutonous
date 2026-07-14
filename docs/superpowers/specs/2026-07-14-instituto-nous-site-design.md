# Instituto NOUS — Site Institucional (one-page)

**Data:** 2026-07-14
**Status:** Aprovado (design) — pendente revisão do spec
**Domínio:** institutonous.org.br (Plesk / servidori9)
**Repo:** github.com/midiai9/institutonous (privado — auth a resolver)

---

## 1. Objetivo

Site institucional de página única (one-page, com rolagem e menu fixo) para o **Instituto NOUS**,
substituindo o site temporário em Google Sites ("Projeto Talentos"). O site apresenta o instituto,
explica o modelo de apadrinhamento educacional e converte visitantes em **doadores/voluntários**
via WhatsApp.

**Público:** doadores potenciais, famílias, voluntários, instituições parceiras.
**Tom:** acolhedor, humano, otimista, confiável — educação infantil (não corporativo frio).

---

## 2. Marca (fonte: instituto_nous.pdf + INSTITUTO NOUS.png)

- **Símbolo:** cérebro em linha contínua (traço único) — rede neural / pensamento.
- **Cores:**
  - Ciano `#1BA0D7` (primária/ação)
  - Marinho `#14164F` (texto/base escura)
  - Magenta `#E6194B` (destaque/CTA quente)
  - Amarelo `#FFC800` (acento/energia)
  - Azul-claro fundo `#DCEBF5`
  - Branco `#FFFFFF`
- **Tipografia:** **Fredoka** (títulos, arredondada, casa com o wordmark manuscrito) +
  **Nunito Sans** (corpo). Wordmark = PNG oficial do logo.
- **Conceito "Nous":** grego para *mente / entendimento / intelecto* — a capacidade humana de
  compreender, aprender, refletir e transformar a realidade pelo conhecimento.
- **Motivo gráfico:** o traço contínuo do cérebro como linha que costura as seções
  (divisores, ícones em linha, path animado no scroll).

---

## 3. Estrutura & conteúdo (seções)

Menu fixo (sticky) com scroll suave. Âncoras: Início · O NOUS · Como funciona · História · Equipe · FAQ · Ajude.

### 3.1 Hero (#inicio)
- Logo NOUS, headline **"Cultivando o conhecimento"**, subheadline sobre transformar vidas pela educação.
- CTA primário: **"Quero ajudar"** (→ WhatsApp) · CTA secundário: **"Conhecer o projeto"** (scroll).
- Foto real de criança (banco fornecido pelo cliente) + símbolo do cérebro animado (path draw).

### 3.2 O que é NOUS (#o-nous)
- Significado grego de "Nous" (mente/intelecto) + missão:
  *"Desejamos viver em uma sociedade onde todas as pessoas possam ser acolhidas, cuidadas e
  estimuladas a desenvolverem os seus talentos de forma gentil, segura e amorosa."*
- Reforço: educação como caminho para uma vida digna.

### 3.3 Como funciona — 4 Pilares (#como-funciona)
Cards animados (stagger no scroll):
1. **Financiamento acadêmico integral** — mensalidade, transporte, material, uniforme, alimentação,
   atividades escolares e apoio complementar, conforme a necessidade de cada criança.
2. **Parceria com a família** — pais/responsáveis participam ativamente da escolarização e acompanham
   saúde e desenvolvimento.
3. **Parceria com instituição credenciada** — crianças beneficiárias vinculadas a instituições
   parceiras, que fazem seleção e acompanhamento contínuo.
4. **Parceria com a escola** — trabalho colaborativo entre aluno, família e escola para o sucesso
   acadêmico e social.

### 3.4 Nossa história (#historia)
- Narrativa das fundadoras (três mulheres) que decidiram estender a outras crianças o mesmo cuidado
  com a educação que davam aos próprios filhos.
- Foco em famílias com renda inferior a três salários mínimos.
- Frase-âncora: *"Nossas crianças são talentos que precisam de estímulos para se tornarem adultos capazes."*
- Faixa de foco/impacto (números quando o cliente fornecer; sem inventar dados).

### 3.5 Equipe (#equipe)
- Diretoria: **Mariana Magri** (Diretora Executiva), **Glau Dias** (Diretora Psicossocial),
  **Limerci del Álamo** (Diretora Acadêmica).
- Equipe/conselho: **Fabiana Rissio** (Psicopedagoga), **Eduardo Mendes** (Conselheiro),
  **Leandro BonVecchio** (Conselheiro).
- Bloco "Seja voluntário" com CTA WhatsApp.

### 3.6 FAQ (#faq)
Accordion com as 6 perguntas do site atual (texto integral):
1. Como é feita a escolha das crianças?
2. Por quanto tempo o Projeto Talentos financia os estudos?
3. Como será usado o dinheiro doado?
4. Qual o valor ideal para a contribuição?
5. Preciso contribuir durante toda a vida escolar da criança?
6. Se eu contribuir mensalmente, posso parar quando quiser?

### 3.7 Ajude / Faça parte (#ajude)
- Seção CTA forte (fundo marinho ou magenta). Formas de ajudar: contribuição mensal recorrente,
  contribuição única, voluntariado.
- **CTA único → WhatsApp (19) 99913-1070** (mensagem pré-preenchida: "Olá! Quero ajudar o Instituto NOUS").
- Nota: integração de pagamento (Pix/boleto/cartão) fica para fase futura.

### 3.8 Rodapé
- Logo, tagline, CNPJ **62.604.226/0001-59**, WhatsApp, link de voltar ao topo.
- Crédito discreto. Sem redes sociais por ora (cliente só forneceu WhatsApp).

---

## 4. Arquitetura técnica

- **Stack:** React 18 + Vite + TypeScript + Tailwind CSS (mesma base validada na LP Always On/Plesk).
- **Animação:** Framer Motion (entradas em scroll, stagger, path draw do cérebro) + componentes
  animados do **21st.dev Magic MCP** (hero, cards, divisores) adaptados à marca.
- **Componentização (isolada, uma responsabilidade cada):**
  - `components/Nav.tsx` — menu fixo, scrollspy, mobile drawer.
  - `components/Hero.tsx`
  - `components/SectionNous.tsx`
  - `components/Pillars.tsx` (+ `PillarCard.tsx`)
  - `components/Historia.tsx`
  - `components/Team.tsx` (+ `TeamCard.tsx`)
  - `components/Faq.tsx` (accordion acessível)
  - `components/CtaAjude.tsx`
  - `components/Footer.tsx`
  - `components/BrainStroke.tsx` (SVG do cérebro reutilizável/animável)
  - `lib/brand.ts` (tokens de cor/tipografia), `data/site.ts` (conteúdo/copy centralizado).
- **Conteúdo desacoplado:** toda a copy vive em `data/site.ts` (fácil de revisar/editar sem mexer em UI).
- **Acessibilidade:** contraste AA, navegação por teclado no accordion/nav, `alt` em imagens,
  `prefers-reduced-motion` respeitado.
- **Responsivo:** mobile-first.
- **SEO/OG:** `<title>`, meta description, Open Graph (imagem OG derivada da marca), favicon
  (símbolo do cérebro), `lang="pt-BR"`.
- **Assets:** fotos reais fornecidas pelo cliente em `_assets/photos` → otimizadas para `src/assets`.
  Fontes via `@fontsource` (self-host, sem depender de CDN externo bloqueado no Plesk).

---

## 5. Copy (diretriz)

- Reescrever/ampliar com skills de copy/UX **mantendo os fatos** do site atual (missão, pilares,
  FAQ, história). Nada de dados inventados (números de crianças/anos só com confirmação do cliente).
- Voz: 2ª pessoa acolhedora, frases curtas, verbos de ação nos CTAs.
- PT-BR.

---

## 6. Deploy (Git → Plesk)

- Build local em `~/Projects/institutonous` (fora do Google Drive para não travar sync de node_modules).
- Pipeline: GitHub `midiai9/institutonous` → GitHub Actions (branch `deploy`) → webhook → Plesk
  (institutonous.org.br), seguindo os aprendizados da skill de deploy (evitar `force_orphan` que
  quebra o pull do Plesk; validar por content-type; headers de segurança).
- **Bloqueio atual:** o PAT em cache não tem acesso de escrita ao repo privado `institutonous`.
  Resolver antes do deploy (novo PAT com acesso ao repo, ou adicionar colaborador).
- Cópia final dos fontes para a pasta do Google Drive indicada pelo cliente.

---

## 7. Pendências do cliente

1. **PAT/acesso** de escrita ao repo `midiai9/institutonous`.
2. **5 fotos** de crianças em arquivo (o cliente colou no chat; precisamos dos arquivos em pasta).
3. (Opcional/futuro) números de impacto, redes sociais, link de pagamento.

---

## 8. Fora de escopo (YAGNI)

- Integração de pagamento/checkout (fase futura).
- Multipágina, blog, área logada, i18n.
- CMS — conteúdo é estático em `data/site.ts`.
