import React, { useEffect, useState } from 'react';
import { 
  X, Calendar, MapPin, TrendingUp, Info, CheckCircle2, Users, Mountain, Home, Check, 
  Backpack, Shirt, Footprints, ShieldAlert, Sparkles, AlertCircle, Award, Utensils,
  Maximize2, Minimize2
} from 'lucide-react';

const ExpeditionModal = ({ trek, isOpen, onClose, onViewDates }) => {
  const [activeImage, setActiveImage] = useState(trek?.image);
  const [showSticky, setShowSticky] = useState(false);
  const [activeTab, setActiveTab] = useState('inclusions');
  const [isFullscreen, setIsFullscreen] = useState(false);
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
      setActiveTab('inclusions');
      setIsFullscreen(false);
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
    if (trek) {
      setActiveImage(trek.image);
      setActiveTab('inclusions');
    }
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

  const getCategoryIcon = (iconName, category) => {
    if (iconName === 'Shirt' || category?.toLowerCase().includes('cloth')) return Shirt;
    if (iconName === 'Footprints' || category?.toLowerCase().includes('foot') || category?.toLowerCase().includes('gear')) return Footprints;
    if (iconName === 'ShieldAlert' || category?.toLowerCase().includes('medic') || category?.toLowerCase().includes('essential')) return ShieldAlert;
    if (category?.toLowerCase().includes('meal') || category?.toLowerCase().includes('food')) return Utensils;
    if (category?.toLowerCase().includes('safety') || category?.toLowerCase().includes('equip')) return Award;
    return Backpack;
  };

  const getInclusionsCount = () => {
    if (!trek.inclusions) return 0;
    if (Array.isArray(trek.inclusions) && trek.inclusions.length > 0) {
      if (typeof trek.inclusions[0] === 'object' && trek.inclusions[0].items) {
        return trek.inclusions.reduce((acc, cat) => acc + (cat.items?.length || 0), 0);
      }
      return trek.inclusions.length;
    }
    return 0;
  };

  const exclusionsList = trek.exclusions || trek.nonincludions || [];
  const carryList = trek.carryDetails || trek.gear || [];

  return (
    <div className={`fixed inset-0 z-[2500] flex items-center justify-center transition-all duration-300 ${
      isFullscreen ? 'p-0' : 'p-3 sm:p-5'
    }`}>
      {/* Dark Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Glassmorphic Modal Window - Light Theme */}
      <div className={`relative bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500 scale-100 opacity-100 text-gray-800 ${
        isFullscreen 
          ? 'w-full h-full max-w-none max-h-none rounded-none' 
          : 'w-full max-w-4xl max-h-[90vh] rounded-[2rem]'
      }`}>

        {/* Floating Action Controls - STUCK AT TOP RIGHT */}
        <div className="absolute top-5 right-5 z-[70] flex items-center gap-2.5">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
            className="p-3 bg-black/40 hover:bg-black/75 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center border border-white/20"
          >
            {isFullscreen ? <Minimize2 size={19} /> : <Maximize2 size={19} />}
          </button>
          <button
            onClick={onClose}
            title="Close Modal"
            className="p-3 bg-black/40 hover:bg-black/75 backdrop-blur-md rounded-full text-white transition-all hover:rotate-90 transform active:scale-95 shadow-xl border border-white/20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="overflow-y-auto w-full scroll-smooth"
        >
          {/* Top Section: Image Gallery */}
          <div className={`w-full relative bg-gray-100 transition-all duration-500 ${
            isFullscreen ? 'h-[55vh] md:h-[65vh]' : 'h-[50vh] md:h-[60vh]'
          }`}>
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
          </div>

          {/* Content Section */}
          <div className={`bg-white/40 pb-32 transition-all duration-500 ${
            isFullscreen ? 'p-8 md:p-16 max-w-5xl mx-auto' : 'p-8 md:p-14 max-w-3xl mx-auto'
          }`}>
            <div>
              <div className="mb-10">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-[0.16em] mb-3">
                  <MapPin size={14} />
                  {trek.location || 'Himalayas'}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                  <div className="flex-1">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-[1.1]">
                      {trek.title}
                    </h2>
                    <p className="text-gray-600 font-normal leading-relaxed mt-4 text-base sm:text-lg">
                      {trek.fullDescription || trek.description}
                    </p>
                  </div>

                  {/* Pricing / Booking Card */}
                  <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 w-full max-w-xs shrink-0 self-start">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 font-bold">
                      Starting From
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
                      {trek.price}
                    </h2>

                    <div className="my-4 border-t border-gray-100"></div>

                    {/* Quick Inclusions */}
                    {trek.sidebarInclusions && trek.sidebarInclusions.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                          Includes
                        </h4>
                        <ul className="text-xs text-gray-600 space-y-1.5 font-medium">
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
                        <ul className="text-xs text-gray-600 space-y-1.5 font-medium">
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
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-orange-500/20 uppercase tracking-wider text-xs"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Expedition Spec Grid */}
                {trek.info && (
                  <div className="mb-12">
                    <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-100">
                      <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                        Climb Overview
                      </h4>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Key Highlights</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {trek.info.map((item, i) => {
                        const Icon = iconMap[item.icon] || Info;
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-3.5 p-4 bg-gray-50/80 border border-gray-100 rounded-2xl hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all"
                          >
                            <div className="p-2 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                {item.label}
                              </p>
                              <p className="text-sm sm:text-[15px] font-bold text-gray-900 mt-0.5 leading-snug">
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
                  <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      Climb Itinerary
                    </h4>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {trek.days || `${trek.itinerary.length} Days`}
                    </span>
                  </div>
                  <div className="space-y-6 relative before:absolute before:left-[17px] before:top-4 before:bottom-4 before:w-0.5 before:bg-blue-200">
                    {trek.itinerary.map((item, index) => (
                      <div key={index} className="flex gap-5 relative group">
                        {/* Dot indicator */}
                        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-sm">
                          {item.day}
                        </div>
                        {/* Details */}
                        <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-gray-200 transition-all">
                          <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                            {item.title}
                          </h5>
                          <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1.5 leading-relaxed font-normal">
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
                  <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-100">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                      Experience Highlights
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trek.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-3.5 p-4 bg-blue-50/50 border border-blue-100/80 rounded-2xl text-gray-800 text-sm font-semibold leading-snug">
                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusion, Exclusion and Carry Details Section */}
              <div className="mb-12 bg-white/90 border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-gray-100 gap-2">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-2">
                      <Sparkles size={12} /> Expedition Essentials
                    </span>
                    <h4 className="text-2xl font-black text-gray-900 tracking-tight">
                      Inclusion, Exclusion & Carry
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 max-w-sm font-medium">
                    A quick reference for what is covered, what stays personal, and what you should pack for the climb.
                  </p>
                </div>

                {/* Tab Controls */}
                <div className="grid grid-cols-3 bg-gray-100/90 p-1.5 rounded-2xl mb-8 gap-1.5">
                  <button
                    onClick={() => setActiveTab('inclusions')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'inclusions'
                        ? 'bg-white text-gray-900 shadow-md shadow-black/5 scale-[1.02]'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <CheckCircle2 size={16} className={activeTab === 'inclusions' ? 'text-green-600 shrink-0' : 'text-gray-400 shrink-0'} />
                    <span className="truncate">Inclusions</span>
                    {getInclusionsCount() > 0 && (
                      <span className="hidden md:inline-block text-[10px] bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
                        {getInclusionsCount()}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('exclusions')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'exclusions'
                        ? 'bg-white text-gray-900 shadow-md shadow-black/5 scale-[1.02]'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <X size={16} className={activeTab === 'exclusions' ? 'text-red-500 shrink-0' : 'text-gray-400 shrink-0'} />
                    <span className="truncate">Exclusions</span>
                    {exclusionsList.length > 0 && (
                      <span className="hidden md:inline-block text-[10px] bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full">
                        {exclusionsList.length}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab('carry')}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      activeTab === 'carry'
                        ? 'bg-white text-gray-900 shadow-md shadow-black/5 scale-[1.02]'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    <Backpack size={16} className={activeTab === 'carry' ? 'text-orange-500 shrink-0' : 'text-gray-400 shrink-0'} />
                    <span className="truncate">Things to Carry</span>
                  </button>
                </div>

                {/* Tab 1: INCLUSIONS */}
                {activeTab === 'inclusions' && (
                  <div className="space-y-6 animate-fadeIn">
                    {Array.isArray(trek.inclusions) && typeof trek.inclusions[0] === 'object' && trek.inclusions[0].items ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {trek.inclusions.map((group, gIdx) => {
                          const GroupIcon = getCategoryIcon(null, group.category);
                          return (
                            <div key={gIdx} className="bg-gray-50/90 border border-gray-200/70 rounded-2xl p-5 hover:border-orange-200 hover:bg-white transition-all">
                              <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-gray-200/60">
                                <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg">
                                  <GroupIcon size={16} />
                                </div>
                                <h5 className="font-bold text-gray-900 text-sm tracking-tight">{group.category}</h5>
                                <span className="ml-auto text-[10px] font-bold text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                                  {group.items?.length || 0} items
                                </span>
                              </div>
                              <ul className="space-y-2.5">
                                {group.items?.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
                                    <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 bg-gray-50/90 border border-gray-200/70 rounded-2xl p-5">
                        {trek.inclusions?.map((inc, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
                            <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                            <span>{typeof inc === 'string' ? inc : inc.title || JSON.stringify(inc)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab 2: EXCLUSIONS */}
                {activeTab === 'exclusions' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="bg-red-50/40 border border-red-100 rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-red-100 text-red-800">
                        <AlertCircle size={16} className="text-red-500" />
                        <h5 className="font-bold text-sm tracking-tight">Personal Expenses & Non-Covered Items</h5>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {exclusionsList.map((exc, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></span>
                            <span>{exc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: THINGS TO CARRY */}
                {activeTab === 'carry' && (
                  <div className="space-y-6 animate-fadeIn">
                    {Array.isArray(carryList) && carryList.length > 0 && typeof carryList[0] === 'object' && carryList[0].items ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {carryList.map((cat, cIdx) => {
                          const IconComp = getCategoryIcon(cat.icon, cat.category);
                          return (
                            <div key={cIdx} className="bg-gray-50/90 border border-gray-200/70 rounded-2xl p-5 flex flex-col hover:border-orange-200 hover:bg-white transition-all">
                              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-gray-200/60">
                                <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                                  <IconComp size={16} />
                                </div>
                                <h5 className="font-bold text-gray-900 text-xs sm:text-sm tracking-tight leading-tight">{cat.category}</h5>
                              </div>
                              <ul className="space-y-2 flex-1">
                                {cat.items?.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-gray-50/90 border border-gray-200/70 rounded-2xl p-5">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {carryList.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5"></span>
                              <span>{typeof item === 'string' ? item : item.name || JSON.stringify(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Sticky Global Action Bar */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 transition-all duration-500 transform ${
          showSticky ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex items-center justify-between shadow-2xl">
            <div className="pl-3">
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-0.5">{trek.title}</p>
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
