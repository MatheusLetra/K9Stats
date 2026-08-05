import React from 'react';
import type { CompetitionSummary } from '../types';
import { KpiCard } from './KpiCard';
import { formatDecimal } from '../utils/formatters';

interface Props {
  data: CompetitionSummary[];
  totalJogos: number;
  totalGols: number;
  totalDoubleGoals: number;
  totalAssistencias: number;
  totalGolsEquipes: number;
  totalMvp: number;
  mediaGeral: number;
  totalVitorias: number;
  totalDerrotas: number;
  totalVitoriasShootout: number;
  totalDerrotasShootout: number;
  percentualGolsTotal: number;
  compMelhorMedia: CompetitionSummary;
}

export const KpiSection: React.FC<Props> = ({
  data,
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
}) => {
  return (
    <section id="kpis">
      <div className="section-head">
        <div>
          <div className="eyebrow">Resumo geral</div>
          <h2 className="title">Números na Kings League</h2>
        </div>
        <p className="section-note">
          Somatório de todas as competições disputadas, do primeiro split da Kings League Brasil ao título com a Seleção.
        </p>
      </div>

      <div className="kpis">
        <KpiCard 
          label="Jogos" 
          target={totalJogos} 
          foot={`em ${data.length} competições (inclui partidas com Pênalti Presidente)`} 
        />
        <KpiCard 
          label="Gols" 
          target={totalGols} 
          foot={`${totalDoubleGoals} desses gols valeram o dobro no placar (${totalGols + totalDoubleGoals} gols totais)`} 
          accent 
        />
        <KpiCard 
          label="Assistências" 
          target={totalAssistencias} 
          foot="passes para gol" 
        />
        <KpiCard 
          label="MVPs" 
          target={totalMvp} 
          foot="melhor da partida" 
        />
        <KpiCard 
          label="Vitórias Tempo Normal" 
          target={totalVitorias} 
          foot={`${totalDerrotas} derrotas no tempo regulamentar`} 
        />
        <KpiCard 
          label="Vitórias em Shootouts" 
          target={totalVitoriasShootout} 
          foot={`${totalDerrotasShootout} derrotas em desempates`} 
        />
        <KpiCard 
          label="Participação em Gols" 
          target={percentualGolsTotal} 
          foot={`% dos gols totais marcados pela equipe  (${totalGolsEquipes} gols totais)`}
          decimals={1} 
        />
        <KpiCard 
          label="Média geral" 
          target={mediaGeral} 
          foot="gols por jogo" 
          decimals={1} 
        />

        <KpiCard 
          label="Média (G + A)" 
          target={((totalGols + totalAssistencias) / totalJogos)} 
          foot={`participações por jogo (${formatDecimal(((totalGols + totalAssistencias + totalDoubleGoals) / totalJogos))} considerando gols duplos)`}
          decimals={1} 
        />

        <KpiCard 
          label="Melhor média de Gols" 
          target={compMelhorMedia ? compMelhorMedia.media : 0} 
          foot={compMelhorMedia?.name || '--'} 
          decimals={1} 
        />
      </div>
    </section>
  );
};