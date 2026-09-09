import friendship_peak from '../assets/friendship_peak.jpg';
import friendship from '../assets/friendship.jpg';
import adventure from '../assets/adventure.jpg';
import bali_pass from '../assets/bali_pass.jpg';
import trekking33 from '../assets/trekking33.jpg';
import everest_base_camp from '../assets/everest_base_camp.jpg';
import kailash from '../assets/kailash.jpg';
import buran_ghati from '../assets/buran_ghati.jpg';
import culture from '../assets/culture.jpg';
import trekking1 from '../assets/trekking1.jpg';
import trekking2 from '../assets/trekking2.jpg';

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
    images: [friendship_peak, trekking33, adventure, friendship],
    highlights: [
      "Glacier Travel & Crevasse Navigation",
      "Snow Summit Push (5,289m)",
      "Semi-Technical Mountaineering Skills Training",
      "Spectacular Pir Panjal & Hanuman Tibba Views"
    ],
    dates: {
      "October-2026": [
        { date: "Oct 4 - Oct 11", seats: 8 },
        { date: "Oct 12 - Oct 19", seats: 12 },
        { date: "Oct 20 - Oct 27", seats: 6 }
      ],
      "November-2026": [
        { date: "Nov 2 - Nov 9", seats: 10 },
        { date: "Nov 15 - Nov 22", seats: 8 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "Premium hotel accommodation in Manali on a double-sharing basis",
          "Breakfast included during hotel stay in Manali",
          "Comfortable triple-sharing high-altitude expedition tents",
          "High-altitude sleeping bag (-15°C rated) and insulated foam mattress",
          "Spacious dining tent and private toilet tent facilities",
          "All nutritious meals during expedition: breakfast, trail lunch, evening snacks & hot dinner"
        ]
      },
      {
        category: "Permits & Logistics",
        items: [
          "All required climbing, forest, and environmental permits",
          "Base camp setup, logistics, and kitchen infrastructure",
          "Transportation from Manali to trailhead (Dhundi) and return",
          "Light and device charging facility at Lady Leg Base Camp"
        ]
      },
      {
        category: "Professional Mountain Support",
        items: [
          "Certified mountain guides (BMC, AMC & Search/Rescue qualified)",
          "Industry-leading 1:2 guide-to-climber ratio on summit day",
          "Dedicated backup support team and high-altitude staff",
          "Comprehensive snow craft & glacier safety training day at base camp",
          "Route fixing, fixed ropes, and safety line management"
        ]
      },
      {
        category: "Safety & Technical Equipment",
        items: [
          "Emergency medical oxygen cylinder & pulse oximeter monitoring",
          "Comprehensive first-aid medical kit throughout the expedition",
          "High-altitude snow boots & technical crampons",
          "Ice axe, climbing harness, carabiners, slings, ascender (Jumar) & descender",
          "Certified climbing helmet & group dynamic safety ropes",
          "Official Summit Certificate of Achievement"
        ]
      }
    ],
    exclusions: [
      "Travel expenses to and from Manali (Air/Train/Bus)",
      "Personal travel and mountaineering insurance",
      "Lunch and dinner during hotel stay in Manali",
      "Personal expenses such as laundry, phone calls, snacks, and mineral water",
      "Personal clothing and personal trekking backpack",
      "Emergency evacuation charges (helicopter rescue or ambulance fees)",
      "Any additional costs due to bad weather, landslides, road closures, or unforeseen delays",
      "Tips and gratuities for guides, porters, and kitchen staff",
      "Any service not explicitly mentioned under inclusions"
    ],
    nonincludions: [
      "Travel expenses to and from Manali",
      "Personal travel and mountaineering insurance",
      "Lunch and dinner during hotel stay in Manali",
      "Personal expenses and personal trekking clothing",
      "Emergency evacuation charges",
      "Tips and gratuities for support staff"
    ],
    carryDetails: [
      {
        category: "Clothing & Layering",
        icon: "Shirt",
        items: [
          "Thermal base layers - 2 pairs (tops & bottoms)",
          "Fleece jacket / warm insulated mid-layer",
          "Heavy down jacket with hood (-10°C to -20°C rated)",
          "Waterproof & windproof outer shell jacket & trousers (Gore-Tex or breathable)",
          "Quick-dry trekking pants (2-3 pairs)",
          "Waterproof insulated mountaineering gloves & fleece inner gloves",
          "Balaclava, warm woolen beanie, and wide-brim sun hat",
          "Moisture-wicking trekking socks (4-5 pairs) + thick woolen summit socks (2 pairs)",
          "UV 400 polarized sunglasses (Category 3/4 with side protection)"
        ]
      },
      {
        category: "Footwear & Climbing Gear",
        icon: "Footprints",
        items: [
          "High-ankle waterproof mountaineering/trekking boots (well broken-in)",
          "50–60L Backpack with waterproof rain cover",
          "20–30L Daypack for summit push / day hikes",
          "Adjustable trekking poles with snow baskets",
          "LED Headlamp with extra spare batteries",
          "1L Insulated thermos flask + 1L reusable water bottle",
          "Gaiters (if not using integrated boots)"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "High-SPF sunscreen (SPF 50+), lip balm with SPF & moisturizer",
          "Quick-dry microfiber towel & biodegradable wet wipes",
          "Personal medical kit (Diamox, Paracetamol, Ibuprofen, ORS sachets, blister tape)",
          "Heavy-duty power bank (10,000–20,000 mAh)",
          "Valid Government Photo ID proof (Original + 3 photocopies)",
          "Medical fitness certificate signed by a physician"
        ]
      }
    ],
    fullDescription:
      "Friendship Peak stands at 5,289 meters (17,352 feet) above sea level in the Pir Panjal Range near Manali, Himachal Pradesh. The summit offers wide views of Hanuman Tibba, Shitidhar, Indrasan, Deo Tibba, and the surrounding Himalayan landscape. The route combines alpine meadows, moraine sections, snow slopes, and glacier travel. Climbers use crampons, an ice axe, ropes, and basic glacier safety systems under the supervision of experienced guides. A dedicated acclimatization and training day ensures you are well-prepared for the final summit day.",
    sidebarInclusions: [
      "+ ₹240 Expedition Insurance",
      "+ ₹1,500 Local Transport (to & from trailhead)"
    ],
    addOns: [
      "₹5,000 Offloading Service (per person)",
      "₹10,000 Personal Guide (1:1 support)",
      "₹13,000 Single Sharing Room & Tent",
      "₹10,000 Photo & Video Drone Package"
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
    slug: "kang-yatse-2",
    days: "11 days",
    difficulty: "alpine pd+",
    title: "Kang Yatse II (6,250m)",
    description: "Kang Yatse II is the crowning jewel of the Markha Valley in Ladakh. At 6,250m, it is one of India's most coveted semi-technical 6000m climbing expeditions.",
    hasModal: true,
    price: "₹48,999",
    location: "Markha Valley, Ladakh",
    images: [adventure, everest_base_camp, bali_pass, kailash],
    highlights: [
      "6,250m Himalayan Summit Objective",
      "Spectacular Markha Valley Trek Acclimatization",
      "Views of Karakoram, K2 Range & Nun Kun",
      "High Altitude Snow & Glacier Traverse"
    ],
    dates: {
      "July-2026": [
        { date: "Jul 5 - Jul 15", seats: 10 },
        { date: "Jul 18 - Jul 28", seats: 8 }
      ],
      "August-2026": [
        { date: "Aug 2 - Aug 12", seats: 12 },
        { date: "Aug 16 - Aug 26", seats: 6 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "2 nights hotel accommodation in Leh with breakfast",
          "Homestay and tea house stays during Markha Valley trek section",
          "High altitude triple-sharing expedition dome tents at Base Camp & High Camp",
          "Warm sub-zero sleeping bags (-20°C) with insulated foam mats",
          "All nutritious meals from Chilling trailhead to summit return"
        ]
      },
      {
        category: "Permits & Logistics",
        items: [
          "Indian Mountaineering Foundation (IMF) peak climbing permit & royalty",
          "Hemis National Park entry fees & environmental clearances",
          "Airport transfers and private transport between Leh and trailhead",
          "Base camp infrastructure, dining tent, kitchen tent & eco-toilets"
        ]
      },
      {
        category: "Mountain Support & Guide Ratio",
        items: [
          "UIAGM/IMF certified mountain guides and local Ladakh high-altitude leaders",
          "1:2 guide to climber ratio on summit day for maximum safety",
          "High altitude porters and pack horses for ferrying group rations and gear",
          "Snow craft training on crampon use, ice axe arrests & rope team travel"
        ]
      },
      {
        category: "Safety & Technical Gear",
        items: [
          "Emergency high-altitude oxygen cylinders and hyperbaric chamber coordination",
          "Pulse oximeters, blood pressure monitors & high-altitude medical trauma kit",
          "High-altitude double mountaineering boots, crampons, ice axe, harness, helmet, carabiners",
          "Official Kang Yatse II Summit Certificate"
        ]
      }
    ],
    exclusions: [
      "Airfare to and from Leh",
      "Mandatory Ladakh acclimatization day expenses in Leh",
      "Personal mountaineering clothing and individual backpack",
      "Personal travel and high-altitude medical evacuation insurance",
      "Personal expenses such as laundry, bottled water, beverages, and tips"
    ],
    nonincludions: [
      "Airfare to and from Leh",
      "Travel insurance and medical rescue",
      "Lunch and dinner in Leh",
      "Personal expenses and porter tips"
    ],
    carryDetails: [
      {
        category: "Clothing & Layering",
        icon: "Shirt",
        items: [
          "Heavy down jacket with hood (-20°C rated)",
          "Thermal base layers (3 pairs of tops & bottoms)",
          "Windproof and waterproof shell jacket & pants (Gore-Tex Pro)",
          "Fleece mid-layers and softshell trekking pants",
          "Insulated waterproof mountaineering mittens & inner fleece gloves",
          "Balaclava, neck gaiter, and UV protection wide-brim hat",
          "Merino wool trekking socks (5 pairs) + thick summit socks (2 pairs)",
          "Category 4 glacier glasses with side shields"
        ]
      },
      {
        category: "Footwear & Climbing Gear",
        icon: "Footprints",
        items: [
          "Double mountaineering boots or semi-rigid technical trekking boots",
          "60-70L Expedition backpack + 20-30L Summit daypack",
          "Pair of adjustable trekking poles with snow baskets",
          "High-intensity LED headlamp with spare lithium batteries",
          "1L Thermos flask + 1L Nalgene bottle with thermal sleeve"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Sunscreen SPF 50+, zinc stick, lip balm with UV protection",
          "Quick-dry microfiber towel and biodegradable hygiene wipes",
          "Personal medicine kit (Diamox, Ibuprofen, Paracetamol, ORS, throat lozenges)",
          "High-capacity power bank (20,000 mAh)",
          "Valid Government ID (Original + copies) & Medical Fitness Certificate"
        ]
      }
    ],
    fullDescription:
      "Kang Yatse II stands at 6,250 meters in the Hemis National Park of Ladakh. The journey begins with the world-famous Markha Valley trek, which provides natural and gradual acclimatization through remote Ladakhi villages, monasteries, and river crossings. From the Nimaling plateau basecamp, climbers ascend steep scree and snow slopes to the summit ridge. The summit grants breathtaking vistas of the Zanskar range, Karakoram, and on clear days, peaks of Tibet.",
    sidebarInclusions: [
      "+ ₹500 IMF Royalty",
      "+ ₹240 Expedition Insurance"
    ],
    addOns: [
      "₹6,000 Personal Porter (Offloading)",
      "₹12,000 Dedicated 1:1 Guide Support",
      "₹14,000 Single Room & Private Tent"
    ],
    info: [
      { label: "Difficulty", value: "Alpine PD+ / Challenging", icon: "difficulty" },
      { label: "Duration", value: "11 days / 75 km", icon: "duration" },
      { label: "Highest Altitude", value: "20,505 ft (6250m)", icon: "altitude" },
      { label: "Basecamp", value: "Nimaling Plateau (4800m)", icon: "location" },
      { label: "Suitable For", value: "Fit Trekkers & Mountaineers", icon: "users" },
      { label: "Trail Type", value: "Markha Valley & Snow Ridge", icon: "trail" },
      { label: "Season", value: "July to September", icon: "season" },
      { label: "Start/End Point", value: "Leh, Ladakh", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh (3500m)",
        details: [
          "Arrive in Leh and transfer to the hotel. Rest completely for mandatory high-altitude acclimatization.",
          "Evening briefing and document verification with the expedition leader.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 2,
        title: "Leh Local Acclimatization & Gear Check",
        details: [
          "Short walking tour around Leh market, Shanti Stupa, and Leh Palace.",
          "Full technical gear check and mountaineering equipment fitting.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 3,
        title: "Drive to Chilling – Trek to Skiu (3400m)",
        details: [
          "Drive 2 hours along the Zanskar River to Chilling, then cross the river to begin the Markha Valley trek.",
          "Trek 7 km (3-4 hours) to Skiu village.",
          "Accommodation: Homestay / Camp."
        ]
      },
      {
        day: 4,
        title: "Skiu to Markha Village (3700m)",
        details: [
          "Trek 20 km (6-7 hours) through the heart of Markha Valley, passing ancient ruined forts and chortens.",
          "Accommodation: Homestay in Markha."
        ]
      },
      {
        day: 5,
        title: "Markha to Thachungtse (4150m)",
        details: [
          "Trek 13 km (5-6 hours) past Hankar village as the valley opens up with dramatic views of Kang Yatse.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 6,
        title: "Thachungtse to Nimaling (4800m)",
        details: [
          "Ascend 7 km (4 hours) into the vast, emerald pastures of the Nimaling Plateau.",
          "Overnight at Nimaling with sweeping views of Kang Yatse.",
          "Accommodation: Campsite, triple sharing."
        ]
      },
      {
        day: 7,
        title: "Nimaling to Kang Yatse Base Camp (5100m)",
        details: [
          "Short trek of 3-4 hours to establish Base Camp.",
          "Afternoon snow training: crampon movement, self-arrest, and fixed-line techniques.",
          "Accommodation: Base Camp, triple sharing."
        ]
      },
      {
        day: 8,
        title: "Summit Push: Kang Yatse II (6250m) – Return to Base Camp",
        details: [
          "Midnight start (1:00 AM) climbing over moraine, snowfields, and the steep summit ridge.",
          "Reach the summit at sunrise for 360-degree Karakoram and Zanskar panoramas. Descend safely to Base Camp.",
          "Ascent time: 7-9 hours. Descent time: 4-5 hours.",
          "Accommodation: Base Camp, triple sharing."
        ]
      },
      {
        day: 9,
        title: "Reserve / Buffer Day for Weather",
        details: [
          "Dedicated buffer day for weather window or acclimatization adjustment.",
          "Accommodation: Campsite."
        ]
      },
      {
        day: 10,
        title: "Base Camp to Kongmaru La (5260m) – Chokdo to Leh",
        details: [
          "Cross the scenic Kongmaru La pass with views of the Indus Valley, descend through canyon to Chokdo and drive back to Leh.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 11,
        title: "Departure from Leh",
        details: [
          "Transfer to Leh airport for your onward journey with unforgettable 6000m summit memories."
        ]
      }
    ]
  },
  {
    image: adventure,
    slug: "yunam-peak",
    days: "7 days",
    difficulty: "moderate",
    title: "Mt. Yunam (6,111m)",
    description: "Yunam Peak (6,111m) is an exceptional beginner-friendly 6000m summit. Set in the cold desert of Lahaul, it offers stunning views of Ladakh and the Chandra Bhaga range.",
    hasModal: true,
    price: "₹39,999",
    location: "Lahaul, Himachal Pradesh",
    images: [adventure, everest_base_camp, bali_pass],
    highlights: [
      "Non-Technical 6000m Peak (6,111m)",
      "Stunning Cold Desert & Baralacha La Landscapes",
      "High Altitude Acclimatization at Bharatpur",
      "Unmatched Views of Chandra Bhaga & Ladakh Peaks"
    ],
    dates: {
      "July-2026": [
        { date: "Jul 10 - Jul 17", seats: 10 },
        { date: "Jul 20 - Jul 27", seats: 8 }
      ],
      "August-2026": [
        { date: "Aug 5 - Aug 12", seats: 12 },
        { date: "Aug 18 - Aug 25", seats: 10 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "2 nights hotel stay in Manali on double sharing basis with breakfast",
          "1 night hotel stay in Jispa on double sharing basis with dinner and breakfast",
          "Triple-sharing high-altitude expedition tents from Bharatpur onwards",
          "High-altitude sleeping bag (-15°C rated) and insulated mattress",
          "Kitchen and dining tent with hot dining setup",
          "All nutritious meals during the expedition from Bharatpur onwards"
        ]
      },
      {
        category: "Permits & Logistics",
        items: [
          "All forest, wildlife, and climbing permits",
          "Transportation from Manali to Bharatpur Base Camp via Atal Tunnel and return",
          "Base camp infrastructure & logistics coordination",
          "Environmental clearances and local administration permissions"
        ]
      },
      {
        category: "Professional Mountain Support",
        items: [
          "Certified mountain guides (BMC/AMC & First Aid trained)",
          "1:2 guide to climber ratio during the high-altitude summit push",
          "Dedicated high-altitude support crew & cook",
          "Acclimatization hikes and high-altitude breathing guidance"
        ]
      },
      {
        category: "Safety & Technical Equipment",
        items: [
          "Emergency oxygen cylinders and continuous pulse oximeter monitoring",
          "Comprehensive first-aid trauma kit",
          "High altitude snow boots, crampons, ice axe, harness, helmet, carabiners, ascender, descender & safety ropes",
          "Official Summit Certificate of Achievement"
        ]
      }
    ],
    exclusions: [
      "Travel expenses to and from Manali",
      "Personal mountain clothing, thermal wear, and individual gear",
      "Lunch and dinner in Manali hotel stay",
      "Travel and medical evacuation insurance",
      "Any personal expenses such as phone calls, snacks, and extra beverages",
      "Any additional costs arising due to landslides, road blockades, or bad weather",
      "Tips and gratuities for mountain guides and crew"
    ],
    nonincludions: [
      "Lunch and dinner in Manali",
      "Personal mountain clothing and sleeping bag liners",
      "Travel and medical evacuation insurance",
      "Any personal expenses not specified"
    ],
    carryDetails: [
      {
        category: "Clothing & Layering",
        icon: "Shirt",
        items: [
          "Thermal base layers (2 tops & 2 bottoms)",
          "Fleece pullover or heavy fleece jacket",
          "Down jacket rated for -15°C with hood",
          "Waterproof & windproof breathable shell jacket and trousers",
          "Quick-dry trekking trousers (2 pairs)",
          "Insulated waterproof gloves + inner fleece gloves",
          "Balaclava, woolen cap, and sun hat with neck flap",
          "Trekking socks (4 pairs) + thick woolen summit socks (2 pairs)",
          "UV 400 polarized glacier glasses (Cat 4)"
        ]
      },
      {
        category: "Footwear & Equipment",
        icon: "Footprints",
        items: [
          "High-ankle waterproof mountaineering/trekking boots",
          "60L Expedition backpack with waterproof rain cover",
          "20-30L Summit daypack",
          "Trekking poles with snow baskets",
          "High-lumen LED headlamp with spare batteries",
          "1L Insulated thermos flask + 1L water bottle"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Sunscreen SPF 50+, lip balm with UV filter, moisturizer",
          "Microfiber quick-dry towel and wet wipes",
          "Personal first-aid kit (Diamox, pain relief, blister pads, throat lozenges)",
          "Power bank (20,000 mAh)",
          "Government Photo ID proof (Original + 3 copies)",
          "Doctor's medical fitness certificate"
        ]
      }
    ],
    fullDescription:
      "Summit Yunam Peak (6,111m) on a 7-day non-technical mountaineering expedition from Manali through Jispa and Bharatpur. Perfect for fit trekkers attempting their first 6000m peak. Located near Baralacha La in Lahaul Valley, this peak serves as an excellent entry point into high-altitude climbing. It requires high physical fitness and endurance but has minimal technical difficulty.",
    sidebarInclusions: [
      "+ ₹240 Expedition Insurance",
      "+ ₹2,500 Highway Tolls & Permits"
    ],
    addOns: [
      "₹5,000 Backpack Offloading (per person)",
      "₹10,000 Personal Guide (1:1 climbing support)",
      "₹12,000 Single Sharing Room & Tent",
      "₹10,000 Drone & Photo Package"
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
    title: "Mt. Deo Tibba (6,001m)",
    description: "Deo Tibba (6,001m) is an iconic alpine peak in Pir Panjal. Offering a technical and challenging climb, it features glacier sections, crevasses, and steep snow walls.",
    hasModal: true,
    price: "₹64,999",
    location: "Pir Panjal, Himachal Pradesh",
    images: [bali_pass, everest_base_camp, trekking33, buran_ghati],
    highlights: [
      "Technical Alpine Ascent (6,001m)",
      "Glacier & Crevasse Traversing with Fixed Lines",
      "High Camp at Duhangan Col (5,400m)",
      "Ideal Technical Stepping Stone for 7,000m Peaks"
    ],
    dates: {
      "June-2026": [
        { date: "Jun 5 - Jun 17", seats: 6 },
        { date: "Jun 20 - Jul 2", seats: 6 }
      ],
      "September-2026": [
        { date: "Sep 2 - Sep 14", seats: 8 },
        { date: "Sep 18 - Sep 30", seats: 6 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "2 nights hotel stay in Manali on double sharing basis with breakfast",
          "Comfortable triple-sharing expedition tents at all mountain camps",
          "Extreme high-altitude sleeping bag (-20°C rated) and dual-layer insulated mattresses",
          "All nutritious high-calorie meals on the mountain with fresh food cooked by expert cooks",
          "Full kitchen tent, spacious dining tent, and separate toilet tents"
        ]
      },
      {
        category: "Permits & Logistics",
        items: [
          "All IMF peak climbing permits, forest department fees & environmental charges",
          "Transportation from Manali to Khanol trailhead and return",
          "High altitude basecamp logistics, load ferrying and campsite establishment",
          "Radio and satellite communication safety equipment at basecamp"
        ]
      },
      {
        category: "Professional Mountain Support",
        items: [
          "Certified alpine mountain guides (UIAGM/IMF/BMC/AMC qualified)",
          "1:2 guide to climber ratio during technical climbing sections",
          "Experienced High Altitude Porters (HAPs) for camp establishment",
          "Comprehensive glacier travel, self-arrest, and fixed-line training",
          "Route exploration, fixing dynamic/static safety ropes across crevasses"
        ]
      },
      {
        category: "Safety & Technical Equipment",
        items: [
          "Emergency medical oxygen cylinders, hyperbaric safety protocols & first-aid kits",
          "Technical climbing equipment: harness, mountaineering boots, crampons, ice axe, helmet",
          "Technical hardware: carabiners, ascenders, descenders, snow stakes, ice screws, ropes",
          "Official Summit Certificate of Achievement"
        ]
      }
    ],
    exclusions: [
      "Travel expenses to and from Manali",
      "Personal mountain climbing apparel, down suit/jackets, and personal pack",
      "Lunch and dinner in Manali hotel",
      "Personal travel and medical emergency evacuation insurance (including helicopter rescue)",
      "Personal expenses such as laundry, beverages, telephone charges",
      "Costs arising due to unforeseen weather delays, natural disasters, or roadblocks",
      "Tips and gratuities for mountain guides, HAPs, and basecamp staff"
    ],
    nonincludions: [
      "Lunch and dinner in Manali",
      "Personal clothing, mountaineering gear, and backpack",
      "Travel insurance and medical emergency coverage",
      "Tips for guides and support staff"
    ],
    carryDetails: [
      {
        category: "Clothing & Technical Layering",
        icon: "Shirt",
        items: [
          "Heavy down jacket (-20°C rated) with hood",
          "Thermal base layers (3 pairs of top & bottom)",
          "Heavy fleece mid-layer jacket + insulated pants",
          "Waterproof & windproof breathable mountaineering shell (Gore-Tex Pro)",
          "Mountaineering gloves/mittens (down-filled) + windproof fleece gloves (2 pairs)",
          "Balaclava, neck gaiter, and thermal beanie",
          "Heavy wool mountaineering socks (4 pairs) + liner socks (4 pairs)",
          "Category 4 glacier glasses with side shields"
        ]
      },
      {
        category: "Footwear & Climbing Gear",
        icon: "Footprints",
        items: [
          "Double mountaineering boots (semi-rigid or rigid compatible with crampons)",
          "65–75L Expedition backpack with waterproof rain cover",
          "30L Summit daypack",
          "Technical ice axe & adjustable trekking poles with snow baskets",
          "High-intensity LED headlamp with extra lithium batteries",
          "1L Insulated thermos flask + 1L Nalgene bottle with thermal sleeve"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Sunscreen SPF 50+, zinc cream for nose/lips, heavy cold cream",
          "Microfiber towel, biodegradable wipes, personal hygiene items",
          "Comprehensive personal medication kit (Diamox, Dexamethasone, pain relief, bandages)",
          "High-capacity power bank (20,000 mAh)",
          "Government Photo ID (Original + copies) & IMF documentation",
          "Comprehensive medical fitness & cardiac clearance certificate"
        ]
      }
    ],
    fullDescription:
      "Deo Tibba (6,001m), also referred to as Mt. Dev Dibba, is one of the most prominent peaks in Kullu Valley, offering a classic alpine climbing experience. The ascent crosses meadows, moraines, glaciers, and remote valleys. Climbers navigate crevasse fields and climb steep snow walls to Duhangan Col, establishing a high camp for the final summit push. It serves as an excellent technical preparation peak for 7000-meter objectives.",
    sidebarInclusions: [
      "+ ₹500 Climb Permit Charges",
      "+ ₹240 Expedition Insurance"
    ],
    addOns: [
      "₹8,000 Offloading Service (per person)",
      "₹15,000 Personal Climbing Porter (1:1 support)",
      "₹15,000 Single Sharing Room & Tent",
      "₹12,000 Aerial Drone & Expedition Photo Package"
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
  },
  {
    image: kailash,
    slug: "hanuman-tibba",
    days: "11 days",
    difficulty: "alpine ad+",
    title: "Hanuman Tibba (5,982m)",
    description: "Hanuman Tibba is the highest and most formidable peak in the Dhauladhar Range. A classic technical climb with steep snow walls and corniced ridge traverses.",
    hasModal: true,
    price: "₹59,999",
    location: "Solang Valley, Himachal Pradesh",
    images: [kailash, friendship_peak, bali_pass, adventure],
    highlights: [
      "Highest Peak of Dhauladhar Range (5,982m)",
      "Technical 65-Degree Snow & Ice Wall Ascent",
      "Fixed Line Rigging over Tentu Pass (4,990m)",
      "High Altitude Glacier Camp at South Ridge"
    ],
    dates: {
      "June-2026": [
        { date: "Jun 10 - Jun 20", seats: 6 },
        { date: "Jun 22 - Jul 2", seats: 6 }
      ],
      "September-2026": [
        { date: "Sep 5 - Sep 15", seats: 6 },
        { date: "Sep 18 - Sep 28", seats: 6 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "2 nights hotel accommodation in Manali on double sharing basis",
          "Extreme alpine mountain tents (double/triple sharing) at High Camps",
          "High altitude sleeping bags (-20°C rated) with insulated closed-cell foam mats",
          "All nutritious energy-dense meals, soup, and hot beverages during the climb"
        ]
      },
      {
        category: "Permits & Technical Logistics",
        items: [
          "IMF peak climbing permits, forest clearances & environmental fees",
          "Trailhead transport from Manali to Solang / Dhundi and return",
          "Comprehensive basecamp infrastructure & high camp establishment"
        ]
      },
      {
        category: "Alpine Mountain Leadership",
        items: [
          "Senior UIAGM/IMF certified mountain guides with high technical experience",
          "1:2 guide to climber ratio on technical sections above Tentu Pass",
          "High Altitude Porters (HAPs) for fixed line rigging and load ferrying",
          "Detailed technical training on jumaring, prusiking, and technical descent"
        ]
      },
      {
        category: "Safety & Technical Gear",
        items: [
          "Emergency oxygen cylinder, hyperbaric safety protocols & first-aid trauma kit",
          "Dynamic/static climbing ropes, snow anchors, ice screws, and deadmen",
          "Technical climbing boots, crampons, technical ice axes, harness, helmet, ascenders",
          "Official Summit Certificate of Achievement"
        ]
      }
    ],
    exclusions: [
      "Travel expenses to and from Manali",
      "Personal technical clothing and climbing gear",
      "Lunch and dinner in Manali",
      "Personal travel & helicopter rescue insurance",
      "Personal expenses and tips for guides/porters"
    ],
    nonincludions: [
      "Travel to Manali",
      "Personal gear and clothing",
      "Insurance and medical evacuation",
      "Meals in Manali hotel"
    ],
    carryDetails: [
      {
        category: "Clothing & Layering",
        icon: "Shirt",
        items: [
          "Mountaineering down suit or down jacket (-20°C rated)",
          "Thermal base layers (3 sets of tops & bottoms)",
          "Hard-shell waterproof Gore-Tex Pro jacket and salopettes/trousers",
          "Fleece mid-layers and windstopper softshell jacket",
          "Primaloft/down mittens + technical ice climbing gloves (2 pairs)",
          "Balaclava, neck gaiter, and thermal helmet liner"
        ]
      },
      {
        category: "Footwear & Technical Gear",
        icon: "Footprints",
        items: [
          "Double mountaineering boots (rigid sole with front welt for automatic crampons)",
          "70L Technical expedition rucksack + 30L summit pack",
          "Pair of technical ice tools / ice axes",
          "Adjustable mountaineering poles with snow baskets",
          "High lumen headlamp with spare lithium batteries"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Sunscreen SPF 50+ & total UV zinc block",
          "Personal high-altitude medicine kit (Diamox, Nifedipine, Pain relief)",
          "20,000 mAh Cold-resistant power bank",
          "Original Government ID proof & Doctor Medical Certificate"
        ]
      }
    ],
    fullDescription:
      "Hanuman Tibba (5,982m) is the highest mountain in the Dhauladhar Range. Known as the White Mountain, it presents a serious and rewarding mountaineering challenge. The expedition ascends through Solang Valley to Dhundi and Bakarthach, establishing base camp below the fearsome Tentu Pass. Crossing Tentu Pass requires fixed-rope climbing on 60 to 70-degree snow and ice walls. Climbers establish a high camp on the glacier before launching a technical push along the summit ridge.",
    sidebarInclusions: [
      "+ ₹500 IMF Royalty",
      "+ ₹240 Expedition Insurance"
    ],
    addOns: [
      "₹8,000 Personal Porter (Offloading)",
      "₹15,000 1:1 Personal Guide Support",
      "₹15,000 Single Tent Accommodation"
    ],
    info: [
      { label: "Difficulty", value: "Alpine AD+ / Technical", icon: "difficulty" },
      { label: "Duration", value: "11 days / 40 km", icon: "duration" },
      { label: "Highest Altitude", value: "19,625 ft (5982m)", icon: "altitude" },
      { label: "Basecamp", value: "Beas Kund / Tentu Pass Base", icon: "location" },
      { label: "Suitable For", value: "Experienced Mountaineers", icon: "users" },
      { label: "Trail Type", value: "Ice Wall & Glacier Ridge", icon: "trail" },
      { label: "Season", value: "June & September-October", icon: "season" },
      { label: "Start/End Point", value: "Manali, HP", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali (2050m)",
        details: [
          "Check in to hotel, expedition briefing, medical verification, and gear inspections.",
          "Accommodation: Hotel in Manali."
        ]
      },
      {
        day: 2,
        title: "Drive to Dhundi – Trek to Bakarthach (3300m)",
        details: [
          "Drive to Dhundi and trek through pine forests and meadows to Bakarthach campsite.",
          "Accommodation: Campsite."
        ]
      },
      {
        day: 3,
        title: "Bakarthach to Beas Kund Base Camp (3900m)",
        details: [
          "Trek through moraines to Beas Kund Base Camp. Acclimatization hike in the afternoon.",
          "Accommodation: Campsite."
        ]
      },
      {
        day: 4,
        title: "Beas Kund to Advanced Base Camp / Tentu Pass Foot (4400m)",
        details: [
          "Move higher to Advanced Base Camp at the foot of Tentu Pass. Technical briefing on fixed rope climbing.",
          "Accommodation: Campsite."
        ]
      },
      {
        day: 5,
        title: "Climb Tentu Pass (4990m) to High Camp (5000m)",
        details: [
          "Ascend steep 65-degree snow and ice slopes on fixed lines to top of Tentu Pass.",
          "Establish High Camp on the vast Hanuman Tibba glacier.",
          "Accommodation: High Camp."
        ]
      },
      {
        day: 6,
        title: "Move to Summit Camp (5400m)",
        details: [
          "Traverse the glacier field to establish Summit Camp below the south ridge.",
          "Accommodation: Summit Camp."
        ]
      },
      {
        day: 7,
        title: "Summit Push: Hanuman Tibba (5982m) – Return to High Camp",
        details: [
          "Midnight alpine summit push along the sharp snow ridge to the summit of Hanuman Tibba.",
          "Descend carefully on fixed lines back to High Camp.",
          "Accommodation: High Camp."
        ]
      },
      {
        day: 8,
        title: "Reserve / Weather Buffer Day",
        details: [
          "Dedicated buffer day for weather or route conditions."
        ]
      },
      {
        day: 9,
        title: "High Camp to Beas Kund Base Camp",
        details: [
          "Rappel down Tentu Pass and return to Beas Kund Base Camp.",
          "Accommodation: Campsite."
        ]
      },
      {
        day: 10,
        title: "Base Camp to Dhundi – Drive to Manali",
        details: [
          "Descend to Dhundi and drive to Manali. Celebration dinner with the expedition team.",
          "Accommodation: Hotel in Manali."
        ]
      },
      {
        day: 11,
        title: "Departure from Manali",
        details: [
          "Expedition concludes after breakfast."
        ]
      }
    ]
  },
  {
    image: everest_base_camp,
    slug: "mt-nun",
    days: "21 days",
    difficulty: "extreme 7000m",
    title: "Mt. Nun (7,135m)",
    description: "Mt. Nun (7,135m) is the highest peak in the Zanskar Range and India's premier 7,000m technical mountaineering expedition.",
    hasModal: true,
    price: "₹1,75,000",
    location: "Suru Valley, Ladakh",
    images: [everest_base_camp, adventure, kailash, bali_pass],
    highlights: [
      "Highest Peak in Zanskar Range (7,135m)",
      "Premier Technical 7,000m Himalayan Objective",
      "Climbing over 3 Multi-Tier High Altitude Camps",
      "Fixed Line Ice Wall Climbing & Crevasse Traversing"
    ],
    dates: {
      "July-2026": [
        { date: "Jul 15 - Aug 4", seats: 6 }
      ],
      "August-2026": [
        { date: "Aug 8 - Aug 28", seats: 6 }
      ]
    },
    inclusions: [
      {
        category: "Accommodation & Meals",
        items: [
          "Hotel stay in Leh and Kargil on double-sharing basis with breakfast",
          "Dedicated heavy-duty expedition 4-season tents at Base Camp, Camp 1, Camp 2, and Camp 3",
          "Extreme sub-zero down sleeping bags (-30°C rated) and insulated dual-layer mats",
          "High-calorie nutritious meals and hot beverages cooked by specialized high-altitude cooks"
        ]
      },
      {
        category: "Permits & Logistics",
        items: [
          "Indian Mountaineering Foundation (IMF) peak permit, liaison officer & royalty",
          "Satellite communication phone, VHF walkie-talkies & high-altitude solar power hub",
          "Private road transport between Leh, Kargil, and Tangol basecamp roadhead"
        ]
      },
      {
        category: "Elite Mountain Support",
        items: [
          "Everest / 8000m summiteer lead mountaineering guides (UIAGM certified)",
          "1:1 guide-to-climber ratio on summit day push above Camp 3",
          "High Altitude Sherpas / Porters for load ferrying and route fixing across technical ice walls",
          "Comprehensive glacier craft, ascending, and abseiling review at Base Camp"
        ]
      },
      {
        category: "Safety & Emergency Systems",
        items: [
          "Emergency medical oxygen cylinders with summit masks and regulators",
          "Gamow hyperbaric bag on site at Base Camp with emergency rescue protocols",
          "Complete technical group gear: dynamic ropes, fixed ropes, ice screws, snow stakes",
          "Official Mt. Nun 7,135m Summit Certificate"
        ]
      }
    ],
    exclusions: [
      "Airfare to and from Leh",
      "Personal mountaineering 8000m/7000m down suit and double/triple boots",
      "Personal high-altitude medical evacuation & helicopter rescue insurance (mandatory)",
      "Meals in Leh and Kargil not specified",
      "Tips and summit bonuses for Sherpa guides and HAPs"
    ],
    nonincludions: [
      "Airfare to Leh",
      "Mandatory helicopter evacuation insurance",
      "Personal climbing down suit",
      "Sherpa summit bonus"
    ],
    carryDetails: [
      {
        category: "Clothing & Down Suit",
        icon: "Shirt",
        items: [
          "One-piece 8000m mountaineering down suit (or heavy down jacket & salopettes, -30°C rated)",
          "Thermal base layers (4 pairs of Merino wool tops and bottoms)",
          "Technical fleece jackets, windstopper mid-layers, and powerstretch pants",
          "Gore-Tex Pro waterproof shell jacket and bib trousers",
          "Down summit mittens, windproof insulated gloves & inner glove liners (3 pairs)",
          "Balaclava, insulated face mask, and windproof thermal beanie"
        ]
      },
      {
        category: "Footwear & Technical Hardware",
        icon: "Footprints",
        items: [
          "Triple mountaineering boots (La Sportiva Olympus Mons / Scarpa Phantom 8000)",
          "85–100L Expedition duffel bag + 50L alpine summit climbing pack",
          "Technical ice axe + pair of technical ice tools",
          "Automatic technical step-in crampons",
          "Climbing harness, locking carabiners, Petzl ascender, ATC Guide descender, prusiks"
        ]
      },
      {
        category: "Personal Essentials & Medical",
        icon: "ShieldAlert",
        items: [
          "Glacier glasses (Category 4) with side shields + spare pair of snow goggles",
          "Total UV block sunscreen (SPF 50+) and zinc paste",
          "Personal medical prescription kit (Diamox, Dexamethasone, Nifedipine, Antibiotics)",
          "20,000 mAh Low-temperature resistant power banks",
          "Passport / Government ID & Certified Cardiac Medical Fitness Certificate"
        ]
      }
    ],
    fullDescription:
      "Mt. Nun (7,135m) is the highest mountain in the Zanskar Range in Ladakh and one of the most iconic 7000m mountaineering challenges in the Himalayas. Reaching the summit requires establishing three successive high camps, navigating complex serac fields, and climbing a grueling 700m fixed-rope snow/ice wall to Camp 2. This is the ultimate testing ground for mountaineers preparing for 8000-meter giants like Everest, K2, and Manaslu.",
    sidebarInclusions: [
      "+ ₹2,500 IMF Liaison Royalty",
      "+ ₹500 Satellite Safety Fee"
    ],
    addOns: [
      "₹25,000 Dedicated Private Sherpa (1:1 Load Ferry)",
      "₹20,000 Single Tent Accommodation at Basecamp",
      "₹15,000 High-Altitude Drone & Video Coverage"
    ],
    info: [
      { label: "Difficulty", value: "Extreme 7000m / Technical", icon: "difficulty" },
      { label: "Duration", value: "21 days / 60 km", icon: "duration" },
      { label: "Highest Altitude", value: "23,409 ft (7135m)", icon: "altitude" },
      { label: "Basecamp", value: "Tangol Base Camp (4600m)", icon: "location" },
      { label: "Suitable For", value: "Experienced High-Altitude Climbers", icon: "users" },
      { label: "Trail Type", value: "Technical Ice Wall & Serac Fields", icon: "trail" },
      { label: "Season", value: "July to August", icon: "season" },
      { label: "Start/End Point", value: "Leh, Ladakh", icon: "location" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh (3500m)",
        details: [
          "Arrive in Leh, transfer to hotel, rest completely for mandatory altitude acclimatization.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 2,
        title: "Leh Acclimatization & IMF Briefing",
        details: [
          "Briefing with the IMF Liaison Officer, document verification, and gear checks.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 3,
        title: "Drive from Leh to Kargil (2676m)",
        details: [
          "Scenic 215 km drive along the Indus and Suru rivers to Kargil.",
          "Accommodation: Hotel in Kargil."
        ]
      },
      {
        day: 4,
        title: "Kargil to Tangol – Trek to Base Camp (4600m)",
        details: [
          "Drive to Tangol village in Suru Valley and begin trek to Mt. Nun Base Camp.",
          "Accommodation: Base Camp, triple sharing."
        ]
      },
      {
        day: "5-6",
        title: "Acclimatization, Puja & Training at Base Camp",
        details: [
          "Traditional Buddhist Puja ceremony for mountain blessings. Technical review of fixed rope techniques and ladder crossings.",
          "Accommodation: Base Camp."
        ]
      },
      {
        day: "7-8",
        title: "Load Ferry & Establish Camp 1 (5500m)",
        details: [
          "Climb moraine and glacier sections to establish Camp 1 on the Nun-Kun glacier plateau.",
          "Accommodation: Camp 1."
        ]
      },
      {
        day: "9-11",
        title: "Climb Technical Ice Wall & Establish Camp 2 (6100m)",
        details: [
          "Climb the steep 700m snow and ice wall (50-60 degrees) on fixed lines to establish Camp 2.",
          "Accommodation: Camp 2."
        ]
      },
      {
        day: "12-14",
        title: "Acclimatization, Move to Camp 3 (6400m)",
        details: [
          "Push higher across the plateau to establish Summit Camp (Camp 3) below the summit ridge.",
          "Accommodation: Camp 3."
        ]
      },
      {
        day: "15-17",
        title: "Summit Push: Mt. Nun (7,135m) & Return to Base Camp",
        details: [
          "Midnight alpine summit push along the exposed snow ridge to the summit of Mt. Nun (7,135m).",
          "Stand on the highest summit in Zanskar. Descend safely back down the mountain camps to Base Camp.",
          "Accommodation: Base Camp."
        ]
      },
      {
        day: "18-19",
        title: "Reserve / Weather Buffer Days",
        details: [
          "Reserved for weather windows and route adjustments.",
          "Accommodation: Base Camp."
        ]
      },
      {
        day: 20,
        title: "Base Camp to Tangol – Drive to Leh",
        details: [
          "Pack down Base Camp, trek to Tangol roadhead and drive back to Leh.",
          "Accommodation: Hotel in Leh."
        ]
      },
      {
        day: 21,
        title: "Departure from Leh",
        details: [
          "Transfer to Leh airport for departure."
        ]
      }
    ]
  }
];
