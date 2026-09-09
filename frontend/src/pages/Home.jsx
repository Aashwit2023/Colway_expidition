import React from "react";
import TrekSlider from "../components/TrekSlider";
import ExploreTheme from "../components/Cards/ExploreTheme";
import adventure from "../assets/adventure.jpg";
import kailash from "../assets/kailash.jpg";
import frndship from "../assets/friendship_peak.jpg";
import trekking1 from "../assets/trekking1.jpg";
import trekking2 from "../assets/trekking2.jpg";
import cultural from "../assets/cultural.jpg";
import bali_pass from "../assets/bali_pass.jpg";
import buran_ghati from "../assets/buran_ghati.jpg";
import trekking33 from "../assets/trekking33.jpg";
import FAQ from "../components/FAQ/FAQ.jsx";
import HomeAboutVisual from "../components/HomeAboutVisual";
import CountUp from "../components/CountUp/CountUp";
import GoogleReviews from "../components/GoogleReviews";

export default function Home() {
  const upcomingActivities = [
    {
      image: frndship,
      title: "Kedarkantha Winter Trek",
      description: "Summit sunrise over 13 Himalayan peaks at 12,500 ft and camp by the frozen Juda Ka Talab lake in Uttarkashi.",
      link: "/trekking/kedarkantha-winter-trek",
      bookLink: "/trekking/kedarkantha-winter-trek/dates",
      badge: "12,500 ft • 5 Days",
      status: "Booking Open",
      dates: "Oct 31 - Dec 5, 2026",
      seats: "12 Seats Left"
    },
    {
      image: bali_pass,
      title: "Brahmatal Snow Trek",
      description: "Walk across pristine snow ridges and frozen alpine lakes with direct close-up views of Mt. Trishul (7,120m) & Nanda Ghunti.",
      link: "/trekking/brahmatal-snow-trek",
      bookLink: "/trekking/brahmatal-snow-trek/dates",
      badge: "12,250 ft • 6 Days",
      status: "Booking Open",
      dates: "Nov 6 - Dec 5, 2026",
      seats: "15 Seats Left"
    },
    {
      image: buran_ghati,
      title: "Dayara Bugyal Winter Trek",
      description: "Endless rolling snow meadows (Bugyals) with panoramic vistas of Bandarpoonch, Draupadi Ka Danda, and Srikanth.",
      link: "/trekking/dayara-bugyal-winter-trek",
      bookLink: "/trekking/dayara-bugyal-winter-trek/dates",
      badge: "12,057 ft • 5 Days",
      status: "Booking Open",
      dates: "Nov 7 - Dec 5, 2026",
      seats: "10 Seats Left"
    },
    {
      image: adventure,
      title: "Kuari Pass Winter Trek",
      description: "The historic Lord Curzon Trail facing the grand amphitheater of Mt. Nanda Devi (7,816m), Dronagiri, and Kamet.",
      link: "/trekking/kuari-pass-winter-trek",
      bookLink: "/trekking/kuari-pass-winter-trek/dates",
      badge: "12,516 ft • 6 Days",
      status: "Booking Open",
      dates: "Nov 13 - Dec 5, 2026",
      seats: "14 Seats Left"
    },
    {
      image: frndship,
      title: "Friendship Peak Expedition",
      description: "Summit Friendship Peak (5,289m) in the Pir Panjal range near Manali. A premier semi-technical snow climb.",
      link: "/expeditions/friendship-peak",
      bookLink: "/expeditions/friendship-peak/dates",
      badge: "5,289m • 7 Days",
      status: "Booking Open",
      dates: "Oct - Nov 2026",
      seats: "8 Seats Left"
    },
    {
      image: kailash,
      title: "Chopta–Tungnath–Chandrashila",
      description: "Summit Chandrashila (4,000m) and visit the world's highest Shiva temple at Tungnath surrounded by snow peaks.",
      link: "/trekking/chopta-tungnath-chandrashila-trek",
      bookLink: "/trekking/chopta-tungnath-chandrashila-trek/dates",
      badge: "13,123 ft • 4 Days",
      status: "Booking Open",
      dates: "Nov 21 - Dec 5, 2026",
      seats: "16 Seats Left"
    }
  ];

  const treks = [
    {
      image: trekking1,
      title: "Himalayan Expeditions",
      location: "High-Altitude Mastery",
      description: "Conquer the giants of the world. Our expertly guided expeditions provide the ultimate challenge for seasoned adventurers seeking the roof of the world.",
      duration: "14-21 Days",
      grade: "Elite Level",
      link: "/expeditions"
    },
    {
      image: trekking2,
      title: "Alpine Trekking",
      location: "The Path Less Traveled",
      description: "Discover hidden valleys and ancient trails. From lush forests to stark glacial moraines, experience the diverse beauty of the mountains at every step.",
      duration: "7-12 Days",
      grade: "All Levels",
      link: "/trekking"
    },
    {
      image: cultural,
      title: "Village Immersion",
      location: "Heart of the Mountains",
      description: "Step into a world of tradition. Experience authentic Himalayan hospitality and ancient cultural heritage in remote mountain settlements.",
      duration: "5-8 Days",
      grade: "Cultural",
      link: "/villages"
    },
    {
      image: kailash,
      title: "Mount Kailash Kora",
      location: "The Sacred Pilgrimage",
      description: "Embark on the ultimate spiritual journey. A transformative experience around the mystical Mount Kailash, the center of the spiritual universe.",
      duration: "18-22 Days",
      grade: "Spiritual",
      link: "/kailash-trek"
    }
  ];

  return (
    <>
      <TrekSlider treks={treks} />

      <ExploreTheme id="upcoming-activities" items={upcomingActivities} heading="Upcoming Activities" />

      <HomeAboutVisual />

      <section className="why-choose-us container">
        <h2>Why Travelers Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 w-full">
          {/* Happy Trekkers */}
          <div className="bg-white rounded-2xl p-6 text-center border-2 border-[#ff7a18] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between transition-transform hover:-translate-y-2 cursor-default w-full h-full">
            <div>
              <div className="text-[#ff7a18] mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-1">
                <CountUp from={0} to={500} duration={1.5} separator="," />+
              </h3>
              <p className="text-base font-semibold text-[#1a365d] mb-2">Happy Trekkers</p>
            </div>
            <p className="text-xs text-gray-500 mt-auto">Across 60+ destinations</p>
          </div>

          {/* 100+ Treks */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-2 cursor-default w-full h-full">
            <div>
              <div className="text-[#ff7a18] mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 20L10 8l4 6 4-4 4 10H4z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-1">
                <CountUp from={0} to={100} duration={1.5} separator="," />+
              </h3>
              <p className="text-base font-semibold text-[#1a365d] mb-2">Treks</p>
            </div>
            <p className="text-xs text-gray-500 mt-auto">Multiple regions</p>
          </div>

          {/* Expertise */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-2 cursor-default w-full h-full">
            <div>
              <div className="text-[#ff7a18] mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Expertise</h3>
            </div>
            <p className="text-xs text-gray-500 mt-auto">Over 5 years of crafting bespoke travel experiences.</p>
          </div>

          {/* Personalization */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-2 cursor-default w-full h-full">
            <div>
              <div className="text-[#ff7a18] mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Personalization</h3>
            </div>
            <p className="text-xs text-gray-500 mt-auto">Tailored itineraries designed just for you.</p>
          </div>

          {/* Safety & Security */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-2 cursor-default w-full h-full">
            <div>
              <div className="text-[#ff7a18] mb-4 flex justify-center">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2">Safety & Security</h3>
            </div>
            <p className="text-xs text-gray-500 mt-auto">24/7 support and comprehensive travel insurance.</p>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <FAQ />
    </>
  );
}
