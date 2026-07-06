import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Trekking_cards from '../components/Trekking_cards/Trekking_cards.jsx';
import TrekModal from '../components/Trekking_cards/TrekModal.jsx';

// Assets
import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';
import trekking33 from '../assets/trekking33.jpg';
import { themes } from '../data/treks';

export default function Trekking() {
  const trekImages = [trekking2, trekking1, trekking33];
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDatesPath = pathname.endsWith('/dates');
  const trekkingCardsRef = useRef(null);

  // Derive selected trek from the URL slug, only if not viewing dates
  const selectedTrek = (slug && !isDatesPath) ? (themes.find((t) => t.slug === slug) || null) : null;

  // When the URL has a slug on first load, open the matching trek
  useEffect(() => {
    // Reactively derived from parameters
  }, [slug, isDatesPath]);

  const openTrek = (trek) => {
    navigate(`/trekking/${trek.slug}`);
  };

  const closeTrek = () => {
    navigate('/trekking');
  };

  const handleOpenViewDates = (trek) => {
    navigate(`/trekking/${trek.slug}/dates`);
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Sticky Hero Background */}
      <HeroSection
        images={trekImages}
        title="Trekking"
        subtitle="Step into the wild and discover spectacular trails carved by nature. From snow-capped peaks to lush valleys, your adventure starts here."
      />

      {/* Main Content Area - Modernized Overlay - COMPACT SPACING */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-6 -mt-16 md:-mt-34 pt-40 ">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/40 mb-10 pt-0 mt-0">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 italic tracking-tighter">Epic Trails Await</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Our trekking programs are designed to provide both challenge and serenity. Explore our carefully curated journeys across the Himalayas.
            </p>
          </div>

          {/* Integrated 3-Column Grid - Balanced Layout */}
          <div className="bg-gray-50/50 rounded-[2rem] border border-dashed border-gray-200 overflow-hidden">
            <Trekking_cards
              items={themes}
              heading={
                <>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 italic tracking-tighter">Choose Your Journey</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                </>
              }
              ref={trekkingCardsRef}
              onOpenModal={openTrek}
            />
          </div>
        </div>
      </div>

      <TrekModal
        trek={selectedTrek}
        isOpen={!!selectedTrek}
        onClose={closeTrek}
        onViewDates={handleOpenViewDates}
      />
    </div>
  );
}
