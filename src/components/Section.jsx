import React from 'react';
// import { Section } from './Db/Index'; 
import image1 from '../assets/Images/Frame 37 (1).png'
import image2 from '../assets/Images/Frame 37 (16).png'
import image3 from '../assets/Images/Frame 37 (2).png'
import image4 from '../assets/Images/Frame 37 (3).png'
import image5 from '../assets/Images/Frame 37 (4).png'

const Section = () => {

  const items = [
    { image: '../assets/Images/Frame 37 (1).png', title: 'Studio apartment at Abuja', price: 1000000 },
    { image: '../assets/Images/Frame 37 (16).png', title: 'Comfortable Villa at Kaduna', price: 2000000 },
   
  ];

  return (
    <div>
      <h1 className='text-3xl font-bold'>Featured Properties</h1>
      <div className='grid grid-cols-1'>
        {items.map((item, index) => (
          <div key={index} className='grid grid-cols-1  p-4'>
            <img src={item.image} alt='Property' className='w-24 h-24 object-cover' />
            <div className='grid grid-cols-1'>
              <h2 className='text-xl font-semibold'>{item.title}</h2>
              <div className='grid items-center text-green-600'>
                <img src='/path/to/nairaIcon.png' alt='Naira Icon' className='w-5 h-5' />
                <span>{item.price.toLocaleString('en-US')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
