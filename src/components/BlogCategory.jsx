import React from 'react';
import { LuUser } from 'react-icons/lu'; // User icon
import blogfeature from '../assets/blogfeature.jpg'; // Adjust path

const BlogCategory = () => {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-12 overflow-hidden max-w-7xl mx-auto my-12 font-sans">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Blog Image Section */}
        <div className="relative w-full md:w-1/2 md:min-h-[300px]">
          <img 
            src={blogfeature} 
            alt="People standing together" 
            className="w-full h-full object-cover rounded-[20px]"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#222222] text-white text-sm px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        </div>

        {/* Blog Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-[#222222] bg-[#EAEAEA] text-xs mb-3 rounded-full px-3 py-1 self-start">
            Category
          </span>

          <h2 className="text-3xl md:text-4xl font-medium text-[#000000] leading-tight mb-4">
            Building Healthier Communities, One Patient at a Time
          </h2>
          
          {/* Author and Date */}
          <div className="flex items-center text-[#7C7C7C] text-sm mb-6">
            <LuUser className="w-5 h-5 mr-2 text-gray-600" />
            <span className="mr-2">Ethan Taylor</span>
            <span className="mx-2">•</span>
            <span>28th Feb, 2025</span>
          </div>

          <p className="text-[18px] font-sans text-[#2E2E27] mb-8 leading-relaxed max-w-xl">
            Discover how our hospital is combining advanced medicine, compassionate care, and innovation to create a healthier future for everyone.
          </p>

          <button className="w-auto inline-block px-5 py-3 bg-[#1B7FF2] text-white font-medium rounded-[8px] hover:bg-blue-700 transition-all self-start">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
