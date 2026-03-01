import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle, HelpCircle } from 'lucide-react';
import { useContentStore } from '../store/contentStore';

const Contact: React.FC = () => {
  const { contact, social } = useContentStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    service: 'Facebook Accounts',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        orderId: '',
        service: 'Facebook Accounts',
        quantity: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsAppSubmit = () => {
    const text = `Hello, I would like to order:
    
Name: ${formData.name}
Service: ${formData.service}
Quantity: ${formData.quantity}
Details: ${formData.message}
Order ID: ${formData.orderId || 'N/A'}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${social.whatsapp.replace(/\+/g, '')}?text=${encodedText}`, '_blank');
  };

  const handleTelegramSubmit = () => {
    // Telegram doesn't support pre-filled messages via URL in the same way as WhatsApp for direct chats easily without a bot, 
    // but we can open the chat. For better UX, we'll open the chat and user can paste.
    // Or we can just open the chat.
    window.open(`https://t.me/${social.telegram}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{contact.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Contact Info */}
            <div className="lg:w-1/3 bg-blue-600 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Support Email</p>
                      <p className="font-medium break-all">{contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">WhatsApp / Telegram</p>
                      <p className="font-medium">{contact.phone}</p>
                      <p className="font-medium">@{social.telegram}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Working Hours</p>
                      <p className="font-medium">24/7 Live Support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold mb-2">Need Faster Reply?</h4>
                  <p className="text-sm text-blue-100 mb-4">Contact us directly on WhatsApp or Telegram for instant order updates.</p>
                  <div className="space-y-3">
                    <a 
                      href={`https://wa.me/${social.whatsapp.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center w-full bg-white text-blue-600 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <a 
                      href={`https://t.me/${social.telegram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-400 transition-colors"
                    >
                      Chat on Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 p-10">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Send className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                  <p className="text-slate-600">Our support team will contact you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-blue-600 font-medium hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Account Type</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                      >
                        <option>Facebook Accounts</option>
                        <option>Google/Gmail Accounts</option>
                        <option>Instagram Accounts</option>
                        <option>Google Voice</option>
                        <option>Reviews (Google/Trustpilot)</option>
                        <option>Other Service</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">Quantity Needed</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="e.g. 50"
                      />
                    </div>
                  </div>
                  
                  <div>
                      <label htmlFor="orderId" className="block text-sm font-medium text-slate-700 mb-2">Order ID (If reporting issue)</label>
                      <input
                        type="text"
                        id="orderId"
                        name="orderId"
                        value={formData.orderId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="e.g. #ORD-12345"
                      />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Requirements / Issue Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder="Please specify country, age, or format requirements..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" /> Submit via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={handleTelegramSubmit}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" /> Submit via Telegram
                    </button>
                  </div>
                  
                  <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-slate-200"></div>
                      <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Or send via email</span>
                      <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-slate-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending Email...
                      </>
                    ) : (
                      <>
                        Submit via Email <Mail className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
