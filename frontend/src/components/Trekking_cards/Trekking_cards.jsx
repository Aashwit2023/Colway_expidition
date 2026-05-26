import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import * as QRCode from 'qrcode';

export default function Trekking_cards({ items, heading, onOpenModal }) {
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
  const [bookingData, setBookingData] = useState({ date: null, name: '', email: '', count: 1 });
  const [paymentStatus, setPaymentStatus] = useState('unpaid');
  const [qrCode, setQrCode] = useState(null);
  const [isGeneratingQr, setIsGeneratingQr] = useState(false);

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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-2">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-2xl font-bold text-gray-800">
                  Fixed Departures
                </h2>

                <button
                  onClick={() => setSelectedDates(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="max-h-[500px] overflow-y-auto p-5 space-y-5">

                {/* Trek title */}
                {selectedDates.title && (
                  <div className="px-2">
                    <div className="text-lg font-semibold text-gray-800 mb-2">{selectedDates.title}</div>
                  </div>
                )}

                {/* no select - collapsed months only */}

                {/* Collapsible months list */}
                {Object.entries(selectedDates.dates).map(([month, dates], i) => {
                  const isExpanded = expandedMonths.includes(month);
                  return (
                    <div key={i}>
                      <button
                        onClick={() => {
                          setExpandedMonths((prev) =>
                            prev.includes(month)
                              ? prev.filter((m) => m !== month)
                              : [...prev, month]
                          );
                          setSelectedMonth(month);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl mb-3 ${selectedMonth === month ? 'bg-[#ff7a18] text-white' : 'bg-gray-100 text-gray-800'} font-bold text-lg`}
                      >
                        <span>{month}</span>
                        <span className="text-xl">{isExpanded ? '▾' : '▸'}</span>
                      </button>

                      {isExpanded && (
                        <div className="space-y-3">
                                    {dates.map((date, idx) => (
                                      <div
                                        key={idx}
                                        className="flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-4 hover:shadow-md transition"
                                      >
                                        <span className="font-semibold text-gray-700">
                                          {date}
                                        </span>

                                        <div className="flex items-center gap-3">
                                          <button
                                            onClick={() => {
                                              setBookingData((b) => ({ ...b, date }));
                                              setBookingStep(1);
                                              setPaymentStatus('unpaid');
                                              setQrCode(null);
                                              setBookingOpen(true);
                                            }}
                                            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
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

                {/* Steps */}
                {bookingStep === 1 && (
                  <div>
                    <div className="mb-3 font-semibold">1. Login / Signup</div>
                    <input
                      value={bookingData.email}
                      onChange={(e) => setBookingData((b) => ({ ...b, email: e.target.value }))}
                      placeholder="Email"
                      className="w-full border rounded p-2 mb-2"
                    />
                    <div className="text-sm text-gray-500 mb-4">(We'll treat any email as logged in for demo.)</div>
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setBookingStep(2)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div>
                    <div className="mb-3 font-semibold">2. Enter People Details</div>
                    <input
                      value={bookingData.name}
                      onChange={(e) => setBookingData((b) => ({ ...b, name: e.target.value }))}
                      placeholder="Full name"
                      className="w-full border rounded p-2 mb-2"
                    />
                    <input
                      type="number"
                      value={bookingData.count}
                      min={1}
                      onChange={(e) => setBookingData((b) => ({ ...b, count: Number(e.target.value) }))}
                      className="w-32 border rounded p-2 mb-2"
                    />
                    <div className="flex justify-between mt-4">
                      <button onClick={() => setBookingStep(1)} className="px-4 py-2 bg-gray-200 rounded">Back</button>
                      <button onClick={() => setBookingStep(3)} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div>
                    <div className="mb-3 font-semibold">3. Show QR</div>
                    <div className="mb-4">This QR represents your booking — valid for a short time.</div>
                    {qrCode ? (
                      <div className="flex flex-col items-center gap-4">
                        <img src={qrCode} alt="Booking QR" className="w-48 h-48 bg-white rounded-xl border p-2" />
                        <div className="text-center">
                          <div className="font-semibold">{bookingData.name || bookingData.email}</div>
                          <div className="text-sm text-gray-500">People: {bookingData.count}</div>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4 text-sm text-gray-500">Generating QR code…</div>
                    )}

                    <div className="flex justify-between mt-4">
                      <button onClick={() => setBookingStep(2)} className="px-4 py-2 bg-gray-200 rounded">Back</button>
                      <div className="flex gap-2">
                        <button onClick={async () => {
                          setIsGeneratingQr(true);
                          const payload = JSON.stringify({
                            date: bookingData.date,
                            name: bookingData.name || bookingData.email,
                            count: bookingData.count,
                            bookedAt: new Date().toISOString(),
                          });
                          try {
                            const qrDataUrl = await QRCode.toDataURL(payload, { margin: 2, width: 240 });
                            setQrCode(qrDataUrl);
                          } catch (error) {
                            console.error('QR generation failed', error);
                            setQrCode(null);
                          } finally {
                            setIsGeneratingQr(false);
                          }
                        }} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition" disabled={isGeneratingQr}>{isGeneratingQr ? 'Generating...' : 'Generate QR'}</button>
                        <button onClick={() => setBookingStep(4)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Proceed to Payment</button>
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 4 && (
                  <div>
                    <div className="mb-3 font-semibold">4. Payment</div>
                    <div className="mb-4 text-sm text-gray-600">Simulated payment step. Mark paid to complete booking.</div>
                    <div className="flex items-center gap-3 mb-4">
                      <button onClick={() => setPaymentStatus('paid')} className="px-4 py-2 bg-green-600 text-white rounded">Mark Paid</button>
                      <button onClick={() => setPaymentStatus('unpaid')} className="px-4 py-2 bg-red-100 rounded">Mark Unpaid</button>
                      <div className={`ml-4 font-semibold ${paymentStatus === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{paymentStatus.toUpperCase()}</div>
                    </div>

                    <div className="flex justify-between">
                      <button onClick={() => setBookingStep(3)} className="px-4 py-2 bg-gray-200 rounded">Back</button>
                      <button onClick={() => {
                        if (paymentStatus === 'paid') {
                          // finalize booking: keep QR visible and close after short delay
                          setTimeout(() => { setBookingOpen(false); }, 900);
                        } else {
                          // keep open so user can pay
                          alert('Payment not completed. Keep booking open.');
                        }
                      }} className="px-4 py-2 bg-blue-600 text-white rounded">Finish</button>
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
