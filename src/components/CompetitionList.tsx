import React from 'react';
import type { Competition } from '../types';
import { formatDecimal, getTeamClass } from '../utils/formatters';

interface Props {
  competitions: Competition[];
  maxGols: number;
}

export const CompetitionList: React.FC<Props> = ({ competitions, maxGols }) => {
  return (
    <section id="competicoes">
      <div className="section-head">
        <div>
          <div className="eyebrow">Detalhamento</div>
          <h2 className="title">Competição por competição</h2>
        </div>
        <p className="section-note">
          Jogos, gols, assistências, MVPs e média em cada torneio — do G3X na Kings League Brasil à Seleção na Kings World Cup Nations.
        </p>
      </div>

      <div className="comp-head">
        <span>Competição</span>
        <span>Jogos</span>
        <span>Gols</span>
        <span>Ast</span>
        <span>MVP</span>
        <span>Aproveitamento</span>
        <span>Média</span>
      </div>

      <div className="comp-list">
        {competitions.map((d, index) => {
          const barPct = maxGols > 0 ? Math.min(100, Math.round((d.gols / maxGols) * 100)) : 0;
          return (
            <div key={index} className="comp-card">
              <div className="comp-name">
                <span className="n">{d.name}</span>
                <span className={`team ${getTeamClass(d.team)}`}>{d.team}</span>
              </div>
              <div className="comp-stat">
                <div className="v">{d.jogos}</div>
                <div className="l">Jogos</div>
              </div>
              <div className="comp-stat">
                <div className="v">{d.gols}</div>
                <div className="l">Gols</div>
              </div>
              <div className="comp-stat">
                <div className="v">{d.assistencias}</div>
                <div className="l">Ast</div>
              </div>
              <div className="comp-stat">
                <div className="v">{d.mvp}</div>
                <div className="l">MVP</div>
              </div>
              <div className="bar-wrap">
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${barPct}%` }}></div>
                </div>
              </div>
              <div className="media-badge">{formatDecimal(d.media)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};