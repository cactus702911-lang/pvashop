
"use client";
import React, { useRef, useState } from 'react';
import { X, FileText } from 'lucide-react';

const FileUpload = ({ 
  value, 
  onChange, 
  label, 
  className = '',
  accept = ".pdf,.doc,.docx"
}) => {
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
    // Validate file size (max 5MB for PDFs)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      return;
    }

    setError('');
    
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

  // Check if the current value is a data URL (uploaded file) or a regular URL
  const isDataUrl = value?.startsWith('data:');
  const fileName = isDataUrl ? 'Uploaded File' : value.split('/').pop() || 'File Link';

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <label className="block text-slate-400 text-sm mb-1">{label}</label>}
      
      <div className="flex gap-4 items-start">
        {/* Preview Area */}
        <div className="relative w-32 h-32 bg-slate-700 rounded-lg overflow-hidden border border-slate-600 flex-shrink-0 flex items-center justify-center">
          {value ? (
            <div className="text-center p-2">
              <FileText className="w-8 h-8 text-blue-400 mx-auto mb-1" />
              <p className="text-xs text-slate-300 truncate max-w-full px-1">{isDataUrl ? 'PDF/Doc' : 'External Link'}</p>
              <button 
                onClick={() => onChange('')}
                className="absolute top-1 right-1 bg-red-500/80 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
                title="Remove file"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <div className="text-center text-slate-500">
              <FileText className="w-8 h-8 opacity-50 mx-auto" />
              <span className="text-xs">No File</span>
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
              accept={accept}
              onChange={handleFileChange}
            />
            <p className="text-slate-300 font-medium mb-1">Click to upload or drag & drop</p>
            <p className="text-slate-500 text-xs">PDF, DOC, DOCX (max. 5MB)</p>
          </div>
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
