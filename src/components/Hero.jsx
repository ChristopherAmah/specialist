import React from "react";
import hero from "../assets/hero.jpg";

// Example icons (replace with your own images)
import reliance from "../assets/reliance.png";
import novo from "../assets/novo.png";
import total from "../assets/total.png";
import greenbay from "../assets/greenbay.png";
import axa from "../assets/axa.png";

const Hero = () => {
  // Base icon set
  const icons = [reliance, novo, total, greenbay, axa];

  return (
    <section
  className="relative w-full bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: `url(${hero})` }}
>
  {/* Overlay (only visible on mobile and sm screens) */}
  <div className="absolute inset-0 bg-black/40 sm:bg-transparent"></div>

  <div className="relative z-10 flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] font-sans">
    <div className="w-full max-w-7xl mx-auto px-8 py-8 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text */}
        <div className="text-left md:text-left">
          <h1
            className="text-5xl max-w-xs sm:max-w-full sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:font-semibold text-white sm:text-[#121212] leading-tight mb-4"
            style={{ fontFamily: "'Overused Grotesk'" }}
          >
            Model Specialist Hospital
          </h1>
          <p className="text-sm max-w-xs font-bold sm:font-normal sm:text-base md:text-lg text-white sm:text-[#383C59] md:max-w-lg md:mx-0 mb-6 font-sans">
            Model Specialist Hospital provides exceptional healthcare with a
            patient-centered approach. Our team of specialists is dedicated to
            delivering compassionate care using the latest medical technologies.
          </p>
          <a
            href="#"
            className="inline-block bg-[#1B80F3] hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-transform transform hover:scale-105 duration-300 text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex justify-center items-center h-full"></div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
