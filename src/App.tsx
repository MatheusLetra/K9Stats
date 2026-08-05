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

// Importe as competições, partidas e times do seu novo arquivo de matches
import { matches, teams, competitions } from './data/matches'; 
import type { CompetitionSummary } from './types';
import { TopVictimsSection } from './components/TopVictimsSection';

export const App: React.FC = () => {
  const stats = useMemo(() => {
    // 1. Agrupa os jogos por competição para recriar o array dinâmico de competições
    const competitionsData: CompetitionSummary[] = competitions.map((comp) => {
      const compMatches = matches.filter((m) => m.competition_id === comp.id);
      
      const jogos = compMatches.length;
      const gols = compMatches.reduce((acc, m) => acc + m.goals, 0);
      const assistencias = compMatches.reduce((acc, m) => acc + m.assists, 0);
      const mvp = compMatches.reduce((acc, m) => acc + (m.match_mvp ? 1 : 0), 0);
      const media = jogos > 0 ? Number((gols / jogos).toFixed(2)) : 0;
      
      // Identifica o time com base no primeiro jogo da competição (ex: G3X, Brazil KWC, Porcinos)
      const selfTeamId = compMatches[0]?.self_team;
      const team = teams.find((t) => t.id === selfTeamId)?.name || 'G3X';

      return {
        id: comp.id,
        name: comp.name,
        jogos,
        gols,
        assistencias,
        mvp,
        media,
        team,
      };
    }).filter((comp) => comp.jogos > 0); // Mantém apenas competições com jogos registrados

    // 2. Totais Gerais
    const totalJogos = matches.length;
    const totalGols = matches.reduce((acc, m) => acc + m.goals, 0);
    const totalAssistencias = matches.reduce((acc, m) => acc + m.assists, 0);
    const totalMvp = matches.reduce((acc, m) => acc + (m.match_mvp ? 1 : 0), 0);
    const mediaGeral = totalJogos > 0 ? totalGols / totalJogos : 0;

    // 3. Competição com melhor média
    const compMelhorMedia = competitionsData.reduce(
      (max, item) => (item.media > max.media ? item : max),
      competitionsData[0] || { media: 0 }
    );

    // 4. Totais específicos do G3X (Team ID 1)
    const g3xMatches = matches.filter((m) => m.self_team === 1);
    const g3xJogos = g3xMatches.length;
    const g3xGols = g3xMatches.reduce((acc, m) => acc + m.goals, 0);
    const g3xMedia = g3xJogos > 0 ? g3xGols / g3xJogos : 0;

    // 5. Pico de produção e Máximo de Gols
    const picoProducao = competitionsData.reduce(
      (max, item) => (item.gols > max.gols ? item : max),
      competitionsData[0] || { gols: 0 }
    );

    const maxGols = Math.max(...competitionsData.map((d) => d.gols), 0);

    return {
      competitionsData,
      totalJogos,
      totalGols,
      totalAssistencias,
      totalMvp,
      mediaGeral,
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
        totalAssistencias={stats.totalAssistencias}
        totalMvp={stats.totalMvp}
        mediaGeral={stats.mediaGeral}
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