import React from 'react';
import type { VideoItem } from '../types';

interface Props {
  videos: VideoItem[];
}

export const VideosSection: React.FC<Props> = ({ videos }) => {
  return (
    <section id="videos">
      <div className="section-head">
        <div>
          <div className="eyebrow">Destaques em Vídeo</div>
          <h2 className="title">Melhores Momentos</h2>
        </div>
        <p className="section-note">
          Confira os gols, dribles e atuações mais marcantes do K9 nas competições oficiais.
        </p>
      </div>

      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <span className="video-category">{video.category}</span>
              <h3 className="video-title">{video.title}</h3>
              <p className="video-desc">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};