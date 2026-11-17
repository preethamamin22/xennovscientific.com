import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const PHONE = '918217524813';
    const msg = encodeURIComponent('Hello XenNov Scientific! I visited your website and would like to enquire about laboratory products and solutions.');
    window.open(`https://wa.me/${PHONE}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-5 z-40">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="WhatsApp Enquiry"
      >
        <MessageSquare className="w-4.5 h-4.5 shrink-0" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">WhatsApp Enquiry</span>
      </button>
    </div>
  );
};
