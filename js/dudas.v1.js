document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll('.pregunta-titulo');

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const respuesta = btn.nextElementSibling;
      const flecha = btn.querySelector('.flecha');

      // Cierra todas las respuestas y reinicia flechas
      document.querySelectorAll('.respuesta').forEach(r => {
        if (r !== respuesta) r.style.maxHeight = null;
      });
      document.querySelectorAll('.flecha').forEach(f => {
        if (f !== flecha) f.classList.remove('girar');
      });

      // Alterna la respuesta actual y flecha
      if (respuesta.style.maxHeight) {
        respuesta.style.maxHeight = null;
        flecha.classList.remove('girar');
      } else {
        respuesta.style.maxHeight = respuesta.scrollHeight + "px";
        flecha.classList.add('girar');
      }
    });
  });
});


