import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GAMES } from '../data/seedData';
import './Games.css';

export default function Games() {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState('All');
  const filtered = platform === 'All' ? GAMES : GAMES.filter(g => g.platform === platform);
  const availableCount = GAMES.filter(g => g.availability === 'available').length;
  const occupiedCount = GAMES.filter(g => g.availability === 'occupied').length;

  return (
    <div className="page">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
        {/* Header */}
        <div className="games-header animate-in">
          <h1 className="heading-display">GAME ZONE</h1>
          <p className="text-secondary">Check availability and book your gaming session</p>
        </div>

        {/* Stats */}
        <div className="games-stats">
          <div className="games-stat-card">
            <p className="games-stat-value">{GAMES.length}</p>
            <p className="games-stat-label">Total Games</p>
          </div>
          <div className="games-stat-card stat-available">
            <p className="games-stat-value">{availableCount}</p>
            <p className="games-stat-label">Available</p>
          </div>
          <div className="games-stat-card stat-occupied">
            <p className="games-stat-value">{occupiedCount}</p>
            <p className="games-stat-label">Occupied</p>
          </div>
        </div>

        {/* Platform Filter */}
        <div className="games-filters">
          {['All', 'PS5', 'PC'].map(p => (
            <button
              key={p}
              className={`chip ${platform === p ? 'chip-red' : 'chip-grey'}`}
              onClick={() => setPlatform(p)}
            >
              {p === 'PS5' ? '🎮' : p === 'PC' ? '🖥️' : '🕹️'} {p}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="games-grid">
          {filtered.map((game, i) => (
            <div key={game.id} className="game-card card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="game-card-screen">
                <span className="game-card-emoji">{game.image}</span>
              </div>
              <div className="game-card-body">
                <h3 className="game-card-name">{game.name}</h3>
                <div className="game-card-meta">
                  <span className="badge badge-red">{game.platform}</span>
                  <span className={`chip ${game.availability === 'available' ? 'chip-success' : 'chip-red'}`}>
                    {game.availability === 'available' && <span className="pulse-dot-success"></span>}
                    {game.availability === 'available' ? 'Available' : 'Occupied'}
                  </span>
                </div>
                <p className="price game-card-price">₹{game.pricePerHour}/hr</p>
                {game.availability === 'occupied' && game.nextSlot && (
                  <p className="game-card-next text-muted">Next free: {game.nextSlot}</p>
                )}
                {game.availability === 'available' && (
                  <Link to="/booking" className="btn btn-outline-red btn-sm game-card-cta">Book Now</Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="games-bottom-cta">
          <p>Ready to play? Send a quick gaming inquiry!</p>
          <Link to="/booking" className="btn btn-primary">🎮 Book Gaming Session</Link>
        </div>
      </div>
    </div>
  );
}
