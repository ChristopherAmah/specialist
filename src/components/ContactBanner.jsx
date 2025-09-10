import React from 'react';
import contactbanner from '../assets/contactbanner.jpg'; // Adjust path if needed

const ContactUsBanner = () => {
  return (
    <div className="relative w-full h-80 flex bg-cover bg-center items-center justify-center overflow-hidden" style={{
              backgroundImage: `url(${contactbanner})`,
            }}>
          <div className="absolute inset-0 bg-[#00000066] opacity-60"></div>
    
          {/* Title */}
          <h1 className="relative z-10 text-white text-5xl md:text-6xl font-medium font-sans tracking-tight">
            Contact Us
          </h1>
        </div>
  );
};

export default ContactUsBanner;
