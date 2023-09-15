const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex++;
    showSlide(currentIndex);
});

// Automatic rotation (every 5 seconds)
setInterval(() => {
    currentIndex++;
    showSlide(currentIndex);
}, 5000);

// Initial slide
showSlide(currentIndex);
