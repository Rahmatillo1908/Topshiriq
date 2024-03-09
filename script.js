const carousel = document.querySelector('.header');
const carouselInner = carousel.querySelector('.carousel');

let currentIndex = 0;
const totalSlides = carouselInner.children.length;
const slideWidth = carousel.clientWidth;

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentIndex = index;
    const offset = -currentIndex * slideWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}

function goToPrevSlide() {
    goToSlide(currentIndex - 1);
}

function goToNextSlide() {
    goToSlide(currentIndex + 1);
}

carousel.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('fa-arrow-left')) {
        goToPrevSlide();
    } else if (target.classList.contains('fa-arrow-right')) {
        goToNextSlide();
    }
});