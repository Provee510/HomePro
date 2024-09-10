import React from 'react';
import Wrapper from './Wrapper';
import propertyImage from '../assets/Icons/icons/propertyImage1.png';

const PropertyPurchased = () => {
  return (
    <div className="bg-gray-300 relative">
      <Wrapper>
        <div className="text-gray-900 text-2xl font-bold lg:p-4 relative right-3">
          Property Purchased So Far
          <p className='text-xl text-gray-500'>Here are the properties you have purchased. Review them anytime!</p>
        </div>

        <div className="lg:py-6 relative  ">
          {/* Table Header */}
        <div className="bg-slate-100 w-full px-11 lg:py-6 rounded-t-lg flex justify-between items-center border-gray-300">
          <div className="w-1/3 text-left  relative top-3">
            <h3 className="text-lg font-semibold">Title Listing</h3>
          </div>
          <div className="w-1/3 text-center relative top-3">
            <h3 className="text-lg font-semibold">Date Purchased</h3>
          </div>
          <div className="w-1/3 text-right relative top-3">
            <h3 className="text-lg font-semibold">Status</h3>
          </div>
        </div>

        {/* Property Item */}
        <div className="rounded-lg">
        <div className='bg-white w-full px-4 lg:py-4 flex justify-between items-center border-b shadow-slate-400'>
          {/* Property Image and Details */}
          <div className="flex items-center w-1/3 space-x-2">
            <img src={propertyImage} alt="Property" className="w-24 h-24 object-cover rounded-lg border-blue-300" />
            <div>
              <h4 className="text-xl font-semibold">Standard Bungalow</h4>
              <p className="text-lg text-gray-600">No 3 jaja crescent Gwarimpa, Abuja</p>
              <p className="text-lg font-semibold text-[#9FA007]">95,000,000</p>
            </div>
          </div>

          {/* Date Purchased */}
          <div className="w-1/3 text-center">
            <p className="text-lg font-semibold">31st July 2024</p>
          </div>

          {/* Status with Rounded Box */}
          <div className="w-1/3 text-right">
            <p className="inline-block px-3 py-1 text-lg font-semibold  bg-red-100 text-red-300 rounded-full">
              Processing
            </p>
          </div>
        </div>
        <div className='bg-white w-full px-4 lg:py-5 flex justify-between items-center border-b  border-gray-300'>
          {/* Property Image and Details */}
          <div className="flex items-center w-1/3 space-x-2">
            <img src={propertyImage} alt="Property" className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h4 className="text-xl font-semibold">Hotel</h4>
              <p className="text-lg text-gray-600">No 1, Ogeneruwe Gra, Benin.</p>
              <p className="text-lg font-semibold text-[#9FA007]">95,000,000</p>
            </div>
          </div>

          {/* Date Purchased */}
          <div className="w-1/3 text-center">
            <p className="text-lg font-semibold">19st June 2024</p>
          </div>

          {/* Status with Rounded Box */}
          <div className="w-1/3 text-right">
            <p className="inline-block px-3 py-1 text-lg font-semibold  bg-red-100 text-red-300 rounded-full">
              Awaiting Approval
            </p>
          </div>
        </div>
        <div className='bg-white w-full px-4 lg:py-5 flex justify-between items-center border-b shadow-slate-400 border-gray-300'>
          {/* Property Image and Details */}
          <div className="flex items-center w-1/3 space-x-2">
            <img src={propertyImage} alt="Property" className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h4 className="text-xl font-semibold">Family Chalet</h4>
              <p className="text-lg text-gray-600">No 7, Balogun street Lekki, Lagos.</p>
              <p className="text-lg font-semibold text-[#9FA007]">95,000,000</p>
            </div>
          </div>

          {/* Date Purchased */}
          <div className="w-1/3 text-center">
            <p className="text-lg font-semibold">14th May 2024</p>
          </div>

          {/* Status with Rounded Box */}
          <div className="w-1/3 text-right">
            <p className="inline-block px-3 py-1 text-lg font-medium  bg-green-100 text-green-400 rounded-full">
              Approved
            </p>
          </div>
        </div>
        <div className='bg-white w-full px-4 lg:py-5 flex justify-between items-center border-b shadow-slate-400 border-gray-300 rounded-bl-lg rounded-br-lg'>
          {/* Property Image and Details */}
          <div className="flex items-center w-1/3 space-x-1">
            <img src={propertyImage} alt="Property" className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h4 className="text-xl font-semibold">Beautiful Bungalow</h4>
              <p className="text-lg text-gray-600">No 3 jaja crescent Gwarimpa, Abuja</p>
              <p className="text-lg font-semibold text-[#9FA007]">95,000,000</p>
            </div>
          </div>
           
          {/* Date Purchased */}
          <div className="w-1/3 text-center">
            <p className="text-lg font-semibold">31st July 2024</p>
          </div>

          
          <div className="w-1/3 text-right  ">
            <p className="inline-block px-3 py-1 text-lg font-medium  bg-green-100 text-green-400 rounded-full">
              Approved
            </p>
          </div>
        </div>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PropertyPurchased;
