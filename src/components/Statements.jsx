import React from 'react';
import rocket from '../assets/rocket.png';
import eyes from '../assets/eyes.jpg';
import puzzle from '../assets/puzzle.jpg';

const VisionAndMission = () => {
  return (
    <div className="bg-[#101010] font-sans">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 py-16 px-4 md:px-16">
        
        {/* Top Left - Vision Statement */}
        <div className="flex flex-col p-6 rounded-lg order-1">
          <div className="flex flex-col items-start mb-4">
            <img src={rocket} alt="" className="w-[40px] h-[40px] mb-2" />
            <span className="text-[36px] text-white">Vision Statement</span>
          </div>
          <p className="text-[#E4EAFF] text-[20px] font-medium leading-relaxed">
            To be the most trusted community hospital in Lagos — known for compassionate, affordable, and comprehensive healthcare.
          </p>
        </div>

        {/* Top Right - Vision Image */}
        <div className="rounded-lg overflow-hidden order-2">
          <img 
            src={eyes} 
            alt="Close up of a person's eye" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left - Mission Statement */}
        <div className="flex flex-col p-6 rounded-lg order-3 lg:order-4">
          <div className="flex flex-col items-start mb-4">
            <img src={rocket} alt="" className="w-[40px] h-[40px] mb-2" />
            <span className="text-[36px] text-white">Mission Statement</span>
          </div>
          <ul className="list-disc list-inside text-[#E4EAFF] text-[20px] font-medium leading-relaxed space-y-4">
            <li>To deliver excellent, patient-first medical services through innovation, empathy, and professionalism.</li>
            <li>To maintain high clinical standards while fostering a welcoming, respectful environment for all.</li>
            <li>To continue evolving through medical advancement and staff training, ensuring that every patient receives care that meets international best practices.</li>
          </ul>
        </div>

        {/* Bottom Right - Mission Image */}
        <div className="rounded-lg overflow-hidden order-4 lg:order-3">
          <img 
            src={puzzle}
            alt="Hands putting together a puzzle" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
