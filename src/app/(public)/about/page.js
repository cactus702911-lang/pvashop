
"use client";
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Truck, Headphones, Award, CheckCircle, Globe } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';

const About = () => {
  const { about } = useContentStore();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src={about.image} 
                alt="About Us" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About <span className="text-primary">{about.name}</span></h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {about.description1}
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {about.description2}
              </p>
              <div className="flex gap-4">
                <a href="#why-us" className="text-primary font-bold hover:underline">Why Choose Us</a>
                <span className="text-slate-300">|</span>
                <Link href="/contact" className="text-primary font-bold hover:underline">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {about.stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <ShieldCheck className="h-6 w-6 text-primary" />}
                    {index === 1 && <Truck className="h-6 w-6 text-primary" />}
                    {index === 2 && <Headphones className="h-6 w-6 text-primary" />}
                    {index === 3 && <Award className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{stat.value}</h3>
                  <p className="text-sm text-slate-500 uppercase tracking-wide font-medium">{stat.label}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Best (Formerly Experience) */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4 text-slate-900">Why We Are The Best</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">We provide premium quality accounts with a focus on security, speed, and customer satisfaction.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {about.experience.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                      {index === 0 && <Globe className="w-6 h-6" />}
                      {index === 1 && <CheckCircle className="w-6 h-6" />}
                      {index === 2 && <ShieldCheck className="w-6 h-6" />}
                      {/* Fallback icon */}
                      {index > 2 && <Award className="w-6 h-6" />}
                   </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                  <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-full mb-3 inline-block">{item.period}</span>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team/Support Section (New) */}
      <section className="py-20 bg-slate-50">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-slate-900">Dedicated Support Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="bg-white p-6 rounded-xl shadow-sm w-64">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Support" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-lg">Alex Johnson</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">Support Lead</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm w-64">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Support" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-lg">Sarah Williams</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">Customer Success</p>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm w-64">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Support" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-lg">Michael Brown</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">Technical Support</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
