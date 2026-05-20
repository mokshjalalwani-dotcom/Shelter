import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../data/seedData';
import './BottomNav.css';

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        const isLive = item.label === 'Live';
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="bottom-nav-icon">
              {item.icon}
              {isLive && <span className="bottom-nav-live-dot"></span>}
            </span>
            <span className="bottom-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
