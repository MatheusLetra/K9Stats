export interface RawCompetition {
  name: string;
  team: 'G3X' | 'BRASIL' | 'PORCINOS';
  jogos: number;
  gols: number;
  assistencias: number;
  mvp: number;
}

export interface Competition extends RawCompetition {
  media: number;
}

export type TitleResultado = 'campeao' | 'mvp' | 'artilheiro' | 'vice';

export interface TitleItem {
  nome: string;
  categoria: string;
  resultado: TitleResultado;
  edicoes: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  team: 'G3X' | 'BRASIL' | 'PORCINOS';
  description: string;
  tag: string;
  winTrophy: boolean;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
}