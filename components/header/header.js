"use client";  
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white no-underline hover:text-gray-200">
            Techozon
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white text-lg hover:text-gray-200 transition duration-200 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
