import React from 'react';
import footerbg from '../assets/footerbg.jpg';
import footerlogo from '../assets/footerlogo.png';
import { BsTwitter, BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { useModal } from './ModalContext';

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="text-white font-sans">
      {/* Appointment Banner */}
      <div className="relative bg-[#000000] w-full overflow-hidden">
        <div className="py-3 px-3 md:px-22">
          <div
            className="relative z-10 container mx-auto px-6 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between bg-cover bg-center"
            style={{ backgroundImage: `url(${footerbg})` }}
          >
            <div className="text-center md:text-left mb-8 md:mb-0 max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight">
                We believe in affordable specialty <br className="hidden md:block" />
                healthcare for all.
              </h2>
              <p className="mt-5 max-w-lg mx-auto md:mx-0 text-[16px]">
                Book your appointment with us today.
              </p>
            </div>
            <button
              onClick={openModal}
              className="inline-block px-8 py-4 bg-white text-[#1B7FF2] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#000000] pt-16 pb-8">
        <div className="container mx-auto px-[32px] lg:px-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[8fr_2fr_2fr_3fr] gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-[136.07px] h-[95.14px] flex items-center justify-center">
                <img src={footerlogo} alt="Logo" />
              </div>
            </div>
            <p className="text-white text-[14px] max-w-sm">
              Model Specialist Hospital is committed to quality, affordable healthcare
              services with compassion and excellence since 2002.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-500">
                <BsTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500">
                <BsFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-500">
                <BsYoutube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Resources</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li><a href="#" className="hover:text-blue-500">Terms of Services</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li className="flex items-start space-x-3">
                <FaLocationDot className="text-white w-5 h-5" />
                <span>5, Tafawa Balewa Crescent, off Adeniran Ogunsanya, Surulere, Lagos.</span>
              </li>
              <li className="flex items-center space-x-3">
                📞 <span>08023141562</span>
              </li>
              <li className="flex items-center space-x-3">
                ✉️ <span>Modelspecialist@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                ⏰ <span>Mon - Sun: 12:00AM - 12:00PM</span>
              </li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-[#1B80F3] rounded-lg font-semibold text-white text-[14px] hover:bg-[#176cd6] transition-colors">
              Help Center
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-white text-sm text-center md:flex md:justify-between md:items-center">
          <p className="mb-4 md:mb-0">
            &copy; 2025 Model Specialist Hospital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;