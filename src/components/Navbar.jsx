import React from 'react';

// 1. IMPORT YOUR LOGO IMAGE HERE
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const NavLink = ({ href, children }) => (
    <li className="mx-4">
        <a href={href} className="text-gray-600 hover:text-[#1B7FF2] transition-colors duration-300">
            {children}
        </a>
    </li>
);

export default function App() {
    return (
        <div className="bg-white font-sans">
            <header className="">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center">
                        <img src={logo} alt="Specialist Hospital Logo" className="h-12 w-auto" /> 
                    </a>


                    {/* Navigation Links */}
                    <div className="hidden md:flex ms-auto items-center">
                        <ul className="flex items-center space-x-4 text-[16px]">
                           <NavLink href="/">Home</NavLink>
                           <NavLink href="#">About</NavLink>
                           <NavLink href="#">Blog</NavLink>
                           <NavLink href="#">Contact Us</NavLink>
                        </ul>
                    </div>

                    {/* Action Button */}
                    <a
                        href="#"
                        className="hidden sm:inline-block bg-[#1B7FF2] hover:bg-blue-700 text-[#F5F5F5] font-semibold py-3 px-6 rounded-[8px] transition-colors duration-300"
                    >
                        Book an Appointment
                    </a>
                    
                    {/* Mobile Menu Button (for smaller screens) */}
                    <div className="md:hidden">
                        <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}