import React from 'react';
import HeroSection from '../components/HeroSection';
import kailashImage from '../assets/everest_base_camp.jpg';

const KailashTrek = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-32">
      <HeroSection 
        images={[kailashImage]}
        title="Mount Kailash Kora"
        subtitle="A sacred journey of spiritual awakening and physical endurance."
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-12 -mt-16 md:-mt-32 relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
            <div className="flex-1">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Ultimate Pilgrimage</span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-serif italic">A Journey to the Divine</h2>
              <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  The Kailash Mansarovar Yatra is considered one of the most sacred pilgrimages in the world. Mount Kailash, reaching 6,638 meters, is revered by billions as the residence of divinity.
                </p>
                <p>
                  Trekking around the mountain (The Kora) is a test of both body and spirit, crossing high passes like Dolma La at 5,630 meters under pristine blue skies.
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full grid grid-cols-1 gap-6">
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 backdrop-blur-md">
                <p className="text-sm uppercase tracking-widest text-blue-800 mb-1 opacity-60">Avg Altitude</p>
                <p className="text-3xl font-black text-blue-900">4,600 M</p>
              </div>
              <div className="p-8 bg-orange-50/50 rounded-3xl border border-orange-100 backdrop-blur-md">
                <p className="text-sm uppercase tracking-widest text-orange-800 mb-1 opacity-60">Best Season</p>
                <p className="text-3xl font-black text-orange-900">May - Sept</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-12 md:p-16 rounded-[3rem] text-white mb-20 shadow-2xl relative overflow-hidden">
            {/* Background pattern or subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <h3 className="text-3xl font-bold mb-10 text-white italic">Sacred Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-1 transition-all group-hover:bg-blue-600 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">52km Holy Kora</h4>
                  <p className="text-gray-400 font-light leading-relaxed">The spiritual circumambulation of the sacred peak, typically completed in 3 days.</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-1 transition-all group-hover:bg-blue-600 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Mansarovar Dip</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Visit the highest freshwater lake in the world for a spiritually cleansing experience.</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-1 transition-all group-hover:bg-blue-600 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Dolma La Pass</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Conquer the highest point of the trek at 18,471 ft, a test of sheer determination.</p>
                </div>
              </li>
              <li className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-1 transition-all group-hover:bg-blue-600 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Tibetan Plateaus</h4>
                  <p className="text-gray-400 font-light leading-relaxed">Witness the unique culture and pristine landscapes of the Roof of the World.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-10 bg-white border border-gray-100 rounded-[2rem] text-center shadow-lg transition-all hover:shadow-2xl">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Total Duration</p>
              <p className="text-4xl font-black text-gray-900 tracking-tighter">14 Days</p>
            </div>
            <div className="p-10 bg-white border border-gray-100 rounded-[2rem] text-center shadow-lg transition-all hover:shadow-2xl">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Peak Elevation</p>
              <p className="text-4xl font-black text-gray-900 tracking-tighter">5,630 M</p>
            </div>
            <div className="p-10 bg-white border border-gray-100 rounded-[2rem] text-center shadow-lg transition-all hover:shadow-2xl">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold">Grade</p>
              <p className="text-4xl font-black text-red-600 tracking-tighter uppercase">Extreme</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KailashTrek;
