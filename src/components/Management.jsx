import React from 'react';
import { BsEnvelope, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import doctor from '../assets/doctor.jpg';

const Management = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-30 font-sans">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-[18.51px]  text-[#1B7FF2] border rounded-full mb-4">
            Management
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-[#121212] tracking-tight leading-tight">
            A Note from Our Medical <br />Director
          </h2>
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-5">
        {/* Left Column - Image and Info */}
        <div className="lg:w-2/4 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <div className="w-full max-w-xs overflow-hidden mb-6">
            <img
                src={doctor}
                alt="Dr. Bola Awoyomi"
                className="w-full h-auto object-cover"
            />
            </div>

            {/* Doctor's name + icons side by side on lg */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
            <h3 className="text-[27.31px] font-semibold text-[#192431] mb-2 lg:mb-0">
                Dr. Bola Awoyomi
            </h3>

            {/* Social Icons */}
            <div className="flex mx-auto space-x-4 mt-2 lg:mt-0">
                <a
                href="#"
                className="text-white bg-[#1B80F3] px-1 py-1 rounded-[2.93px] transition-colors"
                >
                <BsEnvelope size={24} />
                </a>
                <a
                href="#"
                className="text-white bg-[#1B80F3] px-1 py-1 rounded-[2.93px] transition-colors"
                >
                <BsFillTelephoneFill size={24} />
                </a>
                <a
                href="#"
                className="text-white bg-[#1B80F3] px-1 py-1 rounded-[2.93px] transition-colors"
                >
                <BsLinkedin size={24} />
                </a>
            </div>
            </div>

            {/* Job titles (always under the name, even on lg) */}
            <p className="text-[18.2px] text-[#4C5B6D] mt-2">Medical Director,</p>
            <p className="text-[18.2px] text-[#4C5B6D]">Model Specialist Hospital.</p>
        </div>

        {/* Right Column - Text */}
        <div className="lg:w-2/3 font-sans text-left lg:text-left border-b lg:border-b border-gray-300 pb-0 lg:pb-8">
            <p className="text-[20.48px] text-[#4C5B6D] leading-relaxed mb-6">
            At Model Specialist Hospital, our patients are at the heart of everything
            we do. When I first envisioned this hospital, I imagined a space where
            medical care went beyond prescriptions and procedures — a place where
            people felt seen, heard, and truly cared for.
            </p>
            <p className="text-[20.48px] text-[#4C5B6D] leading-relaxed mb-6">
            Two decades later, that dream continues to unfold. We’ve built a
            reputation for reliability, discretion, and service excellence — thanks to
            our passionate staff and the enduring trust of our patients. As we look
            toward the future, our promise is simple: to continue evolving with the
            needs of our community while holding fast to the values that brought us
            here.
            </p>
            <p className="text-[20.48px] text-[#4C5B6D] leading-relaxed">
            On behalf of the entire Model Specialist Hospital team, thank you for
            choosing us.
            </p>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Management;
