window.addEventListener('load', () => {
  const masonry = document.querySelector('.masonry');
  const rowHeight = parseFloat(window.getComputedStyle(masonry).getPropertyValue('grid-auto-rows'));
  const rowGap = parseFloat(window.getComputedStyle(masonry).getPropertyValue('gap'));

  document.querySelectorAll('.masonry-item').forEach(item => {
    const img = item.querySelector('img');
    const h = img.getBoundingClientRect().height;

    const span = Math.ceil((h + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${span}`;
  });
});
