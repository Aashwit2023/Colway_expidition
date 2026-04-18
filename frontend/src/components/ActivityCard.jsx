import React from 'react';
import { Link } from 'react-router-dom';

const ActivityCard = ({ image, title, description, link }) => {
  return (
    <Link to={link || '#'} className="group block h-full">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-gray-100 flex flex-col h-full">
        {/* Image Container - Squared aspect with border bottom like reference */}
        <div className="relative h-64 overflow-hidden shrink-0 border-b-2 border-blue-600/10">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
             <div className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold uppercase tracking-widest text-xs border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               Explore Now
             </div>
          </div>
        </div>

        {/* Content Section - Squared Padding */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light line-clamp-3">
            {description}
          </p>
          <div className="mt-auto pt-6">
            <div className="h-0.5 w-12 bg-blue-600/30 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ActivityCard;
