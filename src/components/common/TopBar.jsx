
"use client";
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const TopBar = () => {
  const { notification } = useContentStore();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !notification) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-2 px-4 relative z-[60] text-sm font-medium border-b border-blue-700/50">
      <div className="container mx-auto flex items-center justify-center">
        <span>{notification}</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
