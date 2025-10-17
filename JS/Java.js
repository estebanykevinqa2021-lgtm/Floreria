// ----- MENÚ HAMBURGUESA -----
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// ----- CARRUSEL AUTOMÁTICO -----
let index = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
  slides.forEach(img => img.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

showSlide(); // mostrar la primera
setInterval(showSlide, 3000); // cambia cada 3 segundos

// ----- FORMULARIO SIMULADO -----
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("¡Gracias por contactarnos! Te responderemos pronto 🌷");
  form.reset();
});
