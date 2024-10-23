// Selecciona todos los encabezados del acordeón
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Añade un event listener a cada encabezado
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Alterna entre mostrar y ocultar el contenido
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
