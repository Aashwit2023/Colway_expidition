import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, QrCode, Sparkles, CheckCircle } from 'lucide-react';
import QRCode from 'qrcode';
import { updateBooking } from '../api/api';
import toast from 'react-hot-toast';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const QR_EXPIRY_TIME = 120;

  // Retrieve routing state
  const {
    bookingPayload,
    bookingId,
    bookingState,
    extraChargesList = [],
    selectedExtras = {},
    grandTotal = 0
  } = location.state || {};

  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isQrRevealed, setIsQrRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QR_EXPIRY_TIME); // 2 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const timerRef = useRef(null);
  const [payLaterAttempts, setPayLaterAttempts] = useState(0);

  const warningSentences = [
    "Scan the QR code below using GPay, PhonePe, Paytm, or any UPI client to transfer the amount.",
    "Are you sure? Payment is highly recommended to secure your slot and confirm your booking.",
    "Your seat is not confirmed yet. Slots are filling fast, please complete your payment now!",
    "⚠️ Final Warning: If you do not pay, your booking may be automatically canceled. Pay now to proceed.",
    "Please complete the payment process by scanning the UPI QR code below."
  ];

  // Redirect if no booking payload exists (e.g. direct page refresh)
  useEffect(() => {
    if (!bookingPayload) {
      toast.error('No active booking details found. Please start over.');
      navigate('/trekking', { replace: true });
    }
  }, [bookingPayload, navigate]);

  // Generate UPI QR Code URL
  useEffect(() => {
    if (bookingPayload) {
      const payeeAddress = 'colwayexpeditions@okaxis';
      const payeeName = 'Colway Expeditions';
      const note = `Trek booking for ${bookingPayload.trekName}`;
      const upiUrl = `upi://pay?pa=${payeeAddress}&pn=${encodeURIComponent(payeeName)}&am=${bookingPayload.totalCost}&cu=INR&tn=${encodeURIComponent(note)}`;

      QRCode.toDataURL(upiUrl, { margin: 2, width: 280 })
        .then((url) => setQrCodeUrl(url))
        .catch((err) => {
          console.error('Failed to generate QR code:', err);
          toast.error('Failed to generate payment QR code.');
        });
    }
  }, [bookingPayload]);

  // Countdown timer effect
  useEffect(() => {
    if (isQrRevealed && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsQrRevealed(false);
            toast.error('Payment window expired. Click the QR screen to reveal and try again.');
            return QR_EXPIRY_TIME;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isQrRevealed) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isQrRevealed, timeLeft]);

  if (!bookingPayload) return null;

  const handleRevealQr = () => {
    if (!isQrRevealed) {
      setTimeLeft(QR_EXPIRY_TIME);
      setIsQrRevealed(true);
      toast.success('QR revealed! You have 2 minutes to scan and pay.');
    }
  };

  const handleConfirmPayment = async () => {
    setIsSubmitting(true);
    try {
      const { response, data } = await updateBooking(bookingId, { isPaymentCompleted: true });
      if (!response.ok) {
        throw new Error(data.message || 'Failed to complete booking');
      }

      toast.success('Booking and Payment confirmed successfully!');
      setTimeout(() => {
        navigate('/trekking', { replace: true });
      }, 500);
    } catch (err) {
      console.error('Error completing booking:', err);
      toast.error(err.message || 'Failed to finalize your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <section className="min-h-[calc(100vh-160px)] bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <button
          onClick={() => navigate('/participant-details', { state: { bookingState, selectedExtras, bookingId } })}
          className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900 group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Participant Details
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          
          {/* Left Column: Review details */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
            <span className="text-xs uppercase tracking-[0.35em] text-orange-500 font-bold block mb-2">Step 2: Payment Review</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Review Booking Details</h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Please double-check your booking and participant information before scanning the QR code to proceed.
            </p>

            <div className="mt-8 space-y-6">
              
              {/* Trek Header */}
              <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 flex justify-between items-center gap-4">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{bookingPayload.trekName}</h3>
                  <p className="text-xs text-slate-500 mt-1">Date: <span className="font-semibold text-slate-700">{bookingPayload.trekDate}</span></p>
                </div>
                <div className="text-right">
                  <span className="bg-orange-100 text-orange-700 font-semibold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    PENDING PAYMENT
                  </span>
                </div>
              </div>

              {/* Participant details */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Participants List ({bookingPayload.participants.length})</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {bookingPayload.participants.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Participant #{idx + 1}</span>
                        <div className="font-semibold text-slate-800 mt-0.5">{p.name}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">Age</span>
                        <span className="font-bold text-slate-800">{p.age} yrs</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optional extras if selected */}
              {bookingPayload.additionalItems && bookingPayload.additionalItems.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Selected Extras</h4>
                  <div className="space-y-2.5">
                    {bookingPayload.additionalItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm py-2 px-4 border border-slate-100 rounded-xl bg-slate-50">
                        <div>
                          <span className="font-medium text-slate-700">{item.name}</span>
                          <span className="text-xs text-slate-400 ml-2">({item.quantity} {item.quantity === 1 ? 'unit' : 'units'})</span>
                        </div>
                        <span className="font-semibold text-slate-800">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Base Cost ({bookingPayload.participants.length} Person)</span>
                  <span className="font-medium text-slate-800">₹{(bookingPayload.baseCost * bookingPayload.participants.length).toLocaleString('en-IN')}</span>
                </div>
                {bookingPayload.additionalItems && bookingPayload.additionalItems.length > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Extras Total</span>
                    <span className="font-medium text-slate-800">
                      ₹{bookingPayload.additionalItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center text-lg font-bold text-slate-900 border-t border-dashed border-slate-200 pt-4">
                  <span>Total Calculated Price</span>
                  <span className="text-2xl text-orange-600 font-extrabold">₹{bookingPayload.totalCost.toLocaleString('en-IN')}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Payment instructions and blurred QR */}
          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl relative overflow-hidden flex flex-col items-center">
              
              {/* Safe Payment Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-6">
                <ShieldCheck size={14} />
                Secure UPI Payment Gateway
              </div>

              {payLaterAttempts > 0 && (
                <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-600 font-bold text-center animate-pulse">
                  ⚠️ Action Required: Please complete your payment!
                </div>
              )}

              {/* Do you want to pay query */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-1">
                Are you ready to pay?
              </h2>
              <p className={`text-xs text-center max-w-[280px] mb-6 font-medium transition-all duration-300 ${payLaterAttempts > 0 ? 'text-red-500' : 'text-slate-500'}`}>
                {warningSentences[Math.min(payLaterAttempts, warningSentences.length - 1)]}
              </p>

              {/* QR Screen wrapper */}
              <div 
                onClick={handleRevealQr}
                className={`relative w-[280px] h-[280px] rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-500 ${
                  isQrRevealed ? 'border-orange-500 shadow-md' : 'border-slate-200 hover:border-slate-400 bg-slate-50'
                }`}
              >
                {/* QR Code Image */}
                {qrCodeUrl ? (
                  <img 
                    src={qrCodeUrl} 
                    alt="UPI Payment QR Code" 
                    className={`w-full h-full object-contain p-4 transition-all duration-500 ${
                      isQrRevealed ? 'blur-0' : 'blur-lg select-none pointer-events-none'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                    <QrCode size={48} className="animate-pulse" />
                    <span className="text-xs mt-2 font-medium">Generating Payment QR...</span>
                  </div>
                )}

                {/* Blurring Overlay */}
                {!isQrRevealed && (
                  <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg mb-3 animate-bounce">
                      <QrCode size={24} />
                    </div>
                    <span className="text-sm font-extrabold text-slate-800 block">Click to Reveal QR Code</span>
                    <span className="text-[10px] text-slate-500 mt-1 font-semibold block bg-white/85 px-2.5 py-1 rounded-full border border-slate-100">
                      Expires in 2:00 mins on reveal
                    </span>
                  </div>
                )}
              </div>

              {/* Timer & Expiry Countdown */}
              {isQrRevealed && (
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full">
                  <Clock size={15} className="animate-pulse" />
                  <span>QR Active: {formatTime(timeLeft)}</span>
                </div>
              )}

              {/* Confirm / Save Actions */}
              <div className="w-full mt-8 space-y-3">
                <button
                  type="button"
                  onClick={handleConfirmPayment}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-2xl text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700 hover:shadow-orange-200 hover:shadow-lg transform active:scale-98'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle size={18} />
                      Confirm Payment & Save Booking
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPayLaterAttempts((prev) => prev + 1);
                    const toastMessages = [
                      "Warning: Please complete the payment to secure your booking!",
                      "Trek departure slot is not confirmed. Please pay now!",
                      "Payment is pending. Your booking is at risk of cancellation!",
                      "Error: Payment not received. Please scan the QR code to finish booking."
                    ];
                    const msg = toastMessages[Math.min(payLaterAttempts, toastMessages.length - 1)] || "Please complete the payment.";
                    toast.error(msg);
                  }}
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition transform active:scale-98"
                >
                  Payment not Done, Pay later
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/participant-details', { state: { bookingState, selectedExtras, bookingId } })}
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition transform active:scale-98"
                >
                  Edit Booking details
                </button>
              </div>

              <div className="mt-6 text-center text-[10px] text-slate-400 flex items-center gap-1">
                <Sparkles size={11} className="text-orange-400" />
                Your data is safe and processed locally.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
