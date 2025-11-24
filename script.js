// Intersection Observer for fade-in effect (applies only if .section exists)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// JS to adjust the masonry layout based on image height
window.addEventListener('load', () => {
  const masonryItems = document.querySelectorAll('.masonry-item');
  masonryItems.forEach(item => {
    const img = item.querySelector('img');
    const imageHeight = img.naturalHeight; // Get the natural height of the image
    const rowHeight = 200; // Row height from CSS (should match grid-auto-rows)
    
    // Calculate how many rows this image should span
    const span = Math.ceil(imageHeight / rowHeight);
    item.style.gridRowEnd = `span ${span}`; // Apply the span to the image item
  });
});
