// Simple smooth scroll is handled by CSS, but we'll add section reveal
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click', e=>{
    // default smooth is fine; ensure clicks close mobile nav if you add one later
  });
});

// Intersection Observer for reveal animation
const sections = document.querySelectorAll('.section');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting) en.target.classList.add('visible');
  });
},{threshold: 0.12});
sections.forEach(s=>obs.observe(s));
