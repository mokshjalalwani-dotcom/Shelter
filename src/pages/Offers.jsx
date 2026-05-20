import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OFFERS } from '../data/seedData';
import './Offers.css';

export default function Offers() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? OFFERS
    : OFFERS.filter(o => o.type === filter.toLowerCase());

  return (
    <div className="page">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
        {/* Header */}
        <div className="offers-header animate-in">
          <h1 className="heading-display">OFFERS & EVENTS</h1>
          <p className="text-secondary">Don't miss out on deals and experiences at Shelter</p>
        </div>

        {/* Filters */}
        <div className="offers-filters">
          {['All', 'Offers', 'Events'].map(f => (
            <button
              key={f}
              className={`chip ${filter === f ? 'chip-red' : 'chip-grey'}`}
              onClick={() => setFilter(f)}
            >
              {f === 'Offers' ? '🏷️' : f === 'Events' ? '🏆' : '✨'} {f}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="offers-grid">
          {filtered.map((offer, i) => (
            <div
              key={offer.id}
              className={`offer-card card ${offer.type === 'event' ? 'offer-card-event' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`offer-card-top ${offer.type === 'event' ? 'offer-top-event' : 'offer-top-offer'}`}>
                <span className="badge badge-red">{offer.badge}</span>
                <h3 className="offer-card-title">{offer.title}</h3>
                <p className="offer-card-subtitle">{offer.subtitle}</p>
              </div>
              <div className="offer-card-bottom">
                <p className="offer-card-desc text-secondary">{offer.description}</p>
                <button className="btn btn-primary btn-sm">{offer.cta}</button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="offers-bottom">
          <p>Have a suggestion? Let us know!</p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-outline-red">
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
