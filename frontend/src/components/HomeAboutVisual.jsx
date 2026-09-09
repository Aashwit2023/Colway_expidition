import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Compass, ShieldCheck, ArrowRight, Award, ChevronRight } from 'lucide-react';
import friendship_peak from '../assets/friendship_peak.jpg';
import CountUp from './CountUp/CountUp';

export default function HomeAboutVisual() {
  return (
    <section className="container my-16 px-4 md:px-8">
      <div className="bg-gradient-to-br from-[#fcfbf9] via-white to-[#f6f3ee] border border-[#eee8df] rounded-[2.5rem] p-6 sm:p-10 md:p-14 shadow-[0_12px_45px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#ff7a18]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold">
                About Colway Expedition
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a365d] tracking-tight leading-[1.15]">
              Himalayan Mountaineering, Peak Expeditions & Alpine Mastery
            </h2>

            {/* Philosophy Pull Quote Banner */}
            <div className="p-5 rounded-2xl bg-white border-l-4 border-[#ff7a18] shadow-sm border border-gray-100/80">
              <p className="text-base sm:text-lg text-gray-700 italic font-medium leading-relaxed">
                &ldquo;Our work is built around one simple principle: <span className="text-[#1a365d] font-bold not-italic">the mountains demand preparation, discipline, experience and respect.</span>&rdquo;
              </p>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              <strong className="text-gray-900 font-semibold">Colway Expedition</strong> is a professional Himalayan adventure and mountaineering company based in India. From high-altitude passes and remote trekking routes to 6,000 m and 7,000 m-class peak objectives, our team delivers safety-focused, professionally planned mountain experiences.
            </p>

            {/* 3 Visual Key Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                  <Mountain size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">6000m+ Peaks</p>
                  <p className="text-[11px] text-gray-500">Technical Climbs</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Certified Leads</p>
                  <p className="text-[11px] text-gray-500">Alpine Safety</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-gray-200/80 flex items-center gap-3 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Compass size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Remote Passes</p>
                  <p className="text-[11px] text-gray-500">Wilderness Trails</p>
                </div>
              </div>
            </div>

            {/* Prominent CTA to Full About Section */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1a365d] hover:bg-[#ff7a18] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Read Full About & Philosophy</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/expeditions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-semibold transition-colors"
              >
                <span>View Expeditions</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Image Collage & Floating Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src={friendship_peak}
                  alt="Colway Mountain Expedition"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff7a18] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block mb-1.5">
                    Himalayan Field Operations
                  </span>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    Expeditions Built on Discipline & Safety
                  </h4>
                </div>
              </div>

              {/* Secondary Floating Overlapping Visual Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xl max-w-[220px] sm:max-w-[260px] hidden sm:block transform hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0 font-black text-lg">
                    🏔️
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-black text-[#1a365d]">
                      <CountUp from={0} to={6000} duration={1.8} separator="," />m+
                    </h5>
                    <p className="text-[11px] text-gray-500 font-medium leading-tight">
                      Peak Expeditions & High Passes
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Certified Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#ff7a18] text-white rounded-2xl py-2.5 px-4 shadow-lg flex items-center gap-2 border-2 border-white">
                <Award size={16} />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">
                  Certified Leads
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
