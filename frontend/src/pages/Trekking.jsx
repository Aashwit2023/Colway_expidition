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
      image: trekking1,
      days: "5 days",
      difficulty: "easy-moderate",
      title: "Sar Pass Trek",
      description: "A beginner-friendly trek through forests, meadows, and snow-covered trails in Parvati Valley.",
      hasModal: true,
      price: "₹9,499",
      location: "Kasol, Himachal Pradesh",
      images: [trekking1, trekking2, trekking3],
      highlights: [
        "Snow Trails",
        "Parvati Valley Views",
        "Forest Camping",
        "Easy Summit Experience"
      ],
      inclusions: ["Guides", "Camping Gear", "Meals", "Permits"],
      fullDescription:
        "The Sar Pass Trek is an ideal introduction to Himalayan trekking. Starting from Kasol, the trail winds through dense pine forests, scenic meadows, and seasonal snowfields. Trekkers experience a gradual altitude gain, making it comfortable yet adventurous. The summit rewards you with panoramic views of Parvati Valley, while the descent through snow adds an element of fun. It is perfect for beginners looking for a balanced mix of challenge and natural beauty.",
      info: [
        { label: "Trek Difficulty", value: "Easy-Moderate", icon: "difficulty" },
        { label: "Trek Duration", value: "5 days / 25 km", icon: "duration" },
        { label: "Highest Altitude", value: "13,500 ft", icon: "altitude" },
        { label: "Suitable For", value: "10 to 65 years", icon: "users" },
        { label: "Basecamp", value: "Kasol, Himachal Pradesh", icon: "location" },
        { label: "Trail Type", value: "Snow trek", icon: "trail" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/ End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: trekking2,
      days: "8 days",
      difficulty: "moderate-difficult",
      title: "Buran Ghati Trek",
      description: "An adventurous trek featuring lush valleys, high passes, and a thrilling descent.",
      hasModal: true,
      price: "₹14,999",
      location: "Himachal Pradesh",
      images: [trekking2, trekking3, trekking1],
      highlights: [
        "Rappelling Experience",
        "Alpine Meadows",
        "Village Trails",
        "Snow Pass Crossing"
      ],
      inclusions: [
        "Food as per menu on the trek",
        "Forest Permits/Camping Charges, if any (upto the amount charged for Indian nationals)",
        "Tents, Sleeping bags, Sleeping mats",
        "Safety Equipment includes static rescue rope, seat harness, carabiners, pulleys",
        "Trek guide, cook, helpers, and porters for carrying common supplies",
        "Mountaineering course certified Trek Leader with Wilderness Emergency Responder & Rescue course from NIM Uttarkashi"
      ],
      nonincludions: [
        "Portage personal luggage during the trek",
        "Cost of any kind of Travel insurance",
        "Any expense of personal nature",
        "Any expense not specified in the inclusions list",
        "Meals during road journeys"
      ],
      fullDescription:
        "Buran Ghati Trek offers a diverse Himalayan experience with ever-changing landscapes. The trail passes through charming villages, dense forests, and wide meadows before reaching the high-altitude pass. The highlight is the thrilling descent, often involving rappelling on snow walls. This trek is ideal for those seeking a mix of scenic beauty and adventure without extreme technical difficulty.",
      info: [
        { label: "Trek Difficulty", value: "Moderate-Difficult", icon: "difficulty" },
        { label: "Trek Duration", value: "8 days / 40.5 km", icon: "duration" },
        { label: "Highest Altitude", value: "15,000 ft", icon: "altitude" },
        { label: "Suitable For", value: "12 to 62 years", icon: "users" },
        { label: "Basecamp", value: "Janglik, Himachal Pradesh", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: trekking3,
      days: "7 days",
      difficulty: "moderate-difficult",
      title: "Rupin Pass Trek",
      description: "A scenic crossover trek known for waterfalls, hanging villages, and snow bridges.",
      hasModal: true,
      price: "₹15,999",
      location: "Uttarakhand",
      images: [trekking3, trekking1, trekking2],
      highlights: [
        "Waterfall Camps",
        "Snow Bridges",
        "Hanging Villages",
        "Pass Crossing"
      ],
      inclusions: ["Guides", "Gear", "Meals", "Permits"],
      fullDescription:
        "Rupin Pass Trek is one of the most dynamic treks in the Himalayas. Each day presents a new landscape, from forest trails and riverside camps to waterfalls and snowfields. The climb to the pass is both challenging and rewarding, offering stunning high-altitude views. This trek is perfect for those who enjoy variety and dramatic scenery.",
      info: [
        { label: "Trek Difficulty", value: "Moderate-Difficult", icon: "difficulty" },
        { label: "Trek Duration", value: "7 days / 38 km", icon: "duration" },
        { label: "Highest Altitude", value: "15,100 ft", icon: "altitude" },
        { label: "Suitable For", value: "12 to 60 years", icon: "users" },
        { label: "Basecamp", value: "Dhaula, Uttarakhand", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: baliPassCamp,
      days: "8 days",
      difficulty: "difficult",
      title: "Bali Pass Trek",
      description: "A demanding high-altitude trek with glacier sections and panoramic Himalayan views.",
      hasModal: true,
      price: "₹17,999",
      location: "Uttarakhand",
      images: [baliPassCamp, trekking2, trekking3],
      highlights: [
        "High Pass Crossing",
        "Glacier Trails",
        "Snow Fields",
        "Remote Campsites"
      ],
      inclusions: ["Expert Guides", "Meals", "Gear", "Permits"],
      fullDescription:
        "Bali Pass Trek is a challenging expedition suited for experienced trekkers. The route connects Har Ki Dun Valley to Yamunotri and involves steep climbs, glacier crossings, and rugged terrain. Along the way, trekkers witness spectacular views of Swargarohini peaks and untouched Himalayan wilderness. It offers both physical challenge and unmatched scenic rewards.",
      info: [
        { label: "Trek Difficulty", value: "Difficult", icon: "difficulty" },
        { label: "Trek Duration", value: "8 days / 45 km", icon: "duration" },
        { label: "Highest Altitude", value: "16,000 ft", icon: "altitude" },
        { label: "Suitable For", value: "18 to 55 years", icon: "users" },
        { label: "Basecamp", value: "Sukki Top, Uttarakhand", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: adventure,
      days: "5 days",
      difficulty: "easy-moderate",
      title: "Hampta Pass Trek",
      description: "A beautiful crossover trek from green valleys to the barren landscapes of Spiti.",
      hasModal: true,
      price: "₹8,999",
      location: "Himachal Pradesh",
      images: [adventure, trekking2, trekking3],
      highlights: [
        "Valley Transition",
        "River Crossings",
        "Open Meadows",
        "Spiti Landscapes"
      ],
      inclusions: ["Guides", "Meals", "Gear", "Permits"],
      fullDescription:
        "Hampta Pass Trek is known for its dramatic contrast in landscapes. Starting from the lush green Kullu Valley, the trail gradually leads into the stark and barren terrain of Spiti. The trek includes river crossings, scenic campsites, and a moderate pass climb. It is ideal for beginners and intermediate trekkers seeking a visually rewarding experience.",
      info: [
        { label: "Trek Difficulty", value: "Easy-Moderate", icon: "difficulty" },
        { label: "Trek Duration", value: "5 days / 28 km", icon: "duration" },
        { label: "Highest Altitude", value: "12,500 ft", icon: "altitude" },
        { label: "Suitable For", value: "10 to 65 years", icon: "users" },
        { label: "Basecamp", value: "Jobra, Himachal Pradesh", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: culture,
      days: "7 days",
      difficulty: "moderate",
      title: "Kashmir Great Lakes Trek",
      description: "A breathtaking trek across alpine lakes, meadows, and high mountain passes.",
      hasModal: true,
      price: "₹16,499",
      location: "Kashmir",
      images: [culture, trekking1, trekking2],
      highlights: [
        "Alpine Lakes",
        "Flower Meadows",
        "Mountain Views",
        "Peaceful Camps"
      ],
      inclusions: ["Guides", "Meals", "Camping", "Permits"],
      fullDescription:
        "The Kashmir Great Lakes Trek is considered one of the most beautiful treks in India. The trail takes you across multiple high-altitude lakes surrounded by snow-capped peaks and vast meadows. Each day reveals a new landscape, making the journey visually captivating. It is perfect for trekkers who want a balance of comfort and stunning natural beauty.",
      info: [
        { label: "Trek Difficulty", value: "Moderate", icon: "difficulty" },
        { label: "Trek Duration", value: "7 days / 35 km", icon: "duration" },
        { label: "Highest Altitude", value: "14,500 ft", icon: "altitude" },
        { label: "Suitable For", value: "12 to 60 years", icon: "users" },
        { label: "Basecamp", value: "Sonemar, Kashmir", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: trekking33,
      days: "7 days",
      difficulty: "moderate",
      title: "Pin Bhaba Pass Trek",
      description: "A unique trek showcasing the transition from lush greenery to cold desert terrain.",
      hasModal: true,
      price: "₹15,499",
      location: "Himachal Pradesh",
      images: [trekking33, trekking2, trekking3],
      highlights: [
        "Kinnaur to Spiti",
        "River Trails",
        "Wide Meadows",
        "Desert Landscapes"
      ],
      inclusions: ["Guides", "Meals", "Gear", "Permits"],
      fullDescription:
        "Pin Bhaba Pass Trek offers one of the most dramatic landscape transitions in the Himalayas. The journey begins in the green valleys of Kinnaur and gradually moves into the dry, rugged terrain of Spiti. The contrast in scenery, combined with moderate difficulty, makes it a favorite among trekkers seeking variety.",
      info: [
        { label: "Trek Difficulty", value: "Moderate", icon: "difficulty" },
        { label: "Trek Duration", value: "7 days / 42 km", icon: "duration" },
        { label: "Highest Altitude", value: "14,750 ft", icon: "altitude" },
        { label: "Suitable For", value: "12 to 60 years", icon: "users" },
        { label: "Basecamp", value: "Kaza, Himachal Pradesh", icon: "location" },
        { label: "Accommodation Type", value: "Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    },

    {
      image: everest_base_camp,
      days: "12 days",
      difficulty: "difficult",
      title: "Everest Base Camp Trek",
      description: "A legendary trek to the base of Mount Everest through Sherpa villages and valleys.",
      hasModal: true,
      price: "₹45,000",
      location: "Nepal",
      images: [everest_base_camp, trekking1, trekking3],
      highlights: [
        "Everest Views",
        "Sherpa Culture",
        "High Altitude",
        "Base Camp"
      ],
      inclusions: ["Guides", "Stay", "Meals", "Permits"],
      fullDescription:
        "The Everest Base Camp Trek is a world-famous journey through the Khumbu region of Nepal. Trekkers pass through traditional Sherpa villages, monasteries, and scenic valleys while gradually ascending to base camp. The experience combines cultural immersion with breathtaking views of the world's highest peaks, making it a truly unforgettable adventure.",
      info: [
        { label: "Trek Difficulty", value: "Difficult", icon: "difficulty" },
        { label: "Trek Duration", value: "12 days / 65 km", icon: "duration" },
        { label: "Highest Altitude", value: "17,598 ft", icon: "altitude" },
        { label: "Suitable For", value: "15 to 60 years", icon: "users" },
        { label: "Basecamp", value: "Lukla, Nepal", icon: "location" },
        { label: "Accommodation Type", value: "Lodges & Tents", icon: "tent" },
        { label: "Season", value: "June to September", icon: "season" },
        { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      ]
    }
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
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 italic tracking-tighter">Choose Your Journey</h2>
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
