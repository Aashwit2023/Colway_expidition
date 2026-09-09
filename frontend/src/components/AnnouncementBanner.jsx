import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Tag, 
  Mountain, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Compass,
  Flame
} from 'lucide-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Diverse announcements: Offers, Peak Treks, Group Discounts, Custom Expeditions, Safety & Cultural Tours
  const announcements = [
    {
      id: "offer-summit15",
      type: "offer",
      badge: "FLAT 15% OFF",
      badgeIcon: Tag,
      badgeStyle: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      title: "Early Bird Summit Season Deal",
      highlight: "Use Code: SUMMIT15",
      details: "Valid on all 2026 Himalayan Expeditions",
      bookLink: "/expeditions",
      btnText: "Claim 15% OFF",
      btnStyle: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]",
    },
    {
      id: "yunam-peak",
      type: "expedition",
      badge: "6,111m Peak",
      badgeIcon: Mountain,
      badgeStyle: "bg-orange-500/20 text-[#ff7a18] border-orange-500/40",
      title: "Mt. Yunam Summit Expedition (Lahaul)",
      highlight: "8 Slots Left",
      details: "Autumn 2026 Batch",
      bookLink: "/expeditions/yunam-peak/dates",
      btnText: "⚡ Book Yunam",
      btnStyle: "bg-[#ff7a18] hover:bg-orange-500 shadow-[0_0_12px_rgba(255,122,24,0.4)]",
    },
    {
      id: "group-deal",
      type: "deal",
      badge: "GROUP OFFER",
      badgeIcon: Users,
      badgeStyle: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      title: "Group Discount: Flat 20% OFF",
      highlight: "For 4+ Trekkers",
      details: "Applicable on all high-altitude trails",
      bookLink: "/trekking",
      btnText: "Explore Treks",
      btnStyle: "bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]",
    },
    {
      id: "friendship-peak",
      type: "expedition",
      badge: "5,289m Climb",
      badgeIcon: Flame,
      badgeStyle: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      title: "Friendship Peak Semi-Technical Snow Climb",
      highlight: "6 Slots Left",
      details: "Manali Region • Oct 2026",
      bookLink: "/expeditions/friendship-peak/dates",
      btnText: "⚡ Book Friendship",
      btnStyle: "bg-rose-600 hover:bg-rose-500 shadow-[0_0_12px_rgba(225,29,72,0.4)]",
    },
    {
      id: "custom-expeditions",
      type: "custom",
      badge: "CUSTOM EXPEDITIONS",
      badgeIcon: Sparkles,
      badgeStyle: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      title: "Private & Corporate Himalayan Expeditions",
      highlight: "Custom Itineraries",
      details: "Tailored routes & dedicated logistics team",
      bookLink: "/enquire",
      btnText: "Plan With Us",
      btnStyle: "bg-purple-600 hover:bg-purple-500 shadow-[0_0_12px_rgba(147,51,234,0.4)]",
    },
    {
      id: "village-homestays",
      type: "culture",
      badge: "VILLAGE IMMERSION",
      badgeIcon: Compass,
      badgeStyle: "bg-teal-500/20 text-teal-300 border-teal-500/40",
      title: "Authentic Himalayan Village Treks & Homestays",
      highlight: "Cultural Experience",
      details: "Live with local mountain communities",
      bookLink: "/villages",
      btnText: "View Villages",
      btnStyle: "bg-teal-600 hover:bg-teal-500 shadow-[0_0_12px_rgba(13,148,136,0.4)]",
    },
    {
      id: "safety-guarantee",
      type: "safety",
      badge: "CERTIFIED SAFETY",
      badgeIcon: ShieldCheck,
      badgeStyle: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      title: "100% IMF Certified Leaders & Medical Gear",
      highlight: "Oxygen & Comms",
      details: "Highest altitude safety standard in India",
      bookLink: "/about",
      btnText: "Our Safety Standards",
      btnStyle: "bg-blue-600 hover:bg-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.4)]",
    }
  ];

  // Auto-cycle for mobile view (not running marquee, but stable smooth step transition)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPaused, announcements.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;
      if (diff > 40) {
        // swipe left -> next
        handleNext(e);
      } else if (diff < -40) {
        // swipe right -> prev
        handlePrev(e);
      }
      touchStartX.current = null;
    }
    // resume auto-cycle after interaction
    setTimeout(() => setIsPaused(false), 2500);
  };

  if (!isVisible) return null;

  const currentItem = announcements[currentIndex];
  const CurrentBadgeIcon = currentItem.badgeIcon || Tag;

  return (
    <aside
      aria-label="Announcement Banner"
      className="sticky-announcement-banner w-full bg-gradient-to-r from-[#0c0d10] via-[#142338] to-[#0c0d10] text-white text-xs overflow-hidden backdrop-blur-md transition-all duration-300 border-b border-orange-500/25 relative select-none"
    >
      {/* Ambient Top/Bottom Light and Glow Effects */}
      <div className="orange-sweep-light" />
      <div className="orange-shadow-beam" />

      {/* ========================================================================= */}
      {/* 📱 MOBILE VIEW (Android / iPhone / Small screens): PROPER STATIONARY BANNER */}
      {/* (NO fast running marquee - instead shows clean, readable, swipeable banner) */}
      {/* ========================================================================= */}
      <div 
        className="flex md:hidden items-center justify-between px-3 pt-2.5 pb-2 min-h-[52px] w-full relative z-20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-1 text-gray-400 hover:text-white active:scale-90 transition-transform shrink-0 rounded-full hover:bg-white/10"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Central Stable Announcement Display */}
        <div className="flex-1 mx-1.5 min-w-0 overflow-hidden flex flex-col items-center text-center justify-center pt-0.5">
          <div className="flex items-center gap-1.5 flex-wrap justify-center mb-1">
            {/* Category Badge */}
            <span className={`inline-flex items-center gap-1 font-mono uppercase tracking-wider text-[9px] font-bold border px-1.5 py-0.5 rounded-full ${currentItem.badgeStyle}`}>
              <CurrentBadgeIcon size={10} className="shrink-0" />
              <span>{currentItem.badge}</span>
            </span>

            {/* Highlight Tag (e.g. discount code or slots left) */}
            {currentItem.highlight && (
              <span className="text-[10px] font-mono text-amber-300 font-bold bg-black/40 px-1.5 py-0.2 rounded border border-amber-500/30">
                {currentItem.highlight}
              </span>
            )}
          </div>

          {/* Main Title & Action Button Row */}
          <div className="flex items-center justify-center gap-2 max-w-full my-0.5">
            <span className="text-[11px] font-semibold text-gray-100 truncate max-w-[170px] sm:max-w-[240px]">
              {currentItem.title}
            </span>

            <Link
              to={currentItem.bookLink}
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${currentItem.btnStyle} active:scale-95 text-white font-bold text-[10px] whitespace-nowrap shrink-0 transition-transform`}
            >
              <span>{currentItem.btnText}</span>
              <ArrowRight size={10} />
            </Link>
          </div>

          {/* Mini Pagination Indicators */}
          <div className="flex items-center gap-1 mt-1.5">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-3.5 bg-orange-400' : 'w-1 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Arrow & Close Button */}
        <div className="flex items-center gap-0.5 shrink-0">
          <button
            onClick={handleNext}
            aria-label="Next announcement"
            className="p-1 text-gray-400 hover:text-white active:scale-90 transition-transform rounded-full hover:bg-white/10"
          >
            <ChevronRight size={16} />
          </button>

          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close banner"
            title="Dismiss announcement"
            className="p-1 text-gray-400 hover:text-white hover:bg-red-500/80 active:scale-90 rounded-full transition-all border border-white/10 ml-0.5"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 💻 DESKTOP VIEW (Tablet & Desktop screens): FULL RICH TICKER / MARQUEE    */}
      {/* ========================================================================= */}
      <div className="hidden md:flex items-center h-[46px] w-full">
        {/* 1. Left Fixed Badge */}
        <div className="relative z-20 h-full flex items-center pl-4 lg:pl-6 pr-3 bg-gradient-to-r from-[#0c0d10] via-[#0c0d10]/95 to-transparent shrink-0">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a18] opacity-85"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff7a18]"></span>
            </span>

            <span className="font-mono uppercase tracking-[0.14em] text-[#ff7a18] font-bold text-[11px] bg-orange-950/80 border border-orange-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(255,122,24,0.3)] whitespace-nowrap">
              🔥 SPECIAL UPDATES & OFFERS
            </span>
          </div>
        </div>

        {/* 2. Middle Smooth Continuous Rolling Marquee */}
        <div className="overflow-hidden flex-1 relative h-full flex items-center">
          <div className="animate-horizontal-roll flex items-center gap-10 whitespace-nowrap pl-4">
            
            {/* First loop of diverse items */}
            {announcements.map((item, idx) => {
              const IconComp = item.badgeIcon || Tag;
              return (
                <div key={`desk1-${item.id || idx}`} className="inline-flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1 font-mono uppercase tracking-wider text-[10px] font-bold border px-2 py-0.5 rounded-full ${item.badgeStyle}`}>
                    <IconComp size={11} />
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-gray-200 text-xs font-medium">
                    <strong className="text-white font-semibold">{item.title}</strong>
                    {item.highlight && (
                      <span className="text-amber-300 ml-1.5 font-mono text-[11px] font-semibold bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                        {item.highlight}
                      </span>
                    )}
                    {item.details && (
                      <span className="text-gray-400 ml-1.5 text-[11px] font-normal">({item.details})</span>
                    )}
                  </span>
                  
                  <Link
                    to={item.bookLink}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${item.btnStyle} active:scale-95 text-white font-bold text-[11px] transition-all hover:scale-105 shadow-sm whitespace-nowrap`}
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight size={12} />
                  </Link>
                  <span className="text-orange-500/50 text-base font-bold ml-2">•</span>
                </div>
              );
            })}

            {/* Duplicate loop for seamless infinite roll */}
            {announcements.map((item, idx) => {
              const IconComp = item.badgeIcon || Tag;
              return (
                <div key={`desk2-${item.id || idx}`} className="inline-flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1 font-mono uppercase tracking-wider text-[10px] font-bold border px-2 py-0.5 rounded-full ${item.badgeStyle}`}>
                    <IconComp size={11} />
                    <span>{item.badge}</span>
                  </span>

                  <span className="text-gray-200 text-xs font-medium">
                    <strong className="text-white font-semibold">{item.title}</strong>
                    {item.highlight && (
                      <span className="text-amber-300 ml-1.5 font-mono text-[11px] font-semibold bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                        {item.highlight}
                      </span>
                    )}
                    {item.details && (
                      <span className="text-gray-400 ml-1.5 text-[11px] font-normal">({item.details})</span>
                    )}
                  </span>
                  
                  <Link
                    to={item.bookLink}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${item.btnStyle} active:scale-95 text-white font-bold text-[11px] transition-all hover:scale-105 shadow-sm whitespace-nowrap`}
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight size={12} />
                  </Link>
                  <span className="text-orange-500/50 text-base font-bold ml-2">•</span>
                </div>
              );
            })}

          </div>
        </div>

        {/* 3. Right Pinned Close Symbol Button */}
        <div className="relative z-20 h-full flex items-center pr-4 lg:pr-5 pl-4 bg-gradient-to-l from-[#0c0d10] via-[#0c0d10]/95 to-transparent shrink-0">
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 rounded-full text-gray-300 hover:text-white bg-white/10 hover:bg-red-500/80 active:scale-90 transition-all cursor-pointer border border-white/15 shadow-sm group"
            aria-label="Close announcement banner"
            title="Close announcement"
          >
            <X size={15} className="group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </aside>
  );
}
