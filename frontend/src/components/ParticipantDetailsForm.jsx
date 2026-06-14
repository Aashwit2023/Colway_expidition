import React from 'react';

export default function ParticipantDetailsForm({ bookingData, setBookingData, onNext, onBack }) {
  const handleCountChange = (value) => {
    if (value === '') {
      setBookingData((prev) => ({
        ...prev,
        count: '',
      }));
      return;
    }

    const count = Math.max(1, Math.min(20, Number(value)));
    const existingParticipants = bookingData.participants || [];
    const nextParticipants = Array.from({ length: count }, (_, index) => {
      return existingParticipants[index] || { name: '', age: '', phoneNumber: '', emergencyContact: '', address: '', gender: '' };
    });

    setBookingData((prev) => ({
      ...prev,
      count,
      participants: nextParticipants,
    }));
  };

  const updateParticipant = (index, field, value) => {
    let normalizedValue = value;

    if (field === 'name') {
      normalizedValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (field === 'phoneNumber' || field === 'emergencyContact') {
      normalizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (field === 'age') {
      normalizedValue = value === '' ? '' : Number(value);
    }

    setBookingData((prev) => {
      const nextParticipants = [...(prev.participants || [])];
      nextParticipants[index] = {
        ...nextParticipants[index],
        [field]: normalizedValue,
      };
      return { ...prev, participants: nextParticipants };
    });
  };

  const isValid = validateBookingData(bookingData);

  return (
    <div className="space-y-6 ">
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
              max="20"
              value={bookingData.count}
              onChange={(event) => handleCountChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
            />
          </div>
        </div>
      </div>

      <div className="space-y-10 ">
        {(bookingData.participants || []).map((participant, index) => (
          <div key={index} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-9 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Participant {index + 1}</p>
                <h4 className="text-lg font-semibold text-slate-900">Profile details</h4>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">#{index + 1}</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  value={participant.name}
                  onChange={(event) => updateParticipant(index, 'name', event.target.value)}
                  placeholder="Full name"
                  pattern="[A-Za-z ]+"
                  inputMode="text"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone Number</span>
                <input
                  type="tel"
                  value={participant.phoneNumber || ''}
                  onChange={(event) => updateParticipant(index, 'phoneNumber', event.target.value)}
                  placeholder="10 digit phone number"
                  maxLength="10"
                  inputMode="numeric"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Age</span>
                <div className="relative mt-2">
                  <input
                    type="number"
                    value={participant.age}
                    onChange={(event) => updateParticipant(index, 'age', event.target.value)}
                    placeholder="Age"
                    min="2"
                    max="89"
                    className={`w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition ${
                      participant.age !== '' &&
                      participant.age !== undefined &&
                      participant.age !== null &&
                      (Number(participant.age) <= 1 || Number(participant.age) >= 90)
                        ? 'border-rose-400 focus:border-rose-400 ring-2 ring-rose-500/35'
                        : 'border-slate-300 focus:border-orange-400'
                    }`}
                  />
                  {participant.age !== '' &&
                    participant.age !== undefined &&
                    participant.age !== null &&
                    (Number(participant.age) <= 1 || Number(participant.age) >= 90) && (
                      <div className="absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2 rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-center text-xs font-semibold text-white shadow-2xl animate-fade-in-up">
                        <div className="relative">
                         Age should be between 2 to 90.
                          <div className="absolute top-full left-1/2 mt-[9px] -translate-x-1/2 border-[8px] border-transparent border-t-slate-950" />
                        </div>
                      </div>
                    )}
                </div>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Gender</span>
                <select
                  value={participant.gender || ''}
                  onChange={(event) => updateParticipant(index, 'gender', event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Emergency Contact</span>
                <input
                  type="tel"
                  value={participant.emergencyContact || ''}
                  onChange={(event) => updateParticipant(index, 'emergencyContact', event.target.value)}
                  maxLength="10"
                  inputMode='numeric'
                  placeholder="10 digit phone number"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Address</span>
                <input
                  value={participant.address || ''}
                  onChange={(event) => updateParticipant(index, 'address', event.target.value)}
                  placeholder="Full address"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400"
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      {!isValid && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700 space-y-2">
          <div className="font-semibold">Please fill in all details for each participant before continuing:</div>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            {(bookingData.participants || []).map((p, idx) => {
              const name = p?.name?.trim() || '';
              const nameIsValid = name.length > 0 && /^[A-Za-z\s]+$/.test(name);
              const phoneNumber = p?.phoneNumber?.toString().trim() || '';
              const phoneIsValid = phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber);
              const emergencyContact = p?.emergencyContact?.toString().trim() || '';
              const emergencyIsValid = emergencyContact.length === 10 && /^\d{10}$/.test(emergencyContact);
              const address = p?.address?.trim() || '';
              const addressIsValid = address.length > 0;
              const gender = p?.gender?.trim() || '';
              const genderIsValid = gender.length > 0;
              const ageIsValid =
                p?.age !== '' &&
                p?.age !== undefined &&
                p?.age !== null &&
                Number(p.age) > 1 &&
                Number(p.age) < 90;

              const errors = [];
              if (!nameIsValid) errors.push('Name (letters & spaces)');
              if (!phoneIsValid) errors.push('Phone Number (10 digits)');
              if (!ageIsValid) errors.push('Age (2-89)');
              if (!genderIsValid) errors.push('Gender');
              if (!emergencyIsValid) errors.push('Emergency Contact (10 digits)');
              if (!addressIsValid) errors.push('Address');

              if (errors.length > 0) {
                return (
                  <li key={idx}>
                    Participant #{idx + 1}: {errors.join(', ')}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export const validateBookingData = (bookingData) => {
  const countValid = bookingData.count !== '' && Number(bookingData.count) >= 1 && Number(bookingData.count) <= 20;
  const lenValid = (bookingData.participants || []).length === Number(bookingData.count);
  
  if (!countValid || !lenValid) {
    console.log('validateBookingData basic check failed:', { count: bookingData.count, countValid, lenValid, length: (bookingData.participants || []).length });
    return false;
  }

  const results = (bookingData.participants || []).map((participant, index) => {
    const name = participant?.name?.trim() || '';
    const nameIsValid = name.length > 0 && /^[A-Za-z\s]+$/.test(name);
    const phoneNumber = participant?.phoneNumber?.toString().trim() || '';
    const phoneIsValid = phoneNumber.length === 10 && /^\d{10}$/.test(phoneNumber);
    const emergencyContact = participant?.emergencyContact?.toString().trim() || '';
    const emergencyIsValid = emergencyContact.length === 10 && /^\d{10}$/.test(emergencyContact);
    const address = participant?.address?.trim() || '';
    const addressIsValid = address.length > 0;
    const gender = participant?.gender?.trim() || '';
    const genderIsValid = gender.length > 0;
    const ageIsValid =
      participant?.age !== '' &&
      participant?.age !== undefined &&
      participant?.age !== null &&
      Number(participant.age) > 1 &&
      Number(participant.age) < 90;

    console.log(`validateBookingData Participant #${index + 1}:`, {
      name, nameIsValid,
      phoneNumber, phoneIsValid,
      emergencyContact, emergencyIsValid,
      address, addressIsValid,
      gender, genderIsValid,
      age: participant?.age, ageIsValid
    });

    return nameIsValid && phoneIsValid && emergencyIsValid && addressIsValid && genderIsValid && ageIsValid;
  });

  return results.every(r => r === true);
};
