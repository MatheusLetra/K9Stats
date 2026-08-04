import React from 'react';

interface Props {
  className?: string;
  size?: number;
}

export const TrophyIcon: React.FC<Props> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Corpo da Taça */}
      <path d="M6 9C6 11.7614 8.23858 14 11 14H13C15.7614 14 18 11.7614 18 9V3H6V9Z" />
      {/* Alça Esquerda */}
      <path d="M6 5H4C2.89543 5 2 5.89543 2 7C2 8.10457 2.89543 9 4 9H6" />
      {/* Alça Direita */}
      <path d="M18 5H20C21.1046 5 22 5.89543 22 7C22 8.10457 21.1046 9 20 9H18" />
      {/* Haste e Base */}
      <path d="M12 14V18" />
      <path d="M8 21H16" />
      <path d="M9 18H15" />
    </svg>
  );
};