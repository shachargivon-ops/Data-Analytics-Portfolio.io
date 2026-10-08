/* Small progressive enhancement; all content and project links work without JavaScript. */
document.documentElement.classList.add('js');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
const nav = document.querySelector('#nav');
const navItems = [...links.querySelectorAll('a[href^="#"]')];
const mobile = window.matchMedia('(max-width: 760px)');
toggle.hidden = false;
function setMenu(open, restoreFocus = false) {
  toggle.setAttribute('aria-expanded', String(open));
  links.dataset.open = String(open);
  nav.dataset.open = String(open);
  toggle.firstChild.textContent = open ? 'Close ' : 'Menu ';
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
document.addEventListener('click', event => {
  if (mobile.matches && !event.target.closest('#nav, .nav-toggle')) setMenu(false);
});
mobile.addEventListener('change', () => setMenu(false));
function activate(id) {
  navItems.forEach(item => {
    if (item.hash === '#' + id) item.setAttribute('aria-current', 'location');
    else item.removeAttribute('aria-current');
  });
}
navItems.forEach(item => item.addEventListener('click', () => activate(item.hash.slice(1))));
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const visibility = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visibility.set(entry.target.id, entry.isIntersecting));
    const current = sections.find(section => visibility.get(section.id));
    if (current) activate(current.id);
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
