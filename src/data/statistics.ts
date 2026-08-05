import type { TitleItem, TimelineEvent, VideoItem } from '../types';



export const titulosData: TitleItem[] = [
  { nome: "KWC Nations", categoria: "Seleção Brasileira", resultado: "campeao", edicoes: ["24/25", "25/26"] },
  { nome: "KWC Clubs", categoria: "G3X FC", resultado: "campeao", edicoes: ["25/26"] },
  { nome: "KWC Nations", categoria: "Seleção Brasileira", resultado: "mvp", edicoes: ["24/25"] },
  { nome: "KWC Clubs", categoria: "G3X FC", resultado: "mvp", edicoes: ["23/24"] },
  { nome: "KWC Clubs", categoria: "G3X FC", resultado: "artilheiro", edicoes: ["23/24", "25/26"] },
  { nome: "KWC Nations", categoria: "Seleção Brasileira", resultado: "artilheiro", edicoes: ["24/25"] },
  { nome: "KL Brasil", categoria: "G3X FC", resultado: "artilheiro", edicoes: ["25/26"] },
  { nome: "KC Brasil", categoria: "G3X FC", resultado: "artilheiro", edicoes: ["25/26"] },
  { nome: "KWC Clubs", categoria: "G3X FC", resultado: "vice", edicoes: ["23/24"] },
  { nome: "KL Brasil", categoria: "G3X FC", resultado: "vice", edicoes: ["25/26"] },
  { nome: "KC Brasil", categoria: "G3X FC", resultado: "vice", edicoes: ["25/26"] }
];


export const timelineData: TimelineEvent[] = [
  {
    year: "2024",
    title: "Kings World Cup Clubs",
    team: "G3X",
    description: "Vice-campeão e eleito MVP e artilheiro da primeira edição do mundial de clubes.",
    tag: "MVP & Artilheiro",
    winTrophy: false
  },
  {
    year: "2024/25",
    title: "Kings World Cup Nations",
    team: "BRASIL",
    description: "Campeão mundial com a Seleção Brasileira, eleito MVP do torneio e artilheiro isolado.",
    tag: "Campeão & MVP",
    winTrophy: true
  },
  {
    year: "2024/25",
    title: "Kings League Brasil Split 1",
    team: "G3X",
    description: "Números consistentes, mas com eliminação precoce.",
    tag: "Artilheiro",
    winTrophy: false
  },
  {
    year: "2025/26",
    title: "Kings Cup Brasil",
    team: "G3X",
    description: "Manutenção dos números individuais em mais um vice-campeonato dolorido.",
    tag: "Artilheiro",
    winTrophy: false
  },
  {
    year: "2025/26",
    title: "Kings World Cup Nations",
    team: "BRASIL",
    description: "Bicampeonato consecutivo defendendo a Seleção Brasileira. Mesmo com menos minutos em quadra, foi um dos grandes destaques da equipe.",
    tag: "Bicampeão Mundial",
    winTrophy: true
  },
  {
    year: "2025/26",
    title: "Kings League Brasil Split 2",
    team: "G3X",
    description: "Individualmente fez jus à fama de melhor da história da modalidade em outro vice-campeonato dolorido.",
    tag: "Artilheiro",
    winTrophy: false
  },
  {
    year: "2025/26",
    title: "Kings World Cup Clubs",
    team: "G3X",
    description: "A REDENÇÃO. Conquista inédita do título mundial pelo G3X FC e nova artilharia no torneio. 9 gols nos últimos dois jogos, 5 na final.",
    tag: "Campeão & Artilheiro",
    winTrophy: true
  },
  {
    year: "2026/27",
    title: "Kings Cup Brasil",
    team: "G3X",
    description: "Próxima competição.",
    tag: "Em breve",
    winTrophy: false
  }
];

export const videosData: VideoItem[] = [
  {
    id: '1',
    youtubeId: '6ihE5l3D-ik',
    title: 'Os gols do título inédito',
    category: 'Kings World Cup Clubs',
    description: 'Compilado dos gols do G3X FC durante a campanha do título mundial.'
  },
  {
    id: '2',
    youtubeId: 'T0QPY2asGR8',
    title: '19 gols em 5 jogos!',
    category: 'Kings World Cup Nations',
    description: 'Todos os gols do K9 no primeiro título mundial da seleção brasileira na KL.'
  },
  {
    id: '3',
    youtubeId: 'SnxH_4P8qWU',
    title: '100 gols!',
    category: 'Kings League',
    description: 'Os 100 primeiros gols de Kelvin Oliveira no Universo KL.'
  }
];