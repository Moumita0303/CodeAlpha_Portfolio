// Small interactive helpers

// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(href.length === 1) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if(!el) return;
    el.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile nav after click
    if(nav.classList.contains('open')) nav.classList.remove('open');
  });
});
