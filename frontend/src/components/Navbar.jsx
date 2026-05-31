import { Link, useNavigate } from 'react-router-dom' 
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { ChevronDown, LogOut, User } from 'lucide-react'
import "../style.css"

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    if (isOpen) {
      setIsOpen(false);
    }
    navigate('/');
  };

  return (
    <nav className="nav border-b-2 border-yellow-300">
      <div className="w-[90%] max-w-300 mx-auto flex justify-between items-center">
        <Link to="/">
          <h2>Colway Expedition</h2>
        </Link>

        <div className="flex items-center gap-4 md:gap-0">
          <div className={`links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/activities" onClick={toggleMenu}>Activities</Link>
            <Link to="/enquire" onClick={toggleMenu}>Enquire</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
            {!user && (
              <>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
                <Link to="/signup" className="btn" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {user && (
            <div className="relative z-50">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-white hover:text-yellow-300 font-semibold focus:outline-none transition-all cursor-pointer py-1 md:ml-6"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold uppercase shadow-sm">
                  {user.firstname ? user.firstname[0] : <User size={16} />}
                </div>
                <span className="hidden md:inline max-w-[100px] truncate">{user.firstname}</span>
                <ChevronDown size={14} className={`hidden md:inline transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 transform origin-top-right transition-all">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-xs text-gray-400 font-medium">Signed in as</p>
                      <p className="text-sm font-semibold text-gray-800 truncate text-left">{user.firstname} {user.lastname}</p>
                      <p className="text-xs text-gray-500 truncate text-left">{user.email}</p>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium transition-colors focus:outline-none cursor-pointer"
                    >
                      <LogOut size={16} />
                      Log Out
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          <button className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  ) 
} 
