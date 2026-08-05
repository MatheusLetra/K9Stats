import React, { useMemo } from 'react';
import type { Match, Team, RivalStat } from '../types';

interface TopVictimsSectionProps {
  matches: Match[];
  teams: Team[];
  limit?: number;
}

export const TopVictimsSection: React.FC<TopVictimsSectionProps> = ({
  matches,
  teams,
  limit = 5,
}) => {
  const topVictims = useMemo<RivalStat[]>(() => {
    const mapTeams = new Map<number, Team>(teams.map((t) => [t.id, t]));
    const statsMap = new Map<number, { jogos: number; gols: number; assistencias: number; mvps: number }>();

    // Processa os dados das partidas agrupando pelo rival_id
    matches.forEach((match) => {
      const current = statsMap.get(match.rival_id) || {
        jogos: 0,
        gols: 0,
        assistencias: 0,
        mvps: 0,
      };

      statsMap.set(match.rival_id, {
        jogos: current.jogos + 1,
        gols: current.gols + match.goals,
        assistencias: current.assistencias + match.assists,
        mvps: current.mvps + (match.match_mvp ? 1 : 0),
      });
    });

    // Converte para array, calcula médias e ordena pelos maiores gols
    const list: RivalStat[] = [];
    statsMap.forEach((stats, rivalId) => {
      const teamData = mapTeams.get(rivalId);
      if (teamData) {
        list.push({
          team: teamData,
          jogos: stats.jogos,
          gols: stats.gols,
          assistencias: stats.assistencias,
          mvps: stats.mvps,
          mediaGols: stats.jogos > 0 ? Number((stats.gols / stats.jogos).toFixed(2)) : 0,
        });
      }
    });

    return list.sort((a, b) => b.gols - a.gols || b.mediaGols - a.mediaGols).slice(0, limit);
  }, [matches, teams, limit]);

  const maxGolsRival = topVictims[0]?.gols || 1;

  return (
    <section id="vitimas">
      <div className="section-head">
        <div>
          <div className="eyebrow">Raio-X de Adversários</div>
          <h2 className="title">Maiores Vítimas</h2>
        </div>
        <p className="section-note">
          Os clubes que mais sofreram gols e impacto direto em confrontos.
        </p>
      </div>

      <div className="victims-grid">
        {topVictims.map((item, index) => {
          const percentage = Math.round((item.gols / maxGolsRival) * 100);

          return (
            <div key={item.team.id} className="victim-card">
              <div className="victim-rank">#{index + 1}</div>

              <div className="victim-team-info">
                <img
                  src={item.team.logo}
                  alt={item.team.name}
                  className="victim-logo"
                  loading="lazy"
                />
                <div>
                  <h3 className="victim-name">{item.team.name}</h3>
                  <span className="victim-games">{item.jogos} {item.jogos === 1 ? 'jogo' : 'jogos'} disputados</span>
                </div>
              </div>

              <div className="victim-stats">
                <div className="stat-pill">
                  <span className="stat-num">{item.gols}</span>
                  <span className="stat-lbl">Gols</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">{item.mediaGols}</span>
                  <span className="stat-lbl">Média/Jogo</span>
                </div>
              </div>

              <div className="victim-progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};