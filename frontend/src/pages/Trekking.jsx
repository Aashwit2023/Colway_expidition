import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Trekking_cards from '../components/Trekking_cards/Trekking_cards.jsx';
import TrekModal from '../components/Trekking_cards/TrekModal.jsx';

// Assets
import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';
import trekking3 from '../assets/trekking3.jpg';
import trekking33 from '../assets/trekking33.jpg';
import adventure from "../assets/adventure.jpg";
import culture from "../assets/culture.jpg";
import cultural from "../assets/cultural.jpg";
import trekking from "../assets/trekking.jpg";
import baliPassCamp from "../assets/bali_pass.jpg";
import everest_base_camp from "../assets/everest_base_camp.jpg";
import frndship from "../assets/friendship_peak.jpg";

export default function Trekking() {
  const trekImages = [trekking2, trekking1, trekking33];
  const [selectedTrek, setSelectedTrek] = useState(null);

const themes = [
  {
    image: adventure,
    days: "6 days",
    difficulty: "moderate",
    title: "Valley Adventure",
    description: "A perfect blend of nature and excitement for beginners.",
    hasModal: true,
    price: "₹12,499",
    location: "Kullu Valley, Himachal",
    images: [adventure, trekking1, trekking2, trekking3],
    highlights: [
      "Ancient Village Exploration",
      "Alpine Meadow Camping",
      "Crystal Clear River Crossings",
      "Panoramic Himalayan Views",
      "Professional Photography Session",
      "Traditional Himachali Dinner"
    ],
    inclusions: [
      "Certified Trekking Guides",
      "Premium All-weather Tents",
      "Sleeping bags & liners",
      "All meals (Organic/Local Source)",
      "Trek permits & fees",
      "Transportation from/to Basecamp"
    ],
    fullDescription:
      "Step into the mesmerizing landscapes of Kullu Valley, where every trail unfolds a new story. This trek is thoughtfully designed for beginners and nature lovers who want to experience the grandeur of the Himalayas without extreme physical strain. Walk through dense pine forests filled with the scent of fresh earth, cross sparkling glacial streams, and camp in vast alpine meadows under a sky full of stars. Along the way, interact with locals in remote villages, experience authentic Himachali culture, and enjoy freshly prepared traditional meals. Whether it's sunrise over snow-capped peaks or peaceful evenings by the campfire, this journey offers the perfect balance of adventure, relaxation, and cultural immersion."
  },

  {
    image: culture,
    days: "8 days",
    difficulty: "moderate-difficult",
    title: "Cultural Highlands",
    description: "Explore the ancient traditions while traversing high ridges.",
    hasModal: true,
    price: "₹14,499",
    location: "Himachal Pradesh",
    images: [culture, trekking1, trekking2],
    highlights: [
      "Village Culture Experience",
      "Mountain Ridge Walks",
      "Local Food Exploration",
      "Scenic Landscapes"
    ],
    inclusions: [
      "Certified Guides",
      "Camping Gear",
      "Meals Included",
      "Permits & Fees"
    ],
    fullDescription:
      "Immerse yourself in the rich cultural heritage of the Himalayas as you trek through ancient highland villages untouched by time. This journey takes you across scenic ridgelines offering breathtaking views of distant snow peaks while introducing you to centuries-old traditions and lifestyles. Experience warm hospitality from local communities, taste authentic regional cuisine, and witness rituals and stories passed down through generations. The trek perfectly combines moderate physical challenge with deep cultural exploration, making it ideal for travelers seeking more than just landscapes."
  },

  {
    image: trekking,
    days: "9 days",
    difficulty: "difficult",
    title: "Classic Peaks",
    description: "The ultimate trekking experience for seasoned hikers.",
    hasModal: true,
    price: "₹18,999",
    location: "Himalayas",
    images: [trekking, trekking1, trekking2, trekking3],
    highlights: [
      "High Altitude Trek",
      "Snow Peaks",
      "Advanced Trails",
      "Epic Views"
    ],
    inclusions: [
      "Expert Guides",
      "All Equipment",
      "Food & Stay",
      "Permits"
    ],
    fullDescription:
      "Designed for experienced trekkers, this expedition challenges you to conquer rugged terrains and reach breathtaking high-altitude viewpoints. Traverse steep ascents, glacier-fed valleys, and rocky ridgelines while witnessing some of the most dramatic landscapes the Himalayas have to offer. Each day presents a new test of endurance and a rewarding panorama of towering peaks. This is not just a trek—it's a true adventure that pushes your limits and leaves you with unforgettable memories."
  },

  {
    image: baliPassCamp,
    days: "7 days",
    difficulty: "moderate-difficult",
    title: "Bali Pass Expedition",
    description: "A challenging route through the heart of the Himalayas.",
    hasModal: true,
    price: "₹16,999",
    location: "Uttarakhand",
    images: [baliPassCamp, trekking2, trekking3],
    highlights: [
      "High Pass Crossing",
      "Snow Trails",
      "Remote Campsites",
      "River Valleys"
    ],
    inclusions: [
      "Guides",
      "Camping Gear",
      "Meals",
      "Transport"
    ],
    fullDescription:
      "Embark on one of the most thrilling Himalayan crossings as you traverse the iconic Bali Pass. This adventure takes you through diverse terrains—from lush green valleys and cascading waterfalls to snow-covered slopes and high-altitude passes. Experience raw wilderness, camp in remote untouched locations, and witness ever-changing landscapes that keep you captivated throughout the journey. A perfect trek for those seeking both challenge and unmatched natural beauty."
  },

  {
    image: everest_base_camp,
    days: "12 days",
    difficulty: "difficult",
    title: "Everest Gateway",
    description: "Journey to the base of the world's highest peak.",
    hasModal: true,
    price: "₹45,000",
    location: "Nepal",
    images: [everest_base_camp, trekking1, trekking3],
    highlights: [
      "Everest Views",
      "Sherpa Culture",
      "High Altitude Adventure",
      "Iconic Base Camp"
    ],
    inclusions: [
      "Guides",
      "Accommodation",
      "Meals",
      "Permits"
    ],
    fullDescription:
      "Follow in the footsteps of legendary mountaineers on the iconic Everest Base Camp trek. This once-in-a-lifetime journey takes you through the heart of the Khumbu region, where you'll experience breathtaking views of Mount Everest and surrounding peaks. Walk through vibrant Sherpa villages, visit ancient monasteries, and gradually ascend through dramatic landscapes. Reaching base camp is an achievement in itself—one that rewards you with awe-inspiring scenery and a deep sense of accomplishment."
  },

  {
    image: trekking1,
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Kedarkantha Trek",
    description: "Popular winter trek through snow trails.",
    hasModal: true,
    price: "₹9,999",
    location: "Uttarakhand",
    images: [trekking1, trekking2, trekking3],
    highlights: [
      "Snow Trek",
      "Pine Forests",
      "Summit Climb",
      "Winter Camping"
    ],
    inclusions: [
      "Guides",
      "Camping Gear",
      "Meals",
      "Permits"
    ],
    fullDescription:
      "Experience the magic of a winter wonderland on the Kedarkantha trek. Walk through snow-covered pine forests, camp in frozen clearings, and summit a peak that offers stunning 360-degree views of the Himalayas. Ideal for beginners, this trek provides the thrill of snow trekking without extreme difficulty, making it one of India's most loved winter adventures."
  }

  // You can continue similar style for remaining treks if needed
];

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Sticky Hero Background */}
      <HeroSection 
        images={trekImages}
        title="Trekking"
        subtitle="Step into the wild and discover spectacular trails carved by nature. From snow-capped peaks to lush valleys, your adventure starts here."
      />

      {/* Main Content Area - Modernized Overlay - COMPACT SPACING */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 md:px-6 -mt-16 md:-mt-34 pt-40 ">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/40 mb-10 pt-0 mt-0">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 italic tracking-tighter">Epic Trails Await</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Our trekking programs are designed to provide both challenge and serenity. Explore our carefully curated journeys across the Himalayas.
            </p>
          </div>

          {/* Integrated 3-Column Grid - Balanced Layout */}
          
          <div className="bg-gray-50/50 rounded-[2rem] border border-dashed border-gray-200 overflow-hidden">
            <Trekking_cards
              items={themes}
              heading={
                <>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-00 mb-4 italic tracking-tighter">Choose Your Journey</h2>
                  <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
                </>
              }
              onOpenModal={setSelectedTrek}
            />
            
          </div>
        </div>
      </div>

      <TrekModal 
        trek={selectedTrek} 
        isOpen={!!selectedTrek} 
        onClose={() => setSelectedTrek(null)} 
      />
    </div>
  );
}
