const fs = require('fs');
const path = require('path');

const products = [
  { id: 1, cat: 'pvc', name: 'PVC Pressure Pipe 2 Inch' },
  { id: 2, cat: 'pvc', name: 'PVC Pressure Pipe 4 Inch' },
  { id: 3, cat: 'pvc', name: 'PVC Coupling 2 Inch' },
  { id: 4, cat: 'pvc', name: 'PVC Elbow 45\u00b0 2 Inch' },
  { id: 5, cat: 'pvc', name: 'PVC Tee Joint 2 Inch' },
  { id: 6, cat: 'pvc', name: 'PVC Ball Valve 2 Inch' },
  { id: 7, cat: 'tanks', name: 'Plastic Water Tank 500L' },
  { id: 8, cat: 'tanks', name: 'Plastic Water Tank 1000L' },
  { id: 9, cat: 'tanks', name: 'Plastic Water Tank 2000L' },
  { id: 10, cat: 'tanks', name: 'Loft Tank 100L' },
  { id: 11, cat: 'tanks', name: 'Tank Stand (Mild Steel)' },
  { id: 12, cat: 'plumbing', name: 'GI Pipe 1 Inch' },
  { id: 13, cat: 'plumbing', name: 'Flexible Tap Connector' },
  { id: 14, cat: 'plumbing', name: 'Thread Seal Tape (PTFE)' },
  { id: 15, cat: 'plumbing', name: 'Brass Gate Valve 1 Inch' },
  { id: 16, cat: 'plumbing', name: 'PVC Solvent Cement 100ml' },
  { id: 17, cat: 'plumbing', name: 'Pipe Clamp 2 Inch' },
  { id: 18, cat: 'sanitary', name: 'Wall-Mounted Basin Mixer' },
  { id: 19, cat: 'sanitary', name: 'Exposed Shower Set' },
  { id: 20, cat: 'sanitary', name: 'Angle Valve 1/2 Inch' },
  { id: 21, cat: 'sanitary', name: 'Flush Tank (Cistern)' },
  { id: 22, cat: 'sanitary', name: 'Bathroom Sink (Ceramic)' },
  { id: 23, cat: 'sanitary', name: 'Towel Rail (Chrome)' },
  { id: 24, cat: 'pumps', name: 'Centrifugal Pump 1 HP' },
  { id: 25, cat: 'pumps', name: 'Submersible Pump 1 HP' },
  { id: 26, cat: 'pumps', name: 'Booster Pump 0.5 HP' },
  { id: 27, cat: 'pumps', name: 'Automatic Pressure Controller' },
  { id: 28, cat: 'pumps', name: 'Water Motor Starter' },
  { id: 29, cat: 'electrical', name: 'PVC Insulated Copper Wire 1.5mm' },
  { id: 30, cat: 'electrical', name: 'MCB 16A Single Pole' },
  { id: 31, cat: 'electrical', name: 'Modular Switch 6A' },
  { id: 32, cat: 'electrical', name: 'LED Bulb 12W' },
  { id: 33, cat: 'electrical', name: 'Ceiling Fan 1200mm' },
  { id: 34, cat: 'electrical', name: 'Extension Board 6-Socket' },
  { id: 35, cat: 'hardware', name: 'Mild Steel TMT Bar 12mm' },
  { id: 36, cat: 'hardware', name: 'Cement (OPC 53 Grade)' },
  { id: 37, cat: 'hardware', name: 'GI Binding Wire 1kg' },
  { id: 38, cat: 'hardware', name: 'Tower Bolt 8 Inch' },
  { id: 39, cat: 'hardware', name: 'MS Angle 40\u00d740\u00d75mm' },
  { id: 40, cat: 'hardware', name: 'Nails 2 Inch (1kg Box)' },
  { id: 41, cat: 'tools', name: 'Heavy-Duty Hammer 500g' },
  { id: 42, cat: 'tools', name: 'Measuring Tape 5m' },
  { id: 43, cat: 'tools', name: 'Plumber Wrench 10 Inch' },
  { id: 44, cat: 'tools', name: 'PVC Pipe Cutter' },
  { id: 45, cat: 'tools', name: 'Spirit Level 24 Inch' },
  { id: 46, cat: 'tools', name: 'Tool Kit (21 Pieces)' },
  { id: 47, cat: 'nerolac', name: 'Nerolac Interior Paint (10L)' },
  { id: 48, cat: 'nerolac', name: 'Nerolac Exterior Paint (10L)' },
  { id: 49, cat: 'nerolac', name: 'Nerolac Primer (4L)' },
  { id: 50, cat: 'nerolac', name: 'Wall Putty (20kg)' },
  { id: 51, cat: 'nerolac', name: 'Nerolac Enamel Paint (1L)' },
  { id: 52, cat: 'nerolac', name: 'Waterproofing Coating (5L)' }
];

const CAT_COLORS = {
  pvc: { bg1: '#0a1628', bg2: '#0f2844', accent: '#06b6d4', accent2: '#0891b2', highlight: '#67e8f9' },
  tanks: { bg1: '#0f172a', bg2: '#1e293b', accent: '#eab308', accent2: '#ca8a04', highlight: '#fde68a' },
  plumbing: { bg1: '#1c1917', bg2: '#292524', accent: '#f97316', accent2: '#ea580c', highlight: '#fdba74' },
  sanitary: { bg1: '#0f172a', bg2: '#172554', accent: '#3b82f6', accent2: '#2563eb', highlight: '#93c5fd' },
  pumps: { bg1: '#052e16', bg2: '#14532d', accent: '#10b981', accent2: '#059669', highlight: '#6ee7b7' },
  electrical: { bg1: '#1e1b4b', bg2: '#312e81', accent: '#a855f7', accent2: '#7c3aed', highlight: '#d8b4fe' },
  hardware: { bg1: '#0f172a', bg2: '#1e293b', accent: '#94a3b8', accent2: '#64748b', highlight: '#cbd5e1' },
  tools: { bg1: '#1e0a1e', bg2: '#2d152d', accent: '#ec4899', accent2: '#db2777', highlight: '#f9a8d4' },
  nerolac: { bg1: '#1c1010', bg2: '#2d1515', accent: '#ef4444', accent2: '#dc2626', highlight: '#fca5a5' }
};

function defs(id, c) {
  return `
    <linearGradient id="bg_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c.bg1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c.bg2};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="shine_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.06" />
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.03" />
    </linearGradient>
    <filter id="shadow_${id}">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4" />
    </filter>
    <filter id="glow_${id}">
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="${c.accent}" flood-opacity="0.2" />
    </filter>`;
}

function wrapLines(name, maxLen) {
  const words = name.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = (cur + ' ' + w).trim();
    if (test.length <= maxLen) { cur = test; }
    else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}

function textBlock(lines, yStart, size, color, spacing) {
  return lines.map((l, i) =>
    `<text x="100" y="${yStart + i * spacing}" font-family="'Segoe UI',system-ui,sans-serif" font-size="${size}" fill="${color}" text-anchor="middle" font-weight="600">${esc(l)}</text>`
  ).join('\n');
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ============== CATEGORY ILLUSTRATIONS ==============

function renderPVC(id, c, name, idx) {
  const cx = 100, cy = 75;
  const pipeW = idx < 3 ? 20 : 28;
  const pipeH = 70;
  const px = cx - pipeW / 2, py = cy - pipeH / 2;
  let extra = '';

  if (idx < 2) {
    const pipes = idx === 0 ? [pipeW, 2] : [pipeW + 4, 2];
    const y1 = cy - pipeH / 2;
    const y2 = cy + pipeH / 2;
    extra = `
      <rect x="${cx - pipes[0] - 4}" y="${y1}" width="${pipes[0]}" height="${pipeH}" rx="${pipes[0]/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
      <rect x="${cx + 4}" y="${y1}" width="${pipes[0]}" height="${pipeH}" rx="${pipes[0]/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
      <ellipse cx="${cx - pipes[0] - 4 + pipes[0]/2}" cy="${y1}" rx="${pipes[0]/2}" ry="4" fill="${c.accent}" fill-opacity="0.3"/>
      <ellipse cx="${cx + 4 + pipes[0]/2}" cy="${y2}" rx="${pipes[0]/2}" ry="4" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="${cx - pipes[0] - 4}" y="${y1}" width="${pipes[0]}" height="8" rx="4" fill="${c.highlight}" fill-opacity="0.15"/>
      <rect x="${cx + 4}" y="${y1}" width="${pipes[0]}" height="8" rx="4" fill="${c.highlight}" fill-opacity="0.15"/>`;
  } else if (idx === 2) {
    const w = pipeW + 8;
    extra = `
      <rect x="${cx - w/2}" y="${py - 5}" width="${w}" height="${pipeH + 10}" rx="${w/2}" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.6"/>
      <rect x="${cx - pipeW/2}" y="${py}" width="${pipeW}" height="${pipeH}" rx="${pipeW/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="${cx - pipeW/2}" y="${py + 4}" width="${pipeW}" height="6" rx="3" fill="${c.highlight}" fill-opacity="0.15"/>
      <line x1="${cx}" y1="${py - 4}" x2="${cx}" y2="${py + pipeH + 4}" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.3"/>`;
  } else if (idx === 3) {
    const w = pipeW;
    extra = `
      <rect x="${cx + 5}" y="${cy + 5}" width="${w}" height="${pipeH/2}" rx="${w/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5" transform="rotate(45 ${cx + 5 + w/2} ${cy + 5 + pipeH/4})"/>
      <rect x="${cx - 5 - w}" y="${cy - 5 - pipeH/2}" width="${w}" height="${pipeH/2}" rx="${w/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5" transform="rotate(45 ${cx - 5 - w/2} ${cy - 5 - pipeH/4})"/>
      <circle cx="${cx}" cy="${cy}" r="6" fill="${c.accent}" fill-opacity="0.3"/>
      <circle cx="${cx}" cy="${cy}" r="3" fill="${c.accent}" fill-opacity="0.6"/>`;
  } else if (idx === 4) {
    extra = `
      <rect x="${cx - pipeW/2}" y="${py + pipeH/2}" width="${pipeW}" height="${pipeH/2}" rx="${pipeW/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
      <rect x="${cx - pipeW/2}" y="${py}" width="${pipeW}" height="${pipeH/2}" rx="${pipeW/2}" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
      <rect x="${cx - 2}" y="${cy - pipeH/4}" width="${pipeW + 10}" height="${pipeW}" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.5"/>
      <circle cx="${cx}" cy="${cy}" r="5" fill="${c.accent}" fill-opacity="0.3"/>`;
  } else {
    const vw = 36, vh = 50;
    extra = `
      <rect x="${cx - vw/2}" y="${cy - vh/2}" width="${vw}" height="${vh}" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="${cx - 3}" y="${cy - vh/2 - 14}" width="6" height="14" rx="3" fill="${c.accent}" fill-opacity="0.4"/>
      <rect x="${cx - 8}" y="${cy - vh/2 - 18}" width="16" height="6" rx="2" fill="${c.accent}" fill-opacity="0.6"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="${c.highlight}" fill-opacity="0.3"/>`;
  }

  return `
    <g filter="url(#shadow_${id})">
      <rect x="35" y="25" width="130" height="100" rx="50" fill="none" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.08"/>
      ${extra}
    </g>`;
}

function renderTanks(id, c, name, idx) {
  const cx = 100;
  let h = [40, 50, 60, 35, 45][idx];
  let w = [50, 56, 62, 70, 48][idx];
  let y = 80 - h / 2;

  let body = '';

  if (idx < 3) {
    const r = w / 2;
    body = `
      <rect x="${cx - w/2}" y="${y + 6}" width="${w}" height="${h}" rx="4" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <ellipse cx="${cx}" cy="${y + 6}" rx="${r}" ry="8" fill="${c.accent}" fill-opacity="0.15" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <ellipse cx="${cx}" cy="${y + h}" rx="${r - 2}" ry="5" fill="${c.accent}" fill-opacity="0.1"/>
      <rect x="${cx - w/4}" y="${y - 4}" width="${w/2}" height="4" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      ${idx !== 1 ? `<rect x="${cx - 2}" y="${y + 6}" width="${w * 0.7}" height="${h}" rx="2" fill="${c.highlight}" fill-opacity="0.06"/>` : ''}
      <line x1="${cx - w/3}" y1="${y + 10}" x2="${cx - w/3}" y2="${y + h - 5}" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <line x1="${cx + w/3}" y1="${y + 10}" x2="${cx + w/3}" y2="${y + h - 5}" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>`;
  } else if (idx === 3) {
    body = `
      <rect x="${cx - w/2}" y="${y + 4}" width="${w}" height="${h - 8}" rx="3" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <ellipse cx="${cx}" cy="${y + 4}" rx="${w/2}" ry="6" fill="${c.accent}" fill-opacity="0.15" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="${cx - 8}" y="${y - 2}" width="16" height="4" rx="2" fill="${c.accent}" fill-opacity="0.4"/>
      <rect x="${cx - w/3}" y="${y + 4}" width="6" height="${h - 12}" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>`;
  } else {
    body = `
      <rect x="${cx - w/2 - 8}" y="${y + h - 15}" width="${w + 16}" height="8" rx="2" fill="${c.accent}" fill-opacity="0.2" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.3"/>
      <rect x="${cx - w/2}" y="${y - 5}" width="${w}" height="${h - 20}" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <line x1="${cx - w/2}" y1="${y + 15}" x2="${cx + w/2}" y2="${y + 15}" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <rect x="${cx - w/3}" y="${y - 10}" width="${w * 2/3}" height="5" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <line x1="${cx - w/2 - 8}" y1="${y + h - 11}" x2="${cx - w/2 - 8}" y2="${y + h - 11 - 30}" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>
      <line x1="${cx + w/2 + 8}" y1="${y + h - 11}" x2="${cx + w/2 + 8}" y2="${y + h - 11 - 30}" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>`;
  }

  return `<g filter="url(#shadow_${id})">${body}</g>`;
}

function renderPlumbing(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="40" y="35" width="120" height="30" rx="15" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="40" y="80" width="120" height="10" rx="5" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="40" y="${35 + (80 - 35)/2 - 2}" width="120" height="4" fill="${c.highlight}" fill-opacity="0.12"/>
      <line x1="40" y1="50" x2="40" y2="80" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>
      <line x1="160" y1="50" x2="160" y2="80" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>`;
  } else if (idx < 2) {
    svg = `
      <path d="M 50,60 Q 50,30 80,30 Q 110,30 110,50 Q 110,70 140,70 Q 160,70 160,50" fill="none" stroke="${c.accent}" stroke-width="3" stroke-opacity="0.5" stroke-linecap="round"/>
      <path d="M 50,70 Q 50,40 80,40 Q 110,40 110,60 Q 110,80 140,80 Q 160,80 160,60" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25" stroke-linecap="round"/>
      <ellipse cx="50" cy="65" rx="5" ry="8" fill="${c.accent}" fill-opacity="0.2"/>
      <ellipse cx="160" cy="55" rx="5" ry="8" fill="${c.accent}" fill-opacity="0.2"/>`;
  } else if (idx < 3) {
    svg = `
      <circle cx="100" cy="70" r="28" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <circle cx="100" cy="70" r="22" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25"/>
      <circle cx="100" cy="70" r="8" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="95" y="30" width="10" height="8" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <line x1="100" y1="38" x2="100" y2="45" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="45" y="50" width="110" height="40" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="55" y="30" width="90" height="20" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <path d="M 75,30 L 75,50 M 125,30 L 125,50" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>
      <rect x="93" y="25" width="14" height="8" rx="2" fill="${c.accent}" fill-opacity="0.4"/>
      <rect x="45" y="85" width="110" height="6" rx="3" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="50" y="55" width="6" height="30" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>`;
  } else if (idx < 5) {
    svg = `
      <rect x="55" y="40" width="30" height="70" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="57" y="45" width="26" height="60" rx="4" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="85" y="60" width="40" height="30" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="120" y="65" width="15" height="20" rx="2" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="55" y="80" width="26" height="6" rx="2" fill="${c.highlight}" fill-opacity="0.1"/>`;
  } else {
    svg = `
      <circle cx="100" cy="65" r="32" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <circle cx="100" cy="65" r="28" fill="none" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <rect x="85" y="35" width="30" height="6" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <line x1="100" y1="35" x2="100" y2="41" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <path d="M 75,65 L 125,65 M 75,70 L 125,70" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <ellipse cx="100" cy="93" rx="6" ry="3" fill="${c.accent}" fill-opacity="0.2"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderSanitary(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="50" y="40" width="100" height="10" rx="4" fill="${c.accent}" fill-opacity="0.15"/>
      <path d="M 60,50 L 60,80 Q 60,90 75,90 L 125,90 Q 140,90 140,80 L 140,50" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="85" y="30" width="30" height="15" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="90" y="25" width="20" height="8" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <ellipse cx="100" cy="50" rx="3" ry="2" fill="${c.highlight}" fill-opacity="0.2"/>`;
  } else if (idx < 2) {
    svg = `
      <ellipse cx="100" cy="40" rx="25" ry="10" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <rect x="75" y="40" width="50" height="15" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <path d="M 85,55 L 85,80 Q 85,85 90,85 L 110,85 Q 115,85 115,80 L 115,55" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="60" y="45" width="12" height="6" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <ellipse cx="100" cy="40" rx="15" ry="6" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 3) {
    svg = `
      <rect x="55" y="50" width="60" height="40" rx="5" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="55" width="50" height="30" rx="3" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="115" y="55" width="20" height="30" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="60" y="45" width="6" height="12" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="90" y="45" width="6" height="12" rx="2" fill="${c.accent}" fill-opacity="0.3"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="50" y="40" width="100" height="60" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="55" y="45" width="90" height="50" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="80" y="30" width="40" height="12" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="85" y="28" width="30" height="5" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="84" y="36" width="32" height="3" rx="1" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="55" y="50" width="8" height="40" rx="3" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 5) {
    svg = `
      <ellipse cx="100" cy="55" rx="40" ry="16" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <ellipse cx="100" cy="55" rx="35" ry="13" fill="${c.accent}" fill-opacity="0.06"/>
      <path d="M 60,55 Q 60,85 80,90 L 120,90 Q 140,85 140,55" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <ellipse cx="100" cy="55" rx="20" ry="7" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="90" y="48" width="20" height="5" rx="2" fill="${c.highlight}" fill-opacity="0.1"/>`;
  } else {
    svg = `
      <rect x="40" y="55" width="120" height="12" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="40" y="65" width="8" height="8" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="152" y="65" width="8" height="8" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="60" y="60" width="80" height="6" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>
      <rect x="44" y="72" width="12" height="5" rx="2" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="144" y="72" width="12" height="5" rx="2" fill="${c.accent}" fill-opacity="0.2"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderPumps(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="50" y="40" width="100" height="60" rx="10" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <circle cx="65" cy="70" r="18" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <rect x="100" y="50" width="40" height="40" rx="5" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="95" y="35" width="10" height="10" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="95" y="30" width="10" height="5" rx="2" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="50" y="95" width="100" height="6" rx="2" fill="${c.accent}" fill-opacity="0.12"/>
      <rect x="70" y="85" width="60" height="4" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>`;
  } else if (idx < 2) {
    svg = `
      <rect x="55" y="30" width="40" height="100" rx="10" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="35" width="30" height="90" rx="8" fill="${c.accent}" fill-opacity="0.06"/>
      <circle cx="75" cy="28" rx="12" ry="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <circle cx="75" cy="25" rx="8" ry="3" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="95" y="60" width="30" height="20" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="60" y="45" width="30" height="6" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>`;
  } else if (idx < 3) {
    svg = `
      <rect x="45" y="45" width="110" height="50" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="50" y="50" width="100" height="40" rx="5" fill="${c.accent}" fill-opacity="0.06"/>
      <circle cx="100" cy="70" r="10" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="100" cy="70" r="5" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="80" y="35" width="40" height="12" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="85" y="33" width="30" height="4" rx="2" fill="${c.accent}" fill-opacity="0.3"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="55" y="40" width="90" height="60" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="45" width="80" height="50" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <circle cx="100" cy="70" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="100" cy="70" r="4" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="85" y="35" width="30" height="8" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="90" y="33" width="20" height="3" rx="1" fill="${c.accent}" fill-opacity="0.3"/>`;
  } else {
    svg = `
      <rect x="55" y="40" width="90" height="60" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="45" width="80" height="50" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="70" y="55" width="60" height="30" rx="3" fill="${c.accent}" fill-opacity="0.1"/>
      <rect x="85" y="50" width="30" height="6" rx="2" fill="${c.accent}" fill-opacity="0.2"/>
      <circle cx="100" cy="70" r="6" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <circle cx="100" cy="70" r="3" fill="${c.accent}" fill-opacity="0.2"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderElectrical(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <circle cx="100" cy="65" r="35" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <circle cx="100" cy="65" r="30" fill="${c.accent}" fill-opacity="0.04"/>
      <circle cx="100" cy="65" r="20" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>
      <rect x="90" y="30" width="20" height="8" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="90" y="92" width="20" height="8" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <line x1="100" y1="38" x2="100" y2="45" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>
      <line x1="100" y1="85" x2="100" y2="92" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>`;
  } else if (idx < 2) {
    svg = `
      <rect x="45" y="45" width="110" height="50" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="50" y="50" width="100" height="40" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="75" y="55" width="50" height="30" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <line x1="55" y1="60" x2="70" y2="60" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <line x1="130" y1="60" x2="145" y2="60" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <line x1="55" y1="80" x2="70" y2="80" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <line x1="130" y1="80" x2="145" y2="80" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>`;
  } else if (idx < 3) {
    svg = `
      <rect x="50" y="40" width="100" height="60" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="55" y="45" width="90" height="50" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="55" y="50" width="90" height="30" rx="2" fill="${c.accent}" fill-opacity="0.05"/>
      <circle cx="85" cy="65" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="115" cy="65" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="50" y="95" width="100" height="4" rx="2" fill="${c.accent}" fill-opacity="0.12"/>`;
  } else if (idx < 4) {
    svg = `
      <ellipse cx="100" cy="65" rx="28" ry="38" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <rect x="95" y="25" width="10" height="12" rx="3" fill="${c.accent}" fill-opacity="0.3"/>
      <path d="M 100,25 L 100,20 M 96,20 L 104,20" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <ellipse cx="100" cy="65" rx="15" ry="25" fill="${c.accent}" fill-opacity="0.05"/>
      <ellipse cx="100" cy="45" rx="6" ry="4" fill="${c.highlight}" fill-opacity="0.15"/>
      <line x1="72" y1="60" x2="128" y2="60" stroke="${c.accent}" stroke-width="0.5" stroke-opacity="0.15"/>`;
  } else if (idx < 5) {
    svg = `
      <circle cx="100" cy="55" r="12" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <line x1="100" y1="67" x2="100" y2="95" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>
      <rect x="60" y="75" width="10" height="3" rx="1" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="80" y="78" width="10" height="3" rx="1" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="110" y="72" width="10" height="3" rx="1" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="125" y="77" width="10" height="3" rx="1" fill="${c.accent}" fill-opacity="0.3"/>
      <rect x="100" y="80" width="40" height="4" rx="2" fill="${c.accent}" fill-opacity="0.15"/>
      <path d="M 88,40 L 88,55 L 112,55 L 112,40" fill="none" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>`;
  } else {
    svg = `
      <rect x="40" y="40" width="120" height="65" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="44" y="44" width="112" height="57" rx="6" fill="${c.accent}" fill-opacity="0.05"/>
      <rect x="55" y="55" width="90" height="30" rx="3" fill="${c.accent}" fill-opacity="0.06"/>
      <circle cx="70" cy="70" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="100" cy="70" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="130" cy="70" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="44" y="44" width="8" height="57" rx="2" fill="${c.highlight}" fill-opacity="0.05"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderHardware(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="30" y="45" width="140" height="30" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="32" y="48" width="136" height="24" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <line x1="50" y1="60" x2="150" y2="60" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <line x1="60" y1="48" x2="60" y2="72" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <line x1="80" y1="48" x2="80" y2="72" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <line x1="120" y1="48" x2="120" y2="72" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <line x1="140" y1="48" x2="140" y2="72" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>`;
  } else if (idx < 2) {
    svg = `
      <rect x="45" y="35" width="110" height="75" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="48" y="38" width="104" height="69" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="55" y="45" width="90" height="55" rx="3" fill="${c.accent}" fill-opacity="0.04"/>
      <rect x="55" y="42" width="90" height="5" rx="2" fill="${c.accent}" fill-opacity="0.1"/>
      <rect x="75" y="50" width="50" height="8" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="48" y="38" width="6" height="69" rx="2" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 3) {
    svg = `
      <circle cx="100" cy="65" r="30" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <circle cx="100" cy="65" r="26" fill="${c.accent}" fill-opacity="0.04"/>
      <circle cx="100" cy="65" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="90" y="30" width="20" height="10" rx="4" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="90" y="90" width="20" height="10" rx="4" fill="${c.accent}" fill-opacity="0.2"/>
      <line x1="100" y1="40" x2="100" y2="45" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>
      <line x1="100" y1="85" x2="100" y2="90" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.2"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="55" y="40" width="90" height="60" rx="4" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="45" width="80" height="50" rx="3" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="90" y="35" width="20" height="12" rx="2" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="100" cy="55" r="4" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="65" y="65" width="10" height="4" rx="1" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="90" y="65" width="20" height="4" rx="1" fill="${c.accent}" fill-opacity="0.2"/>`;
  } else if (idx < 5) {
    svg = `
      <rect x="40" y="45" width="120" height="30" rx="4" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="42" y="48" width="116" height="24" rx="3" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="40" y="45" width="6" height="30" rx="2" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="154" y="45" width="6" height="30" rx="2" fill="${c.accent}" fill-opacity="0.2"/>
      <rect x="60" y="55" width="8" height="10" rx="2" fill="${c.accent}" fill-opacity="0.1"/>
      <rect x="132" y="55" width="8" height="10" rx="2" fill="${c.accent}" fill-opacity="0.1"/>`;
  } else {
    svg = `
      <rect x="45" y="40" width="110" height="65" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="48" y="44" width="104" height="57" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="55" y="50" width="90" height="45" rx="3" fill="${c.accent}" fill-opacity="0.04"/>
      <line x1="62" y1="58" x2="138" y2="58" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <line x1="62" y1="66" x2="138" y2="66" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <line x1="62" y1="74" x2="138" y2="74" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <line x1="62" y1="82" x2="138" y2="82" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.2"/>
      <circle cx="70" cy="65" r="3" fill="${c.accent}" fill-opacity="0.2"/>
      <circle cx="130" cy="65" r="3" fill="${c.accent}" fill-opacity="0.2"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderTools(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="45" y="35" width="110" height="65" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <rect x="48" y="40" width="104" height="55" rx="4" fill="${c.accent}" fill-opacity="0.04"/>
      <rect x="90" y="40" width="20" height="55" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="60" y="55" width="30" height="25" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="80" y="55" width="8" height="8" rx="2" fill="${c.accent}" fill-opacity="0.15"/>
      <rect x="88" y="42" width="24" height="4" rx="2" fill="${c.highlight}" fill-opacity="0.08"/>`;
  } else if (idx < 2) {
    svg = `
      <circle cx="100" cy="60" r="30" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <circle cx="100" cy="60" r="26" fill="${c.accent}" fill-opacity="0.04"/>
      <rect x="85" y="50" width="30" height="20" rx="3" fill="${c.accent}" fill-opacity="0.06"/>
      <path d="M 60,60 L 30,90" stroke="${c.accent}" stroke-width="3" stroke-opacity="0.3" stroke-linecap="round"/>
      <rect x="95" y="30" width="10" height="8" rx="2" fill="${c.accent}" fill-opacity="0.3"/>
      <line x1="85" y1="65" x2="115" y2="65" stroke="${c.accent}" stroke-width="0.5" stroke-opacity="0.15"/>`;
  } else if (idx < 3) {
    svg = `
      <line x1="35" y1="75" x2="165" y2="45" stroke="${c.accent}" stroke-width="3" stroke-opacity="0.3" stroke-linecap="round"/>
      <path d="M 40,80 L 30,75 L 35,60" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4" stroke-linecap="round"/>
      <rect x="55" y="60" width="80" height="20" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="60" y="63" width="70" height="14" rx="3" fill="${c.accent}" fill-opacity="0.05"/>
      <circle cx="145" cy="55" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="55" y="40" width="90" height="60" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="60" y="45" width="80" height="50" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="65" y="55" width="70" height="30" rx="3" fill="${c.accent}" fill-opacity="0.05"/>
      <circle cx="100" cy="70" r="10" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.3"/>
      <circle cx="100" cy="70" r="5" fill="${c.accent}" fill-opacity="0.12"/>
      <rect x="85" y="40" width="30" height="6" rx="2" fill="${c.accent}" fill-opacity="0.2"/>`;
  } else if (idx < 5) {
    svg = `
      <rect x="35" y="50" width="130" height="30" rx="4" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.4"/>
      <rect x="38" y="53" width="124" height="24" rx="3" fill="${c.accent}" fill-opacity="0.04"/>
      <circle cx="65" cy="65" r="6" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="100" cy="65" r="6" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <circle cx="135" cy="65" r="6" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="35" y="48" width="8" height="34" rx="3" fill="${c.accent}" fill-opacity="0.12"/>
      <rect x="157" y="48" width="8" height="34" rx="3" fill="${c.accent}" fill-opacity="0.12"/>`;
  } else {
    svg = `
      <rect x="40" y="35" width="120" height="75" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="44" y="40" width="112" height="65" rx="6" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="55" y="50" width="90" height="45" rx="4" fill="${c.accent}" fill-opacity="0.04"/>
      <rect x="65" y="55" width="70" height="10" rx="2" fill="${c.accent}" fill-opacity="0.06"/>
      <line x1="65" y1="70" x2="135" y2="70" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <line x1="65" y1="80" x2="135" y2="80" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15"/>
      <rect x="80" y="48" width="40" height="4" rx="2" fill="${c.accent}" fill-opacity="0.15"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

function renderNerolac(id, c, name, idx) {
  const cx = 100, cy = 75;
  let svg = '';
  if (idx < 1) {
    svg = `
      <rect x="45" y="35" width="110" height="75" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="48" y="38" width="104" height="69" rx="6" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="50" y="35" width="105" height="12" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="55" y="45" width="90" height="55" rx="2" fill="${c.accent}" fill-opacity="0.04"/>
      <ellipse cx="100" cy="48" rx="40" ry="4" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="70" y="55" width="60" height="8" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="48" y="38" width="8" height="69" rx="3" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 2) {
    svg = `
      <rect x="45" y="35" width="110" height="75" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="48" y="38" width="104" height="69" rx="6" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="50" y="35" width="105" height="12" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <rect x="55" y="45" width="90" height="55" rx="2" fill="${c.accent}" fill-opacity="0.04"/>
      <ellipse cx="100" cy="48" rx="40" ry="4" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="65" y="58" width="70" height="8" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <circle cx="100" cy="72" r="10" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25"/>
      <rect x="48" y="38" width="8" height="69" rx="3" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 3) {
    svg = `
      <rect x="55" y="40" width="90" height="65" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="58" y="43" width="84" height="59" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="58" y="40" width="84" height="10" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <ellipse cx="100" cy="48" rx="35" ry="3" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="65" y="55" width="70" height="6" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="58" y="43" width="6" height="59" rx="2" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else if (idx < 4) {
    svg = `
      <rect x="40" y="40" width="120" height="65" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="43" y="43" width="114" height="59" rx="4" fill="${c.accent}" fill-opacity="0.04"/>
      <rect x="40" y="40" width="120" height="14" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3"/>
      <rect x="43" y="56" width="114" height="43" rx="2" fill="${c.accent}" fill-opacity="0.03"/>
      <rect x="60" y="65" width="80" height="8" rx="2" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="43" y="45" width="6" height="57" rx="2" fill="${c.highlight}" fill-opacity="0.05"/>`;
  } else if (idx < 5) {
    svg = `
      <rect x="60" y="40" width="80" height="60" rx="6" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="63" y="43" width="74" height="54" rx="4" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="63" y="40" width="74" height="10" rx="3" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <ellipse cx="100" cy="48" rx="30" ry="3" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="70" y="55" width="60" height="6" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <circle cx="100" cy="68" r="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.25"/>
      <rect x="63" y="43" width="6" height="54" rx="2" fill="${c.highlight}" fill-opacity="0.06"/>`;
  } else {
    svg = `
      <rect x="50" y="38" width="100" height="70" rx="8" fill="none" stroke="${c.accent}" stroke-width="2" stroke-opacity="0.5"/>
      <rect x="53" y="41" width="94" height="64" rx="6" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="53" y="38" width="94" height="12" rx="4" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
      <ellipse cx="100" cy="48" rx="38" ry="3" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="60" y="55" width="80" height="7" rx="2" fill="${c.accent}" fill-opacity="0.08"/>
      <rect x="60" y="68" width="80" height="7" rx="2" fill="${c.accent}" fill-opacity="0.06"/>
      <rect x="53" y="41" width="6" height="64" rx="2" fill="${c.highlight}" fill-opacity="0.06"/>`;
  }
  return `<g filter="url(#shadow_${id})">${svg}</g>`;
}

const RENDERERS = {
  pvc: renderPVC,
  tanks: renderTanks,
  plumbing: renderPlumbing,
  sanitary: renderSanitary,
  pumps: renderPumps,
  electrical: renderElectrical,
  hardware: renderHardware,
  tools: renderTools,
  nerolac: renderNerolac
};

const CAT_ICONS = {
  pvc: '\u{1F527}',
  tanks: '\u{1F4A7}',
  plumbing: '\u{1F529}',
  sanitary: '\u{1F6BF}',
  pumps: '\u26A1',
  electrical: '\u{1F4A1}',
  hardware: '\u{1F3D7}\uFE0F',
  tools: '\u{1F6E0}\uFE0F',
  nerolac: '\u{1F3A8}'
};

function generateSVG(product) {
  const c = CAT_COLORS[product.cat] || CAT_COLORS.hardware;
  const catIdx = products.filter(p => p.cat === product.cat).findIndex(p => p.id === product.id);
  const lines = wrapLines(product.name, 14);
  const lineCount = lines.length;
  const textY = 170 - lineCount * 10;

  const illustration = (RENDERERS[product.cat] || renderHardware)(product.id, c, product.name, catIdx);
  const d = defs(product.id, c);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>${d}</defs>
  <rect x="0" y="0" width="200" height="200" rx="16" fill="url(#bg_${product.id})" />
  <rect x="0" y="0" width="200" height="200" rx="16" fill="url(#shine_${product.id})" />
  <rect x="1" y="1" width="198" height="198" rx="15" fill="none" stroke="${c.accent}" stroke-width="1" stroke-opacity="0.15" />
  ${illustration}
  <rect x="16" y="${textY - 6}" width="168" height="${lineCount * 18 + 14}" rx="8" fill="#000000" fill-opacity="0.35" filter="url(#glow_${product.id})" />
  ${textBlock(lines, textY + 13, 11, '#e2e8f0', 18)}
  <rect x="0" y="0" width="200" height="200" rx="16" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.3">
    <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
  </rect>
</svg>`;
}

const outputDir = path.join(__dirname, '..', 'images', 'products');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (const product of products) {
  const svg = generateSVG(product);
  const filePath = path.join(outputDir, `product_${product.id}.svg`);
  fs.writeFileSync(filePath, svg, 'utf-8');
  console.log(`Generated: images/products/product_${product.id}.svg  (${product.name})`);
}

console.log(`\nDone! Generated ${products.length} realistic product images.`);
