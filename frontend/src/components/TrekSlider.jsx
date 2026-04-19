import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TrekSlider.css';

export default function TrekSlider({ treks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === treks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? treks.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === treks.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [treks.length]);

  return (
    <section className="trek-slider">
      <div className="slider-container">
        <button className="slider-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slider-wrapper" ref={sliderRef}>
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {treks.map((trek, index) => (
              <div key={index} className="trek-card">
                <img src={trek.image} alt={trek.title} />
                <div className="card-content">
                  <h3>{trek.title}</h3>
                  <p className="location">{trek.location}</p>
                  <p className="slider-description">{trek.description}</p>
                  <div className="details">
                    <span className="duration">{trek.duration}</span>
                    <span className="grade">{trek.grade}</span>
                  </div>
                  <Link to={trek.link} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="slider-dots">
        {treks.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}