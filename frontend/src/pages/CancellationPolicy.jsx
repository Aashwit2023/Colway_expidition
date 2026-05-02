import React from 'react';
import contactimg from '../assets/contact.jpg';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <div 
        className="relative h-[30vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactimg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            Cancellation Policy
          </h1>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        <section className="mb-12 space-y-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-100 pb-2 mb-6">Terms & Conditions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Organizer's Cancellation</h3>
              <p className="leading-relaxed">
                In case of cancellation from the organiser’s end (due to Lockdown, or any Natural calamities including snowstorms, thunderstorms, floods, landslides, earthquakes, bad weather or unexpected political unrest, terrorism activity, curfews, riots, or government orders), Colway Expeditions will refund the amount in 30 Days.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Rescheduling Requests</h3>
              <p className="leading-relaxed">
                In case a client wishes to change the trek date, Colway Expeditions reserves the right to do so, provided the request is made 30 days prior to the initial departure date.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Booking & Advance Payments</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Booking amount is Non-Refundable.</li>
                <li>No refund is applicable on cancellation if only the Advance Amount was paid to book the trek.</li>
                <li>Cancellation charges are calculated based on the total trek/trip fee, irrespective of the amount paid (either full or partial).</li>
                <li>The final refund amount will be calculated from the total fee, in case any partial payment has been made.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Refund Processing</h3>
              <p className="leading-relaxed">
                Refunds will be made within 7-14 working days from the date of cancellation.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Standard Cancellation Schedule</h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <table className="w-full text-left">
                  <thead className="bg-gray-100 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 font-bold text-sm uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-3 font-bold text-sm uppercase tracking-wider">Refund Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">7 days or more in advance</td>
                      <td className="px-6 py-4 italic">Will receive a 90% refund</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Within 3-6 days</td>
                      <td className="px-6 py-4 italic">Will incur a 20% fee</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Within 48 hours</td>
                      <td className="px-6 py-4 italic">Will incur a 30% fee</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">After the commence date</td>
                      <td className="px-6 py-4 italic">Will incur no refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>For any further assistance, please reach out to our support team.</p>
        </div>

      </div>
    </div>
  );
};

export default CancellationPolicy;
