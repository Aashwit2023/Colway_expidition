// This is the ImageSlider component for the TravelX website, displaying a rotating slideshow of travel images. Connected to src/components/Home.jsx for inclusion, and src/style.css for styling.
import { useEffect, useState } from "react" 

const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 
  "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
]

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length) 
    }, 3000)
    return () => clearInterval(interval) 
  }, [])

  return (
    <div className="slider">
      <img src={images[current]} alt="travel" /> 
    </div> 
  )
} 
