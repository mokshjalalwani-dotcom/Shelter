import { useNavigate } from 'react-router-dom';
import { GALLERY_IMAGES } from '../data/seedData';
import './Gallery.css';

export default function Gallery() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
        {/* Header */}
        <div className="gallery-header animate-in">
          <h1 className="heading-display">THE SHELTER VIBE</h1>
          <p className="text-secondary">Peek into the café & gaming zone</p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-card ${i % 3 === 0 ? 'gallery-card-tall' : ''}`}
              style={{ background: img.color, animationDelay: `${i * 0.08}s` }}
            >
              <span className="gallery-card-emoji">{img.emoji}</span>
              <div className="gallery-card-overlay">
                <span className="gallery-card-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="gallery-bottom">
          <p>Follow us for more vibes</p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-red">
            📸 Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
