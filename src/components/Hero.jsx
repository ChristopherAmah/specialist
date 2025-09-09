import React from "react";
import hero from "../assets/hero.jpg"; // Adjust the path if needed
import banner from '../assets/banner.jpg';

const Hero = () => {
  return (
    <section>
        <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center min-h-[70vh] md:min-h-[90vh] font-sans">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#121212] leading-tight mb-4">
                Model Specialist Hospital
              </h1>
              <p className="text-base md:text-lg text-[#383C59] max-w-lg mx-auto md:mx-0 mb-8">
                Model Specialist Hospital provides exceptional healthcare with a
                patient-centered approach. Our team of specialists is dedicated
                to delivering compassionate care using the latest medical
                technologies.
              </p>
              <a
                href="#"
                className="inline-block bg-[#1B80F3] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-[2.13px] transition-transform transform hover:scale-105 duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Right Column: Side Image Placeholder */}
            <div className="hidden md:flex justify-center items-center h-full">
              {/* Optional extra image or illustration */}
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Bottom Banner Image */}
      <div className="bottom-0 w-full">
        <img src={banner} alt="Hospital Banner" className="w-full h-32 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
