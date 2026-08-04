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

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Match {
  id: number;
  rival_id: number;
  self_team: number;
  goals: number;
  assists: number;
  match_mvp: boolean;
  date: string;
}

export interface FormattedMatch extends Match {
  selfTeamData?: Team;
  rivalTeamData?: Team;
}