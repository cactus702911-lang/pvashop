
"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const WhatsAppButton = () => {
  const { social } = useContentStore();

  if (!social.whatsapp) return null;

  const whatsappUrl = `https://wa.me/${social.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with me
      </span>
    </a>
  );
};

export default WhatsAppButton;
