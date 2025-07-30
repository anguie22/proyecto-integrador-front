function agregarAlCarrito(producto) {
    alert(`Has agregado "${producto}" al carrito 🛒`);
  }
  
  let index = 0;

function moverCarrusel(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  index += n;

  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}
