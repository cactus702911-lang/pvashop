
"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ShoppingBag, Facebook, ShieldCheck, CreditCard } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { footer, header, contact } = useContentStore();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{header.logoText}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {footer.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400 font-bold">
               <ShieldCheck className="w-4 h-4" /> Verified Seller
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="/shop" className="hover:text-blue-400 transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Company</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">Latest News</Link>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Policy & Terms</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition-colors">Replacement Guide</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {footer.copyright}
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4">
             <span className="text-sm text-slate-400 font-medium">We Accept Payment Via:</span>
             <div className="flex gap-2">
                <div className="bg-white/5 px-3 py-1 rounded border border-white/10 flex items-center gap-2">
                   <CreditCard className="w-4 h-4 text-blue-400" />
                   <span className="text-xs text-slate-300">PayPal</span>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded border border-white/10 flex items-center gap-2">
                   <span className="text-xs font-bold text-yellow-500">₿</span>
                   <span className="text-xs text-slate-300">Crypto</span>
                </div>
                <div className="bg-white/5 px-3 py-1 rounded border border-white/10 flex items-center gap-2">
                   <span className="text-xs font-bold text-green-500">Wise</span>
                   <span className="text-xs text-slate-300">Transfer</span>
                </div>
             </div>
             <p className="text-slate-600 text-xs flex items-center gap-1">
               {footer.designedBy}
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
