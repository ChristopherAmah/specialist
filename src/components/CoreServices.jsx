import React from 'react';
import med from '../assets/med1.png';
import med2 from '../assets/med2.png';
import med3 from '../assets/med3.png';
import med4 from '../assets/med4.png';
import med5 from '../assets/med5.png';
import med6 from '../assets/med6.png';      

// Main App component that renders the entire section
const App = () => {
  const services = [
    {
      title: "General Consultation",
      description: "Personalized medical advice and health evaluations by certified physicians.",
      image: med
    },
    {
      title: "Diagnostics Services",
      description: "On-site lab tests, X-rays, and scans for fast and accurate diagnosis.",
      image: med2
    },
    {
      title: "General Surgery",
      description: "Expert surgical procedures for the treatment of various medical conditions, delivered with precision and care.",
      image: med3
    },
    {
      title: "Orthopedics",
      description: "Specialized care for bone, joint, and muscle disorders, ensuring faster recovery and improved mobility.",
      image: med4
    },
    {
      title: "Pharmacy Services",
      description: "24/7 access to prescribed medications and health essentials.",
      image: med5
    },
    {
      title: "Emergency Services",
      description: "Rapid-response care for critical and life-threatening situations.",
      image: med6
    }
  ];

  return (
    <div className="bg-white min-h-screen py-8 px-4 md:px-10 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-[14.75px] text-[#1B7FF2] bg-white border-[1.05px] border-indigo-600 rounded-full mb-8">
            What We Do
          </span>
          <h2 className="text-4xl md:text-[48px] font-medium text-[#192431] tracking-tight leading-tight mb-[16px]">
            Our Core Medical Services
          </h2>
          <p className="text-[18px] text-[#2E2E27] lg:max-w-1/3 mx-auto">
            We provide expert care across a wide range of essential medical services under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 lg:px-20">
          {services.map((service, index) => (
            <div key={index} className="transition-transform transform hover:scale-105">
              <div className="flex bg-[#F2F7FFD6] justify-center mb-6">
                <img 
                  src={service.image} 
                  alt={`${service.title} icon`} 
                  className="w-48 h-auto rounded-full"
                />
              </div>
              <div className="text-start">
                <h3 className="text-[24px] font-semibold text-[#2E2E27] mb-2">{service.title}</h3>
                <p className="text-[16px] font-sans text-[#2E2E27] max-w-3/4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
