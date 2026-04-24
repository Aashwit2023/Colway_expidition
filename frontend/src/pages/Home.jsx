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
          title: "Friendship Trek, India",
          description: "Celebrate the universal bond of friendship with our unique travel experiences designed to connect you with people and cultures around the world."
        } 
      ];

  const treks = [
    {
      image: trekking1,
      title: "Expeditions",
      location: "High-altitude adventure",
      description: "Explore the most iconic Himalayan expeditions with expertly curated routes, local guides, and unforgettable mountain views.",
      duration: "Explore",
      grade: "All Levels",
      link: "/expeditions"
    },
    {
      image: trekking2,
      title: "Trekking",
      location: "Trail experiences",
      description: "Discover scenic trails through valleys, forests, and mountain terrain designed for both beginners and seasoned trekkers.",
      duration: "Discover",
      grade: "All Trails",
      link: "/trekking"
    },
    {
      image: cultural,
      title: "Villages",
      location: "Cultural immersion",
      description: "Experience authentic village life, local culture, and meaningful homestays in the heart of the Himalayas.",
      duration: "Experience",
      grade: "Local Culture",
      link: "/villages"
    },
    {
      image: kailash,
      title: "Kailash Trek",
      location: "Spiritual journey",
      description: "Embark on a sacred pilgrimage to Mount Kailash with deep cultural insights and soulful mountain encounters.",
      duration: "Pilgrimage",
      grade: "Sacred Trek",
      link: "/kailash-trek"
    }
  ];
    return (
      <>
        <TrekSlider treks={treks} />

        <ExploreTheme items={themes} heading="Popular Adventures"/>

        <section className="why-choose-us container">
          <h2>Why Travelers Choose Us</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="icon">🏆</div>
              <h3>Expertise</h3>
              <p>Over 20 years of crafting bespoke travel experiences.</p>
            </div>

            <div className="reason-card">
              <div className="icon">🌟</div>
              <h3>Personalization</h3>
              <p>Tailored itineraries designed just for you.</p>
            </div>

            <div className="reason-card">
              <div className="icon">🛡️</div>
              <h3>Safety & Security</h3>
              <p>24/7 support and comprehensive travel insurance.</p>
            </div>

            <div className="reason-card">
              <div className="icon">💎</div>
              <h3>Exclusive Access</h3>
              <p>Access to private events and VIP experiences.</p>
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

      </>
    );
  }
