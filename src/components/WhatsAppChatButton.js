import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, TEXT_ON_PRIMARY } from '@/styles/theme';

const WhatsAppChatButton = () => {
  // Removes spaces, plus signs, and any other non-digit characters from the phone number
  const phoneNumber = companyInfo.contact.phone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }} 
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppChatButton;
