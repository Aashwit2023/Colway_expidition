import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, TrendingUp, Info, CheckCircle2, Users, Mountain, Home } from 'lucide-react';

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

  const iconMap = {
    difficulty: TrendingUp,
    duration: Calendar,
    altitude: Mountain,
    users: Users,
    location: MapPin,
    tent: Home,
    challange: Info,
    distance: TrendingUp,
    season: Calendar,
    trail: Info,
    rail: Info,
    country: MapPin,
  };

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
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-orange-500 scale-110 shadow-lg' : 'border-white/50 opacity-70 hover:opacity-100'
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

                  <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-xs border border-gray-100">

                    {/* Price Header */}
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Starting From
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-1">
                      ₹16,750
                    </h2>

                    {/* Divider */}
                    <div className="my-3 border-t"></div>

                    {/* Inclusions */}
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Includes
                    </h4>

                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>+ ₹240 Trek Insurance</li>
                      <li>+ ₹3,000 Transport (to & from basecamp)</li>
                    </ul>

                    {/* Optional Add-ons */}
                    <h4 className="text-sm font-semibold text-gray-700 mt-4 mb-2">
                      Optional Add-ons
                    </h4>

                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>+ Tents</li>
                      <li>₹4,800 Backpack Offloading</li>
                    </ul>

                    {/* CTA Button */}
                    <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  {/* <div className="flex flex-col items-start md:items-end">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Starting from</p>
                    <p className="text-2xl font-black text-gray-900 mb-2">{trek.price}</p>
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-black text-xs tracking-widest shadow-lg shadow-orange-200 transition-all transform active:scale-95 uppercase">
                      Book Now
                    </button>
                  </div> */}
                </div>



                {trek.info && (
                  <div className="mb-12">
                    <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight">
                      Trek Details
                    </h4>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {trek.info.map((item, i) => {
                        const Icon = iconMap[item.icon];

                        return (
                          <div
                            key={i}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                          >
                            <div className="p-2 bg-orange-100 rounded-lg">
                              {Icon && <Icon size={20} className="text-orange-500" />}
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase">
                                {item.label}
                              </p>
                              <p className="text-sm font-semibold text-gray-800">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                  {trek.fullDescription || trek.description}
                </p>
              </div>

              {/* Trek Itinerary */}

              {trek.itinerary && (
                <div className="max-w-3xl mx-auto p-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-6 italic tracking-tight">
                    Trek Itinerary
                  </h4>
                  {trek.itinerary?.map((item, index) => (
                    <div key={index} className="flex gap-4 mb-8">

                      {/* Dot */}
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                          {item.day}
                        </div>

                        {index !== trek.itinerary.length - 1 && (
                          <div className="w-1 bg-blue-200 flex-1 mt-1"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <h2 className="text-xl font-bold mb-2">
                          {item.title}
                        </h2>

                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {item.details?.map((detail, i) => {
                            if (typeof detail === "string") {
                              return <li key={i}>{detail}</li>;
                            }

                            if (typeof detail === "object") {
                              return (
                                <li key={i}>
                                  <span className="font-semibold">{detail.label}</span>

                                  {detail.values && (
                                    <ul className="list-disc pl-5 text-gray-600 mt-1 space-y-1">
                                      {detail.values.map((v, idx) => (
                                        <li key={idx}>{v}</li>
                                      ))}
                                    </ul>
                                  )}

                                  {detail.value && (
                                    <span className="text-gray-600"> {detail.value}</span>
                                  )}
                                </li>
                              );
                            }

                            return null;
                          })}
                        </ul>
                      </div>

                    </div>
                  ))}



                  {/* Notes Section */}
                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-3">Note:</h3>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Keep a buffer day in your travel plan.</li>
                      <li>
                        If buffer day is not used in the travel then it can be used to
                        explore Shimla.
                      </li>
                      <li>
                        Distance, Altitude, and Trekking hours are approximate and rounded off.
                      </li>
                      <li>Keep the original and copy of ID proof handy.</li>
                      <li>
                        Come one day early if planning to come by flight.
                      </li>
                    </ul>
                  </div>
                </div>
              )}


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
              {trek.inclusions?.length > 0 && (
                <div className="mb-12">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full">

                    <h4 className="text-lg font-bold text-center mb-4 uppercase">
                      What's Included
                    </h4>

                    <div className="space-y-3">
                      {trek.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          {inc}
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              )}

              {/* Non-Inclusions */}
              {trek.nonincludions?.length > 0 && (
                <div className="mb-12">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full">

                    <h4 className="text-lg font-bold text-center mb-4 uppercase">
                      What's Not Included
                    </h4>

                    <div className="space-y-3">
                      {trek.nonincludions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          {inc}
                        </div>
                      ))}
                    </div>
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
    </div >
  );
};

export default TrekModal;
