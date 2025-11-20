// Smooth scrolling is already handled by CSS (scroll-behavior: smooth).
// This keeps things lightweight and clean.

// SECTION REVEAL ON SCROLL
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Reveal once only
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => observer.observe(section));
