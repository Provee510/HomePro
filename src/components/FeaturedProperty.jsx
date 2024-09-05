import React from 'react';
import { featureDb } from './Db/Index';
import PropertyCard from './Card/PropertyCard';
import Wrapper from '../components/Wrapper';

const FeaturedProperty = () => {
  return (
    <Wrapper className="">
      <h1 className='text-5xl font-bold py-10'>Featured Properties</h1>
      <div className='flex flex-nowrap gap-5 mb-7'>
        {featureDb && featureDb.length > 0 && featureDb.map((property) => (
          <div key={property._id} className='flex-shrink-0'>
            <PropertyCard {...property} key={property._id} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProperty;
