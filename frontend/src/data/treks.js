import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';
import trekking3 from '../assets/trekking3.jpg';
import trekking33 from '../assets/trekking33.jpg';
import adventure from "../assets/adventure.jpg";
import culture from "../assets/culture.jpg";
import cultural from "../assets/cultural.jpg";
import baliPassCamp from "../assets/bali_pass.jpg";
import everest_base_camp from "../assets/everest_base_camp.jpg";
import buran_ghati from "../assets/buran_ghati.jpg";
import friendship from "../assets/friendship.jpg";
import kailash from "../assets/kailash.jpg";

export const defaultWinterTrekDates = {
  "October-2026": [
    { date: "Oct 31 - Nov 4", seats: 12 }
  ],
  "November-2026": [
    { date: "Nov 6 - Nov 10", seats: 15 },
    { date: "Nov 7 - Nov 11", seats: 10 },
    { date: "Nov 13 - Nov 17", seats: 18 },
    { date: "Nov 21 - Nov 25", seats: 14 },
    { date: "Nov 28 - Dec 5", seats: 16 }
  ]
};

export const defaultTrekCarryDetails = [
  {
    category: "Clothing & Layering",
    icon: "Shirt",
    items: [
      "Thermal base layer top & bottom (2 pairs)",
      "Fleece jacket / warm sweater",
      "Padded insulated down jacket (-10°C rated)",
      "Waterproof & windproof shell jacket / poncho",
      "Quick-dry trekking pants (2-3 pairs)",
      "Warm woolen beanie, sun protection cap, and neck buff",
      "Waterproof warm gloves & inner fleece gloves",
      "Trekking socks (4-5 pairs) + thick woolen sleeping socks",
      "UV 400 sunglasses with dark tint"
    ]
  },
  {
    category: "Footwear & Gear",
    icon: "Footprints",
    items: [
      "High-ankle waterproof trekking shoes with good grip",
      "50-60L Backpack with waterproof rain cover",
      "15-20L Small daypack for essentials during daily hikes",
      "Pair of sturdy trekking poles with rubber tips and snow baskets",
      "LED Headlamp or torch with extra batteries",
      "1L Insulated water bottle + 1L reusable hydration bottle",
      "Waterproof pouch/dry bags for electronic devices"
    ]
  },
  {
    category: "Personal Essentials & Medical",
    icon: "ShieldAlert",
    items: [
      "Sunscreen lotion (SPF 50+), lip balm with SPF, cold cream",
      "Quick-dry microfiber towel, biodegradable wet wipes & sanitiser",
      "Personal medical kit (Diamox, Paracetamol, Band-aids, ORS, antiseptic cream)",
      "Heavy-duty power bank (10,000–20,000 mAh)",
      "Original Government Photo ID proof and 2 photocopies",
      "Medical fitness certificate signed by a doctor"
    ]
  }
];

export const defaultTrekInclusions = [
  {
    category: "Stay & Meals",
    items: [
      "High-altitude dome camping tents on triple-sharing basis",
      "High-altitude sleeping bag (-10°C rated) and insulated foam mattress",
      "Separate dining tent, kitchen tent, and clean toilet tents",
      "All nutritious vegetarian meals: hot breakfast, trail lunch, evening tea & snacks, warm dinner"
    ]
  },
  {
    category: "Permits & Support",
    items: [
      "All forest entry permits, camping fees, and environmental charges",
      "Certified Himalayan trek leaders (NIM/HMI/ABVIMAS trained)",
      "Experienced local mountain guides, cook, and camp support staff",
      "Porter / mule support for carrying central camp equipment and food rations"
    ]
  },
  {
    category: "Safety & Equipment",
    items: [
      "Emergency medical first-aid kit and daily health / oxygen checkups",
      "Emergency oxygen cylinder and pulse oximeter",
      "Microspikes and gaiters during snow patches (if required)",
      "Trek completion certificate from Colway Expedition"
    ]
  }
];

export const defaultTrekExclusions = [
  "Transport to and from the starting basecamp/railhead",
  "Personal travel, trekking, and medical evacuation insurance",
  "Personal backpack offloading / porter charges (available as add-on)",
  "Meals during road journeys to and from the basecamp",
  "Personal expenses such as packaged drinking water, snacks, soft drinks, laundry",
  "Any costs arising due to landslides, roadblocks, severe weather, or force majeure",
  "Tips and gratuities for guides, porters, and kitchen staff",
  "Any service or item not explicitly listed under inclusions"
];

export const themes = [
  // 1. Kedarkantha Winter Trek — Uttarakhand
  {
    image: friendship,
    slug: "kedarkantha-winter-trek",
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Kedarkantha Winter Trek",
    description: "India's premier winter snow trek in Uttarakhand, famous for summit sunrise views over 13 Himalayan peaks and the frozen Juda Ka Talab lake.",
    hasModal: true,
    price: "₹8,499",
    location: "Sankri, Uttarakhand",
    images: [friendship, trekking1, baliPassCamp, adventure],
    highlights: [
      "Summit Sunrise over 13 Himalayan Peaks (12,500 ft)",
      "Frozen Glacial Lake of Juda Ka Talab",
      "Dense Oak & Pine Forests in Govind National Park",
      "Thrilling 360-Degree Snow Slope Descents"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Kedarkantha (12,500 ft) is widely celebrated as the best winter snow trek in the Indian Himalayas. Located in the Govind Wildlife Sanctuary of Uttarkashi, the trek takes you through enchanting pine forests, peaceful meadows, and frozen ponds before opening up to an exhilarating 360-degree summit. On the summit, trekkers witness an amphitheater of Himalayan giants including Swargarohini, Bandarpoonch, Black Peak, and the Gangotri ranges.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,500 Transport (Dehradun to Sankri return)"
    ],
    addOns: [
      "+ Microspikes & Gaiters Included",
      "₹2,500 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Duration", value: "5 days / 20 km", icon: "duration" },
      { label: "Highest Altitude", value: "12,500 ft (3810m)", icon: "altitude" },
      { label: "Basecamp", value: "Sankri, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Beginners & Families", icon: "users" },
      { label: "Trail Type", value: "Snow Summit & Ridge Trek", icon: "trail" },
      { label: "Season", value: "Oct to April (Winter Snow)", icon: "season" },
      { label: "Start/End Point", value: "Dehradun, UK", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri (1950m)",
        details: [
          "Drive 210 km (8-9 hours) alongside the Yamuna and Tons rivers through Mussoorie, Purola, and Mori to Sankri.",
          "Check into guesthouse/homestay. Evening trek briefing and gear verification.",
          "Accommodation: Homestay in Sankri."
        ]
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab (2775m)",
        details: [
          "Trek 4 km (4-5 hours) through dense pine forests and maple trees to reach the famous frozen lake of Juda Ka Talab.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Juda Ka Talab to Kedarkantha Base Camp (3125m)",
        details: [
          "Trek 3.5 km (3 hours) through open meadows with grand views of Bandarpoonch and Swargarohini to Base Camp.",
          "Afternoon rest, snow craft training, and early summit briefing.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Summit: Kedarkantha (3810m) – Descend to Hargaon (2645m)",
        details: [
          "Early morning 3:30 AM summit push across the snow ridge. Reach summit for breathtaking sunrise over 13 Himalayan peaks.",
          "Descend to Base Camp for hot breakfast, then continue descent to Hargaon campsite (6 km / 6-7 hours total).",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Hargaon to Sankri – Drive to Dehradun",
        details: [
          "Trek 6 km (3 hours) down through pine woods to Sankri. Board vehicles and drive back to Dehradun railway station."
        ]
      }
    ]
  },

  // 2. Brahmatal Snow Trek — Uttarakhand
  {
    image: baliPassCamp,
    slug: "brahmatal-snow-trek",
    days: "6 days",
    difficulty: "moderate",
    title: "Brahmatal Snow Trek",
    description: "A breathtaking winter snow trek in Uttarakhand featuring frozen alpine lakes and close-up views of Mt. Trishul (7,120m) and Mt. Nanda Ghunti.",
    hasModal: true,
    price: "₹9,499",
    location: "Lohajung, Uttarakhand",
    images: [baliPassCamp, trekking2, adventure, friendship],
    highlights: [
      "Frozen Alpine Lakes of Brahmatal & Bekaltal",
      "Face-to-Face Views of Mt. Trishul (7,120m) & Nanda Ghunti",
      "Snow-Covered Oak and Rhododendron Forests",
      "Magnificent High Ridge Snow Walks"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Brahmatal (12,250 ft) is one of Uttarakhand's most visually stunning winter treks. While most Himalayan trails are blocked by deep snow in winter, Brahmatal opens up with vast white ridges and crystalline frozen lakes. The trek offers an intimate, close-up encounter with Mt. Trishul (7,120m) and Mt. Nanda Ghunti, with views stretching across the Roopkund trail and the Western Himalayas.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹2,000 Transport (Rishikesh/Kathgodam to Lohajung)"
    ],
    addOns: [
      "+ Microspikes & Gaiters",
      "₹3,000 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Moderate", icon: "difficulty" },
      { label: "Duration", value: "6 days / 24 km", icon: "duration" },
      { label: "Highest Altitude", value: "12,250 ft (3734m)", icon: "altitude" },
      { label: "Basecamp", value: "Lohajung, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Fit Beginners & Photographers", icon: "users" },
      { label: "Trail Type", value: "Lake & Ridge Snow Trek", icon: "trail" },
      { label: "Season", value: "Nov to March", icon: "season" },
      { label: "Start/End Point", value: "Rishikesh / Kathgodam", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh / Kathgodam to Lohajung (2300m)",
        details: [
          "Drive 220 km (8-9 hours) along the Alaknanda and Pindar rivers through Devprayag and Karnaprayag to Lohajung.",
          "Accommodation: Guesthouse in Lohajung."
        ]
      },
      {
        day: 2,
        title: "Lohajung to Bekaltal (2950m)",
        details: [
          "Trek 6 km (4-5 hours) through rhododendron and oak forests to the quiet, snow-fringed lake of Bekaltal.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Bekaltal to Brahmatal Campsite (3180m)",
        details: [
          "Trek 7 km (5-6 hours) climbing out of the treeline into expansive snowfields with opening views of Mt. Trishul.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Brahmatal to Brahmatal Pass (3734m) – Tilandi / Khabekhal",
        details: [
          "Ascend to the frozen Brahmatal lake and continue up to Brahmatal Pass for awe-inspiring panoramic views of Trishul, Nanda Ghunti, and Chaukhamba.",
          "Descend to Tilandi/Khabekhal campsite (7.5 km / 6-7 hours).",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Khabekhal to Lohajung (2300m)",
        details: [
          "Trek 6.5 km (4 hours) through Wan and village trails back to Lohajung basecamp.",
          "Accommodation: Guesthouse in Lohajung."
        ]
      },
      {
        day: 6,
        title: "Lohajung to Rishikesh / Kathgodam",
        details: [
          "Drive back to Rishikesh/Kathgodam for your onward journey."
        ]
      }
    ]
  },

  // 3. Dayara Bugyal Winter Trek — Uttarakhand
  {
    image: buran_ghati,
    slug: "dayara-bugyal-winter-trek",
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Dayara Bugyal Winter Trek",
    description: "Experience the endless white snow meadows of Dayara Bugyal in Uttarakhand, framed by the majestic Bandarpoonch and Gangotri massifs.",
    hasModal: true,
    price: "₹8,999",
    location: "Raithal, Uttarakhand",
    images: [buran_ghati, trekking1, trekking33, culture],
    highlights: [
      "Vast Expanses of Rolling Snow Meadows (Bugyals)",
      "Breathtaking Views of Bandarpoonch, Draupadi Ka Danda & Srikanth",
      "Serene Forest Campsites at Gui & Chilapada",
      "Bakaria Top Summit Ridge Walk (12,057 ft)"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Dayara Bugyal is revered as one of the most picturesque high-altitude meadows in India. Spanning over 28 square kilometers, the meadows transform into an endless expanse of pristine white powdery snow during winter. The trail winds through dense oak forests and opens onto sweeping views of Bandarpoonch (6,316m), Kala Nag (Black Peak), and the Gangotri range.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,600 Transport (Dehradun to Raithal return)"
    ],
    addOns: [
      "+ Personal Tent Option",
      "₹2,800 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Duration", value: "5 days / 22 km", icon: "duration" },
      { label: "Highest Altitude", value: "12,057 ft (3675m)", icon: "altitude" },
      { label: "Basecamp", value: "Raithal, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Beginners & Nature Lovers", icon: "users" },
      { label: "Trail Type", value: "Alpine Meadow Snow Trek", icon: "trail" },
      { label: "Season", value: "Nov to April", icon: "season" },
      { label: "Start/End Point", value: "Dehradun, UK", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Raithal Village (2250m)",
        details: [
          "Drive 180 km (6-7 hours) along the Bhagirathi River through Uttarkashi to the scenic village of Raithal.",
          "Accommodation: Homestay in Raithal."
        ]
      },
      {
        day: 2,
        title: "Raithal to Gui Campsite (2900m)",
        details: [
          "Trek 4.5 km (4 hours) through green and golden oak woods to Gui, a picturesque clearing with traditional shepherd huts.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Gui to Dayara Bugyal & Bakaria Top (3675m) – Chilapada",
        details: [
          "Ascend into the vast snowy Bugyal and climb to the highest viewpoint at Bakaria Top (12,057 ft) for jaw-dropping panoramas.",
          "Descend to Chilapada campsite (7 km / 6 hours).",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Chilapada to Raithal Village",
        details: [
          "Trek 6 km (3-4 hours) down through forests back to Raithal village. Experience traditional Garhwali culture and food.",
          "Accommodation: Homestay in Raithal."
        ]
      },
      {
        day: 5,
        title: "Raithal to Dehradun Drive",
        details: [
          "Drive 180 km back to Dehradun. The trek concludes."
        ]
      }
    ]
  },

  // 4. Kuari Pass Winter Trek — Uttarakhand
  {
    image: adventure,
    slug: "kuari-pass-winter-trek",
    days: "6 days",
    difficulty: "easy-moderate",
    title: "Kuari Pass Winter Trek",
    description: "The legendary Lord Curzon Trail in Garhwal Himalayas offering close-up amphitheater views of India's second-highest summit, Mt. Nanda Devi (7,816m).",
    hasModal: true,
    price: "₹9,999",
    location: "Joshimath, Uttarakhand",
    images: [adventure, everest_base_camp, baliPassCamp, trekking2],
    highlights: [
      "Historic Lord Curzon Trail (12,516 ft)",
      "Unrivalled Views of Mt. Nanda Devi (7,816m) & Dronagiri",
      "Stunning Alpine Forests & Gorson Bugyal Snowfields",
      "Winter Wonderland Views of Kamet, Hathi-Ghodi Parbat"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Kuari Pass (12,516 ft) is an iconic Himalayan trek steeped in mountaineering history. Popularized by Lord Curzon in 1905, this trek in the Chamoli district provides the most dramatic, unobstructed views of Mt. Nanda Devi (7,816m), Mt. Dronagiri, Chaukhamba, and Kamet. Walking along snow ridges from Tali to Kuari Pass surrounded by frozen peaks is a bucket-list Himalayan experience.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹2,200 Transport (Rishikesh to Joshimath return)"
    ],
    addOns: [
      "+ Microspikes & Trekking Poles",
      "₹3,200 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Duration", value: "6 days / 33 km", icon: "duration" },
      { label: "Highest Altitude", value: "12,516 ft (3815m)", icon: "altitude" },
      { label: "Basecamp", value: "Joshimath, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Beginners to Experienced", icon: "users" },
      { label: "Trail Type", value: "Pass Crossing & Ridge Trek", icon: "trail" },
      { label: "Season", value: "Nov to April", icon: "season" },
      { label: "Start/End Point", value: "Rishikesh, UK", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Joshimath / Dhak (2050m)",
        details: [
          "Drive 250 km (8-9 hours) through Devprayag, Rudraprayag, and Chamoli to Joshimath / Dhak.",
          "Accommodation: Hotel / Guesthouse in Joshimath."
        ]
      },
      {
        day: 2,
        title: "Dhak to Gulling Top (2900m)",
        details: [
          "Trek 5 km (4 hours) through Tugasi village and oak forests to Gulling Top with views of Mt. Dronagiri.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Gulling Top to Tali Forest Camp (3350m)",
        details: [
          "Trek 6 km (4-5 hours) through dense rhododendron and deodar forests to Tali campsite.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Tali Camp to Kuari Pass Summit (3815m) – Return to Tali",
        details: [
          "Ascend to Khullara ridge and traverse the snow spine to reach the Kuari Pass summit for majestic views of Nanda Devi and Kamet (8 km / 6-7 hours).",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 5,
        title: "Tali Camp to Auli via Gorson Bugyal – Drive to Joshimath",
        details: [
          "Trek 8 km across the vast snow-covered Gorson Bugyal meadows to the ski resort of Auli, and drive to Joshimath.",
          "Accommodation: Hotel in Joshimath."
        ]
      },
      {
        day: 6,
        title: "Joshimath to Rishikesh Drive",
        details: [
          "Drive back to Rishikesh for departure."
        ]
      }
    ]
  },

  // 5. Chopta–Tungnath–Chandrashila Snow Trek — Uttarakhand
  {
    image: kailash,
    slug: "chopta-tungnath-chandrashila-trek",
    days: "4 days",
    difficulty: "easy-moderate",
    title: "Chopta–Tungnath–Chandrashila Snow Trek",
    description: "Summit the Chandrashila Peak (4,000m) and visit the world's highest Shiva temple at Tungnath, surrounded by 360-degree snow-clad Himalayan giants.",
    hasModal: true,
    price: "₹7,999",
    location: "Chopta, Uttarakhand",
    images: [kailash, friendship, trekking3, cultural],
    highlights: [
      "Chandrashila Peak Summit (4,000m / 13,123 ft)",
      "World's Highest Shiva Temple at Tungnath (3,680m)",
      "Crystal Reflection of Chaukhamba in Deoriatal Lake",
      "Stunning 360-Degree Views of Nanda Devi, Trishul & Kedarnath"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Chopta–Tungnath–Chandrashila is one of the most rewarding short winter treks in the world. Starting from the sacred Deoriatal lake reflecting Mt. Chaukhamba, the trail passes through Rohini Bugyal to Chopta (the 'Mini Switzerland of India'). From Chopta, trekkers climb snow-packed switchbacks to the 1,000-year-old Tungnath temple and continue to the summit of Chandrashila (Moon Rock) at 13,123 ft.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,800 Transport (Rishikesh to Chopta return)"
    ],
    addOns: [
      "+ Microspikes & Gaiters Included",
      "₹2,200 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Duration", value: "4 days / 20 km", icon: "duration" },
      { label: "Highest Altitude", value: "13,123 ft (4000m)", icon: "altitude" },
      { label: "Basecamp", value: "Chopta / Sari, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Beginners & Families", icon: "users" },
      { label: "Trail Type", value: "Summit & Sacred Lake Trek", icon: "trail" },
      { label: "Season", value: "All Year (Snow: Nov-April)", icon: "season" },
      { label: "Start/End Point", value: "Rishikesh / Haridwar", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Sari Village – Trek to Deoriatal (2438m)",
        details: [
          "Drive 190 km (6-7 hours) to Sari village and trek 2.5 km (1.5 hours) to the pristine alpine lake of Deoriatal.",
          "Accommodation: Campsite by the lake."
        ]
      },
      {
        day: 2,
        title: "Deoriatal to Chopta Basecamp (2680m)",
        details: [
          "Trek 14 km (6-7 hours) through rhododendron forests and Rohini Bugyal with constant views of Chaukhamba.",
          "Accommodation: Swiss tents in Chopta."
        ]
      },
      {
        day: 3,
        title: "Chopta to Tungnath Temple & Chandrashila Summit (4000m) – Return to Chopta",
        details: [
          "Early morning climb (5 km) on snow to Tungnath Temple (3,680m) and push to Chandrashila Summit (4,000m) for sweeping 360-degree Himalayan vistas.",
          "Descend back to Chopta basecamp (8 km / 5-6 hours total).",
          "Accommodation: Campsite / Guesthouse in Chopta."
        ]
      },
      {
        day: 4,
        title: "Chopta to Rishikesh / Haridwar Drive",
        details: [
          "Drive 200 km back to Rishikesh/Haridwar for onward journey."
        ]
      }
    ]
  },

  // 6. Gulabi Kantha Winter Trek — Uttarakhand
  {
    image: trekking33,
    slug: "gulabi-kantha-winter-trek",
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Gulabi Kantha Winter Trek",
    description: "An untouched, secluded winter snow paradise in the Yamuna Valley of Uttarakhand, offering pristine snow trails and panoramic views of Bandarpoonch and Kalindi.",
    hasModal: true,
    price: "₹8,499",
    location: "Hanuman Chatti, Uttarakhand",
    images: [trekking33, trekking2, baliPassCamp, friendship],
    highlights: [
      "Untouched & Less Crowded Alpine Snow Meadows",
      "Panoramic Views of Bandarpoonch, Kalindi & Shivalik Ranges",
      "Enchanting Snow Forests of Yamuna Valley",
      "Spectacular Gulabi Kantha Summit Ridge (12,500 ft)"
    ],
    dates: defaultWinterTrekDates,
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Gulabi Kantha (12,500 ft) is a hidden winter gem located in the Uttarkashi district of Uttarakhand. Unlike crowded commercial trails, Gulabi Kantha offers peaceful, untouched snow meadows and dense rhododendron forests in the Yamuna Valley. From the summit ridge, trekkers enjoy close, dramatic vistas of Mt. Bandarpoonch, Swargarohini, and the Great Himalayan ranges.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,600 Transport (Dehradun to Hanuman Chatti return)"
    ],
    addOns: [
      "+ Microspikes & Gaiters",
      "₹2,500 Backpack Offloading"
    ],
    info: [
      { label: "Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Duration", value: "5 days / 22 km", icon: "duration" },
      { label: "Highest Altitude", value: "12,500 ft (3810m)", icon: "altitude" },
      { label: "Basecamp", value: "Hanuman Chatti, Uttarakhand", icon: "location" },
      { label: "Suitable For", value: "Beginners & Peace Seekers", icon: "users" },
      { label: "Trail Type", value: "Pristine Snow Ridge Trek", icon: "trail" },
      { label: "Season", value: "Nov to April", icon: "season" },
      { label: "Start/End Point", value: "Dehradun, UK", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Hanuman Chatti (2400m)",
        details: [
          "Drive 175 km (6-7 hours) through Mussoorie, Nainbagh, and Barkot to Hanuman Chatti.",
          "Accommodation: Homestay in Hanuman Chatti."
        ]
      },
      {
        day: 2,
        title: "Hanuman Chatti to Kandola / Seema Campsite (2900m)",
        details: [
          "Trek 6 km (4-5 hours) through oak and pine forests with opening views of Yamuna Valley.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 3,
        title: "Kandola to Gulabi Kantha Ridge Summit (3810m) – Return to Kandola",
        details: [
          "Ascend 3.5 km through pristine snow meadows to the Gulabi Kantha ridge (12,500 ft) for jaw-dropping views of Bandarpoonch and Kalindi.",
          "Descend back to Kandola campsite (7 km / 6 hours total).",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 4,
        title: "Kandola to Hanuman Chatti",
        details: [
          "Trek 6 km down through the snow forest back to Hanuman Chatti.",
          "Accommodation: Homestay."
        ]
      },
      {
        day: 5,
        title: "Hanuman Chatti to Dehradun Drive",
        details: [
          "Drive back to Dehradun. The trek concludes."
        ]
      }
    ]
  },

  // Existing Classics
  {
    image: trekking1,
    slug: "sar-pass-trek",
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Sar Pass Trek",
    description: "A beginner-friendly trek through forests, meadows, and snow-covered trails in Parvati Valley.",
    hasModal: true,
    price: "₹9,499",
    location: "Kasol, Himachal Pradesh",
    images: [trekking1, trekking2, trekking3],
    highlights: [
      "Snow Slide from Sar Pass (13,800 ft)",
      "Enchanting Parvati Valley & Pine Forests",
      "Picturesque Alpine Campsites at Min Thach & Nagaru",
      "Panoramic Himalayan Ridge Views"
    ],
    dates: {
      "May-2026": [
        { date: "May 10 - May 14", seats: 12 },
        { date: "May 20 - May 24", seats: 16 }
      ],
      "June-2026": [
        { date: "Jun 5 - Jun 9", seats: 14 },
        { date: "Jun 15 - Jun 19", seats: 10 },
        { date: "Jun 24 - Jun 28", seats: 15 }
      ],
      "July-2026": [
        { date: "Jul 10 - Jul 14", seats: 18 },
        { date: "Jul 22 - Jul 26", seats: 12 }
      ],
      "August-2026": [
        { date: "Aug 5 - Aug 9", seats: 14 },
        { date: "Aug 18 - Aug 22", seats: 15 }
      ],
      "September-2026": [
        { date: "Sep 2 - Sep 6", seats: 12 },
        { date: "Sep 15 - Sep 19", seats: 14 }
      ],
      "October-2026": [
        { date: "Oct 5 - Oct 9", seats: 10 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "The Sar Pass Trek is an ideal introduction to Himalayan trekking. Starting from Kasol, the trail winds through dense pine forests, scenic meadows, and seasonal snowfields. Trekkers experience a gradual altitude gain, making it comfortable yet adventurous. The summit rewards you with panoramic views of Parvati Valley, while the descent through snow adds an element of fun. It is perfect for beginners looking for a balanced mix of challenge and natural beauty.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,500 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Sleeping Bags",
      "₹3,500 Backpack Offloading"
    ],
    info: [
      { label: "Trek Difficulty", value: "Easy-Moderate", icon: "difficulty" },
      { label: "Trek Duration", value: "5 days / 25 km", icon: "duration" },
      { label: "Highest Altitude", value: "13,500 ft", icon: "altitude" },
      { label: "Suitable For", value: "10 to 65 years", icon: "users" },
      { label: "Basecamp", value: "Kasol, Himachal Pradesh", icon: "location" },
      { label: "Trail Type", value: "Snow trek", icon: "trail" },
      { label: "Season", value: "June to September", icon: "season" },
      { label: "Start/ End Point", value: "Old bus stand, Shimla", icon: "location" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Kasol To Grahan Village",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Kasol: 1,700 m / 5,600 ft",
              "Grahan Stop: 2000 m / 6,500 ft",
              "Grahan Village: 2,350 m / 7,700 ft",
            ],
          },
          "Drive Distance: 8 km | 45 Minutes.",
          "Trek Distance: 2 km | 1 hr.",
        ],
      },
      {
        day: 2,
        title: "Grahan Village To Min Thach",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Grahan Village: 2,350 m / 7,700 ft",
              "Min Thatch: 3,400 m / 11,150 ft",
            ],
          },
          "Trek Distance: 8 km | 5-6 hr.",
        ],
      },
      {
        day: 3,
        title: "Min Thach To Nagaru",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Min Thatch: 3,400 m / 11,150 ft",
              "Nagaru: 3,800 m / 12,400 ft",
            ],
          },
          "Trek Distance: 5 km | 4-5 hr.",
        ],
      },
      {
        day: 4,
        title: "Nagaru To Biskeri Thach Via Sar Pass",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Nagaru: 3,800 m / 12,400 ft",
              "Sar Pass: 4,200 m / 13,600 ft",
              "Biskeri Thach: 3,350 m / 11,000 ft",
            ],
          },
          "Trek Distance: 12 km | 7-8 hr.",
        ],
      },
      {
        day: 5,
        title: "Biskeri Thach To Pulga And Drive Back To Kasol",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Biskeri Thach: 3,350 m / 11,000 ft",
              "Pulga: 2,400 m / 7,800 ft",
            ],
          },
          "Trek Distance: 6 km | 4-5 hr.",
          "Drive Distance: 18 km | 1 hr"
        ],
      },
    ],
  },
  {
    image: trekking2,
    slug: "buran-ghati-trek",
    days: "8 days",
    difficulty: "moderate-difficult",
    title: "Buran Ghati Trek",
    description: "An adventurous trek featuring lush valleys, high passes, and a thrilling descent.",
    hasModal: true,
    price: "₹16,750",
    location: "Himachal Pradesh",
    images: [trekking2, trekking3, trekking1],
    dates: {
      "May-2026": [
        { date: "May 15 - May 22", seats: 10 },
        { date: "May 25 - Jun 1", seats: 12 }
      ],
      "June-2026": [
        { date: "Jun 6 - Jun 13", seats: 14 },
        { date: "Jun 18 - Jun 25", seats: 8 }
      ],
      "September-2026": [
        { date: "Sep 5 - Sep 12", seats: 15 },
        { date: "Sep 19 - Sep 26", seats: 12 }
      ],
      "October-2026": [
        { date: "Oct 3 - Oct 10", seats: 10 }
      ]
    },
    highlights: [
      "Thrilling Rappelling Experience on Buran Pass (15,000 ft)",
      "Chandranahan High Altitude Sacred Glacial Lake",
      "Picturesque Ancient Village of Janglik",
      "Stunning River Campsites at Dayara & Litham"
    ],
    inclusions: [
      {
        category: "Stay & Food",
        items: [
          "Nutritious high-energy meals throughout the trek (Breakfast, Lunch, Evening Snacks, Dinner)",
          "High altitude dome camping tents, -10°C sleeping bags, and insulated mats",
          "Dining tent, kitchen tent, and clean toilet tents"
        ]
      },
      {
        category: "Permits & Professional Team",
        items: [
          "All Himachal forest permits and campsite entry charges",
          "Mountaineering course certified Trek Leader (NIM Uttarkashi certified)",
          "Technical team, professional cook, helpers, and safety marshals"
        ]
      },
      {
        category: "Technical & Safety Equipment",
        items: [
          "Static rescue ropes, seat harnesses, carabiners, and pulleys for the Buran Pass descent",
          "Medical first aid kits, stretcher, pulse oximeter, and emergency oxygen cylinders",
          "Trek Completion Certificate"
        ]
      }
    ],
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Buran Ghati Trek offers a diverse Himalayan experience with ever-changing landscapes. The trail passes through charming villages, dense forests, and wide meadows before reaching the high-altitude pass. The highlight is the thrilling descent, often involving rappelling on snow walls. This trek is ideal for those seeking a mix of scenic beauty and adventure without extreme technical difficulty.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹3,000 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Personal Tents",
      "₹4,800 Backpack Offloading"
    ],
    info: [
      { label: "Trek Difficulty", value: "Moderate-Difficult", icon: "difficulty" },
      { label: "Trek Duration", value: "8 days / 40.5 km", icon: "duration" },
      { label: "Highest Altitude", value: "15,000 ft", icon: "altitude" },
      { label: "Country", value: "India", icon: "country" },
      { label: "Suitable For", value: "12 to 62 years", icon: "users" },
      { label: "Basecamp", value: "Janglik, Himachal Pradesh", icon: "location" },
      { label: "Accommodation Type", value: "Tents", icon: "tent" },
      { label: "Season", value: "June to September", icon: "season" },
      { label: "Start/End Point", value: "Old bus stand, Shimla", icon: "location" },
      { label: "Trail Type", value: "Cross over with valley path", icon: "trail" },
      { label: "Distance", value: "37 km", icon: "distance" },
      { label: "Rail Head", value: "Kalka", icon: "rail" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimla to Janglik",
        details: [
          {
            label: "Altitude: ",
            values: [
              " 2,800 m / 9,200 ft.",
            ],
          },
          "Drive Distance: 160 km | 9-10 hr.",
        ],
      },
      {
        day: 2,
        title: "Janglik to Dayara Thatch",
        details: [
          {
            label: "Altitude: ",
            values: [
              "3,400 m / 11,150 ft.",
            ],
          },
          "Trek Distance: 6-7 km | 5-6 hr.",
        ],
      },
      {
        day: 3,
        title: "Dayara Thatch to Litham",
        details: [
          {
            label: "Altitude: ",
            values: [
              "3,600 m / 11,800 ft.",
            ],
          },
          "Trek Distance: 4-5 km | 3-4 hrs.",
        ],
      },
      {
        day: 4,
        title: "Acclimatization day, visit to Chandranahan Lake",
        details: [
          {
            label: "Altitude: ",
            values: [
              "4,023 m / 13,200 ft.",
            ],
          },
          "Trek Distance: 6 km Both side | 6-7 hr.",
        ],
      },
      {
        day: 5,
        title: "Litham to Dhunda",
        details: [
          {
            label: "Altitude: ",
            values: [
              "4,000 m / 13,100 ft.",
            ],
          },
          "Trek Distance: 4-5 km | 4-5 hrs.",
        ],
      },
      {
        day: 6,
        title: "Dhunda to Munirang (River camp) via Buran Ghati Pass",
        details: [
          {
            label: "Altitude: ",
            values: [
              "Munirang Campsite Altitude: 3,400 m / 11,100 ft.",
              "Buran Ghati Pass: 4,550 m / 15,000 ft.",
            ],
          },
          "Trek Distance: 8 km (10 - 11 hrs approx).",
        ],
      },
      {
        day: 7,
        title: "Munirang to Barua village & Drive to Shimla",
        details: [
          {
            label: "Altitude: ",
            values: [
              "2,300 m / 7,700 ft.",
            ],
          },
          "Trek Distance: 5-6 km | 2-3 hr.",
        ],
      },
    ],
  },
  {
    image: trekking3,
    slug: "rupin-pass-trek",
    days: "7 days",
    difficulty: "moderate-difficult",
    title: "Rupin Pass Trek",
    description: "A scenic crossover trek known for waterfalls, hanging villages, and snow bridges.",
    hasModal: true,
    price: "₹15,999",
    location: "Uttarakhand",
    images: [trekking3, trekking1, trekking2],
    highlights: [
      "Three-Stage Rupin Waterfall & Upper Waterfall Campsite",
      "Famous Rupin Pass Snow Gully Climb (15,250 ft)",
      "Hanging Village of Jhaka & Pine Forest Canopies",
      "Spectacular Crossover from Uttarakhand into Sangla, HP"
    ],
    dates: {
      "May-2026": [
        { date: "May 18 - May 24", seats: 12 },
        { date: "May 28 - Jun 3", seats: 10 }
      ],
      "June-2026": [
        { date: "Jun 8 - Jun 14", seats: 14 },
        { date: "Jun 20 - Jun 26", seats: 8 }
      ],
      "September-2026": [
        { date: "Sep 8 - Sep 14", seats: 12 },
        { date: "Sep 22 - Sep 28", seats: 15 }
      ],
      "October-2026": [
        { date: "Oct 4 - Oct 10", seats: 10 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Rupin Pass Trek is one of the most dynamic treks in the Himalayas. Each day presents a new landscape, from forest trails and riverside camps to waterfalls and snowfields. The climb to the pass is both challenging and rewarding, offering stunning high-altitude views. This trek is perfect for those who enjoy variety and dramatic scenery.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹2,500 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Trekking Poles",
      "₹4,000 Backpack Offloading"
    ],
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
    slug: "bali-pass-trek",
    days: "8 days",
    difficulty: "difficult",
    title: "Bali Pass Trek",
    description: "A demanding high-altitude trek with glacier sections and panoramic Himalayan views.",
    hasModal: true,
    price: "₹17,999",
    location: "Uttarakhand",
    images: [baliPassCamp, trekking2, trekking3],
    highlights: [
      "Knife-Edge Ridge Crossing at Bali Pass (16,207 ft)",
      "Sacred Ruinsara Alpine Glacial Lake",
      "Unmatched Views of Swargarohini, Bandarpoonch & Black Peak",
      "Ancient Wooden Architecture of Osla Village"
    ],
    dates: {
      "May-2026": [
        { date: "May 22 - May 29", seats: 8 }
      ],
      "June-2026": [
        { date: "Jun 5 - Jun 12", seats: 10 },
        { date: "Jun 16 - Jun 23", seats: 12 }
      ],
      "September-2026": [
        { date: "Sep 12 - Sep 19", seats: 10 },
        { date: "Sep 24 - Oct 1", seats: 8 }
      ],
      "October-2026": [
        { date: "Oct 2 - Oct 9", seats: 6 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Bali Pass Trek is a challenging expedition suited for experienced trekkers. The route connects Har Ki Dun Valley to Yamunotri and involves steep climbs, glacier crossings, and rugged terrain. Along the way, trekkers witness spectacular views of Swargarohini peaks and untouched Himalayan wilderness. It offers both physical challenge and unmatched scenic rewards.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹3,500 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Crampons",
      "₹5,200 Backpack Offloading"
    ],
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
    slug: "hampta-pass-trek",
    days: "5 days",
    difficulty: "easy-moderate",
    title: "Hampta Pass Trek",
    description: "A beautiful crossover trek from green valleys to the barren landscapes of Spiti.",
    hasModal: true,
    price: "₹8,999",
    location: "Himachal Pradesh",
    images: [adventure, trekking2, trekking3],
    highlights: [
      "Dramatic Landscape Shift from Kullu to Spiti Valley",
      "Camping by the Turquoise Chandratal Lake",
      "Crossing River Streams at Balu Ka Ghera",
      "Hampta Pass Summit at 14,065 ft"
    ],
    dates: {
      "June-2026": [
        { date: "Jun 10 - Jun 14", seats: 14 },
        { date: "Jun 22 - Jun 26", seats: 18 }
      ],
      "July-2026": [
        { date: "Jul 6 - Jul 10", seats: 16 },
        { date: "Jul 20 - Jul 24", seats: 14 }
      ],
      "August-2026": [
        { date: "Aug 8 - Aug 12", seats: 12 },
        { date: "Aug 22 - Aug 26", seats: 15 }
      ],
      "September-2026": [
        { date: "Sep 4 - Sep 8", seats: 14 },
        { date: "Sep 18 - Sep 22", seats: 16 }
      ],
      "October-2026": [
        { date: "Oct 3 - Oct 7", seats: 10 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Hampta Pass Trek is known for its dramatic contrast in landscapes. Starting from the lush green Kullu Valley, the trail gradually leads into the stark and barren terrain of Spiti. The trek includes river crossings, scenic campsites, and a moderate pass climb. It is ideal for beginners and intermediate trekkers seeking a visually rewarding experience.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹1,200 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Personal Tents",
      "₹3,000 Backpack Offloading"
    ],
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
    slug: "kashmir-great-lakes-trek",
    days: "7 days",
    difficulty: "moderate",
    title: "Kashmir Great Lakes Trek",
    description: "A breathtaking trek across alpine lakes, meadows, and high mountain passes.",
    hasModal: true,
    price: "₹16,499",
    location: "Kashmir",
    images: [culture, trekking1, trekking2],
    highlights: [
      "7 Pristine High-Altitude Alpine Glacial Lakes",
      "Lush Meadows of Nichnai, Vishansar, and Gadsar",
      "Gadsar Pass Summit (13,750 ft)",
      "Unrivalled Campsites by Glacial Waters"
    ],
    dates: {
      "July-2026": [
        { date: "Jul 8 - Jul 14", seats: 12 },
        { date: "Jul 18 - Jul 24", seats: 15 },
        { date: "Jul 28 - Aug 3", seats: 14 }
      ],
      "August-2026": [
        { date: "Aug 7 - Aug 13", seats: 16 },
        { date: "Aug 17 - Aug 23", seats: 12 },
        { date: "Aug 27 - Sep 2", seats: 15 }
      ],
      "September-2026": [
        { date: "Sep 5 - Sep 11", seats: 10 },
        { date: "Sep 15 - Sep 21", seats: 8 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "The Kashmir Great Lakes Trek is considered one of the most beautiful treks in India. The trail takes you across multiple high-altitude lakes surrounded by snow-capped peaks and vast meadows. Each day reveals a new landscape, making the journey visually captivating. It is perfect for trekkers who want a balance of comfort and stunning natural beauty.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹2,000 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Rain Poncho",
      "₹4,200 Backpack Offloading"
    ],
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
    slug: "pin-bhaba-pass-trek",
    days: "7 days",
    difficulty: "moderate",
    title: "Pin Bhaba Pass Trek",
    description: "A unique trek showcasing the transition from lush greenery to cold desert terrain.",
    hasModal: true,
    price: "₹15,499",
    location: "Himachal Pradesh",
    images: [trekking33, trekking2, trekking3],
    highlights: [
      "Sensational Contrast between Lush Kinnaur and Moon-like Spiti",
      "Crossing the Massive Bhaba Pass (16,105 ft)",
      "River Delta Campsites at Mulling & Kara",
      "Vibrant Culture of Mudh Village in Pin Valley"
    ],
    dates: {
      "July-2026": [
        { date: "Jul 12 - Jul 18", seats: 10 },
        { date: "Jul 24 - Jul 30", seats: 14 }
      ],
      "August-2026": [
        { date: "Aug 6 - Aug 12", seats: 12 },
        { date: "Aug 20 - Aug 26", seats: 15 }
      ],
      "September-2026": [
        { date: "Sep 4 - Sep 10", seats: 10 },
        { date: "Sep 16 - Sep 22", seats: 8 }
      ]
    },
    inclusions: defaultTrekInclusions,
    exclusions: defaultTrekExclusions,
    nonincludions: defaultTrekExclusions,
    carryDetails: defaultTrekCarryDetails,
    fullDescription:
      "Pin Bhaba Pass Trek offers one of the most dramatic landscape transitions in the Himalayas. The journey begins in the green valleys of Kinnaur and gradually moves into the dry, rugged terrain of Spiti. The contrast in scenery, combined with moderate difficulty, makes it a favorite among trekkers seeking variety.",
    sidebarInclusions: [
      "+ ₹240 Trek Insurance",
      "+ ₹2,800 Transport (to & from basecamp)"
    ],
    addOns: [
      "+ Gaiters",
      "₹4,500 Backpack Offloading"
    ],
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
    slug: "everest-base-camp-trek",
    days: "12 days",
    difficulty: "difficult",
    title: "Everest Base Camp Trek",
    description: "A legendary trek to the base of Mount Everest through Sherpa villages and valleys.",
    hasModal: true,
    price: "₹45,000",
    location: "Nepal",
    images: [everest_base_camp, trekking1, trekking3],
    highlights: [
      "Standing at Everest Base Camp (5,364m / 17,598 ft)",
      "Sunrise Panorama from Kala Patthar (5,550m)",
      "Historic Tengboche Monastery & Sherpa Culture",
      "Thrilling Flight into Lukla Airport"
    ],
    dates: {
      "April-2026": [
        { date: "Apr 5 - Apr 16", seats: 10 },
        { date: "Apr 20 - May 1", seats: 12 }
      ],
      "May-2026": [
        { date: "May 8 - May 19", seats: 14 },
        { date: "May 22 - Jun 2", seats: 10 }
      ],
      "September-2026": [
        { date: "Sep 15 - Sep 26", seats: 12 }
      ],
      "October-2026": [
        { date: "Oct 2 - Oct 13", seats: 14 },
        { date: "Oct 18 - Oct 29", seats: 16 }
      ],
      "November-2026": [
        { date: "Nov 5 - Nov 16", seats: 10 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "Twin-sharing tea house lodge accommodation throughout the trek",
          "All meals on the trek: breakfast, hot lunch, and dinner with tea/coffee",
          "Clean bed, blanket, and heated dining area in mountain lodges"
        ]
      },
      {
        category: "Permits & Support",
        items: [
          "Sagarmatha National Park entry permit & Khumbu Pasang Lhamu rural municipality permit",
          "Experienced English-speaking certified Sherpa guide and assistant guides",
          "Porters for luggage carrying (1 porter for 2 trekkers, up to 12kg per person)",
          "Lukla to Kathmandu / Ramechhap return domestic mountain flights & airport transfers"
        ]
      },
      {
        category: "Safety & Emergency Support",
        items: [
          "Emergency oxygen cylinder and pulse oximeter monitoring daily",
          "First-aid trauma kit and emergency rescue coordination",
          "Official Everest Base Camp trek completion certificate"
        ]
      }
    ],
    exclusions: [
      "International flights to/from Kathmandu",
      "Nepal entry tourist visa fee",
      "Personal travel and high-altitude emergency helicopter evacuation insurance",
      "Lunch and dinner during hotel stay in Kathmandu",
      "Personal gear, sleeping bag, down jacket, and hot shower charges at tea houses",
      "Battery charging, Wi-Fi, and electronic device charging fees at lodges",
      "Tips for Sherpa guides and porters"
    ],
    nonincludions: [
      "International airfare and Nepal visa fee",
      "Emergency helicopter evacuation insurance",
      "Hot showers and Wi-Fi charges at lodges",
      "Personal expenses, drinks, and tips"
    ],
    carryDetails: [
      {
        category: "Clothing & Layering",
        icon: "Shirt",
        items: [
          "Heavy down jacket (-15°C to -20°C rated)",
          "Thermal base layers (3 pairs of tops & bottoms)",
          "Fleece jackets and windstopper mid-layers",
          "Waterproof breathable shell jacket & trekking pants",
          "Fleece gloves, windproof outer mittens, woolen beanie, sun hat, and buff",
          "Merino wool trekking socks (5 pairs) + thermal summit socks"
        ]
      },
      {
        category: "Footwear & Gear",
        icon: "Footprints",
        items: [
          "High-ankle waterproof trekking boots (well broken-in)",
          "60-70L Duffle bag (carried by porters) + 25-35L Daypack (carried by you)",
          "Adjustable trekking poles",
          "LED Headlamp with extra batteries",
          "1L Thermos flask + 1L Nalgene bottle with insulation sleeve",
          "Water purification tablets / UV steriliser pen"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Sunscreen SPF 50+, lip balm, cold cream, and wet wipes",
          "Personal medicine kit (Diamox, Paracetamol, Ibuprofen, Ciprofloxacin, throat lozenges)",
          "Large capacity power bank (20,000 mAh)",
          "Passport valid for at least 6 months, visa photos, and insurance policy document"
        ]
      }
    ],
    fullDescription:
      "The Everest Base Camp Trek is a world-famous journey through the Khumbu region of Nepal. Trekkers pass through traditional Sherpa villages, monasteries, and scenic valleys while gradually ascending to base camp. The experience combines cultural immersion with breathtaking views of the world's highest peaks, making it a truly unforgettable adventure.",
    sidebarInclusions: [
      "+ Everest Permit Fees",
      "+ Local Sherpa Guide"
    ],
    addOns: [
      "+ Helicopter Return",
      "₹15,000 Extra Oxygen"
    ],
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
