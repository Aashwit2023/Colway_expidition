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
      <Route path="/expeditions" element={<Expeditions />} />
      <Route path="/villages" element={<Villages />} />
      <Route path="/kailash-trek" element={<KailashTrek />} />
    </Routes>
  );
};

export default AppRoutes;
