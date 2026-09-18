import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const ukWhatsAppUrl = 'https://wa.me/447436670553';

  return (
    <aside aria-label="WhatsApp Contact" className="floating-whatsapp-wrapper">
      <a
        href={ukWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Infynix Solutions on WhatsApp (+44 7436 670553)"
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <i className="fa-brands fa-whatsapp floating-whatsapp-icon" aria-hidden="true" />
        <span className="floating-whatsapp-tooltip">Chat with us</span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
