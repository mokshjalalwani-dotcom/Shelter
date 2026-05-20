import { Link } from 'react-router-dom';
import { BRAND } from '../data/seedData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">SHELTER</h3>
            <p className="footer-tagline">CAFÉ & GAMING ZONE</p>
            <p className="footer-desc">
              Your favourite spot to chill, game, eat, and hang out.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/games">Game Zone</Link>
            <Link to="/booking">Book / Inquiry</Link>
            <Link to="/offers">Offers & Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/live">Live Status</Link>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>📍 {BRAND.address}</p>
            <p>📞 {BRAND.phone}</p>
            <p>🕐 {BRAND.hours}</p>
            <p>✉️ {BRAND.email}</p>
            <div className="footer-social">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                📸 Instagram
              </a>
              <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made with ❤️ for Shelter</p>
        </div>
      </div>
    </footer>
  );
}
