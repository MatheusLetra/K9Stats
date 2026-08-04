import React from 'react';
import type { TimelineEvent } from '../types';
import { getTeamClass } from '../utils/formatters';
import { TrophyIcon } from './TrophyIcon';

interface Props {
  events: TimelineEvent[];
}

export const TimelineSection: React.FC<Props> = ({ events }) => {
  return (
    <section id="timeline">
      <div className="section-head">
        <div>
          <div className="eyebrow">Trajetória</div>
          <h2 className="title">Linha do Tempo</h2>
        </div>
        <p className="section-note">
          A evolução cronológica das principais conquistas e momentos marcantes do K9 no universo Kings League.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <span className="timeline-year">{event.year}</span>
                <span className={`team ${getTeamClass(event.team)}`}>{event.team}</span>
              </div>
              <div><h3 className="timeline-title">{event.title}</h3> {event.winTrophy && <TrophyIcon />}</div>
              <p className="timeline-desc">{event.description}</p>
              <div className="timeline-tag">{event.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};