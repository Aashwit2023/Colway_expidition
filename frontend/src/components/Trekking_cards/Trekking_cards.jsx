import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import * as QRCode from 'qrcode';
import ParticipantDetailsForm from '../ParticipantDetailsForm';

function Trekking_cards({ items, heading, onOpenModal }, ref) {
  const navigate = useNavigate();
  const isLoggedIn = () => Boolean(localStorage.getItem('colwayAuthEmail'));

  const beginBooking = (date) => {
    const bookingState = {
      trek: selectedDates?.title || 'Booked Trek',
      date,
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
      "May 2 - May 14",
      "May 8 - May 20",
      "May 15 - May 27"
    ],
    "October-2026": [
      "Oct 2 - Oct 14",
      "Oct 3 - Oct 15",
      "Oct 4 - Oct 16",
      "Oct 10 - Oct 22"
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
                                  <div className="font-semibold text-gray-700">{date}</div>
                                  <div className="text-xs text-gray-500">Seats available: --</div>
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

        {/* Booking Flow Modal */}
        {bookingOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/20 p-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <h3 className="text-xl font-bold">Booking — {selectedDates?.title || 'Trek'}</h3>
                <button onClick={() => setBookingOpen(false)} className="w-9 h-9 rounded-full bg-gray-100">✕</button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Selected date</div>
                  <div className="font-semibold">{bookingData.date || '—'}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
                  <div className={`rounded-2xl px-3 py-2 border ${bookingStep === 1 ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                    1. Login / Signup <span className="text-red-500">*</span>
                  </div>
                  <div className={`rounded-2xl px-3 py-2 border ${bookingStep === 2 ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                    2. People Details <span className="text-red-500">*</span>
                  </div>
                  <div className={`rounded-2xl px-3 py-2 border ${bookingStep === 3 ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                    3. QR Confirmation <span className="text-red-500">*</span>
                  </div>
                  <div className={`rounded-2xl px-3 py-2 border ${bookingStep === 4 ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-200 bg-gray-50 text-gray-600'}`}>
                    4. Payment <span className="text-red-500">*</span>
                  </div>
                </div>

                {bookingStep === 1 && (
                  <div>
                    <div className="mb-3 font-semibold">1. Login / Signup</div>
                    <input
                      value={bookingData.email}
                      onChange={(e) => setBookingData((b) => ({ ...b, email: e.target.value }))}
                      placeholder="Email"
                      className="w-full border rounded p-2 mb-2"
                      required
                    />
                    <div className="text-sm text-gray-500 mb-2">(We'll treat any email as logged in.)</div>
                    {!isLoginValid && <div className="text-sm text-red-600 mb-4">Email is required to proceed.</div>}
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setBookingStep(2)}
                        disabled={!canAdvanceFromStep1}
                        className={`px-4 py-2 rounded ${canAdvanceFromStep1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <ParticipantDetailsForm
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                    onBack={() => setBookingStep(1)}
                    onNext={() => setBookingStep(3)}
                  />
                )}

                {bookingStep === 3 && (
                  <div>
                    <div className="mb-3 font-semibold">3. Show QR</div>
                    <div className="mb-4">This QR represents your booking — valid for a short time.</div>
                    {qrCode ? (
                      <div className="flex flex-col items-center gap-4">
                        <img src={qrCode} alt="Booking QR" className="w-48 h-48 bg-white rounded-xl border p-2" />
                        <div className="text-center">
                          <div className="font-semibold">{bookingData.participants[0]?.name || bookingData.email}</div>
                          <div className="text-sm text-gray-500">People: {bookingData.count}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4 text-sm text-gray-500">No QR generated yet. Click the button below when you're ready.</div>
                    )}

                    {qrLocked && (
                      <div className="mb-4 text-sm text-orange-600">QR code is locked for {formatTimer(qrCountdown)} after generation. Regeneration is available after the timer ends.</div>
                    )}

                    <div className="flex justify-between mt-4">
                      <button onClick={() => setBookingStep(2)} className="px-4 py-2 bg-gray-200 rounded">Back</button>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => {
                            if (qrLocked) return;
                            setIsGeneratingQr(true);
                            const expirationTime = Date.now() + 5 * 60 * 1000;
                            const payload = JSON.stringify({
                              date: bookingData.date,
                              name: bookingData.participants[0]?.name || bookingData.email,
                              count: bookingData.count,
                              participants: bookingData.participants,
                              bookedAt: new Date().toISOString(),
                            });
                            try {
                              const qrDataUrl = await QRCode.toDataURL(payload, { margin: 2, width: 240 });
                              setQrCode(qrDataUrl);
                              setQrExpiration(expirationTime);
                              setQrCountdown(5 * 60);
                            } catch (error) {
                              console.error('QR generation failed', error);
                              setQrCode(null);
                            } finally {
                              setIsGeneratingQr(false);
                            }
                          }}
                          className={`px-4 py-2 rounded ${qrLocked || isGeneratingQr ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                          disabled={isGeneratingQr || qrLocked}
                        >
                          {isGeneratingQr ? 'Generating...' : qrLocked ? `Wait ${formatTimer(qrCountdown)}` : 'Generate QR'}
                        </button>
                        <button
                          onClick={() => setBookingStep(4)}
                          disabled={!canAdvanceFromStep3}
                          className={`px-4 py-2 rounded ${canAdvanceFromStep3 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                        >
                          Proceed to Payment
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 4 && (
                  <div>
                    <div className="mb-3 font-semibold">4. Payment</div>
                    <div className="mb-4 text-sm text-gray-600">Simulated payment step. Complete payment to finish your booking.</div>
                    <div className="flex items-center gap-3 mb-4">
                      <button onClick={() => setPaymentStatus('paid')} className="px-4 py-2 bg-green-600 text-white rounded">Mark Paid</button>
                      <button onClick={() => setPaymentStatus('unpaid')} className="px-4 py-2 bg-red-100 rounded">Mark Unpaid</button>
                      <div className={`ml-4 font-semibold ${paymentStatus === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{paymentStatus.toUpperCase()}</div>
                    </div>

                    <div className="flex justify-between">
                      <button onClick={() => setBookingStep(3)} className="px-4 py-2 bg-gray-200 rounded">Back</button>
                      <button
                        onClick={() => {
                          if (canFinishBooking) {
                            setTimeout(() => { setBookingOpen(false); }, 900);
                          } else {
                            alert('Payment must be completed before finishing the booking.');
                          }
                        }}
                        disabled={!canFinishBooking}
                        className={`px-4 py-2 rounded ${canFinishBooking ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default forwardRef(Trekking_cards);
