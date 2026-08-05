export interface CompetitionSummary {
  id: number;
  name: string;
  jogos: number;
  gols: number;
  assistencias: number;
  mvp: number;
  media: number;
  team: string;
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
  competition_id: number;
  rival_id: number;
  self_team: number;
  goals: number;
  double_goals: number;
  assists: number;
  match_mvp: boolean;
  date: string
}

export interface Competition {
  id: number;
  name: string;
}

export interface FormattedMatch extends Match {
  selfTeamData?: Team;
  rivalTeamData?: Team;
}

export interface RivalStat {
  team: Team;
  jogos: number;
  gols: number;
  assistencias: number;
  mvps: number;
  mediaGols: number;
}