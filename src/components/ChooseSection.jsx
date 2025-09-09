import React from "react";
import lab from "../assets/lab.jpg";
import award from "../assets/award.png";
import calendar from "../assets/calendar-check.png";
import paint from "../assets/paint-bucket.png";
import check from "../assets/user-check.png";

const App = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white flex items-center justify-center p-4 md:p-8">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch bg-[#101010]">
        
        {/* Left Column - Content */}
        <div className="flex flex-col p-8 md:p-12 h-full">
          {/* Top Button */}
          <div className="inline-block self-start border-[1.32px] border-[#1B7FF2] text-[#1B7FF2] rounded-full px-4 py-1 text-[18.51px] font-inter mb-8">
            Why Choose Us
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-8 min-w-xl">
            Experience exceptional care at <br /> Model Specialist Hospital for
            your Health Needs
          </h1>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start space-y-2 p-4">
              <img src={award} alt="" className="w-10 h-10" />
              <h3 className="text-[24px] font-medium">Expert Medical Team</h3>
              <p className="text-[16px] text-[#ABABAB]">
                Board-certified doctors and specialists dedicated to exceptional care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start space-y-2 p-4">
              <img src={paint} alt="" className="w-10 h-10" />
              <h3 className="text-[24px] font-medium">Modern Facilities</h3>
              <p className="text-[16px] text-[#ABABAB]">
                ICU, advanced labs, and imaging suites for precise medical services.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start space-y-2 p-4">
              <img src={calendar} alt="" className="w-10 h-10" />
              <h3 className="text-[24px] font-medium">End-to-End Support</h3>
              <p className="text-[16px] text-[#ABABAB]">
                From strategy to launch, we’re with you every step of the way.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start space-y-2 p-4">
              <img src={check} alt="" className="w-10 h-10" />
              <h3 className="text-[24px] font-medium">Client Success Stories</h3>
              <p className="text-[16px] text-[#ABABAB]">
                Our results speak for themselves, with a 97% client satisfaction rate.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="p-8 md:p-12 h-full w-full">
          <img
            src={lab}
            alt="A modern hospital room with a bed and medical equipment."
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
