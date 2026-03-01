
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useContentStore } from '@/store/contentStore';
import { Save, LogOut, Layout, Users, Star, MessageSquare, Type, Settings, Phone, Image, FileText, Briefcase, Zap, Trash2, Plus, Globe, Share2, BookOpen, X, ChevronLeft, Search } from 'lucide-react';
import ImageUpload from '@/components/admin/ImageUpload';
import FileUpload from '@/components/admin/FileUpload';

const Dashboard = () => {
  const router = useRouter();
  const { 
    home, header, contact, footer, about, servicesPage, productPage, caseStudies, blog, seo, social, notification,
    updateHome, updateNestedHome, updateHeader, updateContact, updateFooter,
    updateAbout, updateNestedAbout, updateServicesPage, updateNestedServicesPage, 
    updateProductPage, updateNestedProductPage,
    updateCaseStudies, updateNestedCaseStudies,
    addCaseStudy, removeCaseStudy,
    updateBlog, addBlogPost, removeBlogPost, updateBlogPost,
    updateSeo, updateSocial, updateNotification
  } = useContentStore();
  const [activeTab, setActiveTab] = useState('dashboard');
  // State for individual editing
  const [editingProductId, setEditingProductId] = useState(null);
  const [productSearch, setProductSearch] = useState('');
  
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogSearch, setBlogSearch] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/admin/login');
  };

  const handleHeroChange = (field, value) => {
    updateHome('hero', { ...home.hero, [field]: value });
  };
  
  const handleWhyChooseChange = (field, value) => {
    updateHome('whyChoose', { ...home.whyChoose, [field]: value });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-slate-400 text-sm font-medium">Total Products</h3>
                  <p className="text-3xl font-bold text-white mt-1">{caseStudies.studies.length}</p>
               </div>
               <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-slate-400 text-sm font-medium">Total Blog Posts</h3>
                  <p className="text-3xl font-bold text-white mt-1">{blog.posts.length}</p>
               </div>
               <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-slate-400 text-sm font-medium">Home Services</h3>
                  <p className="text-3xl font-bold text-white mt-1">{home.services.length}</p>
               </div>
               <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-slate-400 text-sm font-medium">Testimonials</h3>
                  <p className="text-3xl font-bold text-white mt-1">{home.testimonials.length}</p>
               </div>
            </div>

            <div className="bg-slate-700 p-6 rounded-lg border border-slate-600 mt-6">
               <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
               <div className="flex gap-4">
                  <button onClick={() => setActiveTab('caseStudies')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2">
                     <Plus className="w-4 h-4" /> Add Product
                  </button>
                  <button onClick={() => setActiveTab('blog')} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2">
                     <Plus className="w-4 h-4" /> Add Blog Post
                  </button>
               </div>
            </div>
          </div>
        );
      case 'header':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Header / Navigation</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Top Notification Bar</label>
                <input
                  type="text"
                  value={notification}
                  onChange={(e) => updateNotification(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                  placeholder="Enter notification text (e.g. Special Offer...)"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Logo Text</label>
                <input
                  type="text"
                  value={header.logoText}
                  onChange={(e) => updateHeader('logoText', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">CTA Button Text</label>
                <input
                  type="text"
                  value={header.ctaButton}
                  onChange={(e) => updateHeader('ctaButton', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Navigation Categories</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {header.categories?.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded px-3 py-2">
                   <span className="text-white">{cat}</span>
                   <button 
                     onClick={() => {
                        const newCategories = header.categories.filter((_, i) => i !== idx);
                        updateHeader('categories', newCategories);
                     }}
                     className="text-red-400 hover:text-red-300"
                   >
                     <Trash2 className="w-4 h-4" />
                   </button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="New Category Name"
                id="new-category-input"
                className="flex-1 bg-slate-700 border border-slate-600 rounded p-2 text-white"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target;
                    if (input.value.trim()) {
                       const newCategories = [...(header.categories || []), input.value.trim()];
                       updateHeader('categories', newCategories);
                       input.value = '';
                    }
                  }
                }}
              />
              <button
                onClick={() => {
                   const input = document.getElementById('new-category-input');
                   if (input.value.trim()) {
                       const newCategories = [...(header.categories || []), input.value.trim()];
                       updateHeader('categories', newCategories);
                       input.value = '';
                   }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </div>
          </div>
        );
      case 'hero':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Hero Section</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={home.hero.badge}
                  onChange={(e) => handleHeroChange('badge', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Title</label>
                <input
                  type="text"
                  value={home.hero.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Subtitle</label>
                <textarea
                  value={home.hero.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <ImageUpload
                  label="Hero Image"
                  value={home.hero.heroImage}
                  onChange={(value) => handleHeroChange('heroImage', value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Primary CTA</label>
                  <input
                    type="text"
                    value={home.hero.ctaPrimary}
                    onChange={(e) => handleHeroChange('ctaPrimary', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Secondary CTA</label>
                  <input
                    type="text"
                    value={home.hero.ctaSecondary}
                    onChange={(e) => handleHeroChange('ctaSecondary', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                  />
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              {home.stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700">
                  <div className="mb-2">
                    <label className="block text-xs text-slate-400">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => updateNestedHome('stats', index, 'label', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400">Value</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => updateNestedHome('stats', index, 'value', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Home Services Section</h2>
            <div className="space-y-4">
               <div>
                <label className="block text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={home.servicesTitle}
                  onChange={(e) => updateHome('servicesTitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
               <div>
                <label className="block text-slate-400 mb-1">Section Subtitle</label>
                <textarea
                  value={home.servicesSubtitle}
                  onChange={(e) => updateHome('servicesSubtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Service Cards</h3>
            {home.services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                <div className="grid gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Title</label>
                    <input
                      type="text"
                      value={service.title}
                      onChange={(e) => {
                         const newServices = [...home.services];
                         newServices[index] = { ...service, title: e.target.value };
                         updateHome('services', newServices);
                      }}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Description</label>
                    <textarea
                      value={service.description}
                      onChange={(e) => {
                         const newServices = [...home.services];
                         newServices[index] = { ...service, description: e.target.value };
                         updateHome('services', newServices);
                      }}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20"
                    />
                  </div>
                  <div>
                    <ImageUpload
                      label="Service Icon/Image (Optional)"
                      value={service.image || ''}
                      onChange={(value) => {
                         const newServices = [...home.services];
                         newServices[index] = { ...service, image: value };
                         updateHome('services', newServices);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'whyChoose':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Me Section</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Title</label>
                <input
                  type="text"
                  value={home.whyChoose.title}
                  onChange={(e) => handleWhyChooseChange('title', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Subtitle</label>
                <textarea
                  value={home.whyChoose.subtitle}
                  onChange={(e) => handleWhyChooseChange('subtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <ImageUpload
                  label="Section Image"
                  value={home.whyChoose.image}
                  onChange={(value) => handleWhyChooseChange('image', value)}
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2">Points</label>
                {home.whyChoose.points.map((point, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => updateNestedHome('whyChoose', index, 'points', e.target.value)}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Testimonials Section</h2>
             <div className="space-y-4">
               <div>
                <label className="block text-slate-400 mb-1">Section Title</label>
                <input
                  type="text"
                  value={home.testimonialsTitle}
                  onChange={(e) => updateHome('testimonialsTitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
               <div>
                <label className="block text-slate-400 mb-1">Section Subtitle</label>
                <textarea
                  value={home.testimonialsSubtitle}
                  onChange={(e) => updateHome('testimonialsSubtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Client Reviews</h3>
            {home.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                <div className="grid gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Author</label>
                    <input
                      type="text"
                      value={testimonial.author}
                      onChange={(e) => {
                         const newTestimonials = [...home.testimonials];
                         newTestimonials[index] = { ...testimonial, author: e.target.value };
                         updateHome('testimonials', newTestimonials);
                      }}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                    />
                  </div>
                   <div>
                    <label className="block text-slate-400 mb-1">Role</label>
                    <input
                      type="text"
                      value={testimonial.role}
                      onChange={(e) => {
                         const newTestimonials = [...home.testimonials];
                         newTestimonials[index] = { ...testimonial, role: e.target.value };
                         updateHome('testimonials', newTestimonials);
                      }}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                    />
                  </div>
                  <div>
                    <ImageUpload
                      label="Client Photo"
                      value={testimonial.image}
                      onChange={(value) => {
                         const newTestimonials = [...home.testimonials];
                         newTestimonials[index] = { ...testimonial, image: value };
                         updateHome('testimonials', newTestimonials);
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Quote</label>
                    <textarea
                      value={testimonial.quote}
                      onChange={(e) => {
                         const newTestimonials = [...home.testimonials];
                         newTestimonials[index] = { ...testimonial, quote: e.target.value };
                         updateHome('testimonials', newTestimonials);
                      }}
                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'about':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">About Page</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Name</label>
                <input
                  type="text"
                  value={about.name}
                  onChange={(e) => updateAbout('name', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Role</label>
                <input
                  type="text"
                  value={about.role}
                  onChange={(e) => updateAbout('role', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Description 1</label>
                <textarea
                  value={about.description1}
                  onChange={(e) => updateAbout('description1', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Description 2</label>
                <textarea
                  value={about.description2}
                  onChange={(e) => updateAbout('description2', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <ImageUpload
                  label="Profile Image"
                  value={about.image}
                  onChange={(value) => updateAbout('image', value)}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {about.stats.map((stat, index) => (
                  <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700">
                     <div className="mb-2">
                        <label className="block text-slate-400 text-xs mb-1">Label</label>
                        <input type="text" value={stat.label} onChange={(e) => updateNestedAbout('stats', index, 'label', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white text-sm" />
                     </div>
                     <div>
                        <label className="block text-slate-400 text-xs mb-1">Value</label>
                        <input type="text" value={stat.value} onChange={(e) => updateNestedAbout('stats', index, 'value', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white text-sm" />
                     </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Experience</h3>
              {about.experience.map((exp, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 mb-4">
                   <div className="grid gap-3">
                     <div>
                       <label className="block text-slate-400 text-xs mb-1">Role</label>
                       <input type="text" value={exp.role} onChange={(e) => updateNestedAbout('experience', index, 'role', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                     </div>
                     <div>
                       <label className="block text-slate-400 text-xs mb-1">Company</label>
                       <input type="text" value={exp.company} onChange={(e) => updateNestedAbout('experience', index, 'company', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                     </div>
                     <div>
                       <label className="block text-slate-400 text-xs mb-1">Period</label>
                       <input type="text" value={exp.period} onChange={(e) => updateNestedAbout('experience', index, 'period', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                     </div>
                     <div>
                       <label className="block text-slate-400 text-xs mb-1">Description</label>
                       <textarea value={exp.description} onChange={(e) => updateNestedAbout('experience', index, 'description', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'servicesPage':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Services Page</h2>
            <div className="grid gap-4">
               <div>
                <label className="block text-slate-400 mb-1">Page Title</label>
                <input type="text" value={servicesPage.title} onChange={(e) => updateServicesPage('title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Page Subtitle</label>
                <textarea value={servicesPage.subtitle} onChange={(e) => updateServicesPage('subtitle', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Custom Theme Section</h3>
              {servicesPage.customThemeItems.map((item, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700 mb-2">
                   <div className="mb-2">
                      <label className="block text-slate-400 text-xs mb-1">Item Title</label>
                      <input type="text" value={item.title} onChange={(e) => updateNestedServicesPage('customThemeItems', index, 'title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white" />
                   </div>
                   <div>
                      <label className="block text-slate-400 text-xs mb-1">Item Description</label>
                      <textarea value={item.desc} onChange={(e) => updateNestedServicesPage('customThemeItems', index, 'desc', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white h-16" />
                   </div>
                   <div>
                     <ImageUpload
                       label="Icon/Image (Optional)"
                       value={item.image || ''}
                       onChange={(value) => updateNestedServicesPage('customThemeItems', index, 'image', value)}
                     />
                   </div>
                </div>
              ))}

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Included Items List</h3>
              {servicesPage.includedItems.map((item, index) => (
                <div key={index} className="mb-2">
                   <input type="text" value={item} onChange={(e) => updateNestedServicesPage('includedItems', index, '', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                </div>
              ))}

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Technical Expertise</h3>
              {servicesPage.technicalExpertise.map((item, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700 mb-2">
                   <div className="mb-2">
                      <label className="block text-slate-400 text-xs mb-1">Title</label>
                      <input type="text" value={item.title} onChange={(e) => updateNestedServicesPage('technicalExpertise', index, 'title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white" />
                   </div>
                   <div>
                      <label className="block text-slate-400 text-xs mb-1">Description</label>
                      <textarea value={item.desc} onChange={(e) => updateNestedServicesPage('technicalExpertise', index, 'desc', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-1 text-white h-16" />
                   </div>
                </div>
              ))}

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Pricing Packages</h3>
              {servicesPage.pricing.map((pkg, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded border border-slate-700 mb-4">
                   <div className="grid gap-3">
                      <div>
                        <label className="block text-slate-400 text-xs mb-1">Package Name</label>
                        <input type="text" value={pkg.title} onChange={(e) => updateNestedServicesPage('pricing', index, 'title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1">Price</label>
                        <input type="text" value={pkg.price} onChange={(e) => updateNestedServicesPage('pricing', index, 'price', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1">Description</label>
                        <input type="text" value={pkg.description} onChange={(e) => updateNestedServicesPage('pricing', index, 'description', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1">CTA Button</label>
                        <input type="text" value={pkg.cta} onChange={(e) => updateNestedServicesPage('pricing', index, 'cta', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-white">
                          <input 
                            type="checkbox" 
                            checked={pkg.highlight} 
                            onChange={(e) => updateNestedServicesPage('pricing', index, 'highlight', e.target.checked)} 
                            className="w-4 h-4 rounded"
                          />
                          Highlight this package
                        </label>
                      </div>
                      <div>
                        <label className="block text-slate-400 text-xs mb-1">Features (Comma separated)</label>
                        <textarea 
                          value={pkg.features.join('\n')} 
                          onChange={(e) => updateNestedServicesPage('pricing', index, 'features', e.target.value.split('\n'))} 
                          className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                          placeholder="One feature per line"
                        />
                      </div>
                   </div>
                </div>
              ))}

            </div>
          </div>
        );
      case 'productPage':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Product Details Page Settings</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Sidebar Title (e.g. Why Buy From Us?)</label>
                <input
                  type="text"
                  value={productPage.sidebarTitle}
                  onChange={(e) => updateProductPage('sidebarTitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              
              <div>
                <label className="block text-slate-400 mb-1">General Description (Shown below product description)</label>
                <textarea
                  value={productPage.generalDescription}
                  onChange={(e) => updateProductPage('generalDescription', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-40 font-mono text-sm"
                  placeholder="Supports basic formatting"
                />
                <p className="text-xs text-slate-500 mt-1">This text appears in the "Description" tab for all products.</p>
              </div>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">Sidebar Points</h3>
              {productPage.sidebarPoints.map((point, index) => (
                <div key={index} className="bg-slate-800 p-3 rounded border border-slate-700 mb-2 flex gap-4 items-center">
                   <div className="flex-1">
                      <label className="block text-slate-400 text-xs mb-1">Icon Name (Lucide React)</label>
                      <input 
                        type="text" 
                        value={point.icon} 
                        onChange={(e) => updateNestedProductPage(index, 'icon', e.target.value)} 
                        className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                        placeholder="e.g. CheckCircle, Zap"
                      />
                   </div>
                   <div className="flex-[2]">
                      <label className="block text-slate-400 text-xs mb-1">Text</label>
                      <input 
                        type="text" 
                        value={point.text} 
                        onChange={(e) => updateNestedProductPage(index, 'text', e.target.value)} 
                        className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                      />
                   </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'caseStudies':
        // If we are editing a specific product
        if (editingProductId !== null) {
            const index = caseStudies.studies.findIndex(s => s.id === editingProductId);
            const study = caseStudies.studies[index];
            
            // If product not found (e.g. deleted), go back to list
            if (!study) {
                setEditingProductId(null);
                return <div className="text-white">Product not found</div>;
            }

            return (
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-slate-400 font-normal">Editing:</span> {study.title}
                        </h2>
                        <button 
                            onClick={() => setEditingProductId(null)}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" /> Back to List
                        </button>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-4 relative">
                        {/* Edit Form */}
                        <div className="grid gap-4">
                           <div>
                             <label className="block text-slate-400 text-xs mb-1">Product Title</label>
                             <input type="text" value={study.title} onChange={(e) => updateNestedCaseStudies('studies', index, 'title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                           </div>
                           <div>
                             <label className="block text-slate-400 text-xs mb-1">Client / Delivery Time</label>
                             <input type="text" value={study.client} onChange={(e) => updateNestedCaseStudies('studies', index, 'client', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                           </div>
                           <div>
                             <label className="block text-slate-400 text-xs mb-1">Category</label>
                             <select value={study.category} onChange={(e) => updateNestedCaseStudies('studies', index, 'category', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white">
                                {(caseStudies.categories || ['All', 'Custom Theme', 'Plugin Dev', 'Optimization']).map(c => (
                                   <option key={c} value={c}>{c}</option>
                                ))}
                             </select>
                           </div>
                           <div>
                             <ImageUpload
                               label="Main Product Image"
                               value={study.image}
                               onChange={(value) => updateNestedCaseStudies('studies', index, 'image', value)}
                             />
                           </div>

                           {/* Product Specs */}
                           <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
                              <label className="block text-slate-300 text-sm font-semibold mb-3">Product Specifications</label>
                              <div className="grid grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-slate-400 text-xs mb-1">Account Age</label>
                                    <input 
                                      type="text" 
                                      value={study.specs?.age || ''} 
                                      onChange={(e) => updateNestedCaseStudies('studies', index, 'specs', { age: e.target.value })} 
                                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm"
                                      placeholder="e.g. 1-2 Years"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-slate-400 text-xs mb-1">IP Country</label>
                                    <input 
                                      type="text" 
                                      value={study.specs?.ip || ''} 
                                      onChange={(e) => updateNestedCaseStudies('studies', index, 'specs', { ip: e.target.value })} 
                                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm"
                                      placeholder="e.g. USA/UK"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-slate-400 text-xs mb-1">Format</label>
                                    <input 
                                      type="text" 
                                      value={study.specs?.format || ''} 
                                      onChange={(e) => updateNestedCaseStudies('studies', index, 'specs', { format: e.target.value })} 
                                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm"
                                      placeholder="e.g. ID:Pass:2FA"
                                    />
                                 </div>
                                 <div>
                                    <label className="block text-slate-400 text-xs mb-1">Warranty/Replacement</label>
                                    <input 
                                      type="text" 
                                      value={study.specs?.warranty || ''} 
                                      onChange={(e) => updateNestedCaseStudies('studies', index, 'specs', { warranty: e.target.value })} 
                                      className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white text-sm"
                                      placeholder="e.g. 24 Hours"
                                    />
                                 </div>
                              </div>
                           </div>

                           {/* Customer Reviews */}
                           <div className="bg-slate-700/50 p-4 rounded border border-slate-600 mt-2">
                              <label className="block text-slate-300 text-sm font-semibold mb-3">Customer Reviews</label>
                              {study.reviews && study.reviews.map((review, rIdx) => (
                                  <div key={review.id} className="bg-slate-800 p-3 rounded mb-3 border border-slate-600 relative">
                                      <button 
                                          onClick={() => {
                                              const newReviews = study.reviews.filter((_, i) => i !== rIdx);
                                              updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                          }}
                                          className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                                      >
                                          <Trash2 className="w-3 h-3" />
                                      </button>
                                      <div className="grid grid-cols-2 gap-2 mb-2">
                                          <input 
                                              type="text" 
                                              value={review.user} 
                                              onChange={(e) => {
                                                  const newReviews = [...study.reviews];
                                                  newReviews[rIdx] = { ...review, user: e.target.value };
                                                  updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                              }}
                                              className="bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs" 
                                              placeholder="User Name"
                                          />
                                          <input 
                                              type="number" 
                                              min="1" max="5"
                                              value={review.rating} 
                                              onChange={(e) => {
                                                  const newReviews = [...study.reviews];
                                                  newReviews[rIdx] = { ...review, rating: parseInt(e.target.value) };
                                                  updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                              }}
                                              className="bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs" 
                                              placeholder="Rating (1-5)"
                                          />
                                      </div>
                                      <input 
                                          type="text" 
                                          value={review.date} 
                                          onChange={(e) => {
                                              const newReviews = [...study.reviews];
                                              newReviews[rIdx] = { ...review, date: e.target.value };
                                              updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                          }}
                                          className="w-full bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs mb-2" 
                                          placeholder="Date (e.g. 2 days ago)"
                                      />
                                      <textarea 
                                          value={review.comment} 
                                          onChange={(e) => {
                                              const newReviews = [...study.reviews];
                                              newReviews[rIdx] = { ...review, comment: e.target.value };
                                              updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                          }}
                                          className="w-full bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs" 
                                          placeholder="Review Comment"
                                      />
                                  </div>
                              ))}
                              <button
                                  onClick={() => {
                                      const newReview = { id: Date.now(), user: "New User", rating: 5, comment: "Great service!", date: "Just now" };
                                      const newReviews = [...(study.reviews || []), newReview];
                                      updateNestedCaseStudies('studies', index, 'reviews', newReviews);
                                  }}
                                  className="w-full py-2 border border-dashed border-slate-500 rounded text-slate-400 hover:text-white hover:bg-slate-600/50 text-xs flex items-center justify-center gap-1"
                              >
                                  <Plus className="w-3 h-3" /> Add Review
                              </button>
                           </div>

                           {/* FAQs */}
                           <div className="bg-slate-700/50 p-4 rounded border border-slate-600 mt-2">
                              <label className="block text-slate-300 text-sm font-semibold mb-3">FAQs</label>
                              {study.faqs && study.faqs.map((faq, fIdx) => (
                                  <div key={fIdx} className="bg-slate-800 p-3 rounded mb-3 border border-slate-600 relative">
                                      <button 
                                          onClick={() => {
                                              const newFaqs = study.faqs.filter((_, i) => i !== fIdx);
                                              updateNestedCaseStudies('studies', index, 'faqs', newFaqs);
                                          }}
                                          className="absolute top-2 right-2 text-red-400 hover:text-red-300"
                                      >
                                          <Trash2 className="w-3 h-3" />
                                      </button>
                                      <input 
                                          type="text" 
                                          value={faq.question} 
                                          onChange={(e) => {
                                              const newFaqs = [...study.faqs];
                                              newFaqs[fIdx] = { ...faq, question: e.target.value };
                                              updateNestedCaseStudies('studies', index, 'faqs', newFaqs);
                                          }}
                                          className="w-full bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs mb-2 font-bold" 
                                          placeholder="Question"
                                      />
                                      <textarea 
                                          value={faq.answer} 
                                          onChange={(e) => {
                                              const newFaqs = [...study.faqs];
                                              newFaqs[fIdx] = { ...faq, answer: e.target.value };
                                              updateNestedCaseStudies('studies', index, 'faqs', newFaqs);
                                          }}
                                          className="w-full bg-slate-600 border border-slate-500 rounded p-1 text-white text-xs" 
                                          placeholder="Answer"
                                      />
                                  </div>
                              ))}
                              <button
                                  onClick={() => {
                                      const newFaq = { question: "New Question?", answer: "Answer here." };
                                      const newFaqs = [...(study.faqs || []), newFaq];
                                      updateNestedCaseStudies('studies', index, 'faqs', newFaqs);
                                  }}
                                  className="w-full py-2 border border-dashed border-slate-500 rounded text-slate-400 hover:text-white hover:bg-slate-600/50 text-xs flex items-center justify-center gap-1"
                              >
                                  <Plus className="w-3 h-3" /> Add FAQ
                              </button>
                           </div>
                           
                           <div>
                              <label className="block text-slate-400 text-xs mb-1">Product Gallery</label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                                  {study.gallery && study.gallery.map((img, imgIdx) => (
                                      <div key={imgIdx} className="relative group">
                                          <img src={img} alt={`Gallery ${imgIdx}`} className="w-full h-24 object-cover rounded-lg" />
                                          <button 
                                              onClick={() => {
                                                  const newGallery = study.gallery.filter((_, i) => i !== imgIdx);
                                                  updateNestedCaseStudies('studies', index, 'gallery', newGallery);
                                              }}
                                              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                          >
                                              <X size={12} />
                                          </button>
                                      </div>
                                  ))}
                                  <div className="w-full">
                                      <ImageUpload 
                                          label="Add to Gallery"
                                          value=""
                                          onChange={(val) => {
                                              if (val) {
                                                  const newGallery = [...(study.gallery || []), val];
                                                  updateNestedCaseStudies('studies', index, 'gallery', newGallery);
                                              }
                                          }}
                                      />
                                  </div>
                              </div>
                           </div>

                           <div>
                             <label className="block text-slate-400 text-xs mb-1">Description</label>
                             <textarea value={study.description} onChange={(e) => updateNestedCaseStudies('studies', index, 'description', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                           </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => {
                            if(window.confirm('Are you sure you want to delete this product?')) {
                                removeCaseStudy(study.id);
                                setEditingProductId(null);
                            }
                        }}
                        className="w-full py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
                    >
                        <Trash2 className="w-5 h-5" /> Delete Product
                    </button>
                </div>
            );
        }

        // List View
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Products</h2>
            
            {/* Settings Section */}
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-6">
                <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Page Settings</h3>
                <div className="grid gap-4">
                   <div>
                    <label className="block text-slate-400 mb-1">Page Title</label>
                    <input type="text" value={caseStudies.title} onChange={(e) => updateCaseStudies('title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Page Subtitle</label>
                    <textarea value={caseStudies.subtitle} onChange={(e) => updateCaseStudies('subtitle', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                  </div>
                  <div>
                      <label className="block text-slate-400 mb-1">Categories (for Filtering)</label>
                      <div className="flex flex-wrap gap-2">
                         {(caseStudies.categories || ['All', 'Custom Theme', 'Plugin Dev', 'Optimization']).map((cat, idx) => (
                            <div key={idx} className="flex-1 min-w-[150px]">
                               <input type="text" value={cat} onChange={(e) => updateNestedCaseStudies('categories', idx, '', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                            </div>
                         ))}
                      </div>
                  </div>
                </div>
            </div>

            {/* Search and Add Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="Search products by title..." 
                        value={productSearch}
                        onChange={(e) => setProductSearch(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded pl-10 p-2 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={addCaseStudy}
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded flex items-center justify-center gap-2 font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add New Product
                </button>
            </div>

            {/* Product List Table */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-700/50 border-b border-slate-700 text-slate-400 text-sm uppercase">
                                <th className="p-4">Product</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Price/Info</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {caseStudies.studies.filter(s => s.title.toLowerCase().includes(productSearch.toLowerCase())).length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500">
                                        No products found matching "{productSearch}"
                                    </td>
                                </tr>
                            ) : (
                                caseStudies.studies
                                    .filter(s => s.title.toLowerCase().includes(productSearch.toLowerCase()))
                                    .map((study) => (
                                    <tr key={study.id} className="hover:bg-slate-700/30 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                {study.image ? (
                                                    <img src={study.image} alt="" className="w-10 h-10 rounded object-cover bg-slate-700" />
                                                ) : (
                                                    <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center text-slate-500">
                                                        <Image className="w-5 h-5" />
                                                    </div>
                                                )}
                                                <span className="font-medium text-white">{study.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            <span className="bg-slate-700 px-2 py-1 rounded text-xs">
                                                {study.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-400 text-sm">
                                            {study.specs?.warranty || 'No Warranty'} • {study.specs?.format || 'Standard'}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => setEditingProductId(study.id)}
                                                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-sm font-medium flex items-center gap-1"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => {
                                                        if(window.confirm('Are you sure you want to delete this product?')) {
                                                            removeCaseStudy(study.id);
                                                        }
                                                    }}
                                                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-1.5 rounded transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        );
      case 'blog':
        if (editingBlogId !== null) {
            const index = blog.posts.findIndex(p => p.id === editingBlogId);
            const post = blog.posts[index];
            
            if (!post) {
                setEditingBlogId(null);
                return <div className="text-white">Post not found</div>;
            }

            return (
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="text-slate-400 font-normal">Editing:</span> {post.title}
                        </h2>
                        <button 
                            onClick={() => setEditingBlogId(null)}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded flex items-center gap-2"
                        >
                            <ChevronLeft className="w-4 h-4" /> Back to List
                        </button>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-4 relative">
                        <div className="grid gap-4">
                           <div>
                              <label className="block text-slate-400 text-xs mb-1">Title</label>
                              <input type="text" value={post.title} onChange={(e) => updateBlogPost(post.id, 'title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                               <div>
                                  <label className="block text-slate-400 text-xs mb-1">Category</label>
                                  <input type="text" value={post.category} onChange={(e) => updateBlogPost(post.id, 'category', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                               </div>
                               <div>
                                  <label className="block text-slate-400 text-xs mb-1">Date</label>
                                  <input type="text" value={post.date} onChange={(e) => updateBlogPost(post.id, 'date', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                               </div>
                           </div>
                           <div>
                              <ImageUpload
                                 label="Featured Image"
                                 value={post.image}
                                 onChange={(value) => updateBlogPost(post.id, 'image', value)}
                              />
                           </div>
                           <div>
                              <label className="block text-slate-400 text-xs mb-1">Excerpt (Short Description)</label>
                              <textarea value={post.excerpt} onChange={(e) => updateBlogPost(post.id, 'excerpt', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                           </div>
                           <div>
                              <label className="block text-slate-400 text-xs mb-1">Full Content</label>
                              <textarea value={post.content} onChange={(e) => updateBlogPost(post.id, 'content', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-60 font-mono text-sm" />
                           </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => {
                            if(window.confirm('Are you sure you want to delete this post?')) {
                                removeBlogPost(post.id);
                                setEditingBlogId(null);
                            }
                        }}
                        className="w-full py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
                    >
                        <Trash2 className="w-5 h-5" /> Delete Post
                    </button>
                </div>
            );
        }

        return (
          <div className="space-y-6">
             <h2 className="text-2xl font-bold text-white mb-4">Blog & Articles</h2>
             
             {/* Settings */}
             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-6">
                <h3 className="text-white font-semibold mb-4 border-b border-slate-700 pb-2">Blog Settings</h3>
                <div className="grid gap-4">
                   <div>
                      <label className="block text-slate-400 mb-1">Section Title</label>
                      <input type="text" value={blog.title} onChange={(e) => updateBlog('title', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                   </div>
                   <div>
                      <label className="block text-slate-400 mb-1">Section Subtitle</label>
                      <textarea value={blog.subtitle} onChange={(e) => updateBlog('subtitle', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                   </div>
                </div>
             </div>

             {/* Search and Add */}
             <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="Search posts..." 
                        value={blogSearch}
                        onChange={(e) => setBlogSearch(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded pl-10 p-2 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={addBlogPost}
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center justify-center gap-2 font-medium transition-colors"
                >
                    <Plus className="w-4 h-4" /> Add New Post
                </button>
            </div>

            {/* Post List */}
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-700/50 border-b border-slate-700 text-slate-400 text-sm uppercase">
                                <th className="p-4">Post</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Date</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-700">
                            {blog.posts.filter(p => p.title.toLowerCase().includes(blogSearch.toLowerCase())).length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500">
                                        No posts found matching "{blogSearch}"
                                    </td>
                                </tr>
                            ) : (
                                blog.posts
                                    .filter(p => p.title.toLowerCase().includes(blogSearch.toLowerCase()))
                                    .map((post) => (
                                    <tr key={post.id} className="hover:bg-slate-700/30 transition-colors group">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                {post.image ? (
                                                    <img src={post.image} alt="" className="w-10 h-10 rounded object-cover bg-slate-700" />
                                                ) : (
                                                    <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center text-slate-500">
                                                        <FileText className="w-5 h-5" />
                                                    </div>
                                                )}
                                                <span className="font-medium text-white">{post.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-300">
                                            <span className="bg-slate-700 px-2 py-1 rounded text-xs">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-400 text-sm">
                                            {post.date}
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button 
                                                    onClick={() => setEditingBlogId(post.id)}
                                                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-sm font-medium flex items-center gap-1"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => {
                                                        if(window.confirm('Are you sure you want to delete this post?')) {
                                                            removeBlogPost(post.id);
                                                        }
                                                    }}
                                                    className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-1.5 rounded transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        );
      case 'seo-social':
         return (
             <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-white mb-4">SEO & Social Settings</h2>
                 
                 <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-6">
                     <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                         <Globe className="w-5 h-5 text-blue-400" />
                         SEO Settings
                     </h3>
                     <div className="grid gap-4">
                         <div>
                             <label className="block text-slate-400 mb-1">Site Title (Global)</label>
                             <input type="text" value={seo.siteTitle} onChange={(e) => updateSeo('siteTitle', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                         </div>
                         <div>
                             <label className="block text-slate-400 mb-1">Site Description</label>
                             <textarea value={seo.siteDescription} onChange={(e) => updateSeo('siteDescription', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-20" />
                         </div>
                         <div>
                             <label className="block text-slate-400 mb-1">Keywords (Comma separated)</label>
                             <input type="text" value={seo.siteKeywords} onChange={(e) => updateSeo('siteKeywords', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                         </div>
                         <div>
                             <ImageUpload
                                 label="OG Image (Social Share Image)"
                                 value={seo.ogImage}
                                 onChange={(value) => updateSeo('ogImage', value)}
                             />
                         </div>
                     </div>
                 </div>

                 <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                     <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                         <Share2 className="w-5 h-5 text-green-400" />
                         Social & Contacts
                     </h3>
                     <div className="grid gap-4">
                         <div>
                             <label className="block text-slate-400 mb-1">WhatsApp Number</label>
                             <input type="text" value={social.whatsapp} onChange={(e) => updateSocial('whatsapp', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" placeholder="+1234567890" />
                             <p className="text-xs text-slate-500 mt-1">Format: +CountryCodePhoneNumber (e.g. +8801712345678)</p>
                         </div>
                         <div>
                             <FileUpload
                                 label="CV/Resume File (PDF/Doc)"
                                 value={social.cvLink}
                                 onChange={(value) => updateSocial('cvLink', value)}
                             />
                        </div>
                         <div>
                             <label className="block text-slate-400 mb-1">LinkedIn URL</label>
                             <input type="text" value={social.linkedin} onChange={(e) => updateSocial('linkedin', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                         </div>
                         <div>
                             <label className="block text-slate-400 mb-1">GitHub URL</label>
                             <input type="text" value={social.github} onChange={(e) => updateSocial('github', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                         </div>
                         <div>
                             <label className="block text-slate-400 mb-1">Twitter URL</label>
                             <input type="text" value={social.twitter} onChange={(e) => updateSocial('twitter', e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white" />
                         </div>
                     </div>
                 </div>
             </div>
         );
      case 'contact':
        return (
           <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Title</label>
                <input
                  type="text"
                  value={contact.title}
                  onChange={(e) => updateContact('title', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Subtitle</label>
                <textarea
                  value={contact.subtitle}
                  onChange={(e) => updateContact('subtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Email</label>
                <input
                  type="text"
                  value={contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Phone</label>
                <input
                  type="text"
                  value={contact.phone}
                  onChange={(e) => updateContact('phone', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Address</label>
                <input
                  type="text"
                  value={contact.address}
                  onChange={(e) => updateContact('address', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Location Subtitle</label>
                <input
                  type="text"
                  value={contact.locationSubtitle}
                  onChange={(e) => updateContact('locationSubtitle', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
            </div>
          </div>
        );
      case 'footer':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Footer Content</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Company Description</label>
                <textarea
                  value={footer.description}
                  onChange={(e) => updateFooter('description', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white h-24"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Copyright Text</label>
                <input
                  type="text"
                  value={footer.copyright}
                  onChange={(e) => updateFooter('copyright', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Designed By Text</label>
                <input
                  type="text"
                  value={footer.designedBy}
                  onChange={(e) => updateFooter('designedBy', e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded p-2 text-white"
                />
              </div>
            </div>
          </div>
        );
      default:
        return <div className="text-white">Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 hidden md:block overflow-y-auto fixed h-full">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-500" />
            Admin Panel
          </h1>
        </div>
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Layout className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('header')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'header' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Type className="w-5 h-5" />
            Header & Logo
          </button>
          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'hero' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Layout className="w-5 h-5" />
            Hero Section
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'services' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Settings className="w-5 h-5" />
            Home Services
          </button>
          <button
            onClick={() => setActiveTab('servicesPage')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'servicesPage' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Zap className="w-5 h-5" />
            Services Page
          </button>
          <button
            onClick={() => setActiveTab('whyChoose')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'whyChoose' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Image className="w-5 h-5" />
            Why Choose Me
          </button>
           <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'testimonials' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Star className="w-5 h-5" />
            Testimonials
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'about' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Briefcase className="w-5 h-5" />
            About Page
          </button>
          <button
            onClick={() => setActiveTab('caseStudies')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'caseStudies' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Layout className="w-5 h-5" />
            Products
          </button>
          <button
            onClick={() => setActiveTab('productPage')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'productPage' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Settings className="w-5 h-5" />
            Product Settings
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'blog' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <BookOpen className="w-5 h-5" />
            Blog
          </button>
          <button
            onClick={() => setActiveTab('seo-social')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'seo-social' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Globe className="w-5 h-5" />
            SEO & Social
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'contact' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <Phone className="w-5 h-5" />
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab('footer')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'footer' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
          >
            <FileText className="w-5 h-5" />
            Footer
          </button>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <button 
              onClick={() => router.push('/')}
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View Site
            </button>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
