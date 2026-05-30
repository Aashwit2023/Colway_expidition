import React from 'react';

export default function ParticipantDetailsForm({ bookingData, setBookingData, onNext, onBack }) {
  const handleCountChange = (value) => {
    const count = Math.max(1, Math.min(10, Number(value) || 1));
    const existingParticipants = bookingData.participants || [];
    const nextParticipants = Array.from({ length: count }, (_, index) => {
      return existingParticipants[index] || { name: '', age: '' };
    });

    setBookingData((prev) => ({
      ...prev,
      count,
      participants: nextParticipants,
    }));
  };

  const updateParticipant = (index, field, value) => {
    setBookingData((prev) => {
      const nextParticipants = [...(prev.participants || [])];
      nextParticipants[index] = {
        ...nextParticipants[index],
        [field]: field === 'age' ? Number(value) : value,
      };
      return { ...prev, participants: nextParticipants };
    });
  };

  const isValid = (bookingData.participants || []).every(
    (participant) => participant?.name?.trim().length > 0 && participant?.age > 0
  );

  return (
    <div className="space-y-6">
      <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">Participant details</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Add each trek participant</h3>
            <p className="mt-2 text-sm text-slate-600">Set the total number of participants and enter the name and age for each person joining the trek.</p>
          </div>
          <div className="w-full max-w-[160px]">
            <label className="block text-xs font-semibold text-slate-600 mb-2">Total participants</label>
            <input
              type="number"
              min="1"
              max="10"
              value={bookingData.count}
              onChange={(event) => handleCountChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {(bookingData.participants || []).map((participant, index) => (
          <div key={index} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Participant {index + 1}</p>
                <h4 className="text-lg font-semibold text-slate-900">Profile details</h4>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">#{index + 1}</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  value={participant.name}
                  onChange={(event) => updateParticipant(index, 'name', event.target.value)}
                  placeholder="Full name"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Age</span>
                <input
                  type="number"
                  min="1"
                  value={participant.age}
                  onChange={(event) => updateParticipant(index, 'age', event.target.value)}
                  placeholder="Age"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      {!isValid && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          Please fill in the name and age for each participant before continuing.
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid}
          className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${isValid ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-slate-200 text-slate-500 cursor-not-allowed'}`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
