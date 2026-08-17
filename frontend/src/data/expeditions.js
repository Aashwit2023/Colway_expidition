import friendship_peak from '../assets/friendship_peak.jpg';
import adventure from '../assets/adventure.jpg';
import bali_pass from '../assets/bali_pass.jpg';
import trekking33 from '../assets/trekking33.jpg';
import everest_base_camp from '../assets/everest_base_camp.jpg';

export const expeditions = [
  {
    image: friendship_peak,
    slug: "friendship-peak",
    days: "7 days",
    difficulty: "alpine pd",
    title: "Friendship Peak",
    description: "Friendship Peak (5,289m) is one of the most popular mountaineering peaks in the Indian Himalayas. Located in the Pir Panjal Range near Manali, it is an ideal first semi-technical climb.",
    hasModal: true,
    price: "₹34,999",
    location: "Pir Panjal, Himachal Pradesh",
    images: [friendship_peak, trekking33, adventure],
    highlights: [
      "Glacier Travel",
      "Snow Summit Push",
      "Semi-Technical Climbing",
      "Spectacular Pir Panjal Views"
    ],
    dates: {
      "October-2026": [
        { date: "Oct 4 - Oct 11", seats: 8 },
        { date: "Oct 12 - Oct 19", seats: 12 },
        { date: "Oct 20 - Oct 27", seats: 6 }
      ]
    },
    inclusions: [
      "Premium hotel accommodation in Manali on a double-sharing basis",
      "Breakfast included during hotel stay",
      "Comfortable triple-sharing expedition tents during the climb",
      "High altitude sleeping bag and mattress",
      "Dining and toilet tent facilities",
      "All meals during the expedition (breakfast, lunch, tea, dinner)",
      "All required forest, environmental, and climbing permits",
      "Certified mountain guides (1 guide for every 2 climbers)",
      "Technical climbing gear: snow boots, crampons, ice axe, harness, helmet, rope systems",
      "First aid kit, emergency medical oxygen cylinder, and safety backup"
    ],
    nonincludions: [
      "Personal luggage portage during the expedition",
      "Travel insurance of any kind",
      "Any personal expenses or gear not listed in inclusions",
      "Meals during road journeys to/from Manali"
    ],
    fullDescription:
      "Friendship Peak stands at 5,289 meters (17,352 feet) above sea level in the Pir Panjal Range near Manali, Himachal Pradesh. The summit offers wide views of Hanuman Tibba, Shitidhar, Indrasan, Deo Tibba, and the surrounding Himalayan landscape. The route combines alpine meadows, moraine sections, snow slopes, and glacier travel. Climbers use crampons, an ice axe, ropes, and basic glacier safety systems under the supervision of experienced guides. A dedicated acclimatization and training day ensures you are well-prepared for the final summit day.",
    sidebarInclusions: [
      "+ ₹240 Expedition Insurance",
      "+ ₹1,500 Local Transport (to & from trailhead)"
    ],
    addOns: [
      "₹5,000 Offloading Service (per person)",
      "₹10,000 Personal Guide (1:1 support)"
    ],
    info: [
      { label: "Difficulty", value: "Alpine PD / Moderate", icon: "difficulty" },
      { label: "Duration", value: "7 days / 30 km", icon: "duration" },
      { label: "Highest Altitude", value: "17,352 ft (5289m)", icon: "altitude" },
      { label: "Basecamp", value: "Dhundi / Bakarthach", icon: "location" },
      { label: "Suitable For", value: "Fit Trekkers & Aspiring Climbers", icon: "users" },
      { label: "Trail Type", value: "Glacier & Snow Climb", icon: "trail" },
      { label: "Season", value: "May-Jun / Sep-Oct", icon: "season" },
      { label: "Start/End Point", value: "Manali, HP", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali (2100m)",
        details: [
          "Arrive in Manali and check into a comfortable hotel on a double-sharing basis.",
          "Meet the expedition team, attend the briefing, complete gear checks, and discuss the expedition plan.",
          "Accommodation: Hotel, double sharing."
        ]
      },
      {
        day: 2,
        title: "Manali to Dhundi Drive – Trek to Bakarthach (3300m)",
        details: [
          "After breakfast, depart Manali at 9:00 AM and drive for approximately one hour to Dhundi.",
          "Begin the trek through alpine meadows and river valleys to Bakarthach.",
          "Drive duration: 1 hour. Trek duration: 4 hours. Altitude gain: 1200m.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Bakarthach to Lady Leg Base Camp (3900m)",
        details: [
          "Trek gradually towards Lady Leg, the main base camp for Friendship Peak.",
          "Enjoy glacier views and surrounding peaks as the team gains altitude.",
          "Trek duration: 3-4 hours. Altitude gain: 600m.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Acclimatization & Mountaineering Training",
        details: [
          "A full day dedicated to acclimatization and technical training at base camp.",
          "Participants practice crampon use, ice axe techniques, rope travel, self-arrest, and glacier safety procedures.",
          "Training is conducted under the supervision of experienced mountaineering guides.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Trek to Summit Camp (4500m)",
        details: [
          "Move higher towards the summit camp through moraine sections and snow slopes.",
          "The route opens strong views of the surrounding Himalayan peaks.",
          "Trek duration: 4 hours.",
          "Accommodation: Summit Camp, triple sharing."
        ]
      },
      {
        day: 6,
        title: "Summit Friendship Peak (5289m) – Return to Base Camp",
        details: [
          "Start the summit push early in the morning and climb through snow and glacier terrain.",
          "From the summit, take in panoramic views of the Pir Panjal and Greater Himalayan ranges.",
          "Descend safely back to Lady Leg Base Camp after the summit attempt.",
          "Summit altitude: 5289m. Ascent time: about 8 hours. Descent time: about 4 hours.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 7,
        title: "Base Camp to Manali",
        details: [
          "After breakfast, begin the descent to Dhundi and drive back to Manali.",
          "The expedition concludes upon arrival in Manali.",
          "Trek duration: 5 hours. Drive duration: 1 hour.",
          "Accommodation: Not included."
        ]
      },
      {
        day: "Buffer",
        title: "Extra Buffer Day",
        details: [
          "One additional buffer day is included for bad weather, route conditions, or unforeseen circumstances.",
          "This improves summit chances while maintaining safety standards."
        ]
      }
    ]
  },
  {
    image: adventure,
    slug: "yunam-peak",
    days: "7 days",
    difficulty: "moderate",
    title: "Mt. Yunam",
    description: "Yunam Peak (6,111m) is an exceptional beginner-friendly 6000m summit. Set in the cold desert of Lahaul, it offers stunning views of Ladakh and the Chandra Bhaga range.",
    hasModal: true,
    price: "₹39,999",
    location: "Lahaul, Himachal Pradesh",
    images: [adventure, everest_base_camp, bali_pass],
    highlights: [
      "Non-Technical 6000m Peak",
      "Stunning Cold Desert Views",
      "Baralacha La Crossing",
      "High Altitude Endurance Challenge"
    ],
    dates: {
      "October-2026": [
        { date: "Oct 10 - Oct 17", seats: 10 },
        { date: "Oct 18 - Oct 25", seats: 8 }
      ]
    },
    inclusions: [
      "2 nights hotel stay in Manali on double sharing basis with breakfast",
      "1 night hotel stay in Jispa on double sharing basis with dinner and breakfast",
      "Transportation from Manali to Bharatpur and return",
      "Triple sharing expedition tents during the expedition",
      "High altitude sleeping bag and mattress",
      "All meals during the expedition from Bharatpur onwards",
      "Kitchen and dining tent",
      "Professional certified mountain guides and support staff",
      "All forest and environmental permits",
      "Medical kit and oxygen backup",
      "Technical gear: harness, snow boots, crampons, ice axe, helmet, carabiners, ascender, descender, ropes"
    ],
    nonincludions: [
      "Lunch and dinner in Manali",
      "Personal mountain clothing and sleeping bag liners",
      "Travel and medical evacuation insurance",
      "Any personal expenses not specified"
    ],
    fullDescription:
      "Summit Yunam Peak (6,111m) on a 7-day non-technical mountaineering expedition from Manali through Jispa and Bharatpur. Perfect for fit trekkers attempting their first 6000m peak. Located near Baralacha La in Lahaul Valley, this peak serves as an excellent entry point into high-altitude climbing. It requires high physical fitness and endurance but has minimal technical difficulty.",
    sidebarInclusions: [
      "+ ₹240 Expedition Insurance",
      "+ ₹2,500 Highway Tolls & Permits"
    ],
    addOns: [
      "₹5,000 Backpack Offloading (per person)",
      "₹10,000 Personal Guide (1:1 climbing support)"
    ],
    info: [
      { label: "Difficulty", value: "Moderate / Non-Technical", icon: "difficulty" },
      { label: "Duration", value: "7 days / 25 km", icon: "duration" },
      { label: "Highest Altitude", value: "20,049 ft (6111m)", icon: "altitude" },
      { label: "Basecamp", value: "Bharatpur Camp (4700m)", icon: "location" },
      { label: "Suitable For", value: "Fit Trekkers & Endurance Athletes", icon: "users" },
      { label: "Trail Type", value: "Scree & Snow Slope Climb", icon: "trail" },
      { label: "Season", value: "July to September", icon: "season" },
      { label: "Start/End Point", value: "Manali, HP", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali (2050m)",
        details: [
          "Arrive in Manali and check into the hotel.",
          "Meet the expedition leader and team for document verification, briefing, and equipment check.",
          "Accommodation: Hotel, double sharing."
        ]
      },
      {
        day: 2,
        title: "Drive from Manali to Jispa (3200m)",
        details: [
          "Drive 95 km in 4-5 hours through Atal Tunnel into Lahaul Valley and continue to Jispa.",
          "Take a short 2-3 km acclimatization hike above the village.",
          "Accommodation: Hotel, double sharing."
        ]
      },
      {
        day: 3,
        title: "Drive from Jispa to Bharatpur Base Camp (4700m)",
        details: [
          "Drive 70 km in 2-3 hours across Baralacha La to reach Bharatpur Base Camp.",
          "Acclimatize to the sudden increase in altitude. Overnight at Base Camp.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Acclimatization Hike at Base Camp (4700m)",
        details: [
          "Complete an acclimatization hike of 3-4 km to a higher altitude.",
          "Focus on hydration, recovery, and technical gear familiarization.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Move to Summit Camp (5400m)",
        details: [
          "Trek approximately 4 km in around 4 hours through scree and snow slopes to establish Summit Camp.",
          "Accommodation: Summit Camp, triple sharing."
        ]
      },
      {
        day: 6,
        title: "Summit Yunam Peak (6111m) and Return to Base Camp",
        details: [
          "Begin around midnight and climb gradually through scree slopes and snow sections to reach the summit.",
          "The round trip is approximately 12 km and takes 10-12 hours.",
          "Descend to Summit Camp and continue to Base Camp.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 7,
        title: "Bharatpur to Manali",
        details: [
          "After breakfast, drive approximately 165 km in 6-7 hours back to Manali.",
          "Celebrate the successful completion of the expedition with the team."
        ]
      }
    ]
  },
  {
    image: bali_pass,
    slug: "deo-tibba",
    days: "13 days",
    difficulty: "difficult",
    title: "Mt. Deo Tibba",
    description: "Deo Tibba (6,001m) is an iconic alpine peak in Pir Panjal. Offering a technical and challenging climb, it features glacier sections, crevasses, and steep snow walls.",
    hasModal: true,
    price: "₹64,999",
    location: "Pir Panjal, Himachal Pradesh",
    images: [bali_pass, everest_base_camp, trekking33],
    highlights: [
      "Technical Alpine Ascent",
      "Glacier & Crevasse Traversing",
      "Camp at Duhangan Col (5400m)",
      "Excellent Preparation for 7000m Peaks"
    ],
    dates: {
      "October-2026": [
        { date: "Oct 1 - Oct 13", seats: 6 },
        { date: "Oct 15 - Oct 27", seats: 5 }
      ]
    },
    inclusions: [
      "2 nights hotel stay in Manali on double sharing basis with breakfast",
      "Transportation from Manali to Khanol and return",
      "Comfortable triple sharing expedition tents during the climb",
      "High altitude sleeping bag and mattress",
      "All meals during the expedition (kitchen and dining tent support)",
      "Professional certified mountain guides, high altitude porters, and kitchen staff",
      "All forest, wildlife, and climbing permits",
      "Medical kit, safety oxygen backup, and satellite/radio communication gear",
      "Climbing equipment: harness, mountaineering boots, crampons, ice axe, helmet, ascenders, descenders, ropes, snow anchors"
    ],
    nonincludions: [
      "Lunch and dinner in Manali",
      "Personal clothing, mountaineering gear, and backpack",
      "Travel insurance and medical emergency coverage",
      "Tips for guides and support staff"
    ],
    fullDescription:
      "Deo Tibba (6,001m), also referred to as Mt. Dev Dibba, is one of the most prominent peaks in Kullu Valley, offering a classic alpine climbing experience. The ascent crosses meadows, moraines, glaciers, and remote valleys. Climbers navigate crevasse fields and climb steep snow walls to Duhangan Col, establishing a high camp for the final summit push. It serves as an excellent technical preparation peak for 7000-meter objectives.",
    sidebarInclusions: [
      "+ ₹500 Climb Permit Charges",
      "+ ₹240 Expedition Insurance"
    ],
    addOns: [
      "₹8,000 Offloading Service (per person)",
      "₹15,000 Personal Climbing Porter (1:1 support)"
    ],
    info: [
      { label: "Difficulty", value: "Technical / Difficult", icon: "difficulty" },
      { label: "Duration", value: "13 days / 55 km", icon: "duration" },
      { label: "Highest Altitude", value: "19,688 ft (6001m)", icon: "altitude" },
      { label: "Basecamp", value: "Tenta Base Camp (4500m)", icon: "location" },
      { label: "Suitable For", value: "Experienced Alpine Trekkers", icon: "users" },
      { label: "Trail Type", value: "Glacier & Crevasse Traversing", icon: "trail" },
      { label: "Season", value: "May-June & Sep-October", icon: "season" },
      { label: "Start/End Point", value: "Manali, HP", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali (2050m)",
        details: [
          "Arrive in Manali and check in to the hotel.",
          "Complete expedition briefing, document verification, and full gear check. Overnight in Manali."
        ]
      },
      {
        day: 2,
        title: "Drive to Khanol and Trek to Chikka (3100m)",
        details: [
          "Drive 1 hour to Khanol, then trek 8 km through forests and meadows to Chikka.",
          "Trek time: 4-5 hours.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Chikka to Seri (3800m)",
        details: [
          "Trek 9 km through alpine meadows and river crossings to Seri.",
          "Trek time: 6-7 hours.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Seri to Tenta Base Camp (4500m)",
        details: [
          "Trek 7 km in 5-6 hours as the trail enters glacial terrain to Tenta Base Camp.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Acclimatization at Base Camp and Load Ferry",
        details: [
          "Acclimatization hike and load ferry toward High Camp.",
          "Practice crampon walking, ice axe techniques, rope handling, and self-arrest.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 6,
        title: "Move to High Camp (5100m)",
        details: [
          "Move 4 km to High Camp through glacier sections.",
          "Ascent time: 4-5 hours.",
          "Accommodation: High Camp, triple sharing."
        ]
      },
      {
        day: 7,
        title: "Move to Summit Camp, Duhangan Col (5400m)",
        details: [
          "Cross snowfields and establish Summit Camp at Duhangan Col.",
          "Distance: 5 km. Trek time: 5-6 hours.",
          "Accommodation: Summit Camp, triple sharing."
        ]
      },
      {
        day: 8,
        title: "Rest and Acclimatization at Duhangan Col",
        details: [
          "Complete rest, hydration, and final summit preparation at Summit Camp.",
          "Accommodation: Summit Camp, triple sharing."
        ]
      },
      {
        day: 9,
        title: "Summit Deo Tibba (6001m) and Return to Summit Camp",
        details: [
          "Midnight summit push to Deo Tibba.",
          "The round trip is around 10 km and takes 12-14 hours. Descend to Summit Camp.",
          "Accommodation: Summit Camp, triple sharing."
        ]
      },
      {
        day: 10,
        title: "Summit Camp to Tenta Base Camp",
        details: [
          "Descend 9 km to Tenta Base Camp. Trek time: 5-6 hours.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 11,
        title: "Base Camp to Chikka",
        details: [
          "Trek 16 km back to Chikka. This is a long descent of about 7-8 hours.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 12,
        title: "Chikka to Khanol and Drive to Manali",
        details: [
          "Trek 8 km to Khanol and drive 1 hour back to Manali.",
          "Accommodation: Hotel, double sharing."
        ]
      },
      {
        day: 13,
        title: "Departure from Manali",
        details: [
          "Expedition ends after departure from Manali."
        ]
      },
      {
        day: "Buffer",
        title: "Buffer Day",
        details: [
          "One additional buffer day is reserved in case of bad weather or unfavorable mountain conditions."
        ]
      }
    ]
  }
];
