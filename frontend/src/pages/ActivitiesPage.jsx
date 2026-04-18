import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ActivityCard from '../components/ActivityCard';

// Import assets
import adventureImage from '../assets/adventure.jpg';
import trekkingImage from '../assets/trekking.jpg';
import villageImage from '../assets/culture.jpg';
import kailashImage from '../assets/everest_base_camp.jpg';

const ActivitiesPage = () => {
  const scrollRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      title: "Expeditions",
      description: "Push your limits with our high-altitude expeditions to some of the world's most daunting peaks. Professional guides and premium safety standards included.",
      image: adventureImage,
      link: "/expeditions"
    },
    {
      title: "Trekking",
      description: "Traverse breathtaking landscapes, from lush valleys to rugged mountain passes. Perfect for nature lovers and photography enthusiasts.",
      image: trekkingImage,
      link: "/trekking"
    },
    {
      title: "Villages",
      description: "Experience the heart of local culture. Stay in traditional homes, enjoy authentic cuisine, and witness the timeless lifestyle of mountain communities.",
      image: villageImage,
      link: "/villages"
    },
    {
      title: "Kailash Trek",
      description: "A spiritual and physical journey around the sacred Mount Kailash. A once-in-a-lifetime experience for those seeking peace and adventure.",
      image: kailashImage,
      link: "/kailash-trek"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Hero Section */}
      <HeroSection 
        images={[adventureImage, trekkingImage, villageImage]}
        title="Explore Our Activities"
        subtitle="Discover a world of adventure, culture, and serenity tailored to your spirit."
      />

      {/* Activities Grid - Expanded Container for Wider Cards */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 -mt-24 md:-mt-40 pt-60">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              ref={(el) => (scrollRef.current[index] = el)}
              className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ActivityCard {...activity} />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section - Consistent Expanded Width */}
      <div className="mt-40 mb-56 max-w-[1500px] mx-auto px-6 md:px-10 lg:px-12 pb-10">
        <div 
          ref={(el) => (scrollRef.current[4] = el)}
          className="bg-gray-100 rounded-[3rem] p-12 md:p-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out shadow-inner border border-gray-200"
        >
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 italic tracking-tight">
              Why Choose Our Activities?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We don't just organize trips; we create life-changing experiences with a focus on safety, authenticity, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {[
              { id: '01', title: 'Expert Guides', desc: 'Our certified professionals ensure your safety and provide deep local insights.', color: 'text-blue-600', iconBg: 'bg-blue-200' },
              { id: '02', title: 'Curated Routes', desc: 'We design paths less traveled to offer you a truly unique and private experience.', color: 'text-orange-600', iconBg: 'bg-orange-200' },
              { id: '03', title: 'Eco-Conscious', desc: 'We prioritize sustainable travel practices to protect our beautiful planet.', color: 'text-green-600', iconBg: 'bg-green-200' }
            ].map((reason, idx) => (
              <div key={idx} className="group text-center">
                <div className={`w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center mx-auto mb-8 ${reason.color} text-3xl italic font-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border border-gray-200`}>
                  {reason.id}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">{reason.title}</h4>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Easing transitions across the page style */}
      <style>{`
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ActivitiesPage;
