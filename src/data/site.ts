// ---------------------------------------------------------------------------
// Conteúdo central do site Instituto Nous (toda a copy vive aqui).
// ---------------------------------------------------------------------------

export const WHATSAPP_NUMBER = '(19) 99913-1070'
export const WHATSAPP_URL =
  'https://wa.me/5519999131070?text=' +
  encodeURIComponent('Olá! Quero ajudar o Instituto Nous 💙')

export const CNPJ = '62.604.226/0001-59'

export type NavItem = { id: string; label: string }

export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'o-nous', label: 'O Nous' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'historia', label: 'História' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'faq', label: 'Dúvidas' },
]

export const HERO = {
  eyebrow: 'Instituto Nous',
  title: 'Cultivando o conhecimento',
  subtitle:
    'Acreditamos que toda criança é um talento. Garantimos educação de qualidade — do primeiro ano até a formação — para crianças que mais precisam.',
  ctaPrimary: 'Quero ajudar',
  ctaSecondary: 'Conhecer o projeto',
}

export const NOUS = {
  kicker: 'O que é Nous',
  wordMeaning:
    'é uma palavra grega que significa mente, entendimento, intelecto.',
  meaning:
    'Na filosofia, representa a capacidade humana de compreender, aprender, refletir e transformar a realidade através do conhecimento.',
  missionTitle: 'Nossa missão',
  mission:
    'Desejamos viver em uma sociedade onde todas as pessoas possam ser acolhidas, cuidadas e estimuladas a desenvolverem os seus talentos de forma gentil, segura e amorosa.',
  closing: 'Para nós, a educação é o caminho para uma vida digna.',
}

export type Pillar = { icon: string; title: string; text: string }

export const PILLARS: Pillar[] = [
  {
    icon: 'GraduationCap',
    title: 'Financiamento integral',
    text: 'Cobrimos tudo o que a criança precisa para estudar: mensalidade, transporte, material, uniforme, alimentação e atividades escolares — sempre de acordo com a necessidade de cada uma.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Parceria com a família',
    text: 'Pais e responsáveis participam ativamente da vida escolar e acompanham de perto a saúde e o desenvolvimento da criança.',
  },
  {
    icon: 'Building2',
    title: 'Instituição credenciada',
    text: 'Cada criança é acompanhada por uma instituição parceira, responsável pela seleção e pelo cuidado ao longo de toda a trajetória.',
  },
  {
    icon: 'School',
    title: 'Parceria com a escola',
    text: 'Aluno, família e escola trabalham juntos para garantir o sucesso acadêmico e social de cada criança.',
  },
]

export const HISTORIA = {
  kicker: 'Nossa história',
  title: 'Começou com um desejo de fazer o bem',
  paragraphs: [
    'Sabe aquele desejo de fazer algo bom para o mundo? Foi assim que começamos. Três mulheres decidiram estender a outras crianças o mesmo cuidado com a educação que oferecem aos próprios filhos.',
    'Cuidamos de cada criança e de cada família como cuidaríamos das nossas — e recebemos de volta humanidade, gratidão e esperança.',
    'Atendemos famílias com renda inferior a três salários mínimos, oferecendo oportunidades iguais de desenvolvimento.',
  ],
  quote:
    'Nossas crianças são talentos que precisam de estímulos para se tornarem adultos capazes.',
}

export type Member = { name: string; role: string; group: 'diretoria' | 'equipe' }

export const TEAM: Member[] = [
  { name: 'Mariana Magri', role: 'Diretora Executiva', group: 'diretoria' },
  { name: 'Glau Dias', role: 'Diretora Psicossocial', group: 'diretoria' },
  { name: 'Limerci del Álamo', role: 'Diretora Acadêmica', group: 'diretoria' },
  { name: 'Fabiana Rissio', role: 'Psicopedagoga', group: 'equipe' },
  { name: 'Eduardo Mendes', role: 'Conselheiro', group: 'equipe' },
  { name: 'Leandro BonVecchio', role: 'Conselheiro', group: 'equipe' },
]

export const TEAM_CTA =
  'O Instituto Nous conta com voluntários das mais diversas áreas. Faça parte da equipe!'

export type FaqItem = { q: string; a: string }

export const FAQ: FaqItem[] = [
  {
    q: 'Como é feita a escolha das crianças?',
    a: 'As instituições parceiras do projeto selecionam as crianças que preenchem os critérios exigidos para participação, e a seleção final é feita em conjunto com a equipe do Instituto Nous.',
  },
  {
    q: 'Por quanto tempo o Instituto Nous financia os estudos da criança?',
    a: 'O Instituto Nous financia os estudos da criança selecionada durante toda a sua vida escolar: Ensino Fundamental 1, Ensino Fundamental 2 e Ensino Técnico ou Ensino Médio.',
  },
  {
    q: 'Como será usado o dinheiro que eu doar?',
    a: 'A sua contribuição será utilizada para o pagamento de serviços e produtos que a criança precisará ao longo da vida escolar. Isso inclui mensalidade escolar, transporte, alimentação, eventos escolares, material didático, apoio pedagógico, entre outros.',
  },
  {
    q: 'Qual o valor ideal para minha contribuição?',
    a: 'O valor ideal é aquele que você pode manter ao longo do tempo, para que a criança possa contar com a sua contribuição durante toda a sua vida escolar.',
  },
  {
    q: 'Preciso contribuir durante toda a vida escolar da criança?',
    a: 'A sua contribuição é voluntária e você pode contribuir pelo tempo que desejar. Pode contribuir mensalmente ou uma única vez. Toda contribuição é bem-vinda!',
  },
  {
    q: 'Se eu contribuir mensalmente, posso parar quando quiser?',
    a: 'Sim. A sua contribuição é voluntária e você pode parar de contribuir quando quiser.',
  },
]

export const CTA = {
  kicker: 'Faça parte',
  title: 'Faça parte dessa história',
  text: 'Sua contribuição garante que uma criança continue estudando. Você pode contribuir mensalmente, uma única vez, ou doar seu tempo como voluntário. Toda ajuda é bem-vinda.',
  ways: [
    { title: 'Contribuição mensal', text: 'Apoie de forma recorrente e acompanhe uma trajetória inteira.' },
    { title: 'Doação única', text: 'Faça uma contribuição pontual, no valor que puder.' },
    { title: 'Voluntariado', text: 'Doe seu tempo e talento em diversas áreas.' },
  ],
  button: 'Falar no WhatsApp',
}
