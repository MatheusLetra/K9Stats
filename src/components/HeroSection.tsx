import React from 'react';
import heroImg from '../assets/hero.png';
import { formatDecimal } from '../utils/formatters';

interface Props {
  totalGols: number;
  totalJogos: number;
  mediaGeral: number;
}

export const HeroSection: React.FC<Props> = ({ totalGols, totalJogos, mediaGeral }) => {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-num display">9</div>
      <div className="hero-inner">
        <div>
          <div className="eyebrow">Kings League · Brasil</div>
          <h1 className="hero-name display">Kelvin<br />Oliveira <span className="k9">"K9"</span></h1>
          <p className="hero-sub">
            Presidente e Artilheiro do G3X, bi-campeão do mundo com a Seleção Brasileira na Kings World Cup Nations e campeão mundial de clubes pelo G3X.
          </p>
          <div className="hero-tags">
            <span className="tag"><b>{totalGols}</b> gols na KL</span>
            <span className="tag"><b>{totalJogos}</b> jogos disputados</span>
            <span className="tag"><b>{formatDecimal(mediaGeral)}</b> média geral</span>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Kelvin Oliveira" />
        </div>
      </div>
      <div className="scroll-cue"><div className="line"></div>ROLE PARA OS NÚMEROS</div>
    </section>
  );
};