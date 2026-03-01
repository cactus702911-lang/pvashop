import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check, ArrowRight, Users, Camera, MessageSquare, Briefcase, Mail, Phone, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContentStore } from '../store/contentStore';

const Services: React.FC = () => {
  const { servicesPage } = useContentStore();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {servicesPage.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            {servicesPage.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Categories Grid (Formerly Social Media Accounts) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <h2 className="text-3xl font-bold text-slate-900 text-center">{servicesPage.customThemeTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesPage.customThemeItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-all group text-center"
                >
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {idx === 0 && <Users className="h-8 w-8 text-blue-600" />}
                    {idx === 1 && <Camera className="h-8 w-8 text-pink-600" />}
                    {idx === 2 && <MessageSquare className="h-8 w-8 text-sky-500" />}
                    {idx === 3 && <Briefcase className="h-8 w-8 text-blue-700" />}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* How It Works (Formerly What's Included) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How to Order</h2>
              <p className="text-slate-600">Simple 3-step process to get your verified accounts</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                 <ShoppingBag className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                 <h3 className="font-bold text-lg mb-2">Choose Package</h3>
                 <p className="text-slate-600 text-sm">Select the account type and quantity you need from our shop.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                 <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                 <h3 className="font-bold text-lg mb-2">Make Payment</h3>
                 <p className="text-slate-600 text-sm">Pay securely using your preferred method (Crypto, Wise, etc.).</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm relative">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                 <Check className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                 <h3 className="font-bold text-lg mb-2">Receive Accounts</h3>
                 <p className="text-slate-600 text-sm">Get instant delivery of your verified accounts via email.</p>
              </div>
           </div>
        </div>
      </section>
      
      {/* Service Features (Formerly Email & Other Services) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{servicesPage.pluginTitle}</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {servicesPage.pluginDesc1}
              </p>
              <div className="grid gap-4">
                {servicesPage.includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Service Guarantee</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <ShieldCheck className="w-8 h-8 text-blue-200" />
                   <div>
                      <h4 className="font-bold text-lg">100% Secure</h4>
                      <p className="text-blue-100 text-sm">All accounts are created with unique IPs and devices.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <Globe className="w-8 h-8 text-blue-200" />
                   <div>
                      <h4 className="font-bold text-lg">Global Access</h4>
                      <p className="text-blue-100 text-sm">Accounts available from USA, UK, EU, and worldwide.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <Lock className="w-8 h-8 text-blue-200" />
                   <div>
                      <h4 className="font-bold text-lg">Replacement Warranty</h4>
                      <p className="text-blue-100 text-sm">Free replacement if any account is locked within 24 hours.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-6">Need a custom order?</h2>
          <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors hover:scale-105 transform duration-200">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
