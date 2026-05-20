import { Link } from 'react-router-dom';
import { BRAND, LIVE_STATUS } from '../data/seedData';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>

        {/* Floating live cards */}
        <div className="hero-float hero-float-1">
          <div className="hero-float-card glass-card">
            <span className="pulse-dot-success"></span>
            <span>Open Now</span>
          </div>
        </div>
        <div className="hero-float hero-float-2">
          <div className="hero-float-card glass-card">
            <span>🎮</span>
            <span>{LIVE_STATUS.gamesAvailable} Games Available</span>
          </div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              LIVE NOW — SHELTER IS OPEN
            </div>
            <h1 className="hero-title">
              Gaming. Café.<br />
              <span className="hero-title-accent">Live Vibe.</span>
            </h1>
            <p className="hero-subtitle">
              Book gaming. Explore the menu. Feel the vibe.<br className="hide-mobile" />
              Check what's happening before you come.
            </p>
            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary hero-btn">
                🎮 Book Gaming
              </Link>
              <Link to="/live" className="btn btn-secondary hero-btn">
                ⚡ Quick Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIVE STRIP ═══════════════ */}
      <section className="live-strip">
        <div className="container">
          <div className="live-strip-header">
            <h2 className="live-strip-title">
              <span className="status-indicator"><span className="dot live"></span></span>
              Live at Shelter
            </h2>
            <Link to="/live" className="live-strip-link">Full Dashboard →</Link>
          </div>
          <div className="live-strip-grid">
            <div className="live-strip-card live-strip-primary glow-border">
              <div className="live-strip-card-icon">😎</div>
              <div>
                <p className="live-strip-card-label">Current Vibe</p>
                <p className="live-strip-card-value">{LIVE_STATUS.vibe}</p>
              </div>
            </div>
            <div className="live-strip-card">
              <div className="live-strip-card-icon">🎮</div>
              <div>
                <p className="live-strip-card-label">Gaming</p>
                <p className="live-strip-card-value">{LIVE_STATUS.activeGamers} Playing</p>
              </div>
            </div>
            <div className="live-strip-card">
              <div className="live-strip-card-icon">🕹️</div>
              <div>
                <p className="live-strip-card-label">Games</p>
                <p className="live-strip-card-value">{LIVE_STATUS.gamesAvailable} Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ DASHBOARD LAUNCHPAD ═══════════════ */}
      <section className="dashboard-launchpad">
        <div className="container">
          <div className="launchpad-grid">
            <Link to="/menu" className="launchpad-card bg-orange">
              <div className="launchpad-icon">📋</div>
              <h3>Café Menu</h3>
              <p>Explore 100+ items</p>
            </Link>
            <Link to="/games" className="launchpad-card bg-purple">
              <div className="launchpad-icon">🎮</div>
              <h3>Game Zone</h3>
              <p>Check availability</p>
            </Link>
            <Link to="/offers" className="launchpad-card bg-pink">
              <div className="launchpad-icon">🏷️</div>
              <h3>Offers & Events</h3>
              <p>Tournaments & deals</p>
            </Link>
            <Link to="/gallery" className="launchpad-card bg-blue">
              <div className="launchpad-icon">📸</div>
              <h3>The Vibe</h3>
              <p>Shelter gallery</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ BOOKING TEASER ═══════════════ */}
      <section className="booking-teaser">
        <div className="container">
          <div className="booking-teaser-card">
            <div className="booking-teaser-content">
              <h2 className="heading-display">READY TO VISIT?</h2>
              <p>Send a quick inquiry to book your gaming session. We'll confirm instantly via WhatsApp.</p>
              <div className="booking-teaser-actions">
                <Link to="/booking" className="btn btn-primary">📅 Send Inquiry</Link>
                <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <div className="booking-teaser-visual">
              <div className="booking-teaser-item">🎮 PS5 Games</div>
              <div className="booking-teaser-item">🖥️ PC Gaming</div>
              <div className="booking-teaser-item">☕ Café</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
