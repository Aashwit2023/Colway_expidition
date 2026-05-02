import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "How to choose the right trek?",
      answer: "Choosing the right trek depends on your fitness level, experience, and the duration you're looking for. For beginners, we recommend starting with easy to moderate trails. Our team can help you evaluate your fitness and match you with a trek that ensures both safety and enjoyment."
    },
    {
      question: "Can a beginner choose a tough trek?",
      answer: "While ambitious, we generally advise beginners to build their stamina on moderate treks first. However, with the right physical preparation and mental grit, some tough treks are achievable. We provide specialized training advice for those looking to push their limits."
    },
    {
      question: "What is the age limit for a beginner trekker?",
      answer: "Age is just a number! We have had trekkers ranging from 10 to 70 years old. The key requirement is good physical health and medical clearance for high-altitude activities. We customize the pace to suit different age groups."
    },
    {
      question: "I am a beginner and confused which trek to book.",
      answer: "It's completely normal to feel overwhelmed. Our adventure specialists are available for one-on-one consultations to understand your preferences—whether you want mountain views, cultural immersion, or a physical challenge—and suggest the perfect first trek."
    },
    {
      question: "If I am solo, can I join the trek in a group?",
      answer: "Absolutely! Most of our treks are group-based, and we welcome solo travelers. It's a fantastic way to meet like-minded adventurers. You'll join a supportive community where safety and camaraderie are prioritized."
    },
    {
      question: "How does my family get updated about my Trek?",
      answer: "Safety and communication are our top priorities. We provide regular updates to your emergency contacts via satellite phones in remote areas or mobile networks where available. You can trek with peace of mind knowing your loved ones are informed."
    },
    {
      question: "What food can I expect?",
      answer: "We serve nutritious, freshly prepared meals designed for high-altitude energy needs. Expect a mix of local Himalayan dishes, Indian staples, and continental options like pasta and porridge. All meals are prepared with high hygiene standards."
    },
    {
      question: "I am allergic to some foods.",
      answer: "We cater to various dietary requirements, including allergies, vegetarian, vegan, and gluten-free diets. Please inform us during the booking process, and our outdoor kitchen team will ensure your meals are prepared safely and deliciously."
    },
    {
      question: "Do we get enough water for drinking?",
      answer: "Yes, we provide ample drinking water throughout the trek. We use mountain spring water that is boiled and filtered to ensure it's safe for consumption. We encourage using reusable bottles to minimize plastic waste."
    }
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            Find answers to common questions about our treks, safety protocols, and what to expect on your Himalayan adventure.
          </p>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-gray-800 pr-8">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-6 h-6 text-[#ffd700]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed font-sans border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 5 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d4a7a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAll ? 'Show less' : 'Show more'}
              <svg 
                className={`w-5 h-5 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
