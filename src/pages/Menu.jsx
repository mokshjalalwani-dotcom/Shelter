import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/seedData';
import './Menu.css';

const CATEGORY_EMOJI = {
  Frappe: '🧊', 'Hot Coffee': '☕', 'Iced Coffee': '🧋', Shakes: '🥤',
  Mojito: '🍹', 'Iced Tea': '🍵', 'Hot Chocolate': '🍫', Pizza: '🍕',
  Burger: '🍔', Sandwich: '🥪', Frankie: '🌯', Fries: '🍟',
  Maggi: '🍜', Bread: '🍞',
};

const CATEGORY_COLOR = {
  Frappe: '#E0F0FA', 'Hot Coffee': '#FDE8D0', 'Iced Coffee': '#D8EEF8',
  Shakes: '#FDE8EA', Mojito: '#D8F0E0', 'Iced Tea': '#E8F0D8',
  'Hot Chocolate': '#F0E0D0', Pizza: '#FCE4D0', Burger: '#FAE8D0',
  Sandwich: '#F0EAD8', Frankie: '#F8E8D0', Fries: '#FFF0D0',
  Maggi: '#FCF0D0', Bread: '#F8ECD8',
};

export default function Menu() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = MENU_ITEMS.filter(item => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="page">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>← Back</button>
        {/* Header */}
        <div className="menu-header animate-in">
          <h1 className="heading-display">MENU</h1>
          <p className="text-secondary">Explore what Shelter has to offer</p>
        </div>

        {/* Search */}
        <div className="menu-search">
          <span className="menu-search-icon">🔍</span>
          <input
            type="text"
            className="input-field menu-search-input"
            placeholder="Search menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filters */}
        <div className="menu-categories scroll-row">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'chip-red' : 'chip-grey'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat !== 'All' && <span>{CATEGORY_EMOJI[cat]}</span>}
              {cat}
            </button>
          ))}
        </div>

        {/* Items Count */}
        <p className="menu-count text-muted">
          Showing {filtered.length} item{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Menu Grid */}
        {filtered.length === 0 ? (
          <div className="menu-empty">
            <span style={{ fontSize: '3rem' }}>🍽️</span>
            <h3>No items found</h3>
            <p className="text-muted">Try a different search or category</p>
          </div>
        ) : (
          <div className="menu-grid">
            {filtered.map(item => (
              <div key={item.id} className="menu-card card">
                {item.tag && (
                  <span className={`tag menu-card-tag tag-${item.tag.toLowerCase()}`}>
                    {item.tag}
                  </span>
                )}
                <div
                  className="menu-card-icon"
                  style={{ background: CATEGORY_COLOR[item.category] || '#F5F5F5' }}
                >
                  {CATEGORY_EMOJI[item.category] || '🍽️'}
                </div>
                <div className="menu-card-body">
                  <h4 className="menu-card-name">{item.name}</h4>
                  {item.description && (
                    <p className="menu-card-desc text-muted">{item.description}</p>
                  )}
                  <span className="price">₹{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
