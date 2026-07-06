import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ParticipantDetailsForm, { validateBookingData } from '../components/ParticipantDetailsForm';
import { useAuth } from '../context/AuthContext';
import { themes } from '../data/treks';
import { createBooking, updateBooking } from '../api/api';
import toast from 'react-hot-toast';

export default function ParticipantDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const { user } = useAuth();

  // Find trek details based on slug
  const matchedTrekBySlug = slug ? themes.find((t) => t.slug === slug) : null;
  
  const defaultBooking = {
    trek: matchedTrekBySlug ? matchedTrekBySlug.title : 'Sar Pass Trek',
    date: (matchedTrekBySlug && matchedTrekBySlug.dates && Object.values(matchedTrekBySlug.dates)[0] && Object.values(matchedTrekBySlug.dates)[0][0])
      ? Object.values(matchedTrekBySlug.dates)[0][0].date
      : 'May 2 - May 14',
    count: 1,
    participants: [{ name: '', age: '' }],
  };

  const [bookingData, setBookingData] = useState(location.state?.bookingState || defaultBooking);
  const [selectedExtras, setSelectedExtras] = useState(location.state?.selectedExtras || {});
  const [bookingId, setBookingId] = useState(location.state?.bookingId || null);

  useEffect(() => {
    if (location.state?.bookingState) {
      setBookingData(location.state.bookingState);
    } else if (matchedTrekBySlug) {
      setBookingData(defaultBooking);
    }
    if (location.state?.selectedExtras) {
      setSelectedExtras(location.state.selectedExtras);
    }
    if (location.state?.bookingId) {
      setBookingId(location.state.bookingId);
    }
  }, [location.state, slug]);

  useEffect(() => {
    if (!user) {
      const targetPath = slug ? `/trekking/${slug}/participants-details` : '/participant-details';
      navigate('/login', { replace: true, state: { from: targetPath, bookingState: bookingData } });
    }
  }, [user, navigate, bookingData, slug]);

  // Find the trek details to calculate pricing
  const matchedTrek = themes.find(
    (t) => t.title.toLowerCase().trim() === bookingData.trek.toLowerCase().trim()
  ) || themes[0];

  // Helper to parse extra charge strings (e.g. "+ ₹240 Trek Insurance")
  const parseExtraFacility = (str) => {
    let cleanStr = str.replace(/^\+?\s*/, '').trim();
    const rupeeMatch = cleanStr.match(/₹\s*([0-9,]+)/);
    let price = 0;
    let label = cleanStr;

    if (rupeeMatch) {
      price = parseInt(rupeeMatch[1].replace(/,/g, ''), 10);
      label = cleanStr.replace(/₹\s*[0-9,]+\s*/, '').trim();
    } else {
      const lowercaseLabel = cleanStr.toLowerCase();
      if (lowercaseLabel.includes('sleeping bag')) {
        price = 500;
      } else if (lowercaseLabel.includes('tent')) {
        price = 1000;
      } else if (lowercaseLabel.includes('pole')) {
        price = 300;
      } else if (lowercaseLabel.includes('crampon')) {
        price = 600;
      } else if (lowercaseLabel.includes('poncho')) {
        price = 200;
      } else if (lowercaseLabel.includes('gaiter')) {
        price = 400;
      } else if (lowercaseLabel.includes('permit')) {
        price = 5000;
      } else if (lowercaseLabel.includes('sherpa')) {
        price = 3000;
      } else if (lowercaseLabel.includes('helicopter')) {
        price = 25000;
      } else if (lowercaseLabel.includes('oxygen')) {
        price = 15000;
      } else {
        price = 0;
      }
    }
    // Clean up label formatting
    label = label.replace(/\s+/g, ' ');
    return { label, price };
  };

  // Compile unique list of optional extra charges
  const extraChargesList = [];
  if (matchedTrek) {
    const combined = [
      ...(matchedTrek.sidebarInclusions || []),
      ...(matchedTrek.addOns || [])
    ];
    combined.forEach((item) => {
      const parsed = parseExtraFacility(item);
      if (!extraChargesList.some((x) => x.label === parsed.label)) {
        extraChargesList.push(parsed);
      }
    });
  }

  const handleQuantityChange = (label, delta) => {
    setSelectedExtras((prev) => {
      const currentQty = prev[label] || 0;
      const maxQty = bookingData.count;
      const newQty = Math.min(maxQty, Math.max(0, currentQty + delta));
      return {
        ...prev,
        [label]: newQty,
      };
    });
  };

  const basePrice = matchedTrek ? parseInt(matchedTrek.price.replace(/[^0-9]/g, ''), 10) : 0;
  const subtotalBase = basePrice * bookingData.count;

  // Calculate total extras cost based on explicit quantities
  const totalExtrasCost = Object.entries(selectedExtras).reduce((sum, [label, qty]) => {
    if (qty > 0) {
      const item = extraChargesList.find((x) => x.label === label);
      if (item) return sum + (item.price * qty);
    }
    return sum;
  }, 0);

  const grandTotal = subtotalBase + totalExtrasCost;

  const isValid = validateBookingData(bookingData);

  const handleSubmit = async () => {
    if (isValid) {
      const items = Object.entries(selectedExtras)
        .filter(([label, qty]) => qty > 0)
        .map(([label, qty]) => {
          const item = extraChargesList.find((x) => x.label === label);
          return {
            name: item.label,
            price: item.price,
            quantity: qty,
          };
        });

      const payload = {
        userEmail: user.email,
        trekName: bookingData.trek,
        trekDate: bookingData.date,
        participants: bookingData.participants,
        baseCost: basePrice,
        additionalItems: items,
        totalCost: grandTotal
      };
      let response, data;
      if (bookingId) {
        const res = await updateBooking(bookingId, payload);
        response = res.response;
        data = res.data;
      } else {
        const res = await createBooking(payload);
        response = res.response;
        data = res.data;
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to save booking.');
      }
      
      toast.success(data.message || 'Booking saved successfully!');
      
      const savedBookingId = data.booking?._id || bookingId;
      
      // Update the current page's history state so browser Back button has it
      navigate(window.location.pathname, {
        replace: true,
        state: {
          bookingState: bookingData,
          selectedExtras,
          bookingId: savedBookingId
        }
      });

      // Navigate to booking payment/confirmation page
      const currentSlug = slug || matchedTrek?.slug || '';
      navigate(`/trekking/${currentSlug}/participants-details/booking-payment`, {
        state: {
          bookingPayload: payload,
          bookingId: savedBookingId,
          bookingState: bookingData,
          extraChargesList,
          selectedExtras,
          grandTotal
        }
      });
    }
  };

  return (
    <section className="min-h-[calc(100vh-160px)] bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          
          {/* Left Column: Form & Title */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">Booked trek summary</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900">Participant information</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 mb-8">
              Add the number of people in your booking and enter each participant's name and age. This page works as a dedicated booking details page.
            </p>
            
            <ParticipantDetailsForm
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          </div>

          {/* Right Column: Sticky Booking Summary & Pricing */}
          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold mb-5">Booking summary</p>
              
              <div className="space-y-4 border-b border-slate-100 pb-5">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm text-slate-500">Trek</span>
                  <span className="text-sm font-semibold text-slate-900 text-right">{bookingData.trek}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Departure</span>
                  <span className="text-sm font-semibold text-slate-900">{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Participants</span>
                  <span className="text-sm font-semibold text-slate-900">{bookingData.count}</span>
                </div>
              </div>

              {/* Price Calculation details */}
              <div className="mt-5 space-y-3.5 border-b border-slate-100 pb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Base Price (per person)</span>
                  <span className="font-semibold text-slate-900">₹{basePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Base Subtotal ({bookingData.count} {bookingData.count === 1 ? 'person' : 'people'})</span>
                  <span className="font-semibold text-slate-900">₹{subtotalBase.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Extra Facilities Section */}
              {extraChargesList.length > 0 && (
                <div className="mt-5 border-b border-slate-100 pb-5">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-4">
                    Optional Extras
                  </h4>
                  <div className="space-y-4">
                    {extraChargesList.map((item, idx) => {
                      const qty = selectedExtras[item.label] || 0;
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between group select-none text-slate-750"
                        >
                          <div className="text-sm flex-1 pr-4">
                            <div className="font-medium text-slate-800 group-hover:text-slate-950 transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-orange-600 font-semibold mt-0.5">
                              {item.price > 0
                                ? `+ ₹${item.price.toLocaleString('en-IN')}`
                                : 'Free'}
                            </div>

                            <div className="text-[11px] text-slate-400">
                              Max {bookingData.count} {bookingData.count === 1 ? 'unit' : 'units'}
                            </div>
                          </div>
                          
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.label, -1)}
                              disabled={qty === 0}
                              className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${qty === 0 ? 'border-slate-200 text-slate-300' : 'border-orange-200 text-orange-600 hover:bg-orange-50'}`}
                            >
                              -
                            </button>
                            <span className="w-4 text-center text-sm font-semibold text-slate-800">{qty}</span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.label, 1)}
                              disabled={qty >= bookingData.count}
                              className={`flex h-7 w-7 items-center justify-center rounded-full border transition-colors ${
                                qty >= bookingData.count
                                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                                  : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                              }`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Live Calculations Summary */}
              {totalExtrasCost > 0 && (
                <div className="mt-5 space-y-2.5 border-b border-slate-100 pb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Total Extras Cost</span>
                    <span className="font-medium text-slate-800">+ ₹{totalExtrasCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              {/* Grand Total */}
              <div className="mt-5 flex justify-between items-center">
                <div>
                  <span className="text-sm font-semibold text-slate-900">Total price</span>
                  <span className="block text-xs text-slate-400 mt-0.5">All taxes included</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-slate-900 tracking-tight">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => navigate(slug ? `/trekking/${slug}/dates` : '/trekking')}
                  className="w-full sm:w-auto rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 text-center"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValid}
                  className={`w-full sm:w-auto rounded-2xl px-5 py-3 text-sm font-semibold transition text-center ${isValid ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg hover:-translate-y-0.5' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
                >
                  Continue
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
