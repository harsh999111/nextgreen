import Image from 'next/image';
import React from 'react';
import { IoTerminal } from 'react-icons/io5';
import { FaRocket } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa6';
import parson from '../../../public/Image/parson .webp';
import parson1 from '../../../public/Image/parson1.webp';
import parson2 from '../../../public/Image/parson2.webp';

const integrationData = [
  {
    id: 1,
    icon: <IoTerminal />,
    title: 'Effortless integration',
    description: 'Our software seamlessly integrates with your current tools and systems, ensuring a smooth transition.',
    image: parson,
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: 'Boost efficiency',
    description: 'By implementing our software, you can optimize your workflow and increase productivity.',
    image: parson1,
  },
  {
    id: 3,
    icon: <FaLeaf />,
    title: 'Sustainable solutions',
    description: 'Our software offers eco-friendly solutions that align with your company sustainability goals',
    image: parson2,
  },
  // Add more integration data objects as needed
];

const Integration = () => {
  return (
    <section className='h-full w-full lg:grid lg:grid-cols-3 lg:space-x-6 '>
      {integrationData.map((integration) => (
        <div key={integration.id} className='pb-10 md:grid md:grid-cols-2 md:space-x-20 lg:grid lg:grid-cols-1'>
          <div className='lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <div className='text-green-900 text-2xl 2xl:text-3xl '>
              {integration.icon}
            </div>
            <div className='pt-2'>
              <h3 className='font-semibold text-green-900 2xl:text-3xl'>{integration.title}</h3>
            </div>
            <div className='pt-2'>
              <h4 className='text-sm text-green-800 lg:text-xs lg:text-center lg:px-8 2xl:text-xs 2xl:px-24'>{integration.description}</h4>
            </div>
          </div>
          <div className='pt-6 lg:flex lg:items-center lg:justify-center'>
            <Image src={integration.image} alt='parson' className='md:h-64 w-64 lg:h-64 lg:w-80 lg:grid lg:mr-7 2xl:h-80 2xl:w-[400px]' />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Integration;
