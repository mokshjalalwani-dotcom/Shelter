import { BRAND } from '../data/seedData';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
    </a>
  );
}
