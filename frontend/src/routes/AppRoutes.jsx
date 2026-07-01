import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Enquire from '../pages/Enquire';
import Contact from '../pages/Contact';
import ActivitiesPage from '../pages/ActivitiesPage';
import Trekking from '../pages/Trekking';
import Expeditions from '../pages/Expeditions';
import Villages from '../pages/Villages';
import KailashTrek from '../pages/KailashTrek';
import ParticipantDetails from '../pages/ParticipantDetails';
import PaymentPage from '../pages/PaymentPage';

import CancellationPolicy from '../pages/CancellationPolicy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/enquire" element={<Enquire />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/trekking" element={<Trekking />} />
      <Route path="/trekking/:slug" element={<Trekking />} />
      <Route path="/trekking/:slug/dates" element={<Trekking />} />
      <Route path="/trekking/:slug/Participants-details" element={<ParticipantDetails />} />
      <Route path="/trekking/:slug/Participants-details/booking-payment" element={<PaymentPage />} />
      <Route path="/expeditions" element={<Expeditions />} />
      <Route path="/villages" element={<Villages />} />
      <Route path="/kailash-trek" element={<KailashTrek />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
