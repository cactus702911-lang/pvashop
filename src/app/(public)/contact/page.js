
"use client";
import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin, Facebook, Twitter, Linkedin, Instagram, HelpCircle, CheckCircle } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const Contact = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
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
    window.open(`https://wa.me/${social.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedText}`, '_blank');
  };

  const handleTelegramSubmit = () => {
    window.open(`https://t.me/${social.telegram}`, '_blank');
  };

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered instantly or within 24 hours. Complex orders may take up to 48 hours."
    },
    {
      question: "Do you offer replacements?",
      answer: "Yes, we offer a replacement guarantee for any accounts that don't work upon first login (within 24-48 hours)."
    },
    {
      question: "Are the accounts phone verified?",
      answer: "Yes, our accounts are Phone Verified Accounts (PVA) created with unique IPs for better stability."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Crypto, Wise, and other secure payment methods. Contact us for specific requests."
    }
  ];

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
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Phone / WhatsApp</p>
                      <p className="font-medium">{contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Telegram Support</p>
                      <p className="font-medium">@{social.telegram}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm mb-1">Location</p>
                      <p className="font-medium">{contact.address}</p>
                      {contact.locationSubtitle && (
                        <p className="text-blue-200 text-xs mt-1">{contact.locationSubtitle}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <p className="text-blue-200 text-sm mb-4">Follow us for updates</p>
                 <div className="flex gap-4">
                    <a href={social.facebook || "#"} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href={social.twitter || "#"} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={social.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={social.instagram || "#"} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              
              {isSuccess && (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 flex items-center gap-2">
                   <CheckCircle className="w-5 h-5" />
                   <span>Message sent successfully! We will get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                       <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                       <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                       />
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Order ID (Optional)</label>
                       <input 
                          type="text" 
                          name="orderId"
                          value={formData.orderId}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="#ORD-12345"
                       />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested</label>
                       <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                       >
                          <option>Facebook Accounts</option>
                          <option>Instagram Accounts</option>
                          <option>Twitter/X Accounts</option>
                          <option>Gmail Accounts</option>
                          <option>Other</option>
                       </select>
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       rows={5}
                       className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                       placeholder="How can we help you today?"
                    ></textarea>
                 </div>

                 <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg w-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                 >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                 </button>
                 
                 <div className="flex items-center gap-4 mt-6">
                   <div className="h-px bg-slate-200 flex-grow"></div>
                   <span className="text-slate-400 text-sm">Or contact via</span>
                   <div className="h-px bg-slate-200 flex-grow"></div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <button
                     type="button"
                     onClick={handleWhatsAppSubmit}
                     className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-green-500 text-green-600 hover:bg-green-50 transition-colors font-medium"
                   >
                     <Phone className="w-5 h-5" /> WhatsApp
                   </button>
                   <button
                     type="button"
                     onClick={handleTelegramSubmit}
                     className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-sky-500 text-sky-600 hover:bg-sky-50 transition-colors font-medium"
                   >
                     <Send className="w-5 h-5" /> Telegram
                   </button>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
             <p className="text-slate-600">Find answers to common questions about our services.</p>
           </div>
           
           <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                   <h3 className="font-bold text-lg mb-2 flex items-start gap-3 text-slate-900">
                     <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                     {faq.question}
                   </h3>
                   <p className="text-slate-600 ml-9 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
