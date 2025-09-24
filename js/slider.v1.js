const comparison = document.getElementById('comparison');
const after = comparison.querySelector('.after');
const slider = document.getElementById('slider');

let isDragging = false;

// PC - click
comparison.addEventListener('mousedown', (e) => {
  isDragging = true;
  moveSlider(e);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  moveSlider(e);
});

// Mobile - touch
comparison.addEventListener('touchstart', (e) => {
  isDragging = true;
  moveSlider(e.touches[0]);
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  moveSlider(e.touches[0]);
});

// Función que calcula el % del slider
function moveSlider(e) {
  const rect = comparison.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let percent = (x / rect.width) * 100;

  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;

  after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  slider.style.left = `${percent}%`;
}

