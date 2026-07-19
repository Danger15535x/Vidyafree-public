/* ==========================================================
   VIDYA FREE — Public Site JavaScript
   ========================================================== */

const STORAGE_KEYS = {
  books: 'vidyafree_books',
  papers: 'vidyafree_papers',
};

function getData(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}

function initDemoData() {
  if (!localStorage.getItem(STORAGE_KEYS.papers)) {
    localStorage.setItem(STORAGE_KEYS.papers, JSON.stringify([
      { id: 'p1', cls: '10', subject: 'Mathematics (Standard)', title: 'Sample Paper 2026', desc: 'Full CBSE pattern with step-marking answer key.', pdfUrl: '', year: '2026' },
      { id: 'p2', cls: '10', subject: 'Mathematics (Basic)', title: 'Sample Paper 2026', desc: 'Basic-level paper with detailed solutions.', pdfUrl: '', year: '2026' },
      { id: 'p3', cls: '10', subject: 'Science', title: 'Sample Paper 2026', desc: 'Physics, Chemistry & Biology sections combined.', pdfUrl: '', year: '2026' },
      { id: 'p4', cls: '10', subject: 'Social Science', title: 'Sample Paper 2026', desc: 'History, Geography, Civics & Economics.', pdfUrl: '', year: '2026' },
      { id: 'p5', cls: '10', subject: 'English (Communicative)', title: 'Sample Paper 2026', desc: 'Reading, writing & literature sections.', pdfUrl: '', year: '2026' },
      { id: 'p6', cls: '9', subject: 'Mathematics', title: 'Model Test Paper', desc: 'Term-pattern paper with marking scheme.', pdfUrl: '', year: '2026' },
      { id: 'p7', cls: '9', subject: 'Science', title: 'Model Test Paper', desc: 'Covers all three science sections.', pdfUrl: '', year: '2026' },
      { id: 'p8', cls: '9', subject: 'Social Science', title: 'Model Test Paper', desc: 'History, Geography, Civics & Economics combined.', pdfUrl: '', year: '2026' },
      { id: 'p9', cls: '9', subject: 'Hindi Course B', title: 'Model Test Paper', desc: 'Grammar, comprehension & writing sections.', pdfUrl: '', year: '2026' },
    ]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.books)) {
    localStorage.setItem(STORAGE_KEYS.books, JSON.stringify([
      { id: 'b1', class: '10', subject: 'Mathematics', title: 'NCERT Maths Class 10', desc: 'Complete textbook with all chapters', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jemh1dd.zip', medium: 'English' },
      { id: 'b2', class: '10', subject: 'Science', title: 'NCERT Science Class 10', desc: 'Physics, Chemistry, Biology combined', pdfUrl: 'https://ncert.nic.in/textbook/pdf/jesc1dd.zip', medium: 'English' },
      { id: 'b3', class: '9', subject: 'Mathematics', title: 'NCERT Maths Class 9', desc: 'Number systems to probability', pdfUrl: 'https://ncert.nic.in/textbook/pdf/iemh1dd.zip', medium: 'English' },
      { id: 'b4', class: '9', subject: 'Science', title: 'NCERT Science Class 9', desc: 'Matter, organisms, motion, gravitation', pdfUrl: 'https://ncert.nic.in/textbook/pdf/iesc1dd.zip', medium: 'English' },
      { id: 'b5', class: '8', subject: 'Mathematics', title: 'NCERT Maths Class 8', desc: 'Rational numbers to playing with numbers', pdfUrl: 'https://ncert.nic.in/textbook/pdf/hemh1dd.zip', medium: 'English' },
      { id: 'b6', class: '8', subject: 'Science', title: 'NCERT Science Class 8', desc: 'Crop production to pollution', pdfUrl: 'https://ncert.nic.in/textbook/pdf/hesc1dd.zip', medium: 'English' },
    ]));
  }
}
initDemoData();

const CLASSES = [
  { id: 'nursery', label: 'Nursery', sub: '3 subjects' },
  { id: 'kg', label: 'KG', sub: '3 subjects' },
  { id: '1', label: 'Class 1', sub: '5 subjects' },
  { id: '2', label: 'Class 2', sub: '5 subjects' },
  { id: '3', label: 'Class 3', sub: '5 subjects' },
  { id: '4', label: 'Class 4', sub: '6 subjects' },
  { id: '5', label: 'Class 5', sub: '6 subjects' },
  { id: '6', label: 'Class 6', sub: '7 subjects' },
  { id: '7', label: 'Class 7', sub: '7 subjects' },
  { id: '8', label: 'Class 8', sub: '7 subjects' },
  { id: '9', label: 'Class 9', sub: '8 subjects' },
  { id: '10', label: 'Class 10', sub: '8 subjects' },
  { id: '11', label: 'Class 11', sub: 'Stream-wise' },
  { id: '12', label: 'Class 12', sub: 'Stream-wise' },
];

const SUBJECTS = [
  { name: 'Mathematics', icon: '🔢', count: 12 },
  { name: 'Science', icon: '🔬', count: 10 },
  { name: 'Social Science', icon: '🌍', count: 8 },
  { name: 'Hindi', icon: '🇮🇳', count: 14 },
  { name: 'English', icon: '📖', count: 14 },
  { name: 'Sanskrit', icon: '🕉️', count: 6 },
  { name: 'Physics', icon: '⚡', count: 4 },
  { name: 'Chemistry', icon: '⚗️', count: 4 },
  { name: 'Biology', icon: '🧬', count: 4 },
  { name: 'History', icon: '🏛️', count: 4 },
  { name: 'Geography', icon: '🗺️', count: 4 },
  { name: 'Economics', icon: '💹', count: 3 },
];

const CLASS_SUBJECTS = {
  nursery: ['Hindi', 'English', 'Maths'],
  kg: ['Hindi', 'English', 'Maths'],
  '1': ['Hindi', 'English', 'Maths', 'EVS', 'Urdu'],
  '2': ['Hindi', 'English', 'Maths', 'EVS', 'Urdu'],
  '3': ['Hindi', 'English', 'Maths', 'EVS', 'Urdu'],
  '4': ['Hindi', 'English', 'Maths', 'EVS', 'Urdu', 'Sanskrit'],
  '5': ['Hindi', 'English', 'Maths', 'EVS', 'Urdu', 'Sanskrit'],
  '6': ['Hindi', 'English', 'Maths', 'Science', 'Social Science', 'Sanskrit', 'Urdu'],
  '7': ['Hindi', 'English', 'Maths', 'Science', 'Social Science', 'Sanskrit', 'Urdu'],
  '8': ['Hindi', 'English', 'Maths', 'Science', 'Social Science', 'Sanskrit', 'Urdu'],
  '9': ['Hindi', 'English', 'Maths', 'Science', 'Social Science', 'Sanskrit', 'Urdu', 'ICT'],
  '10': ['Hindi', 'English', 'Maths', 'Science', 'Social Science', 'Sanskrit', 'Urdu', 'ICT'],
  '11': ['Physics', 'Chemistry', 'Maths', 'Biology', 'Accountancy', 'Business Studies', 'Economics', 'History', 'Geography', 'Political Science', 'Sociology', 'Psychology', 'English'],
  '12': ['Physics', 'Chemistry', 'Maths', 'Biology', 'Accountancy', 'Business Studies', 'Economics', 'History', 'Geography', 'Political Science', 'Sociology', 'Psychology', 'English'],
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function getQueryParam(name) {
  return new URL(window.location.href).searchParams.get(name);
}

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isOpen ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });
}

// Class grid
const classGrid = document.getElementById('classGrid');
if (classGrid) {
  classGrid.innerHTML = CLASSES.map(c => `
    <a class="class-card" href="class.html?c=${c.id}">
      <div class="lvl">NCERT</div>
      <h3>${c.label}</h3>
      <div class="sub">${c.sub}</div>
    </a>
  `).join('');
}

// Subject grid
const subjectGrid = document.getElementById('subjectGrid');
if (subjectGrid) {
  subjectGrid.innerHTML = SUBJECTS.slice(0, 8).map(s => `
    <a class="subject-card" href="sample-papers.html">
      <span class="subj-icon">${s.icon}</span>
      <div class="subj-info">
        <h4>${s.name}</h4>
        <p>${s.count}+ resources</p>
      </div>
    </a>
  `).join('');
}

// Stats
function updateStats() {
  const books = getData(STORAGE_KEYS.books);
  const papers = getData(STORAGE_KEYS.papers);
  const bookEl = document.getElementById('statBooks');
  const paperEl = document.getElementById('statPapers');
  const subjEl = document.getElementById('statSubjects');
  if (bookEl) bookEl.textContent = books.length;
  if (paperEl) paperEl.textContent = papers.length;
  if (subjEl) subjEl.textContent = new Set([...books.map(b=>b.subject), ...papers.map(p=>p.subject)]).size || 12;
}
updateStats();

// Paper rendering
function renderPaperCard(p) {
  const ready = p.pdfUrl && p.pdfUrl.trim();
  const link = ready ? p.pdfUrl : '#';
  return `
    <article class="paper-card">
      <span class="stamp ${ready ? '' : 'soon'}">${ready ? 'FREE' : 'SOON'}</span>
      <div class="meta">Class ${p.cls} · ${escapeHtml(p.subject)}</div>
      <h3>${escapeHtml(p.title)}</h3>
      <p class="desc">${escapeHtml(p.desc)}</p>
      <div class="paper-actions">
        <a href="${link}" target="_blank" rel="noopener" class="btn btn-primary">View PDF</a>
        <a href="${link}" ${ready ? 'download' : ''} class="btn btn-ghost">Download</a>
      </div>
    </article>`;
}

function renderPapers(filter, searchTerm, containerId) {
  const container = document.getElementById(containerId || 'paperGrid');
  if (!container) return;
  let list = getData(STORAGE_KEYS.papers);
  if (filter && filter !== 'all') list = list.filter(p => p.cls === filter);
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    list = list.filter(p =>
      (p.title && p.title.toLowerCase().includes(q)) ||
      (p.subject && p.subject.toLowerCase().includes(q)) ||
      (p.desc && p.desc.toLowerCase().includes(q))
    );
  }
  container.innerHTML = list.map(renderPaperCard).join('');
  const empty = document.getElementById('paperEmptyState');
  if (empty) empty.style.display = list.length ? 'none' : 'block';
}

// Homepage paper grid
const homePaperGrid = document.getElementById('homePaperGrid');
if (homePaperGrid) {
  homePaperGrid.innerHTML = getData(STORAGE_KEYS.papers).slice(0, 3).map(renderPaperCard).join('');
}

// Sample papers page
const paperGrid = document.getElementById('paperGrid');
if (paperGrid) {
  const urlFilter = getQueryParam('filter');
  const initialFilter = urlFilter || 'all';
  renderPapers(initialFilter, '', 'paperGrid');
  document.querySelectorAll('[data-filter]').forEach(btn => {
    if (btn.dataset.filter === initialFilter) btn.className = 'btn btn-primary';
    else btn.className = 'btn btn-ghost';
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.className = 'btn btn-ghost');
      btn.className = 'btn btn-primary';
      const searchVal = document.getElementById('paperSearchInput')?.value || '';
      renderPapers(btn.dataset.filter, searchVal, 'paperGrid');
    });
  });
  const paperSearchInput = document.getElementById('paperSearchInput');
  if (paperSearchInput) {
    paperSearchInput.addEventListener('input', (e) => {
      const activeBtn = document.querySelector('[data-filter].btn-primary');
      renderPapers(activeBtn ? activeBtn.dataset.filter : 'all', e.target.value, 'paperGrid');
    });
  }
}

// Search
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const heroSearchForm = document.getElementById('heroSearchForm');

function getAllSearchables() {
  const books = getData(STORAGE_KEYS.books).map(b => ({...b, type: 'book', displayClass: b.class}));
  const papers = getData(STORAGE_KEYS.papers).map(p => ({...p, type: 'paper', displayClass: p.cls}));
  return [...books, ...papers];
}

if (searchInput && searchSuggestions) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { searchSuggestions.classList.remove('active'); return; }
    const all = getAllSearchables();
    const matches = all.filter(item =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.subject && item.subject.toLowerCase().includes(q)) ||
      (item.desc && item.desc.toLowerCase().includes(q))
    ).slice(0, 6);

    if (matches.length === 0) {
      searchSuggestions.innerHTML = '<div class="search-suggestion-item"><span class="sugg-title">No results found</span></div>';
    } else {
      searchSuggestions.innerHTML = matches.map(m => {
        const typeLabel = m.type === 'book' ? 'Book' : 'Paper';
        const meta = `Class ${m.displayClass} · ${m.subject || ''}`;
        const href = m.type === 'paper' ? 'sample-papers.html' : `class.html?c=${m.displayClass}`;
        return `<a class="search-suggestion-item" href="${href}">
          <span class="sugg-type">${typeLabel}</span>
          <div>
            <div class="sugg-title">${escapeHtml(m.title)}</div>
            <div class="sugg-meta">${escapeHtml(meta)}</div>
          </div>
        </a>`;
      }).join('');
    }
    searchSuggestions.classList.add('active');
  });
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
      searchSuggestions.classList.remove('active');
    }
  });
}
if (heroSearchForm) {
  heroSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchInput.value.trim()) window.location.href = 'sample-papers.html';
  });
}

// Class detail page
const classTitle = document.getElementById('classTitle');
if (classTitle) {
  const c = getQueryParam('c');
  const clsInfo = CLASSES.find(x => x.id === c) || { label: 'Class ' + c, sub: '' };
  classTitle.innerHTML = `${escapeHtml(clsInfo.label)} <span class="hl">Resources</span>`;
  document.getElementById('classDesc').textContent = `Browse all subjects, NCERT books, and sample papers for ${clsInfo.label}.`;

  const subjects = CLASS_SUBJECTS[c] || ['Mathematics', 'Science', 'English', 'Hindi', 'Social Science'];
  const books = getData(STORAGE_KEYS.books).filter(b => b.class === c);
  if (subjectDetailGrid) {
    document.getElementById('subjectDetailGrid').innerHTML = subjects.map(subj => {
      const book = books.find(b => b.subject.toLowerCase() === subj.toLowerCase());
      const chapters = ['Ch 1', 'Ch 2', 'Ch 3', 'Ch 4', 'Ch 5', 'Ch 6'];
      return `
        <div class="subject-detail-card">
          <h4>${escapeHtml(subj)}</h4>
          <p>${book ? escapeHtml(book.desc) : 'NCERT textbook and resources available.'}</p>
          <div class="chapters">
            ${chapters.map(ch => `<span class="chapter-tag">${ch}</span>`).join('')}
          </div>
          ${book ? `<div style="margin-top:12px;"><a href="${book.pdfUrl}" target="_blank" class="btn btn-primary btn-sm">📖 Open Book</a></div>` : ''}
        </div>`;
    }).join('');
  }
  const subjectCountEl = document.getElementById('classSubjectCount');
  if (subjectCountEl) subjectCountEl.textContent = `${subjects.length} subjects available for ${clsInfo.label}.`;

  const classPaperGrid = document.getElementById('classPaperGrid');
  if (classPaperGrid) {
    const papers = getData(STORAGE_KEYS.papers).filter(p => p.cls === c);
    if (papers.length) {
      classPaperGrid.innerHTML = papers.map(renderPaperCard).join('');
      document.getElementById('classPaperEmpty').style.display = 'none';
    } else {
      classPaperGrid.innerHTML = '';
      document.getElementById('classPaperEmpty').style.display = 'block';
    }
  }
}
