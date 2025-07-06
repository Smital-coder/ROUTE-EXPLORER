let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 600}px)`;
}

prevButton.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;  // Loop back to the last image
    }
    updateSliderPosition();
});

nextButton.addEventListener('click', function () {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Loop back to the first image
    }
    updateSliderPosition();
});
