import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TrekSlider from "../components/TrekSlider";
import ExploreTheme from "../components/Cards/ExploreTheme";
import adventure from "../assets/adventure.jpg";
import culture from "../assets/culture.jpg";
import trekking from "../assets/trekking.jpg";
import baliPassCamp from "../assets/bali_pass.jpg";
import kailash from "../assets/kailash.jpg";
import everest_base_camp from "../assets/everest_base_camp.jpg";
import frndship from "../assets/friendship_peak.jpg";
import trekking1 from "../assets/trekking1.jpg";
import trekking2 from "../assets/trekking2.jpg";
import cultural from "../assets/cultural.jpg";
import buran_ghati from "../assets/buran_ghati.jpg";
import punchkula from "../assets/punchkula.jpg"
import FAQ from "../components/FAQ/FAQ.jsx";

function Counter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    let startTime = null;

    const updateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [hasStarted, target, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const themes = [
    {
      image: trekking1,
      title: "Expeditions",
      description: "Explore high-altitude expeditions and challenging mountain adventures for experienced trekkers.",
      link: "/expeditions"
    },
    {
      image: trekking2,
      title: "Trekking",
      description: "Discover breathtaking trails and scenic routes through stunning landscapes and mountain valleys.",
      link: "/trekking"
    },
    {
      image: cultural,
      title: "Villages",
      description: "Experience authentic local culture and traditions in remote Himalayan villages.",
      link: "/villages"
    },
    {
      image: kailash,
      title: "Kailash Trek",
      description: "Embark on a spiritual pilgrimage to the sacred Mount Kailash and nearby regions.",
      link: "/kailash-trek"
    }
  ];


  const Destination = [
    {
      image: baliPassCamp,
      title: "Bali Pass Camp, India",
      description: "Experience the serene beauty of Bali Pass Camp, nestled in the heart of India's wilderness. Enjoy luxurious tents, breathtaking views, and unforgettable adventures."
    },
    {
      image: buran_ghati,
      title: "Buran Ghati Trek, India",
      description: "A scenic high-altitude mountain pass, popular among trekkers for its dramatic landscapes. The trail passes through dense forests, alpine meadows, and snow-covered slopes, offering breathtaking Himalayan views."

    },
    {
      image: punchkula,
      title: "Panchkula Trek, India",
      description: "Explore the natural beauty of Panchkula through its serene trekking trails nestled in the Shivalik range. From forest walks to hilltop views,the experience combines adventure with tranquility."
    },
    {
      image: frndship,
      title: "Friendship Peak, India",
      description: "Celebrate the universal bond of friendship with our unique travel experiences designed to connect you with people and cultures around the world."
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

      <ExploreTheme items={themes} heading="Popular Adventures" />

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
                <Counter target={500} suffix="+" />
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
                <Counter target={100} suffix="+" />
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

      <ExploreTheme items={Destination} heading="Recently Visited Treks" />

      <section className="stories container">

        <h2>Stories From Travelers</h2>
        <div className="stories-slider">
          <div className="stories-track">
            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Traveler"
              />
              <p>
                "An unforgettable journey that exceeded all expectations. The
                attention to detail was impeccable."
              </p>
              <cite>- Sarah Johnson</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Traveler"
              />
              <p>
                "From the moment we booked to our return home, every aspect was
                handled with professionalism and care."
              </p>
              <cite>- Michael Chen</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Traveler"
              />
              <p>
                "The mountain expedition was life-changing. Every moment was
                filled with awe and wonder."
              </p>
              <cite>- Emma Rodriguez</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Traveler"
              />
              <p>
                "Professional, luxurious, and truly memorable. This is how travel
                should be."
              </p>
              <cite>- David Kim</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Traveler"
              />
              <p>
                "An unforgettable journey that exceeded all expectations. The
                attention to detail was impeccable."
              </p>
              <cite>- Sarah Johnson</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Traveler"
              />
              <p>
                "From the moment we booked to our return home, every aspect was
                handled with professionalism and care."
              </p>
              <cite>- Michael Chen</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                alt="Traveler"
              />
              <p>
                "The mountain expedition was life-changing. Every moment was
                filled with awe and wonder."
              </p>
              <cite>- Emma Rodriguez</cite>
            </div>

            <div className="story-card">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Traveler"
              />
              <p>
                "Professional, luxurious, and truly memorable. This is how travel
                should be."
              </p>
              <cite>- David Kim</cite>
            </div>
          </div>
        </div>
      </section>


      <section className="team container">
        <h2>Meet Our Expert Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Team Member"
            />
            <h3>Emma Rodriguez</h3>
            <p>Senior Travel Consultant</p>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Team Member"
            />
            <h3>David Kim</h3>
            <p>Adventure Specialist</p>
          </div>

          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Team Member"
            />
            <h3>Lisa Thompson</h3>
            <p>Cultural Experiences Curator</p>
          </div>
        </div>
      </section>

      <FAQ />


    </>
  );
}
