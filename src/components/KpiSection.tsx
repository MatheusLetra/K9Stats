import React from 'react';
import type { CompetitionSummary } from '../types';
import { KpiCard } from './KpiCard';

interface Props {
  data: CompetitionSummary[];
  totalJogos: number;
  totalGols: number;
  totalAssistencias: number;
  totalMvp: number;
  mediaGeral: number;
  compMelhorMedia: CompetitionSummary;
}

export const KpiSection: React.FC<Props> = ({
  data,
  totalJogos,
  totalGols,
  totalAssistencias,
  totalMvp,
  mediaGeral,
  compMelhorMedia
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
          foot={`em ${data.length} competições`} 
        />
        <KpiCard 
          label="Gols" 
          target={totalGols} 
          foot="artilheiro em série" 
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
          label="Média geral" 
          target={mediaGeral} 
          foot="gols por jogo" 
          decimals={1} 
        />
        <KpiCard 
          label="Melhor média" 
          target={compMelhorMedia ? compMelhorMedia.media : 0} 
          foot={compMelhorMedia?.name || '--'} 
          decimals={1} 
        />
      </div>
    </section>
  );
};