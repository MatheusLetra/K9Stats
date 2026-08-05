import type { Competition, Match, Team } from "../types";


const competitions: Competition[] = [
  { id: 9,  name: "Kings Cup Brasil 26/27" },
  { id: 8,  name: "Kings World Cup Clubs 25/26"},
  { id: 7,  name: "Kings League Brasil Split 2"},
  { id: 6,  name: "Kings Cup Brasil 25/26"},
  { id: 5,  name: "Kings World Cup Nations 25/26"},
  { id: 4,  name: "Kings League Brasil Split 1"},
  { id: 3,  name: "Kings World Cup Nations 24/25"},
  { id: 2,  name: "Kings League Spain"},
  { id: 1,  name: "Kings World Cup Clubs 23/24"},
]

const teams: Team[] = [
  {
    id: 1,
    name: 'G3X',
    logo: 'https://img.sofascore.com/api/v1/team/518333/image',
  },
  {
    id: 2,
    name: 'Alpak FC',
    logo: 'https://img.sofascore.com/api/v1/team/940317/image',
  },
  {
    id: 3,
    name: 'Ultimate Móstoles',
    logo: 'https://img.sofascore.com/api/v1/team/461107/image',
  },
  {
    id: 4,
    name: 'DesimpaiN',
    logo: 'https://img.sofascore.com/api/v1/team/1077928/image',
  },
  {
    id: 5,
    name: 'Karasu',
    logo: 'https://img.sofascore.com/api/v1/team/1083484/image',
  },
  {
    id: 6,
    name: 'Fluxo',
    logo: 'https://img.sofascore.com/api/v1/team/1077930/image',
  },
  {
    id: 7,
    name: 'Capim FC',
    logo: 'https://img.sofascore.com/api/v1/team/1077926/image',
  },
  {
    id: 8,
    name: 'Dendele FC',
    logo: 'https://img.sofascore.com/api/v1/team/1077927/image',
  },
  {
    id: 9,
    name: 'Nyvelados FC',
    logo: 'https://img.sofascore.com/api/v1/team/1077933/image',
  },
  {
    id: 10,
    name: 'Loud SC',
    logo: 'https://img.sofascore.com/api/v1/team/1077932/image',
  },
  {
    id: 11,
    name: 'Furia FC',
    logo: 'https://img.sofascore.com/api/v1/team/1141681/image',
  },
  {
    id: 12,
    name: 'Dibrados FC',
    logo: 'https://img.sofascore.com/api/v1/team/1176768/image',
  },
  {
    id: 13,
    name: 'Funkbol Clube',
    logo: 'https://img.sofascore.com/api/v1/team/1077931/image',
  },
  {
    id: 14,
    name: 'Chile KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1157494/image',
  },
  {
    id: 15,
    name: 'Mexico KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041324/image',
  },
  {
    id: 16,
    name: 'Italy KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041330/image',
  },
  {
    id: 17,
    name: 'Brazil KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041338/image',
  },
  {
    id: 18,
    name: 'FC Real Elite',
    logo: 'https://img.sofascore.com/api/v1/team/1077929/image',
  },
  {
    id: 19,
    name: 'Spain KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041323/image',
  },
  {
    id: 20,
    name: 'Qatar KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1157531/image',
  },
  {
    id: 21,
    name: 'Peru KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041331/image',
  },
  {
    id: 22,
    name: 'Saudi Arabia KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041326/image',
  },
  {
    id: 23,
    name: 'Colombia KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041328/image',
  },
  {
    id: 24,
    name: 'Türkiye KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041332/image',
  },
  {
    id: 25,
    name: 'Germany KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041336/image',
  },
  {
    id: 26,
    name: 'South Korea KWC',
    logo: 'https://img.sofascore.com/api/v1/team/1041335/image',
  },
  {
    id: 27,
    name: 'Rayo de Barcelona',
    logo: 'https://img.sofascore.com/api/v1/team/461105/image',
  },
  {
    id: 28,
    name: 'Porcinos',
    logo: 'https://img.sofascore.com/api/v1/team/461104/image',
  },
  {
    id: 29,
    name: 'Saiyans',
    logo: 'https://img.sofascore.com/api/v1/team/461106/image',
  },
  {
    id: 30,
    name: 'Raniza FC',
    logo: 'https://img.sofascore.com/api/v1/team/506960/image',
  },
  {
    id: 31,
    name: 'UA Steel',
    logo: 'https://img.sofascore.com/api/v1/team/518332/image',
  },
];

const matches: Match[] = [
  {
    id: 55,
    competition_id: 8,
    rival_id: 2, // Alpak FC
    self_team: 1, // G3X
    goals: 5,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2026-08-01',
    rival_goals: 5,
    self_team_goals: 9,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 54,
    competition_id: 8,
    rival_id: 3, // Ultimate Móstoles
    self_team: 1, // G3X
    goals: 4,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2026-08-01',
    rival_goals: 2,
    self_team_goals: 8,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 53,
    competition_id: 8,
    rival_id: 4, // DesimpaiN
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2026-07-31',
    rival_goals: 5,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 52,
    competition_id: 8,
    rival_id: 2, // Alpak FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2026-07-28',
    rival_goals: 2,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 51,
    competition_id: 8,
    rival_id: 5, // Karasu
    self_team: 1, // G3X
    goals: 1,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2026-07-27',
    rival_goals: 1,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 50,
    competition_id: 7,
    rival_id: 4, // DesimpaiN
    self_team: 1, // G3X
    goals: 2,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2026-05-18',
    rival_goals: 5,
    self_team_goals: 5,
    rival_shootout_goals: 2,
    self_team_shootout_goals: 1
  },
  {
    id: 49,
    competition_id: 7,
    rival_id: 6, // Fluxo
    self_team: 1, // G3X
    goals: 1,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-05-15',
    rival_goals: 3,
    self_team_goals: 3,
    rival_shootout_goals: 2,
    self_team_shootout_goals: 3
  },
  {
    id: 48,
    competition_id: 7,
    rival_id: 7, // Capim FC
    self_team: 1, // G3X
    goals: 4,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2026-05-11',
    rival_goals: 2,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 47,
    competition_id: 7,
    rival_id: 6, // Fluxo
    self_team: 1, // G3X
    goals: 3,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-05-04',
    rival_goals: 5,
    self_team_goals: 5,
    rival_shootout_goals: 2,
    self_team_shootout_goals: 3
  },
  {
    id: 46,
    competition_id: 7,
    rival_id: 8, // Dendele FC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2026-04-27',
    rival_goals: 1,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 45,
    competition_id: 7,
    rival_id: 9, // Nyvelados FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 1,
    match_mvp: false,
    date: '2026-04-20',
    rival_goals: 6,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 44,
    competition_id: 7,
    rival_id: 4, // DesimpaiN
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 2,
    match_mvp: true,
    date: '2026-04-13',
    rival_goals: 5,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 43,
    competition_id: 7,
    rival_id: 10, // Loud SC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2026-04-06',
    rival_goals: 5,
    self_team_goals: 2,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 42,
    competition_id: 7,
    rival_id: 11, // Furia FC
    self_team: 1, // G3X
    goals: 5,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-03-30',
    rival_goals: 3,
    self_team_goals: 9,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 41,
    competition_id: 7,
    rival_id: 12, // Dibrados FC
    self_team: 1, // G3X
    goals: 6,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2026-03-23',
    rival_goals: 3,
    self_team_goals: 8,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 40,
    competition_id: 7,
    rival_id: 13, // Funkbol Clube
    self_team: 1, // G3X
    goals: 1,
    double_goals: 2,
    assists: 0,
    match_mvp: false,
    date: '2026-03-16',
    rival_goals: 2,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 39,
    competition_id: 7,
    rival_id: 7, // Capim FC
    self_team: 1, // G3X
    goals: 6,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-03-09',
    rival_goals: 4,
    self_team_goals: 10,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 38,
    competition_id: 5,
    rival_id: 14, // Chile KWC
    self_team: 17, // Brazil KWC
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2026-01-17',
    rival_goals: 2,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 37,
    competition_id: 5,
    rival_id: 15, // Mexico KWC
    self_team: 17, // Brazil KWC
    goals: 0,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2026-01-15',
    rival_goals: 3,
    self_team_goals: 8,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 36,
    competition_id: 5,
    rival_id: 16, // Italy KWC
    self_team: 17, // Brazil KWC
    goals: 3,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-01-13',
    rival_goals: 5,
    self_team_goals: 15,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 35,
    competition_id: 5,
    rival_id: 22, // Saudi Arabia KWC
    self_team: 17, // Brazil KWC
    goals: 1,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2026-01-12',
    rival_goals: 1,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 34,
    competition_id: 5,
    rival_id: 21, // Peru KWC
    self_team: 17, // Brazil KWC
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2026-01-11',
    rival_goals: 1,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 33,
    competition_id: 5,
    rival_id: 20, // Qatar KWC
    self_team: 17, // Brazil KWC
    goals: 3,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2026-01-08',
    rival_goals: 6,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 32,
    competition_id: 5,
    rival_id: 19, // Spain KWC
    self_team: 17, // Brazil KWC
    goals: 3,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2026-01-03',
    rival_goals: 7,
    self_team_goals: 3,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 31,
    competition_id: 6,
    rival_id: 11, // Furia FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2025-11-14',
    rival_goals: 4,
    self_team_goals: 4,
    rival_shootout_goals: 3,
    self_team_shootout_goals: 1
  },
  {
    id: 30,
    competition_id: 6,
    rival_id: 13, // Funkbol Clube
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2025-11-14',
    rival_goals: 4,
    self_team_goals: 4,
    rival_shootout_goals: 2,
    self_team_shootout_goals: 3
  },
  {
    id: 29,
    competition_id: 6,
    rival_id: 8, // Dendele FC
    self_team: 1, // G3X
    goals: 3,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2025-11-10',
    rival_goals: 5,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 28,
    competition_id: 6,
    rival_id: 11, // Furia FC
    self_team: 1, // G3X
    goals: 3,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2025-11-03',
    rival_goals: 4,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 27,
    competition_id: 6,
    rival_id: 4, // DesimpaiN
    self_team: 1, // G3X
    goals: 3,
    double_goals: 1,
    assists: 2,
    match_mvp: true,
    date: '2025-10-27',
    rival_goals: 6,
    self_team_goals: 9,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 26,
    competition_id: 6,
    rival_id: 18, // FC Real Elite
    self_team: 1, // G3X
    goals: 3,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2025-10-24',
    rival_goals: 5,
    self_team_goals: 8,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 25,
    competition_id: 6,
    rival_id: 10, // Loud SC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 1,
    match_mvp: false,
    date: '2025-10-20',
    rival_goals: 8,
    self_team_goals: 2,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 24,
    competition_id: 6,
    rival_id: 7, // Capim FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2025-10-17',
    rival_goals: 2,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 23,
    competition_id: 4,
    rival_id: 8, // Dendele FC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-05-09',
    rival_goals: 8,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 22,
    competition_id: 4,
    rival_id: 9, // Nyvelados FC
    self_team: 1, // G3X
    goals: 3,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2025-05-05',
    rival_goals: 5,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 21,
    competition_id: 4,
    rival_id: 6, // Fluxo
    self_team: 1, // G3X
    goals: 3,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2025-05-03',
    rival_goals: 3,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 20,
    competition_id: 4,
    rival_id: 10, // Loud SC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-04-28',
    rival_goals: 2,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 19,
    competition_id: 4,
    rival_id: 8, // Dendele FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 2,
    assists: 2,
    match_mvp: false,
    date: '2025-04-26',
    rival_goals: 1,
    self_team_goals: 9,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 18,
    competition_id: 4,
    rival_id: 11, // Furia FC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-04-21',
    rival_goals: 9,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 17,
    competition_id: 4,
    rival_id: 4, // Desimpain 
    self_team: 1, // G3X
    goals: 0,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-04-14',
    rival_goals: 3,
    self_team_goals: 8,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 16,
    competition_id: 4,
    rival_id: 13, // Funkbol Clube
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-04-07',
    rival_goals: 3,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 15,
    competition_id: 4,
    rival_id: 7, // Capim FC
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-03-31',
    rival_goals: 1,
    self_team_goals: 3,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 14,
    competition_id: 4,
    rival_id: 18, // FC Real Elite
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2025-03-29',
    rival_goals: 3,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 13,
    competition_id: 3,
    rival_id: 23, // Colombia KWC
    self_team: 17, // Brazil KWC
    goals: 5,
    double_goals: 1,
    assists: 0,
    match_mvp: true,
    date: '2025-01-12',
    rival_goals: 2,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 12,
    competition_id: 3,
    rival_id: 15, // Mexico KWC
    self_team: 17, // Brazil KWC
    goals: 3,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2025-01-10',
    rival_goals: 1,
    self_team_goals: 3,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 11,
    competition_id: 3,
    rival_id: 24, // Türkiye KWC
    self_team: 17, // Brazil KWC
    goals: 6,
    double_goals: 1,
    assists: 1,
    match_mvp: true,
    date: '2025-01-09',
    rival_goals: 4,
    self_team_goals: 12,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 10,
    competition_id: 3,
    rival_id: 25, // Germany KWC
    self_team: 17, // Brazil KWC
    goals: 3,
    double_goals: 1,
    assists: 2,
    match_mvp: true,
    date: '2025-01-04',
    rival_goals: 2,
    self_team_goals: 9,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 9,
    competition_id: 3,
    rival_id: 26, // South Korea KWC
    self_team: 17, // Brazil KWC
    goals: 2,
    double_goals: 2,
    assists: 1,
    match_mvp: true,
    date: '2025-01-02',
    rival_goals: 4,
    self_team_goals: 7,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 8,
    competition_id: 2,
    rival_id: 27, // Rayo de Barcelona
    self_team: 28, // Porcinos
    goals: 1,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2024-09-22',
    rival_goals: 1,
    self_team_goals: 2,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 7,
    competition_id: 2,
    rival_id: 3, // Ultimate Móstoles
    self_team: 28, // Porcinos
    goals: 3,
    double_goals: 0,
    assists: 0,
    match_mvp: false,
    date: '2024-09-15',
    rival_goals: 6,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 6,
    competition_id: 1,
    rival_id: 28, // Porcinos
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2024-06-09',
    rival_goals: 5,
    self_team_goals: 3,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 5,
    competition_id: 1,
    rival_id: 29, // Saiyans
    self_team: 1, // G3X
    goals: 3,
    double_goals: 1,
    assists: 2,
    match_mvp: true,
    date: '2024-06-09',
    rival_goals: 3,
    self_team_goals: 6,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 4,
    competition_id: 1,
    rival_id: 11, // Furia FC
    self_team: 1, // G3X
    goals: 4,
    double_goals: 0,
    assists: 0,
    match_mvp: true,
    date: '2024-06-06',
    rival_goals: 3,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 3,
    competition_id: 1,
    rival_id: 3, // Ultimate Móstoles
    self_team: 1, // G3X
    goals: 1,
    double_goals: 1,
    assists: 0,
    match_mvp: false,
    date: '2024-06-04',
    rival_goals: 3,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 2,
    competition_id: 1,
    rival_id: 30, // Raniza FC
    self_team: 1, // G3X
    goals: 2,
    double_goals: 0,
    assists: 1,
    match_mvp: true,
    date: '2024-05-31',
    rival_goals: 2,
    self_team_goals: 5,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
  {
    id: 1,
    competition_id: 1,
    rival_id: 31, // UA Steel
    self_team: 1, // G3X
    goals: 1,
    double_goals: 0,
    assists: 3,
    match_mvp: true,
    date: '2024-05-26',
    rival_goals: 0,
    self_team_goals: 4,
    rival_shootout_goals: 0,
    self_team_shootout_goals: 0
  },
];

export { matches, teams, competitions };
