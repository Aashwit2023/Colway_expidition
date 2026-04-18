import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

export default function Trekking_cards({ items, heading, onOpenModal }) {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-10 text-gray-900 tracking-tighter italic">
          {heading}
        </h2>
        
        {/* Balanced 3-Column Grid - Responsive Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((theme, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current[index] = el}
              className="bg-white rounded-[1.5rem] overflow-hidden shadow-lg border border-gray-100 opacity-0 translate-y-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group hover:-translate-y-2 hover:shadow-xl flex flex-col h-full cursor-pointer"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-56 overflow-hidden shrink-0 border-b-2 border-yellow-400/10">
                <img 
                  src={theme.image} 
                  alt={theme.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-800 shadow-sm border border-gray-100">
                    {theme.days}
                  </span>
                  <span className="bg-blue-600/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
                    {theme.difficulty}
                  </span>
                </div>
              </div>

              {/* Content Section - Compact Padding */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors tracking-tight">
                  {theme.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {theme.description}
                </p>

                <div className="mt-auto flex gap-3">
                  {theme.hasModal ? (
                    <button 
                      onClick={() => onOpenModal(theme)}
                      className="flex-1 py-3 bg-[#ff7a18] text-white rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#e67225] transition-all transform active:scale-95 shadow-md shadow-orange-200"
                    >
                      TREK INFO
                    </button>
                  ) : (
                    <Link to={theme.trekking_info || '#'} className="flex-1">
                      <button className="w-full py-3 bg-[#ff7a18] text-white rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#e67225] transition-all transform active:scale-95 shadow-md shadow-orange-200">
                        TREK INFO
                      </button>
                    </Link>
                  )}
                  <button className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-bold text-[10px] tracking-widest hover:bg-teal-700 transition-all transform active:scale-95 shadow-md shadow-teal-100">
                    VIEW DATES
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
