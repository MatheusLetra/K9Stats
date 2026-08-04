const rawData = [
    { name: "Kings World Cup Clubs 25/26", team: "G3X", jogos: 5, gols: 14 },
    { name: "Kings World Cup Clubs 23/24", team: "G3X", jogos: 6, gols: 13 },
    { name: "Kings League Brasil Split 1", team: "G3X", jogos: 10, gols: 15 },
    { name: "Kings League Brasil Split 2", team: "G3X", jogos: 12, gols: 33 },
    { name: "Kings Cup Brasil 25/26", team: "G3X", jogos: 8, gols: 19 },
    { name: "Kings World Cup Nations 25/26", team: "BRASIL", jogos: 7, gols: 12 },
    { name: "Kings World Cup Nations 24/25", team: "BRASIL", jogos: 5, gols: 19 },
    { name: "KLSP", team: "PORCINOS", jogos: 2, gols: 4 }
]

const data = rawData.map(d => ({
    ...d,
    media: d.jogos > 0 ? d.gols / d.jogos : 0
}));

const teamClass = {
    "G3X": "g3x",
    "BRASIL": "brasil",
    "PORCINOS": "porcinos"
};

// ---------- dynamic calculations ----------
const totalJogos = data.reduce((acc, curr) => acc + curr.jogos, 0);
const totalGols = data.reduce((acc, curr) => acc + curr.gols, 0);
const mediaGeral = totalGols / totalJogos;
const melhorMedia = Math.max(...data.map(d => d.media));

const g3xData = data.filter(d => d.team === 'G3X');
const g3xJogos = g3xData.reduce((acc, curr) => acc + curr.jogos, 0);
const g3xGols = g3xData.reduce((acc, curr) => acc + curr.gols, 0);
const g3xMedia = g3xGols / g3xJogos;

// Encontra o torneio com maior número de gols no array data
const picoProducao = data.reduce((max, item) => item.gols > max.gols ? item : max, data[0]);

// Atualiza o texto explicativo da seção do gráfico
const chartNoteEl = document.getElementById('chartNote');
if (chartNoteEl && picoProducao) {
    chartNoteEl.textContent = `${picoProducao.name} é o pico de produção: ${picoProducao.gols} gols em ${picoProducao.jogos} jogos vestindo o ${picoProducao.team}.`;
}

// Update Hero Tags
document.getElementById('heroGols').textContent = totalGols;
document.getElementById('heroJogos').textContent = totalJogos;
document.getElementById('heroMedia').textContent = mediaGeral.toFixed(1).replace('.', ',');

// Update KPIs data-targets
document.getElementById('kpiJogos').dataset.target = totalJogos;
document.getElementById('kpiGols').dataset.target = totalGols;
document.getElementById('kpiMedia').dataset.target = mediaGeral.toFixed(1);
document.getElementById('kpiMelhorMedia').dataset.target = melhorMedia.toFixed(1);

// Update Totals Section
document.getElementById('totalGeralJogos').textContent = totalJogos;
document.getElementById('totalGeralGols').textContent = totalGols;
document.getElementById('totalGeralMedia').textContent = mediaGeral.toFixed(1).replace('.', ',');

document.getElementById('g3xJogos').textContent = g3xJogos;
document.getElementById('g3xGols').textContent = g3xGols;
document.getElementById('g3xMedia').textContent = g3xMedia.toFixed(1).replace('.', ',');

// ---------- build competition list ----------
const list = document.getElementById('compList');
const maxGols = Math.max(...data.map(d => d.gols));
data.forEach(d => {
    const barPct = Math.min(100, Math.round((d.gols / maxGols) * 100));
    const card = document.createElement('div');
    card.className = 'comp-card';
    card.innerHTML = `
    <div class="comp-name">
      <span class="n">${d.name}</span>
      <span class="team ${teamClass[d.team]}">${d.team}</span>
    </div>
    <div class="comp-stat"><div class="v">${d.jogos}</div><div class="l">Jogos</div></div>
    <div class="comp-stat"><div class="v">${d.gols}</div><div class="l">Gols</div></div>
    <div class="bar-wrap">
      <div class="bar-track"><div class="bar-fill" data-w="${barPct}"></div></div>
    </div>
    <div class="media-badge">${d.media.toFixed(1).replace('.',',')}</div>
  `;
    list.appendChild(card);
});

// ---------- build bar chart ----------
const svg = document.getElementById('barChart');
const W = 900,
    H = 380,
    padL = 30,
    padB = 60,
    padT = 20;
const chartW = W - padL - 20;
const barGap = 22;
const barW = (chartW - barGap * (data.length - 1)) / data.length;
const scaleY = (H - padT - padB) / maxGols;

let svgContent = '';
data.forEach((d, i) => {
    const x = padL + i * (barW + barGap);
    const h = d.gols * scaleY;
    const y = H - padB - h;
    const color = d.team === 'BRASIL' ? 'var(--gold)' : (d.team === 'PORCINOS' ? 'var(--magenta)' : 'var(--blue)');
    svgContent += `
    <rect class="growbar" x="${x}" y="${H-padB}" width="${barW}" height="0" data-h="${h}" data-y="${y}" rx="6" fill="${color}" opacity="0.9" />
    <text class="chart-bar-value" x="${x + barW/2}" y="${y - 10}" text-anchor="middle" font-size="18">${d.gols}</text>
    <text class="chart-bar-label" x="${x + barW/2}" y="${H-padB+20}" text-anchor="middle">${d.name
  .trim()
  .split(/\s+/)
  .map((palavra, index, array) =>
    index === array.length - 1 ? ` ${palavra}` : palavra.charAt(0)
  )
  .join('')}</text>
  `;
});
svgContent += `<line x1="${padL}" y1="${H-padB}" x2="${W-10}" y2="${H-padB}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>`;
svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
svg.innerHTML = svgContent;

// ---------- count-up ----------
function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimal || "0");
    const dur = 1400;
    const start = performance.now();

    function step(now) {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target * eased;
        el.textContent = decimals ? val.toFixed(decimals).replace('.', ',') : Math.round(val);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = decimals ? target.toFixed(decimals).replace('.', ',') : target;
    }
    requestAnimationFrame(step);
}

// ---------- reveal + trigger animations on intersect ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');

            if (entry.target.id === 'kpis' || entry.target.querySelector?.('.count')) {
                entry.target.querySelectorAll('.count').forEach(animateCount);
            }
            if (entry.target.id === 'compList' || entry.target.querySelector?.('.bar-fill')) {
                entry.target.querySelectorAll('.bar-fill').forEach(b => {
                    requestAnimationFrame(() => {
                        b.style.width = b.dataset.w + '%';
                    });
                });
            }
            io.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});
revealEls.forEach(el => io.observe(el));

// separate observer for the bar chart svg growth
const chartPanel = document.querySelector('.chart-panel');
const io2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.growbar').forEach((bar, i) => {
                setTimeout(() => {
                    bar.style.transition = 'height 1s cubic-bezier(.16,.8,.24,1), y 1s cubic-bezier(.16,.8,.24,1)';
                    bar.setAttribute('height', bar.dataset.h);
                    bar.setAttribute('y', bar.dataset.y);
                }, i * 70);
            });
            io2.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.25
});
if (chartPanel) io2.observe(chartPanel);