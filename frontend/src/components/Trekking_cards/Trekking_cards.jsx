import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { createPortal } from 'react-dom';
import ParticipantDetailsForm from '../ParticipantDetailsForm';
import { useAuth } from '../../context/AuthContext';

function Trekking_cards({ items, heading, onOpenModal }, ref) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { pathname } = useLocation();
  const isDatesPath = pathname.endsWith('/dates');
  const { user } = useAuth();
  const isLoggedIn = () => Boolean(user);

  const beginBooking = (dateVal) => {
    const dateStr = typeof dateVal === 'object' ? dateVal.date : dateVal;
    const targetSlug = selectedDates?.slug || slug || '';
    const bookingState = {
      trek: selectedDates?.title || 'Booked Trek',
      date: dateStr,
      count: 1,
      participants: [{ name: '', age: '' }],
    };

    const targetUrl = `/trekking/${targetSlug}/participants-details`;

    if (isLoggedIn()) {
      navigate(targetUrl, { state: { bookingState } });
      return;
    }

    navigate('/login', { state: { from: targetUrl, bookingState } });
  };
  const cardsRef = useRef([]);
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [expandedMonths, setExpandedMonths] = useState([]);

  useEffect(() => {
    if (selectedDates) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDates]);

  // Synchronize URL slug and /dates path with the dates modal open/close state
  useEffect(() => {
    if (slug && isDatesPath) {
      const theme = items.find(item => item.slug === slug);
      if (theme) {
        const datesObj = theme.dates || {};
        const months = Object.keys(datesObj);
        setSelectedDates({ ...theme, dates: datesObj });
        setSelectedMonth(months[0] || null);
        setExpandedMonths(months.slice(0, 1));
        return;
      }
    }
    setSelectedDates(null);
  }, [slug, isDatesPath, items]);

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

  const openViewDates = (theme) => {
    navigate(`/trekking/${theme.slug}/dates`);
  };

  useImperativeHandle(ref, () => ({ openViewDates }));



  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          {heading}
        </div>

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
                  <button
                    onClick={() => openViewDates(theme)}
                    className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-bold text-[10px] tracking-widest hover:bg-teal-700 transition-all transform active:scale-95 shadow-md shadow-teal-100"
                  >
                    VIEW DATES
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Global Dates Modal (renders once for selected trek) */}
        {selectedDates && createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Backdrop Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => navigate('/trekking')}
            />

            <div className="relative w-full max-w-md mx-4 md:mx-0 bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn z-10">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Fixed Departures
                </h2>

                <button
                  onClick={() => navigate('/trekking')}
                  aria-label="Close departures"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[80vh] overflow-y-auto p-6 space-y-6">

                {/* Trek title */}
                {selectedDates.title && (
                  <div className="px-2">
                    <div className="text-lg font-semibold text-gray-800 mb-1">{selectedDates.title}</div>
                    {selectedDates.location && <div className="text-sm text-gray-500">{selectedDates.location}</div>}
                  </div>
                )}

                {/* Collapsible months list */}
                {Object.keys(selectedDates.dates).length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 px-4 text-center bg-gray-50 rounded-2xl border border-gray-200 mt-4">
                    <div className="w-16 h-16 bg-[#ff7a18]/10 text-[#ff7a18] rounded-full flex items-center justify-center mb-4 text-3xl">
                      📅
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Dates Coming Soon!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">We are finalizing the schedule for this adventure. Please check back later or contact us for inquiries.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(selectedDates.dates).map(([month, dates], i) => {
                      const isExpanded = expandedMonths.includes(month);
                      return (
                        <div key={i} className="">
                          <button
                            onClick={() => {
                              setExpandedMonths((prev) => (
                                prev.includes(month) ? [] : [month]
                              ));
                              setSelectedMonth(month);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl mb-2 ${selectedMonth === month ? 'bg-[#ff7a18] text-white' : 'bg-gray-100 text-gray-800'} font-bold text-lg`}
                          >
                            <span className="text-left">{month}</span>
                            <span className="text-xl">{isExpanded ? '▾' : '▸'}</span>
                          </button>

                          {isExpanded && (
                            <div className="space-y-3">
                              {dates.map((date, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-row items-center justify-between gap-2.5 border border-gray-200 rounded-2xl px-3 py-3 hover:shadow-md transition"
                                >
                                  <div className="flex-1 min-w-0">
                                    <div className="font-bold text-gray-800 text-[13px] sm:text-sm truncate">
                                      {typeof date === 'object' ? date.date : date}
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5">
                                      Seats: {typeof date === 'object' ? date.seats : 15}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      onClick={() => beginBooking(date)}
                                      className="px-3.5 py-1.5 bg-blue-600 text-white rounded-xl text-[10px] sm:text-xs font-bold hover:bg-blue-700 transition shadow-sm"
                                    >
                                      BOOK NOW
                                    </button>

                                    <span className="text-green-600 font-extrabold text-[10px] sm:text-xs">
                                      OPEN
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>,
          document.body
        )}

        
      </div>
    </section>
  );
}

export default forwardRef(Trekking_cards);
