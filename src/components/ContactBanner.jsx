import React from 'react';
import contactbanner from '../assets/contactbanner.jpg'; // Adjust path if needed

const ContactUsBanner = () => {
  return (
    <div className="relative w-full h-80 bg-gray-800 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactbanner})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

      {/* Title */}
      <h1 className="relative z-10 text-white text-5xl md:text-6xl font-medium font-sans tracking-tight">
        Contact us
      </h1>
    </div>
  );
};

export default ContactUsBanner;
