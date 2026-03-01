import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Zap, Layout, X, ChevronLeft, ChevronRight, CheckCircle, Headphones, Search } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContentStore } from '../store/contentStore';
import SEO from '../components/common/SEO';

const Shop: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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

  const openProject = (id: number) => {
    navigate(`/shop/${id}`);
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
                  <p className="text-sm text-slate-500 mb-2 font-medium uppercase tracking-wide">{study.client}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1 font-medium">
                          <CheckCircle className="h-3 w-3" />
                          <span>Warranty</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate" title={study.specs?.warranty}>{study.specs?.warranty || '24h'}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-500 text-xs mb-1 font-medium">
                          <Layout className="h-3 w-3" />
                          <span>Format</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 truncate" title={study.specs?.format}>{study.specs?.format || 'Standard'}</p>
                      </div>
                  </div>
                  
                  <button 
                    onClick={() => openProject(study.id)}
                    className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    View Product <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Looking for bulk accounts?</h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg">
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
