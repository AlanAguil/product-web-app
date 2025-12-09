const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carousel.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function (event) {
        event.preventDefault();
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'flex';
        } else {
            searchBar.style.display = 'none';
        }
    });
});

function changeImage(element) {
    document.getElementById('currentImage').src = element.src;
}

document.getElementById('login-button').addEventListener('click', function() {
    window.location.href = 'inicioSesion.html';
});



