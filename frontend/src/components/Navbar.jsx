import { Link } from 'react-router-dom' 
import { useState } from 'react'
import "../style.css"

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="nav border-b-2 border-yellow-300">
      <div className="w-[90%] max-w-300 mx-auto flex justify-between items-center">
        <Link to="/">
          <h2>Colway Expedition</h2>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/activities" onClick={toggleMenu}>Activities</Link>
          <Link to="/enquire" onClick={toggleMenu}>Enquire</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/signup" className="btn" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  ) 
} 
