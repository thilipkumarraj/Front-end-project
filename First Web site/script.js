let currentslide =0;
const dots = document.querySelectorAll('.slider-dot');

function goToSlide(index) {
    showSlide(index);
}

setInterval(() => changeSlide(1), 5000);