import { useState, useEffect } from 'react';
import { api } from '../services/api';
import Toast from '../components/Toast';
import './Admin.css';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });
  
  const [liveVibe, setLiveVibe] = useState('Chill');
  const [activeGamers, setActiveGamers] = useState(0);
  const [inquiries, setInquiries] = useState([]);

  // Fetch initial data
  useEffect(() => {
    async function loadData() {
      const status = await api.getLiveStatus();
      if (status) {
        setLiveVibe(status.vibe);
        setActiveGamers(status.activeGamers);
      }
      const inqs = await api.getInquiries();
      if (inqs) setInquiries(inqs);
    }
    loadData();
  }, [activeTab]);

  const handleUpdateLive = async () => {
    setLoading(true);
    try {
      await api.updateLiveStatus({ vibe: liveVibe, activeGamers: Number(activeGamers) });
      setToast({ message: 'Live status updated!', type: 'success' });
    } catch (err) {
      setToast({ message: 'Error updating status', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateInquiry = async (id, status) => {
    try {
      await api.updateInquiryStatus(id, status);
      const inqs = await api.getInquiries();
      setInquiries(inqs);
      setToast({ message: `Inquiry marked as ${status}`, type: 'success' });
    } catch (err) {
      setToast({ message: 'Error updating inquiry', type: 'error' });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'live':
        return (
          <div className="admin-section animate-in">
            <h2>Update Live Status</h2>
            <div className="admin-card">
              <div className="input-group">
                <label>Current Vibe</label>
                <select className="input-field" value={liveVibe} onChange={(e) => setLiveVibe(e.target.value)}>
                  <option>Chill</option>
                  <option>Buzzing</option>
                  <option>Packed</option>
                  <option>Tournament</option>
                </select>
              </div>
              <div className="input-group" style={{ marginTop: '16px' }}>
                <label>Active Gamers</label>
                <input type="number" className="input-field" value={activeGamers} onChange={(e) => setActiveGamers(e.target.value)} />
              </div>
              <button 
                className="btn btn-primary" 
                style={{ marginTop: '24px' }}
                onClick={handleUpdateLive}
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Live Status'}
              </button>
            </div>
          </div>
        );
      case 'inquiries':
        return (
          <div className="admin-section animate-in">
            <h2>Recent Inquiries</h2>
            <div className="admin-card">
              {inquiries.length === 0 ? <p className="text-muted">No inquiries yet.</p> : inquiries.map(inq => (
                <div key={inq.id} className="admin-inquiry-item" style={{ marginBottom: '12px' }}>
                  <div className="admin-inquiry-header">
                    <strong>{inq.name}</strong>
                    <span className={`badge ${inq.status === 'pending' ? 'badge-warning' : 'badge-red'}`}>{inq.status}</span>
                  </div>
                  <p className="text-secondary" style={{ fontSize: '14px', margin: '8px 0' }}>{inq.game} • {inq.date} {inq.time} • {inq.people} Players</p>
                  <p className="text-secondary" style={{ fontSize: '12px', margin: '8px 0' }}>Phone: {inq.phone} {inq.notes && `• Note: ${inq.notes}`}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="btn btn-sm" style={{ background: '#2ECC71', color: 'white' }} onClick={() => handleUpdateInquiry(inq.id, 'accepted')}>Accept</button>
                    <button className="btn btn-sm btn-secondary" onClick={() => handleUpdateInquiry(inq.id, 'declined')}>Decline</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'games':
        return (
          <div className="admin-section animate-in">
            <h2>Manage Games</h2>
            <div className="admin-card">
              <p className="text-muted">Manage games feature coming soon in phase 2.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="admin-section animate-in">
            <h2>Admin Dashboard</h2>
            <div className="admin-grid">
              <div className="admin-stat-card" onClick={() => setActiveTab('inquiries')}>
                <span className="admin-stat-icon">📩</span>
                <h3>{inquiries.filter(i => i.status === 'pending').length} Pending Inquiries</h3>
                <p className="text-muted">Requires attention</p>
              </div>
              <div className="admin-stat-card" onClick={() => setActiveTab('live')}>
                <span className="admin-stat-icon">⚡</span>
                <h3>Live Status</h3>
                <p className="text-muted">Currently: {liveVibe}</p>
              </div>
              <div className="admin-stat-card" onClick={() => setActiveTab('games')}>
                <span className="admin-stat-icon">🎮</span>
                <h3>Game Availability</h3>
                <p className="text-muted">Manage consoles & PCs</p>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-icon">📋</span>
                <h3>Menu Items</h3>
                <p className="text-muted">Update prices & stock</p>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-icon">🏷️</span>
                <h3>Offers & Events</h3>
                <p className="text-muted">Manage promotions</p>
              </div>
              <div className="admin-stat-card">
                <span className="admin-stat-icon">📸</span>
                <h3>Gallery</h3>
                <p className="text-muted">Upload new photos</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="page admin-page">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: '' })} />
      <div className="container">
        <div className="admin-layout">
          {/* Mobile Tab Nav / Desktop Side Nav */}
          <div className="admin-nav">
            <h3 className="heading-display" style={{ padding: '0 16px', marginBottom: '16px' }}>SHELTER ADMIN</h3>
            <button className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>📊 Dashboard</button>
            <button className={`admin-nav-item ${activeTab === 'inquiries' ? 'active' : ''}`} onClick={() => setActiveTab('inquiries')}>📩 Inquiries <span className="badge badge-red" style={{ marginLeft: 'auto' }}>{inquiries.filter(i => i.status === 'pending').length}</span></button>
            <button className={`admin-nav-item ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}>⚡ Live Status</button>
            <button className={`admin-nav-item ${activeTab === 'games' ? 'active' : ''}`} onClick={() => setActiveTab('games')}>🎮 Games</button>
            <button className={`admin-nav-item`} onClick={() => alert('Static demo')}>📋 Menu</button>
            <button className={`admin-nav-item`} onClick={() => alert('Static demo')}>🏷️ Offers</button>
          </div>

          {/* Main Content Area */}
          <div className="admin-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
