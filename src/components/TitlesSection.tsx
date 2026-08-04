import React from 'react';
import type { TitleItem } from '../types';

interface Props {
  titulos: TitleItem[];
}

export const TitlesSection: React.FC<Props> = ({ titulos }) => {
  const getBadgeAndClass = (item: TitleItem) => {
    if (item.resultado === 'mvp') {
      return { className: 'title-card mvp', badgeClass: 'badge mvp', text: 'MVP' };
    }
    if (item.resultado === 'artilheiro') {
      const text = item.edicoes.length > 1 ? `Artilheiro (${item.edicoes.length}x)` : 'Artilheiro';
      return { className: 'title-card artilheiro', badgeClass: 'badge artilheiro', text };
    }
    const isCampeao = item.resultado === 'campeao';
    const text = isCampeao
      ? (item.edicoes.length > 1 ? `Campeão (${item.edicoes.length}x)` : 'Campeão')
      : 'Vice-campeão';
    return {
      className: `title-card ${isCampeao ? 'gold' : 'silver'}`,
      badgeClass: `badge ${isCampeao ? 'gold' : 'silver'}`,
      text
    };
  };

  return (
    <section id="titulos">
      <div className="section-head">
        <div>
          <div className="eyebrow">Conquistas</div>
          <h2 className="title">Títulos e Prêmios</h2>
        </div>
        <p className="section-note">Troféus e campanhas de destaque defendendo a Seleção Brasileira e o G3X FC.</p>
      </div>
      <div className="titles-grid">
        {titulos.map((item, index) => {
          const { className, badgeClass, text } = getBadgeAndClass(item);
          return (
            <div key={index} className={className}>
              <div className="title-head">
                <span className={badgeClass}>{text}</span>
                <span className="title-team">{item.categoria}</span>
              </div>
              <h3 className="title-name">{item.nome}</h3>
              <div className="title-editions">
                {item.edicoes.map((ed, i) => (
                  <span key={i} className="edition-tag">{ed}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};