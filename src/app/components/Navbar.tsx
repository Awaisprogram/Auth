'use client'
// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/home" className="text-2xl font-bold">
              QOUTES
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/home" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
            <Link href="/login" className="bg-blue-900 rounded-full py-2 px-6 hover:bg-green-900">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="space-y-2 px-4 py-6">
            <Link href="/home" className="block hover:bg-gray-800 px-3 py-2 rounded">
              Home
            </Link>
            <Link href="/about" className="block hover:bg-gray-800 px-3 py-2 rounded">
              About
            </Link>
           
            <Link href="/contact" className="block hover:bg-gray-800 px-3 py-2 rounded">
              Contact
            </Link>
            <div className='mt-10 '>
            <Link href="/login" className="block  hover:bg-gray-800 px-3 py-2 rounded">
              Login
            </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
