
"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { ArrowUpRight, Search, CheckCircle, Layout } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useContentStore } from '@/store/contentStore';
import SEO from '@/components/common/SEO';

const ShopContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get('category');
  const [filter, setFilter] = useState(categoryParam || 'All');
  const [searchTerm, setSearchTerm] = useState('');
  const { caseStudies } = useContentStore();

  useEffect(() => {
    if (categoryParam) {
      setFilter(categoryParam);
    }
  }, [categoryParam]);

  const categories = caseStudies.categories || ['All', 'Social Media', 'Email', 'Payment'];

  const filteredCases = caseStudies.studies.filter(study => {
    const matchesCategory = filter === 'All' || study.category === filter;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openProject = (id) => {
    router.push(`/shop/${id}`);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <SEO title="Products" description={caseStudies.subtitle} />
      
      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{caseStudies.title}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            {caseStudies.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for accounts (e.g. Gmail, Facebook)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none pl-12 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((study) => (
              <div key={study.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => openProject(study.id)}
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-2 text-sm flex-grow">{study.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wide">
                      {study.client}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(study.id);
                      }}
                      className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1"
                    >
                      View Details <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Shop = () => {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading Products...</div>}>
      <ShopContent />
    </Suspense>
  );
};

export default Shop;
