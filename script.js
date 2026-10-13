const content = window.portfolioContent;
const header = document.querySelector('[data-header]');
const dialog = document.querySelector('[data-dialog]');
let language = 'en';
let cvMode = 'job';
let activeFilter = 'all';
let openProject = null;

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const stored = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
const save = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Visitors may disable browser storage. */ } };
const cvUrl = (lang) => 'assets/documents/Amanda_Argotti_' + (cvMode === 'academic' ? 'Academic_CV' : 'CV') + '_' + lang.toUpperCase() + '.pdf?v=20261013';
const projectLinks = (project, ui) => '<div class="project-links"><a class="text-button" href="' + project.repository + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(ui.repository) + '</a>' + (project.demo ? '<a class="text-button" href="' + project.demo + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(ui.demo) + '</a>' : '') + '</div>';
const projectData = (project) => ({...project, ...content.projectLinks[project.id]});

function updateCvLinks() {
  document.querySelectorAll('[data-primary-cv]').forEach((link) => { link.href = cvUrl(language); link.download = cvUrl(language).split('/').pop().split('?')[0]; });
  document.querySelector('[data-cv-downloads]').innerHTML = ['en', 'es', 'ru'].map((lang, i) => '<a href="' + cvUrl(lang) + '" download="' + cvUrl(lang).split('/').pop().split('?')[0] + '" lang="' + lang + '">' + ['English', 'Español', 'Русский'][i] + '</a>').join('');
}

function filterProjects() {
  document.querySelectorAll('[data-filter]').forEach((button) => { const selected = button.dataset.filter === activeFilter; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('[data-tags]').forEach((card) => { card.hidden = activeFilter !== 'all' && !card.dataset.tags.split(' ').includes(activeFilter); });
}

function renderCaseStudy() {
  const data = content[language];
  const item = data.projects.find((project) => project.id === openProject);
  if (!item) return;
  const project = projectData(item);
  document.querySelector('[data-case-study]').innerHTML = '<p class="section-kicker">' + escapeHtml(data.ui.caseStudy) + '</p><h2 id="dialog-title">' + escapeHtml(project.title) + '</h2><p>' + escapeHtml(project.copy) + '</p>' + ['contribution', 'decisions', 'status', 'limitations'].map((key, i) => '<h3>' + escapeHtml(data.ui[['roleLabel', 'decisions', 'statusLabel', 'limitations'][i]]) + '</h3><p>' + escapeHtml(project[key]) + '</p>').join('') + projectLinks(project, data.ui);
}

function applyLanguage(next) {
  language = ['en', 'es', 'ru'].includes(next) ? next : 'en';
  const data = content[language];
  document.documentElement.lang = language;
  document.title = 'Amanda Argotti | ' + data.role;
  document.querySelector('meta[name="description"]').content = data.summary;
  document.querySelectorAll('[data-ui]').forEach((node) => { node.textContent = data.ui[node.dataset.ui]; });
  document.querySelectorAll('[data-content]').forEach((node) => { node.textContent = data[node.dataset.content]; });
  document.querySelectorAll('[data-label]').forEach((node) => { node.setAttribute('aria-label', data.ui[node.dataset.label]); node.title = data.ui[node.dataset.label]; });
  document.querySelectorAll('[data-lang]').forEach((button) => { const selected = button.dataset.lang === language; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  document.querySelector('[data-experience]').innerHTML = data.experience.map((item) => '<article class="experience-entry"><p class="section-kicker">' + escapeHtml(item.meta) + '</p><h3>' + escapeHtml(item.title) + '</h3><ul>' + item.points.map((point) => '<li>' + escapeHtml(point) + '</li>').join('') + '</ul></article>').join('');
  document.querySelector('[data-projects]').innerHTML = data.projects.map(projectData).map((project) => '<article class="project-card" data-tags="' + project.tags.join(' ') + '">' + (project.image ? '<img class="project-preview" src="' + project.image + '" alt="' + escapeHtml(project.title) + '" loading="lazy" width="1200" height="750" />' : '') + '<div class="project-topline"><span>' + escapeHtml(project.meta) + '</span></div><h3>' + escapeHtml(project.title) + '</h3><p>' + escapeHtml(project.copy) + '</p><div class="project-stack">' + project.stack.map((tech) => '<span>' + escapeHtml(tech) + '</span>').join('') + '</div><button class="text-button" type="button" data-project-open="' + project.id + '">' + escapeHtml(data.ui.caseStudy) + '<span class="sr-only">: ' + escapeHtml(project.title) + '</span></button>' + projectLinks(project, data.ui) + '</article>').join('');
  document.querySelector('[data-skills]').innerHTML = data.skills.map(([title, copy]) => '<article><h3>' + escapeHtml(title) + '</h3><p>' + escapeHtml(copy) + '</p></article>').join('');
  document.querySelector('[data-qualifications]').innerHTML = data.qualifications.map((item) => '<article class="qualification-entry"><h3>' + escapeHtml(item.title) + '</h3><p class="qualification-meta">' + escapeHtml(item.meta) + '</p><p>' + escapeHtml(item.copy) + '</p></article>').join('');
  updateCvLinks(); filterProjects(); renderCaseStudy(); save('portfolio-language', language);
}

function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  document.querySelector('[data-theme-toggle]').setAttribute('aria-pressed', String(next === 'dark'));
  save('portfolio-theme', next);
}

document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
document.querySelector('[data-theme-toggle]').addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => { activeFilter = button.dataset.filter; filterProjects(); }));
document.querySelectorAll('[name="cv-mode"]').forEach((input) => input.addEventListener('change', () => { cvMode = input.value; updateCvLinks(); }));
document.querySelector('[data-projects]').addEventListener('click', (event) => {
  const button = event.target.closest('[data-project-open]');
  if (!button) return;
  openProject = button.dataset.projectOpen; renderCaseStudy(); dialog.showModal();
});
document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { const bounds = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close(); });
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
applyLanguage(stored('portfolio-language') || 'en');
applyTheme(stored('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
updateHeader();
