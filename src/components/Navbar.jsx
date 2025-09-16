import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { useModal } from './ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <div className="bg-white font-sans">
      <header>
        <nav className="container mx-auto px-10 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Specialist Hospital Logo" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex ms-auto items-center">
            <ul className="flex items-center space-x-4 text-[16px]">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-[#1B7FF2] transition-colors duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-[#1B7FF2] transition-colors duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-gray-600 hover:text-[#1B7FF2] transition-colors duration-300"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-600 hover:text-[#1B7FF2] transition-colors duration-300 mr-8"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Desktop Action Button */}
          <button
            onClick={openModal}
            className="hidden sm:inline-block bg-[#1B7FF2] hover:bg-blue-700 text-[#F5F5F5] font-semibold py-3 px-6 rounded-[8px] transition-colors duration-300"
          >
            Book an Appointment
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Slide from Left) */}
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <img src={logo} alt="" className="h-12 w-auto"/>
              <button onClick={() => setIsOpen(false)}>
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-4 p-6 text-[16px]">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#1B7FF2]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#1B7FF2]"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#1B7FF2]"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-[#1B7FF2]"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openModal();
                  }}
                  className="bg-[#1B7FF2] hover:bg-blue-700 text-[#F5F5F5] font-semibold py-4 px-4 rounded-[8px] transition-colors duration-300 w-full text-left"
                >
                  Book an Appointment
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}