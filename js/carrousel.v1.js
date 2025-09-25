// Carrusel automático con indicadores y selección manual
const carrousel = document.getElementById('carrousel');
const slides = carrousel.querySelectorAll('.carrousel-slide');
const dots = carrousel.querySelectorAll('.carrousel-dot');
let current = 0;
let interval = null;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  current = idx;
}

function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

function startAuto() {
  interval = setInterval(nextSlide, 5000);
}

function stopAuto() {
  clearInterval(interval);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopAuto();
    showSlide(Number(dot.dataset.slide));
    startAuto();
  });
});

// Iniciar
showSlide(0);
startAuto();

// Opcional: pausar al pasar el mouse
carrousel.addEventListener('mouseenter', stopAuto);
carrousel.addEventListener('mouseleave', startAuto);
