import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ParticipantDetailsForm from '../components/ParticipantDetailsForm';
import { useAuth } from '../context/AuthContext';

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

  const handleSubmit = () => {
    if (bookingData.participants.every((p) => p.name.trim() && p.age > 0)) {
      navigate('/trekking');
    }
  };

  return (
    <section className="min-h-[calc(100vh-160px)] bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">Booked trek summary</p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900">Participant information</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Add the number of people in your booking and enter each participant's name and age. This page matches the site header/footer and works as a dedicated booking details page.
              </p>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-6 shadow-sm border border-slate-200">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Booking details</p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900">Trek:</span> {bookingData.trek}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Departure:</span> {bookingData.date}
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Participants:</span> {bookingData.count}
                </div>
              </div>
            </div>
          </div>

          <ParticipantDetailsForm
            bookingData={bookingData}
            setBookingData={setBookingData}
            onBack={() => navigate('/trekking')}
            onNext={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
}
