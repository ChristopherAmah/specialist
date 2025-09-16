import React from "react";
import hero from "../assets/hero.jpg";

// Example icons (replace with your own images)
import reliance from "../assets/reliance.png";
import novo from "../assets/novo.png";
import total from "../assets/total.png";
import greenbay from "../assets/greenbay.png";
import axa from "../assets/axa.png";

const Hero = () => {
  // Duplicate icons for seamless infinite scroll
  const icons = [
    reliance,
    novo,
    total,
    greenbay,
    axa,
    reliance,
    novo,
    total,
    greenbay,
    axa,
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="relative z-10 flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] font-sans">
          <div className="w-full max-w-7xl mx-auto px-8 py-8 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Column: Text */}
              <div className="text-left md:text-left">
                <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:font-semibold text-[#121212] leading-tight mb-4">
                  Model Specialist Hospital
                </h1>
                <p className="text-sm font-semibold sm:text-base md:text-lg md:text-[#383C59] md:max-w-lg mx-auto md:mx-0 mb-6">
                  Model Specialist Hospital provides exceptional healthcare with a
                  patient-centered approach. Our team of specialists is dedicated
                  to delivering compassionate care using the latest medical
                  technologies.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#1B80F3] hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-transform transform hover:scale-105 duration-300 text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>

              {/* Right Column: Placeholder */}
              <div className="hidden md:flex justify-center items-center h-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Scrolling Icons */}
      <div className="infinite-scroll">
        <div className="scroll-track">
          {icons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt={`icon-${idx}`}
              className="scroll-icon"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
