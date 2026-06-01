import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ParticipantDetailsForm from '../components/ParticipantDetailsForm';
import { useAuth } from '../context/AuthContext';
import { themes } from '../data/treks';

export default function ParticipantDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const defaultBooking = {
    trek: 'Sar Pass Trek',
    date: 'May 2 - May 14',
    count: 1,
    participants: [{ name: '', age: '' }],
  };

  const [bookingData, setBookingData] = useState(location.state?.bookingState || defaultBooking);
  const [selectedExtras, setSelectedExtras] = useState({});

  useEffect(() => {
    if (location.state?.bookingState) {
      setBookingData(location.state.bookingState);
    }
  }, [location.state]);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true, state: { from: '/participant-details', bookingState: bookingData } });
    }
  }, [user, navigate, bookingData]);

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

  const handleToggleExtra = (label) => {
    setSelectedExtras((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const basePrice = matchedTrek ? parseInt(matchedTrek.price.replace(/[^0-9]/g, ''), 10) : 0;
  const subtotalBase = basePrice * bookingData.count;

  // Calculate extras cost per person
  const extrasPricePerPerson = Object.entries(selectedExtras).reduce((sum, [label, isSelected]) => {
    if (isSelected) {
      const item = extraChargesList.find((x) => x.label === label);
      if (item) return sum + item.price;
    }
    return sum;
  }, 0);

  const totalExtrasCost = extrasPricePerPerson * bookingData.count;
  const grandTotal = subtotalBase + totalExtrasCost;

  const handleSubmit = () => {
    if (bookingData.participants.every((p) => p.name.trim() && p.age > 0)) {
      navigate('/trekking');
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
              onBack={() => navigate('/trekking')}
              onNext={handleSubmit}
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
                    Optional Extras (per person)
                  </h4>
                  <div className="space-y-3.5">
                    {extraChargesList.map((item, idx) => (
                      <label 
                        key={idx} 
                        className="flex items-start gap-3 cursor-pointer group select-none text-slate-750 hover:text-slate-900"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedExtras[item.label]}
                          onChange={() => handleToggleExtra(item.label)}
                          className="mt-1 w-4.5 h-4.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500/20"
                        />
                        <div className="text-sm flex-1">
                          <div className="font-medium text-slate-800 group-hover:text-slate-950 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-orange-600 font-semibold mt-0.5 animate-pulse-subtle">
                            {item.price > 0 ? `+ ₹${item.price.toLocaleString('en-IN')}` : 'Free'}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Live Calculations Summary */}
              {extrasPricePerPerson > 0 && (
                <div className="mt-5 space-y-2.5 border-b border-slate-100 pb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Extras (per person)</span>
                    <span className="font-medium text-slate-800">+ ₹{extrasPricePerPerson.toLocaleString('en-IN')}</span>
                  </div>
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

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
