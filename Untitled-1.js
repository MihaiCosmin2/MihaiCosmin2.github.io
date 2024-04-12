
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.ad-image');
    var currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].style.display = 'none'; // Ascunde imaginea curentă
        currentSlide = (currentSlide + 1) % slides.length; // Calculează următoarea imagine
        slides[currentSlide].style.display = 'block'; // Arată următoarea imagine
    }

    setInterval(nextSlide, 10000); // Schimbă imaginea la fiecare 10 secunde
});

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
