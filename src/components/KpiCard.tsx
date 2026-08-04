import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface KpiCardProps {
  label: string;
  target: number;
  foot: string;
  decimals?: number;
  accent?: boolean;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  target,
  foot,
  decimals = 0,
  accent = false,
}) => {
  const { value, ref } = useCountUp({ target, decimals });

  return (
    <div className={`kpi ${accent ? 'accent' : ''}`} ref={ref}>
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">
        <span className="count">{value}</span>
      </div>
      <div className="kpi-foot">{foot}</div>
    </div>
  );
};