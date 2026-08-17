import React, { useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Expedition_cards from '../components/Expedition_cards';
import ExpeditionModal from '../components/ExpeditionModal';
import { expeditions } from '../data/expeditions';

// Assets for Hero Slider
import trekking33 from '../assets/trekking33.jpg';
import everest_base_camp from '../assets/everest_base_camp.jpg';
import adventure from '../assets/adventure.jpg';

export default function Expeditions() {
  const heroImages = [trekking33, everest_base_camp, adventure];
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDatesPath = pathname.endsWith('/dates');
  const cardsRef = useRef(null);

  // Derive selected expedition from the URL slug
  const selectedExpedition = (slug && !isDatesPath) ? (expeditions.find((e) => e.slug === slug) || null) : null;

  const openExpedition = (item) => {
    navigate(`/expeditions/${item.slug}`);
  };

  const closeExpedition = () => {
    navigate('/expeditions');
  };

  const handleOpenViewDates = (item) => {
    navigate(`/expeditions/${item.slug}/dates`);
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <HeroSection
        images={heroImages}
        title="High Altitude Expeditions"
        subtitle="Go beyond the trails. Discover the true spirit of alpine mountaineering. Challenge yourself on India's finest 5000m and 6000m peaks."
      />

      {/* Main Content Area - Modernized Light Overlay */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-6 -mt-16 md:-mt-34 pt-40">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/40 mb-10 pt-0 mt-0">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 italic tracking-tighter">Challenging the Horizons</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Our high-altitude mountaineering program provides comprehensive training, logistics, and guidance. Stand atop the snow-covered pyramids of Pir Panjal and Lahaul under the wing of certified mountain guides.
            </p>
          </div>

          {/* Integrated 3-Column Grid */}
          <div className="bg-gray-50/50 rounded-[2rem] border border-dashed border-gray-200 overflow-hidden">
            <Expedition_cards
              items={expeditions}
              heading={
                <>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 italic tracking-tighter">Choose Your Summit</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                </>
              }
              ref={cardsRef}
              onOpenModal={openExpedition}
            />
          </div>
        </div>

        {/* Talk to Specialist - Styled to match the Trekking Page's Specialist Section */}
        <div className="mt-20 p-10 md:p-20 bg-gray-900 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="flex-1 text-center lg:text-left relative z-10">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Adventure is Calling</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter">Ready for the Climb?</h2>
            <p className="text-gray-450 text-xl leading-relaxed font-light max-w-2xl">
              Climbing expeditions require specialized training, endurance, and technical high-altitude gear. Our elite support teams guide you safely through every step of the journey.
            </p>
          </div>
          <div className="flex-none relative z-10">
            <button 
              onClick={() => navigate('/contact')}
              className="px-16 py-8 bg-gold text-blue-900 rounded-full font-black text-2xl hover:bg-yellow-300 hover:scale-110 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,215,0,0.3)] hover:shadow-[0_0_80px_rgba(255,215,0,0.5)]"
            >
              Talk to Specialist
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal Component */}
      <ExpeditionModal
        trek={selectedExpedition}
        isOpen={!!selectedExpedition}
        onClose={closeExpedition}
        onViewDates={handleOpenViewDates}
      />
      
      <style>{`
        .bg-gold { background-color: #ffd700; }
        .text-gold { color: #ffd700; }
        .text-gray-450 { color: #cbd5e1; }
      `}</style>
    </div>
  );
}
