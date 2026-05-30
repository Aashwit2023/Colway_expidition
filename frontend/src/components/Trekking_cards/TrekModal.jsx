import React, { useEffect, useState } from 'react';
import * as QRCode from 'qrcode';
import { X, Calendar, MapPin, TrendingUp, Info, CheckCircle2, Users, Mountain, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticipantDetailsForm from '../ParticipantDetailsForm';

const TrekModal = ({ trek, isOpen, onClose, onViewDates }) => {
  const [activeImage, setActiveImage] = useState(trek?.image);
  const [showSticky, setShowSticky] = useState(false);
  const scrollRef = React.useRef(null);

  // Booking flow state local to modal
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

  const openBooking = (initialDate) => {
    const firstDate = initialDate || (trek?.dates && Object.values(trek.dates)[0] && Object.values(trek.dates)[0][0]) || null;
    setBookingData({ date: firstDate, email: '', count: 1, participants: [{ name: '', age: '' }] });
    setBookingStep(1);
    setPaymentStatus('unpaid');
    setQrCode(null);
    setQrExpiration(null);
    setQrCountdown(0);
    setBookingOpen(true);
  };

  const isLoggedIn = () => Boolean(localStorage.getItem('colwayAuthEmail'));

  const handleBookNow = () => {
    const firstDate = trek?.dates && Object.values(trek.dates)[0] && Object.values(trek.dates)[0][0];
    const bookingState = {
      trek: trek?.title || 'Booked Trek',
      date: firstDate || 'TBD',
      count: 1,
      participants: [{ name: '', age: '' }],
    };

    if (isLoggedIn()) {
      navigate('/participant-details', { state: { bookingState } });
      return;
    }

    navigate('/login', { state: { from: '/participant-details', bookingState } });
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
                      {trek.price}
                    </h2>

                    {/* Divider */}
                    <div className="my-3 border-t"></div>

                    {/* Inclusions */}
                    {trek.sidebarInclusions && trek.sidebarInclusions.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Includes
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {trek.sidebarInclusions.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Optional Add-ons */}
                    {trek.addOns && trek.addOns.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Optional Add-ons
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {trek.addOns.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button onClick={handleBookNow} className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-all shadow-md">
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
            <button onClick={handleBookNow} className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-black text-xs tracking-widest shadow-xl shadow-orange-500/20 transition-all transform active:scale-95 uppercase">
              Book This Trek
            </button>
          </div>
        </div>

        {/* Booking Flow Modal inside TrekModal */}
        {bookingOpen && (
          <div className="fixed inset-0 z-[2100] flex items-center justify-center bg-black/20 p-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-bold">Booking — {trek.title}</h3>
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
                    />
                    <div className="text-sm text-gray-500 mb-2">(We'll treat any email as logged in for demo.)</div>
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
                      <div className="mb-4 text-sm text-gray-500">No QR generated yet. Click below when ready.</div>
                    )}

                    {qrLocked && (
                      <div className="mb-4 text-sm text-orange-600">Current QR is locked for {formatTimer(qrCountdown)} and cannot be regenerated until the timer ends.</div>
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
                              trek: trek.title,
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
                    <div className="mb-4 text-sm text-gray-600">Simulated payment step. Mark paid to complete booking.</div>
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
    </div >
  );
};

export default TrekModal;
