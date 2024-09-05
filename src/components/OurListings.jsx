import React from 'react';
import { listingsDb } from './Db/Index';
import PropertyCard from './Card/PropertyCard';
import Wrapper from '../components/Wrapper';

const OurListings = () => {
  return (
    <Wrapper className="">
      <h1 className='text-5xl font-bold py-10'>Our Listings</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-7'>
        {listingsDb && listingsDb.length > 0 && listingsDb.map((property) => (
          <div key={property._id} className='flex-shrink-0'>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default OurListings;
