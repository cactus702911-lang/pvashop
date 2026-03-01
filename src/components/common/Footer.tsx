import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, ShoppingBag, Facebook, CreditCard, ShieldCheck } from 'lucide-react';
import { useContentStore } from '../../store/contentStore';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { footer, header, contact } = useContentStore();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
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
                <Link to="/shop" className="hover:text-blue-400 transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Company</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">Latest News</Link>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Policy & Terms</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">Replacement Guide</Link>
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

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">&copy; {currentYear} {footer.copyright}</p>
          
          {/* Payment Methods */}
          <div className="flex items-center gap-4">
             <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">We Accept:</span>
             <div className="flex gap-2 opacity-70">
                <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold">VISA</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold">MasterCard</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold">Crypto</div>
                <div className="bg-white/10 px-2 py-1 rounded text-xs font-bold">Wise</div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
