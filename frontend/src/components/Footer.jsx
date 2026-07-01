import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Colway Expedition</h3>
            <p>Creating extraordinary travel experiences since 2025.</p>
            <p>Model town, Manali</p>
            <p>Himachal Pradesh, 175131</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/trekking">Trekking</Link>
              </li>
              <li>
                <Link to="/expeditions">Expeditions</Link>
              </li>
              <li>
                <Link to="/villages">Villages</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/#faq">FAQ</Link>
              </li>
              <li>
                <Link to="/cancellation-policy">Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>info.colwayexpedition@gmail.com</p>
            <p>+91 85807 79179</p>
            <a
              href="https://www.instagram.com/colwayhimalayanexpedition/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
              Follow us on Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Colway Expeditions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
