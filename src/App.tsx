import React, { useMemo } from 'react';
import { competitionsData, timelineData, titulosData, videosData } from './data/statistics';
import { HeroSection } from './components/HeroSection';
import { TitlesSection } from './components/TitlesSection';
import { KpiSection } from './components/KpiSection';
import { CompetitionList } from './components/CompetitionList';
import { BarChart } from './components/BarChart';
import { TotalsSection } from './components/TotalsSection';
import { TimelineSection } from './components/TimelineSection';
import { VideosSection } from './components/VideosSection';

export const App: React.FC = () => {
  const stats = useMemo(() => {
    const totalJogos = competitionsData.reduce((acc, curr) => acc + curr.jogos, 0);
    const totalGols = competitionsData.reduce((acc, curr) => acc + curr.gols, 0);
    const totalAssistencias = competitionsData.reduce((acc, curr) => acc + curr.assistencias, 0);
    const totalMvp = competitionsData.reduce((acc, curr) => acc + curr.mvp, 0);
    const mediaGeral = totalJogos > 0 ? totalGols / totalJogos : 0;

    const compMelhorMedia = competitionsData.reduce(
      (max, item) => (item.media > max.media ? item : max),
      competitionsData[0]
    );
    const g3xData = competitionsData.filter(d => d.team === 'G3X');
    const g3xJogos = g3xData.reduce((acc, curr) => acc + curr.jogos, 0);
    const g3xGols = g3xData.reduce((acc, curr) => acc + curr.gols, 0);
    const g3xMedia = g3xJogos > 0 ? g3xGols / g3xJogos : 0;

    const picoProducao = competitionsData.reduce(
      (max, item) => (item.gols > max.gols ? item : max),
      competitionsData[0]
    );

    const maxGols = Math.max(...competitionsData.map(d => d.gols));

    return {
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
      maxGols
    };
  }, []);

  return (
    <>
      <HeroSection
        totalGols={stats.totalGols}
        totalJogos={stats.totalJogos}
        mediaGeral={stats.mediaGeral}
      />
      <TitlesSection titulos={titulosData} />
      <TimelineSection events={timelineData} />
      <KpiSection
        data={competitionsData}
        totalJogos={stats.totalJogos}
        totalGols={stats.totalGols}
        totalAssistencias={stats.totalAssistencias}
        totalMvp={stats.totalMvp}
        mediaGeral={stats.mediaGeral}
        compMelhorMedia={stats.compMelhorMedia}
      />
      <CompetitionList competitions={competitionsData} maxGols={stats.maxGols} />
      <BarChart
        data={competitionsData}
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

      <VideosSection videos={videosData} />

      <footer>
        <div className="brand display">
          K<span className="k9">9</span> · KELVIN OLIVEIRA
        </div>
        <p>Dados de competições da Kings League &amp; Kings World Cup Nations</p>
      </footer>
    </>
  );
};

export default App;