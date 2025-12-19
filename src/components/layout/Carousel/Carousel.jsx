import React from 'react';
import './carousel.css';
import { useCarousel } from './useCarousel';

const Carousel = ({ images }) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  } = useCarousel(images);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div 
        className="carousel-slides" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
