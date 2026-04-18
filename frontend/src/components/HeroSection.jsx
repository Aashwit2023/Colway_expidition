import React, { useState, useEffect } from 'react';

const HeroSection = ({ images, title, subtitle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageList = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (imageList.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow - Sticky Aspect */}
      {imageList.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out translate-z-0 ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url(${img})`,
            transitionProperty: 'opacity, transform'
          }}
        />
      ))}

      {/* High-Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black/80" />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-in-out hover:scale-105">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-3xl text-gray-100 font-light leading-relaxed drop-shadow-lg max-w-3xl mx-auto opacity-90">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Animated Scroll Indicator - More prominent */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold">Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-pill" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll-pill {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scroll-pill {
          animation: scroll-pill 2s ease-in-out infinite;
        }
        .translate-z-0 {
          transform: translateZ(0); /* Hardware acceleration */
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
