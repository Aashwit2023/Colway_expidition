import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ParticipantDetailsForm from '../ParticipantDetailsForm';
import { useAuth } from '../../context/AuthContext';

function Trekking_cards({ items, heading, onOpenModal }, ref) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isLoggedIn = () => Boolean(user);

  const beginBooking = (dateVal) => {
    const dateStr = typeof dateVal === 'object' ? dateVal.date : dateVal;
    const bookingState = {
      trek: selectedDates?.title || 'Booked Trek',
      date: dateStr,
      count: 1,
      participants: [{ name: '', age: '' }],
    };

    if (isLoggedIn()) {
      navigate('/participant-details', { state: { bookingState } });
      return;
    }

    navigate('/login', { state: { from: '/participant-details', bookingState } });
  };
  const cardsRef = useRef([]);
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [expandedMonths, setExpandedMonths] = useState([]);

  // Fallback sample dates in case incoming item has no `dates` field
  const sampleDates = {
    "May-2026": [
      { date: "May 2 - May 14", seats: 10 },
      { date: "May 8 - May 20", seats: 15 },
      { date: "May 15 - May 27", seats: 6 }
    ],
    "October-2026": [
      { date: "Oct 2 - Oct 14", seats: 12 },
      { date: "Oct 3 - Oct 15", seats: 8 },
      { date: "Oct 4 - Oct 16", seats: 14 },
      { date: "Oct 10 - Oct 22", seats: 19 }
    ]
  };

  // Booking flow state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({ date: null, email: '', count: 1, participants: [{ name: '', age: '' }] });
  const [paymentStatus, setPaymentStatus] = useState('unpaid');
  const [qrCode, setQrCode] = useState(null);
  const [qrExpiration, setQrExpiration] = useState(null);
  const [qrCountdown, setQrCountdown] = useState(0);
  const [isGeneratingQr, setIsGeneratingQr] = useState(false);

  const qrLocked = qrExpiration !== null && Date.now() < qrExpiration;
  const isLoginValid = bookingData.email.trim().length > 0;
  const isPeopleValid = bookingData.participants.every(
    (participant) => participant?.name?.trim().length > 0 && participant?.age > 0
  );
  const isQrGenerated = Boolean(qrCode);
  const canAdvanceFromStep1 = isLoginValid;
  const canAdvanceFromStep2 = isPeopleValid;
  const canAdvanceFromStep3 = isQrGenerated;
  const canFinishBooking = paymentStatus === 'paid';

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
    const datesObj = theme.dates || sampleDates;
    const months = Object.keys(datesObj);
    setSelectedDates({ ...theme, dates: datesObj });
    setSelectedMonth(months[0] || null);
    setExpandedMonths(months.slice(0, 1));
  };

  useImperativeHandle(ref, () => ({ openViewDates }));

  const formatTimer = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  useEffect(() => {
    if (!qrExpiration) {
      setQrCountdown(0);
      return;
    }

    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((qrExpiration - Date.now()) / 1000));
      setQrCountdown(remaining);

      if (remaining <= 0) {
        setQrExpiration(null);
        setQrCode(null);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [qrExpiration]);

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
                    onClick={() => {
                      const datesObj = theme.dates || sampleDates;
                      const months = Object.keys(datesObj);
                      setSelectedDates({ ...theme, dates: datesObj });
                      setSelectedMonth(months[0] || null);
                      setExpandedMonths(months.slice(0, 1));
                    }}
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
        {selectedDates && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">

            <div className="relative w-full max-w-3xl mx-4 md:mx-0 bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Fixed Departures
                </h2>

                <button
                  onClick={() => setSelectedDates(null)}
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
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-gray-200 rounded-2xl px-4 py-4 hover:shadow-md transition"
                              >
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-700">
                                    {typeof date === 'object' ? date.date : date}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Seats available: {typeof date === 'object' ? date.seats : 15}
                                  </div>
                                </div>

                                <div className="flex items-center gap-3">
                                  <button
                                    onClick={() => beginBooking(date)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                                  >
                                    BOOK NOW
                                  </button>

                                  <span className="text-green-600 font-bold text-sm">
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

              </div>
            </div>
          </div>
        )}

        
      </div>
    </section>
  );
}

export default forwardRef(Trekking_cards);
