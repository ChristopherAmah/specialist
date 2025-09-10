import React from 'react';

const OurHistory = () => {
  return (
    <div className="bg-white py-20 px-8 md:px-16 font-sans">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
        
        {/* Left Content Section */}
        <div className="lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-block px-4 py-1 text-[14.75px] text-[#1B7FF2] border rounded-full mb-4">
            Our History
          </span>
          <h2 className="text-4xl font-medium text-[#000000] leading-tight">
            A Legacy of Excellence In Healthcare
          </h2>
        </div>
        
        {/* Right Content Section */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <p className="text-md text-[#5E5E5E] leading-relaxed mb-6">
            Model Specialist Hospital, located at 5 Tafawa Balewa Crescent, Surulere, Lagos, was founded in 2002 with a clear purpose — to provide accessible, high-quality medical care to individuals and families within our community.
          </p>
          <p className="text-md text-[#5E5E5E] leading-relaxed">
            Over the past two decades, the hospital has grown from a modest outpatient clinic into a full-fledged medical facility offering 24/7 emergency services, diagnostics, maternity care, pediatrics, and more. With a commitment to continuous improvement, our team of seasoned healthcare professionals, nurses, and support staff work collaboratively to deliver patient-centered care using both modern technology and time-tested medical expertise. We have proudly served thousands of patients across Lagos and beyond — not just as a hospital, but as a trusted partner in their health journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
