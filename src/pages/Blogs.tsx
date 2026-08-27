import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye } from 'lucide-react';
import { blogPostsData } from '../data/blogs';

export const Blogs: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Breadcrumbs */}
        <div className="text-center mb-14 animate-fadeIn">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
            Blogs
          </h1>
          <div className="flex items-center justify-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80 font-medium">Blogs</span>
          </div>
        </div>

        {/* 3x3 Grid of 9 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.id}
              className="group bg-[#1D1D1D] border border-[#2A2A2A] hover:border-[#383838] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <Link to={`/blogs/${post.id}`} className="block">
                {/* Image on top with rounded-t corners */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#111111]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Title */}
                <div className="p-5 sm:p-6 pb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#EC1E79] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>

              {/* Bottom Meta Row (Date on Left, Views on Right) */}
              <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between text-xs text-white/50 border-t border-[#262626]/80 mt-auto">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-white/40 group-hover:text-white/70 transition-colors" />
                  <span>{post.formattedDate || '2021-08-09 04:19 AM'}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Eye size={13} className="text-white/40 group-hover:text-white/70 transition-colors" />
                  <span>{post.views || 51}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blogs;
