import React from "react";
import hero from "../assets/hero.jpg"; // Background image
import banner from "../assets/banner.jpg"; // Bottom banner

const Hero = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] font-sans">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Column: Text */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#121212] leading-tight mb-4">
                  Model Specialist Hospital
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#383C59] max-w-lg mx-auto md:mx-0 mb-6">
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

              {/* Right Column: Side Image Placeholder */}
              <div className="hidden md:flex justify-center items-center h-full">
                {/* Add optional illustration or doctor image here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <div className="w-full">
        <img
          src={banner}
          alt="Hospital Banner"
          className="w-full h-20 sm:h-28 md:h-32 lg:h-40 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
