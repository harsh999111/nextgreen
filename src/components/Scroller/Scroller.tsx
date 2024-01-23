import Image from 'next/image';
import React from 'react';
import Logo1 from '../../../public/Image/Logo.svg';
import Logo6 from '../../../public/Image/Logo2.svg';
import Logo2 from '../../../public/Image/Logo3.svg';
import Logo3 from '../../../public/Image/Logo4.svg';
import Logo4 from '../../../public/Image/logo5.svg';
import Logo5 from '../../../public/Image/Logo6.svg';
import Logo from '../../../public/Image/Logo7.svg';
import Logo8 from '../../../public/Image/Logo8.svg';
import Logo9 from '../../../public/Image/Logo.svg';
import Logo10 from '../../../public/Image/Logo2.svg';
import Logo11 from '../../../public/Image/Logo3.svg';
import Logo12 from '../../../public/Image/Logo4.svg';
import Logo13 from '../../../public/Image/logo5.svg';
import Logo14 from '../../../public/Image/Logo6.svg';
import Logo15 from '../../../public/Image/Logo7.svg';
import Logo16 from '../../../public/Image/Logo8.svg';
import './Scroll.css';

const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo8,Logo9,Logo10,Logo11,Logo12,Logo13,Logo14,Logo15,Logo16];

const Scroller = () => {
  return (
    <section className='h-full w-full 2xl:px-60 px-2 md:px-4 lg:px-24'>

    <div className="scroll-container h-full w-full px-6  lg:px-20 py-6 space-y-6  2xl:px-48">
        <div className='pt-24 text-center text-base text-gray-500'>
            <h2>
            Trusted by industry leaders
            </h2>
        </div>
      <div className="logos pt-16">

        <div className="logos-slide">
       
          
          {logos.map((logo, index) => (
            <div key={index} className="logo-item ">
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={700} // Set the width as needed
                height={400} // Set the height as needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Scroller;
