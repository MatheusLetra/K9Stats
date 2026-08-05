import React, { useState, useMemo } from 'react';
import type { Team, Match, FormattedMatch } from '../types';

interface Props {
  matches: Match[];
  teams: Team[];
  itemsPerPage?: number;
}

export const MatchesSection: React.FC<Props> = ({
  matches,
  teams,
  itemsPerPage = 6,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const teamsMap = useMemo(() => {
    return new Map<number, Team>(teams.map((t) => [t.id, t]));
  }, [teams]);

  const formattedMatches = useMemo<FormattedMatch[]>(() => {
    return [...matches]
      .sort((a, b) => b.id - a.id)
      .map((match) => ({
        ...match,
        selfTeamData: teamsMap.get(match.self_team),
        rivalTeamData: teamsMap.get(match.rival_id),
      }));
  }, [matches, teamsMap]);

  const totalPages = Math.ceil(formattedMatches.length / itemsPerPage);
  const currentMatches = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return formattedMatches.slice(start, start + itemsPerPage);
  }, [formattedMatches, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('jogos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="jogos">
      <div className="section-head">
        <div>
          <div className="eyebrow">Histórico de Confrontos</div>
          <h2 className="title">Partida a Partida</h2>
        </div>
        <p className="section-note">
          Registro individual de desempenho ordenado do confronto mais recente para o mais antigo.
        </p>
      </div>

      <div className="matches-grid">
        {currentMatches.map((match) => {
          const hasShootout =
            (match.self_team_shootout_goals ?? 0) > 0 ||
            (match.rival_shootout_goals ?? 0) > 0;

          return (
            <div key={match.id} className="match-card">
              <div className="match-header">
                <span className="match-id">Match #{match.id} · {match.date}</span>
                <div className="match-badges">
                  {match.match_mvp && <span className="mvp-badge">MVP</span>}
                </div>
              </div>

              {/* Placar e Confronto Directo */}
              <div className="match-scoreboard">
                {/* Meu Time */}
                <div className="team-info self">
                  <img
                    src={match.selfTeamData?.logo}
                    alt={match.selfTeamData?.name}
                    className="team-logo"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="team-name">{match.selfTeamData?.name}</span>
                </div>

                {/* Placar */}
                <div className="score-display">
                  <div className="score-main">
                    <span className="score-num">{match.self_team_goals}</span>
                    <span className="score-divider">-</span>
                    <span className="score-num">{match.rival_goals}</span>
                  </div>
                  {hasShootout && (
                    <div className="shootout-info">
                      ({match.self_team_shootout_goals} X {match.rival_shootout_goals})
                    </div>
                  )}
                </div>

                {/* Time Rival */}
                <div className="team-info rival">
                  <img
                    src={match.rivalTeamData?.logo}
                    alt={match.rivalTeamData?.name}
                    className="team-logo"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <span className="team-name">{match.rivalTeamData?.name}</span>
                </div>
              </div>

              {/* Desempenho do Kelvin */}
              <div className="match-stats">
                <div className="stat-box">
                  <span className="stat-value">{match.goals}</span>
                  <span className="stat-label">Gols</span>
                </div>
                {match.double_goals !== undefined && (
                  <div className="stat-box">
                    <span className="stat-value">{match.double_goals}</span>
                    <span className="stat-label">Gol Duplo</span>
                  </div>
                )}
                <div className="stat-box">
                  <span className="stat-value">{match.assists}</span>
                  <span className="stat-label">Assists</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>

          <span className="page-info">
            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
          </span>

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  );
};