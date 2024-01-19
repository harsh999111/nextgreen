"use client"
import React, { useState } from 'react';
import Dropdown from '../Dropdown/page';
import { FaList, FaTimes } from 'react-icons/fa';
import useWindowWidth from '../Navbar/Window'; // Replace with the actual path

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileButtonClick = () => {
    console.log('Mobile Button Clicked');
    // Handle other mobile button actions
  };

  return (
    <section className="h-full w-full">
      <nav>
        <div className="flex justify-between items-center md:flex-row-reverse">
          <div className="flex pt-3 font-semibold 2xl:pr-12">
            <span className="text-2xl text-green-950">Next</span>
            <span className="text-2xl text-green-800">Green</span>
          </div>
          <div className="flex gap-10">
            <div className="pt-4">
              {windowWidth <= 768 ? (
                isMobileMenuOpen ? (
                  <FaTimes
                    className="cursor-pointer text-2xl md:hidden md:mt-6"
                    onClick={closeMobileMenu}
                  />
                ) : (
                  <FaList
                    className="cursor-pointer text-2xl md:hidden md:mt-6"
                    onClick={toggleMobileMenu}
                  />
                )
              ) : null}
            </div>
            {isMobileMenuOpen && (
              <div className="fixed top-0 left-0 right-0 bottom-0 pt-10 bg-green-100 text-center">
                <FaTimes
                  className="cursor-pointer text-2xl md:hidden md:mt-6 absolute top-4 right-4"
                  onClick={closeMobileMenu}
                />
                <ul className="flex flex-col justify-center items-center space-y-4">
                  <li className="pt-2">
                    <Dropdown />
                  </li>
                  <li onClick={closeMobileMenu} className="pt-2">
                    About US
                  </li>
                  <li onClick={closeMobileMenu} className="pt-2">
                    Contact Us
                  </li>
                  <li onClick={closeMobileMenu} className="pt-2">
                    Blog
                  </li>
                  <li>
                    <button
                      className="text-base px-4 py-2 border rounded-2xl bg-green-600"
                      onClick={handleMobileButtonClick}
                    >
                      Mobile Button
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {windowWidth > 767 && (
              <ul className="flex gap-8 text-base pt-2 text-green-900 md:flex">
                <li className="pt-2">
                  <Dropdown />
                </li>
                <li className="pt-2">About US</li>
                <li className="pt-2">Contact Us</li>
                <li className="pt-2">Blog</li>
                <div>
                  <button className="bg-green-300 px-6 py-2 rounded-xl">
                    Book Demo
                  </button>
                </div>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
