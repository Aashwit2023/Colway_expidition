import { useState, useEffect } from 'react';
import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';
import trekking3 from '../assets/trekking3.jpg';

const trekImages = [trekking1, trekking2, trekking3];

export default function Trekking() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trekImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trekking-container">
      <div className="slideshow-wrapper">
        {trekImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="slideshow-overlay" />
      </div>
      
      <div className="trekking-content" style={{ marginTop: '100px' }}>
        <h2>Trekking</h2>
        <p>Embark on thrilling trekking adventures in the mountains.</p>
        <p>Experience the beauty of nature with our guided treks.</p>
      </div>

      <style>{`
        .trekking-container {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .slideshow-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .slideshow-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }

        .trekking-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 40px 20px;
          color: white;
          z-index: 1;
          text-align: center;
          padding: 40px 20px;
          color: white;
          font-family: Arial, sans-serif;
        }

        .trekking-content h2 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .trekking-content p {
          font-size: 1.2rem;
          margin: 10px 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
