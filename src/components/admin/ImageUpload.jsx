
"use client";
import React, { useRef, useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const ImageUpload = ({ value, onChange, label, className = '' }) => {
  const fileInputRef = useRef(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    // Validate file size (e.g., max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError('Image size should be less than 2MB');
      return;
    }

    setError('');
    
    // Convert to Base64 and compress if needed (simple canvas compression could be added here, 
    // but for now we'll just use FileReader)
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      onChange(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="block text-slate-400 text-sm mb-1">{label}</label>}
      
      <div className="flex gap-4 items-start">
        {/* Preview Area */}
        <div className="relative w-32 h-32 bg-slate-700 rounded-lg overflow-hidden border border-slate-600 flex-shrink-0">
          {value ? (
            <>
              <img src={value} alt="Preview" className="w-full h-full object-cover" />
              <button 
                onClick={() => onChange('')}
                className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
                title="Remove image"
              >
                <X className="w-3 h-3" />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              <ImageIcon className="w-8 h-8 opacity-50" />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex-1">
          <div 
            className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors cursor-pointer ${
              isDragging 
                ? 'border-blue-500 bg-blue-500/10' 
                : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700/50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*"
              onChange={handleFileChange}
            />
            <p className="text-slate-300 font-medium mb-1">Click to upload or drag & drop</p>
            <p className="text-slate-500 text-xs">SVG, PNG, JPG or GIF (max. 2MB)</p>
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
