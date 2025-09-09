import React from 'react';
import footerbg from '../assets/footerbg.jpg';
import footerlogo from '../assets/footerlogo.png';
import { BsTwitter, BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";


const App = () => {
  return (
    <footer className="text-white font-sans">
      
      {/* Top Banner Section */}
      <div className="relative bg-[#000000] w-full overflow-hidden">
        <div className="absolute inset-0 opacity-30"
             >
        </div>
        <div className='py-3 px-22'>
          <div className="relative z-10 container mx-auto px-20 py-5 md:py-5 flex flex-col md:flex-row items-center justify-between bg-cover bg-center" style={{ backgroundImage: `url(${footerbg})` }}>
          <div className="text-center md:text-left mb-8 md:mb-0 max-w-2xl">
            <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold leading-tight tracking-tight">
              We believe in affordable specialty <br className="hidden md:block" /> healthcare for all.
            </h2>
            <p className="mt-5 max-w-lg mx-auto md:mx-0" style={{ fontSize: '16px' }}>
              Book your appointment with us today.
            </p>
          </div>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-white text-[#1B7FF2] font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#000000] pt-16 pb-8">
        <div className="container mx-auto px-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[8fr_2fr_2fr_3fr] gap-12">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-[136.07px] h-[95.14px] flex items-center justify-center">
                <img src={footerlogo} alt="" />
              </div>
            </div>
            
            <p className="text-white text-[14px] text-center md:text-left max-w-sm">
              Model Specialist Hospital is committed to quality, affordable healthcare services with compassion and excellence since 2002.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className=" hover:bg-blue-500">
                <BsTwitter size={20} />
              </a>
              <a href="#" className=" hover:bg-blue-500">
                <BsFacebook size={20} />
              </a>
              <a href="#" className=" hover:bg-blue-500">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className=" hover:bg-blue-500">
                <BsYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Resources</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Services</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-[18px] font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-6 text-[14px] text-[#A5A5A5]">
              <li className="flex items-start space-x-3">
                <FaLocationDot className='text-white w-5 h-5'/>
                <span>5, Taiwo Balewa Crescent, Off Adeniran Ogunsanya, Surulere.</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-white">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.583 1.832 1.442l.951 3.805A1.875 1.875 0 018.639 9.95l-1.621.81a.75.75 0 00-.475 1.25l4.897 4.897a.75.75 0 001.25-.475l.81-1.621a1.875 1.875 0 012.188-.988l3.805.951c.86.222 1.442.972 1.442 1.832V19.5a3 3 0 01-3 3h-2.25C8.07 22.5 1.5 15.93 1.5 8.25V4.5z" clipRule="evenodd" />
                </svg>
                <span>09023141562</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-white">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.58 5.42a3 3 0 01-2.84 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.71 6.13a1.5 1.5 0 001.44 0L22.5 6.908z" />
                </svg>
                <span>Modelspecialist@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 text-white">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6l3.75 2.25a.75.75 0 10.75-1.218L12.75 9.874V6z" clipRule="evenodd" />
                </svg>
                <span>Mon - Sun: 12:00AM - 12:00PM</span>
              </li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-[#1B80F3] rounded-lg font-semibold text-white text-[14px]  hover:bg-[#1B80F3] transition-colors">
              Help Center
            </button>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-white text-sm text-center md:flex md:justify-between md:items-center">
          <p className="mb-4 md:mb-0">
            &copy; 2025 Model Specialist Hospital. All right reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Cookies Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
