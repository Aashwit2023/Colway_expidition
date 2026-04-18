import React from 'react';
import HeroSection from '../components/HeroSection';
import expeditionHero from '../assets/trekking1.jpg';
import adventure from "../assets/adventure.jpg";
import trekking33 from "../assets/trekking33.jpg";
import baliPass from "../assets/bali_pass.jpg";

export default function Expeditions() {
  const expeditions = [
    {
      title: "Mt. Everest Expedition",
      image: trekking33,
      desc: "The ultimate challenge for elite mountaineers. Reach the roof of the world.",
      details: ["60 Days", "Extreme", "Advanced Skills Required"]
    },
    {
      title: "Nanda Devi Base",
      image: adventure,
      desc: "Explore the mystical sanctuary around India's second-highest peak.",
      details: ["25 Days", "Very Hard", "High Endurance"]
    },
    {
      title: "Bali Pass Crossing",
      image: baliPass,
      desc: "Cross one of the most dramatic passes connecting Yamunotri and Har Ki Dun.",
      details: ["10 Days", "Difficult", "Alpine Experience"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-32">
      <HeroSection 
        images={[expeditionHero]}
        title="High Altitude Expeditions"
        subtitle="Go beyond the trails. Discover the true spirit of alpine mountaineering."
      />

      <div className="container mx-auto px-6 md:px-10 pt-10 lg:px-12 -mt-16 md:-mt-32 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {expeditions.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="relative h-[30rem] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-4xl font-bold text-white mb-4 tracking-tighter italic">{exp.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 line-clamp-2 font-light">{exp.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.details.map((detail, dIdx) => (
                      <span key={dIdx} className="text-[10px] bg-white/10 backdrop-blur-xl text-white px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/20">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 p-10 md:p-20 bg-gray-900 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          
          <div className="flex-1 text-center lg:text-left">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Adventure is Calling</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 italic tracking-tighter">Ready for the Challenge?</h2>
            <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
              Expeditions require specialized training and high-altitude gear. Our team of elite mountaineers will guide you every step of the way.
            </p>
          </div>
          <div className="flex-none">
            <button className="px-16 py-8 bg-gold text-blue-900 rounded-full font-black text-2xl hover:bg-yellow-300 transition-all hover:scale-110 active:scale-95 shadow-[0_0_60px_rgba(255,215,0,0.3)] hover:shadow-[0_0_80px_rgba(255,215,0,0.5)]">
              Talk to Specialist
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-gold { background-color: #ffd700; }
        .text-gold { color: #ffd700; }
      `}</style>
    </div>
  );
}
