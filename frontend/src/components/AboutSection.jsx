import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Compass, 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Flame, 
  Users, 
  Target, 
  Eye, 
  Shield, 
  HeartHandshake,
  MapPin,
  Snowflake
} from 'lucide-react';
import SpotlightCard from './SpotlightCard/SpotlightCard';
import friendship_peak from '../assets/friendship_peak.jpg';

export default function AboutSection() {
  // Experience Checklist Items
  const experienceList = [
    "High-altitude Himalayan trekking",
    "Mountain-pass expeditions above 5,000 m",
    "Peak climbing and summit expeditions",
    "Technical snow and ice terrain",
    "Expedition logistics and route support",
    "Mountaineering instruction and training",
    "High-altitude team management",
    "Snow and ski activities",
    "International and domestic expedition coordination"
  ];

  // Philosophy Flowchart
  const philosophySteps = [
    { step: "01", name: "Preparation" },
    { step: "02", name: "Acclimatization" },
    { step: "03", name: "Teamwork" },
    { step: "04", name: "Safety" },
    { step: "05", name: "Summit" },
    { step: "06", name: "Safe Return" }
  ];

  // Achievements Portfolio
  const achievements = [
    {
      icon: Mountain,
      title: "High-Altitude Experience",
      desc: "Experience in Himalayan objectives ranging from approximately 5,000 m passes to 6,000 m+ and 7,000 m-class expedition objectives.",
      badge: "5,000m - 7,000m",
      spotlight: "rgba(255, 122, 24, 0.14)"
    },
    {
      icon: Compass,
      title: "Mountaineering & Peak Expeditions",
      desc: "Participation in and support for mountain expeditions involving snow, ice, glacier and challenging high-altitude terrain.",
      badge: "Technical Climbs",
      spotlight: "rgba(59, 130, 246, 0.14)"
    },
    {
      icon: Snowflake,
      title: "Mountain & Ski Experience",
      desc: "Experience in snow-based mountain activities, skiing, winter conditions, and cold-weather alpine environments.",
      badge: "Winter Terrain",
      spotlight: "rgba(14, 165, 233, 0.14)"
    },
    {
      icon: Globe,
      title: "International Expedition Exposure",
      desc: "Working with climbers and expedition teams from diverse global backgrounds, providing professional local support and Himalayan route memory.",
      badge: "Global Teams",
      spotlight: "rgba(168, 85, 247, 0.14)"
    },
    {
      icon: Award,
      title: "Professional Development",
      desc: "Continuous refinement of mountaineering, guiding, rescue awareness, technical climbing, expedition planning, and alpine leadership.",
      badge: "Certified Standards",
      spotlight: "rgba(16, 185, 129, 0.14)"
    }
  ];

  // Key Strengths
  const keyStrengths = [
    {
      title: "Experienced Mountain Professionals",
      desc: "Our team understands the realities of Himalayan terrain, weather, altitude, and expedition logistics from years in the field.",
      icon: Users
    },
    {
      title: "Safety-Focused Operations",
      desc: "Safety, acclimatization, weather assessment, and responsible decision-making remain central to every operation we lead.",
      icon: ShieldCheck
    },
    {
      title: "Local Himalayan Knowledge",
      desc: "Local roots help us deeply understand routes, terrain shifts, microclimates, logistics, and mountain communities.",
      icon: MapPin
    },
    {
      title: "Customized Expeditions",
      desc: "We develop tailored expedition programs matched to the objective, timeline, and experience level of individual climbers and teams.",
      icon: Target
    },
    {
      title: "Complete Expedition Support",
      desc: "From permit handling and equipment logistics to mountain operations, we provide coordinated support throughout the journey.",
      icon: Truck
    }
  ];

  // Values
  const values = [
    {
      name: "Safety",
      desc: "Every expedition begins and ends with safety.",
      icon: ShieldCheck,
      color: "text-amber-500"
    },
    {
      name: "Professionalism",
      desc: "We maintain discipline and responsibility in the mountains.",
      icon: Award,
      color: "text-blue-500"
    },
    {
      name: "Teamwork",
      desc: "Strong teams create successful expeditions.",
      icon: Users,
      color: "text-emerald-500"
    },
    {
      name: "Respect",
      desc: "We respect mountains, local communities and the environment.",
      icon: HeartHandshake,
      color: "text-purple-500"
    },
    {
      name: "Adventure",
      desc: "We encourage people to challenge their limits responsibly.",
      icon: Flame,
      color: "text-orange-500"
    },
    {
      name: "Responsibility",
      desc: "The summit is never more important than human life.",
      icon: Shield,
      color: "text-red-500"
    }
  ];

  return (
    <div className="w-full bg-[#fbfaf8] text-[#1c1d20] font-sans pb-16">
      
      {/* 1. ABOUT COLWAY EXPEDITION */}
      <section className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16 max-w-[1420px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#ff7a18]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold">
                About Colway Expedition
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#11110f] tracking-tight leading-[1.15] mb-6">
              Professional Himalayan Mountaineering & Expedition Support
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-gray-900 font-semibold">Colway Expedition</strong> is a professional Himalayan adventure and mountaineering company based in India, dedicated to high-altitude trekking, mountaineering, peak expeditions, mountain training and expedition support.
              </p>
              <p>
                We aim to provide professionally planned and safety-focused mountain experiences for trekkers, climbers, adventure enthusiasts and international expedition teams exploring the Himalayas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/expeditions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#11110f] text-white text-xs font-mono uppercase tracking-[0.12em] font-semibold hover:bg-[#ff7a18] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Explore Expeditions</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 bg-white text-gray-800 text-xs font-mono uppercase tracking-[0.12em] font-semibold hover:border-[#ff7a18] hover:text-[#ff7a18] transition-colors shadow-sm"
              >
                <span>Plan With Team</span>
              </Link>
            </div>
          </div>

          {/* Right: Visual Feature Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={friendship_peak}
                  alt="Colway Himalayan Expedition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff7a18] bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10 inline-block mb-1">
                    Manali, Himachal Pradesh • India
                  </span>
                  <h4 className="text-xl font-bold mt-1 text-white">
                    Explore Beyond Limits
                  </h4>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Grounded in local knowledge, technical alpine training, and disciplined mountain leadership.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white grid grid-cols-2 gap-3 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Safety First</p>
                    <p className="text-[11px] text-gray-500">Gradual ascent profiles</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Certified Leads</p>
                    <p className="text-[11px] text-gray-500">Experienced instructors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR EXPERIENCE */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold block mb-2">
              Field Record
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11110f] tracking-tight">
              Our Experience
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
              Our experience has been developed through years of involvement in the Himalayan mountain environment, working across challenging terrain and changing weather conditions.
            </p>
          </div>

          {/* 9-Point Field Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
            {experienceList.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-xl bg-[#fcfbf9] border border-gray-200/70 hover:border-[#ff7a18]/40 hover:bg-white transition-all shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-orange-100 text-[#ff7a18] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#fffaf5] border border-[#ffeedd] text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong className="text-[#11110f] font-semibold">Our Approach: </strong>
            Combines local Himalayan knowledge with professional expedition practices, helping teams prepare thoroughly for demanding mountain objectives.
          </div>
        </div>
      </section>

      {/* 3. OUR EXPEDITION PHILOSOPHY */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="rounded-3xl border border-gray-200/90 bg-[#11110f] text-white p-6 sm:p-10 md:p-12 shadow-xl relative overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold block mb-2">
              Our Core Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Reaching the Summit is Only One Part of the Journey
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed font-light">
              At Colway Expedition, we believe a successful expedition means:
            </p>
          </div>

          {/* 6-Step Visual Flowchart */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {philosophySteps.map((p, idx) => (
              <div 
                key={idx} 
                className="relative p-4 rounded-xl bg-white/[0.05] border border-white/10 text-center hover:border-[#ff7a18]/60 transition-colors"
              >
                <span className="font-mono text-[10px] text-[#ff7a18] font-bold block mb-1">STEP {p.step}</span>
                <span className="text-sm sm:text-base font-bold text-white block">{p.name}</span>
                {idx < philosophySteps.length - 1 && (
                  <span className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#ff7a18] text-xs z-10">→</span>
                )}
              </div>
            ))}
          </div>

          {/* Safety Statement Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            <div className="space-y-3">
              <p className="font-medium text-white">
                We never encourage unnecessary risk for the sake of a summit.
              </p>
              <p>
                Mountain conditions can change rapidly, and responsible decisions are an essential part of mountaineering.
              </p>
            </div>
            <div>
              <p>
                Our objective is to create an environment where climbers can challenge themselves while understanding the risks, responsibilities and realities of high-altitude climbing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR ACHIEVEMENTS */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold block mb-2">
            Field Portfolio
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11110f] tracking-tight">
            Our Achievements
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-3xl">
            Colway Expedition’s achievements are built through expeditions completed, challenging objectives undertaken, teams successfully supported and experience gained in the Himalayan environment.
          </p>
        </div>

        {/* 5 Achievements SpotlightCards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor={ach.spotlight}
                className="bg-white border border-gray-200/90 rounded-2xl p-6 hover:border-[#ff7a18]/50 transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff7a18] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                      {ach.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#11110f] mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 leading-relaxed italic">
          <strong>Note on Verified Records:</strong> Specific summit names, dates, heights, records, awards and certificates are maintained and provided directly to international clients and expedition partners to ensure complete authenticity.
        </div>
      </section>

      {/* 5. OUR KEY STRENGTHS */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold block mb-2">
              Why Teams Trust Us
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11110f] tracking-tight">
              Our Key Strengths
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyStrengths.map((ks, idx) => {
              const Icon = ks.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#fcfbf9] border border-gray-200/80 hover:border-[#ff7a18]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#ff7a18] flex items-center justify-center mb-4 shadow-xs">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-[#11110f] mb-2">
                      {ks.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {ks.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. OUR MISSION & OUR VISION */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#ff7a18] flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ff7a18] font-bold block mb-2">
                Purpose & Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#11110f] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To provide safe, professional and unforgettable Himalayan experiences while encouraging responsible mountaineering and respect for the mountain environment.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-bold text-[#ff7a18] uppercase tracking-wider font-mono">
              Safe • Professional • Unforgettable
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Eye size={24} />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-blue-600 font-bold block mb-2">
                Future Horizon
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#11110f] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                To establish Colway Expedition as a trusted Indian Himalayan expedition brand recognized nationally and internationally for professionalism, safety, technical knowledge and responsible mountain leadership.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
              Trust • Technical Knowledge • Leadership
            </div>
          </div>

        </div>
      </section>

      {/* 7. OUR VALUES */}
      <section className="px-4 sm:px-8 lg:px-12 py-10 max-w-[1420px] mx-auto">
        <div className="rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7a18] font-bold block mb-2">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#11110f] tracking-tight">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#fcfbf9] border border-gray-200/70 hover:border-[#ff7a18]/40 transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon size={20} className={val.color} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#11110f] mb-1">
                      {val.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. WHY COLWAY EXPEDITION? & BRAND SIGN-OFF */}
      <section className="px-4 sm:px-8 lg:px-12 py-12 max-w-[1420px] mx-auto">
        <div className="rounded-3xl bg-[#11110f] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff7a18] font-bold block">
              Why Colway Expedition?
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Because the Himalayas are not simply a destination.
            </h3>

            <p className="text-gray-300 text-lg sm:text-xl font-light italic max-w-2xl mx-auto">
              They are an environment that demands experience, preparation, patience and respect.
            </p>

            <div className="py-4">
              <div className="inline-block p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <p className="text-xl sm:text-2xl font-bold text-white">
                  At Colway Expedition, we don’t just take people into the mountains.
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-[#ff7a18] mt-1">
                  We prepare them for the mountains.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
              <span>Himalayan Trekking • Mountaineering • Peak Expeditions • Skiing • Training • Logistics</span>
              <span className="text-[#ff7a18] font-bold">Explore Beyond Limits.</span>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff7a18] text-white text-xs font-mono uppercase tracking-[0.14em] font-bold hover:bg-white hover:text-black transition-all shadow-lg hover:scale-105"
              >
                <span>Connect With Our Expedition Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
