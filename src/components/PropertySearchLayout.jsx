import React from "react";
import Section from "./SectionDb";
import PropertyCard from "./Card/PropertyCard";
import SectionL from "./SectionL";
import Wrapper from "../components/Wrapper";

const PropertySearchLayout = () => {
  return (
    <Wrapper>
      <div className="w-full grid overflow-x-hidden grid-cols-1 lg:grid-cols-6 gap-8 py-16">
        {/* Left Side */}
        <div className="md:col-span-2 bg-white">
          <div className="space-y-6 py-10 px-6 bg-slate-200 rounded-3xl">
            <div className="rounded-md">
              <select
                id="location"
                className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm"
              >
                <option value="city1">Location</option>
                <option value="city1">Benin</option>
                <option value="city2">Kano</option>
                <option value="city3">Lagos</option>
                <option value="city4">Warri</option>
              </select>
            </div>
            <div>
              <select
                id="bedroom"
                className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm"
              >
                <option value="1">Bedroom</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>
            </div>
            <div>
              <select
                id="price"
                className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm"
              >
                <option value="low">Price Range</option>
                <option value="low">30M-50M</option>
                <option value="medium">50M-100M</option>
                <option value="high">100M-500M</option>
                <option value="very-high">500M-1B</option>
                <option value="luxury">1B and Above</option>
              </select>
            </div>
            <div>
              <select
                id="property-type"
                className="mt-1 block w-full p-3 text-lg border border-gray-300 rounded-xl bg-slate-100 shadow-sm"
              >
                <option value="house">Property type</option>
                <option value="house">Bungalow</option>
                <option value="house">Duplex</option>
                <option value="apartment">Penthouse</option>
              </select>
            </div>
            <button className="w-full py-4 px-4 bg-[#9FA007] text-white font-medium rounded-full shadow-sm hover:bg-[#8f8f4d]">
              Search Property
            </button>
          </div>
          <div className="bg-white">
            <SectionL />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-4 ">
          <Section />
         
          <div className="flex lg:items-start lg:justify-start lg:py-[7%] space-x-10  lg:ml-0 lg:w-[100%] p-10 lg:p-0 ">
            <button className="p-3 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[6%] ">
              &lt; {/* Left Arrow */}
            </button>
            <div className="flex items-center  lg:w-[100%] space-x-10">
              <button className="p-[13px] bg-[#b3b328] text-gray-700 rounded-md shadow-sm hover:bg-[#626215] lg:w-[6%]  ">
                1
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[6%]">
                2
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[6%]">
                ...
              </button>
              <button className="p-[13px] bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[6%]">
                10
              </button>
              <button className="p-3 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 lg:w-[6%]">
               &gt;
               {/* /* Right Arrow  */} 
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PropertySearchLayout;
