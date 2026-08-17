import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, TrendingUp, Info, CheckCircle2, Users, Mountain, Home, Check } from 'lucide-react';

const ExpeditionModal = ({ trek, isOpen, onClose, onViewDates }) => {
  const [activeImage, setActiveImage] = useState(trek?.image);
  const [showSticky, setShowSticky] = useState(false);
  const scrollRef = React.useRef(null);
  
  const handleBookNow = () => {
    if (onViewDates) {
      onViewDates(trek);
    }
  };

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

  const iconMap = {
    difficulty: TrendingUp,
    duration: Calendar,
    altitude: Mountain,
    users: Users,
    location: MapPin,
    tent: Home,
    challenge: Info,
    distance: TrendingUp,
    season: Calendar,
    trail: Info,
    rail: Info,
    country: MapPin,
  };

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4">
      {/* Dark Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Glassmorphic Modal Window - Light Theme */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-white/40 w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500 scale-100 opacity-100 text-gray-800">

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="overflow-y-auto w-full scroll-smooth"
        >
          {/* Top Section: Image Gallery */}
          <div className="w-full h-[50vh] md:h-[60vh] relative bg-gray-100">
            <img
              src={activeImage}
              alt={trek.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            {/* Thumbnails Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-4 w-full max-w-xl justify-center overflow-x-auto pb-2 scrollbar-hide z-10">
              {(trek.images || [trek.image]).map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(img);
                  }}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img 
                      ? 'border-orange-500 scale-110 shadow-lg' 
                      : 'border-white/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>

            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 bg-black/20 hover:bg-black/45 backdrop-blur-md rounded-full text-white transition-all hover:rotate-90"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-14 bg-white/40 pb-32">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <div className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest mb-4">
                  <MapPin size={14} />
                  {trek.location || 'Himalayas'}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter italic leading-none">
                      {trek.title}
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed mt-5 text-lg">
                      {trek.fullDescription || trek.description}
                    </p>
                  </div>

                  {/* Pricing / Booking Card */}
                  <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 w-full max-w-xs shrink-0 self-start">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                      Starting From
                    </p>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
                      {trek.price}
                    </h2>

                    <div className="my-4 border-t border-gray-150"></div>

                    {/* Quick Inclusions */}
                    {trek.sidebarInclusions && trek.sidebarInclusions.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Includes
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5">
                          {trek.sidebarInclusions.map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Optional Add-ons */}
                    {trek.addOns && trek.addOns.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Optional Add-ons
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5">
                          {trek.addOns.map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button 
                      onClick={handleBookNow} 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all shadow-md uppercase tracking-wider text-xs"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Expedition Spec Grid */}
                {trek.info && (
                  <div className="mb-12">
                    <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight border-b border-gray-100 pb-2">
                      Climb Details
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {trek.info.map((item, i) => {
                        const Icon = iconMap[item.icon] || Info;
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl"
                          >
                            <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                              <Icon size={18} className="text-orange-500" />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                {item.label}
                              </p>
                              <p className="text-sm font-semibold text-gray-800 mt-0.5 leading-snug">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Itinerary Section */}
              {trek.itinerary && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 italic tracking-tight border-b border-gray-100 pb-2">
                    Climb Itinerary
                  </h4>
                  <div className="space-y-6 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-200">
                    {trek.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-5 relative group">
                        {/* Dot indicator */}
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 z-10">
                          {item.day}
                        </div>
                        {/* Details */}
                        <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all">
                          <h5 className="text-lg font-bold text-gray-800 mb-2">
                            {item.title}
                          </h5>
                          <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                            {Array.isArray(item.details) ? (
                              item.details.map((detail, i) => <li key={i}>{detail}</li>)
                            ) : (
                              <li>{item.details}</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {trek.highlights && (
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight border-b border-gray-100 pb-2">
                    Experience Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trek.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-gray-705 text-sm font-medium">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions */}
              {trek.inclusions && trek.inclusions.length > 0 && (
                <div className="mb-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-center text-gray-800 mb-5 uppercase tracking-wider border-b border-gray-100 pb-2">
                      What's Included
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trek.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-gray-700 text-xs sm:text-sm">
                          <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Exclusions */}
              {trek.nonincludions && trek.nonincludions.length > 0 && (
                <div className="mb-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-center text-gray-800 mb-5 uppercase tracking-wider border-b border-gray-100 pb-2">
                      What's Not Included
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trek.nonincludions.map((exc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-gray-750 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Sticky Global Action Bar */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 transition-all duration-500 transform ${
          showSticky ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
        }`}>
          <div className="bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex items-center justify-between shadow-2xl">
            <div className="pl-3">
              <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-0.5">{trek.title}</p>
              <p className="text-white text-lg font-black tracking-tight">{trek.price}</p>
            </div>
            <button 
              onClick={handleBookNow} 
              className="px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-xs tracking-wider shadow-lg shadow-orange-500/20 transition-all transform active:scale-95 uppercase"
            >
              Book Expedition
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExpeditionModal;
