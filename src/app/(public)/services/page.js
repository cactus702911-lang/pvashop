
"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Check, Users, Camera, MessageSquare, Briefcase, Zap, Star, ShieldCheck, Smartphone, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContentStore } from '@/store/contentStore';

const Services = () => {
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

      {/* Categories Grid */}
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

      {/* Technical Expertise (Email & Other Services) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
               <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-100 px-3 py-1 rounded-full mb-4 inline-block">More Services</span>
               <h2 className="text-3xl font-bold mb-6 text-slate-900">{servicesPage.pluginTitle}</h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 {servicesPage.pluginDesc1}
               </p>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 {servicesPage.pluginDesc2}
               </p>
               <Link href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
                 View All Services <Star className="w-4 h-4" />
               </Link>
            </div>
            <div className="grid gap-4">
               {servicesPage.technicalExpertise.map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:border-blue-200 transition-colors"
                 >
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                       {idx === 0 && <Mail className="w-6 h-6" />}
                       {idx === 1 && <Smartphone className="w-6 h-6" />}
                       {idx === 2 && <Globe className="w-6 h-6" />}
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900">{item.title}</h3>
                       <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included Items (Features) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl font-bold mb-12 text-slate-900">What's Included</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {servicesPage.includedItems.map((item, idx) => (
                <div key={idx} className="p-4 border border-slate-100 rounded-lg flex items-center justify-center gap-3 bg-slate-50">
                   <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                   <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">{servicesPage.pricingTitle}</h2>
               <p className="text-slate-400">{servicesPage.pricingSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {servicesPage.pricing.map((plan, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -10 }}
                    className={`rounded-2xl p-8 border ${plan.highlight ? 'bg-blue-600 border-blue-500 shadow-2xl scale-105 z-10' : 'bg-slate-800 border-slate-700'} relative flex flex-col`}
                  >
                     {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                           Best Value
                        </div>
                     )}
                     <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                     <div className="text-4xl font-bold mb-4">{plan.price}</div>
                     <p className={`text-sm mb-8 ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>{plan.description}</p>
                     
                     <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map((feature, fIdx) => (
                           <li key={fIdx} className="flex items-start gap-3 text-sm">
                              <Check className={`w-5 h-5 ${plan.highlight ? 'text-white' : 'text-blue-500'} flex-shrink-0`} />
                              <span>{feature}</span>
                           </li>
                        ))}
                     </ul>
                     
                     <Link 
                        href="/contact" 
                        className={`block text-center py-3 rounded-lg font-bold transition-colors ${plan.highlight ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                     >
                        {plan.cta}
                     </Link>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* How It Works */}
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
    </div>
  );
};

export default Services;
