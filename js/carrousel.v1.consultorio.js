const consultorioCarrousel = document.querySelector('.carrousel-imagenes-consultorio');
const consultorioSlides = consultorioCarrousel.querySelectorAll('.carrousel-slide');
const consultorioDots = consultorioCarrousel.querySelectorAll('.carrousel-dot');
let consultorioCurrent = 0;
let consultorioInterval = null;

function showConsultorioSlide(idx) {
  consultorioSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
  consultorioDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  consultorioCurrent = idx;
}

function nextConsultorioSlide() {
  let next = (consultorioCurrent + 1) % consultorioSlides.length;
  showConsultorioSlide(next);
}

function startConsultorioAuto() {
  consultorioInterval = setInterval(nextConsultorioSlide, 3500);
}

function stopConsultorioAuto() {
  clearInterval(consultorioInterval);
}

consultorioDots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopConsultorioAuto();
    showConsultorioSlide(Number(dot.dataset.slide));
    startConsultorioAuto();
  });
});

showConsultorioSlide(0);
startConsultorioAuto();

consultorioCarrousel.addEventListener('mouseenter', stopConsultorioAuto);
consultorioCarrousel.addEventListener('mouseleave', startConsultorioAuto);