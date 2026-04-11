import { useState, useEffect } from 'react';

import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';
import trekking33 from '../assets/trekking33.jpg';

import Trekking_cards from './Trekking_cards/Trekking_cards';
import adventure from "../assets/adventure.jpg";
import culture from "../assets/culture.jpg";
import trekking from "../assets/trekking.jpg";
import baliPassCamp from "../assets/bali_pass.jpg";
import everest_base_camp from "../assets/everest_base_camp.jpg";
import frndship from "../assets/friendship_peak.jpg";




const trekImages = [trekking2,trekking1,  trekking33];

export default function Trekking() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trekImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const themes = [
                {
                  image: adventure,
                  days:"6 days",
                  difficulty:"moderate",
                  title: "Adventure",
                  description: "Thrilling expeditions for the bold explorer.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: culture,
                  days:"8 days",
                  difficulty:"moderate-difficult",
                  title: "Cultural Immersion",
                  description: "Dive deep into local traditions and heritage.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: trekking,
                  days:"9 days",
                  difficulty:"difficult",
                  title: "Trekking",
                  description: "Epic trails through the world's most stunning landscapes.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: baliPassCamp,
                  days:"7 days",
                  difficulty:"moderate-difficult",
                  title: "cmp_Adventure",
                  description: "Thrilling expeditions for the bold explorer.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: everest_base_camp,
                  days:"9 days",
                  difficulty:"difficult",
                  title: "everest_base_camp",
                  description: "Dive deep into local traditions and heritage.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: frndship,
                  days:"8 days",
                  difficulty:"moderate",
                  title: "Trekking",
                  description: "Epic trails through the world's most stunning landscapes.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: baliPassCamp,
                  days:"5 days",
                  difficulty:"moderate",
                  title: "cmp_Adventure",
                  description: "Thrilling expeditions for the bold explorer.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: everest_base_camp,
                  days:"6 days",
                  difficulty:"moderate",
                  title: "everest_base_camp",
                  description: "Dive deep into local traditions and heritage.",
                  // trekking_info:"/trekking_info1"
                },
                {
                  image: frndship,
                  days:"8 days",
                  difficulty:"moderate",
                  title: "Trekking",
                  description: "Epic trails through the world's most stunning landscapes.",
                  // trekking_info:"/trekking_info1"
                }
              ];
  

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
      
      <div className="trekking-content" style={{
         marginTop: '100px',
         marginLeft:'25px'
          }}>
        <h2>Trekking</h2>
        <hr style={{ width: '15%',height:'0.25rem',background:'orange'}}/>
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
          text-align: relative;
          padding: 30px 20px;
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
          margin: 8px 0;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      
      <Trekking_cards items={themes} heading="Choose the Trek" />
      
    </div>
  );
}
