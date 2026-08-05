import React, { useMemo } from 'react';
import { timelineData, titulosData, videosData } from './data/statistics';
import { HeroSection } from './components/HeroSection';
import { TitlesSection } from './components/TitlesSection';
import { KpiSection } from './components/KpiSection';
import { CompetitionList } from './components/CompetitionList';
import { BarChart } from './components/BarChart';
import { TotalsSection } from './components/TotalsSection';
import { TimelineSection } from './components/TimelineSection';
import { VideosSection } from './components/VideosSection';
import { Navbar } from './components/NavBar';
import { MatchesSection } from './components/MatchesSection';

import { matches, teams, competitions } from './data/matches'; 
import type { CompetitionSummary } from './types';
import { TopVictimsSection } from './components/TopVictimsSection';

export const App: React.FC = () => {
  const stats = useMemo(() => {
    // 1. Agrupa e calcula dados por competição
    const competitionsData: CompetitionSummary[] = competitions.map((comp) => {
      const compMatches = matches.filter((m) => m.competition_id === comp.id);
      
      const jogos = compMatches.length;
      const gols = compMatches.reduce((acc, m) => acc + m.goals, 0);
      const doubleGoals = compMatches.reduce((acc, m) => acc + (m.double_goals || 0), 0);
      const assistencias = compMatches.reduce((acc, m) => acc + m.assists, 0);
      const mvp = compMatches.reduce((acc, m) => acc + (m.match_mvp ? 1 : 0), 0);
      const media = jogos > 0 ? Number((gols / jogos).toFixed(2)) : 0;
      
      let vitorias = 0;
      let derrotas = 0;
      let vitoriasShootout = 0;
      let derrotasShootout = 0;
      let teamTotalGols = 0;

      compMatches.forEach((m) => {
        teamTotalGols += m.self_team_goals;

        const isShootout = (m.self_team_shootout_goals ?? 0) > 0 || (m.rival_shootout_goals ?? 0) > 0;

        if (isShootout) {
          if ((m.self_team_shootout_goals ?? 0) > (m.rival_shootout_goals ?? 0)) {
            vitoriasShootout++;
          } else {
            derrotasShootout++;
          }
        } else {
          if (m.self_team_goals > m.rival_goals) {
            vitorias++;
          } else if (m.self_team_goals < m.rival_goals) {
            derrotas++;
          }
        }
      });

      const percentualGolsEquipe = teamTotalGols > 0 
        ? Number(((gols / teamTotalGols) * 100).toFixed(1)) 
        : 0;
      
      const selfTeamId = compMatches[0]?.self_team;
      const team = teams.find((t) => t.id === selfTeamId)?.name || 'G3X';

      return {
        id: comp.id,
        name: comp.name,
        jogos,
        gols,
        doubleGoals,
        assistencias,
        mvp,
        media,
        team,
        vitorias,
        derrotas,
        vitoriasShootout,
        derrotasShootout,
        teamTotalGols,
        percentualGolsEquipe,
      };
    }).filter((comp) => comp.jogos > 0);

    // 2. Totais Gerais
    const totalJogos = matches.length;
    const totalGols = matches.reduce((acc, m) => acc + m.goals, 0);
    const totalDoubleGoals = matches.reduce((acc, m) => acc + (m.double_goals || 0), 0);
    const totalAssistencias = matches.reduce((acc, m) => acc + m.assists, 0);
    const totalMvp = matches.reduce((acc, m) => acc + (m.match_mvp ? 1 : 0), 0);
    const mediaGeral = totalJogos > 0 ? totalGols / totalJogos : 0;

    let totalVitorias = 0;
    let totalDerrotas = 0;
    let totalVitoriasShootout = 0;
    let totalDerrotasShootout = 0;
    let totalGolsEquipes = 0;

    matches.forEach((m) => {
      totalGolsEquipes += m.self_team_goals;
      const isShootout = (m.self_team_shootout_goals ?? 0) > 0 || (m.rival_shootout_goals ?? 0) > 0;

      if (isShootout) {
        if ((m.self_team_shootout_goals ?? 0) > (m.rival_shootout_goals ?? 0)) {
          totalVitoriasShootout++;
        } else {
          totalDerrotasShootout++;
        }
      } else {
        if (m.self_team_goals > m.rival_goals) {
          totalVitorias++;
        } else if (m.self_team_goals < m.rival_goals) {
          totalDerrotas++;
        }
      }
    });

    const percentualGolsTotal = totalGolsEquipes > 0 
      ? Number((((totalGols + totalDoubleGoals + totalAssistencias) / totalGolsEquipes) * 100).toFixed(1)) 
      : 0;

    const compMelhorMedia = competitionsData.reduce(
      (max, item) => (item.media > max.media ? item : max),
      competitionsData[0] || { media: 0 }
    );

    const g3xMatches = matches.filter((m) => m.self_team === 1);
    const g3xJogos = g3xMatches.length;
    const g3xGols = g3xMatches.reduce((acc, m) => acc + m.goals, 0);
    const g3xMedia = g3xJogos > 0 ? g3xGols / g3xJogos : 0;

    const picoProducao = competitionsData.reduce(
      (max, item) => (item.gols > max.gols ? item : max),
      competitionsData[0] || { gols: 0 }
    );

    const maxGols = Math.max(...competitionsData.map((d) => d.gols), 0);

    return {
      competitionsData,
      totalJogos,
      totalGols,
      totalDoubleGoals,
      totalAssistencias,
      totalGolsEquipes,
      totalMvp,
      mediaGeral,
      totalVitorias,
      totalDerrotas,
      totalVitoriasShootout,
      totalDerrotasShootout,
      percentualGolsTotal,
      compMelhorMedia,
      g3xJogos,
      g3xGols,
      g3xMedia,
      picoProducao,
      maxGols,
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection
        totalGols={stats.totalGols}
        totalJogos={stats.totalJogos}
        mediaGeral={stats.mediaGeral}
      />
      <TitlesSection titulos={titulosData} />
      <TimelineSection events={timelineData} />
      <KpiSection
        data={stats.competitionsData}
        totalJogos={stats.totalJogos}
        totalGols={stats.totalGols}
        totalDoubleGoals={stats.totalDoubleGoals}
        totalAssistencias={stats.totalAssistencias}
        totalGolsEquipes={stats.totalGolsEquipes}
        totalMvp={stats.totalMvp}
        mediaGeral={stats.mediaGeral}
        totalVitorias={stats.totalVitorias}
        totalDerrotas={stats.totalDerrotas}
        totalVitoriasShootout={stats.totalVitoriasShootout}
        totalDerrotasShootout={stats.totalDerrotasShootout}
        percentualGolsTotal={stats.percentualGolsTotal}
        compMelhorMedia={stats.compMelhorMedia}
      />
      <CompetitionList competitions={stats.competitionsData} maxGols={stats.maxGols} />
      <BarChart
        data={stats.competitionsData}
        maxGols={stats.maxGols}
        picoProducao={stats.picoProducao}
      />
      <TotalsSection
        totalGeralJogos={stats.totalJogos}
        totalGeralGols={stats.totalGols}
        mediaGeral={stats.mediaGeral}
        g3xJogos={stats.g3xJogos}
        g3xGols={stats.g3xGols}
        g3xMedia={stats.g3xMedia}
      />

      <MatchesSection matches={matches} teams={teams} itemsPerPage={10} />

      <TopVictimsSection matches={matches} teams={teams} limit={10} />

      <VideosSection videos={videosData} />

      <footer>
        <div className="brand display">
          K<span className="k9">9</span> · KELVIN OLIVEIRA
        </div>
        <p>Dados de competições da Kings League &amp; Kings World Cup Nations</p>
        <p>Desenvolvido por @matheus_letra</p>
      </footer>
    </>
  );
};

export default App;