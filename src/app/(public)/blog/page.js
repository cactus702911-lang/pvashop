
"use client";
import React, { useState } from 'react';
import { useContentStore } from '@/store/contentStore';
import { Calendar, User } from 'lucide-react';
import SEO from '@/components/common/SEO';

const Blog = () => {
  const { blog } = useContentStore();
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (id) => {
    setSelectedPost(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activePost = selectedPost ? blog.posts.find(p => p.id === selectedPost) : null;

  if (activePost) {
    return (
      <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
        <SEO title={activePost.title} description={activePost.excerpt} image={activePost.image} />
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => setSelectedPost(null)}
            className="m-6 mb-2 text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium"
          >
            ← Back to all articles
          </button>
          
          {activePost.image && (
            <div className="h-64 md:h-96 w-full relative">
              <img 
                src={activePost.image} 
                alt={activePost.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {activePost.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{activePost.title}</h1>
              </div>
            </div>
          )}
          
          <div className="p-8 md:p-12">
            {!activePost.image && (
               <div className="mb-8">
                 <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {activePost.category}
                </span>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{activePost.title}</h1>
               </div>
            )}

            <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {activePost.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {activePost.author}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-700">
              {activePost.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 md:px-8">
      <SEO title="Blog" description={blog.subtitle} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{blog.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed">{blog.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer flex flex-col h-full"
              onClick={() => handlePostClick(post.id)}
            >
              <div className="h-48 overflow-hidden relative">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-slate-400">No Image</span>
                  </div>
                )}
                 <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                       {post.category}
                    </span>
                 </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-slate-500 mb-3 flex items-center gap-2">
                   <Calendar className="w-3 h-3" />
                   {post.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                   <span className="text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read Article →
                   </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
