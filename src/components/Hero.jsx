import React, { useState } from 'react';
import rectA from "../assets/Images/Rectangle 1 (1).png";
import BlackSection from './BlackSection';
import Wrapper from './Wrapper';




const Hero = () => {
  return (
   <div className='bg-[#F8F3DD]'>
    <Wrapper>
     <div className='min-h-screen bg-[#F8F3DD] flex flex-col p-8'>
      <div className='w-full flex flex-col-reverse lg:justify-between  lg:flex-row'>
        {/* Text Content */}
        <div className='w-full lg:w-[45%] flex justify-center items-center md:justify-between '>
          <div className='flex flex-col  space-y-8 justify-center items-center lg:items-start lg:space-y-4'>
            <h1 className='font-semibold text-4xl mb-1 mt-5 lg:mt-0'>
              Find Your Dream <br /> Home Today!
            </h1>
            <p className='text-lg mb-5 font-semibold'>
              Your journey to a new home starts here. <br />
              Let's find the perfect place for you.
            </p>
            <button className='bg-[#9FA007] text-white font-semibold py-3 px-6 rounded-full'>
              Browse Properties
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className='w-full lg:w-[45%] '>
          <img 
            src={rectA}
            alt='img' 
            className='' 
          />
        </div>
      </div>

      {/* Bottom Black Section */}
     <BlackSection/>
    </div>
   </Wrapper>
   </div>
  );
};

export default Hero;
