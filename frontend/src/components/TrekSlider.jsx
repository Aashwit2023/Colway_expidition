import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <section className="p-0 bg-gray-100 w-full m-0">
      <div className="relative w-full m-0 overflow-hidden">
        <button className="absolute top-1/2 -translate-y-1/2 bg-black/38 text-white border-none w-11 h-11 rounded-full cursor-pointer text-xl z-10 transition-all duration-300 hover:bg-black/65 hover:scale-105 left-2.5" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="overflow-hidden rounded-lg max-h-[590px] bg-amber-300" ref={sliderRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {treks.map((trek, index) => (
              <div key={index} className="min-w-full relative rounded-lg overflow-hidden shadow-sm">
                <img src={trek.image} alt={trek.title} className="w-full h-[585px] object-cover" />
                <div className="absolute inset-0 right-auto w-[clamp(320px,42%,460px)] bg-[rgba(172,179,194,0.56)] text-white p-12 backdrop-blur-[0.1px] shadow-[6px_0_20px_rgba(0,0,0,0.06)] flex flex-col justify-center">
                  <h3 className="text-4xl mb-4 font-extrabold leading-tight">{trek.title}</h3>
                  <p className="text-lg mb-3 opacity-90">{trek.location}</p>
                  <p className="text-lg leading-relaxed mb-13 max-w-full opacity-92">{trek.description}</p>
                  <div className="flex justify-between gap-3 mb-5">
                    <span className="bg-white/17 px-4 py-1 rounded-full text-sm">{trek.duration}</span>
                    <span className="bg-white/17 px-4 py-1 rounded-full text-sm">{trek.grade}</span>
                  </div>
                  <Link to={trek.link} className="mt-10 inline-flex items-center justify-center text-white px-4 py-3 no-underline rounded-full border-4 border-blue-700 font-black text-lg transition-all duration-300 hover:bg-blue-700">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="absolute top-1/2 -translate-y-1/2 bg-black/38 text-white border-none w-11 h-11 rounded-full cursor-pointer text-xl z-10 transition-all duration-300 hover:bg-black/65 hover:scale-105 right-2.5" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {treks.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors duration-300 border-none ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}