import React from 'react';
import type { Competition } from '../types';

interface Props {
  data: Competition[];
  maxGols: number;
  picoProducao: Competition;
}

export const BarChart: React.FC<Props> = ({ data, maxGols, picoProducao }) => {
  const W = 900;
  const H = 380;
  const padL = 30;
  const padB = 60;
  const padT = 20;

  const chartW = W - padL - 20;
  const barGap = 22;
  const barW = (chartW - barGap * (data.length - 1)) / data.length;
  const scaleY = maxGols > 0 ? (H - padT - padB) / maxGols : 0;

  const formatBarLabel = (name: string) => {
    return name
      .trim()
      .split(/\s+/)
      .map((palavra, index, array) => (index === array.length - 1 ? ` ${palavra}` : palavra.charAt(0)))
      .join('');
  };

  const getBarColor = (team: string) => {
    if (team === 'BRASIL') return 'var(--gold)';
    if (team === 'PORCINOS') return 'var(--magenta)';
    return 'var(--blue)';
  };

  return (
    <section id="grafico">
      <div className="section-head">
        <div>
          <div className="eyebrow">Comparativo</div>
          <h2 className="title">Gols por competição</h2>
        </div>
        <p className="section-note">
          {picoProducao && `${picoProducao.name} é o pico de produção: ${picoProducao.gols} gols em ${picoProducao.jogos} jogos vestindo o ${picoProducao.team}.`}
        </p>
      </div>

      <div className="chart-panel">
        <svg id="barChart" viewBox={`0 0 ${W} ${H}`}>
          {data.map((d, i) => {
            const x = padL + i * (barW + barGap);
            const h = d.gols * scaleY;
            const y = H - padB - h;
            const color = getBarColor(d.team);

            return (
              <g key={i}>
                <rect
                  className="growbar"
                  x={x}
                  y={y}
                  width={barW}
                  height={h}
                  rx={6}
                  fill={color}
                  opacity={0.9}
                />
                <text className="chart-bar-value" x={x + barW / 2} y={y - 10} textAnchor="middle" fontSize="18">
                  {d.gols}
                </text>
                <text className="chart-bar-label" x={x + barW / 2} y={H - padB + 20} textAnchor="middle">
                  {formatBarLabel(d.name)}
                </text>
              </g>
            );
          })}
          <line x1={padL} y1={H - padB} x2={W - 10} y2={H - padB} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};