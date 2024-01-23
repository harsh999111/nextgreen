"use client"
import React, { useState } from 'react';
import { FaList } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
// import Fanta from '../../../public/Image/Icons/Fanta.svg';
import Image from 'next/image';

const Nav = () => {
  const links = [
      {
          name: 'Services',
          link: '/',
          dropdown: true,
          dropdownItems: [
              { name: 'Service', link: '/t' },
              { name: 'Service', link: '/' },
              { name: 'Service', link: '/' },
              { name: 'Service', link: '/' },
            ],
        },
    { name: 'About Us', link: '/About' },
    {name:'Contact Us', link:"/Contact"},
  ];
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className='shadow-md bg-green-100 w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-green-100 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-green-800'>
          <span className='text-3xl text-green-900 mr-1 pt-2'>
            <h3>Next <span className='text-green-300'>Green</span></h3>
          </span>
        </div>

        <div
          onClick={toggleDropdown}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-green-900'
        >
          {open ? <AiOutlineClose /> : <FaList />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static py-2    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-16  bg-green-100 ': 'top-[-490px]'
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              {link.dropdown ? (
                <div className='relative  group'>
                  <a
                    href={link.link}
                    className='text-green-600  duration-500 cursor-pointer'
                  >
                    {link.name}
                  </a>
                  <div
                    className={`absolute left-0 mt-2 w-40 bg-green-900 text-green-600 invisible group-hover:visible transition-all duration-300 ease-in`}
                  >
                    {link.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className='block py-2 px-4 hover:bg-gray-800'
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.link}
                  className='text-green-600 duration-500'
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        <div className='pl-4'>
            <button className='bg-green-600 text-black px-6 py-2'>Book Demo</button>
        </div>
        </ul>

      </div>
    </div>
  );
};

export default Nav;