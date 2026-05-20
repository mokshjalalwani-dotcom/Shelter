import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BRAND, GAME_INTERESTS } from '../data/seedData';
import { api } from '../services/api';
import Toast from '../components/Toast';
import './Booking.css';

export default function Booking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', game: 'Any Available Game', date: '', time: '', people: '', notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.submitInquiry(form);
      setSubmitted(true);
      setToast({ message: 'Inquiry sent successfully!', type: 'success' });
    } catch (err) {
      setToast({ message: 'Error sending inquiry. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', game: 'Any Available Game', date: '', time: '', people: '', notes: '' });
  };

  if (submitted) {
    return (
      <div className="page">
        <div className="container">
          <div className="booking-success animate-in">
            <span className="booking-success-icon">✅</span>
            <h2 className="heading-display">INQUIRY SENT!</h2>
            <p className="text-secondary">
              We'll get back to you shortly. You can also reach us on WhatsApp for instant confirmation.
            </p>
            <div className="booking-success-actions">
              <button onClick={handleReset} className="btn btn-primary">Send Another</button>
              <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: '' })} />
      <div className="container">
        {/* Back Button */}
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Header */}
        <div className="booking-header animate-in">
          <h1 className="heading-display">GAMING INQUIRY</h1>
          <p className="text-secondary">Book your gaming session — we'll confirm via WhatsApp</p>
        </div>

        {/* Form */}
        <form className="booking-form card" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="booking-name">Name</label>
            <input
              id="booking-name"
              className="input-field"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="booking-phone">Phone</label>
            <input
              id="booking-phone"
              className="input-field"
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="booking-game">Game Interest</label>
            <select
              id="booking-game"
              className="input-field"
              name="game"
              value={form.game}
              onChange={handleChange}
            >
              {GAME_INTERESTS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="booking-row">
            <div className="input-group">
              <label htmlFor="booking-date">Date</label>
              <input
                id="booking-date"
                className="input-field"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="booking-time">Time</label>
              <input
                id="booking-time"
                className="input-field"
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="booking-people">Number of Players</label>
            <input
              id="booking-people"
              className="input-field"
              type="number"
              name="people"
              placeholder="1 – 8"
              min="1"
              max="8"
              value={form.people}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="booking-notes">Notes</label>
            <textarea
              id="booking-notes"
              className="input-field booking-textarea"
              name="notes"
              placeholder="Any preferences? (e.g., specific console, tournament interest)"
              rows="3"
              value={form.notes}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary booking-submit" disabled={loading}>
            {loading ? 'Sending...' : '🎮 Send Gaming Inquiry'}
          </button>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary booking-whatsapp"
          >
            💬 Or Message Us on WhatsApp
          </a>
        </form>
      </div>
    </div>
  );
}
