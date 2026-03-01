
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const pathname = usePathname();
  const { header } = useContentStore();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

  const isActive = (path) => {
    return pathname === path ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              {header.logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm transition-colors ${isActive('/')}`}>Home</Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary font-medium focus:outline-none">
                Categories <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                 <div className="p-2 flex flex-col gap-1">
                    {header.categories?.map((cat, idx) => (
                        <Link 
                           key={idx} 
                           href={`/shop?category=${encodeURIComponent(cat)}`}
                           className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors text-left"
                        >
                           {cat}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-1"></div>
                    <Link 
                       href="/shop"
                       className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg transition-colors text-left font-semibold"
                    >
                       View All
                    </Link>
                 </div>
              </div>
            </div>

            <Link href="/services" className={`text-sm transition-colors ${isActive('/services')}`}>Services</Link>
            <Link href="/about" className={`text-sm transition-colors ${isActive('/about')}`}>About</Link>
            <Link href="/blog" className={`text-sm transition-colors ${isActive('/blog')}`}>Blog</Link>
            <Link href="/contact" className={`text-sm transition-colors ${isActive('/contact')}`}>Contact</Link>

            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {header.ctaButton}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className={`text-base py-2 ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
            
            {/* Mobile Categories */}
            <div className="border-b border-gray-100 pb-2">
                <button 
                  onClick={toggleCategory}
                  className="flex items-center justify-between w-full text-base py-2 text-gray-600"
                >
                    Categories <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCategoryOpen && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 bg-gray-50 rounded-lg p-2">
                        {header.categories?.map((cat, idx) => (
                            <Link 
                               key={idx}
                               href={`/shop?category=${encodeURIComponent(cat)}`}
                               className="py-2 text-sm text-gray-600 hover:text-primary"
                               onClick={() => setIsMenuOpen(false)}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link href="/services" className={`text-base py-2 ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/about" className={`text-base py-2 ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/blog" className={`text-base py-2 ${isActive('/blog')}`} onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className={`text-base py-2 ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>

            <Link
              href="/contact"
              className="bg-primary text-white text-center px-5 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {header.ctaButton}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
