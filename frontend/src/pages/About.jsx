import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import trekking33 from '../assets/trekking33.jpg';

export default function About() {
  return (
    <div className="bg-[#fbfaf8] min-h-screen text-[#1c1d20]">
      
      {/* Editorial Alpine Hero (White Expeditions Style) */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end bg-[#11110f] text-white overflow-hidden pt-28 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12">
        {/* Background Image with Dark Linear Gradients */}
        <img
          src={trekking33}
          alt="Himalayan Mountain Expeditions"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-[#11110f]/60 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#11110f]/90 via-[#11110f]/40 to-transparent"></div>

        <div className="relative z-10 max-w-[1420px] mx-auto w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-[#ff7a18]">/</span>
            <span className="text-white">About</span>
          </nav>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-[#ff7a18] font-bold mb-3">
            Colway Expedition • India
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
            Professional Himalayan Mountaineering, Peak Expeditions & High-Altitude Support
          </h1>

          <p className="text-white/80 text-base sm:text-xl max-w-3xl leading-relaxed font-light mb-8">
            Specializing in high-altitude trekking, 6,000 m & 7,000 m-class peak expeditions, mountain skills training, and end-to-end ground logistics across the Indian Himalayas.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              to="/expeditions"
              className="px-7 py-3.5 rounded-full bg-[#ff7a18] text-white font-mono text-xs uppercase tracking-[0.14em] font-bold hover:bg-white hover:text-black transition-all shadow-lg"
            >
              Explore Expeditions
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white font-mono text-xs uppercase tracking-[0.14em] font-semibold hover:border-[#ff7a18] hover:text-[#ff7a18] transition-all"
            >
              Plan with Team
            </Link>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

    </div>
  );
}
