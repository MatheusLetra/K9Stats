import type {  RawCompetition, Competition, TitleItem } from '../types';

export const rawData: RawCompetition[] = [
  { name: "Kings Cup Brasil 26/27", team: "G3X", jogos: 0, gols: 0, assistencias: 0, mvp: 0 },
  { name: "Kings World Cup Clubs 25/26", team: "G3X", jogos: 5, gols: 14, assistencias: 0, mvp: 2 },
  { name: "Kings League Brasil Split 2", team: "G3X", jogos: 12, gols: 33, assistencias: 6, mvp: 8 },
  { name: "Kings Cup Brasil 25/26", team: "G3X", jogos: 8, gols: 19, assistencias: 5, mvp: 7 },
  { name: "Kings World Cup Nations 25/26", team: "BRASIL", jogos: 7, gols: 12, assistencias: 1, mvp: 4 },
  { name: "Kings League Brasil Split 1", team: "G3X", jogos: 10, gols: 15, assistencias: 3, mvp: 2 },
  { name: "Kings World Cup Nations 24/25", team: "BRASIL", jogos: 5, gols: 19, assistencias: 4, mvp: 5 },
  { name: "Kings League Spain", team: "PORCINOS", jogos: 2, gols: 4, assistencias: 0, mvp: 2 },
  { name: "Kings World Cup Clubs 23/24", team: "G3X", jogos: 6, gols: 13, assistencias: 7, mvp: 5 },
];

export const competitionsData: Competition[] = rawData.map(d => ({
  ...d,
  media: d.jogos > 0 ? d.gols / d.jogos : 0
}));

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