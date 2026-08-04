import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Títulos', href: '#titulos' },
    { name: 'Trajetória', href: '#timeline' },
    { name: 'Estatísticas', href: '#kpis' },
    { name: 'Torneios', href: '#competicoes' },
    { name: 'Gráfico', href: '#grafico' },
    { name: 'Geral vs G3X', href: '#totais' },
    { name: 'Vídeos', href: '#videos' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="navbar-brand">
          K<span className="gold-text">9</span>
        </a>

        {/* Botão Mobile */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        {/* Links de Navegação */}
        <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="navbar-link"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};