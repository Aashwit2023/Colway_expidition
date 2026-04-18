import React from 'react';
import HeroSection from '../components/HeroSection';
import villageImage from '../assets/culture.jpg';

const Villages = () => {
  return (
    <div className="bg-white min-h-screen pb-32">
      <HeroSection 
        images={villageImage}
        title="Village Life & Culture"
        subtitle="Step into the heart of the mountains and experience life as it has been for centuries."
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-12 -mt-16 md:-mt-32 relative z-20">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-gray-100">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Authentic Experiences</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-serif leading-tight">Traditional Himalayan Living</h2>
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Our village tours are designed to give you an authentic glimpse into the rich traditions and hospitality of mountain communities. Discover a world defined by simplicity, resilience, and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="group bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Homestays</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Forget luxury hotels—staying with a local family is the best way to truly understand the culture. Share meals, stories, and laughter.
              </p>
            </div>

            <div className="group bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Local Cuisine</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Taste fresh, organic food prepared over traditional stoves. Learn the secrets of local recipes passed down through generations.
              </p>
            </div>

            <div className="group bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0 1.172 1.953 1.172 5.119 0 7.072z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12V4" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Art & Crafts</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Witness local artisans at work—weaving, wood carving, and traditional pottery. You can even try your hand at these ancient skills.
              </p>
            </div>

            <div className="group bg-gray-50 p-10 md:p-12 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-8 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Festivals</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                If your visit coincides with a local festival, you'll see the village at its most vibrant—full of music, dance, and colorful attire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villages;
