import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, TrendingUp, Info, CheckCircle2 } from 'lucide-react';

const TrekModal = ({ trek, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(trek?.image);
  const [showSticky, setShowSticky] = useState(false);
  const scrollRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowSticky(scrollRef.current.scrollTop > 400);
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', handleScroll);
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset scroll on open
      if (currentScrollRef) currentScrollRef.scrollTop = 0;
      setShowSticky(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      }
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (trek) setActiveImage(trek.image);
  }, [trek]);

  if (!isOpen || !trek) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 -mb-20 -mt-5">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content container */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500 scale-100 opacity-100">
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="overflow-y-auto w-full scroll-smooth"
        >
          {/* Top Section: Image Gallery */}
          <div className="w-full h-[50vh] md:h-[65vh] relative bg-gray-100">
            <img 
              src={activeImage} 
              alt={trek.title} 
              className="w-full h-full object-cover transition-all duration-700"
            />
            {/* Thumbnails Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 w-full max-w-xl justify-center overflow-x-auto pb-2 scrollbar-hide">
              {(trek.images || [trek.image]).map((img, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(img);
                  }}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-orange-500 scale-110 shadow-lg' : 'border-white/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>

            {/* Float Close Button - Top Right of Image */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content Section below Image */}
          <div className="p-8 md:p-16 bg-white pb-32">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-4">
                  <MapPin size={14} />
                  {trek.location || 'Himalayas'}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter italic leading-none">
                    {trek.title}
                  </h2>
                  {/* Inline Action Option - Directly after Title */}
                  <div className="flex flex-col items-start md:items-end">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Starting from</p>
                    <p className="text-2xl font-black text-gray-900 mb-2">{trek.price}</p>
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-black text-xs tracking-widest shadow-lg shadow-orange-200 transition-all transform active:scale-95 uppercase">
                      Book Now
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-600">
                    <Calendar size={18} className="text-blue-500" />
                    {trek.days}
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 uppercase">
                    <TrendingUp size={18} className="text-orange-500" />
                    {trek.difficulty}
                  </div>
                </div>

                <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                  {trek.fullDescription || trek.description}
                </p>
              </div>

              {/* highlights */}
              {trek.highlights && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight">Experience Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trek.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-blue-50/30 rounded-2xl border border-blue-100/50 text-gray-700 font-medium">
                        <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions */}
              {trek.inclusions && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                    {trek.inclusions.map((inc, i) => (
                      <div key={i} className="text-base text-gray-500 flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 shrink-0" />
                        {inc}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sticky Global Action Bar - Appears on Scroll */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
          <div className="bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex items-center justify-between shadow-2xl">
            <div className="pl-4">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-0.5">{trek.title}</p>
              <p className="text-white text-xl font-black tracking-tight">{trek.price}</p>
            </div>
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xs tracking-widest shadow-xl shadow-orange-500/20 transition-all transform active:scale-95 uppercase">
              Book This Trek
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekModal;
