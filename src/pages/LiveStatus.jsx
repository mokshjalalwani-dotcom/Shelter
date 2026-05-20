import { Link, useNavigate } from 'react-router-dom';
import { LIVE_STATUS, LIVE_CARDS } from '../data/seedData';
import './LiveStatus.css';

export default function LiveStatus() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
        {/* Header */}
        <div className="live-header animate-in">
          <h1 className="heading-display">
            <span className="status-indicator">
              <span className="dot live"></span> LIVE AT SHELTER
            </span>
          </h1>
          <p className="text-secondary">Real-time status · Updated {LIVE_STATUS.lastUpdated}</p>
        </div>

        {/* Vibe Card */}
        <div className="vibe-card glow-border animate-in">
          <div className="vibe-card-main">
            <span className="vibe-emoji">😎</span>
            <div>
              <p className="vibe-label">Current Vibe</p>
              <h2 className="vibe-text">{LIVE_STATUS.vibe.toUpperCase()} RIGHT NOW</h2>
            </div>
          </div>
          <div className="vibe-stats">
            <div className="vibe-stat">
              <span className="status-indicator"><span className="dot active"></span></span>
              <div>
                <p className="vibe-stat-label">Café</p>
                <p className="vibe-stat-value">{LIVE_STATUS.cafeStatus}</p>
              </div>
            </div>
            <div className="vibe-stat">
              <span className="status-indicator"><span className="dot active"></span></span>
              <div>
                <p className="vibe-stat-label">Gaming</p>
                <p className="vibe-stat-value">{LIVE_STATUS.gamingStatus}</p>
              </div>
            </div>
            <div className="vibe-stat">
              <span style={{ fontSize: '1.2rem' }}>🎮</span>
              <div>
                <p className="vibe-stat-label">Gamers</p>
                <p className="vibe-stat-value">{LIVE_STATUS.activeGamers} Active</p>
              </div>
            </div>
            <div className="vibe-stat">
              <span style={{ fontSize: '1.2rem' }}>🕹️</span>
              <div>
                <p className="vibe-stat-label">Games</p>
                <p className="vibe-stat-value">{LIVE_STATUS.gamesAvailable} Free</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Cards Grid */}
        <div className="live-grid">
          {LIVE_CARDS.map((card, i) => (
            <div
              key={card.id}
              className={`live-card card ${card.status === 'active' ? 'live-card-active' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="live-card-icon">{card.icon}</span>
              <h3 className="live-card-title">{card.title}</h3>
              <p className="live-card-desc text-muted">{card.description}</p>
              <span className={`chip ${
                card.status === 'active' ? 'chip-success' :
                card.status === 'upcoming' ? 'chip-warning' : 'chip-grey'
              }`}>
                {card.status === 'active' && <span className="pulse-dot-success"></span>}
                {card.status === 'upcoming' && <span className="pulse-dot" style={{ background: 'var(--warning)' }}></span>}
                {card.statusText}
              </span>
            </div>
          ))}
        </div>

        {/* Offer Banner */}
        <div className="live-banner offer-banner animate-in">
          <div className="live-banner-content">
            <span className="badge badge-red">Live Offer</span>
            <h3>🏷️ {LIVE_STATUS.currentOffer}</h3>
            <Link to="/offers" className="btn btn-sm btn-outline-red" style={{ marginTop: '8px' }}>View Offers</Link>
          </div>
        </div>

        {/* Event Banner */}
        <div className="live-banner event-banner animate-in">
          <div className="live-banner-content">
            <span className="badge badge-warning">Today's Event</span>
            <h3>🏆 {LIVE_STATUS.eventToday}</h3>
            <Link to="/offers" className="btn btn-sm btn-outline-red" style={{ marginTop: '8px' }}>Event Details</Link>
          </div>
        </div>

        {/* Footer note */}
        <p className="live-updated text-muted">
          Last updated: {LIVE_STATUS.lastUpdated}
        </p>
      </div>
    </div>
  );
}
