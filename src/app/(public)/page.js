
"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, ThumbsUp, Users, ShieldCheck, Truck, Star, Phone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContentStore } from '@/store/contentStore';

const Home = () => {
  const { home } = useContentStore();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-300 font-medium text-sm tracking-wide">{home.hero.badge}</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                {home.hero.title}
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                {home.hero.subtitle}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/shop"
                  className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10">{home.hero.ctaPrimary}</span>
                  <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm hover:-translate-y-0.5"
                >
                  {home.hero.ctaSecondary}
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
                {home.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-bold">
                      {idx === 0 && <ShoppingBag className="h-4 w-4 text-blue-400" />}
                      {idx === 1 && <ThumbsUp className="h-4 w-4 text-emerald-400" />}
                      {idx === 2 && <Users className="h-4 w-4 text-purple-400" />}
                      {stat.label}
                    </div>
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur opacity-30"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 p-3 rounded-3xl shadow-2xl">
                  <img 
                    src={home.hero.heroImage} 
                    alt="PVA Shop" 
                    className="rounded-2xl w-full h-auto shadow-inner"
                  />
                  
                  {/* Floating Elements on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl">
                       <div className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Customer Rating</div>
                       <div className="text-2xl font-bold text-white flex items-center gap-2">
                         4.9/5.0 <span className="text-emerald-400 text-xs bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">Excellent</span>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-12 -right-12 bg-white text-slate-900 p-5 rounded-2xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Truck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Delivery Time</p>
                    <p className="text-xl font-bold text-slate-900">Instant</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-8 -left-12 bg-white text-slate-900 p-5 rounded-2xl shadow-xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Security</p>
                    <p className="text-xl font-bold text-slate-900">100% Verified</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-100 px-3 py-1 rounded-full mb-4 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">{home.servicesTitle}</h2>
            <p className="text-lg text-slate-600">{home.servicesSubtitle}</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {home.services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group relative overflow-hidden hover:border-blue-200 transition-colors"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${index === 0 ? 'bg-blue-100' : index === 1 ? 'bg-emerald-100' : 'bg-purple-100'} opacity-50 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700`}></div>
                
                {service.image ? (
                  <div className="w-16 h-16 rounded-2xl mb-6 shadow-md overflow-hidden transform group-hover:rotate-6 transition-transform duration-300 border-2 border-white">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-emerald-600' : 'bg-purple-600'} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                    {index === 0 && <Users className="h-8 w-8 text-white" />}
                    {index === 1 && <Star className="h-8 w-8 text-white" />}
                    {index === 2 && <Phone className="h-8 w-8 text-white" />}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <Link href={service.link || "/shop"} className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                  Buy Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me - Split Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-10"></div>
              <img 
                src={home.whyChoose.image} 
                alt="PVA Shop" 
                className="rounded-[2rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">Why Us</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">{home.whyChoose.title}</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {home.whyChoose.subtitle}
              </p>
              
              <div className="space-y-6">
                {home.whyChoose.points.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="bg-green-100 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    </div>
                    <div>
                      <span className="text-slate-900 font-bold text-lg block mb-1">{item}</span>
                      <span className="text-slate-500 text-sm">We ensure top quality for every order.</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm bg-blue-900/50 px-3 py-1 rounded-full mb-4 inline-block border border-blue-800">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{home.testimonialsTitle}</h2>
            <p className="text-slate-400 text-lg">{home.testimonialsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {home.testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl relative border border-slate-700 hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 group-hover:border-blue-500 transition-colors" />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{home.ctaTitle}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              {home.ctaSubtitle}
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              {home.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
