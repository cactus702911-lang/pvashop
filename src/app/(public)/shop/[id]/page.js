
"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Zap, CheckCircle, Headphones, ChevronLeft, ChevronRight, Star, Plus, Minus, ArrowUpRight, Shield, Clock, Award } from 'lucide-react';
import { useContentStore } from '@/store/contentStore';
import SEO from '@/components/common/SEO';

const iconMap = {
  CheckCircle, Zap, Headphones, Star, Shield, Clock, Award
};

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const { caseStudies, productPage } = useContentStore();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    if (id) {
      const foundProduct = caseStudies.studies.find(p => p.id === Number(id));
      setProduct(foundProduct || null);
      setCurrentImageIndex(0);
      window.scrollTo(0, 0);
    }
  }, [id, caseStudies.studies]);

  if (!product) {
    return (
      <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link href="/shop" className="text-blue-600 hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const gallery = [product.image, ...(product.gallery || [])].filter(Boolean);
  const relatedProducts = caseStudies.studies
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50 pb-20">
      <SEO title={product.title} description={product.description} />
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/shop" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
             {/* Image Gallery Side */}
             <div className="bg-slate-900 relative group h-[400px] lg:h-auto min-h-[400px] flex items-center justify-center p-8">
                <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded border border-white/20">
                  Screenshots / Proof
                </div>
                
                {gallery.length > 0 ? (
                  <>
                    <img 
                      src={gallery[currentImageIndex]} 
                      alt={`Gallery ${currentImageIndex}`} 
                      className="w-full h-full object-contain max-h-[600px] shadow-2xl rounded-lg"
                    />
                    
                    {gallery.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                          {gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400">No Image</span>
                  </div>
                )}
             </div>

             {/* Content Side */}
             <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4">
                      {product.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Verified</span>
                        <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500" /> Instant Delivery</span>
                        <span className="flex items-center gap-1 text-yellow-500">
                            <Star className="w-4 h-4 fill-current" /> 
                            <span className="text-slate-700 ml-1">4.9 (120+ Reviews)</span>
                        </span>
                    </div>
                </div>
                
                <div className="prose prose-slate prose-lg mb-8 text-slate-600 leading-relaxed">
                  <p>{product.description}</p>
                </div>

                {/* Product Specs */}
                {product.specs && (
                  <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-blue-600" /> Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Account Age</p>
                        <p className="font-semibold text-slate-900">{product.specs.age}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">IP Country</p>
                        <p className="font-semibold text-slate-900">{product.specs.ip}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Format</p>
                        <p className="font-mono text-sm bg-white px-2 py-1 rounded border border-slate-200 inline-block text-slate-700">
                          {product.specs.format}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Warranty</p>
                        <p className="font-bold text-green-600">{product.specs.warranty}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Link 
                    href="/contact"
                    className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 text-center flex items-center justify-center gap-2"
                  >
                    Buy Now
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 bg-white text-slate-700 border border-slate-200 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Headphones className="w-5 h-5" /> Contact Support
                  </Link>
                </div>
             </div>
          </div>
        </div>

        {/* Tabs Section (FAQ & Reviews) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="flex border-b border-slate-100">
                        <button 
                            onClick={() => setActiveTab('details')}
                            className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider ${activeTab === 'details' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Description
                        </button>
                        <button 
                            onClick={() => setActiveTab('reviews')}
                            className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider ${activeTab === 'reviews' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            Reviews ({product.reviews?.length || 0})
                        </button>
                        <button 
                            onClick={() => setActiveTab('faq')}
                            className={`flex-1 py-4 font-bold text-sm uppercase tracking-wider ${activeTab === 'faq' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            FAQ
                        </button>
                    </div>
                    
                    <div className="p-8">
                        {activeTab === 'details' && (
                            <div className="prose prose-slate max-w-none">
                                <h3 className="text-xl font-bold mb-4">About this service</h3>
                                <p>{product.description}</p>
                                <div className="mt-4 whitespace-pre-wrap">{productPage.generalDescription}</div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {product.reviews && product.reviews.length > 0 ? (
                                    product.reviews.map((review) => (
                                        <div key={review.id} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="font-bold text-slate-900">{review.user}</div>
                                                <div className="text-xs text-slate-400">{review.date}</div>
                                            </div>
                                            <div className="flex text-yellow-400 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                                                ))}
                                            </div>
                                            <p className="text-slate-600">{review.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-500 italic">No reviews yet. Be the first to review!</p>
                                )}
                            </div>
                        )}

                        {activeTab === 'faq' && (
                            <div className="space-y-4">
                                {product.faqs && product.faqs.length > 0 ? (
                                    product.faqs.map((faq, idx) => (
                                        <div key={idx} className="bg-slate-50 rounded-lg p-4">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                                                <span className="text-blue-600">Q:</span> {faq.question}
                                            </h4>
                                            <p className="text-slate-600 pl-6 text-sm">{faq.answer}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-500 italic">No FAQs available for this product.</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="md:col-span-1">
                <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg mb-6">
                    <h3 className="text-xl font-bold mb-4">{productPage.sidebarTitle}</h3>
                    <ul className="space-y-4">
                        {productPage.sidebarPoints.map((point, idx) => {
                            const IconComponent = iconMap[point.icon] || CheckCircle;
                            return (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <IconComponent className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">{point.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Products</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {relatedProducts.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <span className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded text-xs font-bold text-blue-600">{item.category}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm text-slate-500">{item.client}</span>
                                    <button 
                                        onClick={() => router.push(`/shop/${item.id}`)}
                                        className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        View <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
