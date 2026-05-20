import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
              <span className="navbar-title">SHELTER</span>
              <span className="navbar-subtitle">CAFÉ & GAMING ZONE</span>
            </Link>
          </div>
          
          <div className="navbar-actions">
            <div className="navbar-live-status">
              <span className="pulse-dot-success"></span>
              <span className="navbar-live-text">Open Now</span>
            </div>
            
            <Link to="/booking" className="btn btn-primary btn-sm navbar-book-btn">
              Book Now
            </Link>

            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* True Mobile Side Drawer */}
      {isMenuOpen && (
        <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="navbar-logo">
                <span className="navbar-title">SHELTER</span>
                <span className="navbar-subtitle">CAFÉ & GAMING ZONE</span>
              </div>
              <button className="drawer-close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
            </div>
            <div className="drawer-links">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>🏠 Home Dashboard</Link>
              <Link to="/menu" onClick={() => setIsMenuOpen(false)}>📋 Menu</Link>
              <Link to="/games" onClick={() => setIsMenuOpen(false)}>🎮 Game Zone</Link>
              <Link to="/live" onClick={() => setIsMenuOpen(false)}>📡 Live Status</Link>
              <Link to="/offers" onClick={() => setIsMenuOpen(false)}>🏷️ Offers & Events</Link>
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>📸 Gallery</Link>
              <Link to="/booking" onClick={() => setIsMenuOpen(false)}>📅 Book Gaming</Link>
              <Link to="/admin" onClick={() => setIsMenuOpen(false)}>⚙️ Admin Panel</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
