// Mobile - touch
comparison.addEventListener('touchstart', (e) => {
  isDragging = true;
  moveSlider(e.touches[0]);
  e.preventDefault(); // evita el scroll al tocar
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  moveSlider(e.touches[0]);
  e.preventDefault(); // evita el scroll mientras arrastras
});



