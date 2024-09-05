import React from 'react';
import { howitworksDb } from './db';
import PropertyCard from './Card/PropertyCard';
import Wrapper from '../components/Wrapper';

const HowitworksDb = () => {
  return (
    <Wrapper className="">
      <h1 className='text-5xl font-bold py-10'>How It Works</h1>
      <div className='flex flex-nowrap gap-5 mb-7'>
      {howitworksDb && howitworksDb.map((item, index)=>{
            return (
                <div className='text-center lg:text-start' key={index}>
                    <div className='flex justify-center lg:block mt-2 md:mt-0'>
                        <img src={item.icon} alt="icon1" className='' />
                    </div>
                    <div className='py-4'>
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                </div>
            )
        })}
      </div>
    </Wrapper>
  );
};

export default HowitworksDb;
