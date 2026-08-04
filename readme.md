# ⚽ K9 — Kelvin Oliveira | Estatísticas

Aplicação web desenvolvida em **React**, **TypeScript** e **Vite** para exibição performática e responsiva das estatísticas do jogador Kelvin Oliveira ("K9") em suas participações na **Kings League**, **Kings World Cup** e **Seleção Brasileira**.

Este projeto foi migrado de uma arquitetura estática em Vanilla JS/CSS/HTML para uma estrutura **componentizada, escalável e fortemente tipada**.

---

## 🚀 Tecnologias Utilizadas

- **React 18** — Biblioteca para construção de interfaces
- **TypeScript** — Mapeamento e tipagem estática dos dados e componentes
- **Vite** — Ferramenta de build ultra-rápida para o ambiente de desenvolvimento
- **CSS Module / CSS Custom Properties** — Estilização moderna, responsiva e tematizada via variáveis
- **Intersection Observer API** — Disparo de animações sob demanda à medida que o usuário navega pela tela
- **Google Fonts** — Tipografia customizada (`Anton`, `Manrope` e `JetBrains Mono`)

---

## 📁 Estrutura de Pastas

```text
src/
├── assets/
│   └── hero.png           # Imagens e assets estáticos do projeto
├── components/
│   ├── BarChart.tsx        # Gráfico SVG responsivo de gols por competição
│   ├── CompetitionList.tsx # Lista detalhada de estatísticas com barras de aproveitamento
│   ├── HeroSection.tsx     # Seção principal com destaque do jogador
│   ├── KpiCard.tsx         # Componente individual de KPI animado
│   ├── KpiSection.tsx      # Seção com resumo consolidado de números gerais
│   ├── TitlesSection.tsx   # Grid de títulos, MVPs e conquistas de artilharia
│   └── TotalsSection.tsx   # Recorte comparativo geral vs. G3X FC
├── data/
│   └── statistics.ts      # Dataset estático e tipado das competições e títulos
├── hooks/
│   └── useCountUp.ts      # Hook customizado para animações do tipo count-up
├── types/
│   └── index.ts           # Interfaces e tipos globais (Competition, TitleItem, etc)
├── utils/
│   └── formatters.ts      # Funções utilitárias de formatação e mapeamento
├── App.tsx                # Componente container com cálculos centralizados (useMemo)
├── main.tsx               # Ponto de entrada do React
└── index.css              # Estilos globais, temas e regras de responsividade

```