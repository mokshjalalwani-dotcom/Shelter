import { LIVE_STATUS } from '../data/seedData';

// Helper to simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Initialize local storage on first load
if (!localStorage.getItem('SHELTER_LIVE_STATUS')) {
  localStorage.setItem('SHELTER_LIVE_STATUS', JSON.stringify(LIVE_STATUS));
}
if (!localStorage.getItem('SHELTER_INQUIRIES')) {
  localStorage.setItem('SHELTER_INQUIRIES', JSON.stringify([]));
}

export const api = {
  // ── INQUIRIES ──
  submitInquiry: async (inquiryData) => {
    await delay(1200); // Simulate network
    
    // Basic server-side validation simulation
    if (!inquiryData.name || !inquiryData.phone || !inquiryData.date) {
      throw new Error("Missing required fields");
    }

    const inquiries = JSON.parse(localStorage.getItem('SHELTER_INQUIRIES'));
    const newInquiry = {
      ...inquiryData,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    inquiries.push(newInquiry);
    localStorage.setItem('SHELTER_INQUIRIES', JSON.stringify(inquiries));
    return newInquiry;
  },

  getInquiries: async () => {
    await delay(800);
    return JSON.parse(localStorage.getItem('SHELTER_INQUIRIES'));
  },

  updateInquiryStatus: async (id, status) => {
    await delay(600);
    const inquiries = JSON.parse(localStorage.getItem('SHELTER_INQUIRIES'));
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status } : inq);
    localStorage.setItem('SHELTER_INQUIRIES', JSON.stringify(updated));
    return true;
  },

  // ── LIVE STATUS ──
  getLiveStatus: async () => {
    await delay(500);
    return JSON.parse(localStorage.getItem('SHELTER_LIVE_STATUS'));
  },

  updateLiveStatus: async (statusUpdates) => {
    await delay(1000);
    const currentStatus = JSON.parse(localStorage.getItem('SHELTER_LIVE_STATUS'));
    const updatedStatus = { 
      ...currentStatus, 
      ...statusUpdates,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    localStorage.setItem('SHELTER_LIVE_STATUS', JSON.stringify(updatedStatus));
    return updatedStatus;
  }
};
