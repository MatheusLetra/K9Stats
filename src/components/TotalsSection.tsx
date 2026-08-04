import React from 'react';
import { formatDecimal } from '../utils/formatters';

interface Props {
  totalGeralJogos: number;
  totalGeralGols: number;
  mediaGeral: number;
  g3xJogos: number;
  g3xGols: number;
  g3xMedia: number;
}

export const TotalsSection: React.FC<Props> = ({
  totalGeralJogos,
  totalGeralGols,
  mediaGeral,
  g3xJogos,
  g3xGols,
  g3xMedia
}) => {
  return (
    <section id="totais">
      <div className="section-head">
        <div>
          <div className="eyebrow">Consolidado</div>
          <h2 className="title">KL × Clube</h2>
        </div>
        <p className="section-note">
          O total geral soma todas as camisas vestidas; o recorte G3X isola apenas a produção pelo clube.
        </p>
      </div>

      <div className="totals-grid">
        <div className="total-card">
          <div className="eyebrow">Total geral</div>
          <div className="total-row"><span className="l">Jogos</span><span className="v">{totalGeralJogos}</span></div>
          <div className="total-row"><span className="l">Gols</span><span className="v" style={{ color: 'var(--gold)' }}>{totalGeralGols}</span></div>
          <div className="total-row"><span className="l">Média</span><span className="v">{formatDecimal(mediaGeral)}</span></div>
        </div>

        <div className="total-card club">
          <div className="eyebrow">Somente G3X</div>
          <div className="total-row"><span className="l">Jogos</span><span className="v">{g3xJogos}</span></div>
          <div className="total-row"><span className="l">Gols</span><span className="v" style={{ color: 'var(--blue-soft)' }}>{g3xGols}</span></div>
          <div className="total-row"><span className="l">Média</span><span className="v">{formatDecimal(g3xMedia)}</span></div>
        </div>
      </div>
    </section>
  );
};