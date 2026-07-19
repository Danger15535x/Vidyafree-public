
const CLASSES = [
  { id: 1, name: "Class 6", icon: "🎒", desc: "Foundation building with NCERT books and sample papers", subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"], chapters: 45 },
  { id: 2, name: "Class 7", icon: "📚", desc: "Strengthening concepts across all core subjects", subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"], chapters: 52 },
  { id: 3, name: "Class 8", icon: "🔬", desc: "Deep dive into science and mathematics fundamentals", subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"], chapters: 58 },
  { id: 4, name: "Class 9", icon: "🧮", desc: "Board exam preparation begins with comprehensive resources", subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"], chapters: 65 },
  { id: 5, name: "Class 10", icon: "🏆", desc: "Board exam year - complete study materials and past papers", subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"], chapters: 72 },
  { id: 6, name: "Class 11", icon: "🎓", desc: "Senior secondary - Science, Commerce & Arts streams", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "History", "Political Science"], chapters: 80 },
  { id: 7, name: "Class 12", icon: "🎯", desc: "Final board exams - premium study materials and solutions", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accountancy", "Economics", "History", "Political Science", "Business Studies"], chapters: 85 }
];

const SUBJECTS = [
  { name: "Mathematics", emoji: "🔢", color: "#4f46e5" },
  { name: "Science", emoji: "🔬", color: "#06b6d4" },
  { name: "Social Science", emoji: "🌍", color: "#f59e0b" },
  { name: "English", emoji: "📖", color: "#ec4899" },
  { name: "Hindi", emoji: "📝", color: "#8b5cf6" },
  { name: "Physics", emoji: "⚛️", color: "#3b82f6" },
  { name: "Chemistry", emoji: "🧪", color: "#10b981" },
  { name: "Biology", emoji: "🧬", color: "#22c55e" },
  { name: "Accountancy", emoji: "💰", color: "#f97316" },
  { name: "Economics", emoji: "📊", color: "#14b8a6" },
  { name: "History", emoji: "🏛️", color: "#a855f7" },
  { name: "Computer Science", emoji: "💻", color: "#6366f1" }
];

function getBooks() { try { return JSON.parse(localStorage.getItem('vf_books') || '[]'); } catch { return []; } }
function getPapers() { try { return JSON.parse(localStorage.getItem('vf_papers') || '[]'); } catch { return []; } }
function getEbooks() { try { return JSON.parse(localStorage.getItem('vf_ebooks') || '[]'); } catch { return []; } }

const DEMO_BOOKS = [
  { id: "b1", title: "NCERT Mathematics Class 10", subject: "Mathematics", class: "Class 10", type: "NCERT Book", url: "https://ncert.nic.in/textbook/pdf/jemh1dd.zip", date: "2024-01-15" },
  { id: "b2", title: "NCERT Science Class 10", subject: "Science", class: "Class 10", type: "NCERT Book", url: "https://ncert.nic.in/textbook/pdf/jesc1dd.zip", date: "2024-01-15" },
  { id: "b3", title: "NCERT Mathematics Class 9", subject: "Mathematics", class: "Class 9", type: "NCERT Book", url: "https://ncert.nic.in/textbook/pdf/iemh1dd.zip", date: "2024-01-10" },
  { id: "b4", title: "NCERT Physics Class 11", subject: "Physics", class: "Class 11", type: "NCERT Book", url: "https://ncert.nic.in/textbook/pdf/keph1dd.zip", date: "2024-01-20" },
  { id: "b5", title: "NCERT Chemistry Class 12", subject: "Chemistry", class: "Class 12", type: "NCERT Book", url: "https://ncert.nic.in/textbook/pdf/lech1dd.zip", date: "2024-01-22" },
];

const DEMO_PAPERS = [
  { id: "p1", title: "CBSE Class 10 Maths Standard 2024", subject: "Mathematics", class: "Class 10", year: "2024", type: "Sample Paper", url: "#", date: "2024-02-01" },
  { id: "p2", title: "CBSE Class 10 Science 2024", subject: "Science", class: "Class 10", year: "2024", type: "Sample Paper", url: "#", date: "2024-02-01" },
  { id: "p3", title: "CBSE Class 12 Physics 2024", subject: "Physics", class: "Class 12", year: "2024", type: "Sample Paper", url: "#", date: "2024-02-05" },
  { id: "p4", title: "CBSE Class 9 Maths 2023", subject: "Mathematics", class: "Class 9", year: "2023", type: "Sample Paper", url: "#", date: "2024-01-20" },
  { id: "p5", title: "CBSE Class 11 Chemistry 2024", subject: "Chemistry", class: "Class 11", year: "2024", type: "Sample Paper", url: "#", date: "2024-02-10" },
];

const DEMO_EBOOKS = [
  { id: "e1", title: "R.D. Sharma Mathematics Class 10", subject: "Mathematics", class: "Class 10", author: "R.D. Sharma", type: "eBook", url: "#", date: "2024-01-25" },
  { id: "e2", title: "S.L. Arora Physics Class 11", subject: "Physics", class: "Class 11", author: "S.L. Arora", type: "eBook", url: "#", date: "2024-01-28" },
  { id: "e3", title: "Pradeep Chemistry Class 12", subject: "Chemistry", class: "Class 12", author: "Pradeep", type: "eBook", url: "#", date: "2024-02-01" },
];

function initDemoData() {
  if (!localStorage.getItem('vf_books')) localStorage.setItem('vf_books', JSON.stringify(DEMO_BOOKS));
  if (!localStorage.getItem('vf_papers')) localStorage.setItem('vf_papers', JSON.stringify(DEMO_PAPERS));
  if (!localStorage.getItem('vf_ebooks')) localStorage.setItem('vf_ebooks', JSON.stringify(DEMO_EBOOKS));
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input) return;
  const allItems = [...getBooks(), ...getPapers(), ...getEbooks()];
  input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (val.length < 2) { suggestions.classList.remove('active'); return; }
    const matches = allItems.filter(item =>
      item.title.toLowerCase().includes(val) ||
      (item.subject && item.subject.toLowerCase().includes(val)) ||
      (item.class && item.class.toLowerCase().includes(val))
    ).slice(0, 6);
    suggestions.innerHTML = matches.length ? matches.map(item => {
      const tag = item.type || 'Resource';
      return `<div class="suggestion-item" onclick="window.location.href='sample-papers.html?q=${encodeURIComponent(item.title)}'">
        <span class="tag">${tag}</span><span>${item.title}</span>
      </div>`;
    }).join('') : '<div class="suggestion-item"><span>No results found</span></div>';
    suggestions.classList.add('active');
  });
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) suggestions.classList.remove('active');
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000; const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * ease).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

function renderClasses() {
  const container = document.getElementById('classGrid');
  if (!container) return;
  container.innerHTML = CLASSES.map(c => `
    <a href="class.html?id=${c.id}" class="class-card animate-in" style="animation-delay: ${c.id * 0.1}s">
      <div class="class-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <div class="class-meta">
        <span>📚 ${c.subjects.length} Subjects</span>
        <span>📑 ${c.chapters} Chapters</span>
      </div>
    </a>
  `).join('');
}

function renderSubjects() {
  const container = document.getElementById('subjectGrid');
  if (!container) return;
  container.innerHTML = SUBJECTS.map((s, i) => `
    <div class="subject-chip animate-in" style="animation-delay: ${i * 0.05}s" onclick="filterBySubject('${s.name}')">
      <span class="emoji">${s.emoji}</span><span class="name">${s.name}</span>
    </div>
  `).join('');
}

function filterBySubject(subject) {
  window.location.href = `sample-papers.html?subject=${encodeURIComponent(subject)}`;
}

function renderPapers(filter = 'all', search = '') {
  const container = document.getElementById('papersGrid');
  if (!container) return;
  let papers = getPapers();
  if (filter !== 'all') papers = papers.filter(p => p.class === filter || p.subject === filter);
  if (search) papers = papers.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  const urlParams = new URLSearchParams(window.location.search);
  const qSubject = urlParams.get('subject');
  const qSearch = urlParams.get('q');
  if (qSubject) papers = papers.filter(p => p.subject === qSubject);
  if (qSearch) papers = papers.filter(p => p.title.toLowerCase().includes(qSearch.toLowerCase()));

  container.innerHTML = papers.length ? papers.map((p, i) => `
    <div class="paper-card animate-in" style="animation-delay: ${i * 0.05}s">
      <div class="paper-title">${p.title}</div>
      <div class="paper-meta">
        <span>${p.subject}</span><span>${p.class}</span><span>${p.year || p.type}</span>
      </div>
      <div class="paper-actions">
        <a href="${p.url}" class="btn btn-primary" target="_blank">📥 Download</a>
        <button class="btn btn-outline" onclick="showToast('Preview coming soon!')">👁 Preview</button>
      </div>
    </div>
  `).join('') : `
    <div class="empty-state" style="grid-column: 1/-1;">
      <div class="emoji">📭</div><h3>No papers found</h3><p>Try a different filter or check back later.</p>
    </div>
  `;
}

function renderClassDetail() {
  const params = new URLSearchParams(window.location.search);
  const classId = parseInt(params.get('id'));
  const classData = CLASSES.find(c => c.id === classId);
  if (!classData) { document.body.innerHTML = '<div style="padding:4rem;text-align:center"><h1>Class not found</h1><a href="index.html">← Back Home</a></div>'; return; }
  const title = document.getElementById('classTitle');
  const subjects = document.getElementById('classSubjects');
  const papers = document.getElementById('classPapers');
  if (title) title.textContent = classData.name;
  if (subjects) {
    subjects.innerHTML = classData.subjects.map(s => {
      const subj = SUBJECTS.find(x => x.name === s) || { emoji: '📘', color: '#4f46e5' };
      return `<div class="subject-chip"><span class="emoji">${subj.emoji}</span><span class="name">${s}</span></div>`;
    }).join('');
  }
  if (papers) {
    const classPapers = getPapers().filter(p => p.class === classData.name);
    papers.innerHTML = classPapers.length ? classPapers.map(p => `
      <div class="paper-card">
        <div class="paper-title">${p.title}</div>
        <div class="paper-meta"><span>${p.subject}</span><span>${p.year || p.type}</span></div>
        <div class="paper-actions">
          <a href="${p.url}" class="btn btn-primary" target="_blank">📥 Download</a>
        </div>
      </div>
    `).join('') : '<div class="empty-state" style="grid-column:1/-1"><div class="emoji">📭</div><h3>No papers yet</h3><p>Check back soon for new uploads.</p></div>';
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg; toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function toggleNav() { document.querySelector('.nav-links').classList.toggle('active'); }

function setupFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPapers(btn.dataset.filter);
    });
  });
}

function setupPaperSearch() {
  const input = document.getElementById('paperSearch');
  if (!input) return;
  input.addEventListener('input', (e) => renderPapers('all', e.target.value));
}

function init() {
  initDemoData();
  renderClasses();
  renderSubjects();
  setupSearch();
  setupFilters();
  setupPaperSearch();
  renderPapers();
  renderClassDetail();
  animateCounters();
}

document.addEventListener('DOMContentLoaded', init);
